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
    // console.log(typeof req.params.id);
      if (err) return res.status(400).json({status: 400, error: `Something went wrong.`});
      return res.json(showTrail);
      // console.log(showTrail);
  });
}

// Create one post within a trail
const create = (req, res) => {
  // First, look for the trail by nickname
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
    if (!foundTrail) return res.json({error: 'Could not find trail'});
    // Once found, create and save newPost to database
    db.Post.create(req.body, (err, savedPost) => {
      if (err) return res.status(400).json({status: 400, error: `Can"t save new post.`});
      foundTrail.posts.push(savedPost);
      foundTrail.save();
      return res.json(foundTrail);
    });
  });
};

// UPDATE: Post within a trail -- QUESTION
const update = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
    if (!foundTrail) return res.json({error: 'Could not find trail'});

  // Find the post by id and update ---> this updates the individual post, but not the post assoc. with the trail
    db.Post.findByIdAndUpdate(req.params.postId, req.body, {new: true}, (err, updatedPost) => {
      // console.log( req.params.postId);
      // console.log(req.body);
      if (err) return res.status(400).json({status: 400, error: `Can"t update post. Try again`});
      console.log(foundTrail);
      console.log(updatedPost);
      return res.json(updatedPost);
  });
});
};

// DELETE: Post within a trail
// const destroy = 


module.exports = {
  index,
  show,
  create,
  update,
  // destroy
};