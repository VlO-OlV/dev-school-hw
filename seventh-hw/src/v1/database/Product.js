const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addProduct = (product) => {
    const addedProduct = prisma.product.create({
        data: {
            name: product.name,
            category: product.category,
            amount: product.amount,
            price: product.price
        }
    });
    return addedProduct;
};

module.exports = {
    addProduct
};