//  Require express router
const express = require('express');
const router = express.Router();

//  Require db & controller
const db = require('../models');
const ctrl = require('../controllers');

//  Get index
router.get('/trails', ctrl.trails.index);

//  Show one trail
router.get('/trails/:trailId', ctrl.trails.show);

//  Create post
router.post('/trails/:trailId/posts', ctrl.trails.create);

//  Update post
router.put('/trails/:trailId/posts/:postId', ctrl.trails.update);

//  Delete post
// router.delete('/trails/:trailId', ctrl.trails.destroy);


module.exports = router;