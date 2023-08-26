const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Post = sequelize.define('Post', {
    selectedThread: {
        type:DataTypes.STRING,
        allowNull: false
    },
    postTitle: {
        type:DataTypes.STRING,
        allowNull: false
    },
    text: {
        type:DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type:DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type:DataTypes.STRING,
        allowNull: false
    },
})

Post.sync().then((data) => {
    console.log("Table synced successfully")
}).catch((error) => {
    console.log("Error syncing table!")
})