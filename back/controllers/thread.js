const Thread = require('../models/thread');
const User = require('../models/user');

exports.newThread = (req, res, next) => {

  const thread = new Thread({
    title: req.body.title,
    description: req.body.description
  });

  thread.save().then(
    () => {
      res.status(201).json({
        message: "Thread created successfully"
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

exports.getThread = async (req, res, next) => {

  const options = {}
  if (req.query.userId) {
    const userThreads = await User.findOne().then(
      (user) => {
        // console.log(user)
        return user.threads
      }
    )
    if (!userThreads || !userThreads.length) {
      // console.log(userThreads)
      return res.status(404).json({
        message: 'No threads found'
      })
    }
    options.id = userThreads
  }
  else if (req.query.title) {
    options.title = { $regex: new RegExp(req.query.title, "i") }
  }
  // console.log(options)

  Thread.findAll({where:options}).then(
    (threads) => {
      // console.log(threads)
      return res.status(200).json(threads);
    }
  ).catch(
    (error) => {
      return res.status(400).json({
        error: error
      });
    }
  );
};

exports.subscribe = async (req, res) => {
  const threadId = req.body.threadId
  const userId = req.body.userId
  // console.log(threadId, userId)

  const thread = await Thread.findAll({where:{ id: threadId }})
    .then(async (threads) => {
      console.log(threads)
      const thread = threads[0]
      if (thread.usersSubscribed.indexOf(userId)!== -1) {
        return thread
      }
      if (thread.usersSubscribed.length) {
        thread.usersSubscribed+=`,${userId}`
      } else {
        thread.usersSubscribed = userId
      }
      const saved = await thread.save()
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
        return thread
      } else {
        return null
      }
    }).catch(
      (error) => {
        res.status(404).json({
          error: error,
          message: "thread not found"
        });
        return null
      }
    );
  console.log(thread)
  if (!thread) {
    return
  }

  User.findOne({where:{ id: userId }})

    .then(async (user) => {
      console.log(user)
      if (user.threads.indexOf(threadId)!== -1) {
        return res.status(401).json({
          error: "Already Subscribed!"
      })
      }
      if (user.threads.length) {
        user.threads+=`,${threadId}`
      } else {
        user.threads = threadId
      }
      user.save().then(
        () => {
          return res.status(200).json({
            message: "Subscribed successfully!"
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
          message: "user not found"
        });
        return null
      }
    );
}

exports.unsubscribe = async (req, res) => {
  const threadId = req.body.threadId
  const userId = req.body.userId

  const thread = await Thread.findOne({where:{ id: threadId }})
    .then(async (thread) => {
      switch (thread.usersSubscribed.indexOf(userId)) {
        case -1:
          return thread
      
        case 0:
          thread.usersSubscribed = thread.usersSubscribed.replace(userId, "")
          break
      
        default:
          thread.usersSubscribed = thread.usersSubscribed.replace(`,${userId}`, "")
          break;
      }
      const saved = await thread.save()
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
        return thread
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
  if (!thread) {
    return
  }

  User.findOne({where:{ id: userId }})
    .then(async (user) => {
      switch (user.threads.indexOf(threadId)) {
        case -1:
          return res.status(401).json({
            error: "Not Subscribed!"
          })
        
        case 0:
          user.threads = user.threads.replace(threadId, "")
          break

        default:
          user.threads = user.threads.replace(`,${threadId}`, "")
          break;
      }
      user.save().then(
        () => {
          return res.status(200).json({
            message: "Unsubscribed successfully!"
          })
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
          return false
        }
      );
    }).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
        return null
      }
    );
}