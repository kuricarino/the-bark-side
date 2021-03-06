const mongoose = require('mongoose');
const db = require('./models');

const trails = [
{
  name: 'Fort Funston Trail',
  nickname: 'ff',
  distance: '2 miles',
  difficulty: 'Easy',
  routeType: 'Loop',
  description: 'Fort Funston features beaufiful wild flowers, 200 foot high sandy bluffs on San Francisco"s SW coast where the winds blow reliably wildly. A network of trails make it ideal for hiking and horseback riding, and is good for all skill levels. This trail is moderately trafficked, accessible year-round and dog owners will be happy to know they can take leashes off here.',
  uses: ['hiking', 'walking', 'nature trips', 'bird watching'],
  image: '#'
},
{
  name: 'Lands End Trail',
  nickname: 'le',
  distance: '3.4 miles',
  difficulty: 'Moderate',
  routeType: 'Loop',
  description: 'Located on the wildest, rockiest corner of San Francisco, Lands End Trail features beautiful wild flowers and offers brilliant views of the Pacific. At the tip of Lands End is Point Lobos, named by the Spanish for its many lobos marinos (sea wolves), trails at Lands End offer a cliff-top walk through dark cypress and open grass and 30-mile views up and down the California coast. The trail is accessible year-round. Dogs must be kept on leash at all times.',   
  uses: ['hiking', 'walking', 'running', 'nature trips'], 
  image: '#'
},
{
  name: 'Mori Point and Sweeney Ridge Loop Trail',
  nickname: 'mp',
  distance: '9.4 miles',
  difficulty: 'Hard',
  routeType: 'Loop',
  description: 'Mori Point and Sweeney Ridge Loop Trail via Skyline College is a heavily trafficked trail located near San Bruno, CA that features beautiful wild flowers. The trail is accessible year-round and dogs must be kept on leash. NOTE: There are no dogs allowed on the trail between Skyline College and Sweeney Ridge as it is a butterfly reserve', 
  uses: ['hiking', 'running', 'nature trips', 'bird watching'],
  image: '#'
}];


const posts = [
  {
    title: 'Fort Funston 1',
    description: 'test ff',
  },
  {
    title: 'Lands End 1',
    description: 'test le',
  },
  {
    title: 'Mori Point 1',
    description: 'test mp',
  }
]

// Clearing all previous trails so we can load trails from database
db.Trail.deleteMany({}, (err, delTrails) => {
  if (err) console.log('can"t delete trails', err);
  db.Trail.create(trails, (err, newTrails) => {
    if (err) console.log(`can't create new trails`);
    for (let i = 0; i < newTrails.length; i ++) {
        db.Post.create(posts[i], (err, savedPost) => {
          if (err) console.log(err);
          newTrails[i].posts.push(savedPost);
          newTrails[i].save();
        });
    };
  });
});
