const Post = require('../models/post');
const User = require('../models/user');

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
  Post.findAll({where:options}).then(
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
    where:{id: req.query.id},
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
  Post.findAll().then(
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

exports.read = async (req, res, next) => {
  const userId = req.body.userId
  const postId = req.body.postId

  const post = await Post.findOne({ where: { id: postId }})
    .then(async (post) => {
      if (post.viewedBy.indexOf(userId)) {
        return post
      }
      post.viewedBy.push(userId)
      const saved = await post.save()
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
        return post
      } else {
        return null
      }
    }).catch(
      (error) => {
        res.status(404).json({
          error: error,
          message: "Post not found"
        });
        return null
      }
    );
  if (!post) {
    return
  }

  User.findOne({where:{ id: userId }})
    .then(async (user) => {
      if (user.viewedPosts.indexOf(postId)) {
        return res.status(401).json({
          error: "Already Subscribed!"
      }) 
      }
      user.viewedPosts.push(postId)
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
