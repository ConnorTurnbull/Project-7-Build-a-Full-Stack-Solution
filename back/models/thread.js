const { DataTypes } = require('sequelize');
const sequelize = require("../connect");

const Thread = sequelize.define('Thread', {
    title: {
        type:DataTypes.STRING,
        allowNull: false
    },
    description: {
        type:DataTypes.STRING,
        allowNull: false
    },
    usersSubscribed: {
        type:DataTypes.STRING,
        defaultValue: ""
    },
    
})

module.exports = Thread;

Thread.sync().then((data) => {
    console.log("Table synced successfully")
}).catch((error) => {
    console.log("Error syncing table!")
})