const Customer = require('../database/Customer');

const getAllOrders = async (customerId) => {
    allOrders = await Customer.getAllOrders(customerId);
    allOrders.totalCost = 0;
    for(let i = 0; i < allOrders.orders.length; i++) {
        allOrders.orders[i].totalCost = 0;
        for(let j = 0; j < allOrders.orders[i].product.length; j++) {
            allOrders.orders[i].totalCost += allOrders.orders[i].product[j].amount * allOrders.orders[i].product[j].product.price;
        }
        allOrders.orders[i].totalCost += allOrders.orders[i].delivery_cost;
        allOrders.totalCost += allOrders.orders[i].totalCost;
        delete allOrders.orders[i].product;
    }
    return allOrders;
};

module.exports = {
    getAllOrders
};