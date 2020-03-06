const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/trails-api", {useNewUrlParser: true, useFindAndModify: false});

module.exports = {
    Trail: require('./Trails'),
    Post: require('./Posts')
}
