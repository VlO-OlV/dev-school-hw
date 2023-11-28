const employeeService = require("../services/employeeService");

const updateEmployee = (req, res) => {
    const employee = req.body;
    const employeeId = parseInt(req.params.id);
    const updatedEmployee = employeeService.updateEmployee(employeeId, employee);
    updatedEmployee
        .then((employee) => {
            res.status(200).json(employee);
        })
        .catch(() => {
            res.status(404).send("Employee with such id not found!");
        });
};

module.exports = {
    updateEmployee
};