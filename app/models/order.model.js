module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        buyerId: {
            type: Sequelize.INTEGER
        },
        sellerId: {
            type: Sequelize.INTEGER
        },
    });
    return Order;
};