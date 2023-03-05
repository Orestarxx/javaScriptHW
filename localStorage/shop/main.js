let products = [{name:'Melko', price:4, photo:'https://th.bing.com/th/id/OIP.HYjQ_NevI_w78WS0ETtH5wHaHa?pid=ImgDet&rs=1',type:'product'},
    {name:'Bread', price: 2, photo:'https://th.bing.com/th/id/R.b58b8586c0e5252f1f9a90722e855776?rik=I73kDmLG6dnqbA&riu=http%3a%2f%2fkorusno-znatu.in.ua%2fwp-content%2fuploads%2f2018%2f04%2fhlib.jpg.pagespeed.ce.tYuFhsDlJS.jpg&ehk=RnpBBCr6j2Z4xCUfWSzNqA2%2fMyla5GMCwVY877ENYsc%3d&risl=&pid=ImgRaw&r=0',type:'product'},
    {name:'PineApple', price:5, photo:'https://mlwzfowrvmp1.i.optimole.com/sKK1WUU-vn0fVdo7/w:auto/h:auto/q:auto/https://orderezy.com.au/wp-content/uploads/2020/09/PINEAPPLES-TROPICAL-EACH.jpg',type:'fruit'},
    {name:'Apple', price:0.25, photo:'https://th.bing.com/th/id/OIP.7i6w3lSzlmictgP09w7SCAHaFn?pid=ImgDet&rs=1',type:'fruit'},
    {name:'Sour cream', price:2, photo:'https://th.bing.com/th/id/OIP.GCsB46oh2UNCH9lGFhtBEAHaHx?pid=ImgDet&rs=1',type:'product'},
    {name:'Chips', price:1.50, photo:'https://th.bing.com/th/id/R.99d7c71dea11e8bec6082caf71b89722?rik=%2bnJTmZU0G4pzzg&pid=ImgRaw&r=0',type:'product'},
    {name:'Ketchup', price:0.75, photo:'https://www.clipartkey.com/mpngs/m/250-2503609_ketchup-png-heinz-ketchup-700g.png',type:'product'},
    {name:'Peach', price:1, photo:'https://th.bing.com/th/id/R.e0ada2968527043cd450c8ddd1e1a01d?rik=3iasQ8svEGmNhA&riu=http%3a%2f%2flh4.ggpht.com%2f_OaYG005JPDs%2fTFMaAg5CStI%2fAAAAAAAABoA%2fjHmu1r5hAVc%2fs640%2fpeaches.jpg&ehk=SB5Q%2fgZpMnVAY24LriF7vI%2bpQACC53zb3H2XYEhMtuI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',type:'fruit'},
    {name:'Grapes', price:2, photo:'https://th.bing.com/th/id/R.9a377ed482dbf83260bfb61b4cf76e30?rik=AdslmRRg5Cnl7w&riu=http%3a%2f%2finfowiki.com%2fafbeelding%2f114%2fGrapes&ehk=4h%2bx6xZHCQCb1Njb3KX%2fEW1NDbS7Qv3mUIvOwrlNLvY%3d&risl=&pid=ImgRaw&r=0',type:'fruit'},
    {name:'Bear', price:2, photo:'https://www.ladycarehealth.com/wp-content/uploads/2013/03/Beer2.jpg',type:'product'},
    {name:'', price:0, photo:''},
    {name:'', price:0, photo:''}
    // {name:'', price:0, photo:''},
    // {name:'', price:0, photo:''},
    // {name:'', price:0, photo:''},
    // {name:'', price:0, photo:''},
    // {name:'', price:0, photo:''},
    // {name:'', price:0, photo:''},
    // {name:'', price:0, photo:''}

];


const productsHolder = document.createElement('div');
productsHolder.classList.add('productsHolder');
document.body.append(productsHolder);

for (const product of products) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('productDiv');
    productDiv.onclick = function (eo) {
       let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
       cartStorage.push(product);
       localStorage.setItem('cart',JSON.stringify(cartStorage));
    }
    productsHolder.append(productDiv);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.innerHTML = `<b>${product.name}</b>`;

    const imageHolder = document.createElement('div');
    imageHolder.classList.add('imageHolder');

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = product.photo;
    imageHolder.append(image);
    productDiv.append(nameDiv,imageHolder);
}
