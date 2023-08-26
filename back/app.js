const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { Sequelize } = require('sequelize')

const userRoutes = require('./routes/user');
const threadRoutes = require('./routes/thread');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

const app = express();
app.use(express.json());

//Database Connection:
const sequelize = new Sequelize('sqlite::memory:')

sequelize.authenticate().then( () => {
    console.log('Connection has been established successfully.');
}).catch (error => {
    console.error('Unable to connect to the database:', error);
})

//Headers:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/auth', threadRoutes);
app.use('/api/auth', postRoutes);
app.use('/api/auth', commentRoutes);



module.exports = app;
