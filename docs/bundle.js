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
    font-size: 100%;    
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
    height: 100%;

    font-weight: bold;
    font-size: 64px;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    justify-content: space-between;
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

#today, #this-week {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 14px;
    padding: 10px 10px;
    font-size: 90%;
    font-weight: 700;
    text-align: center;
    flex-grow: 3;
    overflow-wrap: break-word;
}

#today:hover, #this-week:hover {
    background-color: rgb(46, 50, 52);
    border-color: cyan;
    cursor: pointer;
}

#nav-open-close {
    display: none;
    width: 100px;
}

#nav-open-close:hover {
    cursor: pointer;
}

#p-title {
    font-weight: bold;
    font-size: 200%;
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
    font-size: 90%;
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
    font-size: 90%;
    font-weight: 500;
}

#input-container > #create-project-btn:hover {
    background-color: rgb(46, 50, 52);
    color: rgb(180, 249, 249);
    border-color: cyan;
    cursor: pointer;
}


/* Nav Projects */

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
    width: 70%;
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 14px 0px 0px 14px;
    padding: 10px 10px;
    font-size: 90%;
    text-align: center;
    flex-grow: 3;
    overflow-wrap: break-word;
}

.project-btn-ctn > .project-btn:hover {
    background-color: rgb(46, 50, 52);
    border-color: cyan;
    cursor: pointer;
}

.project-btn-ctn > .mod-project-name-btn {
    background-color: rgb(41, 45, 47);
    text-align: center;
    padding: 10px;
    border: 1px rgb(61, 65, 67) solid;
    font-size: 80%;
}

.project-btn-ctn > .mod-project-name-btn:hover {
    border: 1px cyan solid;
    cursor: pointer;
}

.project-btn-ctn > .delete-project-btn {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 0px 14px 14px 0px;
    padding: 10px 10px;
    font-size: 90%;
    font-weight: 500;
    text-align: center;
}

.project-btn-ctn > .delete-project-btn:hover {
    background-color: rgb(36, 40, 42);
    color: crimson;
    border-color: crimson;
    
    cursor: pointer;
}

.mod-project-name-input {
    width: 70%;
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 14px 0px 0px 14px;
    padding: 10px 10px;
    font-size: 90%;
    text-align: center;
    flex-grow: 1;
    overflow-wrap: break-word;
}

.mod-project-name-sub-btn {
    background-color: rgb(41, 45, 47);
    text-align: center;
    padding: 10px;
    font-size: 90%;
    border: 1px rgb(61, 65, 67) solid;
}

.mod-project-name-sub-btn:hover {
    background-color: rgb(36, 40, 42);
    border: 1px cyan solid;
    cursor: pointer;
}

.mod-project-name-cancel-btn {
    background-color: rgb(41, 45, 47);
    border: 1px rgb(61, 65, 67) solid;
    border-radius: 0px 14px 14px 0px;
    padding: 10px 10px;
    font-size: 90%;
    font-weight: 500;
    text-align: center;
}

.mod-project-name-cancel-btn:hover {
    background-color: rgb(36, 40, 42);
    color: cyan;
    border-color: cyan;
    
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
    font-size: 100%;
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
    font-size: 135%;
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
    /* font-size: 15px; */
    padding: 10px;
    width: 80%;
    text-align: start;
}

.top-todo-ctn {
    width: 100%;
    display: flex;
    /* flex-direction: column;  */
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 100%;
}

.top-todo-left-ctn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.top-todo-right-ctn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.bottom-todo-ctn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
}

.todo-checkbox:hover {
    cursor: pointer;
}

.todo-date {
    margin-right: 10px;
    width: max-content;
}

.todo-title {
    flex-grow: 4;
    /* width: 70%; */
    overflow: hidden;
    text-overflow: ellipsis;
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
    font-size: 100%;
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
    font-size: 100%;
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
    font-size: 135%;
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

/* Miscellaneous */


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
  }



#border-purple {
    border: 1px solid purple;
}


@media only screen and (max-width: 910px) {
    #nav {
        display: none;
        position: absolute;
        /* height: 79%; */
        top: 15%;  
        left: 2.5%;    
        right: 2.5%;    
        bottom: 1%;   
    }

    #nav-open-close {
        display: block;
        background-color: transparent;
    }

    #screen {
        grid-row: 2 / -1;
        grid-column: 1 / -1;
    }

    
}


