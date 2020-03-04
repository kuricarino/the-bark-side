// ============= PRE RENDER ALL POSTS =============//

//api call
  //GET all posts
  //render html for each POST

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
function render(post) {
      postsContainer.insertAdjacentHTML('beforeend', getPostTemplate(post))
  };

function getPostTemplate(post) {
    return`
    <div class="ff-scroll-box">
    <p>Title: ${post.title}</p>
    <p>Comment:${post.description}</p>
    </div>
    `;
}

$("#pop").on("click", function(e) {
  e.preventDefault();
  $('#le-npsimg').modal('toggle');
});
// ============= END OF CREATE POST ============= //

