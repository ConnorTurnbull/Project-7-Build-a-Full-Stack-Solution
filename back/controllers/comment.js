const Comment = require('../models/comment');
const Post = require('../models/post')

exports.newComment = async (req, res) => {
    const postId = req.body.postId

    const comment = new Comment({
        text: req.body.text,
        userId: req.body.userId,
        postId: req.body.postId
    });

    const commentId = comment._id

    const savedComment = await comment.save().then(
        (c) => {
            return c;
        },
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );

    const post = await Post.findOne({ _id: postId })
        .then(async (post) => {
            post.comments.push(commentId)
            const saved = await post.save(
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
            if (saved) {
                return res.status(201).json({
                    message: "Comment posted succesfully!"
                })
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
}

exports.getComments = (req, res) => {
    const options = {}
    if (req.query.postId) {
        options.postId = req.query.postId
    }
    Comment.find(options).then(
        (comments) => {
            return res.status(200).json(comments);
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                error: error
            });
        }
    );
}