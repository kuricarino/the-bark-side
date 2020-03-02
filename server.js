// Require express and body-parser
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// PORT and connect mongoose
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/trails-api';
    mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: 'trails-api',
    })
  .then(() => console.log('MongoDB connected successfully...'))
  .catch((err) => console.log(err));

// Init body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Require DB
const db = require('./models');
const routes = require('./routes');
// const views = require('./views');

/************* ROUTES *************/

// Serve public assets: `/images`, `/scripts`, `/styles`
// app.use(express.static(__dirname/ + '/public'));

// **** VIEWS ENDPOINTS **** 
app.use('/', routes.views);

// **** API ENDPOINTS **** 
app.use('/api', routes.api);

// (req,res) => {
//     res.send('<h1>Trails</h1>');
// });

// *** TRAILS *** //

// DELETE: Post  
app.delete('/api/trails/:trailId/posts/:postId', routes.api );

// ** ERROR ENDPOINTS ** //

// Error for API
app.use('/api/*', (req, res) => {
  res.send('<h2>Error 404: Not Found</h2>');
});

// Error for HTML 
// app.use(‘*’, (req, res) => {
//     res.send(‘<h2>Error 404: Not Found</h2>’);
//   });

/***********************************
* START SERVER *
************************************/

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
