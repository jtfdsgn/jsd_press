$(document).ready(function(){
     $('#slideshow_header').slick({
       arrows: false,
       autoplay: true,
       pauseOnHover: false,
     });
     $('#slideshow_client').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       pauseOnHover: false,
       infinite: true,
     });
   });
