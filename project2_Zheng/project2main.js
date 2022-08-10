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
