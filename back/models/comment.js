const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Comment = sequelize.define('Comment', {
    text: {
        type:DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type:DataTypes.STRING,
        allowNull: false
    },
    postId: {
        type:DataTypes.STRING,
        allowNull: false
    },
    forename: {
        type:DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type:DataTypes.STRING,
        allowNull: false
    },
})

Comment.sync().then((data) => {
    console.log("Table synced successfully")
}).catch((error) => {
    console.log("Error syncing table!")
})