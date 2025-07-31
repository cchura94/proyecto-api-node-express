const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_biblioteca4', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;