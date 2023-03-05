let parsedProduct = JSON.parse(localStorage.getItem('cart'));
console.log(parsedProduct);
parsedProduct.reduce((acc,item) =>{
    if(item.type === 'fruit'){
        acc.fruit.push(item);
    }else if(item.type === 'product'){
        acc.product.push(item);
    }
},{fruit:[],product:[]})