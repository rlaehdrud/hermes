let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    
    document.body.classList.add('scroll-down');
    document.body.classList.remove('scroll-up');
  } else {
    
    document.body.classList.add('scroll-up');
    document.body.classList.remove('scroll-down');
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});




window.addEventListener('scroll', function() {
  const headerTop = document.querySelector('.header_top');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) { 
    headerTop.style.backgroundColor = 'rgba(255, 255, 255, 1)';  
  } else {
    headerTop.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';  
  }
});
