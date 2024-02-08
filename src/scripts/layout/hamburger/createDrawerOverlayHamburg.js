import { gameAppNode } from "../getGameAppNode";

export const createDrawerOverlayHamburg = () => {
  const drawerOverlayHamburg = document.createElement("div");
  drawerOverlayHamburg.classList.add(
    "drawer-overlay",
    "drawer-overlay_hamburg"
  );
  gameAppNode.appendChild(drawerOverlayHamburg);

  return drawerOverlayHamburg;
};
