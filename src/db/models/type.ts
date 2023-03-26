import { Sequelize, DataTypes } from 'sequelize'
import permission from './permission';

const db = require('@/helper/databaseConnector');

const Type = db.sequelize.define('Types', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },
  type_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  // Other model options go here
  timestamps: true
});


Type.belongsTo(permission, { foreignKey: { field: 'permission_id', allowNull: false } })

Type.sync({ alter: false })

export default Type