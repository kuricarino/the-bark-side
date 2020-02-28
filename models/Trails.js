const mongoose = require('mongoose');

const TrailSchema = new mongoose.Schema({
    name: String,
    distance: String,
    difficulty: String,
    routeType: String,
    description: String,
    image: String,
});

module.exports = mongoose.model('Trail', TrailSchema);
