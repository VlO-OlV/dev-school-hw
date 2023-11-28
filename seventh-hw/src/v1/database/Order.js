const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const deleteOrder = (orderId) => {
    const deletedOrder = prisma.order.delete({
        where: {
            id: orderId
        }
    });
    return deletedOrder;
};

module.exports = {
    deleteOrder
};