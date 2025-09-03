import mongoose from "mongoose";
const { Schema } = mongoose;

// Each user has at most one cart document; items are embedded
const cartItemSchema = new Schema(
  {
    product: { 
        type: Schema.Types.ObjectId, 
        ref: "Product", 
        required: true, 
        index: true 
    },
    quantity: { 
        type: Number, 
        required: true,
        min: 1, 
        max: 50,
        default: 1 
    },
    name: { 
        type: String, trim: true 
    },
    image: { 
        type: String, trim: true 
    },
    unitPrice: { 
        type: Number, min: 0 
    },
    currency: { 
        type: String, uppercase: true, trim: true, default: "INR" 
    },
    // selected weight/size variant info (mirrors product.weights entry)
    selectedWeightLabel: { type: String, trim: true },
    grams: { type: Number, min: 1 },
    weightPriceOverride: { type: Number, min: 0 }
  },
  { _id: false }
);

const cartSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true, 
        unique: true, 
        index: true 
    },
    items: { 
        type: [cartItemSchema], 
        default: [] 
    },
    // Derived totals (can be recalculated on read/write)
    totalItems: { 
        type: Number, 
        default: 0, 
        min: 0 
    },
    subtotal: { 
        type: Number, 
        default: 0, 
        min: 0 
    },
    currency: { 
        type: String, 
        uppercase: true, 
        trim: true, 
        default: "INR" 
    }
  },
  { timestamps: true }
);

cartSchema.pre("save", function (next) {
    let items = this.items || [];
    // merge duplicates (same product + selectedWeightLabel)
    const map = new Map();
    for (const it of items) {
        const key = `${it.product.toString()}::${it.selectedWeightLabel || ''}`;
        if (!map.has(key)) {
            map.set(key, { ...it.toObject() });
        } else {
            const existing = map.get(key);
            existing.quantity = Math.min(50, (existing.quantity || 0) + (it.quantity || 0));
        }
    }
    items = Array.from(map.values());
    // enforce max quantity & non-negative
    items.forEach(it => {
        if (it.quantity < 1) it.quantity = 1;
        if (it.quantity > 50) it.quantity = 50;
    });
    this.items = items;
    this.totalItems = items.reduce((acc, it) => acc + (it.quantity || 0), 0);
    this.subtotal = items.reduce((acc, it) => {
        const price = typeof it.weightPriceOverride === 'number' ? it.weightPriceOverride : it.unitPrice || 0;
        return acc + price * (it.quantity || 0);
    }, 0);
    next();
});

export const Cart = mongoose.model("Cart", cartSchema);
