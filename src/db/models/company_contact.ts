import { Sequelize, DataTypes } from 'sequelize'
import company from './company';
import user from './user';

const db = require('@/helper/databaseConnector');

console.log("🚀 ~ file: company_contact.ts:6 ~ db:", db);

const companyContact = db.sequelize.define('Company_contacts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
});

user.hasOne(companyContact, { foreignKey: 'user_id' })
company.hasOne(companyContact, { foreignKey: 'company_id' })
companyContact.sync({ alter: true })

export default companyContact