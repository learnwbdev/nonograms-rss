import { hideHamburgerLatestWins } from "./hideHamburgerLatestWins";
import { closeHamburgerMenu } from "./closeHamburgerMenu";
import { openHamburgerMenu } from "./openHamburgerMenu";

export const handleHamburgBtnClick = (
  hambSection,
  latestWinsSection,
  drawerOverlayHamburg,
  drawerOverlayLatestWins,
  burgerBtn,
  BurgerToOpenSvg,
  BurgerToCloseSvg
) => {
  if (hambSection.classList.contains("hamburger_open_wins")) {
    hideHamburgerLatestWins(
      hambSection,
      latestWinsSection,
      drawerOverlayLatestWins
    );
  } else if (hambSection.classList.contains("hamburger_open_main")) {
    closeHamburgerMenu(
      hambSection,
      drawerOverlayHamburg,
      burgerBtn,
      BurgerToOpenSvg
    );
  } else {
    openHamburgerMenu(
      hambSection,
      drawerOverlayHamburg,
      burgerBtn,
      BurgerToCloseSvg
    );
  }
};
