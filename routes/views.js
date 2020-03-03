const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  // console.log(__dirname);
  res.sendFile('/views/index.html', {
    root: __dirname + '../../'});
    
});

router.get('/trails/ff', (req, res) => {
  // console.log(__dirname);
  res.sendFile('/views/ff.html', {
    root: __dirname + '../../'});
    
});

router.get('/trails/le', (req, res) => {
  console.log(__dirname);
  res.sendFile('/views/le.html', {
    root: __dirname + '../../'});
    
});

router.get('/trails/mp', (req, res) => {
  // console.log(__dirname);
  res.sendFile('/views/mp.html', {
    root: __dirname + '../../'});
    
});
module.exports = router;