// ============= CREATE POST FUNCTION ON MODAL =============//

document.querySelector('#submit-post').addEventListener('click', createPost);
const postsContainer = document.querySelector('.le-scroll-box');

function createPost(event) {
  const title = document.querySelector('#le-post-title').value;
  const body = document.querySelector('#le-message-text').value;
  // console.log(document.querySelector('#post-title').value);
  // console.log(document.querySelector('#message-text').value);
  const newPost = {title, body};

  fetch('http;//localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(stream => stream.json())
      .then(res => render(res))
};


function render(posts) {
  postsContainer.insertAdjacentHTML('beforeend', posts)
};

function getPostTemplate(post) {
  return 
  `
  <div class="post">
    <p>${post.title}</p>
    <p>${post.body}</p>
  `
}

// ============= END OF CREATE POST ============= //