@media only screen and (max-width: 665px) {
    .top-todo-ctn {
        flex-direction: column;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    font-size: 100%;    \n}\n\n\ntextarea:focus, input:focus {\n    outline: none;\n}\n\nhtml, body {\n    height: 100%;\n    overflow: hidden;\n}\n\n/* PAGE CONTAINER */\n\n#container {\n    height: 100vh;\n    background-color: rgb(40, 40, 40);\n    display: grid;\n    grid-template: repeat(7, 1fr) / repeat(5, 1fr);\n}\n\n\n/* Header (Title of Page) */\n\n#header {\n    background-color: rgb(41, 45, 47);\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    height: 100%;\n\n    font-weight: bold;\n    font-size: 64px;\n    padding-left: 20px;\n    padding-right: 20px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n/* NAVIGATION BAR */\n\n#nav {\n    background-color: rgb(38, 41, 42);\n    grid-row: 2 / -1;\n    grid-column: 1 / 2;\n\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    padding: 20px;\n}\n\n#today, #this-week {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 700;\n    text-align: center;\n    flex-grow: 3;\n    overflow-wrap: break-word;\n}\n\n#today:hover, #this-week:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n#nav-open-close {\n    display: none;\n    width: 100px;\n}\n\n#nav-open-close:hover {\n    cursor: pointer;\n}\n\n#p-title {\n    font-weight: bold;\n    font-size: 200%;\n    text-align: center;\n}\n\n\n/* Console of Navigation */\n\n#nav > #console {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    position: relative;\n}\n\n#nav > #console * {\n    box-sizing: border-box;\n}\n\n#nav > #console > #input-container {\n    display: flex;\n}\n\n#input-container > #p-name-input {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n    flex-grow: 1;\n}\n\n#p-name-input:focus {\n    outline: none;\n}\n\n#input-container > #create-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n}\n\n#input-container > #create-project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    color: rgb(180, 249, 249);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n\n/* Nav Projects */\n\n#nav > #projects {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    height: 100%;\n\n    overflow-y: auto;\n}\n\n.project-btn-ctn {\n    display: flex;\n}\n\n.project-btn-ctn > .project-btn {\n    width: 70%;\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    text-align: center;\n    flex-grow: 3;\n    overflow-wrap: break-word;\n}\n\n.project-btn-ctn > .project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.project-btn-ctn > .mod-project-name-btn {\n    background-color: rgb(41, 45, 47);\n    text-align: center;\n    padding: 10px;\n    border: 1px rgb(61, 65, 67) solid;\n    font-size: 80%;\n}\n\n.project-btn-ctn > .mod-project-name-btn:hover {\n    border: 1px cyan solid;\n    cursor: pointer;\n}\n\n.project-btn-ctn > .delete-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n    text-align: center;\n}\n\n.project-btn-ctn > .delete-project-btn:hover {\n    background-color: rgb(36, 40, 42);\n    color: crimson;\n    border-color: crimson;\n    \n    cursor: pointer;\n}\n\n.mod-project-name-input {\n    width: 70%;\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    text-align: center;\n    flex-grow: 1;\n    overflow-wrap: break-word;\n}\n\n.mod-project-name-sub-btn {\n    background-color: rgb(41, 45, 47);\n    text-align: center;\n    padding: 10px;\n    font-size: 90%;\n    border: 1px rgb(61, 65, 67) solid;\n}\n\n.mod-project-name-sub-btn:hover {\n    background-color: rgb(36, 40, 42);\n    border: 1px cyan solid;\n    cursor: pointer;\n}\n\n.mod-project-name-cancel-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n    text-align: center;\n}\n\n.mod-project-name-cancel-btn:hover {\n    background-color: rgb(36, 40, 42);\n    color: cyan;\n    border-color: cyan;\n    \n    cursor: pointer;\n}\n\n/* PROJECT SCREEN */\n\n#screen {\n    background-color: rgb(34, 37, 38);\n    grid-row: 2 / -1;\n    grid-column: 2 / -1;\n}\n\n.tab {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    height: 100%;\n    gap: 20px;\n    align-items: center;\n}\n\n.add-todo-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 5px;\n    font-size: 100%;\n    padding: 10px;\n    width: 80%;\n    text-align: start;\n}\n\n.add-todo-btn:hover {\n    background-color: rgb(46, 50, 52);\n    cursor: pointer;\n    border-color: cyan;\n}\n\n.todo-form {\n    width: 80%;\n    /* display: flex; */\n    flex-direction: column;\n    border: 1px solid rgb(56, 60, 62);\n}\n\n.add-todo-top-box {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-todo-bottom-row {\n    display: flex; \n}\n\n.title-input, .description-input {\n    border: none;\n    background-color: rgb(41, 45, 47);\n    padding: 10px;\n    margin: 5px;\n}\n\n.title-input, .description-input:focus {\n    outline: none;\n}\n\n.description-input {\n    resize: none;\n}\n\n.date-input {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    border: none;\n}\n\n.date-input:focus {\n    outline: none;\n}\n\n.submit-btn {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    min-width: 100px;\n    border: 1px rgb(46, 50, 52) solid;\n    border-radius: 5px;\n}\n\n.submit-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.cancel-form {\n    margin-left: auto;\n    margin-right: 5px;\n    font-size: 135%;\n    background-color: rgb(34, 37, 38);\n    border: none;\n    padding: 5px;\n    text-align: center;\n}\n\n.cancel-form:hover {\n    color: crimson;\n    cursor: pointer;\n}\n\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 5px;\n    /* font-size: 15px; */\n    padding: 10px;\n    width: 80%;\n    text-align: start;\n}\n\n.top-todo-ctn {\n    width: 100%;\n    display: flex;\n    /* flex-direction: column;  */\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    font-size: 100%;\n}\n\n.top-todo-left-ctn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.top-todo-right-ctn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.bottom-todo-ctn {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 10px;\n}\n\n.todo-checkbox:hover {\n    cursor: pointer;\n}\n\n.todo-date {\n    margin-right: 10px;\n    width: max-content;\n}\n\n.todo-title {\n    flex-grow: 4;\n    /* width: 70%; */\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.todo-modify {\n    background-color: transparent;\n    border: none;\n}\n\n.todo-remove {\n    background-color: transparent;\n    border: none;\n}\n\n\n.mod-title-input {\n    /* width: fit-content; */\n    flex-grow: 4;\n    background-color: transparent;\n    border: 1px solid rgb(61, 65, 67);\n    border-radius: 5px;\n    padding: 5px;\n    font-size: 100%;\n}\n\n.mod-description-input {\n    border: 1px solid rgb(61, 65, 67);\n    /* background-color: rgb(41, 45, 47); */\n    background-color: transparent;\n    resize: none;\n    font-size: 100%;\n    padding: 5px;\n\n    width: 100%;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;  \n    \n}\n\n.mod-date-input {\n    background-color: rgb(34, 37, 38);\n    padding: 5px;\n    border: none;\n    font-size: 100%;\n    /* width: 12%; */\n}\n\n.mod-submit-btn {\n    background-color: rgb(34, 37, 38);\n    padding: 5px;\n    /* width: 10%; */\n    border: 1px rgb(46, 50, 52) solid;\n    border-radius: 5px;\n}\n\n.mod-cancel-btn {\n    background-color: transparent;\n    border: none;\n    font-size: 135%;\n    border: none;\n    padding: 5px;\n    text-align: center;\n    /* width: 3%; */\n}\n\n.mod-submit-btn:hover {\n    cursor: pointer;\n    border-color: cyan;\n}\n\n.mod-cancel-btn:hover {\n    cursor: pointer;\n    color: cyan;\n}\n\n\n.todo:hover {\n    background-color: rgb(46, 50, 52);\n    cursor: pointer;\n    border-color: purple;\n}\n\n.todo-modify:hover {\n    cursor: pointer;\n}\n\n.todo-remove:hover {\n    cursor: pointer;\n    color: crimson;\n}\n\n\n\n\n.inactive, .hide {\n    display: none;\n}\n\n.active, .show {\n    display: flex;\n}\n\n/* Miscellaneous */\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 8px; /* you can shrink taken width */\n    display: none;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent; \n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background:#555; \n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #444; \n  }\n\n\n\n#border-purple {\n    border: 1px solid purple;\n}\n\n\n@media only screen and (max-width: 910px) {\n    #nav {\n        display: none;\n        position: absolute;\n        /* height: 79%; */\n        top: 15%;  \n        left: 2.5%;    \n        right: 2.5%;    \n        bottom: 1%;   \n    }\n\n    #nav-open-close {\n        display: block;\n        background-color: transparent;\n    }\n\n    #screen {\n        grid-row: 2 / -1;\n        grid-column: 1 / -1;\n    }\n\n    \n}\n\n\n@media only screen and (max-width: 665px) {\n    .top-todo-ctn {\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/menu_icon.png":
/*!***************************!*\
  !*** ./src/menu_icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9aa91e76276f89ed8baa.png";

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
/* harmony import */ var _menu_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_icon.png */ "./src/menu_icon.png");



(function() {
    const header = document.querySelector('#header');
    const create_project_btn = document.querySelector('#create-project-btn');
    const project_name_input = document.querySelector('#p-name-input');
    const nav = document.querySelector('#nav');

    const menu_icon = new Image();
    menu_icon.setAttribute('id', 'nav-open-close');
    menu_icon.src = _menu_icon_png__WEBPACK_IMPORTED_MODULE_1__;
    header.appendChild(menu_icon);

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

    menu_icon.addEventListener('click', function() {
        if (nav.style.display === '') {
            nav.style.display = 'flex';
        } else if (nav.style.display == 'flex') {
            nav.style.display = '';
        }
    });


})();


function createProject(input) {
    if (!_project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.exists(input)) {
        _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.addProject(input);
        createProjectBtn(input);
        createProjectTab(input);
    }
}

function deleteProject(name) {
    _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.removeProject(name);
    deleteProjectBtn(name);
    deleteProjectTab(name);
}

function createTodo(project_name, title, description, date) {
    const Project = _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.returnProjectByName(project_name);
    Project.addTodo(title, description, date);
    createTodoButton(project_name);
}

function deleteTodo(project_name, todo_id) {
    const Project = _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.returnProjectByName(project_name);
    const ProjectTab = document.getElementById(project_name);
    const TodoElement = document.getElementById(todo_id);
    Project.removeTodo(todo_id);
    ProjectTab.removeChild(TodoElement);
}

function createProjectBtn(name) {
    const projects_nav = document.getElementById('projects');
    const btn_container = document.createElement('div');
    const project_btn = document.createElement('btn');
    const delete_btn = document.createElement('btn');
    const modify_btn = document.createElement('btn');

    btn_container.classList.add('project-btn-ctn');
    project_btn.classList.add('project-btn');
    delete_btn.classList.add('delete-project-btn');
    modify_btn.classList.add('mod-project-name-btn');

    project_btn.innerText = name;
    delete_btn.innerText = '✘';
    modify_btn.innerText = '✒️';

    btn_container.appendChild(project_btn);
    btn_container.appendChild(modify_btn);
    btn_container.appendChild(delete_btn);
    projects_nav.appendChild(btn_container);

    // modify name
    const name_input = document.createElement('input');
    const submit_btn = document.createElement('button');
    const cancel_btn = document.createElement('button');

    setAttributes(name_input, {class: 'mod-project-name-input'});
    setAttributes(submit_btn, {class: 'mod-project-name-sub-btn'});
    setAttributes(cancel_btn, {class: 'mod-project-name-cancel-btn'})

    name_input.value = name;
    submit_btn.innerText = '↪';
    cancel_btn.innerText = '✘';

    modify_btn.addEventListener('click', () => {
        project_btn.replaceWith(name_input);
        modify_btn.replaceWith(submit_btn);
        delete_btn.replaceWith(cancel_btn);
    })

    submit_btn.addEventListener('click', () => {
        if (name_input.value !== '') {
            changeProjectName(project_btn.innerText, name_input.value);
            project_btn.innerText = name_input.value;
            name_input.replaceWith(project_btn);
            submit_btn.replaceWith(modify_btn);
            cancel_btn.replaceWith(delete_btn);
            name = name_input.value;
        } else {
            alert('Invalid name input!');
        }
        
    })

    cancel_btn.addEventListener('click', () => {
        name_input.replaceWith(project_btn);
        submit_btn.replaceWith(modify_btn);
        cancel_btn.replaceWith(delete_btn);
    })

    project_btn.addEventListener('click', () => {
        openProject(name);
    });

    delete_btn.addEventListener('click', () => { 
        const response = confirm('Are you sure you wanna do that?');
        if (response) { deleteProject(name); }
    });

    
}

