let productUrl = new URL(location.href);
console.log(productUrl.searchParams.get('product'));
let product = JSON.parse(productUrl.searchParams.get('product'));
console.log(product);

let slideShowDiv = document.getElementById("slideshow-container");
if(product.images.length === 0){
 console.log('There is no photos at the moment');
}else {

for (const element of product.images) {
 let slides = document.createElement('div');
 let classes = ["mySlides", "fade"];
 slides.classList.add(...classes);
 slideShowDiv.append(slides);

let img = document.createElement('img');
img.src = element;
slides.append(img);
}

//слайдер
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
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
}
