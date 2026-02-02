

const addToCartButton = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');

let count = parseInt(cartCount.textContent);

addToCartButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        count++;
        cartCount.textContent = count;

        button.textContent = "✔Added!"
        button.disabled = true;
        button.style.backgroundColor = "green";
        button.style.transform = "scale(1.05)";

        setTimeout(()=>{
            button.style.transform = "scale(1)";
        },200);
    });
});