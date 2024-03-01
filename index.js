document.querySelector('.link-elements').addEventListener('click',function(e){
    e.preventDefault();
    // console.log(e.target)
    if(e.target.classList.contains('nav-link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior:'smooth'
        })
    }
})

const lazyImages = document.querySelectorAll(".lazy-load");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      const imgSrc = lazyImage.getAttribute("data-src");

      lazyImage.src = imgSrc;
      observer.disconnect(lazyImage);
    }
  });
});

lazyImages.forEach((lazyImage) => {
  observer.observe(lazyImage);
});

document.querySelector('.menu-icon').addEventListener('click',()=>{
  document.querySelector('.menu-icon').classList.add('active');
  document.querySelector('.cross-icon').classList.remove('active');
  document.querySelector('.mobile-link-elements').classList.remove('active');
})

document.querySelector('.cross-icon').addEventListener('click',()=>{
  document.querySelector('.menu-icon').classList.remove('active');
  document.querySelector('.cross-icon').classList.add('active');
  document.querySelector('.mobile-link-elements').classList.add('active');
})

document.querySelector('.btn').addEventListener('click',function(){
  window.location.href='./form.html'
})

let typed = new Typed(".auto-typed",{
  strings:["Solutions"],
  typeSpeed:100,
  backSpeed:150,
  loop:true
})

ScrollReveal().reveal('.section', {
  duration: 1800,
  origin: 'bottom',
  distance: '150px',
  reset:true
});