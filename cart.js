const bag =  document.querySelector('.bag');
const cart =  document.querySelector('.cart');
const closecartBtn = document.querySelector('.closecart');

loadEventListeners()
function loadEventListeners(){
    bag.addEventListener('click', openCart);
    closecartBtn.addEventListener('click', closecart)
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