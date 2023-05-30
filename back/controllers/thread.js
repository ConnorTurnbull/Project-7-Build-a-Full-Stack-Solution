const Thread = require('../models/thread');

exports.newThread = (req, res, next) => {
    console.log(req.body);
    // req.body.thread = JSON.parse(req.body.thread);
    

    const thread = new Thread({
        title: req.body.title
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

exports.getThread = (req, res, next) => {
    Thread.find().then(
      (threads) => {
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