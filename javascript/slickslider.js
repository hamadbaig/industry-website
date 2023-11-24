// $(document).ready(function() {
//     $('.slider-1').slick({
//       dots: false,
//       infinite: false,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       pauseOnDotsHover: false,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//     });
// });
$('.slider-1').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  pauseOnHover: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1450,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
      {
        breakpoint: 3000,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});