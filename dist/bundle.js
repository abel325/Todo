/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

html, body {
    height: 100%;
    overflow: hidden;
}

/* PAGE CONTAINER */

#container {
    height: 100vh;
    background-color: rgb(40, 40, 40);
    display: grid;
    grid-template: repeat(7, 1fr) / repeat(5, 1fr);
}


/* Header (Title of Page) */

#header {
    background-color: rgb(41, 45, 47);
    grid-row: 1 / 2;
    grid-column: 1 / -1;

    font-weight: bold;
    font-size: 64px;
    padding-left: 20px;

    display: flex;
    justify-content: start;
    align-items: center;


}


/* NAVIGATION BAR */

#nav {
    background-color: rgb(38, 41, 42);
    grid-row: 2 / -1;
    grid-column: 1 / 2;

    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px;
}

#p-title {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
}


/* Console of Navigation */

#nav > #console {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 10px;
    position: relative;
}

#nav > #console * {
    box-sizing: border-box;
}

#nav > #console > #input-container {
    display: flex;
}

#input-container > #p-name-input {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 14px 0px 0px 14px;
    padding: 10px 10px;
    font-size: 14px;
    font-weight: 500;
    flex-grow: 1;
}

#p-name-input:focus {
    outline: none;
}

#input-container > #create-project-btn {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 0px 14px 14px 0px;
    padding: 10px 10px;
    font-size: 14px;
    font-weight: 500;
}

#input-container > #create-project-btn:hover {
    background-color: rgb(46, 50, 52);
    color: rgb(180, 249, 249);
    border-color: cyan;
    cursor: pointer;
}


/* Projects of Navigation */

#nav > #projects {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    gap: 10px;
    height: 100%;

    overflow-y: auto;
}

.project-btn-ctn {
    display: flex;
}

.project-btn-ctn > .project-btn {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 14px 0px 0px 14px;
    padding: 10px 10px;
    font-size: 14px;
    text-align: center;
    flex-grow: 1;
    overflow-wrap: break-word;
}

.project-btn-ctn > .project-btn:hover {
    background-color: rgb(46, 50, 52);
    border-color: cyan;
    cursor: pointer;
}

.project-btn-ctn > .delete-project-btn {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 0px 14px 14px 0px;
    padding: 10px 10px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
}

.project-btn-ctn > .delete-project-btn:hover {
    background-color: rgb(36, 40, 42);
    color: crimson;
    border-color: crimson;
    
    cursor: pointer;
}

/* PROJECT SCREEN */

#screen {
    background-color: rgb(34, 37, 38);
    grid-row: 2 / -1;
    grid-column: 2 / -1;
}

.tab {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    gap: 20px;
    align-items: center;
}

.add-todo-btn {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 5px;
    font-size: 15px;
    padding: 10px;
    width: 80%;
    text-align: start;
}

.add-todo-btn:hover {
    background-color: rgb(46, 50, 52);
    cursor: pointer;
    border-color: cyan;
}

.todo-form {
    min-width: 80%;
    /* display: flex; */
    flex-direction: column;
    border: 1px solid rgb(56, 60, 62);
}

.add-todo-top-box {
    display: flex;
    flex-direction: column;
}

.add-todo-bottom-row {
    display: flex; 
}

.title-input, .description-input {
    border: none;
    background-color: rgb(41, 45, 47);
    padding: 10px;
    margin: 5px;
}

.title-input, .description-input:focus {
    outline: none;
}

.description-input {
    resize: none;
}

.date-input {
    margin: 5px;
    padding: 5px;
    background-color: rgb(41, 45, 47);
    border: none;
}

.date-input:focus {
    outline: none;
}

.submit-btn {
    margin: 5px;
    padding: 5px;
    background-color: rgb(41, 45, 47);
    min-width: 100px;
    border: 1px rgb(46, 50, 52) solid;
    border-radius: 5px;
}

.submit-btn:hover {
    background-color: rgb(46, 50, 52);
    border-color: cyan;
    cursor: pointer;
}

.cancel-form {
    margin-left: auto;
    margin-right: 5px;
    font-size: 21px;
    background-color: rgb(34, 37, 38);
    border: none;
    padding: 5px;
    text-align: center;
}

