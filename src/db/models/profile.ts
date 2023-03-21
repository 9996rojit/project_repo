import { Sequelize, DataTypes } from 'sequelize'
import company from './company';
import user from './user';

const db = require('@/helper/databaseConnector');

const profile = db.sequelize.define('Profiles', {

  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  profile_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },

  cover_image: {
    type: DataTypes.STRING,
    DefaultValue: 'https://cdn-icons-png.flaticon.com/512/2088/2088090.png'
  },
  profile_image: {
    type: DataTypes.BLOB('medium'),
    allowNull: false
  },

}, {
  // Other model options go here
  timestamps: true
});

user.hasOne(profile, { foreignKey: 'user_id' });
company.hasOne(profile, { foreignKey: 'company_id' })

profile.sync({ alter: false })

export default profile