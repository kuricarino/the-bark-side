const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    trail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trail'
    }
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);

