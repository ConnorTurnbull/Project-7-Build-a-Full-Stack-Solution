const { DataTypes } = require('sequelize');
const sequelize = require("../connect");

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
        defaultValue: ""
    },
    viewedBy: {
        type:DataTypes.STRING,
        defaultValue: ""
    }
})

module.exports = Post;

Post.sync({ alter: true }).then((data) => {
    console.log("Table synced successfully")
}).catch((error) => {
    console.log("Error syncing table!")
})