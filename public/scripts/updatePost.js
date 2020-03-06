// ============= UPDATE ONE POST ============= //

const postId = window.location.pathname.split('/')[4];

document.querySelector('#form-update').addEventListener('submit', (update));

function update(event) {
  event.preventDefault();
  const title = document.querySelector('#post-title').value;
  const description = document.querySelector('#post-description').value;
  const updPost = {title, description};

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
    window.location.replace(`/trails/le`);
}