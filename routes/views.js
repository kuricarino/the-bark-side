const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile('/views/index.html', {
    root: __dirname + '../../'});
    
});

module.exports = router;