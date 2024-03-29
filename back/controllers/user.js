const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                forename: req.body.forename,
                surname: req.body.surname,
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
    ).catch(error => {
        res.status(500).json({
            error: error, message: 'bcrypt hash failed'
        })
    })
};

exports.login = (req, res, next) => {
    console.log(req.body)
    User.findOne({ where: { email: req.body.email } }).then(
        (user) => {
            console.log(user)
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
                    const token = jwt.sign(
                        { userId: user.id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' });
                    res.status(200).json({
                        userId: user.id,
                        token: token,
                        user: user
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

exports.delete = (req, res, next) => {
    console.log(req.body)
    User.findOne({ where: { id: req.body.userId } }).then(
        (user) => {
            if (!user) {
                return res.status(404).json({
                    error: new Error('User not found!')
                });
            }
            User.destroy({ where: { id: req.body.userId } }).then(
                () => {
                    res.status(200).json({
                        message: "User Deleted!"
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            )
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    )
}

exports.read = async (req, res, next) => {
    const userId = req.body.userId
    const postId = req.body.singlePostId

    User.findOne({ where: { id: userId } })
        .then(async (user) => {
            if (user.viewedPosts.indexOf(postId) !== -1) {
                return res.status(401).json({
                    error: "Already viewed!"
                })
            }
            if (user.viewedPosts.length) {
                user.viewedPosts += `,${postId}`
            } else {
                user.viewedPosts = postId
            }
            user.save().then(
                () => {
                    return res.status(200).json({
                        message: "Post marked as read"
                    })
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }).catch(
            (error) => {
                res.status(404).json({
                    error: error,
                    message: "User not found"
                });
                return null
            }
        );
}