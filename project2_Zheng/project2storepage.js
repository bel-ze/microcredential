//MENU
console.log("Hello!");
const MenuItems = document.querySelector('.homeHeader2');
const clickButton = document.querySelector('.iconMenu');
window.addEventListener("resize", function(){
  const screenWidth = window.innerWidth;

  if (screenWidth>1001) {
      MenuItems.style.display = "block"
      console.log(`Windowwidth: ${screenWidth}`);
  }

  else {
    MenuItems.style.display = "none";
  }
})
clickButton.addEventListener("click",function(){
  console.log("Inside Function!");

  if (MenuItems.style.display === "block") {
    MenuItems.style.display = "none";
    console.log("If works");
}

else {
  MenuItems.style.display = "block"
  console.log("Else works");
  }

})


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

  // MODAL 2
  const addtoCartButton2 = document.querySelector('#wind2')
  const closeModal2 = document.querySelector('#closeModal2')
  const modalWindow2 = document.querySelector('#modalWindow2')

  addtoCartButton2.addEventListener('click', function(){
    modalWindow2.style.display = 'block';
  })
  closeModal2.addEventListener('click', function(){
    modalWindow2.style.display = 'none';
  })

  // MODAL 3
  const addtoCartButton3 = document.querySelector('#wind3')
  const closeModal3 = document.querySelector('#closeModal3')
  const modalWindow3 = document.querySelector('#modalWindow3')

  addtoCartButton3.addEventListener('click', function(){
    modalWindow3.style.display = 'block';
  })
  closeModal3.addEventListener('click', function(){
    modalWindow3.style.display = 'none';
  })

  // MODAL 4
  const addtoCartButton4 = document.querySelector('#wind4')
  const closeModal4 = document.querySelector('#closeModal4')
  const modalWindow4 = document.querySelector('#modalWindow4')

  addtoCartButton4.addEventListener('click', function(){
    modalWindow4.style.display = 'block';
  })
  closeModal4.addEventListener('click', function(){
    modalWindow4.style.display = 'none';
  })

    // MODAL 5
    const addtoCartButton5 = document.querySelector('#wind5')
    const closeModal5 = document.querySelector('#closeModal5')
    const modalWindow5 = document.querySelector('#modalWindow5')

    addtoCartButton5.addEventListener('click', function(){
      modalWindow5.style.display = 'block';
    })
    closeModal5.addEventListener('click', function(){
      modalWindow5.style.display = 'none';
    })

      // MODAL 6
      const addtoCartButton6 = document.querySelector('#wind6')
      const closeModal6 = document.querySelector('#closeModal6')
      const modalWindow6 = document.querySelector('#modalWindow6')

      addtoCartButton6.addEventListener('click', function(){
        modalWindow6.style.display = 'block';
      })
      closeModal6.addEventListener('click', function(){
        modalWindow6.style.display = 'none';
      })



// STORAGE

/*
const firstName = document.querySelector('#firstN')
const lastName = document.querySelector('#lastN')
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click', function(){

  localStorage.setItem('productN',productName.value);
  sessionStorage.setItem('productP',productPrice.value);
  firstName.value = ""
  lastName.value = ""
})

*/