.cancel-form:hover {
    color: crimson;
    cursor: pointer;
}


.inactive {
    display: none;
}

.active {
    display: flex;
}

.show {
    display: flex;
}

.hide {
    display: none;
}


/* Miscellaneous */

/* ::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
} */


/* width */
::-webkit-scrollbar {
    width: 8px; /* you can shrink taken width */
    display: none;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background:#555; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #444; 
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n}\n\nhtml, body {\n    height: 100%;\n    overflow: hidden;\n}\n\n/* PAGE CONTAINER */\n\n#container {\n    height: 100vh;\n    background-color: rgb(40, 40, 40);\n    display: grid;\n    grid-template: repeat(7, 1fr) / repeat(5, 1fr);\n}\n\n\n/* Header (Title of Page) */\n\n#header {\n    background-color: rgb(41, 45, 47);\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    font-weight: bold;\n    font-size: 64px;\n    padding-left: 20px;\n\n    display: flex;\n    justify-content: start;\n    align-items: center;\n\n\n}\n\n\n/* NAVIGATION BAR */\n\n#nav {\n    background-color: rgb(38, 41, 42);\n    grid-row: 2 / -1;\n    grid-column: 1 / 2;\n\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    padding: 20px;\n}\n\n#p-title {\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n}\n\n\n/* Console of Navigation */\n\n#nav > #console {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    position: relative;\n}\n\n#nav > #console * {\n    box-sizing: border-box;\n}\n\n#nav > #console > #input-container {\n    display: flex;\n}\n\n#input-container > #p-name-input {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 14px;\n    font-weight: 500;\n    flex-grow: 1;\n}\n\n#p-name-input:focus {\n    outline: none;\n}\n\n#input-container > #create-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 14px;\n    font-weight: 500;\n}\n\n#input-container > #create-project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    color: rgb(180, 249, 249);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n\n/* Projects of Navigation */\n\n#nav > #projects {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    height: 100%;\n\n    overflow-y: auto;\n}\n\n.project-btn-ctn {\n    display: flex;\n}\n\n.project-btn-ctn > .project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 14px;\n    text-align: center;\n    flex-grow: 1;\n    overflow-wrap: break-word;\n}\n\n.project-btn-ctn > .project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.project-btn-ctn > .delete-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 14px;\n    font-weight: 500;\n    text-align: center;\n}\n\n.project-btn-ctn > .delete-project-btn:hover {\n    background-color: rgb(36, 40, 42);\n    color: crimson;\n    border-color: crimson;\n    \n    cursor: pointer;\n}\n\n/* PROJECT SCREEN */\n\n#screen {\n    background-color: rgb(34, 37, 38);\n    grid-row: 2 / -1;\n    grid-column: 2 / -1;\n}\n\n.tab {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    height: 100%;\n    gap: 20px;\n    align-items: center;\n}\n\n.add-todo-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    width: 80%;\n    text-align: start;\n}\n\n.add-todo-btn:hover {\n    background-color: rgb(46, 50, 52);\n    cursor: pointer;\n    border-color: cyan;\n}\n\n.todo-form {\n    min-width: 80%;\n    /* display: flex; */\n    flex-direction: column;\n    border: 1px solid rgb(56, 60, 62);\n}\n\n.add-todo-top-box {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-todo-bottom-row {\n    display: flex; \n}\n\n.title-input, .description-input {\n    border: none;\n    background-color: rgb(41, 45, 47);\n    padding: 10px;\n    margin: 5px;\n}\n\n.title-input, .description-input:focus {\n    outline: none;\n}\n\n.description-input {\n    resize: none;\n}\n\n.date-input {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    border: none;\n}\n\n.date-input:focus {\n    outline: none;\n}\n\n.submit-btn {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    min-width: 100px;\n    border: 1px rgb(46, 50, 52) solid;\n    border-radius: 5px;\n}\n\n.submit-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.cancel-form {\n    margin-left: auto;\n    margin-right: 5px;\n    font-size: 21px;\n    background-color: rgb(34, 37, 38);\n    border: none;\n    padding: 5px;\n    text-align: center;\n}\n\n.cancel-form:hover {\n    color: crimson;\n    cursor: pointer;\n}\n\n\n.inactive {\n    display: none;\n}\n\n.active {\n    display: flex;\n}\n\n.show {\n    display: flex;\n}\n\n.hide {\n    display: none;\n}\n\n\n/* Miscellaneous */\n\n/* ::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n} */\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 8px; /* you can shrink taken width */\n    display: none;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent; \n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background:#555; \n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #444; \n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_group.js */ "./src/project_group.js");



