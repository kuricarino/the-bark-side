// ============= CREATE ONE POST FUNCTION ON MODAL =============//

document.querySelector('#submit-post').addEventListener('click', createPost);
const postsContainer = document.querySelector('.ff-scroll-box');
console.log(postsContainer);

function allPosts() {
  fetch('/api/trails/ff/posts')
  .then(stream => stream.json())
  .then(res => renderAll(res))
}

allPosts();

function createPost(event) {
  console.log('create post');
  const title = document.querySelector('#ff-post-title').value;
  const description = document.querySelector('#ff-message-text').value;
  const newPost = {title, description};
  console.log(newPost)

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

function renderAll(posts) {
  posts.forEach(post => {
    render(post)
  })
}

function render(post) {
  console.log(post);
  postsContainer.insertAdjacentHTML('afterbegin', getPostTemplate(post))
}

function getPostTemplate(post) {
    return`
    <div class="ff-scroll-box">
    <p>Title: ${post.title}</p>
    <p>Comment: ${post.description}</p>
    <button>Update</button>
    <button>Delete</button>
    </div>
    `;
}

// ============= END OF CREATE NEW POST ============= //





// FOR LEASH MAP
// $("#pop").on("click", function(e) {
//   e.preventDefault();
//   $('#le-npsimg').modal('toggle');
// });







// DELETE ONE POST


