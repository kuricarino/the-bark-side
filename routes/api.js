//  Require express router
const express = require('express');
const router = express.Router();

//  Require db & controller
const db = require('../models');
const ctrl = require('../controllers');

//  Get trail index
router.get('/trails', ctrl.trails.index);

//  Show one trail
router.get('/trails/:trailId', ctrl.trails.show);

// Get post index
router.get('/trails/:trailId/posts', ctrl.posts.index);

//  Create post
router.post('/trails/:trailId/posts', ctrl.trails.create);

//  Update post
router.put('/trails/:trailId/posts/:postId/updates', ctrl.trails.update);

//  Delete post
router.delete('/trails/:trailId/posts/:postId', ctrl.trails.destroy);


module.exports = router;