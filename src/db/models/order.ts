import { DataTypes } from 'sequelize'
import cart from './cart';


const db = require('@/helper/databaseConnector');

const order = db.sequelize.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    // Model attributes are defined here
    order_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    transaction_no: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
    // Other model options go here
});

cart.hasOne(order, { foreignKey: { field: 'cart_id', allowNull: false } })





order.sync({ alter: false })

export default order