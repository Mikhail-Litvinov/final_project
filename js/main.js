//modals

document.getElementById("openOrder").onclick = function () {
    document.getElementById("orderModal").classList.add("active");
}

document.getElementById("openOrderTopNav").onclick = function () {
    document.getElementById("orderModal").classList.add("active");
}

document.getElementById("closeOrder").onclick = function () {
    document.getElementById("orderModal").classList.remove("active");
}

$(document).mouseup(function (outClick){
    if (!$(".order-modal").is(outClick.target) &&
    $(".order-modal").has(outClick.target).length === 0) {
        document.getElementById("orderModal").classList.remove("active");
    }
});

//modals end

//anchor

$(document).ready(function() {
    $("a.anchor").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
    return false;
    });
});

//anchor end

//gallery

function openGallery() {
    document.getElementById('galleryModal').classList.add("active");
  }
  
document.getElementById("closeGallery").onclick = function () {
   document.getElementById('galleryModal').classList.remove("active");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}
  

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("gallery-slide");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "grid";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

//gallery end