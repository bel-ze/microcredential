//MENU

console.log("Hello World!");

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
