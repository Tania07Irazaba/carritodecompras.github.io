const Cart = require ("../Models/Cart");

const GetProductsCart = async (req, res) => {
    const GetProductsCart = await Cart.find();

    if(productsCart) {
        res.json({ productsCart });
    } else {
        res.json({ mensaje: "No hay productos" });
    }
};

module.exports = GetProductsCart;
