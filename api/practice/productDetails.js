let productUrl = new URL(location.href);
let product = JSON.parse(productUrl.searchParams.get('product'));
console.log(product);