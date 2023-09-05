const { Sequelize } = require('sequelize')

//Database Connection:
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './project7.db'
});

sequelize.authenticate().then( () => {
    console.log('Connection has been established successfully.');
}).catch (error => {
    console.error('Unable to connect to the database:', error);
})

module.exports = sequelize;