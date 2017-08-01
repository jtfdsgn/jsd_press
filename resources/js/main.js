var slides = document.querySelectorAll('#slideshow_header .slide');
var currentSlide = 0;

for(var i=0; i<slides.length; i++) {
    slides[i].style.position = 'absolute';
}

var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
};
