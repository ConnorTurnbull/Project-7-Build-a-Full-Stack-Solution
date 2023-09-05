const { DataTypes } = require('sequelize');
const sequelize = require("../connect");

const User = sequelize.define('User', {
    forename: {
        type:DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    },
    threads: {
        type:DataTypes.STRING,
        defaultValue: ""
    },
    viewedPosts: {
        type:DataTypes.STRING,
        defaultValue: ""
    }

});

module.exports = User;

User.sync().then((data) => {
    console.log("Table synced successfully")
}).catch((error) => {
    console.log("Error syncing table!")
    console.log(error)
})