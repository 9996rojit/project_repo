import { DataTypes } from 'sequelize'
import product from './product';
import User from './user';

const db = require('@/helper/databaseConnector');

const cart = db.sequelize.define('carts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    // Model attributes are defined here
    permission_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    o_id: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {
    timestamps: true
    // Other model options go here
});
User.hasOne(cart, { foreignKey: 'user_id' });
product.hasone(cart, { foreignKey: { field: 'product_id', allowNull: false } })

cart.sync({ alter: false })

export default cart