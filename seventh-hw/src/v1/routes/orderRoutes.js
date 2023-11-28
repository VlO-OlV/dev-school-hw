const express = require("express");
const orderController = require('../controllers/orderController');

const router = express.Router();

router.delete('/:id', orderController.deleteOrder);

module.exports = router;