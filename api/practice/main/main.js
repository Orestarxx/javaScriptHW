let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
document.body.append(mainDiv);

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(products => {
        console.log(products);
        for (const product of products.products) {
            let productHolder = document.createElement('div');
            productHolder.classList.add('prHolder')
            mainDiv.append(productHolder);

            let productA = document.createElement('a');
            productA.target ='_blank';
            productA.href = `../details/detailsProduct.html?product=${JSON.stringify(product)}`;
            productHolder.append(productA);

            let productDiv = document.createElement('div');
            productDiv.classList.add('productDiv');
            productA.append(productDiv);

            let imageProduct = document.createElement('img');
            imageProduct.classList.add('photo');
            imageProduct.src = product.thumbnail;
            productDiv.append(imageProduct);

            let cartCircle = document.createElement('div');
            cartCircle.classList.add('cartCircle');
            cartCircle.addEventListener('click',() =>{
                let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
                cartStorage.push(product);
                localStorage.setItem('cart', JSON.stringify(cartStorage));
            });

            let circleImg = document.createElement('img');
            circleImg.src = '../icons/trolley.png';
            circleImg.classList.add('circleImg');
            cartCircle.append(circleImg);
            productHolder.append(cartCircle);

        }


    })

