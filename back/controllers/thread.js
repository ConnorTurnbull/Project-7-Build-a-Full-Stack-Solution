const Thread = require('../models/thread');
const User = require('../models/user');

exports.newThread = (req, res, next) => {
    console.log(req.body);
    // req.body.thread = JSON.parse(req.body.thread);
    

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
        console.log(user)
        return user.threads
      }
    )
    if (!userThreads || !userThreads.length) {
      console.log(userThreads)
      return res.status(404).json({
        message: 'No threads found'
      })
    }
    options._id = userThreads
  }
  else if (req.query.title) {
    options.title = {$regex:new RegExp(req.query.title, "i")}
  }
  console.log(options)  

  Thread.find(options).then(
      (threads) => {
        console.log(threads)
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