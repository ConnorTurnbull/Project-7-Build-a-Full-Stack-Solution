const Post = require('../models/post');

exports.newPost = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    selectedThread: req.body.selectedThread,
    postTitle: req.body.postTitle,
    text: req.body.postText,
    imageUrl: url + '/images/' + req.file.filename,
    userId: req.body.userId,
    comments: req.body.comments
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

exports.getPosts = (req, res, next) => {
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

exports.getSinglePost = (req, res, next) => {
  Post.findOne({
    _id: req.query.id,
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.getAllPosts = (req, res, next) => {
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
}

//DOESN'T WORK
exports.newComment = (req, res, next) => {
  Post.findOne({
    _id: req.body.id
  })
    .then(
      Post.comments.push(req.body.comment)
    ).catch(
      (error) => {
        return res.status(400).json({
          error: error
        });
      }
    );
}