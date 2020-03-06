// const postsContainer = document.querySelector('.le-scroll-box');

// ============= UPDATE ONE POST ============= //

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
























// FOR LEASH MAP
// $("#pop").on("click", function(e) {
//   e.preventDefault();
//   $('#le-npsimg').modal('toggle');
// });