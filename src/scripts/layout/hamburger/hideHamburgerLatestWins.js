export const hideHamburgerLatestWins = (
  hambSection,
  latestWinsSection,
  drawerOverlayLatestWins
) => {
  hambSection.classList.remove("hamburger_open_wins");
  latestWinsSection.classList.remove("latest-wins_show-in-hamburger");
  drawerOverlayLatestWins.classList.remove("drawer-overlay_show");
};
