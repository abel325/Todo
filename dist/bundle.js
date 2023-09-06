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

textarea:focus, input:focus {
    outline: none;
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
    width: 80%;
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




.todo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 5px;
    font-size: 15px;
    padding: 10px;
    width: 80%;
    text-align: start;
}

.top-todo-ctn {
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    font-size: 15px;
    gap: 10px;
}

.bottom-todo-ctn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
}

.todo-date {
    margin-right: 10px;
}

.todo-title {
    flex-grow: 4;
}

.todo-modify {
    background-color: transparent;
    border: none;
}

.todo-remove {
    background-color: transparent;
    border: none;
}


.mod-title-input {
    /* width: fit-content; */
    flex-grow: 4;
    background-color: transparent;
    border: 1px solid rgb(61, 65, 67);
    border-radius: 5px;
    padding: 5px;
    font-size: 100%;
}

.mod-description-input {
    border: 1px solid rgb(61, 65, 67);
    /* background-color: rgb(41, 45, 47); */
    background-color: transparent;
    resize: none;
    font-size: 15px;
    padding: 5px;

    width: 100%;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;  
    
}

.mod-date-input {
    background-color: rgb(34, 37, 38);
    padding: 5px;
    border: none;
    font-size: 15px;
    /* width: 12%; */
}

.mod-submit-btn {
    background-color: rgb(34, 37, 38);
    padding: 5px;
    /* width: 10%; */
    border: 1px rgb(46, 50, 52) solid;
    border-radius: 5px;
}

.mod-cancel-btn {
    background-color: transparent;
    border: none;
    font-size: 21px;
    border: none;
    padding: 5px;
    text-align: center;
    /* width: 3%; */
}

.mod-submit-btn:hover {
    cursor: pointer;
    border-color: cyan;
}

.mod-cancel-btn:hover {
    cursor: pointer;
    color: cyan;
}


.todo:hover {
    background-color: rgb(46, 50, 52);
    cursor: pointer;
    border-color: purple;
}

.todo-modify:hover {
    cursor: pointer;
}

.todo-remove:hover {
    cursor: pointer;
    color: crimson;
}




.inactive, .hide {
    display: none;
}

.active, .show {
    display: flex;
}


.expanded {

}

