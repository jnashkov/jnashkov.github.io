// Front Page

// Text Effect
document.addEventListener('DOMContentLoaded',function(event){
    var dataText = ['I am passionate developer.', 'I am creative designer.'];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 1000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });




// animations

// let animateAbout = document.getElementById('about');
// animateAbout.addEventListener('click', function(){
//     // const element = document.querySelector('#about');
//     // element.classList.add('animate__animated', 'animate__bounceIn');
//     animateCSS('#about', 'animate__slideInRight');
// })

// const animateCSS = (element, animation, prefix = 'animate__') =>
//   // We create a Promise and return it
//   new Promise((resolve, reject) => {
//     const animationName = `${prefix}${animation}`;
//     const node = document.querySelector(element);

//     node.classList.add(`${prefix}animated`, animationName);

//     // When the animation ends, we clean the classes and resolve the Promise
//     function handleAnimationEnd() {
//       node.classList.remove(`${prefix}animated`, animationName);
//       node.removeEventListener('animationend', handleAnimationEnd);

//       resolve('Animation ended');
//     }

//     node.addEventListener('animationend', handleAnimationEnd);
//   });




// Page transitions




// Main Content



// Testimonials Carousel

let slideIndex = 1;
showSlides(slideIndex,'slide-left');

function plusSlides(n, animate) {
  showSlides(slideIndex += n, animate);
} 

function showSlides(n,animate) {
  let i;
  //let slides = document.getElementsByClassName("mySlides");
  let slides = document.getElementById("slideshow-container").getElementsByClassName('slideshow-container__slides');

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.remove('slide-left');
  slides[slideIndex - 1].classList.remove('slide-right');
  slides[slideIndex - 1].classList.add(animate);
}




// Works - Filter projects

let menuList = document.getElementById('buttons');
let links = menuList.getElementsByClassName('btn');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(' active', '');
        }
        this.className += ' active';
    });
}


function filterSelection(c) {
    let cards = document.getElementsByClassName('hovereffect');

    for(item of cards){
        if (c == 'all')  {
            item.classList.remove('hide');
            item.classList.add('show');
        }
        else if(item.getAttribute('category') == c)
        {
            item.classList.remove('hide');
            item.classList.add('show');
        }
        else {
            item.classList.remove('show');
            item.classList.add('hide');
        }
    }
}

// Contact page

