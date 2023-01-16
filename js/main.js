const menuBtn = document.querySelector(".menu");
const subMenu = document.querySelector(".sub_menu_wrap");

menuBtn.addEventListener("click", () => {
  subMenu.classList.remove("out");
  subMenu.classList.toggle("active");
  activeChecker(subMenu, "active");
});

function activeChecker(el, className) {
  if (!el.classList.contains(className)) {
    subMenu.classList.toggle("out");
  }
}

document.addEventListener("click", function (evt) {
  targetEl = evt.target;
  do {
    if (targetEl == menuBtn) return;
    targetEl = targetEl.parentNode;
  } while (targetEl);
  subMenu.classList.remove("out");
  activeChecker(subMenu, "active");
});
