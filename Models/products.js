const { model, Schema } = require("mongoose");

const CartSchema = new Schema({
    name: {type: String, required: true, unique: true },
    img: { type: String, required: true },
    inCart: { type: Boolean, required: false },
    price: { type: Number, required: true },
});

module.exports = model("product", productSchema);