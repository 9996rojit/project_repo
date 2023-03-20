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
  created_at: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updated_at: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
});


Type.belongsTo(permission, { foreignKey: 'permission_id' })

Type.sync({ alter: false })

export default Type