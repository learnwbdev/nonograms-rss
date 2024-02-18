/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 984:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _data_nonograms_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(658);
/* harmony import */ var _scripts_GameApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
/* harmony import */ var _scripts_layout_createHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(870);
/* harmony import */ var _scripts_layout_createRandomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(900);
/* harmony import */ var _scripts_layout_createSettingsButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(304);
/* harmony import */ var _scripts_sound_changeSoundsMuteValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(808);
/* harmony import */ var _assets_icons_volume_up_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(800);
/* harmony import */ var _assets_icons_volume_off_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(228);
/* harmony import */ var _assets_icons_light_mode_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(328);
/* harmony import */ var _assets_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(160);
/* harmony import */ var _assets_icons_burger_to_open_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(268);
/* harmony import */ var _assets_icons_burger_to_close_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(340);
/* harmony import */ var _scripts_theme_toggleTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(640);
/* harmony import */ var _scripts_settings_restoreSavedSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(576);
/* harmony import */ var _scripts_layout_createActionButtonsSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(512);
/* harmony import */ var _scripts_layout_hamburger_createHamburgerSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(136);
/* harmony import */ var _scripts_layout_hamburger_showHamburgerLatestWins__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(392);
/* harmony import */ var _scripts_layout_hamburger_closeHamburgerMenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(836);
/* harmony import */ var _scripts_layout_hamburger_createDrawerOverlayLatestWins__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(436);
/* harmony import */ var _scripts_layout_hamburger_createDrawerOverlayHamburg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(492);
/* harmony import */ var _scripts_layout_hamburger_handleHamburgBtnClick__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(592);
/* harmony import */ var _scripts_layout_hamburger_hideHamburgerLatestWins__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(552);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }























document.body.classList.add("page");
// create in this order for the correct order in the stacking context
(0,_scripts_settings_restoreSavedSettings__WEBPACK_IMPORTED_MODULE_13__/* .restoreSavedSettings */ .N)();
(0,_scripts_layout_createHeader__WEBPACK_IMPORTED_MODULE_2__/* .createHeader */ ._)();
await document.fonts.ready;
var _createSettingsButton = (0,_scripts_layout_createSettingsButtons__WEBPACK_IMPORTED_MODULE_4__/* .createSettingsButtons */ .E)(),
  soundBtn = _createSettingsButton.soundBtn,
  themeBtn = _createSettingsButton.themeBtn,
  burgerBtn = _createSettingsButton.burgerBtn;
var gameApp = new _scripts_GameApp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c(_data_nonograms_json__WEBPACK_IMPORTED_MODULE_0__);
var randomBtn = (0,_scripts_layout_createRandomButton__WEBPACK_IMPORTED_MODULE_3__/* .createRandomButton */ .U)();
var drawerOverlayLatestWins = (0,_scripts_layout_hamburger_createDrawerOverlayLatestWins__WEBPACK_IMPORTED_MODULE_16__/* .createDrawerOverlayLatestWins */ .w)();
var _createHamburgerSecti = (0,_scripts_layout_hamburger_createHamburgerSection__WEBPACK_IMPORTED_MODULE_15__/* .createHamburgerSection */ .O)(),
  hambSection = _createHamburgerSecti.hambSection,
  _createHamburgerSecti2 = _slicedToArray(_createHamburgerSecti.hambBtnsNodes, 4),
  scoreHambBtn = _createHamburgerSecti2[0],
  randomHambBtn = _createHamburgerSecti2[1],
  loadHambBtn = _createHamburgerSecti2[2],
  solutionHambBtn = _createHamburgerSecti2[3];
var drawerOverlayHamburg = (0,_scripts_layout_hamburger_createDrawerOverlayHamburg__WEBPACK_IMPORTED_MODULE_17__/* .createDrawerOverlayHamburg */ ._)();
var _createActionButtonsS = (0,_scripts_layout_createActionButtonsSection__WEBPACK_IMPORTED_MODULE_14__/* .createActionButtonsSection */ .Y)(),
  _createActionButtonsS2 = _slicedToArray(_createActionButtonsS, 4),
  resetBtn = _createActionButtonsS2[0],
  saveBtn = _createActionButtonsS2[1],
  loadBtn = _createActionButtonsS2[2],
  solutionBtn = _createActionButtonsS2[3];
randomBtn.addEventListener("click", gameApp.setRandomPuzzle.bind(gameApp));
resetBtn.addEventListener("click", gameApp.resetGame.bind(gameApp));
saveBtn.addEventListener("click", gameApp.saveGame.bind(gameApp));
loadBtn.addEventListener("click", gameApp.loadGame.bind(gameApp));
solutionBtn.addEventListener("click", gameApp.showSolution.bind(gameApp));
var closeHamburger = function closeHamburger() {
  (0,_scripts_layout_hamburger_closeHamburgerMenu__WEBPACK_IMPORTED_MODULE_18__/* .closeHamburgerMenu */ .A)(hambSection, drawerOverlayHamburg, burgerBtn, _assets_icons_burger_to_open_svg__WEBPACK_IMPORTED_MODULE_10__);
};
scoreHambBtn.addEventListener("click", function () {
  (0,_scripts_layout_hamburger_showHamburgerLatestWins__WEBPACK_IMPORTED_MODULE_19__/* .showHamburgerLatestWins */ .A)(hambSection, gameApp.latestWinsSection, drawerOverlayLatestWins);
});
randomHambBtn.addEventListener("click", function () {
  gameApp.setRandomPuzzle();
  closeHamburger();
});
loadHambBtn.addEventListener("click", function () {
  gameApp.loadGame();
  closeHamburger();
});
solutionHambBtn.addEventListener("click", function () {
  gameApp.showSolution();
  closeHamburger();
});
soundBtn.addEventListener("click", function () {
  gameApp.isSoundMuted = (0,_scripts_sound_changeSoundsMuteValue__WEBPACK_IMPORTED_MODULE_5__/* .changeSoundsMuteValue */ .S)(!gameApp.isSoundMuted);
  soundBtn.innerHTML = gameApp.isSoundMuted ? _assets_icons_volume_off_svg__WEBPACK_IMPORTED_MODULE_7__ : _assets_icons_volume_up_svg__WEBPACK_IMPORTED_MODULE_6__;
  soundBtn.firstChild.classList.add("btn__icon");
});
themeBtn.addEventListener("click", function () {
  gameApp.themeName = (0,_scripts_theme_toggleTheme__WEBPACK_IMPORTED_MODULE_12__/* .toggleTheme */ .u)(gameApp.themeName);
  themeBtn.innerHTML = gameApp.themeName === "light" ? _assets_icons_light_mode_svg__WEBPACK_IMPORTED_MODULE_8__ : _assets_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_9__;
  themeBtn.firstChild.classList.add("btn__icon");
});
burgerBtn.addEventListener("click", function () {
  (0,_scripts_layout_hamburger_handleHamburgBtnClick__WEBPACK_IMPORTED_MODULE_20__/* .handleHamburgBtnClick */ .y)(hambSection, gameApp.latestWinsSection, drawerOverlayHamburg, drawerOverlayLatestWins, burgerBtn, _assets_icons_burger_to_open_svg__WEBPACK_IMPORTED_MODULE_10__, _assets_icons_burger_to_close_svg__WEBPACK_IMPORTED_MODULE_11__);
});
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    (0,_scripts_layout_hamburger_hideHamburgerLatestWins__WEBPACK_IMPORTED_MODULE_21__/* .hideHamburgerLatestWins */ .f)(hambSection, gameApp.latestWinsSection, drawerOverlayLatestWins);
    closeHamburger();
  }
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ GameApp)
});

;// CONCATENATED MODULE: ./src/scripts/utils/capitalizeWord.js
var capitalizeWord = function capitalizeWord(word) {
  var capitalizedWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
  return capitalizedWord;
};
;// CONCATENATED MODULE: ./src/scripts/cell/cellStates.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CROSS = -1;
var EMPTY = 0;
var FILLED = 1;
var stateToChar = _defineProperty(_defineProperty(_defineProperty({}, CROSS, "c"), EMPTY, "e"), FILLED, "f");
var charToState = {
  c: CROSS,
  e: EMPTY,
  f: FILLED
};
var regExpStates = Object.keys(charToState).join("|");
var regExpStr = "([".concat(regExpStates, "])([0-9]*)");
var regExpWithStates = new RegExp(regExpStr, "g");

;// CONCATENATED MODULE: ./src/scripts/game/decodePuzzle.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var decodePuzzle = function decodePuzzle(puzzleString) {
  var puzzleStrArr = puzzleString.split(".");
  var numRows = +puzzleStrArr[0];
  var numCols = +puzzleStrArr[1];
  var strToDecode = puzzleStrArr[2];
  var puzzleMatrix = _toConsumableArray(Array(numRows)).map(function () {
    return Array(numCols);
  });
  var strMatches = _toConsumableArray(strToDecode.matchAll(regExpWithStates));
  var elemIdx = 0;
  for (var iGroup = 0; iGroup < strMatches.length; iGroup += 1) {
    var group = strMatches[iGroup];
    var valueStr = group[1];
    var countStr = group[2];
    var value = charToState[valueStr];
    var count = +countStr || 1;
    for (var i = 0; i < count; i += 1) {
      var iRow = Math.floor(elemIdx / numCols);
      var jCol = elemIdx % numCols;
      puzzleMatrix[iRow][jCol] = value;
      elemIdx += 1;
    }
  }
  return puzzleMatrix;
};
;// CONCATENATED MODULE: ./src/scripts/game/formPuzzleClues.js
function formPuzzleClues_toConsumableArray(arr) { return formPuzzleClues_arrayWithoutHoles(arr) || formPuzzleClues_iterableToArray(arr) || formPuzzleClues_unsupportedIterableToArray(arr) || formPuzzleClues_nonIterableSpread(); }
function formPuzzleClues_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function formPuzzleClues_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return formPuzzleClues_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return formPuzzleClues_arrayLikeToArray(o, minLen); }
function formPuzzleClues_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function formPuzzleClues_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return formPuzzleClues_arrayLikeToArray(arr); }
function formPuzzleClues_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var formPuzzleClues = function formPuzzleClues(puzzleMatrix) {
  var numRows = puzzleMatrix.length;
  var numCols = puzzleMatrix[0].length;
  var rowsAllClues = [];
  var colsAllClues = formPuzzleClues_toConsumableArray(Array(numCols)).map(function () {
    return [];
  });
  var colsCluesCounter = Array(numCols).fill(0);
  for (var iRow = 0; iRow < numRows; iRow += 1) {
    var rowClues = [];
    var rowCluesCounter = 0;
    for (var jCol = 0; jCol < numCols; jCol += 1) {
      var _puzzleMatrix$iRow$jC, _puzzleMatrix$iRow;
      var value = (_puzzleMatrix$iRow$jC = (_puzzleMatrix$iRow = puzzleMatrix[iRow]) === null || _puzzleMatrix$iRow === void 0 ? void 0 : _puzzleMatrix$iRow[jCol]) !== null && _puzzleMatrix$iRow$jC !== void 0 ? _puzzleMatrix$iRow$jC : 0;
      switch (value) {
        case EMPTY:
          if (rowCluesCounter > 0) {
            rowClues.push(rowCluesCounter);
          }
          if (colsCluesCounter[jCol] > 0) {
            colsAllClues[jCol].push(colsCluesCounter[jCol]);
          }
          rowCluesCounter = 0;
          colsCluesCounter[jCol] = 0;
          break;
        case FILLED:
        default:
          rowCluesCounter += 1;
          colsCluesCounter[jCol] += 1;
          if (jCol === numCols - 1) {
            rowClues.push(rowCluesCounter);
          }
          if (iRow === numRows - 1) {
            colsAllClues[jCol].push(colsCluesCounter[jCol]);
          }
      }
    }
    rowsAllClues.push(rowClues);
  }
  return {
    rowsAllClues: rowsAllClues,
    colsAllClues: colsAllClues
  };
};
;// CONCATENATED MODULE: ./src/scripts/game-board/countPuzzleRowsCols.js
function countPuzzleRowsCols_toConsumableArray(arr) { return countPuzzleRowsCols_arrayWithoutHoles(arr) || countPuzzleRowsCols_iterableToArray(arr) || countPuzzleRowsCols_unsupportedIterableToArray(arr) || countPuzzleRowsCols_nonIterableSpread(); }
function countPuzzleRowsCols_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function countPuzzleRowsCols_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return countPuzzleRowsCols_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return countPuzzleRowsCols_arrayLikeToArray(o, minLen); }
function countPuzzleRowsCols_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function countPuzzleRowsCols_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return countPuzzleRowsCols_arrayLikeToArray(arr); }
function countPuzzleRowsCols_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var countPuzzleRowsCols = function countPuzzleRowsCols(puzzleMatrix, puzzleClues) {
  var rowsAllClues = puzzleClues.rowsAllClues,
    colsAllClues = puzzleClues.colsAllClues;
  var numRowForClues = Math.max.apply(Math, countPuzzleRowsCols_toConsumableArray(colsAllClues.map(function (colClues) {
    return colClues.length;
  })));
  var numColForClues = Math.max.apply(Math, countPuzzleRowsCols_toConsumableArray(rowsAllClues.map(function (rowClues) {
    return rowClues.length;
  })));
  var numRowForPuzzle = puzzleMatrix.length;
  var numColForPuzzle = puzzleMatrix === null || puzzleMatrix === void 0 ? void 0 : puzzleMatrix[0].length;
  return {
    numRowForPuzzle: numRowForPuzzle,
    numColForPuzzle: numColForPuzzle,
    numRowForClues: numRowForClues,
    numColForClues: numColForClues
  };
};
;// CONCATENATED MODULE: ./src/scripts/game-board/drawGameBoardGrid.js
var drawGameBoardGrid = function drawGameBoardGrid(canvasContextRef, playAreaIn, cluesIn, board, boardSettings) {
  var ctx = canvasContextRef;
  var cellSizePx = boardSettings.cellSizePx,
    lineWidthPx = boardSettings.lineWidthPx,
    dividerWidthPx = boardSettings.dividerWidthPx,
    divideNumCells = boardSettings.divideNumCells;
  var clues = {
    rows: {
      cells: cluesIn.rows
    },
    cols: {
      cells: cluesIn.cols
    }
  };
  var playArea = {
    rows: {
      cells: playAreaIn.rows
    },
    cols: {
      cells: playAreaIn.cols
    }
  };
  var lineShiftPx = lineWidthPx / 2; // to make crisp lines for odd line widths (e.g., 1px)
  var dividerShiftPx = dividerWidthPx / 2; // coordinate is the center of the lineWidth
  var isDivider = function isDivider(index, dividerShiftCnt) {
    return index % divideNumCells - dividerShiftCnt === 0;
  };
  var getShiftInPx = function getShiftInPx(index, dividerShiftCnt) {
    return isDivider(index, dividerShiftCnt) ? dividerShiftPx : lineShiftPx;
  };
  var getClueLineCoordinate = function getClueLineCoordinate(lineIndex) {
    var coordShiftPx = lineIndex === 0 ? dividerShiftPx : lineShiftPx;
    var numDividersBeforeLine = lineIndex === 0 ? 0 : 1;
    var numRegLinesBeforeLine = lineIndex - numDividersBeforeLine;
    var numCellsBeforeLine = lineIndex;
    var lineCoordPx = numDividersBeforeLine * dividerWidthPx + numRegLinesBeforeLine * lineWidthPx + numCellsBeforeLine * cellSizePx + coordShiftPx;
    return lineCoordPx;
  };
  var getLineCoordinate = function getLineCoordinate(lineIndex, dividerShift) {
    var coordShiftPx = getShiftInPx(lineIndex, dividerShift);
    var numDividersBeforeLine = Math.ceil((lineIndex - dividerShift) / divideNumCells);
    var numRegLinesBeforeLine = lineIndex - numDividersBeforeLine;
    var numCellsBeforeLine = lineIndex;
    var lineCoordPx = numDividersBeforeLine * dividerWidthPx + numRegLinesBeforeLine * lineWidthPx + numCellsBeforeLine * cellSizePx + coordShiftPx;
    return lineCoordPx;
  };
  var getLineWidth = function getLineWidth(lineIndex, dividerShift) {
    return isDivider(lineIndex, dividerShift) ? dividerWidthPx : lineWidthPx;
  };
  var getLineColor = function getLineColor(lineIndex, dividerShift) {
    return isDivider(lineIndex, dividerShift) ? boardSettings.dividerColor : boardSettings.lineColor;
  };
  var drawLine = function drawLine(x0, y0, x1, y1, lineWidth, lineColor) {
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  };
  var drawColumnLinesForClues = function drawColumnLinesForClues(numCols) {
    var yBottom = board.height;
    var boardTopEdge = 0;
    for (var i = 0; i < numCols; i += 1) {
      var yTop = i === 0 ? boardTopEdge : board.cluesHeight;
      var x = getClueLineCoordinate(i);
      var lineWidth = i === 0 ? dividerWidthPx : lineWidthPx;
      var lineColor = i === 0 ? boardSettings.dividerColor : boardSettings.lineColor;
      drawLine(x, yTop, x, yBottom, lineWidth, lineColor);
    }
  };
  var drawRowLinesForClues = function drawRowLinesForClues(numRows) {
    var xRight = board.width;
    var boardLeftEdge = 0;
    for (var i = 0; i < numRows; i += 1) {
      var xLeft = i === 0 ? boardLeftEdge : board.cluesWidth;
      var y = getClueLineCoordinate(i);
      var lineWidth = i === 0 ? dividerWidthPx : lineWidthPx;
      var lineColor = i === 0 ? boardSettings.dividerColor : boardSettings.lineColor;
      drawLine(xLeft, y, xRight, y, lineWidth, lineColor);
    }
  };
  var drawColumnLinesForPlayArea = function drawColumnLinesForPlayArea(numCols, dividerShift) {
    var boardTopEdge = 0;
    var yTop = boardTopEdge;
    var yBottom = board.height;
    for (var i = 0; i <= numCols; i += 1) {
      var x = board.cluesWidth + getLineCoordinate(i, dividerShift);
      var lineWidth = getLineWidth(i, dividerShift);
      var lineColor = getLineColor(i, dividerShift);
      drawLine(x, yTop, x, yBottom, lineWidth, lineColor);
    }
  };
  var drawRowLinesForPlayArea = function drawRowLinesForPlayArea(numRows, dividerShift) {
    var boardLeftEdge = 0;
    var xLeft = boardLeftEdge;
    var xRight = board.width;
    for (var i = 0; i <= numRows; i += 1) {
      var y = board.cluesHeight + getLineCoordinate(i, dividerShift);
      var lineWidth = getLineWidth(i, dividerShift);
      var lineColor = getLineColor(i, dividerShift);
      drawLine(xLeft, y, xRight, y, lineWidth, lineColor);
    }
  };
  playArea.cols.dividerShiftCnt = 0; // always 0, because always start with divider
  playArea.rows.dividerShiftCnt = 0;
  drawColumnLinesForClues(clues.cols.cells);
  drawRowLinesForClues(clues.rows.cells);
  drawColumnLinesForPlayArea(playArea.cols.cells, playArea.cols.dividerShiftCnt);
  drawRowLinesForPlayArea(playArea.rows.cells, playArea.rows.dividerShiftCnt);
};
;// CONCATENATED MODULE: ./src/scripts/game-board/getGameBoardSize.js
var getGameBoardSize = function getGameBoardSize(playAreaIn, cluesIn, boardSettings) {
  var cellSizePx = boardSettings.cellSizePx,
    lineWidthPx = boardSettings.lineWidthPx,
    dividerWidthPx = boardSettings.dividerWidthPx,
    divideNumCells = boardSettings.divideNumCells;
  var clues = {
    rows: {
      cells: cluesIn.rows
    },
    cols: {
      cells: cluesIn.cols
    }
  };
  var playArea = {
    rows: {
      cells: playAreaIn.rows
    },
    cols: {
      cells: playAreaIn.cols
    }
  };
  var countDividers = function countDividers(numCells) {
    return Math.floor(numCells / divideNumCells);
  };
  var isEndLineDivider = function isEndLineDivider(numCellsPuzzle) {
    var isDivider = numCellsPuzzle % divideNumCells === 0;
    return isDivider;
  };
  clues.cols.dividers = 1; // only for the first line (border)
  clues.cols.lines = clues.cols.cells - clues.cols.dividers;
  playArea.cols.dividers = countDividers(playArea.cols.cells);
  playArea.cols.lines = playArea.cols.cells - playArea.cols.dividers;
  var sizeRightEndLine = isEndLineDivider(playArea.cols.cells) ? dividerWidthPx : lineWidthPx;
  var numColDividers = clues.cols.dividers + playArea.cols.dividers;
  var numColLines = clues.cols.lines + playArea.cols.lines;
  var numCol = clues.cols.cells + playArea.cols.cells;
  var boardWidth = numCol * cellSizePx + numColLines * lineWidthPx + numColDividers * dividerWidthPx + sizeRightEndLine;
  var cluesWidth = clues.cols.cells * cellSizePx + clues.cols.lines * lineWidthPx + clues.cols.dividers * dividerWidthPx;
  clues.rows.dividers = 1; // only for the first line (border)
  clues.rows.lines = clues.rows.cells - clues.rows.dividers;
  playArea.rows.dividers = countDividers(playArea.rows.cells);
  playArea.rows.lines = playArea.rows.cells - playArea.rows.dividers;
  var sizeBottomEndLine = isEndLineDivider(playArea.rows.cells) ? dividerWidthPx : lineWidthPx;
  var numRowDividers = clues.rows.dividers + playArea.rows.dividers;
  var numRowLines = clues.rows.lines + playArea.rows.lines;
  var numRow = clues.rows.cells + playArea.rows.cells;
  var boardHeight = numRow * cellSizePx + numRowLines * lineWidthPx + numRowDividers * dividerWidthPx + sizeBottomEndLine;
  var cluesHeight = clues.rows.cells * cellSizePx + clues.rows.lines * lineWidthPx + clues.rows.dividers * dividerWidthPx;
  var cntDividerInOneBlock = 1;
  var blockSize = divideNumCells * cellSizePx + (divideNumCells - cntDividerInOneBlock) * lineWidthPx + cntDividerInOneBlock * dividerWidthPx;
  return {
    boardWidth: boardWidth,
    boardHeight: boardHeight,
    cluesWidth: cluesWidth,
    cluesHeight: cluesHeight,
    blockSize: blockSize
  };
};
;// CONCATENATED MODULE: ./src/scripts/game-board/setTextStyleForClues.js
var setTextStyleForClues = function setTextStyleForClues(canvasContextRef, boardSettings) {
  var ctx = canvasContextRef;
  ctx.fillStyle = boardSettings.cluesColor;
  ctx.font = boardSettings.cluesFont;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
};
;// CONCATENATED MODULE: ./src/scripts/cell/fillCellWithColor.js
var fillCellWithColor = function fillCellWithColor(canvasContextRef, cell, cellSizePx, fillColor) {
  var ctx = canvasContextRef;
  ctx.fillStyle = fillColor;
  ctx.fillRect(cell.x, cell.y, cellSizePx, cellSizePx);
};
;// CONCATENATED MODULE: ./src/scripts/cell/makeCellTransparent.js
var makeCellTransparent = function makeCellTransparent(canvasContextRef, cell, cellSizePx) {
  var ctx = canvasContextRef;
  ctx.clearRect(cell.x, cell.y, cellSizePx, cellSizePx);
};
;// CONCATENATED MODULE: ./src/scripts/game-board/getCoordShiftByIndex.js
var getFullBlocksCells = function getFullBlocksCells(index, divideNumCells) {
  var cntFullBlocks = Math.floor(index / divideNumCells);
  var cntBlockFullCells = index % divideNumCells;
  return {
    cntFullBlocks: cntFullBlocks,
    cntBlockFullCells: cntBlockFullCells
  };
};
var getCoordShiftByIndex = function getCoordShiftByIndex(cellIndexInPuzzle, blockSize, divideNumCells, dividerWidthPx, cellWithLinePx) {
  var _getFullBlocksCells = getFullBlocksCells(cellIndexInPuzzle, divideNumCells),
    cntFullBlocks = _getFullBlocksCells.cntFullBlocks,
    cntBlockFullCells = _getFullBlocksCells.cntBlockFullCells;
  var coordShift = cntFullBlocks * blockSize + dividerWidthPx + cntBlockFullCells * cellWithLinePx;
  return coordShift;
};
;// CONCATENATED MODULE: ./src/scripts/game-board/drawSolution.js




