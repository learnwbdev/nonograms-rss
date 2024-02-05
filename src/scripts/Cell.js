import { actionTypes } from "./actions/actionTypes";
import { changeCellContent } from "./cell/changeCellContent";
import {
  getStateAfterMainAction,
  getStateAfterSubAction,
} from "./cell/changeState";
import { getDeltaForNewState } from "./cell/getDeltaForNewState";
import { playSoundOnStateChange } from "./cell/playSoundOnStateChange";

export class Cell {
  #xLeft;

  #yTop;

  #state;

  #correctVal;

  #actions = actionTypes;

  constructor(xLeft, yTop, currentState, correctValue) {
    this.#xLeft = xLeft;
    this.#yTop = yTop;
    this.#state = currentState;
    this.#correctVal = correctValue;
  }

  #changeState(newState, canvasContext, boardSettings, board) {
    const prevState = this.#state;
    this.#state = newState;
    changeCellContent(canvasContext, this, boardSettings, board);
    const stateDelta = getDeltaForNewState(
      this.#state,
      this.#correctVal,
      prevState
    );
    return stateDelta;
  }

  getCellData() {
    return {
      x: this.#xLeft,
      y: this.#yTop,
      state: this.#state,
    };
  }

  handleAction(actionType, canvasContext, boardSettings, board) {
    const actions = this.#actions;
    let newState;
    switch (actionType) {
      case actions.mainAction:
        newState = getStateAfterMainAction(this.#state);
        break;
      case actions.subAction:
        newState = getStateAfterSubAction(this.#state);
        break;
      default:
        break;
    }
    playSoundOnStateChange(newState);
    const stateDelta = this.#changeState(
      newState,
      canvasContext,
      boardSettings,
      board
    );
    return { newState, stateDelta };
  }
}
