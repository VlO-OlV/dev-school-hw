const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const updateEmployee = (employeeId, employee) => {
    const updatedEmployee = prisma.employee.update({
        where: {
            id: employeeId
        },
        data: {
            first_name: employee.firstName,
            last_name: employee.lastName,
            middle_name: employee.middleName,
            position: employee.position
        }
    });
    return updatedEmployee;
};

module.exports = {
    updateEmployee
};