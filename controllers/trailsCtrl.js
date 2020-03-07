const db = require('../models');

// GET: Trails Index (with posts)
const index = (req, res) => {
  db.Trail.find({}, (err, newTrails) => {
      if (err) return res.status(400).json({status: 400, error: `Something went wrong.`});
      return res.json(newTrails);
  });
};

// SHOW: One trail with post(s)
const show = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, showTrail) => {
      if (err) return res.status(400).json({status: 400, error: `Something went wrong.`});
      return res.json(showTrail);
  });
};

// Create one post within a trail
const create = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
      foundTrail.posts.push(req.body);
      foundTrail.save();
      return res.json(foundTrail);
    });
};

// UPDATE: Post within a trail 
const update = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
    if (!foundTrail) return res.json({error: 'Could not find trail'});
    
    let foundPost = foundTrail.posts.id(req.params.postId);

    foundPost.title = req.body.title;
    foundPost.description = req.body.description;
    foundTrail.save();
   
    return res.json(foundPost);
    });
  };

// DELETE: Post within a trail 
const destroy = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
    if (!foundTrail) return res.json({error: 'Could not find trail'});

    let foundPost = foundTrail.posts.id(req.params.postId);
    foundPost.remove();
    foundTrail.save();
    
  res.json({status: 200});
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};