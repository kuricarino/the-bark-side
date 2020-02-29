const mongoose = require('mongoose');
const Post = require('./Posts');

const TrailSchema = new mongoose.Schema({
    name: String,
    nickname: String,
    distance: String,
    difficulty: String,
    routeType: String,
    description: String,
    image: String,
    posts: [Post.schema]
});

module.exports = mongoose.model('Trail', TrailSchema);