(function() {
    const create_project_btn = document.querySelector('#create-project-btn');
    const project_name_input = document.querySelector('#p-name-input');

    project_name_input.addEventListener('keydown', function(ev) {
        if (ev.key === 'Enter') {
            create_project_btn.click();
        }
    });

    create_project_btn.addEventListener('click', function() {
        if (project_name_input.value !== "" && !_project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.exists(project_name_input.value)) {
            createProject(project_name_input.value);
            project_name_input.value = "";
        } else {
            alert("Invalid project name! Please try again.");
        }
    });
})();

function createProject(input) {
    _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.addProject(input);
    createProjectBtn(input);
    createProjectTab(input);
}

function deleteProject(name) {
    _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.removeProjectByName(name);
    deleteProjectBtn(name);
    deleteProjectTab(name);
}

function createProjectBtn(name) {
    const projects_nav = document.getElementById('projects');
    const btn_container = document.createElement('div');
    const project_btn = document.createElement('btn');
    const delete_btn = document.createElement('btn');

    btn_container.classList.add('project-btn-ctn');
    project_btn.classList.add('project-btn');
    delete_btn.classList.add('delete-project-btn');

    project_btn.innerText = name;
    delete_btn.innerText = '✘';

    btn_container.appendChild(project_btn);
    btn_container.appendChild(delete_btn);
    projects_nav.appendChild(btn_container);


    project_btn.addEventListener('click', () => openProject(name));

    delete_btn.addEventListener('click', () => { 
        const response = confirm('Are you sure you wanna do that?');
        if (response) { deleteProject(name); }
    });
}

function deleteProjectBtn(name) {
    const btns = document.getElementsByClassName('project-btn');
    for (let btn of btns) {
        if (btn.innerText === name) {
            btn.parentElement.remove();
            break;
        }
    }
}

function createProjectTab(name) {
    const screen = document.getElementById('screen');
    const tab = document.createElement('div');
    const title = document.createElement('h1');
    const add_todo_btn = document.createElement('button');
    const todo_form = document.createElement('form');
    const top_box = document.createElement('div');
    const bottom_row = document.createElement('div');
    const title_input = document.createElement('input');
    const description_input = document.createElement('textarea');
    const date_input = document.createElement('input');
    const submit_btn = document.createElement('button');
    const cancel_btn = document.createElement('button');

    setAttributes(tab, 
        {id: `${name}`, class: 'tab inactive'});
    setAttributes(add_todo_btn, 
        {class: 'add-todo-btn show'});
    setAttributes(todo_form, 
        {action: '', class: 'todo-form hide'});
    setAttributes(top_box, 
        {class: 'add-todo-top-box'});
    setAttributes(bottom_row, 
        {class: 'add-todo-bottom-row'});
    setAttributes(title_input, 
        {type: 'text', name: 'title', placeholder: 'Enter title here', class: 'title-input'});
        title_input.required = true;
    setAttributes(description_input, 
        {name: 'description', cols: '30', rows: '10', placeholder: 'Enter description here', class: 'description-input'});
    setAttributes(date_input, 
        {type: 'date', name: 'date', class: 'date-input'});
    setAttributes(submit_btn, 
        {type: 'submit', class: 'submit-btn'});
    setAttributes(cancel_btn, 
        {type: 'button', class: 'cancel-form'});


    tab.appendChild(title);
    tab.appendChild(add_todo_btn);
    tab.appendChild(todo_form);
    todo_form.appendChild(top_box);
    todo_form.appendChild(bottom_row);
    top_box.appendChild(title_input);
    top_box.appendChild(description_input);
    bottom_row.appendChild(date_input);
    bottom_row.appendChild(submit_btn);
    bottom_row.appendChild(cancel_btn);


    title.innerText = name;
    add_todo_btn.innerText = '➕ Add Todo';
    submit_btn.innerText = 'Submit';
    cancel_btn.innerText = '✘';


    add_todo_btn.addEventListener('click', () => {
        todo_form.classList.remove('hide');
        todo_form.classList.add('show');

        add_todo_btn.classList.remove('show');
        add_todo_btn.classList.add('hide');
    })

    todo_form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log(`Project name is: ${name}`);
        console.log(`the title is: ${title_input.value}`);
        console.log(`description is: ${description_input.value}`);
        console.log(date_input.value);

        todo_form.reset();

        todo_form.classList.remove('show');
        todo_form.classList.add('hide');

        add_todo_btn.classList.remove('hide');
        add_todo_btn.classList.add('show');


        createTodo(name, title_input.value, description_input.value, date_input.value);
    })

    cancel_btn.addEventListener('click', () => {
        todo_form.classList.remove('show');
        todo_form.classList.add('hide');
        
        add_todo_btn.classList.remove('hide');
        add_todo_btn.classList.add('show');

        todo_form.reset();
    })


    screen.appendChild(tab);
}

