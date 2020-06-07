// Testimonials Carousel

let slideIndex = 1;
showSlides(slideIndex,'slide-left');

function plusSlides(n, animate) {
  showSlides(slideIndex += n, animate);
} 

function showSlides(n,animate) {
  let i;
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

// Nav links active state

(function (){
  for (const link of document.querySelectorAll('#menu-side>ul>li>a')) {
      link.addEventListener('click',setActiveState);
  }
})()

function setActiveState(){
  for (const link of document.querySelectorAll('#menu-side>ul>li>a')) {
      //link.parentElement.classList = "nav-item";
      link.parentElement.classList.remove("active");
  }

  //this.parentElement.classList = "nav-item active";
  this.parentElement.classList.add("active");
}


let mainNavLinks = document.querySelectorAll("#menu-side ul li a");
let mainSections = document.querySelectorAll(".page-inner section");

let lastId;
let cur = [];


