// ============= INDEX POST ON PAGE LOAD =============//

const postsContainer = document.querySelector('.ff-scroll-box');

function allPosts() {
  fetch('/api/trails/ff')
  .then(stream => stream.json()) 
  .then((res) => {
    console.log(res);
    renderAll(res)
});
}

function renderAll(trail) {
  trail.posts.forEach(post => {
    render(post)
  })
}
allPosts();


// ============= CREATE ONE POST FUNCTION ON MODAL =============//

document.querySelector('#submit-post').addEventListener('click', createPost);

function createPost(event) {
  const title = document.querySelector('#ff-post-title').value;
  const description = document.querySelector('#ff-post-comment').value;  
  const newPost = {title, description};

  fetch('/api/trails/ff/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(stream => stream.json())
      .then(res => render(newPost))
      .catch(err => console.log(err))
}

function render(post) {
  postsContainer.insertAdjacentHTML('afterbegin', getPostTemplate(post))
}

function getPostTemplate(post) {
    return`
    <div class="postbox" data-id=${post._id}>
<<<<<<< HEAD
      <p>Title: ${post.title}</p>
      <p>Comment: ${post.description}</p>
      <button class="upd btn btn-outline-warning">Update</button>
      <button class="del btn btn-outline-danger">Delete</button>
      <p>---------------------------------------------------------------------------------------</p>
=======
      <p>From: ${post.title}</p>
      <p>Comment: ${post.description}</p>
      <button class="upd btn btn-outline-danger">Update</button>
      <button class="del btn btn-outline-danger">Delete</button>
      <p>-------------------------------------------------------------------------------------------------------</p>
>>>>>>> submaster
    </div>
    `;
}


// ============= DELETE ONE POST ============= //

document.querySelector('.ff-scroll-box').addEventListener('click', (event) => {
  if (event.target.classList.contains("del")) delPost(event);
});

function delPost(event) {
  fetch(`/api/trails/ff/posts/${event.target.parentNode.dataset.id}`, {
    method: 'DELETE'
  })
  .then(stream => stream.json())
  .catch(err => console.log(err))
  event.target.parentNode.remove();
};


// ============= UPDATE ONE POST ============= //

document.querySelector('.ff-scroll-box').addEventListener('click', (event) => {
  if (event.target.classList.contains("upd")) {
    const postId = event.target.parentNode.dataset.id;
    window.location.replace(`/trails/ff/posts/${postId}/updates`);
  }
});
