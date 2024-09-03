import mongoose from 'mongoose';

console.log('controller');
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    images: { type: [String] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const Product = mongoose.model('Product', productSchema);

export default Product;
