const Employee = require('../database/Employee');

const updateEmployee = (employeeId, employee) => {
    const updatedEmployee = Employee.updateEmployee(employeeId, employee);
    return updatedEmployee;
};

module.exports = {
    updateEmployee
};