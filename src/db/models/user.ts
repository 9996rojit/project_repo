/* eslint-disable no-param-reassign */
import { Sequelize, DataTypes } from 'sequelize'
import type from './type';

const bcrypt = require('bcryptjs')
const db = require('@/helper/databaseConnector');

const User = db.sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  // Model attributes are defined here
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // add dob of a user
  role: {
    type: DataTypes.ENUM('CEO', 'USER'),
    defaultValue: 'USER',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country_code: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '+977'
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
    defaultValue: 'Male',
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  is_premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  plan_type: {
    type: DataTypes.ENUM('Free', 'Gold', 'Platinume', 'Diamond'),
    defaultValue: 'Free'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  timestamps: true
  // Other model options go here
});


User.addHook('beforeCreate', async (user: any, options: any) => {
  const salt = await bcrypt.genSaltSync(12)
  user.password = bcrypt.hashSync(user.password, salt)
})


User.belongsTo(type, { foreignKey: { field: 'type_id', allowNull: false } })

User.sync({ alter: true })

export default User