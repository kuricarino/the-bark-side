// ============= CREATE POST FUNCTION ON MODAL =============//
console.log('hello');

const postsContainer = document.querySelector('.le-scroll-box');
console.log(postsContainer);


// const form = document.querySelector('#btn-submit');
// console.log(form);
// form.addEventListener('submit', createPost);
document.querySelector('#le-form').addEventListener('submit', createPost);

console.log('what"s happening..?');

function createPost(e) {
  e.preventDefault();
  console.log('create post');

  const title = document.querySelector('#le-post-title').value;
  const description = document.querySelector('#le-post-body').value;
  console.log(title, description);

  const newPost = {title, description};
  console.log(newPost);
 
  fetch(`/api/trails/le/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
        
      })
      .then(stream => stream.json())
     
      .then((res)  => {
        console.log(res);
        render(res)})
      .catch(err => console.log(err))
    }
   
   
function render(posts) {
  postsContainer.insertAdjacentHTML('beforeend', getPostTemplate(posts))
};

function getPostTemplate(posts) {
  return `
  <div class="le-scroll-box">
    <p>Title:${posts.title}</p>
    <p>Post:${posts.description}</p>
  </div>
  `;
};


$("#pop").on("click", function(e) {
  e.preventDefault();
 
  $('#le-npsimg').modal('toggle');
})



// Create a function for posts to show as soon as the page loads



// const postContainer = document.querySelector('.ff-scroll-box');

// function indexPost(e) {
//   e.preventDefault(); 
//   fetch('/trails/ff') //go here to get the data
//   .then(response => response.json)   
//   .then(json => render(json)) // to see what it looks like for yourself
//   .catch(err => console.log(err))
// }

// function render(posts) {
//   posts.forEach(post => {  //for each post, get the template by passing the post to it and append to the DOM
//     const postTemplate = getPostTemplate(post);
//     // append 
//     postContainer.insertAdjacentHTML('beforeend', postTemplate);
    
//   });
// }

// function getPostTemplate(post) {
//   return `
//     <div class="ff-scroll-box">
//     <p>${post.posts.title}</p>
//     <p>${post.posts.description}</p>
//     </div>
//   `;
// }