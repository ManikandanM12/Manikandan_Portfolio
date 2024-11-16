//SHOW MENU

const showmenu = (ToggleId, MenuId) => {
  const toggle = document.getElementById(ToggleId),
    menu = document.getElementById(MenuId);

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
};
showmenu("nav_icon", "nav_menu");

//ACTIVE&REMOVE_ACTIVE

const navlink = document.querySelectorAll(".nav_link");
navlink.forEach(active=> active.classList.remove("active"))
function linkAction() {
  navlink.forEach(active => active.classList.remove("active"))
  this.classList.add("active")
  const navHide=document.getElementById("nav_menu")
  navHide.classList.remove("show")
}
navlink.forEach(active=> active.addEventListener("click", linkAction));


