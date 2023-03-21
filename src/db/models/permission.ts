import { Sequelize, DataTypes } from 'sequelize'

const db = require('@/helper/databaseConnector');

const permission = db.sequelize.define('Permissions', {
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
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permission: {
    type: DataTypes.JSONB,
    allowNull: false
  },

}, {
  timestamps: true
  // Other model options go here
});
permission.sync({ alter: false })

export default permission