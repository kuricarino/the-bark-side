// document.querySelector('.ff-scroll-box').addEventListener('click', (event) => {
//     if (event.target.classList.contains("del")) delPost(event);
//     else if (event.target.classList.contains("upd")) {
//       console.log('hi');
//       // updPost(event);
//     }
//   });
  
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
    const title = document.querySelector('#post-title').value;
    const description = document.querySelector('#post-description').value;  
    const newPost = {title, description};
  
    document.querySelector()
  
  
    console.log(newPost);
  
    postsContainer.innerHTML('') 
    getPostTemplate(post);
  }
