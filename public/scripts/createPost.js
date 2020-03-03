// ============= CREATE POST FUNCTION ON MODAL =============//

document.querySelector('ff-form').addEventListener('submit', createPost);
const postsContainer = document.querySelector('.ff-scroll-box');
console.log(postsContainer);

function createPost(e) {
  console.log('create post');
  const title = document.querySelector('#ff-post-title').value;
  const body = document.querySelector('#ff-message-text').value;
  // console.log(document.querySelector('#post-title').value);
  // console.log(document.querySelector('#message-text').value);
  const newPost = {title, body};

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
  return `
  <div class="ff-scroll-box">
    <p>Title:${post.title}</p>
    <p>Post:${post.body}</p>
  </div>
  `;
}

// ============= END OF CREATE POST ============= //