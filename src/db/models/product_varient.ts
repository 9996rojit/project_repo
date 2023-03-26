import { DataTypes } from 'sequelize'
import product from './product';

const db = require('@/helper/databaseConnector');

const productVarient = db.sequelize.define('productVarients', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productDescriptionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    product_size: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    product_color: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    product_protection: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    product_customization: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
    },

}, {
    timestamps: true
    // Other model options go here
});


productVarient.belongsTo(product, { foreignKey: { field: 'product_id', allowNull: false } })


productVarient.sync({ alter: false })

export default productVarient