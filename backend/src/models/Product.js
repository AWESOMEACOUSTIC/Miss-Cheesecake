import mongoose from 'mongoose';
const { Schema } = mongoose;

const priceSchema = new Schema({
	amount: { 
        type: Number, required: true, min: 0 
    },
	currency: { 
        type: String, required: true, uppercase: true, trim: true, default: 'INR' 
    }
}, { _id: false });


const weightOptionSchema = new Schema({
	label: { 
        type: String, 
        trim: true 
    },
	grams: { 
        type: Number, 
        min: 1 
    },
	amount: { 
        type: Number, 
        min: 0 
    }
}, { _id: false });


const productSchema = new Schema({
	name: { 
        type: String, required: true, trim: true, minlength: 2, maxlength: 320 
    },
	slug: { 
        type: String, required: true, trim: true, lowercase: true, unique: true, index: true 
    },
	description: { 
        type: String, 
        trim: true, 
        maxlength: 5000 
    },
	images: [{ 
        type: String, 
        trim: true 
    }],
	price: { 
        type: priceSchema, 
        required: true 
    },
	weights: [weightOptionSchema],
	defaultWeightLabel: { 
        type: String, 
        trim: true 
    },
	stock: { 
        type: Number, 
        default: 0, 
        min: 0 
    },
	active: { 
        type: Boolean, 
        default: true 
    },
	featured: { 
        type: Boolean, 
        default: false 
    },
	categories: [{ 
        type: String, 
        trim: true, 
        lowercase: true 
    }],
	tags: [{ 
        type: String, 
        trim: true, 
        lowercase: true 
    }],
	flavor: { 
        type: String, 
        trim: true, 
        lowercase: true 
    }
}, { timestamps: true });

productSchema.index({ active: 1, 'price.amount': 1 });
productSchema.index({ categories: 1, active: 1 });
productSchema.index({ tags: 1, active: 1 });

const Product = mongoose.model('Product', productSchema);
export default Product;
