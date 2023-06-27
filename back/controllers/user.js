const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = ( req, res, next ) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'User Created Successfully'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    ).catch( error => {
        res.status(500).json({
            error: error, message: 'bcrypt hash failed'
        })
    })
};

exports.login = ( req, res, next ) => {
    console.log(req.body)

    User.findOne({ email: req.body.email }).then(
        (user) => {
            if (!user) {
                return res.status(404).json({
                    error: new Error('User not found!')
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect Password!')
                        });
                    }
                    const token =jwt.sign(
                        { userId: user._id},
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h'});
                    res.status(200).json({
                        userId: user._id,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
};


// copy from like/dislike from p6?

exports.subscribe = ( req, res, next ) => {
    console.log(req.body)

    User.findOne({ _id: req.params._id }).then(
        (user) => {

        }
    )
}