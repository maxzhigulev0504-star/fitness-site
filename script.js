let cartCount = 0;

function addToCart(){
cartCount++;
document.getElementById("cart-count").innerText = cartCount;
}

window.addEventListener("scroll", function(){
let elements = document.querySelectorAll(".card");
elements.forEach(el=>{
let position = el.getBoundingClientRect().top;
let screenPosition = window.innerHeight / 1.2;

if(position < screenPosition){
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
});