var drawSolution_drawSolution = function drawSolution(canvasContextRef, puzzleMatrix, board, boardSettings) {
  var ctx = canvasContextRef;
  var cellSizePx = boardSettings.cellSizePx,
    lineWidthPx = boardSettings.lineWidthPx,
    dividerWidthPx = boardSettings.dividerWidthPx,
    divideNumCells = boardSettings.divideNumCells;
  var cellWithLinePx = cellSizePx + lineWidthPx;
  var getCoordShift = function getCoordShift(cellIndexInPuzzle) {
    return getCoordShiftByIndex(cellIndexInPuzzle, board.blockSize, divideNumCells, dividerWidthPx, cellWithLinePx);
  };
  var cell = {
    x: 0,
    y: 0
  };
  for (var iRow = 0; iRow < puzzleMatrix.length; iRow += 1) {
    var puzzleRow = puzzleMatrix[iRow];
    cell.y = board.cluesHeight + getCoordShift(iRow);
    for (var jCol = 0; jCol < puzzleRow.length; jCol += 1) {
      var value = puzzleRow[jCol];
      cell.x = board.cluesWidth + getCoordShift(jCol);
      var fillColor = void 0;
      switch (value) {
        case FILLED:
          fillColor = boardSettings.filledCellBg;
          fillCellWithColor(ctx, cell, cellSizePx, fillColor);
          break;
        case EMPTY:
        default:
          makeCellTransparent(ctx, cell, cellSizePx);
      }
    }
  }
};
;// CONCATENATED MODULE: ./src/scripts/game-board/writeClues.js

var writeClues = function writeClues(canvasContextRef, clues, puzzleClues, board, boardSettings) {
  var ctx = canvasContextRef;
  var cellSizePx = boardSettings.cellSizePx,
    lineWidthPx = boardSettings.lineWidthPx,
    dividerWidthPx = boardSettings.dividerWidthPx,
    divideNumCells = boardSettings.divideNumCells;
  var textVertDeltaPx = board.textVertDeltaPx;
  var colsAllClues = puzzleClues.colsAllClues,
    rowsAllClues = puzzleClues.rowsAllClues;
  var cellWithLinePx = cellSizePx + lineWidthPx;
  var cellHalfSizePx = cellSizePx / 2;
  var getCoordShiftWithDividers = function getCoordShiftWithDividers(cellIndexInPuzzle) {
    return getCoordShiftByIndex(cellIndexInPuzzle, board.blockSize, divideNumCells, dividerWidthPx, cellWithLinePx);
  };
  var getCoordShiftWoutDividers = function getCoordShiftWoutDividers(cellIndexInPuzzle) {
    var cntFullCells = cellIndexInPuzzle;
    var coordShift = dividerWidthPx + cntFullCells * cellWithLinePx;
    return coordShift;
  };
  var writeClueInCell = function writeClueInCell(cell, clueText) {
    var clueTextStr = clueText.toString();
    var xCellCenter = cell.x + cellHalfSizePx;
    var yCellCenter = cell.y + cellHalfSizePx;
    // x, y - centers the text around the given x, y coordinates,
    //        because canvas was configured with textBaseline = "middle", textAlign = "center"
    // textVertDeltaPx - delta vertical correction for a given font (based on the font metrics)
    ctx.fillText(clueTextStr, xCellCenter, yCellCenter + textVertDeltaPx);
  };
  var writeRowClues = function writeRowClues() {
    var cell = {
      x: 0,
      y: 0
    };
    for (var iRow = 0; iRow < rowsAllClues.length; iRow += 1) {
      cell.y = board.cluesHeight + getCoordShiftWithDividers(iRow);
      var rowClues = rowsAllClues[iRow];
      var colShiftCnt = clues.cols - rowClues.length;
      for (var jCol = 0; jCol < rowClues.length; jCol += 1) {
        var clueText = rowClues[jCol];
        var colIndex = colShiftCnt + jCol;
        cell.x = getCoordShiftWoutDividers(colIndex);
        writeClueInCell(cell, clueText);
      }
    }
  };
  var writeColClues = function writeColClues() {
    var cell = {
      x: 0,
      y: 0
    };
    for (var jCol = 0; jCol < colsAllClues.length; jCol += 1) {
      cell.x = board.cluesWidth + getCoordShiftWithDividers(jCol);
      var colClues = colsAllClues[jCol];
      var rowShiftCnt = clues.rows - colClues.length;
      for (var iRow = 0; iRow < colClues.length; iRow += 1) {
        var clueText = colClues[iRow];
        var rowIndex = rowShiftCnt + iRow;
        cell.y = getCoordShiftWoutDividers(rowIndex);
        writeClueInCell(cell, clueText);
      }
    }
  };
  writeRowClues();
  writeColClues();
};
;// CONCATENATED MODULE: ./src/scripts/actions/actionTypes.js
var actionTypes = {
  mainAction: "click",
  subAction: "contextmenu"
};
;// CONCATENATED MODULE: ./src/scripts/cell/fillCellWithCross.js
function fillCellWithCross_toConsumableArray(arr) { return fillCellWithCross_arrayWithoutHoles(arr) || fillCellWithCross_iterableToArray(arr) || fillCellWithCross_unsupportedIterableToArray(arr) || fillCellWithCross_nonIterableSpread(); }
function fillCellWithCross_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function fillCellWithCross_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return fillCellWithCross_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fillCellWithCross_arrayLikeToArray(o, minLen); }
function fillCellWithCross_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function fillCellWithCross_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return fillCellWithCross_arrayLikeToArray(arr); }
function fillCellWithCross_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var fillCellWithCross = function fillCellWithCross(canvasContextRef, cell, cellSizePx, cross) {
  var ctx = canvasContextRef;
  ctx.strokeStyle = cross.color;
  ctx.lineWidth = cross.lineWidth;
  var crossPoints = {
    leftTop: [cell.x + cross.margin, cell.y + cross.margin],
    rghtBtm: [cell.x + cellSizePx - cross.margin, cell.y + cellSizePx - cross.margin],
    rghtTop: [cell.x + cellSizePx - cross.margin, cell.y + cross.margin],
    leftBtm: [cell.x + cross.margin, cell.y + cellSizePx - cross.margin]
  };
  ctx.clearRect(cell.x, cell.y, cellSizePx, cellSizePx);
  ctx.beginPath();
  ctx.moveTo.apply(ctx, fillCellWithCross_toConsumableArray(crossPoints.leftTop));
  ctx.lineTo.apply(ctx, fillCellWithCross_toConsumableArray(crossPoints.rghtBtm));
  ctx.moveTo.apply(ctx, fillCellWithCross_toConsumableArray(crossPoints.rghtTop));
  ctx.lineTo.apply(ctx, fillCellWithCross_toConsumableArray(crossPoints.leftBtm));
  ctx.stroke();
};
;// CONCATENATED MODULE: ./src/scripts/cell/changeCellContent.js




var changeCellContent = function changeCellContent(canvasContext, cellRef, boardSettings, board) {
  var ctx = canvasContext;
  var cell = cellRef.getCellData();
  var cellSizePx = boardSettings.cellSizePx,
    filledCellBg = boardSettings.filledCellBg,
    cross = boardSettings.cross;
  var cluesWidth = board.cluesWidth,
    cluesHeight = board.cluesHeight;
  cell.x += cluesWidth;
  cell.y += cluesHeight;
  var fillColor;
  switch (cell.state) {
    case EMPTY:
      makeCellTransparent(ctx, cell, cellSizePx);
      break;
    case FILLED:
      fillColor = filledCellBg;
      fillCellWithColor(ctx, cell, cellSizePx, fillColor);
      break;
    case CROSS:
      fillCellWithCross(ctx, cell, cellSizePx, cross);
      break;
    default:
      break;
  }
};
;// CONCATENATED MODULE: ./src/scripts/cell/changeState.js

var getStateAfterMainAction = function getStateAfterMainAction(curState) {
  var newState;
  switch (curState) {
    case EMPTY:
      newState = FILLED;
      break;
    case FILLED:
      newState = EMPTY;
      break;
    case CROSS:
      newState = FILLED;
      break;
    default:
      newState = curState;
  }
  return newState;
};
var getStateAfterSubAction = function getStateAfterSubAction(curState) {
  var newState;
  switch (curState) {
    case EMPTY:
      newState = CROSS;
      break;
    case FILLED:
      newState = CROSS;
      break;
    case CROSS:
      newState = EMPTY;
      break;
    default:
      newState = curState;
  }
  return newState;
};

;// CONCATENATED MODULE: ./src/scripts/cell/getDeltaForState.js

var convertToCountState = function convertToCountState(state) {
  return state <= EMPTY ? EMPTY : state;
};
var getDeltaForState = function getDeltaForState(stateValIn, corrVal) {
  var stateVal = convertToCountState(stateValIn);
  var deltaIncorrect = corrVal === EMPTY ? -1 * FILLED : -1 * corrVal;
  return stateVal === corrVal ? corrVal : deltaIncorrect;
};
;// CONCATENATED MODULE: ./src/scripts/cell/getDeltaForNewState.js

