export const closeHamburgerMenu = (
  hambSection,
  drawerOverlayHamburg,
  burgerBtn,
  BurgerToOpenSvg
) => {
  const btnHamburg = burgerBtn;
  const htmlElement = document.documentElement;
  htmlElement.classList.remove("no-scroll");
  hambSection.classList.remove("hamburger_open_main");
  drawerOverlayHamburg.classList.remove("drawer-overlay_show");
  hambSection.classList.remove("hamburger_show");
  btnHamburg.innerHTML = BurgerToOpenSvg;
  btnHamburg.firstChild.classList.add("btn__icon");
};
