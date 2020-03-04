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
    <p>${post.title}</p>
    <p>${post.description}</p>
    </div>
    `;
}


// ============= END OF CREATE POST ============= //