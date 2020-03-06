const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('/views/index.html', {
    root: __dirname + '../../'});
    
});

router.get('/trails/ff', (req, res) => {
  res.sendFile('/views/ff.html', {
    root: __dirname + '../../'});
    
});

router.get('/trails/le', (req, res) => {
  res.sendFile('/views/le.html', {
    root: __dirname + '../../'});
    
});

router.get('/trails/mp', (req, res) => {
  res.sendFile('/views/mp.html', {
    root: __dirname + '../../'});
    
});

router.get(`/trails/:trailId/posts/:postId/updates`, (req, res) => {
  res.sendFile('/views/form.html', {
    root: __dirname + '../../'});
});

module.exports = router;