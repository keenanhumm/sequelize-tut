require('dotenv').config();

module.exports = {
  development: {
    database: 'sequelize_dev',
    dialect: 'postgres',
    host: '127.0.0.1',
    password: 'root',
    username: 'myuser',
  },
};
