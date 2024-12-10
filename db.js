const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('me', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    promise: true
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