function changeProjectName(current_name, new_name) {
    const Project = _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.returnProjectByName(current_name);
    const ProjectTab = document.getElementById(current_name);
    const tab_title = ProjectTab.querySelector('.tab-title');

    _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.renameProject(current_name, new_name);
    ProjectTab.setAttribute('id', new_name);
    tab_title.innerText = new_name;
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
    setAttributes(title, {class: 'tab-title'});
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
    const top_todo_left_ctn = document.createElement('div');
    const top_todo_right_ctn = document.createElement('div');
    const todo_checkbox = document.createElement('input');
    const todo_title = document.createElement('div');
    const todo_date = document.createElement('div');
    const todo_modify_btn = document.createElement('button');
    const todo_remove_btn = document.createElement('button');
    const bottom_todo_ctn = document.createElement('div');
    const dsc_title = document.createElement('h5');
    const todo_description = document.createElement('div');
    
    setAttributes(todo_btn, {class: 'todo', id: Todo.getId()});
    setAttributes(top_todo_ctn, {class: 'top-todo-ctn'});
    setAttributes(top_todo_left_ctn, {class: 'top-todo-left-ctn'});
    setAttributes(top_todo_right_ctn, {class: 'top-todo-right-ctn'});
    setAttributes(todo_checkbox, {class: 'todo-checkbox', type: 'checkbox'});
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

    top_todo_left_ctn.appendChild(todo_checkbox);
    top_todo_left_ctn.appendChild(todo_title);
    top_todo_right_ctn.appendChild(todo_date);
    top_todo_right_ctn.appendChild(todo_modify_btn);
    top_todo_right_ctn.appendChild(todo_remove_btn);
    top_todo_ctn.appendChild(top_todo_left_ctn);
    top_todo_ctn.appendChild(top_todo_right_ctn);
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

        console.log('Clicked Todo!'); // log

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

        if (!todo_btn.classList.contains('expanded')) {
            todo_btn.appendChild(bottom_todo_ctn);
            todo_btn.classList.add('expanded');
        }

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
            deleteTodo(Project.getName(), Todo.getId());
        }
    })

    todo_checkbox.addEventListener('change', (e) => {
        e.stopPropagation();
        deleteTodo(Project.getName(), Todo.getId());
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

        Project.modifyTodo(Todo.getId(), title_input.value, description_input.value, date_input.value);

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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



const Project = function(name) {

    let id = name;
    let todos = [];

    let getName = function() {
        return name;
    }

    let setName = function(new_name) {
        name = new_name;
    }

    let addTodo = function(title, description, due_date) {
        let TodoOBJ = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo)(title, description, due_date);
        todos.push(TodoOBJ);
        _storage_js__WEBPACK_IMPORTED_MODULE_1__.addTodo(id, TodoOBJ.getId(), TodoOBJ.getTable());
        console.log(`Todo ADDED in ${name}`); // log
    }

    let removeTodo = function(todo_id) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].getId() === todo_id) {
                todos.splice(i, 1);
                _storage_js__WEBPACK_IMPORTED_MODULE_1__.removeTodo(id, todo_id);
                console.log(`Todo REMOVED from ${name}`);
                break;
            }
        }
    }

    let modifyTodo = function(todo_id, new_title, new_description, new_due_date) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].getId() === todo_id) {
                todos[i].setTitle(new_title);
                todos[i].setDescription(new_description);
                todos[i].setDate(new_due_date);
                _storage_js__WEBPACK_IMPORTED_MODULE_1__.modifyTodo(id, todos[i].getId(), todos[i].getTable());
                console.log('Todo MODIFIED in ${name}');
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
        modifyTodo,
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



const Projects = (function() {
    let projects = [];

    const addProject = function(name) {
        const new_project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.Project)(name);
        projects.push(new_project);
        _storage_js__WEBPACK_IMPORTED_MODULE_1__.addProject(name);
        console.log(`New project ( ${new_project.getName()} ) has been CREATED!`); // log 
    }

    const removeProject = function(project_name) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].getName() === project_name) {
                console.log(`Project ( ${projects[i].getName()} ) has been REMOVED!`); // log
                projects.splice(i, 1);
                _storage_js__WEBPACK_IMPORTED_MODULE_1__.removeProject(project_name);
                break;
            }
        }
    }

    const renameProject = function(project_name, new_name) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].getName() === project_name && project_name !== new_name) {
                console.log(`Project "${project_name}" has been RENAMED into "${new_name}"!`); // log
                projects[i].setName(new_name);
                _storage_js__WEBPACK_IMPORTED_MODULE_1__.renameProject(project_name, new_name);
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
        renameProject,
        getLastElementId,
        printProjectsByName,
        returnProjectByName,
        exists
    }
})();





/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   getTable: () => (/* binding */ getTable),
/* harmony export */   modifyTodo: () => (/* binding */ modifyTodo),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   removeTodo: () => (/* binding */ removeTodo),
/* harmony export */   renameProject: () => (/* binding */ renameProject)
/* harmony export */ });
function addProject(id) {   
    localStorage.setItem(id, '{}');
}

function renameProject(id, new_name) {
    localStorage.setItem(new_name, localStorage.getItem(id));
    localStorage.removeItem(id);
}

function removeProject(id) {
    localStorage.removeItem(id);
}

function addTodo(project_id, todo_id, table) {
    let Project = JSON.parse(localStorage.getItem(project_id));
    Project[todo_id] = table;
    localStorage[project_id] = JSON.stringify(Project);
}

function modifyTodo(project_id, todo_id, new_table) {
    let Project = JSON.parse(localStorage.getItem(project_id));
    Project[todo_id] = new_table;
    localStorage[project_id] = JSON.stringify(Project);
}

function removeTodo(project_id, todo_id) {
    let Project = JSON.parse(localStorage.getItem(project_id));
    delete Project[todo_id];
    localStorage[project_id] = JSON.stringify(Project);
}

