import { FILLED, EMPTY, CROSS } from "../cell/cellStates";
import { soundEffects } from "./soundEffects";

export const soundStateMap = {
  [FILLED]: soundEffects.filled,
  [EMPTY]: soundEffects.empty,
  [CROSS]: soundEffects.cross,
};
