const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllOrders = (customerId) => {
    const orders = prisma.customer.findUnique({
        where: {
            id: customerId
        },
        select: {
            orders: {
                include: {
                    product: {
                        select: {
                            amount: true,
                            product: true
                        }
                    }
                }
            }
        }
    });
    return orders;
};

module.exports = {
    getAllOrders
};