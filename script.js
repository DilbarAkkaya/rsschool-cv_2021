const hamburgerMenu = document.querySelector ('.hamburger-menu');
const navlist = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
 
  navLinks.forEach((link,index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
  }

navlist.classList.toggle("change");
hamburgerMenu.classList.toggle("active");});

  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'}
      )
      hamburgerMenu.classList.remove('active');
      navlist.classList.remove('change');
      
      })
    }})
  
  
