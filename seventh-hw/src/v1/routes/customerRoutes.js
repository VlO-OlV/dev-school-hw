const express = require("express");
const customerController = require('../controllers/customerController');

const router = express.Router();

router.get('/:id/orders', customerController.getCustomerOrders);

module.exports = router;