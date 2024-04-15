const iconCart = document.querySelector('.icon-cart');

const body = document.querySelector('body');

const closeCart = document.querySelector('.close');

const listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

iconCart.addEventListener('click',() =>{
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click',() => {
    body.classList.toggle('showCart');
})

const addCartToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}" alt="Jergen Product">
                </div>
                <div class="name">
                    ${info.name}
                </div>
                <div class="totalprice">
                    $${info.price * item.quantity}
                </div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span class="">${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCartHTML.appendChild(newItem);

        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if()  
})

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })

}
