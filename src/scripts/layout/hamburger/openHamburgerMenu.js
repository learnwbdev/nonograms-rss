export const openHamburgerMenu = (
  hambSection,
  drawerOverlayHamburg,
  burgerBtn,
  BurgerToCloseSvg
) => {
  const btnHamburg = burgerBtn;
  const htmlElement = document.documentElement;
  htmlElement.classList.add("no-scroll");
  hambSection.classList.add("hamburger_open_main");
  drawerOverlayHamburg.classList.add("drawer-overlay_show");
  hambSection.classList.add("hamburger_show");
  btnHamburg.innerHTML = BurgerToCloseSvg;
  btnHamburg.firstChild.classList.add("btn__icon");
};
