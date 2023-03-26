import { DataTypes } from 'sequelize'
import product from './product';

const db = require('@/helper/databaseConnector');

const productDetails = db.sequelize.define('productDetails', {
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
    product_Description: {
        type: DataTypes.JSONB,
    },
    product_Verificationn: {
        type: DataTypes.JSONB,
    },
    product_transaction: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
    },

}, {
    timestamps: true
    // Other model options go here
});


productDetails.belongsTo(product, { foreignKey: { field: 'product_id', allowNull: false } })


productDetails.sync({ alter: false })
export default productDetails