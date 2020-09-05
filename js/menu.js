let icon = document.getElementById("hamburger-1");
let menu = document.getElementById("menu");

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      if (icon.classList.contains("is-active")) {
        menu.classList.add("open")
      }
      else {
          menu.classList.remove("open")
      }
    });
    document.addEventListener('keydown', function (esc) {
        if (esc.keyCode === 27) {
            if (icon.classList.contains("is-active")) {
                menu.classList.remove("open");
                icon.classList.remove("is-active");
            }
        }
    });
});

document.addEventListener('keydown', function (m) {
    if (m.keyCode === 77) {
        icon.classList.toggle("is-active");
        if (icon.classList.contains("is-active")) {
            menu.classList.add("open")
          }
          else {
              menu.classList.remove("open")
          }
    }
});

// $(document).mouseup(function (outClick){
//     if (!$(".modal").is(outClick.target) &&
//     $(".modal").has(outClick.target).length === 0) {
//         if (icon.classList.contains("is-active")) {
//             menu.classList.remove("open");
//             icon.classList.remove("is-active");
//         }
//     }
// });

//accordion

let accordion = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var subMenu = this.nextElementSibling;
    if (subMenu.style.maxHeight){
        subMenu.style.maxHeight = null;
    } else {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    } 
  });
  
}
//accordion end

//slick nav 

$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('.top-nav-wrapper').addClass('slik');
        $('.order-button-top-nav').addClass('active');
        $('.go-top-link').addClass('active');
    } else {
        $('.top-nav-wrapper').removeClass('slik');
        $('.order-button-top-nav').removeClass('active');
        $('.go-top-link').removeClass('active');
    }
});

//slick nav end