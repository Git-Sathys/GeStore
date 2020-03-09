
const items = document.querySelectorAll(".accordeon a");

function toggleaccordeon(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleaccordeon));