var getDeltaForNewState = function getDeltaForNewState(newState, correctValue, previousState) {
  var prevDelta = getDeltaForState(previousState, correctValue);
  var curDelta = getDeltaForState(newState, correctValue);
  var stateDelta = curDelta - prevDelta;
  return stateDelta;
};
// EXTERNAL MODULE: ./src/scripts/sound/soundEffects.js + 4 modules
var soundEffects = __webpack_require__(488);
;// CONCATENATED MODULE: ./src/scripts/sound/soundStateMap.js
function soundStateMap_typeof(o) { "@babel/helpers - typeof"; return soundStateMap_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, soundStateMap_typeof(o); }
function soundStateMap_defineProperty(obj, key, value) { key = soundStateMap_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function soundStateMap_toPropertyKey(t) { var i = soundStateMap_toPrimitive(t, "string"); return "symbol" == soundStateMap_typeof(i) ? i : String(i); }
function soundStateMap_toPrimitive(t, r) { if ("object" != soundStateMap_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != soundStateMap_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var soundStateMap = soundStateMap_defineProperty(soundStateMap_defineProperty(soundStateMap_defineProperty({}, FILLED, soundEffects/* soundEffects */.o.filled), EMPTY, soundEffects/* soundEffects */.o.empty), CROSS, soundEffects/* soundEffects */.o.cross);
;// CONCATENATED MODULE: ./src/scripts/cell/playSoundOnStateChange.js

var playSoundOnStateChange = function playSoundOnStateChange(newState) {
  var _soundArr$filter$;
  var soundArr = soundStateMap[newState];
  var sound = (_soundArr$filter$ = soundArr.filter(function (el) {
    return el.paused;
  })[0]) !== null && _soundArr$filter$ !== void 0 ? _soundArr$filter$ : soundArr[0];
  sound.play();
};
;// CONCATENATED MODULE: ./src/scripts/Cell.js
function Cell_typeof(o) { "@babel/helpers - typeof"; return Cell_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Cell_typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Cell_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Cell_toPropertyKey(t) { var i = Cell_toPrimitive(t, "string"); return "symbol" == Cell_typeof(i) ? i : String(i); }
function Cell_toPrimitive(t, r) { if ("object" != Cell_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Cell_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _xLeft = /*#__PURE__*/new WeakMap();
var _yTop = /*#__PURE__*/new WeakMap();
var _state = /*#__PURE__*/new WeakMap();
var _correctVal = /*#__PURE__*/new WeakMap();
var _actions = /*#__PURE__*/new WeakMap();
var _changeState = /*#__PURE__*/new WeakSet();
var Cell = /*#__PURE__*/function () {
  function Cell(xLeft, yTop, currentState, correctValue) {
    _classCallCheck(this, Cell);
    _classPrivateMethodInitSpec(this, _changeState);
    _classPrivateFieldInitSpec(this, _xLeft, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _yTop, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _correctVal, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _actions, {
      writable: true,
      value: actionTypes
    });
    _classPrivateFieldSet(this, _xLeft, xLeft);
    _classPrivateFieldSet(this, _yTop, yTop);
    _classPrivateFieldSet(this, _state, currentState);
    _classPrivateFieldSet(this, _correctVal, correctValue);
  }
  _createClass(Cell, [{
    key: "getCellData",
    value: function getCellData() {
      return {
        x: _classPrivateFieldGet(this, _xLeft),
        y: _classPrivateFieldGet(this, _yTop),
        state: _classPrivateFieldGet(this, _state)
      };
    }
  }, {
    key: "handleAction",
    value: function handleAction(actionType, canvasContext, boardSettings, board) {
      var actions = _classPrivateFieldGet(this, _actions);
      var newState;
      switch (actionType) {
        case actions.mainAction:
          newState = getStateAfterMainAction(_classPrivateFieldGet(this, _state));
          break;
        case actions.subAction:
          newState = getStateAfterSubAction(_classPrivateFieldGet(this, _state));
          break;
        default:
          break;
      }
      playSoundOnStateChange(newState);
      var stateDelta = _classPrivateMethodGet(this, _changeState, _changeState2).call(this, newState, canvasContext, boardSettings, board);
      return {
        newCellState: newState,
        stateDelta: stateDelta
      };
    }
  }]);
  return Cell;
}();
function _changeState2(newState, canvasContext, boardSettings, board) {
  var prevState = _classPrivateFieldGet(this, _state);
  _classPrivateFieldSet(this, _state, newState);
  changeCellContent(canvasContext, this, boardSettings, board);
  var stateDelta = getDeltaForNewState(_classPrivateFieldGet(this, _state), _classPrivateFieldGet(this, _correctVal), prevState);
  return stateDelta;
}
;// CONCATENATED MODULE: ./src/scripts/cell/correctState.js

var correctState = function correctState(stateToCheck) {
  var correctedState;
  switch (stateToCheck) {
    case FILLED:
    case EMPTY:
    case CROSS:
      correctedState = stateToCheck;
      break;
    default:
      correctedState = EMPTY;
  }
  return correctedState;
};
;// CONCATENATED MODULE: ./src/scripts/play-field/constructBoardCells.js
function constructBoardCells_toConsumableArray(arr) { return constructBoardCells_arrayWithoutHoles(arr) || constructBoardCells_iterableToArray(arr) || constructBoardCells_unsupportedIterableToArray(arr) || constructBoardCells_nonIterableSpread(); }
function constructBoardCells_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function constructBoardCells_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return constructBoardCells_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return constructBoardCells_arrayLikeToArray(o, minLen); }
function constructBoardCells_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function constructBoardCells_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return constructBoardCells_arrayLikeToArray(arr); }
function constructBoardCells_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var constructBoardCells = function constructBoardCells(gameBoard, puzzleMatrix, boardStateMatrix) {
  var puzzle = puzzleMatrix;
  var board = boardStateMatrix;
  var numRow = puzzle.length;
  var numCol = puzzle === null || puzzle === void 0 ? void 0 : puzzle[0].length;
  var boardCells = constructBoardCells_toConsumableArray(Array(numRow)).map(function () {
    return Array(numCol);
  });
  for (var iRow = 0; iRow < numRow; iRow += 1) {
    var rowBoard = board === null || board === void 0 ? void 0 : board[iRow];
    var yTopCell = gameBoard.getCellCoordByIndex(iRow);
    for (var jCol = 0; jCol < numCol; jCol += 1) {
      var _rowBoard$jCol, _puzzle$iRow$jCol, _puzzle$iRow;
      var valueBoard = (_rowBoard$jCol = rowBoard === null || rowBoard === void 0 ? void 0 : rowBoard[jCol]) !== null && _rowBoard$jCol !== void 0 ? _rowBoard$jCol : 0;
      var valueCorrect = (_puzzle$iRow$jCol = (_puzzle$iRow = puzzle[iRow]) === null || _puzzle$iRow === void 0 ? void 0 : _puzzle$iRow[jCol]) !== null && _puzzle$iRow$jCol !== void 0 ? _puzzle$iRow$jCol : 0;
      var stateBoard = correctState(valueBoard);
      var stateCorrect = correctState(valueCorrect);
      var xLeftCell = gameBoard.getCellCoordByIndex(jCol);
      boardCells[iRow][jCol] = new Cell(xLeftCell, yTopCell, stateBoard, stateCorrect);
    }
  }
  return boardCells;
};
;// CONCATENATED MODULE: ./src/scripts/play-field/countSumCellsForPlayField.js


var countSumCellsForPlayField = function countSumCellsForPlayField(boardStateMatrix, puzzleMatrix) {
  var puzzle = puzzleMatrix;
  var board = boardStateMatrix;
  var sumCells = 0;
  for (var iRow = 0; iRow < board.length; iRow += 1) {
    var rowBoard = board[iRow];
    for (var jCol = 0; jCol < rowBoard.length; jCol += 1) {
      var _puzzle$iRow$jCol, _puzzle$iRow;
      var boardValue = rowBoard[jCol];
      var correctValue = (_puzzle$iRow$jCol = puzzle === null || puzzle === void 0 || (_puzzle$iRow = puzzle[iRow]) === null || _puzzle$iRow === void 0 ? void 0 : _puzzle$iRow[jCol]) !== null && _puzzle$iRow$jCol !== void 0 ? _puzzle$iRow$jCol : EMPTY;
      sumCells += getDeltaForState(boardValue, correctValue);
    }
  }
  return sumCells;
};
;// CONCATENATED MODULE: ./src/scripts/play-field/countFilledCellsInPuzzle.js

var countFilledCellsInPuzzle = function countFilledCellsInPuzzle(puzzleMatrixRef) {
  var isFilled = function isFilled(value) {
    return value === FILLED;
  };
  var cntFilled = 0;
  for (var iRow = 0; iRow < puzzleMatrixRef.length; iRow += 1) {
    var rowPuzzle = puzzleMatrixRef[iRow];
    var cntRowFilled = rowPuzzle.filter(isFilled).length;
    cntFilled += cntRowFilled;
  }
  return cntFilled;
};
;// CONCATENATED MODULE: ./src/scripts/play-field/initializeBoardStateMatrix.js
function initializeBoardStateMatrix_toConsumableArray(arr) { return initializeBoardStateMatrix_arrayWithoutHoles(arr) || initializeBoardStateMatrix_iterableToArray(arr) || initializeBoardStateMatrix_unsupportedIterableToArray(arr) || initializeBoardStateMatrix_nonIterableSpread(); }
function initializeBoardStateMatrix_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function initializeBoardStateMatrix_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return initializeBoardStateMatrix_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return initializeBoardStateMatrix_arrayLikeToArray(o, minLen); }
function initializeBoardStateMatrix_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function initializeBoardStateMatrix_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return initializeBoardStateMatrix_arrayLikeToArray(arr); }
function initializeBoardStateMatrix_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var initializeBoardStateMatrix = function initializeBoardStateMatrix(puzzleMatrix) {
  var _puzzleMatrix$0$lengt;
  var numRows = puzzleMatrix.length;
  var numCols = (_puzzleMatrix$0$lengt = puzzleMatrix === null || puzzleMatrix === void 0 ? void 0 : puzzleMatrix[0].length) !== null && _puzzleMatrix$0$lengt !== void 0 ? _puzzleMatrix$0$lengt : 0;
  var boardStateMatrix = initializeBoardStateMatrix_toConsumableArray(Array(numRows)).map(function () {
    return Array(numCols).fill(EMPTY);
  });
  return boardStateMatrix;
};
;// CONCATENATED MODULE: ./src/scripts/play-field/isEmptyBoardStateMatrix.js
var isEmptyBoardStateMatrix = function isEmptyBoardStateMatrix(boardStateMatrix) {
  return boardStateMatrix.length === 0;
};
;// CONCATENATED MODULE: ./src/scripts/play-field/playSoundOnWin.js

var playSoundOnWin = function playSoundOnWin() {
  var _soundArr$filter$;
  var soundArr = soundEffects/* soundEffects */.o.win;
  var sound = (_soundArr$filter$ = soundArr.filter(function (el) {
    return el.paused;
  })[0]) !== null && _soundArr$filter$ !== void 0 ? _soundArr$filter$ : soundArr[0];
  sound.play();
};
;// CONCATENATED MODULE: ./src/scripts/game/encodePuzzle.js

var encodePuzzle = function encodePuzzle(puzzleMatrix) {
  var _puzzleMatrix$0$lengt;
  var getValCounterStr = function getValCounterStr(counter, value) {
    var valCounterStr = "";
    if (counter > 2) {
      valCounterStr = "".concat(value).concat(counter);
    } else if (counter === 2) {
      valCounterStr = "".concat(value).concat(value);
    } else if (counter === 1) {
      valCounterStr = "".concat(value);
    }
    return valCounterStr;
  };
  var rowNum = puzzleMatrix.length;
  var colNum = (_puzzleMatrix$0$lengt = puzzleMatrix === null || puzzleMatrix === void 0 ? void 0 : puzzleMatrix[0].length) !== null && _puzzleMatrix$0$lengt !== void 0 ? _puzzleMatrix$0$lengt : 0;
  var sizePrefix = "".concat(rowNum, ".").concat(colNum, ".");
  var puzzleFlat = puzzleMatrix.flat();
  var puzzleStr = sizePrefix;
  var curCounter = 0;
  var prevVal = "";
  for (var i = 0; i < puzzleFlat.length; i += 1) {
    var elem = puzzleFlat[i];
    var curVal = stateToChar[elem];
    if (curVal === prevVal) {
      curCounter += 1;
    } else {
      puzzleStr += getValCounterStr(curCounter, prevVal);
      curCounter = 1;
      prevVal = curVal;
    }
  }
  puzzleStr += getValCounterStr(curCounter, prevVal);
  return puzzleStr;
};
;// CONCATENATED MODULE: ./src/scripts/cell/changeCellsContentToBoardState.js




var changeCellsContentToBoardState = function changeCellsContentToBoardState(gameBoard, boardCells) {
  var ctx = gameBoard.getCanvasContext();
  var _gameBoard$getBoardSe = gameBoard.getBoardSettings(),
    cellSizePx = _gameBoard$getBoardSe.cellSizePx,
    filledCellBg = _gameBoard$getBoardSe.filledCellBg,
    cross = _gameBoard$getBoardSe.cross;
  var _gameBoard$getBoard = gameBoard.getBoard(),
    cluesWidth = _gameBoard$getBoard.cluesWidth,
    cluesHeight = _gameBoard$getBoard.cluesHeight;
  for (var iRow = 0; iRow < boardCells.length; iRow += 1) {
    var rowCells = boardCells[iRow];
    for (var jCol = 0; jCol < rowCells.length; jCol += 1) {
      var cellRef = rowCells[jCol];
      var cell = cellRef.getCellData();
      cell.x += cluesWidth;
      cell.y += cluesHeight;
      var fillColor = void 0;
      switch (cell.state) {
        case EMPTY:
          makeCellTransparent(ctx, cell, cellSizePx);
          break;
        case FILLED:
          fillColor = filledCellBg;
          fillCellWithColor(ctx, cell, cellSizePx, fillColor);
          break;
        case CROSS:
          fillCellWithCross(ctx, cell, cellSizePx, cross);
          break;
        default:
          break;
      }
    }
  }
};
;// CONCATENATED MODULE: ./src/scripts/PlayField.js
function PlayField_typeof(o) { "@babel/helpers - typeof"; return PlayField_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, PlayField_typeof(o); }
function PlayField_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function PlayField_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, PlayField_toPropertyKey(descriptor.key), descriptor); } }
function PlayField_createClass(Constructor, protoProps, staticProps) { if (protoProps) PlayField_defineProperties(Constructor.prototype, protoProps); if (staticProps) PlayField_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function PlayField_toPropertyKey(t) { var i = PlayField_toPrimitive(t, "string"); return "symbol" == PlayField_typeof(i) ? i : String(i); }
function PlayField_toPrimitive(t, r) { if ("object" != PlayField_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != PlayField_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function PlayField_classPrivateMethodInitSpec(obj, privateSet) { PlayField_checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function PlayField_classPrivateFieldInitSpec(obj, privateMap, value) { PlayField_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function PlayField_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function PlayField_classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function PlayField_classPrivateFieldGet(receiver, privateMap) { var descriptor = PlayField_classExtractFieldDescriptor(receiver, privateMap, "get"); return PlayField_classApplyDescriptorGet(receiver, descriptor); }
function PlayField_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function PlayField_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = PlayField_classExtractFieldDescriptor(receiver, privateMap, "set"); PlayField_classApplyDescriptorSet(receiver, descriptor, value); return value; }
function PlayField_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function PlayField_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }








var _gameBoard = /*#__PURE__*/new WeakMap();
var _puzzleMatrix = /*#__PURE__*/new WeakMap();
var _numFilledCellsPuzzle = /*#__PURE__*/new WeakMap();
var _sumCellsPlayField = /*#__PURE__*/new WeakMap();
var _boardStateMatrix = /*#__PURE__*/new WeakMap();
var _boardCells = /*#__PURE__*/new WeakMap();
var _stopWatch = /*#__PURE__*/new WeakMap();
var _gameApp = /*#__PURE__*/new WeakMap();
var _constructBoardCells = /*#__PURE__*/new WeakSet();
var _changeCellsContentToBoardState = /*#__PURE__*/new WeakSet();
var _handleWinGame = /*#__PURE__*/new WeakSet();
var PlayField = /*#__PURE__*/function () {
  function PlayField(gameBoard, puzzleMatrix, boardStateMatrix, stopWatch, gameApp) {
    PlayField_classCallCheck(this, PlayField);
    PlayField_classPrivateMethodInitSpec(this, _handleWinGame);
    PlayField_classPrivateMethodInitSpec(this, _changeCellsContentToBoardState);
    PlayField_classPrivateMethodInitSpec(this, _constructBoardCells);
    PlayField_classPrivateFieldInitSpec(this, _gameBoard, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldInitSpec(this, _puzzleMatrix, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldInitSpec(this, _numFilledCellsPuzzle, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldInitSpec(this, _sumCellsPlayField, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldInitSpec(this, _boardStateMatrix, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldInitSpec(this, _boardCells, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldInitSpec(this, _stopWatch, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldInitSpec(this, _gameApp, {
      writable: true,
      value: void 0
    });
    PlayField_classPrivateFieldSet(this, _gameBoard, gameBoard);
    PlayField_classPrivateFieldSet(this, _stopWatch, stopWatch);
    PlayField_classPrivateFieldSet(this, _gameApp, gameApp);
    PlayField_classPrivateFieldSet(this, _puzzleMatrix, puzzleMatrix);
    PlayField_classPrivateFieldSet(this, _numFilledCellsPuzzle, countFilledCellsInPuzzle(puzzleMatrix));
    if (isEmptyBoardStateMatrix(boardStateMatrix)) {
      PlayField_classPrivateFieldSet(this, _boardStateMatrix, initializeBoardStateMatrix(puzzleMatrix));
      PlayField_classPrivateFieldSet(this, _sumCellsPlayField, -1 * PlayField_classPrivateFieldGet(this, _numFilledCellsPuzzle));
    } else {
      PlayField_classPrivateFieldSet(this, _boardStateMatrix, boardStateMatrix);
      PlayField_classPrivateFieldSet(this, _sumCellsPlayField, countSumCellsForPlayField(PlayField_classPrivateFieldGet(this, _boardStateMatrix), PlayField_classPrivateFieldGet(this, _puzzleMatrix)));
    }
    PlayField_classPrivateMethodGet(this, _constructBoardCells, _constructBoardCells2).call(this);
    if (!isEmptyBoardStateMatrix(boardStateMatrix)) {
      PlayField_classPrivateMethodGet(this, _changeCellsContentToBoardState, _changeCellsContentToBoardState2).call(this);
    }
  }
  PlayField_createClass(PlayField, [{
    key: "handleAction",
    value: function handleAction(cellIndexRow, cellIndexColumn, actionType, canvasContext, boardSettings, board) {
      var iRow = cellIndexRow;
      var jCol = cellIndexColumn;
      var cell = PlayField_classPrivateFieldGet(this, _boardCells)[iRow][jCol];
      var _cell$handleAction = cell.handleAction(actionType, canvasContext, boardSettings, board),
        newCellState = _cell$handleAction.newCellState,
        stateDelta = _cell$handleAction.stateDelta;
      PlayField_classPrivateFieldGet(this, _boardStateMatrix)[iRow][jCol] = newCellState;
      PlayField_classPrivateFieldSet(this, _sumCellsPlayField, PlayField_classPrivateFieldGet(this, _sumCellsPlayField) + stateDelta);
      if (PlayField_classPrivateFieldGet(this, _sumCellsPlayField) === PlayField_classPrivateFieldGet(this, _numFilledCellsPuzzle)) {
        PlayField_classPrivateMethodGet(this, _handleWinGame, _handleWinGame2).call(this);
      }
    }
  }, {
    key: "getBoardStateString",
    value: function getBoardStateString() {
      return encodePuzzle(PlayField_classPrivateFieldGet(this, _boardStateMatrix));
    }
  }]);
  return PlayField;
}();
function _constructBoardCells2() {
  if (PlayField_classPrivateFieldGet(this, _puzzleMatrix).length !== PlayField_classPrivateFieldGet(this, _boardStateMatrix).length || PlayField_classPrivateFieldGet(this, _puzzleMatrix).length[0] !== PlayField_classPrivateFieldGet(this, _boardStateMatrix).length[0]) {
    var messageText = "Sorry, the saved nonogram could not be loaded";
    PlayField_classPrivateFieldGet(this, _gameApp).showDialog(messageText);
  } else {
    PlayField_classPrivateFieldSet(this, _boardCells, constructBoardCells(PlayField_classPrivateFieldGet(this, _gameBoard), PlayField_classPrivateFieldGet(this, _puzzleMatrix), PlayField_classPrivateFieldGet(this, _boardStateMatrix)));
  }
}
function _changeCellsContentToBoardState2() {
  changeCellsContentToBoardState(PlayField_classPrivateFieldGet(this, _gameBoard), PlayField_classPrivateFieldGet(this, _boardCells));
}
function _handleWinGame2() {
  playSoundOnWin();
  PlayField_classPrivateFieldGet(this, _stopWatch).stop();
  PlayField_classPrivateFieldGet(this, _gameBoard).blockPlayField();
  PlayField_classPrivateFieldGet(this, _gameBoard).addLatestWin();
  var timeInSec = PlayField_classPrivateFieldGet(this, _stopWatch).getTimeInSeconds();
  var winMessageText = "Great! You have solved the nonogram in ".concat(timeInSec, " seconds!");
  PlayField_classPrivateFieldGet(this, _gameApp).showDialog(winMessageText);
}
;// CONCATENATED MODULE: ./src/scripts/game-board/getCellIndexByOneCoord.js
var getCellIndexByOneCoord = function getCellIndexByOneCoord(coord, blockSize, divideNumCells, diffDividerRegLinePx, cellWithLinePx) {
  var cntFullBlocks = Math.floor(coord / blockSize);
  var coordShiftInBlock = coord % blockSize - diffDividerRegLinePx; // left half of divider -> previous cell
  var cntFullCells = Math.floor(coordShiftInBlock / cellWithLinePx);
  var idxBlockShift = cntFullBlocks * divideNumCells;
  var idxCellShift = cntFullCells;
  var cellIndex = idxBlockShift + idxCellShift;
  return cellIndex;
};
;// CONCATENATED MODULE: ./src/scripts/play-field/clearPlayField.js
function clearPlayField_toConsumableArray(arr) { return clearPlayField_arrayWithoutHoles(arr) || clearPlayField_iterableToArray(arr) || clearPlayField_unsupportedIterableToArray(arr) || clearPlayField_nonIterableSpread(); }
function clearPlayField_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function clearPlayField_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return clearPlayField_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return clearPlayField_arrayLikeToArray(o, minLen); }
function clearPlayField_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function clearPlayField_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return clearPlayField_arrayLikeToArray(arr); }
function clearPlayField_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var clearPlayField = function clearPlayField(canvasContext, playAreaRect) {
  var ctx = canvasContext;
  ctx.clearRect.apply(ctx, clearPlayField_toConsumableArray(playAreaRect));
};
// EXTERNAL MODULE: ./src/scripts/layout/getGameAppNode.js
var getGameAppNode = __webpack_require__(608);
;// CONCATENATED MODULE: ./src/scripts/layout/createGameBoardCanvas.js

var createGameBoardCanvas = function createGameBoardCanvas() {
  var canvasSection = document.createElement("section");
  canvasSection.classList.add("gameboard");
  getGameAppNode/* gameAppNode */.G.appendChild(canvasSection);
  var canvasNode = document.createElement("canvas");
  canvasNode.classList.add("gameboard__canvas");
  canvasSection.appendChild(canvasNode);
  return canvasNode;
};
;// CONCATENATED MODULE: ./src/scripts/game-board/getTextVertDeltaPx.js
var getTextVertDeltaPx = function getTextVertDeltaPx(canvasContextRef) {
  var ctx = canvasContextRef;
  var sampleString = "0123456789";
  var textMetrics = ctx.measureText(sampleString);
  var vertDelta = (textMetrics.actualBoundingBoxAscent - textMetrics.actualBoundingBoxDescent) / 2;
  return vertDelta;
};
;// CONCATENATED MODULE: ./src/scripts/GameBoard.js
function GameBoard_typeof(o) { "@babel/helpers - typeof"; return GameBoard_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, GameBoard_typeof(o); }
function GameBoard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function GameBoard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, GameBoard_toPropertyKey(descriptor.key), descriptor); } }
function GameBoard_createClass(Constructor, protoProps, staticProps) { if (protoProps) GameBoard_defineProperties(Constructor.prototype, protoProps); if (staticProps) GameBoard_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function GameBoard_toPropertyKey(t) { var i = GameBoard_toPrimitive(t, "string"); return "symbol" == GameBoard_typeof(i) ? i : String(i); }
function GameBoard_toPrimitive(t, r) { if ("object" != GameBoard_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != GameBoard_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function GameBoard_classPrivateMethodInitSpec(obj, privateSet) { GameBoard_checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function GameBoard_classPrivateFieldInitSpec(obj, privateMap, value) { GameBoard_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function GameBoard_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function GameBoard_classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function GameBoard_classPrivateFieldGet(receiver, privateMap) { var descriptor = GameBoard_classExtractFieldDescriptor(receiver, privateMap, "get"); return GameBoard_classApplyDescriptorGet(receiver, descriptor); }
function GameBoard_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function GameBoard_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = GameBoard_classExtractFieldDescriptor(receiver, privateMap, "set"); GameBoard_classApplyDescriptorSet(receiver, descriptor, value); return value; }
function GameBoard_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function GameBoard_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }













var _canvasNode = /*#__PURE__*/new WeakMap();
var _canvasContext = /*#__PURE__*/new WeakMap();
var _playField = /*#__PURE__*/new WeakMap();
var _isInPlayMode = /*#__PURE__*/new WeakMap();
var _board = /*#__PURE__*/new WeakMap();
var _playArea = /*#__PURE__*/new WeakMap();
var _clues = /*#__PURE__*/new WeakMap();
var _boardSettings = /*#__PURE__*/new WeakMap();
var GameBoard_puzzleMatrix = /*#__PURE__*/new WeakMap();
var _puzzleClues = /*#__PURE__*/new WeakMap();
var GameBoard_actions = /*#__PURE__*/new WeakMap();
var _hasEventListeners = /*#__PURE__*/new WeakMap();
var GameBoard_stopWatch = /*#__PURE__*/new WeakMap();
var _isStopWatchStarted = /*#__PURE__*/new WeakMap();
var _game = /*#__PURE__*/new WeakMap();
var GameBoard_gameApp = /*#__PURE__*/new WeakMap();
var _setTextStyleForClues = /*#__PURE__*/new WeakSet();
var _setTextVertDelta = /*#__PURE__*/new WeakSet();
var _setCountRowsCols = /*#__PURE__*/new WeakSet();
var _setBoardSize = /*#__PURE__*/new WeakSet();
var _setPlayFieldPath2D = /*#__PURE__*/new WeakSet();
var _drawBoardGrid = /*#__PURE__*/new WeakSet();
var _writeClues = /*#__PURE__*/new WeakSet();
var _triggerEventInsidePlayField = /*#__PURE__*/new WeakSet();
var _addListeners = /*#__PURE__*/new WeakSet();
var GameBoard = /*#__PURE__*/function () {
  function GameBoard(stopWatch, game, gameApp) {
    GameBoard_classCallCheck(this, GameBoard);
    GameBoard_classPrivateMethodInitSpec(this, _addListeners);
    GameBoard_classPrivateMethodInitSpec(this, _triggerEventInsidePlayField);
    GameBoard_classPrivateMethodInitSpec(this, _writeClues);
    GameBoard_classPrivateMethodInitSpec(this, _drawBoardGrid);
    GameBoard_classPrivateMethodInitSpec(this, _setPlayFieldPath2D);
    GameBoard_classPrivateMethodInitSpec(this, _setBoardSize);
    GameBoard_classPrivateMethodInitSpec(this, _setCountRowsCols);
    GameBoard_classPrivateMethodInitSpec(this, _setTextVertDelta);
    GameBoard_classPrivateMethodInitSpec(this, _setTextStyleForClues);
    GameBoard_classPrivateFieldInitSpec(this, _canvasNode, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, _canvasContext, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, _playField, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, _isInPlayMode, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, _board, {
      writable: true,
      value: {
        width: 0,
        height: 0,
        cluesWidth: 0,
        cluesHeight: 0,
        blockSize: 0,
        // block - five cells with one divider and four lines if `divideNumCells` = 5
        textVertDeltaPx: 0 // delta to vertically align text for a given font, calculates for a given font
      }
    });
    GameBoard_classPrivateFieldInitSpec(this, _playArea, {
      writable: true,
      value: {
        rows: 0,
        cols: 0,
        rectPath: new Path2D(),
        // path of the playArea to detect mouse events
        rect: [] // rect coordinates for clearRect (x, y, width, height)
      }
    });
    GameBoard_classPrivateFieldInitSpec(this, _clues, {
      writable: true,
      value: {
        rows: 0,
        cols: 0
      }
    });
    GameBoard_classPrivateFieldInitSpec(this, _boardSettings, {
      writable: true,
      value: {
        cellSizePx: 18,
        lineWidthPx: 1,
        dividerWidthPx: 2,
        divideNumCells: 5,
        // number of cells in one group/block
        cluesFont: "normal 500 16px 'El Messiri', 'Verdana', sans-serif",
        cluesColor: "#1c1c19",
        lineColor: "#939189",
        dividerColor: "#767672",
        filledCellBg: "#1c1c19",
        cross: {
          color: "#1c1c19",
          lineWidth: 1,
          margin: 1 // margin from the cell border
        }
      }
    });
    GameBoard_classPrivateFieldInitSpec(this, GameBoard_puzzleMatrix, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, _puzzleClues, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, GameBoard_actions, {
      writable: true,
      value: actionTypes
    });
    GameBoard_classPrivateFieldInitSpec(this, _hasEventListeners, {
      writable: true,
      value: false
    });
    GameBoard_classPrivateFieldInitSpec(this, GameBoard_stopWatch, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, _isStopWatchStarted, {
      writable: true,
      value: false
    });
    GameBoard_classPrivateFieldInitSpec(this, _game, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldInitSpec(this, GameBoard_gameApp, {
      writable: true,
      value: void 0
    });
    GameBoard_classPrivateFieldSet(this, _game, game);
    GameBoard_classPrivateFieldSet(this, _canvasNode, createGameBoardCanvas());
    GameBoard_classPrivateFieldSet(this, _canvasContext, GameBoard_classPrivateFieldGet(this, _canvasNode).getContext("2d"));
    GameBoard_classPrivateFieldSet(this, GameBoard_stopWatch, stopWatch);
    GameBoard_classPrivateFieldSet(this, GameBoard_gameApp, gameApp);
  }
  GameBoard_createClass(GameBoard, [{
    key: "getCellCoordByIndex",
    value: function getCellCoordByIndex(index) {
      return getCoordShiftByIndex(index, GameBoard_classPrivateFieldGet(this, _board).blockSize, GameBoard_classPrivateFieldGet(this, _boardSettings).divideNumCells, GameBoard_classPrivateFieldGet(this, _boardSettings).dividerWidthPx, GameBoard_classPrivateFieldGet(this, _boardSettings).cellSizePx + GameBoard_classPrivateFieldGet(this, _boardSettings).lineWidthPx);
    }
  }, {
    key: "getCellIndexByCoord",
    value: function getCellIndexByCoord(coordinate) {
      return getCellIndexByOneCoord(coordinate, GameBoard_classPrivateFieldGet(this, _board).blockSize, GameBoard_classPrivateFieldGet(this, _boardSettings).divideNumCells, GameBoard_classPrivateFieldGet(this, _boardSettings).dividerWidthPx - GameBoard_classPrivateFieldGet(this, _boardSettings).lineWidthPx, GameBoard_classPrivateFieldGet(this, _boardSettings).cellSizePx + GameBoard_classPrivateFieldGet(this, _boardSettings).lineWidthPx);
    }
  }, {
    key: "drawBoard",
    value: function drawBoard(puzzleMatrix, puzzleClues, boardStateMatrix, timeSec) {
      GameBoard_classPrivateFieldSet(this, GameBoard_puzzleMatrix, puzzleMatrix);
      GameBoard_classPrivateFieldSet(this, _puzzleClues, puzzleClues);
      GameBoard_classPrivateMethodGet(this, _setCountRowsCols, _setCountRowsCols2).call(this);
      GameBoard_classPrivateMethodGet(this, _setBoardSize, _setBoardSize2).call(this);
      GameBoard_classPrivateMethodGet(this, _drawBoardGrid, _drawBoardGrid2).call(this);
      GameBoard_classPrivateMethodGet(this, _setTextStyleForClues, _setTextStyleForClues2).call(this);
      GameBoard_classPrivateMethodGet(this, _setTextVertDelta, _setTextVertDelta2).call(this);
      GameBoard_classPrivateMethodGet(this, _writeClues, _writeClues2).call(this);
      GameBoard_classPrivateFieldSet(this, _playField, new PlayField(this, puzzleMatrix, boardStateMatrix, GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch), GameBoard_classPrivateFieldGet(this, GameBoard_gameApp)));
      GameBoard_classPrivateMethodGet(this, _addListeners, _addListeners2).call(this);
      GameBoard_classPrivateFieldSet(this, _isInPlayMode, true);
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).stop();
      var isRestartTimer = timeSec > 0;
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).initialize(isRestartTimer, timeSec);
      GameBoard_classPrivateFieldSet(this, _isStopWatchStarted, false);
    }
  }, {
    key: "drawSolution",
    value: function drawSolution() {
      GameBoard_classPrivateFieldSet(this, _isInPlayMode, false);
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).stop();
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).initialize(false, 0);
      GameBoard_classPrivateFieldSet(this, _isStopWatchStarted, false);
      drawSolution_drawSolution(GameBoard_classPrivateFieldGet(this, _canvasContext), GameBoard_classPrivateFieldGet(this, GameBoard_puzzleMatrix), GameBoard_classPrivateFieldGet(this, _board), GameBoard_classPrivateFieldGet(this, _boardSettings));
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      var emptyBoardStateMatrix = [];
      clearPlayField(GameBoard_classPrivateFieldGet(this, _canvasContext), GameBoard_classPrivateFieldGet(this, _playArea).rect);
      GameBoard_classPrivateMethodGet(this, _drawBoardGrid, _drawBoardGrid2).call(this);
      GameBoard_classPrivateFieldSet(this, _playField, new PlayField(this, GameBoard_classPrivateFieldGet(this, GameBoard_puzzleMatrix), emptyBoardStateMatrix, GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch), GameBoard_classPrivateFieldGet(this, GameBoard_gameApp)));
      GameBoard_classPrivateMethodGet(this, _addListeners, _addListeners2).call(this);
      GameBoard_classPrivateFieldSet(this, _isInPlayMode, true);
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).stop();
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).initialize(false, 0);
      GameBoard_classPrivateFieldSet(this, _isStopWatchStarted, false);
    }
  }, {
    key: "addLatestWin",
    value: function addLatestWin() {
      GameBoard_classPrivateFieldGet(this, _game).addLatestWin();
    }
  }, {
    key: "blockPlayField",
    value: function blockPlayField() {
      GameBoard_classPrivateFieldSet(this, _isInPlayMode, false);
    }
  }, {
    key: "getBoardStateString",
    value: function getBoardStateString() {
      var isActiveGame = GameBoard_classPrivateFieldGet(this, _isInPlayMode) && GameBoard_classPrivateFieldGet(this, _isStopWatchStarted);
      var boardStateStr = isActiveGame ? GameBoard_classPrivateFieldGet(this, _playField).getBoardStateString() : "";
      return boardStateStr;
    }
  }, {
    key: "getBoardSettings",
    value: function getBoardSettings() {
      return GameBoard_classPrivateFieldGet(this, _boardSettings);
    }
  }, {
    key: "getBoard",
    value: function getBoard() {
      return GameBoard_classPrivateFieldGet(this, _board);
    }
  }, {
    key: "getCanvasContext",
    value: function getCanvasContext() {
      return GameBoard_classPrivateFieldGet(this, _canvasContext);
    }
  }, {
    key: "pauseStopWatch",
    value: function pauseStopWatch() {
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).stop();
      GameBoard_classPrivateFieldSet(this, _isStopWatchStarted, false);
    }
  }]);
  return GameBoard;
}();
function _setTextStyleForClues2() {
  setTextStyleForClues(GameBoard_classPrivateFieldGet(this, _canvasContext), GameBoard_classPrivateFieldGet(this, _boardSettings));
}
function _setTextVertDelta2() {
  GameBoard_classPrivateFieldGet(this, _board).textVertDeltaPx = getTextVertDeltaPx(GameBoard_classPrivateFieldGet(this, _canvasContext));
}
function _setCountRowsCols2() {
  var _countPuzzleRowsCols = countPuzzleRowsCols(GameBoard_classPrivateFieldGet(this, GameBoard_puzzleMatrix), GameBoard_classPrivateFieldGet(this, _puzzleClues)),
    numRowForPuzzle = _countPuzzleRowsCols.numRowForPuzzle,
    numColForPuzzle = _countPuzzleRowsCols.numColForPuzzle,
    numRowForClues = _countPuzzleRowsCols.numRowForClues,
    numColForClues = _countPuzzleRowsCols.numColForClues;
  GameBoard_classPrivateFieldGet(this, _playArea).rows = numRowForPuzzle;
  GameBoard_classPrivateFieldGet(this, _playArea).cols = numColForPuzzle;
  GameBoard_classPrivateFieldGet(this, _clues).rows = numRowForClues;
  GameBoard_classPrivateFieldGet(this, _clues).cols = numColForClues;
}
function _setBoardSize2() {
  var _getGameBoardSize = getGameBoardSize(GameBoard_classPrivateFieldGet(this, _playArea), GameBoard_classPrivateFieldGet(this, _clues), GameBoard_classPrivateFieldGet(this, _boardSettings)),
    boardWidth = _getGameBoardSize.boardWidth,
    boardHeight = _getGameBoardSize.boardHeight,
    cluesWidth = _getGameBoardSize.cluesWidth,
    cluesHeight = _getGameBoardSize.cluesHeight,
    blockSize = _getGameBoardSize.blockSize;
  GameBoard_classPrivateFieldGet(this, _canvasNode).width = boardWidth;
  GameBoard_classPrivateFieldGet(this, _canvasNode).height = boardHeight;
  GameBoard_classPrivateFieldGet(this, _board).width = boardWidth;
  GameBoard_classPrivateFieldGet(this, _board).height = boardHeight;
  GameBoard_classPrivateFieldGet(this, _board).cluesWidth = cluesWidth;
  GameBoard_classPrivateFieldGet(this, _board).cluesHeight = cluesHeight;
  GameBoard_classPrivateFieldGet(this, _board).blockSize = blockSize;
  GameBoard_classPrivateMethodGet(this, _setPlayFieldPath2D, _setPlayFieldPath2D2).call(this);
}
function _setPlayFieldPath2D2() {
  var board = GameBoard_classPrivateFieldGet(this, _board);
  var boardSettings = GameBoard_classPrivateFieldGet(this, _boardSettings);
  var diffDividerRegLinePx = boardSettings.dividerWidthPx - boardSettings.lineWidthPx;
  var xLeft = board.cluesWidth + diffDividerRegLinePx; // exclude outside divider part from play field
  var yTop = board.cluesHeight + diffDividerRegLinePx;
  var width = board.width - xLeft - boardSettings.dividerWidthPx;
  var height = board.height - yTop - boardSettings.dividerWidthPx;
  var playFieldPath2D = new Path2D();
  playFieldPath2D.rect(xLeft, yTop, width, height);
  GameBoard_classPrivateFieldGet(this, _playArea).rectPath = playFieldPath2D;
  GameBoard_classPrivateFieldGet(this, _playArea).rect = [xLeft, yTop, width, height];
}
function _drawBoardGrid2() {
  drawGameBoardGrid(GameBoard_classPrivateFieldGet(this, _canvasContext), GameBoard_classPrivateFieldGet(this, _playArea), GameBoard_classPrivateFieldGet(this, _clues), GameBoard_classPrivateFieldGet(this, _board), GameBoard_classPrivateFieldGet(this, _boardSettings));
}
function _writeClues2() {
  writeClues(GameBoard_classPrivateFieldGet(this, _canvasContext), GameBoard_classPrivateFieldGet(this, _clues), GameBoard_classPrivateFieldGet(this, _puzzleClues), GameBoard_classPrivateFieldGet(this, _board), GameBoard_classPrivateFieldGet(this, _boardSettings));
}
function _triggerEventInsidePlayField2(event, actionType) {
  var ctx = GameBoard_classPrivateFieldGet(this, _canvasContext);
  var isInsidePlayArea = ctx.isPointInPath(GameBoard_classPrivateFieldGet(this, _playArea).rectPath, event.offsetX, event.offsetY);
  if (isInsidePlayArea) {
    if (!GameBoard_classPrivateFieldGet(this, _isStopWatchStarted)) {
      GameBoard_classPrivateFieldGet(this, GameBoard_stopWatch).start();
      GameBoard_classPrivateFieldSet(this, _isStopWatchStarted, true);
    }
    var xInPlayArea = event.offsetX - GameBoard_classPrivateFieldGet(this, _board).cluesWidth;
    var yInPlayArea = event.offsetY - GameBoard_classPrivateFieldGet(this, _board).cluesHeight;
    var idxRow = this.getCellIndexByCoord(yInPlayArea);
    var idxCol = this.getCellIndexByCoord(xInPlayArea);
    GameBoard_classPrivateFieldGet(this, _playField).handleAction(idxRow, idxCol, actionType, GameBoard_classPrivateFieldGet(this, _canvasContext), GameBoard_classPrivateFieldGet(this, _boardSettings), GameBoard_classPrivateFieldGet(this, _board));
  }
}
function _addListeners2() {
  var _this = this;
  if (GameBoard_classPrivateFieldGet(this, _hasEventListeners)) {
    return;
  }
  var canvasNode = GameBoard_classPrivateFieldGet(this, _canvasNode);
  var actions = Object.values(GameBoard_classPrivateFieldGet(this, GameBoard_actions));
  actions.forEach(function (actionType) {
    return canvasNode.addEventListener(actionType, function (event) {
      event.preventDefault();
      if (GameBoard_classPrivateFieldGet(_this, _isInPlayMode)) {
        GameBoard_classPrivateMethodGet(_this, _triggerEventInsidePlayField, _triggerEventInsidePlayField2).call(_this, event, actionType);
      }
    });
  });
  GameBoard_classPrivateFieldSet(this, _hasEventListeners, true);
}
;// CONCATENATED MODULE: ./src/scripts/stop-watch/formatTimeInSec.js
var formatTimeInSec = function formatTimeInSec(timeInSec) {
  var numToStrWithZeroPad = function numToStrWithZeroPad(number) {
    return number.toString().padStart(2, "0");
  };
  var secInMin = 60;
  var minInHour = 60;
  var hoursNum = Math.floor(timeInSec / (secInMin * minInHour));
  var minutesNum = Math.floor(timeInSec / secInMin) % minInHour;
  var secondsNum = timeInSec % minInHour;
  var hoursStr = numToStrWithZeroPad(hoursNum);
  var minutesStr = numToStrWithZeroPad(minutesNum);
  var secondsStr = numToStrWithZeroPad(secondsNum);
  var timeStr = hoursNum === 0 ? "".concat(minutesStr, ":").concat(secondsStr) : "".concat(hoursStr, ":").concat(minutesStr, ":").concat(secondsStr);
  return timeStr;
};
;// CONCATENATED MODULE: ./src/scripts/StopWatch.js
function StopWatch_typeof(o) { "@babel/helpers - typeof"; return StopWatch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StopWatch_typeof(o); }
function StopWatch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function StopWatch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, StopWatch_toPropertyKey(descriptor.key), descriptor); } }
function StopWatch_createClass(Constructor, protoProps, staticProps) { if (protoProps) StopWatch_defineProperties(Constructor.prototype, protoProps); if (staticProps) StopWatch_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function StopWatch_toPropertyKey(t) { var i = StopWatch_toPrimitive(t, "string"); return "symbol" == StopWatch_typeof(i) ? i : String(i); }
function StopWatch_toPrimitive(t, r) { if ("object" != StopWatch_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StopWatch_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function StopWatch_classPrivateFieldInitSpec(obj, privateMap, value) { StopWatch_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function StopWatch_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function StopWatch_classPrivateFieldGet(receiver, privateMap) { var descriptor = StopWatch_classExtractFieldDescriptor(receiver, privateMap, "get"); return StopWatch_classApplyDescriptorGet(receiver, descriptor); }
function StopWatch_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function StopWatch_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = StopWatch_classExtractFieldDescriptor(receiver, privateMap, "set"); StopWatch_classApplyDescriptorSet(receiver, descriptor, value); return value; }
function StopWatch_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function StopWatch_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _elapsedTimeSec = /*#__PURE__*/new WeakMap();
var _startTimeMSec = /*#__PURE__*/new WeakMap();
var _intervalId = /*#__PURE__*/new WeakMap();
var _mSecInSec = /*#__PURE__*/new WeakMap();
var _stopWatchNode = /*#__PURE__*/new WeakMap();
var StopWatch = /*#__PURE__*/function () {
  function StopWatch(stopWatchNode) {
    StopWatch_classCallCheck(this, StopWatch);
    StopWatch_classPrivateFieldInitSpec(this, _elapsedTimeSec, {
      writable: true,
      value: void 0
    });
    StopWatch_classPrivateFieldInitSpec(this, _startTimeMSec, {
      writable: true,
      value: void 0
    });
    StopWatch_classPrivateFieldInitSpec(this, _intervalId, {
      writable: true,
      value: void 0
    });
    StopWatch_classPrivateFieldInitSpec(this, _mSecInSec, {
      writable: true,
      value: 1000
    });
    StopWatch_classPrivateFieldInitSpec(this, _stopWatchNode, {
      writable: true,
      value: void 0
    });
    StopWatch_classPrivateFieldSet(this, _stopWatchNode, stopWatchNode);
  }
  StopWatch_createClass(StopWatch, [{
    key: "updateTimeInSec",
    value: function updateTimeInSec() {
      var currTimeInMSec = Date.now();
      var elapsedTimeMSec = currTimeInMSec - StopWatch_classPrivateFieldGet(this, _startTimeMSec);
      StopWatch_classPrivateFieldSet(this, _elapsedTimeSec, Math.floor(elapsedTimeMSec / StopWatch_classPrivateFieldGet(this, _mSecInSec)));
      StopWatch_classPrivateFieldGet(this, _stopWatchNode).innerText = this.getTimeFormatted();
    }
  }, {
    key: "initialize",
    value: function initialize(isRestart, elapsedTimeSecSaved) {
      var elapsedTimeSecZero = 0;
      StopWatch_classPrivateFieldSet(this, _elapsedTimeSec, isRestart ? elapsedTimeSecSaved : elapsedTimeSecZero);
      StopWatch_classPrivateFieldGet(this, _stopWatchNode).innerText = this.getTimeFormatted();
    }
  }, {
    key: "start",
    value: function start() {
      var startTimeInMSec = Date.now();
      var oneSecInMSec = 1000;
      StopWatch_classPrivateFieldSet(this, _startTimeMSec, startTimeInMSec - StopWatch_classPrivateFieldGet(this, _elapsedTimeSec) * StopWatch_classPrivateFieldGet(this, _mSecInSec));
      StopWatch_classPrivateFieldSet(this, _intervalId, setInterval(this.updateTimeInSec.bind(this), oneSecInMSec));
    }
  }, {
    key: "stop",
    value: function stop() {
      var stopTimeInMSec = Date.now();
      clearInterval(StopWatch_classPrivateFieldGet(this, _intervalId));
      StopWatch_classPrivateFieldSet(this, _intervalId, null);
      var elapsedTimeMSec = stopTimeInMSec - StopWatch_classPrivateFieldGet(this, _startTimeMSec);
      StopWatch_classPrivateFieldSet(this, _elapsedTimeSec, Math.floor(elapsedTimeMSec / StopWatch_classPrivateFieldGet(this, _mSecInSec)));
      StopWatch_classPrivateFieldGet(this, _stopWatchNode).innerText = this.getTimeFormatted();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.stop();
      StopWatch_classPrivateFieldSet(this, _elapsedTimeSec, 0);
    }
  }, {
    key: "getTimeInSeconds",
    value: function getTimeInSeconds() {
      return StopWatch_classPrivateFieldGet(this, _elapsedTimeSec);
    }
  }, {
    key: "getTimeFormatted",
    value: function getTimeFormatted() {
      var timeStr = formatTimeInSec(StopWatch_classPrivateFieldGet(this, _elapsedTimeSec));
      return timeStr;
    }
  }]);
  return StopWatch;
}();
;// CONCATENATED MODULE: ./src/scripts/latest-wins/getLatestWins.js
var getLatestWins = function getLatestWins() {
  var _localStorage$latestW;
  var latestWinsDefaultArr = "[]";
  var latestWinsArr = JSON.parse((_localStorage$latestW = localStorage.latestWins) !== null && _localStorage$latestW !== void 0 ? _localStorage$latestW : latestWinsDefaultArr);
  return latestWinsArr;
};
;// CONCATENATED MODULE: ./src/scripts/latest-wins/addLatestWin.js

var addLatestWin_addLatestWin = function addLatestWin(nonogramId, nonogramName, nonogramLevel, timeFormattedStr, timeSeconds) {
  var latestWins = getLatestWins();
  var currentWin = {
    id: nonogramId,
    name: nonogramName,
    level: nonogramLevel,
    time: timeFormattedStr,
    timeSec: timeSeconds
  };
  latestWins.push(currentWin);
  while (latestWins.length > 5) {
    latestWins.shift();
  }
  localStorage.setItem("latestWins", JSON.stringify(latestWins));
};
;// CONCATENATED MODULE: ./src/scripts/latest-wins/getSortedLatestWins.js
function getSortedLatestWins_toConsumableArray(arr) { return getSortedLatestWins_arrayWithoutHoles(arr) || getSortedLatestWins_iterableToArray(arr) || getSortedLatestWins_unsupportedIterableToArray(arr) || getSortedLatestWins_nonIterableSpread(); }
function getSortedLatestWins_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function getSortedLatestWins_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getSortedLatestWins_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getSortedLatestWins_arrayLikeToArray(o, minLen); }
function getSortedLatestWins_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function getSortedLatestWins_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return getSortedLatestWins_arrayLikeToArray(arr); }
function getSortedLatestWins_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var getSortedLatestWins = function getSortedLatestWins() {
  var compareByTimeInSeconds = function compareByTimeInSeconds(a, b) {
    return a.timeSec - b.timeSec;
  };
  var latestWins = getLatestWins();
  var latestWinsSorted = getSortedLatestWins_toConsumableArray(latestWins).sort(compareByTimeInSeconds);
  return latestWinsSorted;
};
;// CONCATENATED MODULE: ./src/scripts/layout/latest-wins/updateLatestWinsNodes.js

var updateLatestWinsNodes = function updateLatestWinsNodes(winsListNodes) {
  var latestWins = getSortedLatestWins();
  var cols = ["time", "name", "level"];
  for (var i = 0; i < winsListNodes.length; i += 1) {
    var winLine = winsListNodes[i];
    for (var j = 0; j < cols.length; j += 1) {
      var _latestWins$i$cols$j, _latestWins$i;
      var winNode = winLine[cols[j]];
      winNode.innerText = (_latestWins$i$cols$j = latestWins === null || latestWins === void 0 || (_latestWins$i = latestWins[i]) === null || _latestWins$i === void 0 ? void 0 : _latestWins$i[cols[j]]) !== null && _latestWins$i$cols$j !== void 0 ? _latestWins$i$cols$j : "";
    }
  }
};
;// CONCATENATED MODULE: ./src/scripts/game/saveGameToLocalStorage.js
var saveGameToLocalStorage = function saveGameToLocalStorage(nonogramId, timeSec, boardStateStr) {
  var gameStatus = {
    nonogramId: nonogramId,
    timeSec: timeSec,
    boardStateStr: boardStateStr
  };
  localStorage.setItem("savedGame", JSON.stringify(gameStatus));
};
;// CONCATENATED MODULE: ./src/scripts/Game.js
function Game_typeof(o) { "@babel/helpers - typeof"; return Game_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Game_typeof(o); }
function Game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Game_toPropertyKey(descriptor.key), descriptor); } }
function Game_createClass(Constructor, protoProps, staticProps) { if (protoProps) Game_defineProperties(Constructor.prototype, protoProps); if (staticProps) Game_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Game_toPropertyKey(t) { var i = Game_toPrimitive(t, "string"); return "symbol" == Game_typeof(i) ? i : String(i); }
function Game_toPrimitive(t, r) { if ("object" != Game_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Game_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Game_classPrivateFieldInitSpec(obj, privateMap, value) { Game_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function Game_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function Game_classPrivateFieldGet(receiver, privateMap) { var descriptor = Game_classExtractFieldDescriptor(receiver, privateMap, "get"); return Game_classApplyDescriptorGet(receiver, descriptor); }
function Game_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function Game_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = Game_classExtractFieldDescriptor(receiver, privateMap, "set"); Game_classApplyDescriptorSet(receiver, descriptor, value); return value; }
function Game_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function Game_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }







var _nonogram = /*#__PURE__*/new WeakMap();
var Game_gameBoard = /*#__PURE__*/new WeakMap();
var _isGameInProgress = /*#__PURE__*/new WeakMap();
var Game_stopWatch = /*#__PURE__*/new WeakMap();
var _latestWinsNodes = /*#__PURE__*/new WeakMap();
var Game_gameApp = /*#__PURE__*/new WeakMap();
var Game = /*#__PURE__*/function () {
  function Game(stopWatchNode, latestWinsNodes, gameApp) {
    Game_classCallCheck(this, Game);
    Game_classPrivateFieldInitSpec(this, _nonogram, {
      writable: true,
      value: {}
    });
    Game_classPrivateFieldInitSpec(this, Game_gameBoard, {
      writable: true,
      value: void 0
    });
    Game_classPrivateFieldInitSpec(this, _isGameInProgress, {
      writable: true,
      value: false
    });
    Game_classPrivateFieldInitSpec(this, Game_stopWatch, {
      writable: true,
      value: void 0
    });
    Game_classPrivateFieldInitSpec(this, _latestWinsNodes, {
      writable: true,
      value: void 0
    });
    Game_classPrivateFieldInitSpec(this, Game_gameApp, {
      writable: true,
      value: void 0
    });
    Game_classPrivateFieldSet(this, Game_stopWatch, new StopWatch(stopWatchNode));
    Game_classPrivateFieldSet(this, Game_gameBoard, new GameBoard(Game_classPrivateFieldGet(this, Game_stopWatch), this, gameApp));
    Game_classPrivateFieldSet(this, _latestWinsNodes, latestWinsNodes);
    Game_classPrivateFieldSet(this, Game_gameApp, gameApp);
  }
  Game_createClass(Game, [{
    key: "setNonogram",
    value: function setNonogram(nonogram, boardStateMatrix, timeSec) {
      Game_classPrivateFieldSet(this, _nonogram, nonogram);
      var puzzleMatrix = decodePuzzle(Game_classPrivateFieldGet(this, _nonogram).puzzle);
      var _formPuzzleClues = formPuzzleClues(puzzleMatrix),
        rowsAllClues = _formPuzzleClues.rowsAllClues,
        colsAllClues = _formPuzzleClues.colsAllClues;
      Game_classPrivateFieldGet(this, Game_gameBoard).drawBoard(puzzleMatrix, {
        rowsAllClues: rowsAllClues,
        colsAllClues: colsAllClues
      }, boardStateMatrix, timeSec);
    }
  }, {
    key: "showSolution",
    value: function showSolution() {
      Game_classPrivateFieldGet(this, Game_gameBoard).drawSolution();
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      Game_classPrivateFieldGet(this, Game_gameBoard).resetGame();
    }
  }, {
    key: "saveGame",
    value: function saveGame() {
      var nonogramId = Game_classPrivateFieldGet(this, _nonogram).id;
      var timeSec = Game_classPrivateFieldGet(this, Game_stopWatch).getTimeInSeconds();
      var boardStateStr = Game_classPrivateFieldGet(this, Game_gameBoard).getBoardStateString();
      var messageText;
      if (boardStateStr) {
        Game_classPrivateFieldGet(this, Game_gameBoard).pauseStopWatch();
        saveGameToLocalStorage(nonogramId, timeSec, boardStateStr);
        messageText = "The game has been saved";
      } else {
        messageText = "Nothing to save: the nonogram has already been solved or has not yet been started";
      }
      Game_classPrivateFieldGet(this, Game_gameApp).showDialog(messageText);
    }
  }, {
    key: "addLatestWin",
    value: function addLatestWin() {
      addLatestWin_addLatestWin(Game_classPrivateFieldGet(this, _nonogram).id, Game_classPrivateFieldGet(this, _nonogram).nameWithSize, Game_classPrivateFieldGet(this, _nonogram).level, Game_classPrivateFieldGet(this, Game_stopWatch).getTimeFormatted(), Game_classPrivateFieldGet(this, Game_stopWatch).getTimeInSeconds());
      updateLatestWinsNodes(Game_classPrivateFieldGet(this, _latestWinsNodes));
    }
  }]);
  return Game;
}();
;// CONCATENATED MODULE: ./src/scripts/layout/latest-wins/createLatestWinsNodes.js


var createLatestWinsNodes = function createLatestWinsNodes() {
  var latestWinsSection = document.createElement("section");
  latestWinsSection.classList.add("latest-wins");
  getGameAppNode/* gameAppNode */.G.appendChild(latestWinsSection);
  var latestWinsHeader = document.createElement("h2");
  latestWinsHeader.classList.add("latest-wins__header");
  latestWinsHeader.innerText = "High Score Table";
  latestWinsSection.appendChild(latestWinsHeader);
  var numWins = 5;
  var cols = ["time", "name", "level"];
  var winsListNodes = [];
  for (var i = 0; i < numWins; i += 1) {
    var winsLine = document.createElement("div");
    winsLine.classList.add("wins-line");
    var winNodes = {};
    for (var j = 0; j < cols.length; j += 1) {
      var winCol = document.createElement("div");
      var className = "wins-line__".concat(cols[j]);
      winCol.classList.add(className);
      winNodes[cols[j]] = winCol;
      winsLine.appendChild(winCol);
    }
    winsListNodes.push(winNodes);
    latestWinsSection.appendChild(winsLine);
  }
  updateLatestWinsNodes(winsListNodes);
  return {
    latestWinsSection: latestWinsSection,
    latestWinsNodes: winsListNodes
  };
};
// EXTERNAL MODULE: ./src/scripts/sound/getSoundMuteValue.js
var getSoundMuteValue = __webpack_require__(400);
// EXTERNAL MODULE: ./src/scripts/theme/getThemeName.js
var getThemeName = __webpack_require__(672);
;// CONCATENATED MODULE: ./src/scripts/layout/select-game/createSelectGameSection.js

var createSelectGameSection = function createSelectGameSection() {
  var selectGameSection = document.createElement("section");
  selectGameSection.classList.add("select-game");
  getGameAppNode/* gameAppNode */.G.appendChild(selectGameSection);
  var divLevelBlock = document.createElement("div");
  divLevelBlock.classList.add("select-game__item", "level");
  selectGameSection.appendChild(divLevelBlock);
  var levelLabel = document.createElement("label");
  levelLabel.classList.add("level__label", "label");
  levelLabel.htmlFor = "level-select";
  levelLabel.innerText = "Level";
  divLevelBlock.appendChild(levelLabel);
  var levelSelect = document.createElement("select");
  levelSelect.classList.add("level__select", "select");
  levelSelect.id = "level-select";
  levelSelect.name = "levels";
  divLevelBlock.appendChild(levelSelect);
  var divNonogramBlock = document.createElement("div");
  divNonogramBlock.classList.add("select-game__item", "nonogram");
  selectGameSection.appendChild(divNonogramBlock);
  var nonogramLabel = document.createElement("label");
  nonogramLabel.classList.add("nonogram__label", "label");
  nonogramLabel.htmlFor = "nonogram-select";
  nonogramLabel.innerText = "Nonogram";
  divNonogramBlock.appendChild(nonogramLabel);
  var nonogramSelect = document.createElement("select");
  nonogramSelect.classList.add("nonogram__select", "select");
  nonogramSelect.id = "nonogram-select";
  nonogramSelect.name = "nonograms";
  divNonogramBlock.appendChild(nonogramSelect);
  return {
    levelSelect: levelSelect,
    nonogramSelect: nonogramSelect
  };
};
;// CONCATENATED MODULE: ./src/scripts/layout/select-game/createLevelOptions.js
function createLevelOptions_toConsumableArray(arr) { return createLevelOptions_arrayWithoutHoles(arr) || createLevelOptions_iterableToArray(arr) || createLevelOptions_unsupportedIterableToArray(arr) || createLevelOptions_nonIterableSpread(); }
function createLevelOptions_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function createLevelOptions_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return createLevelOptions_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return createLevelOptions_arrayLikeToArray(o, minLen); }
function createLevelOptions_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function createLevelOptions_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return createLevelOptions_arrayLikeToArray(arr); }
function createLevelOptions_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var createLevelOptions = function createLevelOptions(nonogramsList, levelSelectRef) {
  var levelSelect = levelSelectRef;
  var levels = createLevelOptions_toConsumableArray(new Set(nonogramsList.map(function (nonogram) {
    return nonogram.level;
  })));
  for (var i = 0; i < levels.length; i += 1) {
    var levelName = levels[i];
    var levelOption = document.createElement("option");
    levelOption.classList.add("select__option");
    levelOption.value = levelName;
    levelOption.innerText = levelName;
    levelOption.selected = i === 0;
    levelSelect.appendChild(levelOption);
  }
  levelSelect.selectedIndex = 0;
  return levels;
};
;// CONCATENATED MODULE: ./src/scripts/layout/select-game/createNonogramOptions.js
var createNonogramOptions = function createNonogramOptions(levels, nonogramsList) {
  var nonogramOptionNodesByLevel = [];
  var _loop = function _loop() {
    var levelName = levels[iLevel];
    var levelNonograms = nonogramsList.filter(function (nonogram) {
      return nonogram.level === levelName;
    });
    var levelNonogramsNodes = [];
    for (var jNongr = 0; jNongr < levelNonograms.length; jNongr += 1) {
      var nonogram = levelNonograms[jNongr];
      var nonogramId = nonogram.id;
      var nonogramName = nonogram.nameWithSize;
      var nonogramOption = document.createElement("option");
      nonogramOption.classList.add("select__option");
      nonogramOption.value = nonogramId;
      nonogramOption.innerText = nonogramName;
      nonogramOption.selected = jNongr === 0;
      levelNonogramsNodes.push(nonogramOption);
    }
    nonogramOptionNodesByLevel.push(levelNonogramsNodes);
  };
  for (var iLevel = 0; iLevel < levels.length; iLevel += 1) {
    _loop();
  }
  return nonogramOptionNodesByLevel;
};
;// CONCATENATED MODULE: ./src/scripts/layout/select-game/handleLevelChange.js
function handleLevelChange_toConsumableArray(arr) { return handleLevelChange_arrayWithoutHoles(arr) || handleLevelChange_iterableToArray(arr) || handleLevelChange_unsupportedIterableToArray(arr) || handleLevelChange_nonIterableSpread(); }
function handleLevelChange_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function handleLevelChange_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return handleLevelChange_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return handleLevelChange_arrayLikeToArray(o, minLen); }
function handleLevelChange_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function handleLevelChange_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return handleLevelChange_arrayLikeToArray(arr); }
function handleLevelChange_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var handleLevelChange = function handleLevelChange(levelSelectNode, nonogramSelectNodeRef, nonogramOptionNodesByLevel, gameApp) {
  var isTriggerChangeGameToPuzzle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var nonogramSelectNode = nonogramSelectNodeRef;
  var defaultLevelIdx = 0;
  var levelIdx = levelSelectNode.selectedIndex;
  levelIdx = levelIdx >= 0 ? levelIdx : defaultLevelIdx;
  var levelNonogramNodes = nonogramOptionNodesByLevel[levelIdx];
  nonogramSelectNode.replaceChildren.apply(nonogramSelectNode, handleLevelChange_toConsumableArray(levelNonogramNodes));
  nonogramSelectNode.selectedIndex = 0;
  var nonogramValueId = nonogramSelectNode.options[0].value;
  if (isTriggerChangeGameToPuzzle) {
    gameApp.changeGameToPuzzle(nonogramValueId);
  }
};
;// CONCATENATED MODULE: ./src/scripts/layout/select-game/handleNonogramChange.js
var handleNonogramChange = function handleNonogramChange(nonogramSelectNode, gameApp) {
  var defaultNonogramIdx = 0;
  var nonogramIdx = nonogramSelectNode.selectedIndex;
  nonogramIdx = nonogramIdx >= 0 ? nonogramIdx : defaultNonogramIdx;
  var nonogramValueId = nonogramSelectNode.options[nonogramIdx].value;
  gameApp.changeGameToPuzzle(nonogramValueId);
};
;// CONCATENATED MODULE: ./src/scripts/layout/createStatusSection.js

