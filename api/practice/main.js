let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
document.body.append(mainDiv);

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(products => {
        console.log(products);
        for (const product of products.products) {

            let productDiv = document.createElement('div');
            productDiv.classList.add('productDiv');
            productDiv.onclick = function (eo) {
                let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
                cartStorage.push(product);
                localStorage.setItem('cart', JSON.stringify(cartStorage));
                let counter = document.getElementById('counter');
                counter.innerText = cartStorage.length;

            }

            mainDiv.append(productDiv);
            let imageProduct = document.createElement('img');
            imageProduct.classList.add('photo');
            imageProduct.src = product.thumbnail;
            productDiv.append(imageProduct);


        }
    })
