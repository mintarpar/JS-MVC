const { DataTypes } = require("sequelize");
const { sequelize } = require("../db.js");

const Book = sequelize.define("book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATEONLY
    },
    subject: {
        type: DataTypes.INTEGER
    }
});

module.exports = Book;