var createStatusSection = function createStatusSection() {
  var statusSection = document.createElement("section");
  statusSection.classList.add("status");
  getGameAppNode/* gameAppNode */.G.appendChild(statusSection);
  var stopWatchBlock = document.createElement("div");
  stopWatchBlock.classList.add("status__stop-watch", "stop-watch");
  statusSection.appendChild(stopWatchBlock);
  var stopWatchNode = document.createElement("div");
  stopWatchNode.classList.add("stop-watch__value");
  stopWatchBlock.appendChild(stopWatchNode);
  var nonogramNameBlock = document.createElement("div");
  nonogramNameBlock.classList.add("status__nonogram-name", "nonogram-name");
  statusSection.appendChild(nonogramNameBlock);
  var nonogramNameNode = document.createElement("div");
  nonogramNameNode.classList.add("nonogram-name__text");
  nonogramNameBlock.appendChild(nonogramNameNode);
  return {
    stopWatchNode: stopWatchNode,
    nonogramNameNode: nonogramNameNode
  };
};
;// CONCATENATED MODULE: ./src/scripts/game/loadGameFromLocalStorage.js
var loadGameFromLocalStorage = function loadGameFromLocalStorage() {
  var _localStorage$savedGa;
  var defaultSavedGame = JSON.stringify({
    nonogramId: -1
  });
  var savedGame = JSON.parse((_localStorage$savedGa = localStorage.savedGame) !== null && _localStorage$savedGa !== void 0 ? _localStorage$savedGa : defaultSavedGame);
  var nonogramId = savedGame.nonogramId,
    timeSec = savedGame.timeSec,
    boardStateStr = savedGame.boardStateStr;
  return {
    nonogramId: nonogramId,
    timeSec: timeSec,
    boardStateStr: boardStateStr
  };
};
;// CONCATENATED MODULE: ./src/scripts/layout/message/createMessageDialog.js

