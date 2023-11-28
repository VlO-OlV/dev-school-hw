const Product = require('../database/Product');

const addProduct = (product) => {
    const addedProduct = Product.addProduct(product);
    return addedProduct;
};

module.exports = {
    addProduct
};