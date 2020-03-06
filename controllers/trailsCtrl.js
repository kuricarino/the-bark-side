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
};

// Create one post within a trail
const create = (req, res) => {
  console.log(req.body);

  // First, look for the trail by nickname
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
    // if (!foundTrail) return res.json({error: 'Could not find trail'});
    // Once found, create and save newPost to database
    console.log(foundTrail)
    // db.Post.create(req.body, (err, savedPost) => {
      
      // if (err) return res.status(400).json({status: 400, error: `Can"t save new post.`});
      foundTrail.posts.push(req.body);
  
      foundTrail.save();
      return res.json(foundTrail);
    });
  // });
};

// UPDATE: Post within a trail 
const update = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
    if (!foundTrail) return res.json({error: 'Could not find trail'});
    
    // console.log(foundTrail.posts);
    let foundPost = foundTrail.posts.id(req.params.postId);
    // console.log({foundPost})
    foundPost.title = req.body.title;
    foundPost.description = req.body.description;
    foundTrail.save();
    // console.log(foundPost);
    return res.json(foundPost);
    });
  };



// get subdoc inside trails using a method and change it to be the update
// save the trail
// return updated post

// delete for subdoc too

// DELETE: Post within a trail 
const destroy = (req, res) => {
  db.Trail.findOne({nickname: req.params.trailId}, (err, foundTrail) => {
    if (err) return res.status(400).json({status: 400, error: 'Can"t find trail with this id'});
    if (!foundTrail) return res.json({error: 'Could not find trail'});
    console.log(foundTrail);

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