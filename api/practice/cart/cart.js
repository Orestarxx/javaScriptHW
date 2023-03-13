let products = JSON.parse(localStorage.getItem('cart'));
let mainDiv = document.getElementById('main');
console.log(products);
if(products === null){
    let emptyHolder = document.createElement('div');
    emptyHolder.classList.add('emptyProductHolder');
    mainDiv.append(emptyHolder);

   let emptyProduct = document.createElement("h2");
   emptyProduct.innerText = 'Add products to the cart';
   emptyHolder.append(emptyProduct);
}else {
 let reducedProducts = products.reduce((accumulator,product) =>{
    if(product.category === 'smartphones'){
        accumulator.smartphones.push(product);
    }else if(product.category === 'fragrances'){
        accumulator.fragrances.push(product);
    }else if(product.category === 'skincare'){
        accumulator.skincare.push(product);
    }else if(product.category === 'groceries'){
        accumulator.groceries.push(product);
    }else if(product.category === 'home-decoration'){
        accumulator.homeDecoration.push(product);
    }
    return accumulator

},{smartphones:[],fragrances:[],skincare:[],groceries:[],homeDecoration:[]});
    let smartphonesDiv = document.createElement('div');
    smartphonesDiv.classList.add('smartphones');

 mainDiv.append(smartphonesDiv);
}



