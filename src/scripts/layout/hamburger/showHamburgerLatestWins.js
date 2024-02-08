export const showHamburgerLatestWins = (
  hambSection,
  latestWinsSection,
  drawerOverlayLatestWins
) => {
  hambSection.classList.add("hamburger_open_wins");
  latestWinsSection.classList.add("latest-wins_show-in-hamburger");
  drawerOverlayLatestWins.classList.add("drawer-overlay_show");
};
