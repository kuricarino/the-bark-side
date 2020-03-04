// //  Upon page load, fetch all the posts and load them into the postContainer




// // VARIABLES
// const postsContainer = document.querySelector('.le-scroll-box');
// console.log(postsContainer);
// const posts = 

// // FUNCTIONS
// function indexPost() {
//   fetch('/api/trails/le/posts', {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
//   })
//   .then(response => response.json)   
//   .then(res => render(res)) 
//   .catch(err => console.log(err));
// }

// function render(posts) {
//   for (let i = posts.length - 1; i > 0; i--) {
//     postsContainer.insertAdjacentHTML('beforeend', getPostTemplate(posts[i]))
//   }
// };

// function getPostTemplate(posts) {
//   return `
//   <div class="ff-scroll-box">
//   <p>${posts.title}</p>
//   <p>${posts.description}</p>
//   </div>
//   `;
// }


// function onPageLoad() {
//   indexPost();
//   render();
//   getPostTemplate(); 
// }


// // document.querySelector('#submit-post').addEventListener('click', createPost);

// // function createPost(event) {
// //   console.log('create post');
// //   const title = document.querySelector('#le-post-title').value;
// //   const description = document.querySelector('#le-message-text').value;
// //   const newPost = {title, description};

// //   fetch('/trails/le/posts', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(newPost)
// //       })
// //       .then(stream => stream.json())
// //       .then(res => render(res))
// //       .catch(err => console.log(err))
// // };

// // function render(posts) {
// //   for (let i = posts.posts.length - 1; i > 0; i--) {
// //     postsContainer.insertAdjacentHTML('beforeend', getPostTemplate(posts.posts[i]))
// //   }
// // };
// // function render(post) {
// //       postsContainer.insertAdjacentHTML('beforeend', getPostTemplate(post))
// //   };

// // function getPostTemplate(post) {
// //     return`
// //     <div class="ff-scroll-box">
// //     <p>${post.title}</p>
// //     <p>${post.description}</p>
// //     </div>
// //     `;
// // }





// // $("#pop").on("click", function(e) {
// //   e.preventDefault();
// //   $('#le-npsimg').modal('toggle');
// // });
// // ============= END OF CREATE POST ============= //


