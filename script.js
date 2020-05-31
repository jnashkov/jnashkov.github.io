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

const swup = new Swup();


// Testimonials Carousel





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






