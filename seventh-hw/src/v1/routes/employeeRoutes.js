const express = require("express");
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.patch('/:id', employeeController.updateEmployee);

module.exports = router;