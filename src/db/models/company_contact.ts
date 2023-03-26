import { Sequelize, DataTypes } from 'sequelize'
import company from './company';
import user from './user';

const db = require('@/helper/databaseConnector');



const companyContact = db.sequelize.define('Company_contacts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },

}, {
  timestamps: true
  // Other model options go here
});

user.hasOne(companyContact, { foreignKey: 'user_id' })
company.hasOne(companyContact, { foreignKey: 'company_id' })
companyContact.sync({ alter: false })

export default companyContact