





const mongoose = require('mongoose');


const cartItemSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  caption: { type: String, required: true },
  price: { type: Number, required: true },
  productId: { type: String, required: true },
  productImage: { type: String, required: true }
});


const CartItem = mongoose.model('CartItem', cartItemSchema);


module.exports=CartItem;