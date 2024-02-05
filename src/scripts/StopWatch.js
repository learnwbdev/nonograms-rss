import { createStopWatchNode } from "./layout/createStopWatchNode";
import { formatTimeInSec } from "./stop-watch/formatTimeInSec";

export class StopWatch {
  #elapsedTimeSec;

  #startTimeMSec;

  #intervalId;

  #mSecInSec = 1000;

  #stopWatchNode;

  constructor(className) {
    this.#stopWatchNode = createStopWatchNode(className);
  }

  updateTimeInSec() {
    const currTimeInMSec = Date.now();
    const elapsedTimeMSec = currTimeInMSec - this.#startTimeMSec;
    this.#elapsedTimeSec = Math.floor(elapsedTimeMSec / this.#mSecInSec);
    this.#stopWatchNode.innerText = this.getTimeFormatted();
  }

  initialize(isRestart, elapsedTimeSecSaved) {
    const elapsedTimeSecZero = 0;
    this.#elapsedTimeSec = isRestart ? elapsedTimeSecSaved : elapsedTimeSecZero;
    this.#stopWatchNode.innerText = this.getTimeFormatted();
  }

  start() {
    const startTimeInMSec = Date.now();
    const oneSecInMSec = 1000;
    this.#startTimeMSec =
      startTimeInMSec - this.#elapsedTimeSec * this.#mSecInSec;
    this.#intervalId = setInterval(
      this.updateTimeInSec.bind(this),
      oneSecInMSec
    );
  }

  stop() {
    const stopTimeInMSec = Date.now();
    clearInterval(this.#intervalId);
    this.#intervalId = null;
    const elapsedTimeMSec = stopTimeInMSec - this.#startTimeMSec;
    this.#elapsedTimeSec = Math.floor(elapsedTimeMSec / this.#mSecInSec);
    this.#stopWatchNode.innerText = this.getTimeFormatted();
  }

  reset() {
    this.stop();
    this.#elapsedTimeSec = 0;
  }

  getTimeInSeconds() {
    return this.#elapsedTimeSec;
  }

  getTimeFormatted() {
    const timeStr = formatTimeInSec(this.#elapsedTimeSec);
    return timeStr;
  }
}
