

const butt = document.createElement("button");
butt.innerText = 'Delete all items'
butt.addEventListener('click',() =>{
    localStorage.clear()
})
document.body.append(butt)

let mainDiv = document.createElement('div');
document.body.append(mainDiv)

let parsedProduct = JSON.parse(localStorage.getItem('cart'));
if(parsedProduct) {
        let sortedProducts = parsedProduct.reduce((accumulator, item) => {
            if (item.type === 'fruit') {
                accumulator.fruit.push(item);
            } else if (item.type === 'product') {
                accumulator.product.push(item);

            }
            return accumulator
        }, {fruit: [], product: []});
    console.log(sortedProducts.fruit);

    for (const product of sortedProducts.fruit) {
        let division = document.createElement('div')
            division.innerText = `${product.name}`
                mainDiv.append(division)
        }
}else   if(parsedProduct === null){
    console.log('add products to your cart to buy them when it would be comfortable for you');


}

