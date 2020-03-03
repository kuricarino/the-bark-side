/*!
 * Start Bootstrap - Agency v5.2.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

$("#pop").on("click", function() {
  $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});









// ============= CREATE POST: Mon, March 2 =============//

document.querySelector('#submit-post').addEventListener('click', createPost);
const postsContainer = document.querySelector('.post-container');

function createPost(event) {
  // console.log(`does this work?`)
  const title = document.querySelector('#post-title').value;
  const body = document.querySelector('#message-text').value;
  console.log(document.querySelector('#post-title').value);
  console.log(document.querySelector('#message-text').value);
  const newPost = {title, body};

  fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(stream => stream.json())
      .then(res => render(res))
};


function render(posts) {
  postsContainer.insertAdjacentHTML('beforeend', posts)
};

function getPostTemplate(post) {
  return 
  `
  <div class="post">
    <p>${post.title}</p>
    <p>${post.body}</p>
  `
}

// ============= END OF CREATE POST ============= //











// !function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-54},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:56});function a(){100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")}a(),e(window).scroll(a)}(jQuery);


// const form = document.querySelectorAll('form')
// console.log(form)

// for (let i = 0; i < form.length; i++) {
// form[i] && form[i].addEventListener('submit', (event) => {
//     let formIsValid = true;
//     const userData = {};
//     event.preventDefault();


//     const removeElements = (elms) => elms.forEach(el => el.remove());
//     removeElements( document.querySelectorAll(".alertMessage") );
    

//     // Add Alert Message
//     [...form[i].elements].forEach(input => {
//       if (input.type !== 'submit' && input.value === '') {
//         formIsValid = false;
//         input.classList.add('input-error');
//         input.insertAdjacentHTML('afterend', `
//           <div class='alertMessage'>
//             Please enter your ${input.id}
//           </div>
//       `);
//       } else if (input.type === 'password' && input.value.length < 5) {
//         formIsValid = false;
//         input.classList.add('input-error');
//         input.insertAdjacentHTML('afterend', `
//           <div class='alertMessage'>
//             Password must be at least 5 characters
//           </div>
//       `);
//       }


//       if (input.id === 'confirmed password') {
//           if (input.value !== document.getElementById('password').value) {
//             formIsValid = false;
//             input.classList.add('input-error');
//             input.insertAdjacentHTML('afterend', `
//               <div class='alertMessage'>
//                 Password not matched
//               </div>
//           `);

//           }
//       }
  
//       if (input.type !== 'submit' && formIsValid) {
//         // console.log(input.value);
//         userData[input.name] = input.value;
//       }
//     });
  
//     console.log(userData);

//     // Handle Signup Form
//   if (form[i].id === 'signUpForm' && formIsValid) {
//     console.log('Submitting new user --> ', userData);
//     fetch('/api/v1/signup', {
//       method: 'POST',
//       // credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(dataStream => dataStream.json())
//       .then(res => {
//         console.log(res);
//         if (res.status === 201) return alert('Thanks for Signing up');
//       })
//       .catch(err => console.log(err));
//   }

//   // Handle Login
//   if (form[i].id === 'login-nav' && formIsValid) {
//     console.log('Submitting user login --> ', userData);
//     fetch('/api/v1/login', {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//       .then(dataStream => dataStream.json())
//       .then(res => {
//         console.log(res);
//         localStorage.userId = res.data.id;
//         if (res.status === 201) return window.location = `/profile/${res.data.id}`;
//       })
//       .catch(err => console.log(err));
//   }
  

  
//   });
// }




// // Scrolling


// function moveToSelected(element) {

//     $('#carousel div').click(function() {
//       moveToSelected($(this));
//     });
    
//     $('#prev').click(function() {
//       moveToSelected('prev');
//     });
    
//     $('#next').click(function() {
//       moveToSelected('next');
//     });




//     if (element == "next") {
//       var selected = $(".selected").next();
//     } else if (element == "prev") {
//       var selected = $(".selected").prev();
//     } else {
//       var selected = element;
//     }
  
//     var next = $(selected).next();
//     var prev = $(selected).prev();
//     var prevSecond = $(prev).prev();
//     var nextSecond = $(next).next();
  
//     $(selected).removeClass().addClass("selected");
  
//     $(prev).removeClass().addClass("prev");
//     $(next).removeClass().addClass("next");
  
//     $(nextSecond).removeClass().addClass("nextRightSecond");
//     $(prevSecond).removeClass().addClass("prevLeftSecond");
  
//     $(nextSecond).nextAll().removeClass().addClass('hideRight');
//     $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  
//   }
  
//   // Eventos teclado
//   $(document).keydown(function(e) {
//       switch(e.which) {
//           case 37: // left
//           moveToSelected('prev');
//           break;
  
//           case 39: // right
//           moveToSelected('next');
//           break;
  
//           default: return;
//       }
//       e.preventDefault();
//   });
  

  


//   $(document).ready(function() {
//     $(".menu-icon").on("click", function() {
//           $("nav ul").toggleClass("showing");
//     });
// });

// // Scrolling Effect

// $(window).on("scroll", function() {
//     if($(window).scrollTop()) {
//           $('nav').addClass('black');
//     }

//     else {
//           $('nav').removeClass('black');
//     }
// })