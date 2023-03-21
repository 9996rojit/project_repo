import { Sequelize, DataTypes } from 'sequelize'
import user from './user';

const db = require('@/helper/databaseConnector');

const company = db.sequelize.define('companies', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },
  // Model attributes are defined here

  company_name: {
    type: DataTypes.STRING,
  },
  company_address: {
    type: DataTypes.STRING
  },
  company_type: {
    type: DataTypes.STRING
  },
  company_email: {
    type: DataTypes.STRING
  },
  company_size: {
    type: DataTypes.ENUM('small', 'medium', 'large'),
    defaultValue: 'small'
  },
  company_employee_number: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

}, {
  timestamps: true
  // Other model options go here
});

company.belongsTo(user, { foreignKey: 'user_id' })
company.sync({ alter: false })

export default company