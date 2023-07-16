const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    selectedThread: { type: String, required: true },
    postTitle: { type: String, required: true },
    text: { type: String, required: true },
    imageUrl: { type: Object, required: true },
    comments: { type: Array }
});


module.exports = mongoose.model('Post', postSchema);