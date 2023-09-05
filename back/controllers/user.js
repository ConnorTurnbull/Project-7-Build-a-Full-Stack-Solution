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
    User.findOne({where:{ email: req.body.email }}).then(
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
                        { userId: user._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' });
                    res.status(200).json({
                        userId: user._id,
                        token: token,
                        user: user._doc
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
    User.findOne({where:{ _id: req.body.userId }}).then(
        (user) => {
            if (!user) {
                return res.status(404).json({
                    error: new Error('User not found!')
                });
            }
            User.deleteOne({where:{ _id: req.body.userId }}).then(
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

exports.read = async (req, res) => {
    const userId = req.body.userId
    const postId = req.body.postId

    const user = await User.findOne({where:{ _id: userId }})
        .then(async (user) => {
            if (user.viewedPosts.includes(postId)) {
                return user
            }
            user.viewedPosts.push(postId)
            const saved = await user.save()
                .then(
                    () => {
                        return true
                    }
                ).catch(
                    (error) => {
                        res.status(400).json({
                            error: error
                        });
                        return false
                    }
                );
            if (saved) {
                return user
            } else {
                return null
            }
        }).catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
                return null
            }
        );
    if (!user) {
        return
    }
}
