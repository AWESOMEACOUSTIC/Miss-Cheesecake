import mongoose from "mongoose";
const { Schema } = mongoose;

const orderItemSchema = new Schema(
  {
    product: { 
        type: Schema.Types.ObjectId, 
        ref: "Product", 
        required: true 
    },
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    image: { 
        type: String, 
        trim: true 
    },
    unitPrice: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    currency: { 
        type: String, 
        required: true, 
        uppercase: true, 
        trim: true, 
        default: "INR" 
    },
    quantity: { 
        type: Number, 
        required: true, 
        min: 1 
    },
    // captured weight selection (if applicable)
    selectedWeightLabel: { 
        type: String, 
        trim: true 
    },
    grams: { 
        type: Number, 
        min: 1 
    }
  },
  { _id: false }
);

const paymentSchema = new Schema(
  {
    provider: { 
        type: String, 
        enum: ["stripe", "razorpay", "cod", "other"], 
        default: "other" 
    },
    status: { 
        type: String, 
        enum: ["pending", "authorized", "paid", "failed", "refunded"], 
        default: "pending" 
    },
    transactionId: { 
        type: String, 
        trim: true 
    },
    raw: { 
        type: Schema.Types.Mixed, 
        select: false 
    }
  },
  { _id: false, timestamps: false }
);

const addressSchema = new Schema(
  {
    fullName: { 
        type: String, 
        trim: true 
    },
    line1: { 
        type: String, 
        trim: true 
    },
    line2: { 
        type: String, 
        trim: true 
    },
    city: { 
        type: String, 
        trim: true 
    },
    state: { 
        type: String, 
        trim: true 
    },
    postalCode: { 
        type: String, 
        trim: true 
    },
    country: { 
        type: String, 
        trim: true, 
        default: "IN" 
    },
    phone: { 
        type: String, 
        trim: true 
    }
  },
  { _id: false }
);

const discountLineSchema = new Schema({
  code: { 
      type: String, 
      trim: true 
  },
  description: { 
      type: String, 
      trim: true 
  },
  amount: { 
      type: Number, 
      required: true, 
      min: 0 
  }
}, { _id: false });

const eventSchema = new Schema({
  type: { 
      type: String, 
      trim: true 
  },
  at: { 
      type: Date, 
      default: Date.now 
  },
  note: { 
      type: String, 
      trim: true 
  }
}, { _id: false });

const orderSchema = new Schema(
  {
    orderNumber: { 
        type: String, unique: true, index: true, trim: true 
    },
    user: { 
        type: Schema.Types.ObjectId, ref: "User", required: true, index: true 
    },
    items: { 
        type: [orderItemSchema], required: true, validate: v => Array.isArray(v) && v.length > 0 
    },
    currency: { 
        type: String, required: true, uppercase: true, trim: true, default: "INR" 
    },
    subtotal: { 
        type: Number, required: true, min: 0 
    },
    shippingFee: { 
        type: Number, required: true, min: 0, default: 0 
    },
    discount: { 
        type: Number, required: true, min: 0, default: 0 
    }, // legacy simple discount
    discounts: { 
        type: [discountLineSchema], default: [] 
    },
    discountTotal: { 
        type: Number, required: true, min: 0, default: 0 
    },
    total: { 
        type: Number, required: true, min: 0 
    },
    status: { 
        type: String, enum: ["created", "paid", "preparing", "shipped", "delivered", "cancelled"], default: "created", index: true 
    },
    payment: { 
        type: paymentSchema, default: () => ({}) 
    },
    shippingAddress: { 
        type: addressSchema 
    },
    notes: { 
        type: String, trim: true 
    },
    // Timeline events & timestamps
    events: { 
        type: [eventSchema], default: [] 
    },
    paidAt: { 
        type: Date 
    },
    shippedAt: { 
        type: Date 
    },
    deliveredAt: { 
        type: Date 
    },
    canceledAt: { 
        type: Date 
    },
    cancelReason: { 
        type: String, trim: true 
    }
  },
  { timestamps: true }
);

// Basic invariant: total = subtotal + shippingFee - discount (non-negative)
orderSchema.pre("validate", function (next) {
  // recompute subtotal from items for integrity (if items changed)
  if (Array.isArray(this.items)) {
    const sum = this.items.reduce((acc, it) => acc + (it.unitPrice || 0) * (it.quantity || 0), 0);
    this.subtotal = typeof this.subtotal === 'number' && this.subtotal > 0 ? this.subtotal : sum;
  }
  // compute discountTotal from discounts array
  this.discountTotal = (this.discounts || []).reduce((acc, d) => acc + (d.amount || 0), 0);
  const combinedDiscount = (this.discount || 0) + (this.discountTotal || 0);
  const calcTotal = Math.max(0, (this.subtotal || 0) + (this.shippingFee || 0) - combinedDiscount);
  this.total = calcTotal;
  // payment/status coupling
  if (this.payment && this.payment.status === 'paid' && this.status === 'created') {
    this.status = 'paid';
    if (!this.paidAt) this.paidAt = new Date();
    this.events.push({ type: 'status', note: 'Auto status transition to paid' });
  }
  // cancellation timestamp
  if (this.status === 'cancelled' && !this.canceledAt) {
    this.canceledAt = new Date();
    this.events.push({ type: 'status', note: 'Order cancelled' });
  }
  // orderNumber generation (simple; improve with sequence service later)
  if (!this.orderNumber) {
    this.orderNumber = 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2,7).toUpperCase();
  }
  next();
});


orderSchema.index({ createdAt: -1 });
orderSchema.index({ status: 1, createdAt: -1 });
orderSchema.index({ user: 1, createdAt: -1 });


export const Order = mongoose.model("Order", orderSchema);
