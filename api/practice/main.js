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
            mainDiv.append(productDiv);
            let imageProduct = document.createElement('img');
            imageProduct.classList.add('photo');
            imageProduct.src = product.thumbnail;
            productDiv.append(imageProduct);

            let cartCircle = document.createElement('div');
            cartCircle.classList.add('cartCircle');

            let circleImg = document.createElement('img')
            circleImg.src = './icons/trolley.png';
            circleImg.classList.add('circleImg')
            cartCircle.append(circleImg);
            productDiv.append(cartCircle);

            cartCircle.addEventListener('click',() =>{
                let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
                cartStorage.push(product);
                localStorage.setItem('cart', JSON.stringify(cartStorage));
            })
        }


    })

