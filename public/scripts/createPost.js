// ============= CREATE POST FUNCTION ON MODAL =============//

document.querySelector('#submit-post').addEventListener('click', createPost);
const postsContainer = document.querySelector('.ff-scroll-box');
console.log(postsContainer);

function createPost(event) {
  console.log('create post');
  const title = document.querySelector('#ff-post-title').value;
  const description = document.querySelector('#ff-message-text').value;
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

function render(posts) {
  
  for (let i = posts.posts.length - 1; i > 0; i--) {
    
  postsContainer.insertAdjacentHTML('beforeend', getPostTemplate(posts.posts[i]))
  }
};

function getPostTemplate(post) {
    return`
    <div class="ff-scroll-box">
    <p>Title: ${post.title}</p>
    <p>Comment:${post.description}</p>
    </div>
    `;
}

// ============= END OF CREATE POST ============= //


// ============= GET ALL POSTS ON PAGE LOAD =============//

// function getAllPosts() {
//   //const allPosts = {posts.posts.title, description};
//   console.log(allPosts);
//   fetch('/api/trails/ff/posts', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(allPosts)
//       })
//       .then(stream => stream.json())
//       .then(res => renderAllPosts(res))
//       .catch(err => console.log(err))
// };

// function renderAllPosts(posts) {
//   postsContainer.insertAdjacentHTML('beforeend', getAllPosts(posts.posts))
// };

// function allPosts(post) {
//     return`
//     <div class="ff-scroll-box">
//     <p>Title: ${post.title}</p>
//     <p>Comment:${post.description}</p>
//     </div>
//     `;
// }

function onPageLoad() {
  // getAllPosts();
  // renderAllPosts();
  // allPosts();
  //createPost();
  indexPost();
  render();
  getPostTemplate();
}

function indexPost() {
  // e.preventDefault(); 
  fetch('/api/trails/ff/posts', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  .then(response => response.json)   
  .then(json => render(json)) 
  .catch(err => console.log(err))
}

// ============= END OF GET ALL POSTS ON PAGE LOAD ============= //

