const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const threadSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
});

threadSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Thread', threadSchema);