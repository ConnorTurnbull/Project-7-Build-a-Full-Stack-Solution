const Comment = require('../models/comment');
const Post = require('../models/post')

exports.newComment = async (req, res) => {
    const postId = req.body.postId
    const commentId = req.body._id

    const comment = new Comment({
        text: req.body.text,
        userId: req.body.userId,
        postId: req.body.postId
    });

    comment.save().then(
        () => {
            res.status(201).json({
                message: "Comment posted successfully"
            });
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
            console.log(commentId)
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
                return post
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
    Comment.find().then(
        (comments) => {
            return res.status(200).json(comments)
        }
    ).catch(
        (error) => {
            return res.status(400).json({
                error: error
            });
        }
    );
}