.shrinked {

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
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n}\n\ntextarea:focus, input:focus {\n    outline: none;\n}\n\nhtml, body {\n    height: 100%;\n    overflow: hidden;\n}\n\n/* PAGE CONTAINER */\n\n#container {\n    height: 100vh;\n    background-color: rgb(40, 40, 40);\n    display: grid;\n    grid-template: repeat(7, 1fr) / repeat(5, 1fr);\n}\n\n\n/* Header (Title of Page) */\n\n#header {\n    background-color: rgb(41, 45, 47);\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n\n    font-weight: bold;\n    font-size: 64px;\n    padding-left: 20px;\n\n    display: flex;\n    justify-content: start;\n    align-items: center;\n\n\n}\n\n\n/* NAVIGATION BAR */\n\n#nav {\n    background-color: rgb(38, 41, 42);\n    grid-row: 2 / -1;\n    grid-column: 1 / 2;\n\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    padding: 20px;\n}\n\n#p-title {\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n}\n\n\n/* Console of Navigation */\n\n#nav > #console {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    position: relative;\n}\n\n#nav > #console * {\n    box-sizing: border-box;\n}\n\n#nav > #console > #input-container {\n    display: flex;\n}\n\n#input-container > #p-name-input {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 14px;\n    font-weight: 500;\n    flex-grow: 1;\n}\n\n#p-name-input:focus {\n    outline: none;\n}\n\n#input-container > #create-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 14px;\n    font-weight: 500;\n}\n\n#input-container > #create-project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    color: rgb(180, 249, 249);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n\n/* Projects of Navigation */\n\n#nav > #projects {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    height: 100%;\n\n    overflow-y: auto;\n}\n\n.project-btn-ctn {\n    display: flex;\n}\n\n.project-btn-ctn > .project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 14px;\n    text-align: center;\n    flex-grow: 1;\n    overflow-wrap: break-word;\n}\n\n.project-btn-ctn > .project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.project-btn-ctn > .delete-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 14px;\n    font-weight: 500;\n    text-align: center;\n}\n\n.project-btn-ctn > .delete-project-btn:hover {\n    background-color: rgb(36, 40, 42);\n    color: crimson;\n    border-color: crimson;\n    \n    cursor: pointer;\n}\n\n/* PROJECT SCREEN */\n\n#screen {\n    background-color: rgb(34, 37, 38);\n    grid-row: 2 / -1;\n    grid-column: 2 / -1;\n}\n\n.tab {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    height: 100%;\n    gap: 20px;\n    align-items: center;\n}\n\n.add-todo-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    width: 80%;\n    text-align: start;\n}\n\n.add-todo-btn:hover {\n    background-color: rgb(46, 50, 52);\n    cursor: pointer;\n    border-color: cyan;\n}\n\n.todo-form {\n    width: 80%;\n    /* display: flex; */\n    flex-direction: column;\n    border: 1px solid rgb(56, 60, 62);\n}\n\n.add-todo-top-box {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-todo-bottom-row {\n    display: flex; \n}\n\n.title-input, .description-input {\n    border: none;\n    background-color: rgb(41, 45, 47);\n    padding: 10px;\n    margin: 5px;\n}\n\n.title-input, .description-input:focus {\n    outline: none;\n}\n\n.description-input {\n    resize: none;\n}\n\n.date-input {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    border: none;\n}\n\n.date-input:focus {\n    outline: none;\n}\n\n.submit-btn {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    min-width: 100px;\n    border: 1px rgb(46, 50, 52) solid;\n    border-radius: 5px;\n}\n\n.submit-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.cancel-form {\n    margin-left: auto;\n    margin-right: 5px;\n    font-size: 21px;\n    background-color: rgb(34, 37, 38);\n    border: none;\n    padding: 5px;\n    text-align: center;\n}\n\n.cancel-form:hover {\n    color: crimson;\n    cursor: pointer;\n}\n\n\n\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    width: 80%;\n    text-align: start;\n}\n\n.top-todo-ctn {\n    width: 100%;\n    display: flex;\n    flex-direction: column; \n    justify-content: center;\n    align-items: center;\n    font-size: 15px;\n    gap: 10px;\n}\n\n.bottom-todo-ctn {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 10px;\n}\n\n.todo-date {\n    margin-right: 10px;\n}\n\n.todo-title {\n    flex-grow: 4;\n}\n\n.todo-modify {\n    background-color: transparent;\n    border: none;\n}\n\n.todo-remove {\n    background-color: transparent;\n    border: none;\n}\n\n\n.mod-title-input {\n    /* width: fit-content; */\n    flex-grow: 4;\n    background-color: transparent;\n    border: 1px solid rgb(61, 65, 67);\n    border-radius: 5px;\n    padding: 5px;\n    font-size: 100%;\n}\n\n.mod-description-input {\n    border: 1px solid rgb(61, 65, 67);\n    /* background-color: rgb(41, 45, 47); */\n    background-color: transparent;\n    resize: none;\n    font-size: 15px;\n    padding: 5px;\n\n    width: 100%;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;  \n    \n}\n\n.mod-date-input {\n    background-color: rgb(34, 37, 38);\n    padding: 5px;\n    border: none;\n    font-size: 15px;\n    /* width: 12%; */\n}\n\n.mod-submit-btn {\n    background-color: rgb(34, 37, 38);\n    padding: 5px;\n    /* width: 10%; */\n    border: 1px rgb(46, 50, 52) solid;\n    border-radius: 5px;\n}\n\n.mod-cancel-btn {\n    background-color: transparent;\n    border: none;\n    font-size: 21px;\n    border: none;\n    padding: 5px;\n    text-align: center;\n    /* width: 3%; */\n}\n\n.mod-submit-btn:hover {\n    cursor: pointer;\n    border-color: cyan;\n}\n\n.mod-cancel-btn:hover {\n    cursor: pointer;\n    color: cyan;\n}\n\n\n.todo:hover {\n    background-color: rgb(46, 50, 52);\n    cursor: pointer;\n    border-color: purple;\n}\n\n.todo-modify:hover {\n    cursor: pointer;\n}\n\n.todo-remove:hover {\n    cursor: pointer;\n    color: crimson;\n}\n\n\n\n\n.inactive, .hide {\n    display: none;\n}\n\n.active, .show {\n    display: flex;\n}\n\n\n.expanded {\n\n}\n\n.shrinked {\n\n}\n\n\n\n\n\n/* Miscellaneous */\n\n/* ::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n} */\n\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 8px; /* you can shrink taken width */\n    display: none;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent; \n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background:#555; \n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #444; \n  }"],"sourceRoot":""}]);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   openProject: () => (/* binding */ openProject)
/* harmony export */ });
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
        console.log(`date is: ${date_input.value}`);

        // todo_form.reset();

        todo_form.classList.remove('show');
        todo_form.classList.add('hide');

        add_todo_btn.classList.remove('hide');
        add_todo_btn.classList.add('show');


        createTodo(name, title_input.value, description_input.value, date_input.value);

        todo_form.reset();
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

