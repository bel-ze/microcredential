
// MODAL WINDOW

// MODAL 1
const addtoCartButton1 = document.querySelector('#wind1')
const closeModal1 = document.querySelector('#closeModal1')
const modalWindow1 = document.querySelector('#modalWindow1')

addtoCartButton1.addEventListener('click', function(){
  modalWindow1.style.display = 'block';
})
closeModal1.addEventListener('click', function(){
  modalWindow1.style.display = 'none';
})
/*

// MODAL 2
const openItem2 = document.querySelector('#openItem2')
const closeModal2 = document.querySelector('#closeModal2')
const modalWindow2 = document.querySelector('#modalWindow2')

openItem2.addEventListener('click', function(){
  modalWindow2.style.display = 'block';
})
closeModal2.addEventListener('click', function(){
  modalWindow2.style.display = 'none';
})

// MODAL 3
const openItem3 = document.querySelector('#openItem3')
const closeModal3 = document.querySelector('#closeModal3')
const modalWindow3 = document.querySelector('#modalWindow3')

openItem3.addEventListener('click', function(){
  modalWindow3.style.display = 'block';
})
closeModal3.addEventListener('click', function(){
  modalWindow3.style.display = 'none';
})

// MODAL 4
const openItem4 = document.querySelector('#openItem4')
const closeModal4 = document.querySelector('#closeModal4')
const modalWindow4 = document.querySelector('#modalWindow4')

openItem4.addEventListener('click', function(){
  modalWindow4.style.display = 'block';
})
closeModal4.addEventListener('click', function(){
  modalWindow4.style.display = 'none';
})

// MODAL 5
const openItem5 = document.querySelector('#openItem5')
const closeModal5 = document.querySelector('#closeModal5')
const modalWindow5 = document.querySelector('#modalWindow5')

openItem5.addEventListener('click', function(){
  modalWindow5.style.display = 'block';
})
closeModal5.addEventListener('click', function(){
  modalWindow5.style.display = 'none';
})

// MODAL 6
const openItem6 = document.querySelector('#openItem6')
const closeModal6 = document.querySelector('#closeModal6')
const modalWindow6 = document.querySelector('#modalWindow6')

openItem6.addEventListener('click', function(){
  modalWindow6.style.display = 'block';
})
closeModal6.addEventListener('click', function(){
  modalWindow6.style.display = 'none';
})

*/

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
