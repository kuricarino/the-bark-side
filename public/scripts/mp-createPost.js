// ============= INDEX POST ON PAGE LOAD =============//

const postsContainer = document.querySelector('.le-scroll-box');

function allPosts() {
  fetch('/api/trails/mp')
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
  const title = document.querySelector('#mp-post-title').value;
  const description = document.querySelector('#mp-post-comment').value;  
  const newPost = {title, description};

  fetch('/api/trails/mp/posts', {
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
      <p>From: ${post.title}</p>
      <p>Comment: ${post.description}</p>
      <button class="upd btn btn-outline-warning">Update</button>
      <button class="del btn btn-outline-danger">Delete</button>
      <p>-------------------------------------------------------------------------------------------------------</p>
    </div>
    `;
}


// ============= DELETE ONE POST ============= //

document.querySelector('.le-scroll-box').addEventListener('click', (event) => {
  if (event.target.classList.contains("del")) delPost(event);
});

function delPost(event) {
  fetch(`/api/trails/mp/posts/${event.target.parentNode.dataset.id}`, {
    method: 'DELETE'
  })
  .then(stream => stream.json())
  .catch(err => console.log(err))
  event.target.parentNode.remove();
};


// ============= UPDATE ONE POST ============= //

document.querySelector('.le-scroll-box').addEventListener('click', (event) => {
  if (event.target.classList.contains("upd")) {
    const postId = event.target.parentNode.dataset.id;
    window.location.replace(`/trails/mp/posts/${postId}/updates`);
  }
});


















// FOR LEASH MAP
// $("#pop").on("click", function(e) {
//   e.preventDefault();
//   $('#le-npsimg').modal('toggle');
// });