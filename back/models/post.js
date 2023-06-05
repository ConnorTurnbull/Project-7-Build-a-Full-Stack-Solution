const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    selectedThread: { type: String, required: true },
    postTitle: { type: String, required: true },
    text: { type: String, required: true },
    imageUrl: { type: String, required: true },
});


module.exports = mongoose.model('Post', postSchema);