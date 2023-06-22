const Post = require('../models/post');

exports.newPost = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const post = new Post({
        selectedThread: req.body.selectedThread,
        postTitle: req.body.postTitle,
        text: req.body.text,
        imageUrl: url + '../images/' + req.file.filename,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        userId: req.body.userId
    });

    post.save().then(
        () => {
            res.status(201).json({
                message: "Post created successfully"
            });
        },
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );    
}

exports.getPost = (req, res, next) => {
    Post.find().then(
      (posts) => {
        return res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        return res.status(400).json({
          error: error
        });
      }
    );
  };