//header hide and show
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      // hide nav
      $("nav").removeClass("summer-top-nav");
    } else {
      // show nav
      $("nav").addClass("summer-top-nav");
    }
  });
});


// Feature Carousel Silder

$(function() {
jQuery('.feature-carousel').owlCarousel({
         loop: true,
        responsiveClass: true,
         navText: ["<i class='iconarrow fas fa-chevron-left'></i>", "<i class='iconarrow fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 3,
                nav: false,
                dots: true
            },
            1100: {
                items: 5,
                nav: true,
                loop: false,
                dots: false
            }
        }
    })
    });

// header Smooth scrolling
$(function () {
  $("a.smooth-scroll").click(function() {
    // debugger;
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top - 60
    }, 1200);
  });
});

// Close mobile menu on click
$(function(){
  $(".navbar-collapse ul li a").on("click touch", function(){
    $(".navbar-toggle").click();
  });
});

// Exampale slider
// $(function() {
// jQuery('.publication-carousel').owlCarousel({
//         loop: true,
//         margin: 40,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: false,
//                 dots: true
//             },
//             600: {
//                 items: 3,
//                 nav: false,
//                 dots: true
//             },
//             1000: {
//                 items: 5,
//                 nav: true,
//                 navText: ["<i class='icon-arrow fas fa-chevron-left'></i>", "<i class='icon-arrow fas fa-chevron-right'></i>"],
//                 loop: false,
//                 dots: false
//             }
//         }
//     })
//     });


