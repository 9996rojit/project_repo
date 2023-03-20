import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 9900,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_USERNAME: process.env.DB_USERNAME || 'admin',
  DB_PASSWORD: process.env.DB_PASSWORD || 'admin',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_DIALECT: process.env.DB_DIALECT || 'postgres',
  DB_PORT: process.env.DB_PORT || '5432'

};