function deleteProjectTab(name) {
    const tab = document.getElementById(name);
    tab.remove();
}

function openProject(name) {
    const tab = document.getElementById(name);
    const a_tab = document.querySelector('.active');

    if (a_tab !== null) {
        a_tab.classList.remove('active');
        a_tab.classList.add('inactive');
    }
    
    tab.classList.remove('inactive');
    tab.classList.add('active');
}

function createTodoButton(title, description, date) {

}

function createTodo(project_name, title, description, date) {
    const Project = _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.returnProjectByName(project_name);
    Project.addTodo(title, description, date);
}


function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(attr => {
      element.setAttribute(attr, attributes[attr]);
    });
}  

/***/ }),

/***/ "./src/id_generator.js":
/*!*****************************!*\
  !*** ./src/id_generator.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
const uniqueId = function() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _id_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id_generator.js */ "./src/id_generator.js");



const Project = function(name) {

    let id = (0,_id_generator_js__WEBPACK_IMPORTED_MODULE_1__.uniqueId)();
    let todos = [];

    let getName = function() {
        return name;
    }

    let setName = function(new_name) {
        name = new_name;
    }

    let addTodo = function(title, description, due_date) {
        todos.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo)(title, description, due_date));
        console.log('todo added'); // log
    }

    let removeTodo = function(todo_id) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === todo_id) {
                todos.splice(i, 1);
                break;
            }
        }
    }
    
    return {
        id,
        todos,
        getName,
        setName,
        addTodo,
        removeTodo
    }
}




/***/ }),

/***/ "./src/project_group.js":
/*!******************************!*\
  !*** ./src/project_group.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projects: () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


const Projects = (function() {
    let projects = [];

    const addProject = function(name) {
        const new_project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(name);
        projects.push(new_project);
        console.log(`${new_project.getName()} has been created!`); // log 
    }

    const removeProject = function(project_id) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === project_id) {
                console.log(`${projects[i].getName()} has been REMOVED!`); // log
                projects.splice(i, 1);
                break;
            }
        }
    }

    const removeProjectByName = function(project_name) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].getName() === project_name) {
                console.log(`${projects[i].getName()} has been REMOVED!`); // log
                projects.splice(i, 1);
                break;
            }
        }
    }

    const printProjectsByName = function() {
        for (let project of projects) {
            console.log(project.getName()); // log
        }
    }

    const getLastElementId = function() {
        return projects[projects.length - 1].id;
    }

    const returnProjectByName = function(name) {
        for (let project of projects) {
            if (project.getName() === name) {
                return project;
                break;
            }
        }
    }

    const exists = function(name) {
        for (let project of projects) {
            if (name === project.getName()) {
                return true;
            }
        }

        return false;
    }


    return {
        addProject,
        removeProject,
        removeProjectByName,
        getLastElementId,
        printProjectsByName,
        returnProjectByName,
        exists,
    }
})();





/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _id_generator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id_generator.js */ "./src/id_generator.js");


