let products = JSON.parse(localStorage.getItem('cart'));
console.log(products);

if(products === null){
    console.log('add it');
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

},{smartphones:[],fragrances:[],skincare:[],groceries:[],homeDecoration:[]})
    console.log(reducedProducts.homeDecoration);
}



