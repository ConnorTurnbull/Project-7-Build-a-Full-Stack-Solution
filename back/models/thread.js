const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

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
        allowNull: false
    },
    
})

Thread.sync().then((data) => {
    console.log("Table synced successfully")
}).catch((error) => {
    console.log("Error syncing table!")
})