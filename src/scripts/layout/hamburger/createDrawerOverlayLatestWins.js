import { gameAppNode } from "../getGameAppNode";

export const createDrawerOverlayLatestWins = () => {
  const drawerOverlayLatestWins = document.createElement("div");
  drawerOverlayLatestWins.classList.add(
    "drawer-overlay",
    "drawer-overlay_wins"
  );
  gameAppNode.appendChild(drawerOverlayLatestWins);

  return drawerOverlayLatestWins;
};
