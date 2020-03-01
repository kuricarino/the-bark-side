// Require expreess and body-parser
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
const seed = require('./seed');
// const routes = require('./routes');
// const views = require('./views');

/***********************************
* ROUTES *
************************************/

// Serve public assets: `/images`, `/scripts`, `/styles`
// app.use(express.static(__dirname/ + '/public'));

// ** VIEWS ENDPOINTS ** //
// app.use('/', routes.views);

// app.use('/api', (req,res) => {
//     res.send('<h1>Trails</h1>');
// });


// * TRAILS * //
// GET: Trails -- tested
// app.get('/api/trails', (req, res) => {
//     db.Trail.find({}, (err, allTrails) => {
//         if (err) res.status(400).json({status: 400, error: `Something went wrong.`});
//         return res.json(allTrails);
//     });
// });

// * POSTS * //
// GET: Posts -- tested
app.get('/api/trails/:trailId/posts', (req, res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) res.status(400).json({status: 400, error: `Something went wrong.`});
        return res.json(allPosts);
    });
});


// SHOW: Post -- tested
// app.get('/api/posts/:postId', (req, res) => {
//     db.Post.findById(req.params.postId, (err, showPost) => {
//         if (err) res.status(400).json({status: 400, error: `Something went wrong.`});
//         return res.json(showPost)
//     })
// });


// CREATE: New Post
app.post('/api/trails/:trailId/post', (req, res) => {
//     db.Post.create(req.body, (err, newPost) => {
//         if (err) res.status(400).json({status: 400, error: `Something went wrong.`});
        
//         db.Trail.findById(req.params.trailId);
//         const trail = req.params.trailId;
//         trail.posts.push(newPost);
//         //trail.posts.push(newPost);
//         newPost.save();
//     })
// });

// CREATE code below attaching post but without content
// db.Trail.deleteMany({}, (err, delTrails) => {
//     if (err) console.log('can"t delete trails', err);
//     // console.log('deleted all trails', delTrails);
  
//     db.Trail.create({},(err, newTrails) => {
//       if (err) console.log(`can't create new trails`);
//       // console.log(newTrails);
  
//         db.Post.create({},(err, savedPost) => {
//           if (err) console.log(err);
//           newTrails.posts.push(savedPost);
//           newTrails.save();
//         console.log(newTrails);
//         })
//       })
//     })
// });


// UPDATE: Post
// app.post('/api/trails/:trailId/posts/:postId', (req, res) => {
//     db.Post.findByIdAndUpdate(req.params.postId, req.body, {new: true}, (err, updatedPost) => {
//         if (err) res.status(400).json({status: 400, error: `Something went wrong`});

//         res.json(updatedPost);
//     });
// });

// DELETE: Post
// app.delete('/api/posts/:postId', (req, res) => {
//     db.Post.
// })


// ** ERROR ENDPOINTS ** //

// Error for API
// app.use(‘/api/*‘, (req, res) => {
//   res.send(‘<h2>Error 404: Not Found</h2>’);
// });

// Error for HTML 
// app.use(‘*’, (req, res) => {
//     res.send(‘<h2>Error 404: Not Found</h2>’);
//   });

/***********************************
* START SERVER *
************************************/

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
