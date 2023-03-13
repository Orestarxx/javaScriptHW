let productUrl = new URL(location.href);
let product = JSON.parse(productUrl.searchParams.get('product'));
console.log(product);

let mainDiv = document.getElementById('main');
for (const item of product.images) {
 let slides = document.getElementById('slides');
 let slide = document.createElement('div');
 let classesToAdd = ['slide','s1'];
 slide.classList.add(...classesToAdd);


 slides.append(slide)

}