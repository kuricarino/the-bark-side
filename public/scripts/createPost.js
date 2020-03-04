// ============= CREATE POST FUNCTION ON MODAL =============//
// loadPosts();

document.querySelector('#submit-post').addEventListener('click', createPost);
// console.log(document.querySelector('#submit-post'));
const postsContainer = document.querySelector('.ff-scroll-box');
console.log(postsContainer);

function createPost(event) {
  console.log('create post');
  const title = document.querySelector('#ff-post-title').value;
  const description = document.querySelector('#ff-message-text').value;
  // console.log(document.querySelector('#post-title').value);
  // console.log(document.querySelector('#message-text').value);
  const newPost = {title, description};

  fetch('/api/trails/ff/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(stream => stream.json())
      .then(res => render(res))
      .catch(err => console.log(err))
};

function render(post) {
  postsContainer.insertAdjacentHTML('beforeend', getPostTemplate(post))
};

function getPostTemplate(post) {
  // console.log(post);
  // console.log(post.posts);
  for (let i = 0; i < post.posts.length; i++) {
  ` 
  <div class="ff-scroll-box">
    <p>Title:${post.posts[i].title}</p>
    <p>Post:${post.posts[i].description}</p>
  </div>
  `
  }
  // return ` 
  // <div class="ff-scroll-box">
  //   <p>Title:${post.posts[0].title}</p>
  //   <p>Post:${post.posts[0].description}</p>
  // </div>
  // `;
}



// Create a function for when first visit page and loads every single post

// function loadPosts() {
//   post.posts.populate()
//   .exec((err, post) => {
//     if (err) return res.status(400).json({msg: 'Book ID does not exist'});
//     res.json(post)
//   })
// }


// Another function for when they create a new post that just returns new post  


// ============= END OF CREATE POST ============= //