const Order = require('../database/Order');

const deleteOrder = (orderId) => {
    const deletedOrder = Order.deleteOrder(orderId);
    return deletedOrder;
};

module.exports = {
    deleteOrder
};