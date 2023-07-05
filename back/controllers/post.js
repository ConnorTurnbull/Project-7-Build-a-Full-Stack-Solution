const Post = require('../models/post');

exports.newPost = (req, res, next) => {
    // req.body = JSON.parse(req.body);
    const url = req.protocol + '://' + req.get('host');
    const post = new Post({
        selectedThread: req.body.selectedThread,
        postTitle: req.body.postTitle,
        text: req.body.postText,
        imageUrl: url + '/images/' + req.body.imageUrl,
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
  const options = {}
  if (req.query.selectedThread) {
    options.selectedThread = req.query.selectedThread
  }
  Post.find(options).then(
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