const db = require('../models');

// GET all posts within one trail
const index = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, showTrail) => {
      if (err) return res.status(400).json({status: 400, error: `Something went wrong.`});
      // after trail is found, go into posts
      db.Post.find({}, (err, allPosts) => {
        if (err) return res.status(400).json({status: 400, error: `Something went wrong.`});
        return res.json(allPosts);
    });
  });
};

module.exports = {
  index
}