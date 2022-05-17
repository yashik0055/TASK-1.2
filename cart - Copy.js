const bag =  document.querySelector('.bag');
const cart =  document.querySelector('.cart');
const closecartBtn = document.querySelector('.closecart');
const mcart = document.querySelector('#minicart');
const cleancartbtn =  document.querySelector('#clean-cart');


loadEventListeners()
function loadEventListeners(){
    bag.addEventListener('click', openCart);

    closecartBtn.addEventListener('click', closecart)

    cleancartbtn.addEventListener('click', ()=>{
        cartItems = [];
        clearHTML()

    })
}

//Open cart
function openCart(e){
    e.preventDefault();
    cart.classList.add('activo')
}
//Close Cart
function closecart(e) {
    e.preventDefault();
    cart.classList.remove('activo')
}

