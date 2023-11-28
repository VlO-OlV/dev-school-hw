const customerService = require("../services/customerService");

const getCustomerOrders = (req, res) => {
    allOrders = customerService.getAllOrders(parseInt(req.params.id));
    allOrders
        .then((orders) => {
            res.status(200).json(orders);
        })
        .catch((error) => {
            res.status(404).send("Customer with such id not found!")
        });
};

module.exports = {
    getCustomerOrders
};