function createTodoButton(project_name) {
    const Project = _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.returnProjectByName(project_name);

    const Todo = Project.getLastTodo();

    const Tab = document.getElementById(`${Project.getName()}`);
    const todo_btn = document.createElement('div');
    const top_todo_ctn = document.createElement('div');
    const todo_title = document.createElement('div');
    const todo_date = document.createElement('div');
    const todo_modify_btn = document.createElement('button');
    const todo_remove_btn = document.createElement('button');
    const bottom_todo_ctn = document.createElement('div');
    const dsc_title = document.createElement('h5');
    const todo_description = document.createElement('div');
    
    setAttributes(todo_btn, {class: 'todo', id: Todo.getId()});
    setAttributes(top_todo_ctn, {class: 'top-todo-ctn'});
    setAttributes(todo_title, {class: 'todo-title'});
    setAttributes(todo_date, {class: 'todo-date'});
    setAttributes(todo_modify_btn, {class: 'todo-modify'});
    setAttributes(todo_remove_btn, {class: 'todo-remove'});
    setAttributes(bottom_todo_ctn, {class: 'bottom-todo-ctn'});
    setAttributes(dsc_title, {class: 'dsc-title'});
    setAttributes(todo_description, {class: 'todo-description'});

    todo_title.innerText = Todo.getTitle();
    todo_date.innerText = Todo.getDate();
    todo_modify_btn.innerText = '✒️';
    todo_remove_btn.innerText = '✘';
    dsc_title.innerText = 'Description:';
    todo_description.innerText = Todo.getDescription();

    top_todo_ctn.appendChild(todo_title);
    top_todo_ctn.appendChild(todo_date);
    top_todo_ctn.appendChild(todo_modify_btn);
    top_todo_ctn.appendChild(todo_remove_btn);
    bottom_todo_ctn.appendChild(dsc_title);
    bottom_todo_ctn.appendChild(todo_description);
    todo_btn.appendChild(top_todo_ctn);
    Tab.appendChild(todo_btn);

    // Modify form elements
    const title_input = document.createElement('input');
    const description_input = document.createElement('textarea');
    const date_input = document.createElement('input');
    const submit_btn = document.createElement('button');
    const cancel_btn = document.createElement('button');

    setAttributes(title_input, {class: 'mod-title-input'});
    setAttributes(description_input, {class: 'mod-description-input', cols: '30', rows: '10'});
    setAttributes(date_input, {class: 'mod-date-input', type: 'date'});
    setAttributes(submit_btn, {class: 'mod-submit-btn'});
    setAttributes(cancel_btn, {class: 'mod-cancel-btn'});

    submit_btn.innerText = 'Submit';
    cancel_btn.innerText = '✘';
    title_input.value = Todo.getTitle();
    description_input.value = Todo.getDescription();
    date_input.value = Todo.getDate();


    todo_btn.addEventListener('click', () => {

        console.log('Clicked Todo'); // log

        if (todo_btn.classList.contains('expanded')) {
            todo_btn.removeChild(bottom_todo_ctn);
            todo_btn.classList.remove('expanded');
        } else {
            todo_btn.appendChild(bottom_todo_ctn);
            todo_btn.classList.add('expanded');
        }
    })

    todo_modify_btn.addEventListener('click', function(e) {
        e.stopPropagation();

        todo_title.replaceWith(title_input);
        todo_description.replaceWith(description_input);
        todo_date.replaceWith(date_input);
        todo_modify_btn.replaceWith(submit_btn);
        todo_remove_btn.replaceWith(cancel_btn);
    })

    todo_remove_btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const response = confirm('Are you sure you wanna do that?');
        if (response === true) {
            Project.removeTodo(Todo.getId());
            Tab.removeChild(todo_btn);
        }
    })

    todo_date.addEventListener('click', (e) => e.stopPropagation());
    todo_description.addEventListener('click', (e) => e.stopPropagation());


    title_input.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    description_input.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    date_input.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    submit_btn.addEventListener('click', (e) => {
        e.stopPropagation();

        Todo.setTitle(title_input.value);
        Todo.setDescription(description_input.value);
        Todo.setDate(date_input.value);

        todo_title.innerText = title_input.value;
        todo_description.innerText = description_input.value;
        todo_date.innerText = date_input.value;

        title_input.replaceWith(todo_title);
        description_input.replaceWith(todo_description);
        date_input.replaceWith(todo_date);
        submit_btn.replaceWith(todo_modify_btn);
        cancel_btn.replaceWith(todo_remove_btn);
    })

    cancel_btn.addEventListener('click', (e) => {
        e.stopPropagation();

        title_input.replaceWith(todo_title);
        description_input.replaceWith(todo_description);
        date_input.replaceWith(todo_date);
        submit_btn.replaceWith(todo_modify_btn);
        cancel_btn.replaceWith(todo_remove_btn);
    })

    

}

function createTodoForm(todo_id) {

}


