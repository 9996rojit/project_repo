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
  role: {
    type: DataTypes.ENUM,
    values: ['CEO', 'USER'],
    defaultValue: 'USER',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country_code: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '+977'
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM,
    values: ['Male', "Female", "Other"],
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
    type: DataTypes.ENUM,
    values: ["Free", "Gold", "Platinume", "Diamond"],
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


User.belongsTo(type, { foreignKey: 'type_id' })

User.sync({ alter: false })

export default User