import { Sequelize, DataTypes } from 'sequelize'

const db = require('@/helper/databaseConnector');

const brand = db.sequelize.define('brands', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    brand_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    brand_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand_description: {
        type: DataTypes.STRING,
        allowNull: false
    }




}, {
    timestamps: true
    // Other model options go here
});


brand.sync({ alter: false })

export default brand