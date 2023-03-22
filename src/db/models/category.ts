import { Sequelize, DataTypes } from 'sequelize'

const db = require('@/helper/databaseConnector');

const category = db.sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    category_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_image: {
        type: DataTypes.STRING,
        DafaultValue: 'https://cdn-icons-png.flaticon.com/512/2088/2088090.png',
        allowNull: false
    },
    category_slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subCategory_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    timestamps: true
    // Other model options go here
});


category.sync({ alter: false })

export default category