var createMessageDialog = function createMessageDialog() {
  var messageDialog = document.createElement("dialog");
  messageDialog.classList.add("message");
  getGameAppNode/* gameAppNode */.G.appendChild(messageDialog);
  var msgText = document.createElement("div");
  msgText.classList.add("message__text");
  messageDialog.appendChild(msgText);
  var msgCloseBtn = document.createElement("button");
  msgCloseBtn.classList.add("message__close", "btn");
  msgCloseBtn.type = "button";
  msgCloseBtn.innerText = "Close";
  messageDialog.appendChild(msgCloseBtn);
  msgCloseBtn.addEventListener("click", function () {
    messageDialog.close();
  });
  return {
    messageDialog: messageDialog,
    msgText: msgText
  };
};
;// CONCATENATED MODULE: ./src/scripts/layout/message/showMessageDialog.js
var showMessageDialog = function showMessageDialog(messageNodes, messageText) {
  var dialogNode = messageNodes.dialogNode,
    textNode = messageNodes.textNode;
  textNode.innerText = messageText;
  dialogNode.showModal();
};
;// CONCATENATED MODULE: ./src/scripts/GameApp.js
function GameApp_typeof(o) { "@babel/helpers - typeof"; return GameApp_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, GameApp_typeof(o); }
function GameApp_toConsumableArray(arr) { return GameApp_arrayWithoutHoles(arr) || GameApp_iterableToArray(arr) || GameApp_unsupportedIterableToArray(arr) || GameApp_nonIterableSpread(); }
function GameApp_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function GameApp_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GameApp_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GameApp_arrayLikeToArray(o, minLen); }
function GameApp_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function GameApp_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return GameApp_arrayLikeToArray(arr); }
function GameApp_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function GameApp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function GameApp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, GameApp_toPropertyKey(descriptor.key), descriptor); } }
function GameApp_createClass(Constructor, protoProps, staticProps) { if (protoProps) GameApp_defineProperties(Constructor.prototype, protoProps); if (staticProps) GameApp_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function GameApp_classPrivateMethodInitSpec(obj, privateSet) { GameApp_checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function GameApp_defineProperty(obj, key, value) { key = GameApp_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function GameApp_toPropertyKey(t) { var i = GameApp_toPrimitive(t, "string"); return "symbol" == GameApp_typeof(i) ? i : String(i); }
function GameApp_toPrimitive(t, r) { if ("object" != GameApp_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != GameApp_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function GameApp_classPrivateFieldInitSpec(obj, privateMap, value) { GameApp_checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function GameApp_checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function GameApp_classPrivateFieldGet(receiver, privateMap) { var descriptor = GameApp_classExtractFieldDescriptor(receiver, privateMap, "get"); return GameApp_classApplyDescriptorGet(receiver, descriptor); }
function GameApp_classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function GameApp_classPrivateFieldSet(receiver, privateMap, value) { var descriptor = GameApp_classExtractFieldDescriptor(receiver, privateMap, "set"); GameApp_classApplyDescriptorSet(receiver, descriptor, value); return value; }
function GameApp_classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function GameApp_classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function GameApp_classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }















var _nonograms = /*#__PURE__*/new WeakMap();
var _activeNonogramId = /*#__PURE__*/new WeakMap();
var GameApp_game = /*#__PURE__*/new WeakMap();
var _levelSelectNode = /*#__PURE__*/new WeakMap();
var _nonogramSelectNode = /*#__PURE__*/new WeakMap();
var _nonogramOptionNodesByLevel = /*#__PURE__*/new WeakMap();
var _nonogramNameNode = /*#__PURE__*/new WeakMap();
var _message = /*#__PURE__*/new WeakMap();
var _getNonogramById = /*#__PURE__*/new WeakSet();
var _getRandomNonogramId = /*#__PURE__*/new WeakSet();
var _createNonogramsArray = /*#__PURE__*/new WeakSet();
var _createSelectNodes = /*#__PURE__*/new WeakSet();
var _addSelectNodesEventListeners = /*#__PURE__*/new WeakSet();
var _changeNonogramSelectionById = /*#__PURE__*/new WeakSet();
var GameApp = /*#__PURE__*/function () {
  function GameApp(_nonogramsData) {
    GameApp_classCallCheck(this, GameApp);
    GameApp_classPrivateMethodInitSpec(this, _changeNonogramSelectionById);
    GameApp_classPrivateMethodInitSpec(this, _addSelectNodesEventListeners);
    GameApp_classPrivateMethodInitSpec(this, _createSelectNodes);
    GameApp_classPrivateMethodInitSpec(this, _createNonogramsArray);
    GameApp_classPrivateMethodInitSpec(this, _getRandomNonogramId);
    GameApp_classPrivateMethodInitSpec(this, _getNonogramById);
    GameApp_classPrivateFieldInitSpec(this, _nonograms, {
      writable: true,
      value: []
    });
    GameApp_classPrivateFieldInitSpec(this, _activeNonogramId, {
      writable: true,
      value: void 0
    });
    GameApp_classPrivateFieldInitSpec(this, GameApp_game, {
      writable: true,
      value: void 0
    });
    GameApp_classPrivateFieldInitSpec(this, _levelSelectNode, {
      writable: true,
      value: void 0
    });
    GameApp_classPrivateFieldInitSpec(this, _nonogramSelectNode, {
      writable: true,
      value: void 0
    });
    GameApp_classPrivateFieldInitSpec(this, _nonogramOptionNodesByLevel, {
      writable: true,
      value: void 0
    });
    GameApp_classPrivateFieldInitSpec(this, _nonogramNameNode, {
      writable: true,
      value: void 0
    });
    GameApp_classPrivateFieldInitSpec(this, _message, {
      writable: true,
      value: {}
    });
    GameApp_defineProperty(this, "isSoundMuted", void 0);
    GameApp_defineProperty(this, "themeName", void 0);
    GameApp_defineProperty(this, "latestWinsSection", void 0);
    GameApp_classPrivateMethodGet(this, _createNonogramsArray, _createNonogramsArray2).call(this, _nonogramsData);
    var _createStatusSection = createStatusSection(),
      stopWatchNode = _createStatusSection.stopWatchNode,
      nonogramNameNode = _createStatusSection.nonogramNameNode;
    GameApp_classPrivateFieldSet(this, _nonogramNameNode, nonogramNameNode);
    var _createLatestWinsNode = createLatestWinsNodes(),
      latestWinsSection = _createLatestWinsNode.latestWinsSection,
      latestWinsNodes = _createLatestWinsNode.latestWinsNodes;
    this.latestWinsSection = latestWinsSection;
    var _createMessageDialog = createMessageDialog(),
      messageDialog = _createMessageDialog.messageDialog,
      msgText = _createMessageDialog.msgText;
    GameApp_classPrivateFieldGet(this, _message).dialogNode = messageDialog;
    GameApp_classPrivateFieldGet(this, _message).textNode = msgText;
    GameApp_classPrivateFieldSet(this, GameApp_game, new Game(stopWatchNode, latestWinsNodes, this));
    GameApp_classPrivateMethodGet(this, _createSelectNodes, _createSelectNodes2).call(this);
    GameApp_classPrivateMethodGet(this, _addSelectNodesEventListeners, _addSelectNodesEventListeners2).call(this);
    this.isSoundMuted = (0,getSoundMuteValue/* getSoundMuteValue */.U)();
    this.themeName = (0,getThemeName/* getThemeName */.q)();
  }
  GameApp_createClass(GameApp, [{
    key: "getNonogramsList",
    value: function getNonogramsList() {
      var nonogramsList = GameApp_classPrivateFieldGet(this, _nonograms).map(function (_ref) {
        var id = _ref.id,
          level = _ref.level,
          nameWithSize = _ref.nameWithSize;
        return {
          id: id,
          level: level,
          nameWithSize: nameWithSize
        };
      });
      return nonogramsList;
    }
  }, {
    key: "changeGameToPuzzle",
    value: function changeGameToPuzzle(nonogramId) {
      var boardStateMatrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var timeSec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var nonogram = GameApp_classPrivateMethodGet(this, _getNonogramById, _getNonogramById2).call(this, nonogramId);
      GameApp_classPrivateFieldGet(this, GameApp_game).setNonogram(nonogram, boardStateMatrix, timeSec);
      GameApp_classPrivateFieldGet(this, _nonogramNameNode).innerText = nonogram.nameWithSize;
    }
  }, {
    key: "showSolution",
    value: function showSolution() {
      GameApp_classPrivateFieldGet(this, GameApp_game).showSolution();
    }
  }, {
    key: "showDialog",
    value: function showDialog(messageText) {
      showMessageDialog(GameApp_classPrivateFieldGet(this, _message), messageText);
    }
  }, {
    key: "setRandomPuzzle",
    value: function setRandomPuzzle() {
      var currNonogramId = GameApp_classPrivateFieldGet(this, _activeNonogramId);
      var newNonogramId = currNonogramId;
      while (newNonogramId === currNonogramId) {
        newNonogramId = GameApp_classPrivateMethodGet(this, _getRandomNonogramId, _getRandomNonogramId2).call(this);
      }
      GameApp_classPrivateMethodGet(this, _changeNonogramSelectionById, _changeNonogramSelectionById2).call(this, newNonogramId);
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      GameApp_classPrivateFieldGet(this, GameApp_game).resetGame();
    }
  }, {
    key: "saveGame",
    value: function saveGame() {
      GameApp_classPrivateFieldGet(this, GameApp_game).saveGame();
    }
  }, {
    key: "loadGame",
    value: function loadGame() {
      var _loadGameFromLocalSto = loadGameFromLocalStorage(),
        nonogramDataID = _loadGameFromLocalSto.nonogramId,
        timeSec = _loadGameFromLocalSto.timeSec,
        boardStateStr = _loadGameFromLocalSto.boardStateStr;
      if (nonogramDataID === -1) {
        var messageText = "Nothing to load: no saved game";
        this.showDialog(messageText);
      } else {
        var dataIdToId = new Map(GameApp_classPrivateFieldGet(this, _nonograms).map(function (nonogram, idx) {
          return [nonogram.id, idx];
        }));
        if (dataIdToId.has(nonogramDataID)) {
          var nonogramId = dataIdToId.get(nonogramDataID);
          var boardStateMatrix = decodePuzzle(boardStateStr);
          GameApp_classPrivateMethodGet(this, _changeNonogramSelectionById, _changeNonogramSelectionById2).call(this, nonogramId, false, false);
          this.changeGameToPuzzle(nonogramId, boardStateMatrix, timeSec);
        } else {
          var _messageText = "Sorry, the saved nonogram was not found";
          this.showDialog(_messageText);
        }
      }
    }
  }]);
  return GameApp;
}();
function _getNonogramById2(nonogramId) {
  return GameApp_classPrivateFieldGet(this, _nonograms)[nonogramId];
}
function _getRandomNonogramId2() {
  var randomId = Math.floor(Math.random() * GameApp_classPrivateFieldGet(this, _nonograms).length);
  return randomId;
}
function _createNonogramsArray2(nonogramsData) {
  GameApp_classPrivateFieldSet(this, _nonograms, nonogramsData.map(function (nonogram) {
    var capitalizedLevel = capitalizeWord(nonogram.level);
    var capitalizedName = capitalizeWord(nonogram.name);
    var sizeStr = "".concat(nonogram.size[0], "x").concat(nonogram.size[1]);
    var nameWithSize = "".concat(sizeStr, " ").concat(capitalizedName);
    return {
      id: nonogram.id,
      level: capitalizedLevel,
      nameWithSize: nameWithSize,
      puzzle: nonogram.puzzle
    };
  }));
}
function _createSelectNodes2() {
  var nonogramsList = this.getNonogramsList();
  var _createSelectGameSect = createSelectGameSection(),
    levelSelect = _createSelectGameSect.levelSelect,
    nonogramSelect = _createSelectGameSect.nonogramSelect;
  GameApp_classPrivateFieldSet(this, _levelSelectNode, levelSelect);
  GameApp_classPrivateFieldSet(this, _nonogramSelectNode, nonogramSelect);
  var levels = createLevelOptions(nonogramsList, GameApp_classPrivateFieldGet(this, _levelSelectNode));
  GameApp_classPrivateFieldSet(this, _nonogramOptionNodesByLevel, createNonogramOptions(levels, nonogramsList));
  // add nonogram options for the initial level
  handleLevelChange(GameApp_classPrivateFieldGet(this, _levelSelectNode), GameApp_classPrivateFieldGet(this, _nonogramSelectNode), GameApp_classPrivateFieldGet(this, _nonogramOptionNodesByLevel), this);
}
function _addSelectNodesEventListeners2() {
  var _this = this;
  GameApp_classPrivateFieldGet(this, _levelSelectNode).addEventListener("change", function () {
    handleLevelChange(GameApp_classPrivateFieldGet(_this, _levelSelectNode), GameApp_classPrivateFieldGet(_this, _nonogramSelectNode), GameApp_classPrivateFieldGet(_this, _nonogramOptionNodesByLevel), _this);
  });
  GameApp_classPrivateFieldGet(this, _nonogramSelectNode).addEventListener("change", function () {
    handleNonogramChange(GameApp_classPrivateFieldGet(_this, _nonogramSelectNode), _this);
  });
}
function _changeNonogramSelectionById2(nonogramId) {
  var isTriggerChangeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var isTriggerChangeGameToPuzzle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var nonogram = GameApp_classPrivateMethodGet(this, _getNonogramById, _getNonogramById2).call(this, nonogramId);
  var levelOptions = GameApp_toConsumableArray(GameApp_classPrivateFieldGet(this, _levelSelectNode).options);
  var isSoughtForLevel = function isSoughtForLevel(option) {
    return option.value === nonogram.level;
  };
  var levelSelectIdx = levelOptions.findIndex(isSoughtForLevel);
  GameApp_classPrivateFieldGet(this, _levelSelectNode).selectedIndex = levelSelectIdx;
  handleLevelChange(GameApp_classPrivateFieldGet(this, _levelSelectNode), GameApp_classPrivateFieldGet(this, _nonogramSelectNode), GameApp_classPrivateFieldGet(this, _nonogramOptionNodesByLevel), this, isTriggerChangeGameToPuzzle);
  var nonogramsOptions = GameApp_toConsumableArray(GameApp_classPrivateFieldGet(this, _nonogramSelectNode).options);
  var isSoughtForNonogram = function isSoughtForNonogram(option) {
    return option.value === nonogram.id.toString();
  };
  var nonogramSelectIdx = nonogramsOptions.findIndex(isSoughtForNonogram);
  GameApp_classPrivateFieldGet(this, _nonogramSelectNode).selectedIndex = nonogramSelectIdx;
  if (isTriggerChangeEvent) {
    GameApp_classPrivateFieldGet(this, _nonogramSelectNode).dispatchEvent(new Event("change"));
  }
  GameApp_classPrivateFieldSet(this, _activeNonogramId, nonogramId);
}


/***/ }),

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ createActionButtonsSection)
/* harmony export */ });
/* harmony import */ var _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);

