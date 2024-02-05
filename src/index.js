import "./sass/style.scss";
import NonogramsData from "./data/nonograms.json";
import GameApp from "./scripts/GameApp";
import { createHeader } from "./scripts/layout/createHeader";
import { createRandomButton } from "./scripts/layout/createRandomButton";

createHeader();
const randomBtn = createRandomButton();
const canvasClassName = "gameboard";
const stopWatchClassName = "stop-watch";
const gameApp = new GameApp(NonogramsData, canvasClassName, stopWatchClassName);

randomBtn.addEventListener("click", gameApp.setRandomPuzzle.bind(gameApp));

console.log(gameApp.getNonogramsList());
gameApp.changeGameToPuzzle(1);
