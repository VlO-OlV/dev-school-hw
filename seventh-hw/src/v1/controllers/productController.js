const productService = require("../services/productService");

const addProduct = (req, res) => {
    const product = req.body;
    const addProduct = productService.addProduct(product);
    addProduct
        .then((addedProduct) => {
            res.status(201).json(addedProduct);
        })
        .catch((error) => {
            res.status(403).send("Invalid product category!");
        });
};

module.exports = {
    addProduct
};