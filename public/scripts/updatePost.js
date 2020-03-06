// ============= INDEX POST ON PAGE LOAD =============//

const postsContainer = document.querySelector('.le-scroll-box');
// const title = document.querySelector('#ff-post-title').value;
// const description = document.querySelector('#ff-message-text').value;

// function allPosts() {
//   fetch('/api/trails/le/posts')
//   .then(stream => stream.json())
//   .then(res => renderAll(res))
// }

// function renderAll(posts) {
//   posts.forEach(post => {
//     render(post)
//   })
// }

// allPosts();

// ============= CREATE ONE POST FUNCTION ON MODAL =============//

// document.querySelector('#submit-post').addEventListener('click', createPost);

// function createPost(event) {
//   const title = document.querySelector('#le-post-title').value;
//   const description = document.querySelector('#le-post-comment').value;  
//   const newPost = {title, description};

//   fetch('/api/trails/le/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPost)
//       })
//       .then(stream => stream.json())
//       .then(res => render(newPost))
//       // .then(res => render(res))
//       // .then(res => res.text())
//       .catch(err => console.log(err))
// }

// function render(post) {
//   // console.log(post);
//   postsContainer.insertAdjacentHTML('afterbegin', getPostTemplate(post))
// }

// function getPostTemplate(post) {
//     return`
//     <div class="postbox" data-id=${post._id}>
//       <p>Title: ${post.title}</p>
//       <p>Comment: ${post.description}</p>
//       <button class="upd btn btn-outline-danger">Update</button>
//       <button class="del btn btn-outline-danger">Delete</button>
//       <p>---------------------------------------------------------------------------------------</p>
//     </div>
//     `;
// }

// ============= DELETE ONE POST ============= //

// document.querySelector('.le-scroll-box').addEventListener('click', (event) => {
//   if (event.target.classList.contains("del")) delPost(event);
//   // else if (event.target.classList.contains("upd")) {
//   //   console.log('hi');
//     // updPost(event);
//   // }
// });

// function delPost(event) {
//   fetch(`/api/trails/le/posts/${event.target.parentNode.dataset.id}`, {
//     method: 'DELETE'
//   })
//   .then(stream => stream.json())
//   .catch(err => console.log(err))
//   event.target.parentNode.remove();
// };


// ============= UPDATE ONE POST ============= //

// document.querySelector('.le-scroll-box').addEventListener('click', (event) => {
//   if (event.target.classList.contains("upd")) {
//     console.log('hi');
//     console.log(event.target.parentNode.dataset.id);
//     const postId = event.target.parentNode.dataset.id;
//     console.log(postId);
//     window.location.replace(`/trails/le/posts/${postId}/updates`);

//     // updPost(event);
//   }
// });

const postId = window.location.pathname.split('/')[4];
console.log('yes');
document.querySelector('#form-update').addEventListener('submit', (update));

function update(event) {
  event.preventDefault();
  const title = document.querySelector('#post-title').value;
  // console.log(title);
  const description = document.querySelector('#post-description').value;
  // console.log(description);
  const updPost = {title, description};
  console.log(updPost);

  fetch(`/api/trails/le/posts/${postId}/updates`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updPost)
  })
  .then(stream => stream.json())
  .then(res => renderUpdate(res))
  .catch(err => console.log(err))
};

function renderUpdate(updPost) {
    console.log(`post updated`)
    window.location.replace(`/trails/le`);
    // 
}



// function getPostTemp(updPost) {
//     return `
//     <div class="postbox" data-id=${post._id}>
//       <p>Title: ${post.title}</p>
//       <p>Comment: ${post.description}</p>
//       <button class="upd btn btn-outline-danger">Update</button>

//       <button class="del btn btn-outline-danger">Delete</button>
//       <p>---------------------------------------------------------------------------------------</p>
//     </div>
//     `;
// }





















// FOR LEASH MAP
// $("#pop").on("click", function(e) {
//   e.preventDefault();
//   $('#le-npsimg').modal('toggle');
// });