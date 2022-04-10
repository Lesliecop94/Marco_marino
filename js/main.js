var myContact = document.querySelector('.contact-link');
var contact = document.querySelector('.form');
let cross = document.querySelector ('.cross')


myContact.addEventListener('click', function () {
    contact.classList.toggle('active');
});



cross.addEventListener('click', function () {
    contact.classList.toggle("active");
});