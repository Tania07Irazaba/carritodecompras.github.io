const Cart = require("../Models/Cart");
const Product = require("../Models/Products");

const deleteProduct = async (req, res) => {
    const { productId } = req.params;

    /* Buscamos el producto en el carrito */
    const productInCart = await Cart.findById(productId);

    /* Buscamos el producto en nuestro DB por el nombre del que esta en el carrito */
    const { name, img, price, _id } = await Product.findOne({
        name : productInCart.name,
    });

    /* Buscamos y eliminamos el producto con la Id */
    await Cart.findByIdAndDelete(productId);

    await Product.findByIdAndUpdate(
        _id,
        { inCart: false, name, img, price },
        { new: true }
    )
        .then((product) => {
            res.json({
                mensaje: `El producto: ${product.name} fue eliminado del carrito`,
            });
        })
        .catch((error) => res.json({mensaje: "Hubo un error " }));
};

module.exports = deleteProduct;
