import { DataTypes } from 'sequelize'
import company from './company';
import category from './category';

const db = require('@/helper/databaseConnector');

const product = db.sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_image: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    moq: {
        type: DataTypes.INTEGER,
        required: true
    },
}, {
    timestamps: true
    // Other model options go here
});

category.hasOne(product, { foreignKey: { field: 'category_id', allowNull: false } })
company.hasMany(product, { foreignKey: { field: 'company_id', allowNull: false } })


product.sync({ alter: false })

export default product