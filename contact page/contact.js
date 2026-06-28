// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){

alert("Please fill in all fields.");

return;

}

alert("Thank you! Your message has been sent.");

form.reset();

});


// FAQ Accordion

const faq=document.querySelectorAll(".faq-btn");

faq.forEach(button=>{

button.addEventListener("click",()=>{

const item=button.parentElement;

item.classList.toggle("active");

});

});