const Todo = function(title, description = "", due_date = "") {
    
    let id = (0,_id_generator_js__WEBPACK_IMPORTED_MODULE_0__.uniqueId)();

    const getTitle = function() {
        return title;
    }

    const setTitle = function(new_title) {
        title = new_title;
    }

    let getDescription = function() {
        return description;
    }
    
    let setDescription = function(new_description) {
        description = new_description;
    }

    const getDate = function() {
        return date;
    }

    const setDate = function(date) {
        
    }

    return {
        id,
        getDescription,
        setDescription,
        getTitle,
        setTitle,
        getDate,
        setDate
    }
}




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/events.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxhQUFhLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxlQUFlLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxzQkFBc0IsV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1B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YWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2lkX2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdF9ncm91cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFBBR0UgQ09OVEFJTkVSICovXG5cbiNjb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDcsIDFmcikgLyByZXBlYXQoNSwgMWZyKTtcbn1cblxuXG4vKiBIZWFkZXIgKFRpdGxlIG9mIFBhZ2UpICovXG5cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG59XG5cblxuLyogTkFWSUdBVElPTiBCQVIgKi9cblxuI25hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0MSwgNDIpO1xuICAgIGdyaWQtcm93OiAyIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jcC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKiBDb25zb2xlIG9mIE5hdmlnYXRpb24gKi9cblxuI25hdiA+ICNjb25zb2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI25hdiA+ICNjb25zb2xlICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNuYXYgPiAjY29uc29sZSA+ICNpbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNpbnB1dC1jb250YWluZXIgPiAjcC1uYW1lLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbiNwLW5hbWUtaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2lucHV0LWNvbnRhaW5lciA+ICNjcmVhdGUtcHJvamVjdC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcbiAgICBjb2xvcjogcmdiKDE4MCwgMjQ5LCAyNDkpO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLyogUHJvamVjdHMgb2YgTmF2aWdhdGlvbiAqL1xuXG4jbmF2ID4gI3Byb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAucHJvamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAucHJvamVjdC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcbiAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1idG4tY3RuID4gLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTRweCAxNHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdC1idG4tY3RuID4gLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MCwgNDIpO1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIGJvcmRlci1jb2xvcjogY3JpbXNvbjtcbiAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFBST0pFQ1QgU0NSRUVOICovXG5cbiNzY3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcbiAgICBncmlkLXJvdzogMiAvIC0xO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XG59XG5cbi50YWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10b2RvLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItY29sb3I6IGN5YW47XG59XG5cbi50b2RvLWZvcm0ge1xuICAgIG1pbi13aWR0aDogODAlO1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTYsIDYwLCA2Mik7XG59XG5cbi5hZGQtdG9kby10b3AtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hZGQtdG9kby1ib3R0b20tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbn1cblxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kZXNjcmlwdGlvbi1pbnB1dCB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uZGF0ZS1pbnB1dCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5kYXRlLWlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhbmNlbC1mb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FuY2VsLWZvcm06aG92ZXIge1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uaW5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBNaXNjZWxsYW5lb3VzICovXG5cbi8qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufSAqL1xuXG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4OyAvKiB5b3UgY2FuIHNocmluayB0YWtlbiB3aWR0aCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcbiAgfVxuICAgXG4gIC8qIEhhbmRsZSAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiM1NTU7IFxuICB9XG4gIFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ0NDsgXG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEOzs7QUFHQSwyQkFBMkI7O0FBRTNCO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixtQkFBbUI7O0lBRW5CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7O0FBR3ZCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7OztBQUdBLDJCQUEyQjs7QUFFM0I7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTs7SUFFWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QscUJBQXFCOztJQUVyQixlQUFlO0FBQ25COztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBLGtCQUFrQjs7QUFFbEI7Ozs7OztHQU1HOzs7QUFHSCxVQUFVO0FBQ1Y7SUFDSSxVQUFVLEVBQUUsK0JBQStCO0lBQzNDLGFBQWE7RUFDZjs7RUFFQSxVQUFVO0VBQ1Y7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUEsV0FBVztFQUNYO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQSxvQkFBb0I7RUFDcEI7SUFDRSxnQkFBZ0I7RUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogUEFHRSBDT05UQUlORVIgKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNywgMWZyKSAvIHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgKFRpdGxlIG9mIFBhZ2UpICovXFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFxufVxcblxcblxcbi8qIE5BVklHQVRJT04gQkFSICovXFxuXFxuI25hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDEsIDQyKTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNwLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBDb25zb2xlIG9mIE5hdmlnYXRpb24gKi9cXG5cXG4jbmF2ID4gI2NvbnNvbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNuYXYgPiAjY29uc29sZSAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI25hdiA+ICNjb25zb2xlID4gI2lucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXIgPiAjcC1uYW1lLWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jcC1uYW1lLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lciA+ICNjcmVhdGUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyID4gI2NyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgY29sb3I6IHJnYigxODAsIDI0OSwgMjQ5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIFByb2plY3RzIG9mIE5hdmlnYXRpb24gKi9cXG5cXG4jbmF2ID4gI3Byb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLnByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBib3JkZXItY29sb3I6IGN5YW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4gPiAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MCwgNDIpO1xcbiAgICBjb2xvcjogY3JpbXNvbjtcXG4gICAgYm9yZGVyLWNvbG9yOiBjcmltc29uO1xcbiAgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQUk9KRUNUIFNDUkVFTiAqL1xcblxcbiNzY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxufVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1NiwgNjAsIDYyKTtcXG59XFxuXFxuLmFkZC10b2RvLXRvcC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRvZG8tYm90dG9tLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbn1cXG5cXG4udGl0bGUtaW5wdXQsIC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybTpob3ZlciB7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5pbmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLyogTWlzY2VsbGFuZW91cyAqL1xcblxcbi8qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxufSAqL1xcblxcblxcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA4cHg7IC8qIHlvdSBjYW4gc2hyaW5rIHRha2VuIHdpZHRoICovXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIFRyYWNrICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxcbiAgfVxcbiAgIFxcbiAgLyogSGFuZGxlICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDojNTU1OyBcXG4gIH1cXG4gIFxcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzQ0NDsgXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZCwgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0X2dyb3VwLmpzJ1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3JlYXRlX3Byb2plY3RfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0LWJ0bicpO1xuICAgIGNvbnN0IHByb2plY3RfbmFtZV9pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLW5hbWUtaW5wdXQnKTtcblxuICAgIHByb2plY3RfbmFtZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgaWYgKGV2LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgY3JlYXRlX3Byb2plY3RfYnRuLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNyZWF0ZV9wcm9qZWN0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocHJvamVjdF9uYW1lX2lucHV0LnZhbHVlICE9PSBcIlwiICYmICFQcm9qZWN0cy5leGlzdHMocHJvamVjdF9uYW1lX2lucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgcHJvamVjdF9uYW1lX2lucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBwcm9qZWN0IG5hbWUhIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGlucHV0KSB7XG4gICAgUHJvamVjdHMuYWRkUHJvamVjdChpbnB1dCk7XG4gICAgY3JlYXRlUHJvamVjdEJ0bihpbnB1dCk7XG4gICAgY3JlYXRlUHJvamVjdFRhYihpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZSkge1xuICAgIFByb2plY3RzLnJlbW92ZVByb2plY3RCeU5hbWUobmFtZSk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bihuYW1lKTtcbiAgICBkZWxldGVQcm9qZWN0VGFiKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnRuKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0c19uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgICBjb25zdCBidG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICBjb25zdCBkZWxldGVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5cbiAgICBidG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLWN0bicpO1xuICAgIHByb2plY3RfYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idG4nKTtcblxuICAgIHByb2plY3RfYnRuLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgZGVsZXRlX2J0bi5pbm5lclRleHQgPSAn4pyYJztcblxuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdF9idG4pO1xuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlX2J0bik7XG4gICAgcHJvamVjdHNfbmF2LmFwcGVuZENoaWxkKGJ0bl9jb250YWluZXIpO1xuXG5cbiAgICBwcm9qZWN0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Qcm9qZWN0KG5hbWUpKTtcblxuICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgZG8gdGhhdD8nKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7IGRlbGV0ZVByb2plY3QobmFtZSk7IH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ0bihuYW1lKSB7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtYnRuJyk7XG4gICAgZm9yIChsZXQgYnRuIG9mIGJ0bnMpIHtcbiAgICAgICAgaWYgKGJ0bi5pbm5lclRleHQgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYWIobmFtZSkge1xuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgYWRkX3RvZG9fYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdG9kb19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHRvcF9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3R0b21fcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkYXRlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzdWJtaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgc2V0QXR0cmlidXRlcyh0YWIsIFxuICAgICAgICB7aWQ6IGAke25hbWV9YCwgY2xhc3M6ICd0YWIgaW5hY3RpdmUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhhZGRfdG9kb19idG4sIFxuICAgICAgICB7Y2xhc3M6ICdhZGQtdG9kby1idG4gc2hvdyd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fZm9ybSwgXG4gICAgICAgIHthY3Rpb246ICcnLCBjbGFzczogJ3RvZG8tZm9ybSBoaWRlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9wX2JveCwgXG4gICAgICAgIHtjbGFzczogJ2FkZC10b2RvLXRvcC1ib3gnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhib3R0b21fcm93LCBcbiAgICAgICAge2NsYXNzOiAnYWRkLXRvZG8tYm90dG9tLXJvdyd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRpdGxlX2lucHV0LCBcbiAgICAgICAge3R5cGU6ICd0ZXh0JywgbmFtZTogJ3RpdGxlJywgcGxhY2Vob2xkZXI6ICdFbnRlciB0aXRsZSBoZXJlJywgY2xhc3M6ICd0aXRsZS1pbnB1dCd9KTtcbiAgICAgICAgdGl0bGVfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25faW5wdXQsIFxuICAgICAgICB7bmFtZTogJ2Rlc2NyaXB0aW9uJywgY29sczogJzMwJywgcm93czogJzEwJywgcGxhY2Vob2xkZXI6ICdFbnRlciBkZXNjcmlwdGlvbiBoZXJlJywgY2xhc3M6ICdkZXNjcmlwdGlvbi1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRhdGVfaW5wdXQsIFxuICAgICAgICB7dHlwZTogJ2RhdGUnLCBuYW1lOiAnZGF0ZScsIGNsYXNzOiAnZGF0ZS1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHN1Ym1pdF9idG4sIFxuICAgICAgICB7dHlwZTogJ3N1Ym1pdCcsIGNsYXNzOiAnc3VibWl0LWJ0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGNhbmNlbF9idG4sIFxuICAgICAgICB7dHlwZTogJ2J1dHRvbicsIGNsYXNzOiAnY2FuY2VsLWZvcm0nfSk7XG5cblxuICAgIHRhYi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFiLmFwcGVuZENoaWxkKGFkZF90b2RvX2J0bik7XG4gICAgdGFiLmFwcGVuZENoaWxkKHRvZG9fZm9ybSk7XG4gICAgdG9kb19mb3JtLmFwcGVuZENoaWxkKHRvcF9ib3gpO1xuICAgIHRvZG9fZm9ybS5hcHBlbmRDaGlsZChib3R0b21fcm93KTtcbiAgICB0b3BfYm94LmFwcGVuZENoaWxkKHRpdGxlX2lucHV0KTtcbiAgICB0b3BfYm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2lucHV0KTtcbiAgICBib3R0b21fcm93LmFwcGVuZENoaWxkKGRhdGVfaW5wdXQpO1xuICAgIGJvdHRvbV9yb3cuYXBwZW5kQ2hpbGQoc3VibWl0X2J0bik7XG4gICAgYm90dG9tX3Jvdy5hcHBlbmRDaGlsZChjYW5jZWxfYnRuKTtcblxuXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBhZGRfdG9kb19idG4uaW5uZXJUZXh0ID0gJ+KelSBBZGQgVG9kbyc7XG4gICAgc3VibWl0X2J0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBjYW5jZWxfYnRuLmlubmVyVGV4dCA9ICfinJgnO1xuXG5cbiAgICBhZGRfdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZG9fZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRvZG9fZm9ybS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgdG9kb19mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBuYW1lIGlzOiAke25hbWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGUgdGl0bGUgaXM6ICR7dGl0bGVfaW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBkZXNjcmlwdGlvbiBpczogJHtkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZV9pbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgdG9kb19mb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG5cbiAgICAgICAgY3JlYXRlVG9kbyhuYW1lLCB0aXRsZV9pbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsIGRhdGVfaW5wdXQudmFsdWUpO1xuICAgIH0pXG5cbiAgICBjYW5jZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgICB0b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG5cbiAgICBzY3JlZW4uYXBwZW5kQ2hpbGQodGFiKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhYihuYW1lKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgdGFiLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgY29uc3QgYV90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG5cbiAgICBpZiAoYV90YWIgIT09IG51bGwpIHtcbiAgICAgICAgYV90YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGFfdGFiLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgfVxuICAgIFxuICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0J1dHRvbih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHByb2plY3RfbmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcbiAgICBQcm9qZWN0LmFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbn1cblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XG4gICAgfSk7XG59ICAiLCJjb25zdCB1bmlxdWVJZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbn1cblxuZXhwb3J0IHtcbiAgICB1bmlxdWVJZFxufSIsImltcG9ydCB7VG9kb30gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gXCIuL2lkX2dlbmVyYXRvci5qc1wiO1xuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSkge1xuXG4gICAgbGV0IGlkID0gdW5pcXVlSWQoKTtcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIGxldCBnZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGxldCBzZXROYW1lID0gZnVuY3Rpb24obmV3X25hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5ld19uYW1lO1xuICAgIH1cblxuICAgIGxldCBhZGRUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSkge1xuICAgICAgICB0b2Rvcy5wdXNoKFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZygndG9kbyBhZGRlZCcpOyAvLyBsb2dcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlVG9kbyA9IGZ1bmN0aW9uKHRvZG9faWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvZG9zW2ldLmlkID09PSB0b2RvX2lkKSB7XG4gICAgICAgICAgICAgICAgdG9kb3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0b2RvcyxcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kb1xuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIFByb2plY3QsIFxufSIsImltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJ1xuXG5jb25zdCBQcm9qZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5ld19wcm9qZWN0ID0gUHJvamVjdChuYW1lKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdfcHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke25ld19wcm9qZWN0LmdldE5hbWUoKX0gaGFzIGJlZW4gY3JlYXRlZCFgKTsgLy8gbG9nIFxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0X2lkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5pZCA9PT0gcHJvamVjdF9pZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3Byb2plY3RzW2ldLmdldE5hbWUoKX0gaGFzIGJlZW4gUkVNT1ZFRCFgKTsgLy8gbG9nXG4gICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ5TmFtZSA9IGZ1bmN0aW9uKHByb2plY3RfbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0uZ2V0TmFtZSgpID09PSBwcm9qZWN0X25hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwcm9qZWN0c1tpXS5nZXROYW1lKCl9IGhhcyBiZWVuIFJFTU9WRUQhYCk7IC8vIGxvZ1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByaW50UHJvamVjdHNCeU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC5nZXROYW1lKCkpOyAvLyBsb2dcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldExhc3RFbGVtZW50SWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLmlkO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVyblByb2plY3RCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXhpc3RzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gcHJvamVjdC5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVByb2plY3RCeU5hbWUsXG4gICAgICAgIGdldExhc3RFbGVtZW50SWQsXG4gICAgICAgIHByaW50UHJvamVjdHNCeU5hbWUsXG4gICAgICAgIHJldHVyblByb2plY3RCeU5hbWUsXG4gICAgICAgIGV4aXN0cyxcbiAgICB9XG59KSgpO1xuXG5cbmV4cG9ydCB7XG4gICAgUHJvamVjdHNcbn1cbiIsImltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSBcIi4vaWRfZ2VuZXJhdG9yLmpzXCI7XG5cbmNvbnN0IFRvZG8gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBkdWVfZGF0ZSA9IFwiXCIpIHtcbiAgICBcbiAgICBsZXQgaWQgPSB1bmlxdWVJZCgpO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gZnVuY3Rpb24obmV3X3RpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gbmV3X3RpdGxlO1xuICAgIH1cblxuICAgIGxldCBnZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIFxuICAgIGxldCBzZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKG5ld19kZXNjcmlwdGlvbikge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld19kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgZ2V0RGF0ZSxcbiAgICAgICAgc2V0RGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBUb2RvXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9