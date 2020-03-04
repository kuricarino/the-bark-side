// ============= INDEX POST ON PAGE LOAD =============//

const postsContainer = document.querySelector('.ff-scroll-box');

function allPosts() {
  fetch('/api/trails/ff/posts')
  .then(stream => stream.json())
  .then(res => renderAll(res))
}

function renderAll(posts) {
  posts.forEach(post => {
    render(post)
  })
}
allPosts();

// ============= CREATE ONE POST FUNCTION ON MODAL =============//

document.querySelector('#submit-post').addEventListener('click', createPost);

function createPost(event) {
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
      .then(res => render(newPost))
      // .then(res => render(res))
      // .then(res => res.text())
      .catch(err => console.log(err))
}

function render(post) {
  // console.log(post);
  postsContainer.insertAdjacentHTML('afterbegin', getPostTemplate(post))
}

function getPostTemplate(post) {
    return`
    <div class=${post._id}>
      <p>Title: ${post.title}</p>
      <p>Comment: ${post.description}</p>
      <button class="upd" id="${post._id}">Update </button>
      <button class="del" id="${post._id}>Delete</button>
    </div>
    `;
}

// ============= DELETE ONE POST ============= //


document.querySelector('.del').addEventListener('click', (event) => {
  if (event.target.classList.contains(`${post._id}`));
  delPost(event);
});

// const postID = document.getElementById(`${_id}`);
// console.log(postID)
// const delClass = document.querySelector('.del');
// console.log(delClass);
// const delBtn = delClass.concat(postDiv);
// console.log(delBtn);

function delPost(event) {
  fetch(`/trails/:trailId/posts/${event.target.parentNode._id}`, {
    method: 'DELETE',
  })
  .then(stream => stream.json())
  .then(res => renderOne(res)) 
  .catch(err => console.log(err));
}






















// FOR LEASH MAP
// $("#pop").on("click", function(e) {
//   e.preventDefault();
//   $('#le-npsimg').modal('toggle');
// });