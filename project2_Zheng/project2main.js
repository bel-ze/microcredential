//MENU


const MenuItems = document.getElementById('Menu_items');
MenuItems.style.maxHeight = "1000px";

function toggleMenu(){
  if (MenuItems.style.maxHeight == "0px")
  {
    MenuItems.style.maxHeight = "200px";
  }
  else {
    MenuItems.style.maxHeight = "0px";
  }
}

// MODAL WINDOW
const openItem1 = document.querySelector('#openItem1')
const closeModal = document.querySelector('#closeModal')
const modalWindow = document.querySelector('.modalWindow')

openItem1.addEventListener('click', function(){
  modalWindow.style.display = 'block';
})
closeModal.addEventListener('click', function(){
  modalWindow.style.display = 'none';
})

// STORAGE
const firstName = document.querySelector('#firstN')
const lastName = document.querySelector('#lastN')
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click', function(){

  localStorage.setItem('productN',productName.value);
  sessionStorage.setItem('productP',productPrice.value);
  firstName.value = ""
  lastName.value = ""
})
