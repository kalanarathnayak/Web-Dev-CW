let slideIndex = 1;
showSlides(slideIndex);

// Next and previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
//Thumbnail image controls - changing slide by clicking the dots
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");   //adds all slide images into an array
  let dots = document.getElementsByClassName("dot");  //adds all the dots into an array
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";   //displays the slide of the corresponding element
  dots[slideIndex - 1].className += " active";  //highlights the dot corresponding to the slide
}

// Call function plusSides at intervals of 5000ms (5 seconds)
setInterval(function () {
  plusSlides(1);
}, 5000);
