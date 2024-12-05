let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>0)
});
menu.onclick=()=>{
  navbar.classList.toggle('active');
}
window.onscroll=()=>{
  navbar.classList.remove('active');
}

//validate form 

let nameError=document.getElementById('name-error');
let phoneError=document.getElementById('phone-error');
let emialError=document.getElementById('email-error');
let messageError=document.getElementById('message-error');
let submitError=document.getElementById('submit-error');
let successMessage=document.getElementById('success-mesg');
let clearform=document.getElementById('contactForm');

//validate the name input field
function validationName(){
let name= document.getElementById('contact-name').value;

if(name.length==0){
    nameError.innerHTML='Name is required';
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML='Enter your full name';
    return false;
}
 nameError.innerHTML='<i class="fas fa-check-circle"><i>';
 return true;
}

//validate phone number 
function validationPhone(){
    let phone= document.getElementById('contact-phone').value;
    
    if(phone.length==0){
        phoneError.innerHTML='Phone is required';
        return false;
    }
    if(phone.length!=10){
        phoneError.innerHTML='10 digits number';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digit please';
        return false;
    }

    phoneError.innerHTML= '<i class="fas fa-check-circle"><i>';
    return true;
   }

   //validate email input 
function validateEmail(){
    let email=document.getElementById('contact-email').value;

    if(email.length==0){
        emialError.innerHTML='Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emialError.innerHTML='Email Invalid';
        return false;
    }

    emialError.innerHTML='<i class="fas fa-check-circle"><i>';
    return true;
   }

// validate message textarea 

function validateMessage(){
    let message=document.getElementById('contact-message').value;
    let required=30;
    let left=required - message.length;

    if(left > 0){
        messageError.innerHTML= left + 'more character required';
        return false;
    }

    messageError.innerHTML= '<i class="fas fa-check-circle"><i>';
    return true;
   }

function validateForm(){
    if(!validationName() || !validationPhone() ||
       !validateEmail() || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
    
    else{
      //successMessage.innerHTML='Successfuly Submited';
        alert('Form Successfuly Submitted');
     }
} 
 
    // Clear form
    function clearFormFunction() {
        //document.getElementById("contactForm").reset();
        // nameError.innerHTML='';
        // emialError.innerHTML='';
        // phoneError.innerHTML='';
        // messageError.innerHTML='';
        // successMessage.innerHTML='';
      }




//add to cart js script
let cart = [];

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Clear existing cart items
  cartItemsElement.innerHTML = '';

  // Populate cart items
  let total = 0;
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'cart-item';
    listItem.textContent = `${item.name}: ${formatPrice(item.price)}`;
    cartItemsElement.appendChild(listItem);

    total += item.price;
  });

  // Update total
  totalElement.textContent = `Total: ${formatPrice(total)}`;
}

function formatPrice(price) {
  // Use the Euro symbol (€) and format the price to two decimal places
  return `€${price.toFixed(2)}`;
}

function checkout() {
    if(cart==0){
        alert(' Your Cart is Empty, Please select a Product')
    }
    else{
        alert('Thank you for your order!');
    }
  
  cart = []; // Clear the cart after checkout
  updateCart();
}

//Customer feedback scroll script
let feedbackIndex = 0;

function scrollFeedback(n) {
  feedbackIndex += n;
  showFeedback();
}

function showFeedback() {
  const feedbackContainer = document.getElementById('feedback-container');
  const feedbackItems = document.getElementsByClassName('feedback-item');
  const itemWidth = feedbackItems[0].offsetWidth + 20; // Width of an item including margin

  if (feedbackIndex < 0) {
    feedbackIndex = feedbackItems.length - 1;
  } else if (feedbackIndex >= feedbackItems.length) {
    feedbackIndex = 0;
  }

  feedbackContainer.style.transform = `translateX(-${itemWidth * feedbackIndex}px)`;
}

// Auto-scroll feedback every 5 seconds
setInterval(function() {
  scrollFeedback(1);
}, 5000);