function createTodo(project_name, title, description, date) {
    const Project = _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.returnProjectByName(project_name);
    Project.addTodo(title, description, date);

    createTodoButton(project_name);
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

    let getLastTodo = function() {
        return todos[todos.length - 1];
    }

    let getTodoById = function(id) {
        for (let todo in todos) {
            if (id === todo.getId()) {
                return todo;
            }
        }
    }
    
    return {
        id,
        todos,
        getName,
        setName,
        addTodo,
        removeTodo,
        getLastTodo,
        getTodoById
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
        return due_date;
    }

    const setDate = function(date) {
        due_date = date;
    }

    const getId = function() {
        return id;
    }

    return {
        getId,
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



_events_js__WEBPACK_IMPORTED_MODULE_1__.createProject('Jack Sparrow');
_events_js__WEBPACK_IMPORTED_MODULE_1__.createTodo('Jack Sparrow', 'Test Todo and some more text to test some things', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, '2023-10-05');
_events_js__WEBPACK_IMPORTED_MODULE_1__.openProject('Jack Sparrow');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7OztBQUlGO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxhQUFhLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxlQUFlLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsd0JBQXdCLHlCQUF5QixjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxP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V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNpQjs7QUFFckMscURBQW9CO0FBQ3BCLGtEQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtCLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2lkX2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdF9ncm91cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogUEFHRSBDT05UQUlORVIgKi9cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNywgMWZyKSAvIHJlcGVhdCg1LCAxZnIpO1xufVxuXG5cbi8qIEhlYWRlciAoVGl0bGUgb2YgUGFnZSkgKi9cblxuI2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cbn1cblxuXG4vKiBOQVZJR0FUSU9OIEJBUiAqL1xuXG4jbmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQxLCA0Mik7XG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNwLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIENvbnNvbGUgb2YgTmF2aWdhdGlvbiAqL1xuXG4jbmF2ID4gI2NvbnNvbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBnYXA6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbmF2ID4gI2NvbnNvbGUgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI25hdiA+ICNjb25zb2xlID4gI2lucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuI2lucHV0LWNvbnRhaW5lciA+ICNwLW5hbWUtaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuI3AtbmFtZS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuI2lucHV0LWNvbnRhaW5lciA+ICNjcmVhdGUtcHJvamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jaW5wdXQtY29udGFpbmVyID4gI2NyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGNvbG9yOiByZ2IoMTgwLCAyNDksIDI0OSk7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiBQcm9qZWN0cyBvZiBOYXZpZ2F0aW9uICovXG5cbiNuYXYgPiAjcHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnByb2plY3QtYnRuLWN0biB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5wcm9qZWN0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5wcm9qZWN0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAuZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQwLCA0Mik7XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgYm9yZGVyLWNvbG9yOiBjcmltc29uO1xuICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogUFJPSkVDVCBTQ1JFRU4gKi9cblxuI3NjcmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xuICAgIGdyaWQtcm93OiAyIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcbn1cblxuLnRhYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRvZG8tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbn1cblxuLnRvZG8tZm9ybSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDU2LCA2MCwgNjIpO1xufVxuXG4uYWRkLXRvZG8tdG9wLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWRkLXRvZG8tYm90dG9tLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDsgXG59XG5cbi50aXRsZS1pbnB1dCwgLmRlc2NyaXB0aW9uLWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi50aXRsZS1pbnB1dCwgLmRlc2NyaXB0aW9uLWlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGVzY3JpcHRpb24taW5wdXQge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmRhdGUtaW5wdXQge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZGF0ZS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCByZ2IoNDYsIDUwLCA1Mikgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYW5jZWwtZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhbmNlbC1mb3JtOmhvdmVyIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG5cbi50b2RvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnRvcC10b2RvLWN0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5ib3R0b20tdG9kby1jdG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udG9kby1kYXRlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgICBmbGV4LWdyb3c6IDQ7XG59XG5cbi50b2RvLW1vZGlmeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udG9kby1yZW1vdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuXG4ubW9kLXRpdGxlLWlucHV0IHtcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXG4gICAgZmxleC1ncm93OiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjUsIDY3KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLm1vZC1kZXNjcmlwdGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcbiAgICBcbn1cblxuLm1vZC1kYXRlLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLyogd2lkdGg6IDEyJTsgKi9cbn1cblxuLm1vZC1zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8qIHdpZHRoOiAxMCU7ICovXG4gICAgYm9yZGVyOiAxcHggcmdiKDQ2LCA1MCwgNTIpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vZC1jYW5jZWwtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHdpZHRoOiAzJTsgKi9cbn1cblxuLm1vZC1zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xufVxuXG4ubW9kLWNhbmNlbC1idG46aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogY3lhbjtcbn1cblxuXG4udG9kbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbn1cblxuLnRvZG8tbW9kaWZ5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvLXJlbW92ZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuXG5cblxuXG4uaW5hY3RpdmUsIC5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWN0aXZlLCAuc2hvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuXG4uZXhwYW5kZWQge1xuXG59XG5cbi5zaHJpbmtlZCB7XG5cbn1cblxuXG5cblxuXG4vKiBNaXNjZWxsYW5lb3VzICovXG5cbi8qIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufSAqL1xuXG5cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7IC8qIHlvdSBjYW4gc2hyaW5rIHRha2VuIHdpZHRoICovXG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLyogVHJhY2sgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxuICB9XG4gICBcbiAgLyogSGFuZGxlICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IzU1NTsgXG4gIH1cbiAgXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0OyBcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEOzs7QUFHQSwyQkFBMkI7O0FBRTNCO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixtQkFBbUI7O0lBRW5CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7O0FBR3ZCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxr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b3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFBBR0UgQ09OVEFJTkVSICovXFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDcsIDFmcikgLyByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuXFxuLyogSGVhZGVyIChUaXRsZSBvZiBQYWdlKSAqL1xcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbn1cXG5cXG5cXG4vKiBOQVZJR0FUSU9OIEJBUiAqL1xcblxcbiNuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQxLCA0Mik7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jcC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogQ29uc29sZSBvZiBOYXZpZ2F0aW9uICovXFxuXFxuI25hdiA+ICNjb25zb2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbmF2ID4gI2NvbnNvbGUgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNuYXYgPiAjY29uc29sZSA+ICNpbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyID4gI3AtbmFtZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI3AtbmFtZS1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lciA+ICNjcmVhdGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XFxuICAgIGNvbG9yOiByZ2IoMTgwLCAyNDksIDI0OSk7XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBQcm9qZWN0cyBvZiBOYXZpZ2F0aW9uICovXFxuXFxuI25hdiA+ICNwcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4gPiAucHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4gPiAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuICAgIGJvcmRlci1jb2xvcjogY3JpbXNvbjtcXG4gICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogUFJPSkVDVCBTQ1JFRU4gKi9cXG5cXG4jc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1NiwgNjAsIDYyKTtcXG59XFxuXFxuLmFkZC10b2RvLXRvcC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRvZG8tYm90dG9tLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbn1cXG5cXG4udGl0bGUtaW5wdXQsIC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybTpob3ZlciB7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRvcC10b2RvLWN0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYm90dG9tLXRvZG8tY3RuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZsZXgtZ3JvdzogNDtcXG59XFxuXFxuLnRvZG8tbW9kaWZ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLm1vZC10aXRsZS1pbnB1dCB7XFxuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG4gICAgZmxleC1ncm93OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ubW9kLWRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXFxuICAgIFxcbn1cXG5cXG4ubW9kLWRhdGUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIC8qIHdpZHRoOiAxMiU7ICovXFxufVxcblxcbi5tb2Qtc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiB3aWR0aDogMTAlOyAqL1xcbiAgICBib3JkZXI6IDFweCByZ2IoNDYsIDUwLCA1Mikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vZC1jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMyU7ICovXFxufVxcblxcbi5tb2Qtc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4ubW9kLWNhbmNlbC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBjeWFuO1xcbn1cXG5cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLnRvZG8tbW9kaWZ5OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1yZW1vdmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG5cXG5cXG5cXG4uaW5hY3RpdmUsIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSwgLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4uZXhwYW5kZWQge1xcblxcbn1cXG5cXG4uc2hyaW5rZWQge1xcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNaXNjZWxsYW5lb3VzICovXFxuXFxuLyogOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59ICovXFxuXFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDhweDsgLyogeW91IGNhbiBzaHJpbmsgdGFrZW4gd2lkdGggKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogVHJhY2sgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXFxuICB9XFxuICAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiM1NTU7IFxcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0OyBcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3Byb2plY3RfZ3JvdXAuanMnXG5cbihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjcmVhdGVfcHJvamVjdF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtYnRuJyk7XG4gICAgY29uc3QgcHJvamVjdF9uYW1lX2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtbmFtZS1pbnB1dCcpO1xuXG4gICAgcHJvamVjdF9uYW1lX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldikge1xuICAgICAgICBpZiAoZXYua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBjcmVhdGVfcHJvamVjdF9idG4uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY3JlYXRlX3Byb2plY3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgIVByb2plY3RzLmV4aXN0cyhwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RfbmFtZV9pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIHByb2plY3QgbmFtZSEgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaW5wdXQpIHtcbiAgICBQcm9qZWN0cy5hZGRQcm9qZWN0KGlucHV0KTtcbiAgICBjcmVhdGVQcm9qZWN0QnRuKGlucHV0KTtcbiAgICBjcmVhdGVQcm9qZWN0VGFiKGlucHV0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChuYW1lKSB7XG4gICAgUHJvamVjdHMucmVtb3ZlUHJvamVjdEJ5TmFtZShuYW1lKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuKG5hbWUpO1xuICAgIGRlbGV0ZVByb2plY3RUYWIobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCdG4obmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RzX25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgIGNvbnN0IGJ0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcblxuICAgIGJ0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tY3RuJyk7XG4gICAgcHJvamVjdF9idG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpO1xuXG4gICAgcHJvamVjdF9idG4uaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBkZWxldGVfYnRuLmlubmVyVGV4dCA9ICfinJgnO1xuXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0X2J0bik7XG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVfYnRuKTtcbiAgICBwcm9qZWN0c19uYXYuYXBwZW5kQ2hpbGQoYnRuX2NvbnRhaW5lcik7XG5cblxuICAgIHByb2plY3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlblByb2plY3QobmFtZSkpO1xuXG4gICAgZGVsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW5uYSBkbyB0aGF0PycpO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHsgZGVsZXRlUHJvamVjdChuYW1lKTsgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0QnRuKG5hbWUpIHtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1idG4nKTtcbiAgICBmb3IgKGxldCBidG4gb2YgYnRucykge1xuICAgICAgICBpZiAoYnRuLmlubmVyVGV4dCA9PT0gbmFtZSkge1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRhYihuYW1lKSB7XG4gICAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpO1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBhZGRfdG9kb19idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0b2RvX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgdG9wX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdHRvbV9yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IGRhdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBzZXRBdHRyaWJ1dGVzKHRhYiwgXG4gICAgICAgIHtpZDogYCR7bmFtZX1gLCBjbGFzczogJ3RhYiBpbmFjdGl2ZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGFkZF90b2RvX2J0biwgXG4gICAgICAgIHtjbGFzczogJ2FkZC10b2RvLWJ0biBzaG93J30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9kb19mb3JtLCBcbiAgICAgICAge2FjdGlvbjogJycsIGNsYXNzOiAndG9kby1mb3JtIGhpZGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b3BfYm94LCBcbiAgICAgICAge2NsYXNzOiAnYWRkLXRvZG8tdG9wLWJveCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGJvdHRvbV9yb3csIFxuICAgICAgICB7Y2xhc3M6ICdhZGQtdG9kby1ib3R0b20tcm93J30pO1xuICAgIHNldEF0dHJpYnV0ZXModGl0bGVfaW5wdXQsIFxuICAgICAgICB7dHlwZTogJ3RleHQnLCBuYW1lOiAndGl0bGUnLCBwbGFjZWhvbGRlcjogJ0VudGVyIHRpdGxlIGhlcmUnLCBjbGFzczogJ3RpdGxlLWlucHV0J30pO1xuICAgICAgICB0aXRsZV9pbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbl9pbnB1dCwgXG4gICAgICAgIHtuYW1lOiAnZGVzY3JpcHRpb24nLCBjb2xzOiAnMzAnLCByb3dzOiAnMTAnLCBwbGFjZWhvbGRlcjogJ0VudGVyIGRlc2NyaXB0aW9uIGhlcmUnLCBjbGFzczogJ2Rlc2NyaXB0aW9uLWlucHV0J30pO1xuICAgIHNldEF0dHJpYnV0ZXMoZGF0ZV9pbnB1dCwgXG4gICAgICAgIHt0eXBlOiAnZGF0ZScsIG5hbWU6ICdkYXRlJywgY2xhc3M6ICdkYXRlLWlucHV0J30pO1xuICAgIHNldEF0dHJpYnV0ZXMoc3VibWl0X2J0biwgXG4gICAgICAgIHt0eXBlOiAnc3VibWl0JywgY2xhc3M6ICdzdWJtaXQtYnRuJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoY2FuY2VsX2J0biwgXG4gICAgICAgIHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdjYW5jZWwtZm9ybSd9KTtcblxuXG4gICAgdGFiLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0YWIuYXBwZW5kQ2hpbGQoYWRkX3RvZG9fYnRuKTtcbiAgICB0YWIuYXBwZW5kQ2hpbGQodG9kb19mb3JtKTtcbiAgICB0b2RvX2Zvcm0uYXBwZW5kQ2hpbGQodG9wX2JveCk7XG4gICAgdG9kb19mb3JtLmFwcGVuZENoaWxkKGJvdHRvbV9yb3cpO1xuICAgIHRvcF9ib3guYXBwZW5kQ2hpbGQodGl0bGVfaW5wdXQpO1xuICAgIHRvcF9ib3guYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25faW5wdXQpO1xuICAgIGJvdHRvbV9yb3cuYXBwZW5kQ2hpbGQoZGF0ZV9pbnB1dCk7XG4gICAgYm90dG9tX3Jvdy5hcHBlbmRDaGlsZChzdWJtaXRfYnRuKTtcbiAgICBib3R0b21fcm93LmFwcGVuZENoaWxkKGNhbmNlbF9idG4pO1xuXG5cbiAgICB0aXRsZS5pbm5lclRleHQgPSBuYW1lO1xuICAgIGFkZF90b2RvX2J0bi5pbm5lclRleHQgPSAn4p6VIEFkZCBUb2RvJztcbiAgICBzdWJtaXRfYnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgIGNhbmNlbF9idG4uaW5uZXJUZXh0ID0gJ+KcmCc7XG5cblxuICAgIGFkZF90b2RvX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pXG5cbiAgICB0b2RvX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IG5hbWUgaXM6ICR7bmFtZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYHRoZSB0aXRsZSBpczogJHt0aXRsZV9pbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYGRlc2NyaXB0aW9uIGlzOiAke2Rlc2NyaXB0aW9uX2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgZGF0ZSBpczogJHtkYXRlX2lucHV0LnZhbHVlfWApO1xuXG4gICAgICAgIC8vIHRvZG9fZm9ybS5yZXNldCgpO1xuXG4gICAgICAgIHRvZG9fZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIHRvZG9fZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuXG4gICAgICAgIGNyZWF0ZVRvZG8obmFtZSwgdGl0bGVfaW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlLCBkYXRlX2lucHV0LnZhbHVlKTtcblxuICAgICAgICB0b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG4gICAgY2FuY2VsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgXG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgICAgdG9kb19mb3JtLnJlc2V0KCk7XG4gICAgfSlcblxuXG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKHRhYik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RUYWIobmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIHRhYi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIGNvbnN0IGFfdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xuXG4gICAgaWYgKGFfdGFiICE9PSBudWxsKSB7XG4gICAgICAgIGFfdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBhX3RhYi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgIH1cbiAgICBcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9CdXR0b24ocHJvamVjdF9uYW1lKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcblxuICAgIGNvbnN0IFRvZG8gPSBQcm9qZWN0LmdldExhc3RUb2RvKCk7XG5cbiAgICBjb25zdCBUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtQcm9qZWN0LmdldE5hbWUoKX1gKTtcbiAgICBjb25zdCB0b2RvX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcF90b2RvX2N0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvX21vZGlmeV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0b2RvX3JlbW92ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBib3R0b21fdG9kb19jdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkc2NfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGNvbnN0IHRvZG9fZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fYnRuLCB7Y2xhc3M6ICd0b2RvJywgaWQ6IFRvZG8uZ2V0SWQoKX0pO1xuICAgIHNldEF0dHJpYnV0ZXModG9wX3RvZG9fY3RuLCB7Y2xhc3M6ICd0b3AtdG9kby1jdG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX3RpdGxlLCB7Y2xhc3M6ICd0b2RvLXRpdGxlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9kb19kYXRlLCB7Y2xhc3M6ICd0b2RvLWRhdGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX21vZGlmeV9idG4sIHtjbGFzczogJ3RvZG8tbW9kaWZ5J30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9kb19yZW1vdmVfYnRuLCB7Y2xhc3M6ICd0b2RvLXJlbW92ZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGJvdHRvbV90b2RvX2N0biwge2NsYXNzOiAnYm90dG9tLXRvZG8tY3RuJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoZHNjX3RpdGxlLCB7Y2xhc3M6ICdkc2MtdGl0bGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX2Rlc2NyaXB0aW9uLCB7Y2xhc3M6ICd0b2RvLWRlc2NyaXB0aW9uJ30pO1xuXG4gICAgdG9kb190aXRsZS5pbm5lclRleHQgPSBUb2RvLmdldFRpdGxlKCk7XG4gICAgdG9kb19kYXRlLmlubmVyVGV4dCA9IFRvZG8uZ2V0RGF0ZSgpO1xuICAgIHRvZG9fbW9kaWZ5X2J0bi5pbm5lclRleHQgPSAn4pyS77iPJztcbiAgICB0b2RvX3JlbW92ZV9idG4uaW5uZXJUZXh0ID0gJ+KcmCc7XG4gICAgZHNjX3RpdGxlLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIHRvZG9fZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gVG9kby5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgdG9wX3RvZG9fY3RuLmFwcGVuZENoaWxkKHRvZG9fdGl0bGUpO1xuICAgIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX2RhdGUpO1xuICAgIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX21vZGlmeV9idG4pO1xuICAgIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX3JlbW92ZV9idG4pO1xuICAgIGJvdHRvbV90b2RvX2N0bi5hcHBlbmRDaGlsZChkc2NfdGl0bGUpO1xuICAgIGJvdHRvbV90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX2Rlc2NyaXB0aW9uKTtcbiAgICB0b2RvX2J0bi5hcHBlbmRDaGlsZCh0b3BfdG9kb19jdG4pO1xuICAgIFRhYi5hcHBlbmRDaGlsZCh0b2RvX2J0bik7XG5cbiAgICAvLyBNb2RpZnkgZm9ybSBlbGVtZW50c1xuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHNldEF0dHJpYnV0ZXModGl0bGVfaW5wdXQsIHtjbGFzczogJ21vZC10aXRsZS1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uX2lucHV0LCB7Y2xhc3M6ICdtb2QtZGVzY3JpcHRpb24taW5wdXQnLCBjb2xzOiAnMzAnLCByb3dzOiAnMTAnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkYXRlX2lucHV0LCB7Y2xhc3M6ICdtb2QtZGF0ZS1pbnB1dCcsIHR5cGU6ICdkYXRlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoc3VibWl0X2J0biwge2NsYXNzOiAnbW9kLXN1Ym1pdC1idG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxfYnRuLCB7Y2xhc3M6ICdtb2QtY2FuY2VsLWJ0bid9KTtcblxuICAgIHN1Ym1pdF9idG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsX2J0bi5pbm5lclRleHQgPSAn4pyYJztcbiAgICB0aXRsZV9pbnB1dC52YWx1ZSA9IFRvZG8uZ2V0VGl0bGUoKTtcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZSA9IFRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBkYXRlX2lucHV0LnZhbHVlID0gVG9kby5nZXREYXRlKCk7XG5cblxuICAgIHRvZG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIFRvZG8nKTsgLy8gbG9nXG5cbiAgICAgICAgaWYgKHRvZG9fYnRuLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgdG9kb19idG4ucmVtb3ZlQ2hpbGQoYm90dG9tX3RvZG9fY3RuKTtcbiAgICAgICAgICAgIHRvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvX2J0bi5hcHBlbmRDaGlsZChib3R0b21fdG9kb19jdG4pO1xuICAgICAgICAgICAgdG9kb19idG4uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0b2RvX21vZGlmeV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdG9kb190aXRsZS5yZXBsYWNlV2l0aCh0aXRsZV9pbnB1dCk7XG4gICAgICAgIHRvZG9fZGVzY3JpcHRpb24ucmVwbGFjZVdpdGgoZGVzY3JpcHRpb25faW5wdXQpO1xuICAgICAgICB0b2RvX2RhdGUucmVwbGFjZVdpdGgoZGF0ZV9pbnB1dCk7XG4gICAgICAgIHRvZG9fbW9kaWZ5X2J0bi5yZXBsYWNlV2l0aChzdWJtaXRfYnRuKTtcbiAgICAgICAgdG9kb19yZW1vdmVfYnRuLnJlcGxhY2VXaXRoKGNhbmNlbF9idG4pO1xuICAgIH0pXG5cbiAgICB0b2RvX3JlbW92ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW5uYSBkbyB0aGF0PycpO1xuICAgICAgICBpZiAocmVzcG9uc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIFByb2plY3QucmVtb3ZlVG9kbyhUb2RvLmdldElkKCkpO1xuICAgICAgICAgICAgVGFiLnJlbW92ZUNoaWxkKHRvZG9fYnRuKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0b2RvX2RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG4gICAgdG9kb19kZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcblxuXG4gICAgdGl0bGVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cbiAgICBkZXNjcmlwdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcblxuICAgIGRhdGVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cbiAgICBzdWJtaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBUb2RvLnNldFRpdGxlKHRpdGxlX2lucHV0LnZhbHVlKTtcbiAgICAgICAgVG9kby5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZSk7XG4gICAgICAgIFRvZG8uc2V0RGF0ZShkYXRlX2lucHV0LnZhbHVlKTtcblxuICAgICAgICB0b2RvX3RpdGxlLmlubmVyVGV4dCA9IHRpdGxlX2lucHV0LnZhbHVlO1xuICAgICAgICB0b2RvX2Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlO1xuICAgICAgICB0b2RvX2RhdGUuaW5uZXJUZXh0ID0gZGF0ZV9pbnB1dC52YWx1ZTtcblxuICAgICAgICB0aXRsZV9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX3RpdGxlKTtcbiAgICAgICAgZGVzY3JpcHRpb25faW5wdXQucmVwbGFjZVdpdGgodG9kb19kZXNjcmlwdGlvbik7XG4gICAgICAgIGRhdGVfaW5wdXQucmVwbGFjZVdpdGgodG9kb19kYXRlKTtcbiAgICAgICAgc3VibWl0X2J0bi5yZXBsYWNlV2l0aCh0b2RvX21vZGlmeV9idG4pO1xuICAgICAgICBjYW5jZWxfYnRuLnJlcGxhY2VXaXRoKHRvZG9fcmVtb3ZlX2J0bik7XG4gICAgfSlcblxuICAgIGNhbmNlbF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRpdGxlX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fdGl0bGUpO1xuICAgICAgICBkZXNjcmlwdGlvbl9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgZGF0ZV9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2RhdGUpO1xuICAgICAgICBzdWJtaXRfYnRuLnJlcGxhY2VXaXRoKHRvZG9fbW9kaWZ5X2J0bik7XG4gICAgICAgIGNhbmNlbF9idG4ucmVwbGFjZVdpdGgodG9kb19yZW1vdmVfYnRuKTtcbiAgICB9KVxuXG4gICAgXG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0odG9kb19pZCkge1xuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhwcm9qZWN0X25hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICAgIGNvbnN0IFByb2plY3QgPSBQcm9qZWN0cy5yZXR1cm5Qcm9qZWN0QnlOYW1lKHByb2plY3RfbmFtZSk7XG4gICAgUHJvamVjdC5hZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG5cbiAgICBjcmVhdGVUb2RvQnV0dG9uKHByb2plY3RfbmFtZSk7XG59XG5cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH0pO1xufSAgXG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGNyZWF0ZVRvZG8sXG4gICAgb3BlblByb2plY3Rcbn0iLCJjb25zdCB1bmlxdWVJZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbn1cblxuZXhwb3J0IHtcbiAgICB1bmlxdWVJZFxufSIsImltcG9ydCB7VG9kb30gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gXCIuL2lkX2dlbmVyYXRvci5qc1wiO1xuXG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSkge1xuXG4gICAgbGV0IGlkID0gdW5pcXVlSWQoKTtcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIGxldCBnZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGxldCBzZXROYW1lID0gZnVuY3Rpb24obmV3X25hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5ld19uYW1lO1xuICAgIH1cblxuICAgIGxldCBhZGRUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSkge1xuICAgICAgICB0b2Rvcy5wdXNoKFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZygndG9kbyBhZGRlZCcpOyAvLyBsb2dcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlVG9kbyA9IGZ1bmN0aW9uKHRvZG9faWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvZG9zW2ldLmlkID09PSB0b2RvX2lkKSB7XG4gICAgICAgICAgICAgICAgdG9kb3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGdldExhc3RUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0VG9kb0J5SWQgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICBmb3IgKGxldCB0b2RvIGluIHRvZG9zKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT09IHRvZG8uZ2V0SWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICB0b2RvcyxcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgc2V0TmFtZSxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICAgICAgZ2V0TGFzdFRvZG8sXG4gICAgICAgIGdldFRvZG9CeUlkXG4gICAgfVxufVxuXG5cbmV4cG9ydCB7XG4gICAgUHJvamVjdCwgXG59IiwiaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QuanMnXG5cbmNvbnN0IFByb2plY3RzID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbmV3X3Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld19wcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmV3X3Byb2plY3QuZ2V0TmFtZSgpfSBoYXMgYmVlbiBjcmVhdGVkIWApOyAvLyBsb2cgXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3RfaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLmlkID09PSBwcm9qZWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cHJvamVjdHNbaV0uZ2V0TmFtZSgpfSBoYXMgYmVlbiBSRU1PVkVEIWApOyAvLyBsb2dcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0QnlOYW1lID0gZnVuY3Rpb24ocHJvamVjdF9uYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXROYW1lKCkgPT09IHByb2plY3RfbmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3Byb2plY3RzW2ldLmdldE5hbWUoKX0gaGFzIGJlZW4gUkVNT1ZFRCFgKTsgLy8gbG9nXG4gICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRQcm9qZWN0c0J5TmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldE5hbWUoKSk7IC8vIGxvZ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGFzdEVsZW1lbnRJZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0uaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmV0dXJuUHJvamVjdEJ5TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBleGlzdHMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBwcm9qZWN0LmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ5TmFtZSxcbiAgICAgICAgZ2V0TGFzdEVsZW1lbnRJZCxcbiAgICAgICAgcHJpbnRQcm9qZWN0c0J5TmFtZSxcbiAgICAgICAgcmV0dXJuUHJvamVjdEJ5TmFtZSxcbiAgICAgICAgZXhpc3RzLFxuICAgIH1cbn0pKCk7XG5cblxuZXhwb3J0IHtcbiAgICBQcm9qZWN0c1xufVxuIiwiaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tIFwiLi9pZF9nZW5lcmF0b3IuanNcIjtcblxuY29uc3QgVG9kbyA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGR1ZV9kYXRlID0gXCJcIikge1xuICAgIFxuICAgIGxldCBpZCA9IHVuaXF1ZUlkKCk7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBmdW5jdGlvbihuZXdfdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSBuZXdfdGl0bGU7XG4gICAgfVxuXG4gICAgbGV0IGdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNldERlc2NyaXB0aW9uID0gZnVuY3Rpb24obmV3X2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3X2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGR1ZV9kYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgIGR1ZV9kYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SWQsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICBzZXREZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBnZXREYXRlLFxuICAgICAgICBzZXREYXRlXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFRvZG9cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnXG5cbkV2ZW50cy5jcmVhdGVQcm9qZWN0KCdKYWNrIFNwYXJyb3cnKTtcbkV2ZW50cy5jcmVhdGVUb2RvKCdKYWNrIFNwYXJyb3cnLCAnVGVzdCBUb2RvIGFuZCBzb21lIG1vcmUgdGV4dCB0byB0ZXN0IHNvbWUgdGhpbmdzJywgYExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIFxuTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgXG53aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBcbkl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBcbkl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgXG5hbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uYCwgJzIwMjMtMTAtMDUnKTtcbkV2ZW50cy5vcGVuUHJvamVjdCgnSmFjayBTcGFycm93Jyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9