let getTable = function() {
    let Table = {};
    for (let i = 0; i < localStorage.length; i++) {
        Table[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }

    return Table;
}

let clear = function() {
    localStorage.clear();
}




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

    const getTable = function() {
        return {
            title: title,
            description: description,
            due_date: due_date
        }
    }

    return {
        getId,
        getDescription,
        setDescription,
        getTitle,
        setTitle,
        getDate,
        setDate,
        getTable
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");




function load() {
    let StorageTable = _storage_js__WEBPACK_IMPORTED_MODULE_2__.getTable();
    _storage_js__WEBPACK_IMPORTED_MODULE_2__.clear();

    for (let ProjectName of Object.keys(StorageTable)) {
        let Project = StorageTable[ProjectName];
        _events_js__WEBPACK_IMPORTED_MODULE_1__.createProject(ProjectName);

        for (let TodoName in Project) {
            let Todo = Project[TodoName];
            _events_js__WEBPACK_IMPORTED_MODULE_1__.createTodo(ProjectName, Todo['title'], Todo['description'], Todo['due_date']);
        }
    }
}


(function main() {
    load();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFX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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUM7Ozs7Ozs7VUN4REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNpQjtBQUNFOztBQUV2QztBQUNBLHVCQUF1QixpREFBZ0I7QUFDdkMsSUFBSSw4Q0FBYTs7QUFFakI7QUFDQTtBQUNBLFFBQVEscURBQW9COztBQUU1QjtBQUNBO0FBQ0EsWUFBWSxrREFBaUI7QUFDN0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pZF9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RfZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTAwJTsgICAgXG59XG5cblxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogUEFHRSBDT05UQUlORVIgKi9cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNywgMWZyKSAvIHJlcGVhdCg1LCAxZnIpO1xufVxuXG5cbi8qIEhlYWRlciAoVGl0bGUgb2YgUGFnZSkgKi9cblxuI2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogTkFWSUdBVElPTiBCQVIgKi9cblxuI25hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0MSwgNDIpO1xuICAgIGdyaWQtcm93OiAyIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jdG9kYXksICN0aGlzLXdlZWsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAzO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbiN0b2RheTpob3ZlciwgI3RoaXMtd2Vlazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuYXYtb3Blbi1jbG9zZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbiNuYXYtb3Blbi1jbG9zZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKiBDb25zb2xlIG9mIE5hdmlnYXRpb24gKi9cblxuI25hdiA+ICNjb25zb2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI25hdiA+ICNjb25zb2xlICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNuYXYgPiAjY29uc29sZSA+ICNpbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNpbnB1dC1jb250YWluZXIgPiAjcC1uYW1lLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuI3AtbmFtZS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuI2lucHV0LWNvbnRhaW5lciA+ICNjcmVhdGUtcHJvamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgY29sb3I6IHJnYigxODAsIDI0OSwgMjQ5KTtcbiAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qIE5hdiBQcm9qZWN0cyAqL1xuXG4jbmF2ID4gI3Byb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAucHJvamVjdC1idG4ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMztcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4ucHJvamVjdC1idG4tY3RuID4gLnByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5tb2QtcHJvamVjdC1uYW1lLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBmb250LXNpemU6IDgwJTtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5tb2QtcHJvamVjdC1uYW1lLWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggY3lhbiBzb2xpZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAuZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBib3JkZXItY29sb3I6IGNyaW1zb247XG4gICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kLXByb2plY3QtbmFtZS1pbnB1dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5tb2QtcHJvamVjdC1uYW1lLXN1Yi1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG59XG5cbi5tb2QtcHJvamVjdC1uYW1lLXN1Yi1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcbiAgICBib3JkZXI6IDFweCBjeWFuIHNvbGlkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZC1wcm9qZWN0LW5hbWUtY2FuY2VsLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTRweCAxNHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2QtcHJvamVjdC1uYW1lLWNhbmNlbC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcbiAgICBjb2xvcjogY3lhbjtcbiAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBQUk9KRUNUIFNDUkVFTiAqL1xuXG4jc2NyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xufVxuXG4udGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtdG9kby1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5hZGQtdG9kby1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xufVxuXG4udG9kby1mb3JtIHtcbiAgICB3aWR0aDogODAlO1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTYsIDYwLCA2Mik7XG59XG5cbi5hZGQtdG9kby10b3AtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hZGQtdG9kby1ib3R0b20tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbn1cblxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kZXNjcmlwdGlvbi1pbnB1dCB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uZGF0ZS1pbnB1dCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5kYXRlLWlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhbmNlbC1mb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEzNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FuY2VsLWZvcm06aG92ZXIge1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4udG9kbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi50b3AtdG9kby1jdG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLnRvcC10b2RvLWxlZnQtY3RuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udG9wLXRvZG8tcmlnaHQtY3RuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYm90dG9tLXRvZG8tY3RuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRvZG8tY2hlY2tib3g6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG8tZGF0ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRvZG8tdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogNDtcbiAgICAvKiB3aWR0aDogNzAlOyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50b2RvLW1vZGlmeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udG9kby1yZW1vdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuXG4ubW9kLXRpdGxlLWlucHV0IHtcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXG4gICAgZmxleC1ncm93OiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjUsIDY3KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLm1vZC1kZXNjcmlwdGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcbiAgICBcbn1cblxuLm1vZC1kYXRlLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgLyogd2lkdGg6IDEyJTsgKi9cbn1cblxuLm1vZC1zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8qIHdpZHRoOiAxMCU7ICovXG4gICAgYm9yZGVyOiAxcHggcmdiKDQ2LCA1MCwgNTIpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vZC1jYW5jZWwtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMzUlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHdpZHRoOiAzJTsgKi9cbn1cblxuLm1vZC1zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xufVxuXG4ubW9kLWNhbmNlbC1idG46aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogY3lhbjtcbn1cblxuXG4udG9kbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbn1cblxuLnRvZG8tbW9kaWZ5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvLXJlbW92ZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuXG5cblxuXG4uaW5hY3RpdmUsIC5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWN0aXZlLCAuc2hvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogTWlzY2VsbGFuZW91cyAqL1xuXG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4OyAvKiB5b3UgY2FuIHNocmluayB0YWtlbiB3aWR0aCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcbiAgfVxuICAgXG4gIC8qIEhhbmRsZSAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiM1NTU7IFxuICB9XG4gIFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ0NDsgXG4gIH1cblxuXG5cbiNib3JkZXItcHVycGxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xuICAgICNuYXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qIGhlaWdodDogNzklOyAqL1xuICAgICAgICB0b3A6IDE1JTsgIFxuICAgICAgICBsZWZ0OiAyLjUlOyAgICBcbiAgICAgICAgcmlnaHQ6IDIuNSU7ICAgIFxuICAgICAgICBib3R0b206IDElOyAgIFxuICAgIH1cblxuICAgICNuYXYtb3Blbi1jbG9zZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAjc2NyZWVuIHtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAtMTtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICB9XG5cbiAgICBcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2NXB4KSB7XG4gICAgLnRvcC10b2RvLWN0biB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFlBQVk7SUFD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QjtRQUNoQixtQkFBbUI7SUFDdkI7OztBQUdKOzs7QUFHQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxMDAlOyAgICBcXG59XFxuXFxuXFxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogUEFHRSBDT05UQUlORVIgKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNywgMWZyKSAvIHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgKFRpdGxlIG9mIFBhZ2UpICovXFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBOQVZJR0FUSU9OIEJBUiAqL1xcblxcbiNuYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQxLCA0Mik7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jdG9kYXksICN0aGlzLXdlZWsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDM7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiN0b2RheTpob3ZlciwgI3RoaXMtd2Vlazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuYXYtb3Blbi1jbG9zZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuI25hdi1vcGVuLWNsb3NlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogQ29uc29sZSBvZiBOYXZpZ2F0aW9uICovXFxuXFxuI25hdiA+ICNjb25zb2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbmF2ID4gI2NvbnNvbGUgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNuYXYgPiAjY29uc29sZSA+ICNpbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyID4gI3AtbmFtZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jcC1uYW1lLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lciA+ICNjcmVhdGUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBjb2xvcjogcmdiKDE4MCwgMjQ5LCAyNDkpO1xcbiAgICBib3JkZXItY29sb3I6IGN5YW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogTmF2IFByb2plY3RzICovXFxuXFxuI25hdiA+ICNwcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4gPiAucHJvamVjdC1idG4ge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAzO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLnByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBib3JkZXItY29sb3I6IGN5YW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5tb2QtcHJvamVjdC1uYW1lLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLm1vZC1wcm9qZWN0LW5hbWUtYnRuOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggY3lhbiBzb2xpZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTRweCAxNHB4IDBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuICAgIGJvcmRlci1jb2xvcjogY3JpbXNvbjtcXG4gICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZC1wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubW9kLXByb2plY3QtbmFtZS1zdWItYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxufVxcblxcbi5tb2QtcHJvamVjdC1uYW1lLXN1Yi1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQwLCA0Mik7XFxuICAgIGJvcmRlcjogMXB4IGN5YW4gc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZC1wcm9qZWN0LW5hbWUtY2FuY2VsLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTRweCAxNHB4IDBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kLXByb2plY3QtbmFtZS1jYW5jZWwtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MCwgNDIpO1xcbiAgICBjb2xvcjogY3lhbjtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBQUk9KRUNUIFNDUkVFTiAqL1xcblxcbiNzY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxufVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDU2LCA2MCwgNjIpO1xcbn1cXG5cXG4uYWRkLXRvZG8tdG9wLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQtdG9kby1ib3R0b20tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxufVxcblxcbi50aXRsZS1pbnB1dCwgLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGl0bGUtaW5wdXQsIC5kZXNjcmlwdGlvbi1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRhdGUtaW5wdXQge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRhdGUtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDQ2LCA1MCwgNTIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBib3JkZXItY29sb3I6IGN5YW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbmNlbC1mb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBmb250LXNpemU6IDEzNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhbmNlbC1mb3JtOmhvdmVyIHtcXG4gICAgY29sb3I6IGNyaW1zb247XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4udG9wLXRvZG8tY3RuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4udG9wLXRvZG8tbGVmdC1jdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9wLXRvZG8tcmlnaHQtY3RuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmJvdHRvbS10b2RvLWN0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3g6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBmbGV4LWdyb3c6IDQ7XFxuICAgIC8qIHdpZHRoOiA3MCU7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udG9kby1tb2RpZnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1yZW1vdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5cXG4ubW9kLXRpdGxlLWlucHV0IHtcXG4gICAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xcbiAgICBmbGV4LWdyb3c6IDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDY1LCA2Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi5tb2QtZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDY1LCA2Nyk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcXG4gICAgXFxufVxcblxcbi5tb2QtZGF0ZS1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogd2lkdGg6IDEyJTsgKi9cXG59XFxuXFxuLm1vZC1zdWJtaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIC8qIHdpZHRoOiAxMCU7ICovXFxuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubW9kLWNhbmNlbC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEzNSU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHdpZHRoOiAzJTsgKi9cXG59XFxuXFxuLm1vZC1zdWJtaXQtYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItY29sb3I6IGN5YW47XFxufVxcblxcbi5tb2QtY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGN5YW47XFxufVxcblxcblxcbi50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xcbn1cXG5cXG4udG9kby1tb2RpZnk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXJlbW92ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGNyaW1zb247XFxufVxcblxcblxcblxcblxcbi5pbmFjdGl2ZSwgLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWN0aXZlLCAuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIE1pc2NlbGxhbmVvdXMgKi9cXG5cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogOHB4OyAvKiB5b3UgY2FuIHNocmluayB0YWtlbiB3aWR0aCAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBUcmFjayAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcXG4gIH1cXG4gICBcXG4gIC8qIEhhbmRsZSAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IzU1NTsgXFxuICB9XFxuICBcXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM0NDQ7IFxcbiAgfVxcblxcblxcblxcbiNib3JkZXItcHVycGxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XFxuICAgICNuYXYge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIC8qIGhlaWdodDogNzklOyAqL1xcbiAgICAgICAgdG9wOiAxNSU7ICBcXG4gICAgICAgIGxlZnQ6IDIuNSU7ICAgIFxcbiAgICAgICAgcmlnaHQ6IDIuNSU7ICAgIFxcbiAgICAgICAgYm90dG9tOiAxJTsgICBcXG4gICAgfVxcblxcbiAgICAjbmF2LW9wZW4tY2xvc2Uge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAjc2NyZWVuIHtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICB9XFxuXFxuICAgIFxcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2NXB4KSB7XFxuICAgIC50b3AtdG9kby1jdG4ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0X2dyb3VwLmpzJ1xuaW1wb3J0IEljb24gZnJvbSAnLi9tZW51X2ljb24ucG5nJ1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGNvbnN0IGNyZWF0ZV9wcm9qZWN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBwcm9qZWN0X25hbWVfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1uYW1lLWlucHV0Jyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuXG4gICAgY29uc3QgbWVudV9pY29uID0gbmV3IEltYWdlKCk7XG4gICAgbWVudV9pY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LW9wZW4tY2xvc2UnKTtcbiAgICBtZW51X2ljb24uc3JjID0gSWNvbjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudV9pY29uKTtcblxuICAgIHByb2plY3RfbmFtZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgaWYgKGV2LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgY3JlYXRlX3Byb2plY3RfYnRuLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNyZWF0ZV9wcm9qZWN0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAocHJvamVjdF9uYW1lX2lucHV0LnZhbHVlICE9PSBcIlwiICYmICFQcm9qZWN0cy5leGlzdHMocHJvamVjdF9uYW1lX2lucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgcHJvamVjdF9uYW1lX2lucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBwcm9qZWN0IG5hbWUhIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtZW51X2ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09PSAnJykge1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH0gZWxzZSBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxufSkoKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGlucHV0KSB7XG4gICAgaWYgKCFQcm9qZWN0cy5leGlzdHMoaW5wdXQpKSB7XG4gICAgICAgIFByb2plY3RzLmFkZFByb2plY3QoaW5wdXQpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0QnRuKGlucHV0KTtcbiAgICAgICAgY3JlYXRlUHJvamVjdFRhYihpbnB1dCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KG5hbWUpIHtcbiAgICBQcm9qZWN0cy5yZW1vdmVQcm9qZWN0KG5hbWUpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4obmFtZSk7XG4gICAgZGVsZXRlUHJvamVjdFRhYihuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhwcm9qZWN0X25hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICAgIGNvbnN0IFByb2plY3QgPSBQcm9qZWN0cy5yZXR1cm5Qcm9qZWN0QnlOYW1lKHByb2plY3RfbmFtZSk7XG4gICAgUHJvamVjdC5hZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG4gICAgY3JlYXRlVG9kb0J1dHRvbihwcm9qZWN0X25hbWUpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHByb2plY3RfbmFtZSwgdG9kb19pZCkge1xuICAgIGNvbnN0IFByb2plY3QgPSBQcm9qZWN0cy5yZXR1cm5Qcm9qZWN0QnlOYW1lKHByb2plY3RfbmFtZSk7XG4gICAgY29uc3QgUHJvamVjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RfbmFtZSk7XG4gICAgY29uc3QgVG9kb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvX2lkKTtcbiAgICBQcm9qZWN0LnJlbW92ZVRvZG8odG9kb19pZCk7XG4gICAgUHJvamVjdFRhYi5yZW1vdmVDaGlsZChUb2RvRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCdG4obmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RzX25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgIGNvbnN0IGJ0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcbiAgICBjb25zdCBtb2RpZnlfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG5cbiAgICBidG5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLWN0bicpO1xuICAgIHByb2plY3RfYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdC1idG4nKTtcbiAgICBtb2RpZnlfYnRuLmNsYXNzTGlzdC5hZGQoJ21vZC1wcm9qZWN0LW5hbWUtYnRuJyk7XG5cbiAgICBwcm9qZWN0X2J0bi5pbm5lclRleHQgPSBuYW1lO1xuICAgIGRlbGV0ZV9idG4uaW5uZXJUZXh0ID0gJ+KcmCc7XG4gICAgbW9kaWZ5X2J0bi5pbm5lclRleHQgPSAn4pyS77iPJztcblxuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdF9idG4pO1xuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kQ2hpbGQobW9kaWZ5X2J0bik7XG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVfYnRuKTtcbiAgICBwcm9qZWN0c19uYXYuYXBwZW5kQ2hpbGQoYnRuX2NvbnRhaW5lcik7XG5cbiAgICAvLyBtb2RpZnkgbmFtZVxuICAgIGNvbnN0IG5hbWVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBzZXRBdHRyaWJ1dGVzKG5hbWVfaW5wdXQsIHtjbGFzczogJ21vZC1wcm9qZWN0LW5hbWUtaW5wdXQnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhzdWJtaXRfYnRuLCB7Y2xhc3M6ICdtb2QtcHJvamVjdC1uYW1lLXN1Yi1idG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxfYnRuLCB7Y2xhc3M6ICdtb2QtcHJvamVjdC1uYW1lLWNhbmNlbC1idG4nfSlcblxuICAgIG5hbWVfaW5wdXQudmFsdWUgPSBuYW1lO1xuICAgIHN1Ym1pdF9idG4uaW5uZXJUZXh0ID0gJ+KGqic7XG4gICAgY2FuY2VsX2J0bi5pbm5lclRleHQgPSAn4pyYJztcblxuICAgIG1vZGlmeV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RfYnRuLnJlcGxhY2VXaXRoKG5hbWVfaW5wdXQpO1xuICAgICAgICBtb2RpZnlfYnRuLnJlcGxhY2VXaXRoKHN1Ym1pdF9idG4pO1xuICAgICAgICBkZWxldGVfYnRuLnJlcGxhY2VXaXRoKGNhbmNlbF9idG4pO1xuICAgIH0pXG5cbiAgICBzdWJtaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAobmFtZV9pbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3ROYW1lKHByb2plY3RfYnRuLmlubmVyVGV4dCwgbmFtZV9pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBwcm9qZWN0X2J0bi5pbm5lclRleHQgPSBuYW1lX2lucHV0LnZhbHVlO1xuICAgICAgICAgICAgbmFtZV9pbnB1dC5yZXBsYWNlV2l0aChwcm9qZWN0X2J0bik7XG4gICAgICAgICAgICBzdWJtaXRfYnRuLnJlcGxhY2VXaXRoKG1vZGlmeV9idG4pO1xuICAgICAgICAgICAgY2FuY2VsX2J0bi5yZXBsYWNlV2l0aChkZWxldGVfYnRuKTtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lX2lucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgbmFtZSBpbnB1dCEnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgY2FuY2VsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmFtZV9pbnB1dC5yZXBsYWNlV2l0aChwcm9qZWN0X2J0bik7XG4gICAgICAgIHN1Ym1pdF9idG4ucmVwbGFjZVdpdGgobW9kaWZ5X2J0bik7XG4gICAgICAgIGNhbmNlbF9idG4ucmVwbGFjZVdpdGgoZGVsZXRlX2J0bik7XG4gICAgfSlcblxuICAgIHByb2plY3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcGVuUHJvamVjdChuYW1lKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgZG8gdGhhdD8nKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7IGRlbGV0ZVByb2plY3QobmFtZSk7IH1cbiAgICB9KTtcblxuICAgIFxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0TmFtZShjdXJyZW50X25hbWUsIG5ld19uYW1lKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUoY3VycmVudF9uYW1lKTtcbiAgICBjb25zdCBQcm9qZWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudF9uYW1lKTtcbiAgICBjb25zdCB0YWJfdGl0bGUgPSBQcm9qZWN0VGFiLnF1ZXJ5U2VsZWN0b3IoJy50YWItdGl0bGUnKTtcblxuICAgIFByb2plY3RzLnJlbmFtZVByb2plY3QoY3VycmVudF9uYW1lLCBuZXdfbmFtZSk7XG4gICAgUHJvamVjdFRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3X25hbWUpO1xuICAgIHRhYl90aXRsZS5pbm5lclRleHQgPSBuZXdfbmFtZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ0bihuYW1lKSB7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtYnRuJyk7XG4gICAgZm9yIChsZXQgYnRuIG9mIGJ0bnMpIHtcbiAgICAgICAgaWYgKGJ0bi5pbm5lclRleHQgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYWIobmFtZSkge1xuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgYWRkX3RvZG9fYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdG9kb19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHRvcF9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3R0b21fcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkYXRlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzdWJtaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgc2V0QXR0cmlidXRlcyh0YWIsIFxuICAgICAgICB7aWQ6IGAke25hbWV9YCwgY2xhc3M6ICd0YWIgaW5hY3RpdmUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0aXRsZSwge2NsYXNzOiAndGFiLXRpdGxlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoYWRkX3RvZG9fYnRuLCBcbiAgICAgICAge2NsYXNzOiAnYWRkLXRvZG8tYnRuIHNob3cnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX2Zvcm0sIFxuICAgICAgICB7YWN0aW9uOiAnJywgY2xhc3M6ICd0b2RvLWZvcm0gaGlkZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvcF9ib3gsIFxuICAgICAgICB7Y2xhc3M6ICdhZGQtdG9kby10b3AtYm94J30pO1xuICAgIHNldEF0dHJpYnV0ZXMoYm90dG9tX3JvdywgXG4gICAgICAgIHtjbGFzczogJ2FkZC10b2RvLWJvdHRvbS1yb3cnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0aXRsZV9pbnB1dCwgXG4gICAgICAgIHt0eXBlOiAndGV4dCcsIG5hbWU6ICd0aXRsZScsIHBsYWNlaG9sZGVyOiAnRW50ZXIgdGl0bGUgaGVyZScsIGNsYXNzOiAndGl0bGUtaW5wdXQnfSk7XG4gICAgICAgIHRpdGxlX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uX2lucHV0LCBcbiAgICAgICAge25hbWU6ICdkZXNjcmlwdGlvbicsIGNvbHM6ICczMCcsIHJvd3M6ICcxMCcsIHBsYWNlaG9sZGVyOiAnRW50ZXIgZGVzY3JpcHRpb24gaGVyZScsIGNsYXNzOiAnZGVzY3JpcHRpb24taW5wdXQnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkYXRlX2lucHV0LCBcbiAgICAgICAge3R5cGU6ICdkYXRlJywgbmFtZTogJ2RhdGUnLCBjbGFzczogJ2RhdGUtaW5wdXQnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhzdWJtaXRfYnRuLCBcbiAgICAgICAge3R5cGU6ICdzdWJtaXQnLCBjbGFzczogJ3N1Ym1pdC1idG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxfYnRuLCBcbiAgICAgICAge3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2NhbmNlbC1mb3JtJ30pO1xuXG5cbiAgICB0YWIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhYi5hcHBlbmRDaGlsZChhZGRfdG9kb19idG4pO1xuICAgIHRhYi5hcHBlbmRDaGlsZCh0b2RvX2Zvcm0pO1xuICAgIHRvZG9fZm9ybS5hcHBlbmRDaGlsZCh0b3BfYm94KTtcbiAgICB0b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoYm90dG9tX3Jvdyk7XG4gICAgdG9wX2JveC5hcHBlbmRDaGlsZCh0aXRsZV9pbnB1dCk7XG4gICAgdG9wX2JveC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gICAgYm90dG9tX3Jvdy5hcHBlbmRDaGlsZChkYXRlX2lucHV0KTtcbiAgICBib3R0b21fcm93LmFwcGVuZENoaWxkKHN1Ym1pdF9idG4pO1xuICAgIGJvdHRvbV9yb3cuYXBwZW5kQ2hpbGQoY2FuY2VsX2J0bik7XG5cblxuICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgYWRkX3RvZG9fYnRuLmlubmVyVGV4dCA9ICfinpUgQWRkIFRvZG8nO1xuICAgIHN1Ym1pdF9idG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsX2J0bi5pbm5lclRleHQgPSAn4pyYJztcblxuXG4gICAgYWRkX3RvZG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIHRvZG9fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG4gICAgICAgIGNyZWF0ZVRvZG8obmFtZSwgdGl0bGVfaW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlLCBkYXRlX2lucHV0LnZhbHVlKTtcblxuICAgICAgICB0b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG4gICAgY2FuY2VsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgXG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgICAgdG9kb19mb3JtLnJlc2V0KCk7XG4gICAgfSlcblxuXG4gICAgc2NyZWVuLmFwcGVuZENoaWxkKHRhYik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RUYWIobmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIHRhYi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIGNvbnN0IGFfdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpOyAgICBcblxuICAgIGlmIChhX3RhYiAhPT0gbnVsbCkge1xuICAgICAgICBhX3RhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgYV90YWIuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgICB9XG4gICAgXG4gICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvQnV0dG9uKHByb2plY3RfbmFtZSkge1xuICAgIGNvbnN0IFByb2plY3QgPSBQcm9qZWN0cy5yZXR1cm5Qcm9qZWN0QnlOYW1lKHByb2plY3RfbmFtZSk7XG5cbiAgICBjb25zdCBUb2RvID0gUHJvamVjdC5nZXRMYXN0VG9kbygpO1xuXG4gICAgY29uc3QgVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7UHJvamVjdC5nZXROYW1lKCl9YCk7XG4gICAgY29uc3QgdG9kb19idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b3BfdG9kb19jdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b3BfdG9kb19sZWZ0X2N0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcF90b2RvX3JpZ2h0X2N0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0b2RvX21vZGlmeV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0b2RvX3JlbW92ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBib3R0b21fdG9kb19jdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkc2NfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGNvbnN0IHRvZG9fZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fYnRuLCB7Y2xhc3M6ICd0b2RvJywgaWQ6IFRvZG8uZ2V0SWQoKX0pO1xuICAgIHNldEF0dHJpYnV0ZXModG9wX3RvZG9fY3RuLCB7Y2xhc3M6ICd0b3AtdG9kby1jdG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b3BfdG9kb19sZWZ0X2N0biwge2NsYXNzOiAndG9wLXRvZG8tbGVmdC1jdG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b3BfdG9kb19yaWdodF9jdG4sIHtjbGFzczogJ3RvcC10b2RvLXJpZ2h0LWN0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fY2hlY2tib3gsIHtjbGFzczogJ3RvZG8tY2hlY2tib3gnLCB0eXBlOiAnY2hlY2tib3gnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX3RpdGxlLCB7Y2xhc3M6ICd0b2RvLXRpdGxlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9kb19kYXRlLCB7Y2xhc3M6ICd0b2RvLWRhdGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX21vZGlmeV9idG4sIHtjbGFzczogJ3RvZG8tbW9kaWZ5J30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9kb19yZW1vdmVfYnRuLCB7Y2xhc3M6ICd0b2RvLXJlbW92ZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGJvdHRvbV90b2RvX2N0biwge2NsYXNzOiAnYm90dG9tLXRvZG8tY3RuJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoZHNjX3RpdGxlLCB7Y2xhc3M6ICdkc2MtdGl0bGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX2Rlc2NyaXB0aW9uLCB7Y2xhc3M6ICd0b2RvLWRlc2NyaXB0aW9uJ30pO1xuXG4gICAgdG9kb190aXRsZS5pbm5lclRleHQgPSBUb2RvLmdldFRpdGxlKCk7XG4gICAgdG9kb19kYXRlLmlubmVyVGV4dCA9IFRvZG8uZ2V0RGF0ZSgpO1xuICAgIHRvZG9fbW9kaWZ5X2J0bi5pbm5lclRleHQgPSAn4pyS77iPJztcbiAgICB0b2RvX3JlbW92ZV9idG4uaW5uZXJUZXh0ID0gJ+KcmCc7XG4gICAgZHNjX3RpdGxlLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIHRvZG9fZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gVG9kby5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgdG9wX3RvZG9fbGVmdF9jdG4uYXBwZW5kQ2hpbGQodG9kb19jaGVja2JveCk7XG4gICAgdG9wX3RvZG9fbGVmdF9jdG4uYXBwZW5kQ2hpbGQodG9kb190aXRsZSk7XG4gICAgdG9wX3RvZG9fcmlnaHRfY3RuLmFwcGVuZENoaWxkKHRvZG9fZGF0ZSk7XG4gICAgdG9wX3RvZG9fcmlnaHRfY3RuLmFwcGVuZENoaWxkKHRvZG9fbW9kaWZ5X2J0bik7XG4gICAgdG9wX3RvZG9fcmlnaHRfY3RuLmFwcGVuZENoaWxkKHRvZG9fcmVtb3ZlX2J0bik7XG4gICAgdG9wX3RvZG9fY3RuLmFwcGVuZENoaWxkKHRvcF90b2RvX2xlZnRfY3RuKTtcbiAgICB0b3BfdG9kb19jdG4uYXBwZW5kQ2hpbGQodG9wX3RvZG9fcmlnaHRfY3RuKTtcbiAgICBib3R0b21fdG9kb19jdG4uYXBwZW5kQ2hpbGQoZHNjX3RpdGxlKTtcbiAgICBib3R0b21fdG9kb19jdG4uYXBwZW5kQ2hpbGQodG9kb19kZXNjcmlwdGlvbik7XG4gICAgdG9kb19idG4uYXBwZW5kQ2hpbGQodG9wX3RvZG9fY3RuKTtcbiAgICBUYWIuYXBwZW5kQ2hpbGQodG9kb19idG4pO1xuXG4gICAgLy8gTW9kaWZ5IGZvcm0gZWxlbWVudHNcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IGRhdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBzZXRBdHRyaWJ1dGVzKHRpdGxlX2lucHV0LCB7Y2xhc3M6ICdtb2QtdGl0bGUtaW5wdXQnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkZXNjcmlwdGlvbl9pbnB1dCwge2NsYXNzOiAnbW9kLWRlc2NyaXB0aW9uLWlucHV0JywgY29sczogJzMwJywgcm93czogJzEwJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoZGF0ZV9pbnB1dCwge2NsYXNzOiAnbW9kLWRhdGUtaW5wdXQnLCB0eXBlOiAnZGF0ZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHN1Ym1pdF9idG4sIHtjbGFzczogJ21vZC1zdWJtaXQtYnRuJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoY2FuY2VsX2J0biwge2NsYXNzOiAnbW9kLWNhbmNlbC1idG4nfSk7XG5cbiAgICBzdWJtaXRfYnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgIGNhbmNlbF9idG4uaW5uZXJUZXh0ID0gJ+KcmCc7XG4gICAgdGl0bGVfaW5wdXQudmFsdWUgPSBUb2RvLmdldFRpdGxlKCk7XG4gICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUgPSBUb2RvLmdldERlc2NyaXB0aW9uKCk7XG4gICAgZGF0ZV9pbnB1dC52YWx1ZSA9IFRvZG8uZ2V0RGF0ZSgpO1xuXG4gICAgdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgVG9kbyEnKTsgLy8gbG9nXG5cbiAgICAgICAgaWYgKHRvZG9fYnRuLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgdG9kb19idG4ucmVtb3ZlQ2hpbGQoYm90dG9tX3RvZG9fY3RuKTtcbiAgICAgICAgICAgIHRvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvX2J0bi5hcHBlbmRDaGlsZChib3R0b21fdG9kb19jdG4pO1xuICAgICAgICAgICAgdG9kb19idG4uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0b2RvX21vZGlmeV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0b2RvX2J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgIHRvZG9fYnRuLmFwcGVuZENoaWxkKGJvdHRvbV90b2RvX2N0bik7XG4gICAgICAgICAgICB0b2RvX2J0bi5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kb190aXRsZS5yZXBsYWNlV2l0aCh0aXRsZV9pbnB1dCk7XG4gICAgICAgIHRvZG9fZGVzY3JpcHRpb24ucmVwbGFjZVdpdGgoZGVzY3JpcHRpb25faW5wdXQpO1xuICAgICAgICB0b2RvX2RhdGUucmVwbGFjZVdpdGgoZGF0ZV9pbnB1dCk7XG4gICAgICAgIHRvZG9fbW9kaWZ5X2J0bi5yZXBsYWNlV2l0aChzdWJtaXRfYnRuKTtcbiAgICAgICAgdG9kb19yZW1vdmVfYnRuLnJlcGxhY2VXaXRoKGNhbmNlbF9idG4pO1xuICAgIH0pXG5cbiAgICB0b2RvX3JlbW92ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW5uYSBkbyB0aGF0PycpO1xuICAgICAgICBpZiAocmVzcG9uc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG8oUHJvamVjdC5nZXROYW1lKCksIFRvZG8uZ2V0SWQoKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdG9kb19jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBkZWxldGVUb2RvKFByb2plY3QuZ2V0TmFtZSgpLCBUb2RvLmdldElkKCkpO1xuICAgIH0pXG5cbiAgICB0b2RvX2RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG4gICAgdG9kb19kZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcblxuICAgIHRpdGxlX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KVxuXG4gICAgZGVzY3JpcHRpb25faW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cbiAgICBkYXRlX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KVxuXG4gICAgc3VibWl0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgUHJvamVjdC5tb2RpZnlUb2RvKFRvZG8uZ2V0SWQoKSwgdGl0bGVfaW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlLCBkYXRlX2lucHV0LnZhbHVlKTtcblxuICAgICAgICB0b2RvX3RpdGxlLmlubmVyVGV4dCA9IHRpdGxlX2lucHV0LnZhbHVlO1xuICAgICAgICB0b2RvX2Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlO1xuICAgICAgICB0b2RvX2RhdGUuaW5uZXJUZXh0ID0gZGF0ZV9pbnB1dC52YWx1ZTtcblxuICAgICAgICB0aXRsZV9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX3RpdGxlKTtcbiAgICAgICAgZGVzY3JpcHRpb25faW5wdXQucmVwbGFjZVdpdGgodG9kb19kZXNjcmlwdGlvbik7XG4gICAgICAgIGRhdGVfaW5wdXQucmVwbGFjZVdpdGgodG9kb19kYXRlKTtcbiAgICAgICAgc3VibWl0X2J0bi5yZXBsYWNlV2l0aCh0b2RvX21vZGlmeV9idG4pO1xuICAgICAgICBjYW5jZWxfYnRuLnJlcGxhY2VXaXRoKHRvZG9fcmVtb3ZlX2J0bik7XG4gICAgfSlcblxuICAgIGNhbmNlbF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRpdGxlX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fdGl0bGUpO1xuICAgICAgICBkZXNjcmlwdGlvbl9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgZGF0ZV9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2RhdGUpO1xuICAgICAgICBzdWJtaXRfYnRuLnJlcGxhY2VXaXRoKHRvZG9fbW9kaWZ5X2J0bik7XG4gICAgICAgIGNhbmNlbF9idG4ucmVwbGFjZVdpdGgodG9kb19yZW1vdmVfYnRuKTtcbiAgICB9KVxuXG59XG5cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH0pO1xufSAgXG5cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgY3JlYXRlVG9kbyxcbiAgICBvcGVuUHJvamVjdFxufVxuIiwiY29uc3QgdW5pcXVlSWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMik7XG59XG5cbmV4cG9ydCB7XG4gICAgdW5pcXVlSWRcbn0iLCJpbXBvcnQge1RvZG99IGZyb20gXCIuL3RvZG8uanNcIlxuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnXG5cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICBsZXQgaWQgPSBuYW1lO1xuICAgIGxldCB0b2RvcyA9IFtdO1xuXG4gICAgbGV0IGdldE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgbGV0IHNldE5hbWUgPSBmdW5jdGlvbihuZXdfbmFtZSkge1xuICAgICAgICBuYW1lID0gbmV3X25hbWU7XG4gICAgfVxuXG4gICAgbGV0IGFkZFRvZG8gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlKSB7XG4gICAgICAgIGxldCBUb2RvT0JKID0gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlKTtcbiAgICAgICAgdG9kb3MucHVzaChUb2RvT0JKKTtcbiAgICAgICAgU3RvcmFnZS5hZGRUb2RvKGlkLCBUb2RvT0JKLmdldElkKCksIFRvZG9PQkouZ2V0VGFibGUoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUb2RvIEFEREVEIGluICR7bmFtZX1gKTsgLy8gbG9nXG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZVRvZG8gPSBmdW5jdGlvbih0b2RvX2lkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b2Rvc1tpXS5nZXRJZCgpID09PSB0b2RvX2lkKSB7XG4gICAgICAgICAgICAgICAgdG9kb3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIFN0b3JhZ2UucmVtb3ZlVG9kbyhpZCwgdG9kb19pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRvZG8gUkVNT1ZFRCBmcm9tICR7bmFtZX1gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtb2RpZnlUb2RvID0gZnVuY3Rpb24odG9kb19pZCwgbmV3X3RpdGxlLCBuZXdfZGVzY3JpcHRpb24sIG5ld19kdWVfZGF0ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9kb3NbaV0uZ2V0SWQoKSA9PT0gdG9kb19pZCkge1xuICAgICAgICAgICAgICAgIHRvZG9zW2ldLnNldFRpdGxlKG5ld190aXRsZSk7XG4gICAgICAgICAgICAgICAgdG9kb3NbaV0uc2V0RGVzY3JpcHRpb24obmV3X2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB0b2Rvc1tpXS5zZXREYXRlKG5ld19kdWVfZGF0ZSk7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5tb2RpZnlUb2RvKGlkLCB0b2Rvc1tpXS5nZXRJZCgpLCB0b2Rvc1tpXS5nZXRUYWJsZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9kbyBNT0RJRklFRCBpbiAke25hbWV9Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2V0TGFzdFRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRvZG9zW3RvZG9zLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIGxldCBnZXRUb2RvQnlJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGZvciAobGV0IHRvZG8gaW4gdG9kb3MpIHtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gdG9kby5nZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRvZG9zLFxuICAgICAgICBnZXROYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICByZW1vdmVUb2RvLFxuICAgICAgICBtb2RpZnlUb2RvLFxuICAgICAgICBnZXRMYXN0VG9kbyxcbiAgICAgICAgZ2V0VG9kb0J5SWRcbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICBQcm9qZWN0LCBcbn0iLCJpbXBvcnQge1Byb2plY3R9IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5jb25zdCBQcm9qZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5ld19wcm9qZWN0ID0gUHJvamVjdChuYW1lKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdfcHJvamVjdCk7XG4gICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5ldyBwcm9qZWN0ICggJHtuZXdfcHJvamVjdC5nZXROYW1lKCl9ICkgaGFzIGJlZW4gQ1JFQVRFRCFgKTsgLy8gbG9nIFxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0X25hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLmdldE5hbWUoKSA9PT0gcHJvamVjdF9uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgKCAke3Byb2plY3RzW2ldLmdldE5hbWUoKX0gKSBoYXMgYmVlbiBSRU1PVkVEIWApOyAvLyBsb2dcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5yZW1vdmVQcm9qZWN0KHByb2plY3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5hbWVQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdF9uYW1lLCBuZXdfbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0uZ2V0TmFtZSgpID09PSBwcm9qZWN0X25hbWUgJiYgcHJvamVjdF9uYW1lICE9PSBuZXdfbmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IFwiJHtwcm9qZWN0X25hbWV9XCIgaGFzIGJlZW4gUkVOQU1FRCBpbnRvIFwiJHtuZXdfbmFtZX1cIiFgKTsgLy8gbG9nXG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0TmFtZShuZXdfbmFtZSk7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5yZW5hbWVQcm9qZWN0KHByb2plY3RfbmFtZSwgbmV3X25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRQcm9qZWN0c0J5TmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldE5hbWUoKSk7IC8vIGxvZ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGFzdEVsZW1lbnRJZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0uaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmV0dXJuUHJvamVjdEJ5TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBleGlzdHMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBwcm9qZWN0LmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgcmVuYW1lUHJvamVjdCxcbiAgICAgICAgZ2V0TGFzdEVsZW1lbnRJZCxcbiAgICAgICAgcHJpbnRQcm9qZWN0c0J5TmFtZSxcbiAgICAgICAgcmV0dXJuUHJvamVjdEJ5TmFtZSxcbiAgICAgICAgZXhpc3RzXG4gICAgfVxufSkoKTtcblxuXG5leHBvcnQge1xuICAgIFByb2plY3RzXG59XG4iLCJmdW5jdGlvbiBhZGRQcm9qZWN0KGlkKSB7ICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsICd7fScpO1xufVxuXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0KGlkLCBuZXdfbmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld19uYW1lLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZCkpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpZCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyhwcm9qZWN0X2lkLCB0b2RvX2lkLCB0YWJsZSkge1xuICAgIGxldCBQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0X2lkKSk7XG4gICAgUHJvamVjdFt0b2RvX2lkXSA9IHRhYmxlO1xuICAgIGxvY2FsU3RvcmFnZVtwcm9qZWN0X2lkXSA9IEpTT04uc3RyaW5naWZ5KFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlUb2RvKHByb2plY3RfaWQsIHRvZG9faWQsIG5ld190YWJsZSkge1xuICAgIGxldCBQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0X2lkKSk7XG4gICAgUHJvamVjdFt0b2RvX2lkXSA9IG5ld190YWJsZTtcbiAgICBsb2NhbFN0b3JhZ2VbcHJvamVjdF9pZF0gPSBKU09OLnN0cmluZ2lmeShQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kbyhwcm9qZWN0X2lkLCB0b2RvX2lkKSB7XG4gICAgbGV0IFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RfaWQpKTtcbiAgICBkZWxldGUgUHJvamVjdFt0b2RvX2lkXTtcbiAgICBsb2NhbFN0b3JhZ2VbcHJvamVjdF9pZF0gPSBKU09OLnN0cmluZ2lmeShQcm9qZWN0KTtcbn1cblxubGV0IGdldFRhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IFRhYmxlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgVGFibGVbbG9jYWxTdG9yYWdlLmtleShpKV0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVGFibGU7XG59XG5cbmxldCBjbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xufVxuXG5leHBvcnQge1xuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICByZW5hbWVQcm9qZWN0LFxuICAgIGFkZFRvZG8sXG4gICAgbW9kaWZ5VG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldFRhYmxlLFxuICAgIGNsZWFyXG59XG4iLCJpbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gXCIuL2lkX2dlbmVyYXRvci5qc1wiO1xuXG5jb25zdCBUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgZHVlX2RhdGUgPSBcIlwiKSB7XG4gICAgXG4gICAgbGV0IGlkID0gdW5pcXVlSWQoKTsgICAgXG5cbiAgICBjb25zdCBnZXRUaXRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBmdW5jdGlvbihuZXdfdGl0bGUpIHtcbiAgICAgICAgdGl0bGUgPSBuZXdfdGl0bGU7XG4gICAgfVxuXG4gICAgbGV0IGdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNldERlc2NyaXB0aW9uID0gZnVuY3Rpb24obmV3X2Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3X2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGR1ZV9kYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgIGR1ZV9kYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZV9kYXRlOiBkdWVfZGF0ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SWQsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICBzZXREZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBnZXREYXRlLFxuICAgICAgICBzZXREYXRlLFxuICAgICAgICBnZXRUYWJsZVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBUb2RvXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBsZXQgU3RvcmFnZVRhYmxlID0gU3RvcmFnZS5nZXRUYWJsZSgpO1xuICAgIFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgIGZvciAobGV0IFByb2plY3ROYW1lIG9mIE9iamVjdC5rZXlzKFN0b3JhZ2VUYWJsZSkpIHtcbiAgICAgICAgbGV0IFByb2plY3QgPSBTdG9yYWdlVGFibGVbUHJvamVjdE5hbWVdO1xuICAgICAgICBFdmVudHMuY3JlYXRlUHJvamVjdChQcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgZm9yIChsZXQgVG9kb05hbWUgaW4gUHJvamVjdCkge1xuICAgICAgICAgICAgbGV0IFRvZG8gPSBQcm9qZWN0W1RvZG9OYW1lXTtcbiAgICAgICAgICAgIEV2ZW50cy5jcmVhdGVUb2RvKFByb2plY3ROYW1lLCBUb2RvWyd0aXRsZSddLCBUb2RvWydkZXNjcmlwdGlvbiddLCBUb2RvWydkdWVfZGF0ZSddKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4oZnVuY3Rpb24gbWFpbigpIHtcbiAgICBsb2FkKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9