var createActionButtonsSection = function createActionButtonsSection() {
  var actionsSection = document.createElement("section");
  actionsSection.classList.add("actions");
  _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__/* .gameAppNode */ .G.appendChild(actionsSection);
  var actionBtns = ["Reset game", "Save game", "Continue last game", "Solution"];
  var actionBtnsNodes = [];
  for (var i = 0; i < actionBtns.length; i += 1) {
    var actionBtn = document.createElement("button");
    actionBtn.classList.add("actions__btn", "btn");
    actionBtn.type = "button";
    actionBtn.innerText = actionBtns[i];
    actionsSection.appendChild(actionBtn);
    actionBtnsNodes.push(actionBtn);
  }
  var loadBtn = actionBtnsNodes[2],
    solutionBtn = actionBtnsNodes[3];
  loadBtn.classList.add("actions__btn_hidden-mobile");
  solutionBtn.classList.add("actions__btn_hidden-mobile");
  return actionBtnsNodes;
};

/***/ }),

/***/ 870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ createHeader)
});

;// CONCATENATED MODULE: ./src/assets/images/logo.svg
const logo_namespaceObject = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28 28\">\n  <path class=\"logo__bg\" d=\"M2.5 0h23A2.5 2.5 45 0 1 28 2.5v23a2.5 2.5 135 0 1-2.5 2.5h-23A2.5 2.5 45 0 1 0 25.5v-23A2.5 2.5 135 0 1 2.5 0Z\"/>\n  <path class=\"logo__line\" d=\"M15 5V2.4a.4.4 45 0 0-.4-.4H2.4a.4.4 135 0 0-.4.4v12.2a.4.4 45 0 0 .4.4h21.2a.4.4 45 0 1 .4.4v8.2a.4.4 135 0 1-.4.4h-8.2a.4.4 45 0 1-.4-.4v-6.2a.4.4 45 0 0-.4-.4h-1.2a.4.4 135 0 0-.4.4v8.2a.4.4 45 0 0 .4.4h12.2a.4.4 135 0 0 .4-.4V13.4a.4.4 45 0 0-.4-.4H4.4a.4.4 45 0 1-.4-.4V4.4a.4.4 135 0 1 .4-.4h8.2a.4.4 45 0 1 .4.4v6.2a.4.4 45 0 0 .4.4h1.2a.4.4 135 0 0 .4-.4V5\"/>\n  <path class=\"logo__square\" d=\"M2 20v-2.6a.4.4 135 0 1 .4-.4h8.2a.4.4 45 0 1 .4.4v8.2a.4.4 135 0 1-.4.4H2.4a.4.4 45 0 1-.4-.4V17m2 4v2.6a.4.4 45 0 0 .4.4h4.2a.4.4 135 0 0 .4-.4v-4.2a.4.4 45 0 0-.4-.4H4.4a.4.4 135 0 0-.4.4V21M20 2h5.6a.4.4 45 0 1 .4.4v8.2a.4.4 135 0 1-.4.4h-8.2a.4.4 45 0 1-.4-.4V2.4a.4.4 135 0 1 .4-.4H20m-1 4v2.6a.4.4 45 0 0 .4.4h4.2a.4.4 135 0 0 .4-.4V4.4a.4.4 45 0 0-.4-.4h-4.2a.4.4 135 0 0-.4.4V6\"/>\n</svg>\n";
// EXTERNAL MODULE: ./src/scripts/layout/getGameAppNode.js
var getGameAppNode = __webpack_require__(608);
;// CONCATENATED MODULE: ./src/scripts/layout/createHeader.js


