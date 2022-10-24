var pageIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"];
var dotId = ["myDots1", "myDots2", "myDots3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(pageIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(pageIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);
  var dotsClass = dots + " active";

  if(n > slides.length) {pageIndex[no] = 1}
  if(n < 1)  {pageIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
     dots[i].className = dotId[no];
  }

  slides[pageIndex[no]-1].style.display = "block";
  dots[pageIndex[no]-1].className += " active";
}