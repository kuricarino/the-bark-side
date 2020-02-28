const mongoose = require('mongoose');

// may not need mongoose connection here?
// const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/express-cities';

// mongoose.connect(DB_URI, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connnected successfully...'))
//   .catch((err) => console.log(err));

module.exports = {
    Trail: require('./Trails'),
    Post: require('./Posts')
}
