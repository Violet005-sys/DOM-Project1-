const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const deletebtn = document.querySelectorAll('.delete-btn');
const icon = document.getElementById('#icon')

const likeBtn = document.querySelectorAll('.like-btn');
const close = document.querySelector('.close')
const cart = document.querySelector('.cartTab')
 const shoppingCart = document.querySelector('.icon-cart')

 const cartItem = document.querySelector('cart-item');


const increaseQuantity = () => {
const quantityElement = document.querySelector('.quantity');
let quantity = parseInt(quantityElement.textContent);
quantity ++;
quantityElement.textContent = quantity;
calculateTotal();
}

const decreaseQuantity = () => {
    const quantityElement = document.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if(quantity > 0){
    quantity --;
    }
    quantityElement.textContent = quantity;
    calculateTotal();
}

const deleteItem = () => {
    //cartItem.remove();
    //cartItem.setAttribute('style', 'display: none;')

    calculateTotal();
}

const toggleLike = () => {
    const changeIconColor = () => {
        let button = this.parentElement.icon
        button.setAttribute('style', 'color: #ef2525;')
    }
    this.classList.toggle(changeIconColor());
}

const calculateTotal = () => {
    const prices = document.querySelectorAll('.price');
            let total = 0;
            prices.forEach(price => {
                const quantity = parseInt(price.parentElement.querySelector('.quantity').textContent);
                const priceValue = parseInt(price.textContent.substring(1)); // Remove $ sign
                total += quantity * priceValue;
            });
            document.querySelector('.total').textContent = `Total: $${total}`;
        
}

//Event Listeners

close.addEventListener('click',() => {
    cart.setAttribute('style', 'display: none;')
})

shoppingCart.addEventListener('click',() => {
    cart.removeAttribute('style')
})


plus.forEach(button => {
    button.addEventListener('click',increaseQuantity);
});

minus.forEach(button => {
    button.addEventListener('click', decreaseQuantity);
});

deletebtn.forEach(button => {
    button.addEventListener('click', deleteItem)
});

likeBtn.forEach(button => {
    button.addEventListener('click',toggleLike)
});

calculateTotal();