// ============= INDEX POST ON PAGE LOAD =============//

const postsContainer = document.querySelector('.ff-scroll-box');
// const title = document.querySelector('#ff-post-title').value;
// const description = document.querySelector('#ff-message-text').value;

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
    <div class="postbox" data-id=${post._id}>
      <p>Title: ${post.title}</p>
      <p>Comment: ${post.description}</p>
  
      <button class="del btn btn-outline-danger">Delete</button>
    </div>
    `;
}

// ============= DELETE ONE POST ============= //

{/* <a href="http://localhost:5000/trails/ff/posts/${post._id}/comments" id="updatePost">Update</a> */}


document.querySelector('.ff-scroll-box').addEventListener('click', (event) => {
  if (event.target.classList.contains("del")) delPost(event);
  else if (event.target.classList.contains("upd")) {
    console.log('hi');
    // updPost(event);
  }
});

function delPost(event) {
  fetch(`/api/trails/ff/posts/${event.target.parentNode.dataset.id}`, {
    method: 'DELETE'
  })
  .then(stream => stream.json())
  .catch(err => console.log(err))
  event.target.parentNode.remove();
};

function updPost(event) {
  fetch(`/api/trails/ff/posts/${event.target.parentNode.dataset.id}`, {
    method: 'PUT'
  })
  .then(stream => stream.json())
  .then(res => renderUpdate(res))
  .catch(err => console.log(err))
  event.target.parentNode.update();
};


function renderUpdate(post) {
  const title = document.querySelector('#ff-post-title').value;
  const description = document.querySelector('#ff-message-text').value;  
  const newPost = {title, description};

  document.querySelector()


  console.log(newPost);

  postsContainer.innerHTML('') 
  getPostTemplate(post);

}















// FOR LEASH MAP
// $("#pop").on("click", function(e) {
//   e.preventDefault();
//   $('#le-npsimg').modal('toggle');
// });







// DELETE ONE POST


