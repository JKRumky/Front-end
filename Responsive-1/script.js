document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('navbarToggle');
  const menu = document.getElementById('navbarMenu');

  toggleButton.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}
function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