var createHeader = function createHeader() {
  var header = document.createElement("header");
  header.classList.add("header");
  getGameAppNode/* gameAppNode */.G.appendChild(header);
  var divLogo = document.createElement("div");
  divLogo.classList.add("header__logo");
  header.appendChild(divLogo);
  divLogo.innerHTML = logo_namespaceObject;
  var logo = divLogo.firstChild;
  logo.classList.add("logo");
  var title = document.createElement("h1");
  title.classList.add("header__title");
  title.innerText = "Nonograms";
  header.appendChild(title);
};

/***/ }),

/***/ 900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ createRandomButton)
/* harmony export */ });
/* harmony import */ var _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);

var createRandomButton = function createRandomButton() {
  var randomSection = document.createElement("section");
  randomSection.classList.add("random");
  _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__/* .gameAppNode */ .G.appendChild(randomSection);
  var randomBtn = document.createElement("button");
  randomBtn.classList.add("random__btn", "btn");
  randomBtn.type = "button";
  randomBtn.innerText = "Random game";
  randomSection.appendChild(randomBtn);
  return randomBtn;
};

/***/ }),

/***/ 304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ createSettingsButtons)
/* harmony export */ });
/* harmony import */ var _assets_icons_volume_up_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(800);
/* harmony import */ var _assets_icons_volume_off_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(228);
/* harmony import */ var _assets_icons_light_mode_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328);
/* harmony import */ var _assets_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var _assets_icons_burger_to_open_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(268);
/* harmony import */ var _assets_icons_burger_to_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(340);
/* harmony import */ var _sound_getSoundMuteValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(400);
/* harmony import */ var _theme_getThemeName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(672);
/* harmony import */ var _getGameAppNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608);









var createSettingsButtons = function createSettingsButtons() {
  var settingsSection = document.createElement("section");
  settingsSection.classList.add("settings");
  _getGameAppNode__WEBPACK_IMPORTED_MODULE_6__/* .gameAppNode */ .G.appendChild(settingsSection);
  var soundBtn = document.createElement("button");
  soundBtn.classList.add("settings__sound", "btn", "btn_round");
  soundBtn.type = "button";
  var isSoundOff = (0,_sound_getSoundMuteValue__WEBPACK_IMPORTED_MODULE_7__/* .getSoundMuteValue */ .U)();
  soundBtn.innerHTML = isSoundOff ? _assets_icons_volume_off_svg__WEBPACK_IMPORTED_MODULE_1__ : _assets_icons_volume_up_svg__WEBPACK_IMPORTED_MODULE_0__;
  soundBtn.firstChild.classList.add("btn__icon");
  settingsSection.appendChild(soundBtn);
  var themeBtn = document.createElement("button");
  themeBtn.classList.add("settings__theme", "btn", "btn_round");
  themeBtn.type = "button";
  var themeName = (0,_theme_getThemeName__WEBPACK_IMPORTED_MODULE_8__/* .getThemeName */ .q)();
  themeBtn.innerHTML = themeName === "light" ? _assets_icons_light_mode_svg__WEBPACK_IMPORTED_MODULE_2__ : _assets_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_3__;
  themeBtn.firstChild.classList.add("btn__icon");
  settingsSection.appendChild(themeBtn);
  var burgerBtn = document.createElement("button");
  burgerBtn.classList.add("settings__burger", "btn", "btn_round");
  burgerBtn.type = "button";
  // TODO: get state of the burger menu
  var isBurgerClose = true;
  burgerBtn.innerHTML = isBurgerClose ? _assets_icons_burger_to_open_svg__WEBPACK_IMPORTED_MODULE_4__ : _assets_icons_burger_to_close_svg__WEBPACK_IMPORTED_MODULE_5__;
  burgerBtn.firstChild.classList.add("btn__icon");
  settingsSection.appendChild(burgerBtn);
  return {
    soundBtn: soundBtn,
    themeBtn: themeBtn,
    burgerBtn: burgerBtn
  };
};

