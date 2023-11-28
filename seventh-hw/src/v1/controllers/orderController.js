const orderService = require("../services/orderService");

const deleteOrder = (req, res) => {
    const orderId = parseInt(req.params.id);
    const deletedOrder = orderService.deleteOrder(orderId);
    deletedOrder
        .then((order) => {
            res.status(200).json(order);
        })
        .catch((error) => {
            res.status(404).send("Order with such id not found!");
        });
};

module.exports = {
    deleteOrder
};