/***/ }),

/***/ 608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ gameAppNode)
/* harmony export */ });
var createGameAppNode = function createGameAppNode() {
  var gameAppNode = document.createElement("div");
  gameAppNode.classList.add("game-app");
  document.body.appendChild(gameAppNode);
  return gameAppNode;
};
var gameAppNode = createGameAppNode();


/***/ }),

/***/ 836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ closeHamburgerMenu)
/* harmony export */ });
var closeHamburgerMenu = function closeHamburgerMenu(hambSection, drawerOverlayHamburg, burgerBtn, BurgerToOpenSvg) {
  var btnHamburg = burgerBtn;
  var htmlElement = document.documentElement;
  htmlElement.classList.remove("no-scroll");
  hambSection.classList.remove("hamburger_open_main");
  drawerOverlayHamburg.classList.remove("drawer-overlay_show");
  hambSection.classList.remove("hamburger_show");
  btnHamburg.innerHTML = BurgerToOpenSvg;
  btnHamburg.firstChild.classList.add("btn__icon");
};

/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createDrawerOverlayHamburg)
/* harmony export */ });
/* harmony import */ var _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);

var createDrawerOverlayHamburg = function createDrawerOverlayHamburg() {
  var drawerOverlayHamburg = document.createElement("div");
  drawerOverlayHamburg.classList.add("drawer-overlay", "drawer-overlay_hamburg");
  _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__/* .gameAppNode */ .G.appendChild(drawerOverlayHamburg);
  return drawerOverlayHamburg;
};

/***/ }),

/***/ 436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ createDrawerOverlayLatestWins)
/* harmony export */ });
/* harmony import */ var _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);

var createDrawerOverlayLatestWins = function createDrawerOverlayLatestWins() {
  var drawerOverlayLatestWins = document.createElement("div");
  drawerOverlayLatestWins.classList.add("drawer-overlay", "drawer-overlay_wins");
  _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__/* .gameAppNode */ .G.appendChild(drawerOverlayLatestWins);
  return drawerOverlayLatestWins;
};

/***/ }),

/***/ 136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ createHamburgerSection)
/* harmony export */ });
/* harmony import */ var _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);

var createHamburgerSection = function createHamburgerSection() {
  var hambSection = document.createElement("section");
  hambSection.classList.add("hamburger");
  _getGameAppNode__WEBPACK_IMPORTED_MODULE_0__/* .gameAppNode */ .G.appendChild(hambSection);
  var hambBtns = ["High Score Table", "Random game", "Continue last game", "Solution"];
  var hambBtnsNodes = [];
  for (var i = 0; i < hambBtns.length; i += 1) {
    var hambBtn = document.createElement("button");
    hambBtn.classList.add("hamburger__btn", "btn", "btn_text");
    hambBtn.type = "button";
    hambBtn.innerText = hambBtns[i];
    hambSection.appendChild(hambBtn);
    hambBtnsNodes.push(hambBtn);
  }
  return {
    hambSection: hambSection,
    hambBtnsNodes: hambBtnsNodes
  };
};

/***/ }),

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ handleHamburgBtnClick)
});

// EXTERNAL MODULE: ./src/scripts/layout/hamburger/hideHamburgerLatestWins.js
var hideHamburgerLatestWins = __webpack_require__(552);
// EXTERNAL MODULE: ./src/scripts/layout/hamburger/closeHamburgerMenu.js
var closeHamburgerMenu = __webpack_require__(836);
;// CONCATENATED MODULE: ./src/scripts/layout/hamburger/openHamburgerMenu.js
var openHamburgerMenu = function openHamburgerMenu(hambSection, drawerOverlayHamburg, burgerBtn, BurgerToCloseSvg) {
  var btnHamburg = burgerBtn;
  var htmlElement = document.documentElement;
  htmlElement.classList.add("no-scroll");
  hambSection.classList.add("hamburger_open_main");
  drawerOverlayHamburg.classList.add("drawer-overlay_show");
  hambSection.classList.add("hamburger_show");
  btnHamburg.innerHTML = BurgerToCloseSvg;
  btnHamburg.firstChild.classList.add("btn__icon");
};
;// CONCATENATED MODULE: ./src/scripts/layout/hamburger/handleHamburgBtnClick.js



var handleHamburgBtnClick = function handleHamburgBtnClick(hambSection, latestWinsSection, drawerOverlayHamburg, drawerOverlayLatestWins, burgerBtn, BurgerToOpenSvg, BurgerToCloseSvg) {
  if (hambSection.classList.contains("hamburger_open_wins")) {
    (0,hideHamburgerLatestWins/* hideHamburgerLatestWins */.f)(hambSection, latestWinsSection, drawerOverlayLatestWins);
  } else if (hambSection.classList.contains("hamburger_open_main")) {
    (0,closeHamburgerMenu/* closeHamburgerMenu */.A)(hambSection, drawerOverlayHamburg, burgerBtn, BurgerToOpenSvg);
  } else {
    openHamburgerMenu(hambSection, drawerOverlayHamburg, burgerBtn, BurgerToCloseSvg);
  }
};

/***/ }),

/***/ 552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ hideHamburgerLatestWins)
/* harmony export */ });
var hideHamburgerLatestWins = function hideHamburgerLatestWins(hambSection, latestWinsSection, drawerOverlayLatestWins) {
  hambSection.classList.remove("hamburger_open_wins");
  latestWinsSection.classList.remove("latest-wins_show-in-hamburger");
  drawerOverlayLatestWins.classList.remove("drawer-overlay_show");
};

/***/ }),

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ showHamburgerLatestWins)
/* harmony export */ });
var showHamburgerLatestWins = function showHamburgerLatestWins(hambSection, latestWinsSection, drawerOverlayLatestWins) {
  hambSection.classList.add("hamburger_open_wins");
  latestWinsSection.classList.add("latest-wins_show-in-hamburger");
  drawerOverlayLatestWins.classList.add("drawer-overlay_show");
};

/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ restoreSavedSettings)
});

// EXTERNAL MODULE: ./src/scripts/sound/changeSoundsMuteValue.js
var changeSoundsMuteValue = __webpack_require__(808);
// EXTERNAL MODULE: ./src/scripts/sound/getSoundMuteValue.js
var getSoundMuteValue = __webpack_require__(400);
;// CONCATENATED MODULE: ./src/scripts/settings/restoreSoundSettings.js


var restoreSoundSettings = function restoreSoundSettings() {
  var isSoundOff = (0,getSoundMuteValue/* getSoundMuteValue */.U)();
  localStorage.setItem("soundOff", JSON.stringify(isSoundOff));
  (0,changeSoundsMuteValue/* changeSoundsMuteValue */.S)(isSoundOff);
};
// EXTERNAL MODULE: ./src/scripts/theme/changeTheme.js
var changeTheme = __webpack_require__(68);
;// CONCATENATED MODULE: ./src/scripts/settings/restoreThemeSettings.js

var restoreThemeSettings = function restoreThemeSettings() {
  var _localStorage$getItem;
  var defaultThemeName = "light";
  var themeName = (_localStorage$getItem = localStorage.getItem("theme")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : defaultThemeName;
  localStorage.setItem("theme", themeName);
  (0,changeTheme/* changeTheme */.e)(themeName);
};
;// CONCATENATED MODULE: ./src/scripts/settings/restoreSavedSettings.js


var restoreSavedSettings = function restoreSavedSettings() {
  restoreSoundSettings();
  restoreThemeSettings();
};

/***/ }),

/***/ 808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ changeSoundsMuteValue)
/* harmony export */ });
/* harmony import */ var _soundEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);

var changeSoundsMuteValue = function changeSoundsMuteValue(isMuted) {
  var soundsArrs = Object.values(_soundEffects__WEBPACK_IMPORTED_MODULE_0__/* .soundEffects */ .o);
  soundsArrs.forEach(function (soundArr) {
    soundArr.forEach(function (soundIn) {
      var sound = soundIn;
      sound.muted = isMuted;
    });
  });
  localStorage.setItem("soundOff", JSON.stringify(isMuted));
  return isMuted;
};

/***/ }),

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ getSoundMuteValue)
/* harmony export */ });
var getSoundMuteValue = function getSoundMuteValue() {
  var _localStorage$soundOf;
  var defaultIsSoundOff = "false";
  var isSoundOff = JSON.parse((_localStorage$soundOf = localStorage.soundOff) !== null && _localStorage$soundOf !== void 0 ? _localStorage$soundOf : defaultIsSoundOff);
  return isSoundOff;
};

/***/ }),

/***/ 488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ soundEffects)
});

;// CONCATENATED MODULE: ./src/assets/sounds/cross/cross.mp3
const cross_namespaceObject = __webpack_require__.p + "images/cross.mp3";
;// CONCATENATED MODULE: ./src/assets/sounds/empty/empty.mp3
const empty_namespaceObject = __webpack_require__.p + "images/empty.mp3";
;// CONCATENATED MODULE: ./src/assets/sounds/filled/filled.mp3
const filled_namespaceObject = __webpack_require__.p + "images/filled.mp3";
;// CONCATENATED MODULE: ./src/assets/sounds/win/win.mp3
const win_namespaceObject = __webpack_require__.p + "images/win.mp3";
;// CONCATENATED MODULE: ./src/scripts/sound/soundEffects.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





// create several copies of Audio to play sound on several clicks with the same state
var createSeveralAudioElem = function createSeveralAudioElem(number, soundFile) {
  return _toConsumableArray(Array(number)).map(function () {
    return new Audio(soundFile);
  });
};
var soundEffects = {
  cross: createSeveralAudioElem(6, cross_namespaceObject),
  filled: createSeveralAudioElem(6, filled_namespaceObject),
  empty: createSeveralAudioElem(6, empty_namespaceObject),
  win: createSeveralAudioElem(3, win_namespaceObject)
};

/***/ }),

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ changeTheme)
/* harmony export */ });
/* harmony import */ var _themesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(628);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var changeTheme = function changeTheme(themeName) {
  var _body$classList;
  var _document = document,
    body = _document.body;
  var classNameForTheme = "theme-".concat(themeName);
  (_body$classList = body.classList).remove.apply(_body$classList, _toConsumableArray(_themesList__WEBPACK_IMPORTED_MODULE_0__/* .themeList */ .G));
  body.classList.add(classNameForTheme);
  localStorage.setItem("theme", themeName);
};

/***/ }),

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ getThemeName)
/* harmony export */ });
var getThemeName = function getThemeName() {
  var _localStorage$getItem;
  var defaultThemeName = "light";
  var themeName = (_localStorage$getItem = localStorage.getItem("theme")) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : defaultThemeName;
  return themeName;
};

/***/ }),

/***/ 628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ themeList),
/* harmony export */   y: () => (/* binding */ themes)
/* harmony export */ });
var themes = ["light", "dark"];
var themeList = themes.map(function (themeName) {
  return "theme-".concat(themeName);
});


/***/ }),

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ toggleTheme)
/* harmony export */ });
/* harmony import */ var _changeTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _themesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(628);


var toggleTheme = function toggleTheme(curThemeName) {
  var newThemeName = _themesList__WEBPACK_IMPORTED_MODULE_1__/* .themes */ .y.filter(function (theme) {
    return theme !== curThemeName;
  })[0];
  (0,_changeTheme__WEBPACK_IMPORTED_MODULE_0__/* .changeTheme */ .e)(newThemeName);
  return newThemeName;
};

/***/ }),

/***/ 340:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 -960 960 960\">\n  <path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"/>\n</svg>";

/***/ }),

/***/ 268:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\">\n  <path d=\"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z\"/>\n</svg>";

/***/ }),

/***/ 160:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 -960 960 960\">\n  <path d=\"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z\"/>\n</svg>";

/***/ }),

/***/ 328:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\">\n  <path d=\"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z\"/>\n</svg>";

/***/ }),

/***/ 228:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\">\n  <path d=\"M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z\"/>\n</svg>";

/***/ }),

/***/ 800:
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\">\n  <path d=\"M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z\"/>\n</svg>";

/***/ }),

/***/ 658:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"id":0,"level":"easy","size":[5,5],"name":"bat","puzzle":"5.5.efefef11efeffe3f"},{"id":1,"level":"easy","size":[5,5],"name":"dog","puzzle":"5.5.e3fefef3ef3eefefeefefe"},{"id":2,"level":"easy","size":[5,5],"name":"rune","puzzle":"5.5.effe4feef6efef4ee"},{"id":3,"level":"easy","size":[5,5],"name":"shuriken","puzzle":"5.5.feef6eefefeef6eef"},{"id":4,"level":"easy","size":[5,5],"name":"snowflake","puzzle":"5.5.fefefef3effeffef3efefef"},{"id":5,"level":"medium","size":[10,10],"name":"cherries","puzzle":"10.10.e4f3e5f4efe3fefeffefef3eefef3e5fe6f3ef3eef5ef3ef3efefefef5ef3eef3ef3e"},{"id":6,"level":"medium","size":[10,10],"name":"leaf","puzzle":"10.10.e4f6e3fefefefeeffefeffeefefeffefeefefef4eefeffe3feef8e3fe4fe3fef4e3ffe8"},{"id":7,"level":"medium","size":[10,10],"name":"mouse","puzzle":"10.10.eeffe3ffeefeefefeefefef5efeeffefeffe4f5e4f3ef3efef9ef9ef8ef8e"},{"id":8,"level":"medium","size":[10,10],"name":"notes","puzzle":"10.10.e6f4e3f3e3fe3fe3f3e3f4eefe3fe5fe3fe3f3ef3eef8eef8e3ffeeffe7"},{"id":9,"level":"medium","size":[10,10],"name":"snail","puzzle":"10.10.eef4e5ffef3e3f4ef3eefef3effeef5effeef4effe3f7efef6e3fef18e"},{"id":10,"level":"medium","size":[10,10],"name":"tree","puzzle":"10.10.eef6e3f4ef3ef5ef6ef3eef5ef5eef5e8f3e7ffe5feeffe3f11"},{"id":11,"level":"hard","size":[15,15],"name":"castle","puzzle":"15.15.e6fe14ffe13f3e6ffeffefe3ffef7efe3f6e3fefe3fe3ffefefefe3fefeffefef7efeffe13ffeefe7feeffef3eefeef3effeefeef3eefeeffeefeef3eefeeffe5f3e5f16"},{"id":12,"level":"hard","size":[15,15],"name":"clover","puzzle":"15.15.e5ffeffe9f7e8f7e8f7e5f3ef5ef3ef5ef3ef11efef6ef6ef6ef6efef11eefeef5ef3e3fe3f3e7ffe12ffe10f4e11ffe11"},{"id":13,"level":"hard","size":[15,15],"name":"deer","puzzle":"15.15.ffeffe6ffef3effefeefeffefef4efeefeffefeef5e3f5e4ffef5e9f7e7fefef5e5f11e3f12eef13ef8ef5efef3e4f5ef5e4f5eef3e4f6e9f6"},{"id":14,"level":"hard","size":[15,15],"name":"dolphin","puzzle":"15.15.e6ffe14ffe10f9e4f10efeef12ef23effef7e4ffe3ffeffe11fefe14ffe11ffefe5ffefefefe3ffeffefeffe4feeffeffef3ef3ef3ef3ef3"},{"id":15,"level":"hard","size":[15,15],"name":"duck","puzzle":"15.15.e9f3e11f5e9f4ef3e7f7e9f5e11f3e11f5eefe5f8ef3eef3e3f3ef7ef3effeef5ef4effeef8eeffe4f10e7ffef3e11f6e3"},{"id":16,"level":"hard","size":[15,15],"name":"house","puzzle":"15.15.e14fe11ffe6fe14ffe3ffe8fe4ffe7f9e5f5efefefe3f7efefefef15efe11feefef3e4ffefeefef3effeffefeefe5ffe4feefe5ffe4fef15"},{"id":17,"level":"hard","size":[15,15],"name":"pelican","puzzle":"15.15.e7f4e5f7efefe3ffe5f3efe3fe4f3e3fe3fef3eefeef3eef3eeffeffe8ffeefeef3e4ffeefeffeeffeefe3f3e3feffefeeffe4ffeefeefeef6e3fe3ffe7fefe5f8ef3e5fefe3f6ef6e4"},{"id":18,"level":"hard","size":[15,15],"name":"swan","puzzle":"15.15.f10e3f11e5f10eef13ef5effeef5ef5eefe4ffef6eeffe3ffef5efeeffeffeef5effeefeffeef4e3ffefeefef4effeefe3fefeffe3ffefeefeffe11fef3e11f17"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(984);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.7bec2d60f21bac09de18.js.map