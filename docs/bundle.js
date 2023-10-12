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
    const menu_toggle_btn = document.querySelector('#nav-open-close');
    const nav = document.querySelector('#nav');

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

    menu_toggle_btn.addEventListener('click', function() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFX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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUM7Ozs7Ozs7VUN4REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ2lCO0FBQ0U7O0FBRXZDO0FBQ0EsdUJBQXVCLGlEQUFnQjtBQUN2QyxJQUFJLDhDQUFhOztBQUVqQjtBQUNBO0FBQ0EsUUFBUSxxREFBb0I7O0FBRTVCO0FBQ0E7QUFDQSxZQUFZLGtEQUFpQjtBQUM3QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2lkX2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdF9ncm91cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwMCU7ICAgIFxufVxuXG5cbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFBBR0UgQ09OVEFJTkVSICovXG5cbiNjb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDcsIDFmcikgLyByZXBlYXQoNSwgMWZyKTtcbn1cblxuXG4vKiBIZWFkZXIgKFRpdGxlIG9mIFBhZ2UpICovXG5cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi8qIE5BVklHQVRJT04gQkFSICovXG5cbiNuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDEsIDQyKTtcbiAgICBncmlkLXJvdzogMiAvIC0xO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuI3RvZGF5LCAjdGhpcy13ZWVrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMztcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4jdG9kYXk6aG92ZXIsICN0aGlzLXdlZWs6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcbiAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbmF2LW9wZW4tY2xvc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4jbmF2LW9wZW4tY2xvc2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3AtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLyogQ29uc29sZSBvZiBOYXZpZ2F0aW9uICovXG5cbiNuYXYgPiAjY29uc29sZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNuYXYgPiAjY29uc29sZSAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jbmF2ID4gI2NvbnNvbGUgPiAjaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jaW5wdXQtY29udGFpbmVyID4gI3AtbmFtZS1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbiNwLW5hbWUtaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jaW5wdXQtY29udGFpbmVyID4gI2NyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGNvbG9yOiByZ2IoMTgwLCAyNDksIDI0OSk7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKiBOYXYgUHJvamVjdHMgKi9cblxuI25hdiA+ICNwcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucHJvamVjdC1idG4tY3RuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvamVjdC1idG4tY3RuID4gLnByb2plY3QtYnRuIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDM7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5wcm9qZWN0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAubW9kLXByb2plY3QtbmFtZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgZm9udC1zaXplOiA4MCU7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAubW9kLXByb2plY3QtbmFtZS1idG46aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IGN5YW4gc29saWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1idG4tY3RuID4gLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTRweCAxNHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQwLCA0Mik7XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgYm9yZGVyLWNvbG9yOiBjcmltc29uO1xuICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZC1wcm9qZWN0LW5hbWUtaW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubW9kLXByb2plY3QtbmFtZS1zdWItYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xufVxuXG4ubW9kLXByb2plY3QtbmFtZS1zdWItYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQwLCA0Mik7XG4gICAgYm9yZGVyOiAxcHggY3lhbiBzb2xpZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2QtcHJvamVjdC1uYW1lLWNhbmNlbC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kLXByb2plY3QtbmFtZS1jYW5jZWwtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQwLCA0Mik7XG4gICAgY29sb3I6IGN5YW47XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogUFJPSkVDVCBTQ1JFRU4gKi9cblxuI3NjcmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xuICAgIGdyaWQtcm93OiAyIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcbn1cblxuLnRhYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRvZG8tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbn1cblxuLnRvZG8tZm9ybSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDU2LCA2MCwgNjIpO1xufVxuXG4uYWRkLXRvZG8tdG9wLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWRkLXRvZG8tYm90dG9tLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDsgXG59XG5cbi50aXRsZS1pbnB1dCwgLmRlc2NyaXB0aW9uLWlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi50aXRsZS1pbnB1dCwgLmRlc2NyaXB0aW9uLWlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGVzY3JpcHRpb24taW5wdXQge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmRhdGUtaW5wdXQge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZGF0ZS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDFweCByZ2IoNDYsIDUwLCA1Mikgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYW5jZWwtZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMzUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhbmNlbC1mb3JtOmhvdmVyIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLnRvZG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4udG9wLXRvZG8tY3RuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAqL1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG5cbi50b3AtdG9kby1sZWZ0LWN0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRvcC10b2RvLXJpZ2h0LWN0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmJvdHRvbS10b2RvLWN0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi50b2RvLWNoZWNrYm94OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvLWRhdGUge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi50b2RvLXRpdGxlIHtcbiAgICBmbGV4LWdyb3c6IDQ7XG4gICAgLyogd2lkdGg6IDcwJTsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udG9kby1tb2RpZnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvZG8tcmVtb3ZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cblxuLm1vZC10aXRsZS1pbnB1dCB7XG4gICAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xuICAgIGZsZXgtZ3JvdzogNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjEsIDY1LCA2Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG5cbi5tb2QtZGVzY3JpcHRpb24taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjUsIDY3KTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXG4gICAgXG59XG5cbi5tb2QtZGF0ZS1pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIC8qIHdpZHRoOiAxMiU7ICovXG59XG5cbi5tb2Qtc3VibWl0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAvKiB3aWR0aDogMTAlOyAqL1xuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tb2QtY2FuY2VsLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTM1JTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiB3aWR0aDogMyU7ICovXG59XG5cbi5tb2Qtc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbn1cblxuLm1vZC1jYW5jZWwtYnRuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGN5YW47XG59XG5cblxuLnRvZG86aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG59XG5cbi50b2RvLW1vZGlmeTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1yZW1vdmU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogY3JpbXNvbjtcbn1cblxuXG5cblxuLmluYWN0aXZlLCAuaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFjdGl2ZSwgLnNob3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qIE1pc2NlbGxhbmVvdXMgKi9cblxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDhweDsgLyogeW91IGNhbiBzaHJpbmsgdGFrZW4gd2lkdGggKi9cbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAvKiBUcmFjayAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXG4gIH1cbiAgIFxuICAvKiBIYW5kbGUgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDojNTU1OyBcbiAgfVxuICBcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0NDQ7IFxuICB9XG5cblxuXG4jYm9yZGVyLXB1cnBsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcbiAgICAjbmF2IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvKiBoZWlnaHQ6IDc5JTsgKi9cbiAgICAgICAgdG9wOiAxNSU7ICBcbiAgICAgICAgbGVmdDogMi41JTsgICAgXG4gICAgICAgIHJpZ2h0OiAyLjUlOyAgICBcbiAgICAgICAgYm90dG9tOiAxJTsgICBcbiAgICB9XG5cbiAgICAjbmF2LW9wZW4tY2xvc2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgI3NjcmVlbiB7XG4gICAgICAgIGdyaWQtcm93OiAyIC8gLTE7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgfVxuXG4gICAgXG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjVweCkge1xuICAgIC50b3AtdG9kby1jdG4ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEOzs7QUFHQSwyQkFBMkI7O0FBRTNCO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTs7SUFFWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZC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ZixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7Ozs7O0FBS0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxrQkFBa0I7OztBQUdsQixVQUFVO0FBQ1Y7SUFDSSxVQUFVLEVBQUUsK0JBQStCO0lBQzNDLGFBQWE7RUFDZjs7RUFFQSxVQUFVO0VBQ1Y7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUEsV0FBVztFQUNYO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQSxvQkFBb0I7RUFDcEI7SUFDRSxnQkFBZ0I7RUFDbEI7Ozs7QUFJRjtJQUNJLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOzs7QUFHSjs7O0FBR0E7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgICAgXFxufVxcblxcblxcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFBBR0UgQ09OVEFJTkVSICovXFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDcsIDFmcikgLyByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuXFxuLyogSGVhZGVyIChUaXRsZSBvZiBQYWdlKSAqL1xcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogTkFWSUdBVElPTiBCQVIgKi9cXG5cXG4jbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0MSwgNDIpO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3RvZGF5LCAjdGhpcy13ZWVrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAzO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jdG9kYXk6aG92ZXIsICN0aGlzLXdlZWs6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmF2LW9wZW4tY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbiNuYXYtb3Blbi1jbG9zZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3AtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIENvbnNvbGUgb2YgTmF2aWdhdGlvbiAqL1xcblxcbiNuYXYgPiAjY29uc29sZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI25hdiA+ICNjb25zb2xlICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbmF2ID4gI2NvbnNvbGUgPiAjaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lciA+ICNwLW5hbWUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI3AtbmFtZS1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyID4gI2NyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgY29sb3I6IHJnYigxODAsIDI0OSwgMjQ5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE5hdiBQcm9qZWN0cyAqL1xcblxcbiNuYXYgPiAjcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLnByb2plY3QtYnRuIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMztcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4gPiAubW9kLXByb2plY3QtbmFtZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5tb2QtcHJvamVjdC1uYW1lLWJ0bjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IGN5YW4gc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQwLCA0Mik7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBib3JkZXItY29sb3I6IGNyaW1zb247XFxuICAgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2QtcHJvamVjdC1uYW1lLWlucHV0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm1vZC1wcm9qZWN0LW5hbWUtc3ViLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbn1cXG5cXG4ubW9kLXByb2plY3QtbmFtZS1zdWItYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MCwgNDIpO1xcbiAgICBib3JkZXI6IDFweCBjeWFuIHNvbGlkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2QtcHJvamVjdC1uYW1lLWNhbmNlbC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZC1wcm9qZWN0LW5hbWUtY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcXG4gICAgY29sb3I6IGN5YW47XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG4gICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogUFJPSkVDVCBTQ1JFRU4gKi9cXG5cXG4jc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1NiwgNjAsIDYyKTtcXG59XFxuXFxuLmFkZC10b2RvLXRvcC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRvZG8tYm90dG9tLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbn1cXG5cXG4udGl0bGUtaW5wdXQsIC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxMzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybTpob3ZlciB7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRvcC10b2RvLWN0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLnRvcC10b2RvLWxlZnQtY3RuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRvcC10b2RvLXJpZ2h0LWN0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib3R0b20tdG9kby1jdG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvLWNoZWNrYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiA0O1xcbiAgICAvKiB3aWR0aDogNzAlOyAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRvZG8tbW9kaWZ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLm1vZC10aXRsZS1pbnB1dCB7XFxuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG4gICAgZmxleC1ncm93OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ubW9kLWRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXFxuICAgIFxcbn1cXG5cXG4ubW9kLWRhdGUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIHdpZHRoOiAxMiU7ICovXFxufVxcblxcbi5tb2Qtc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiB3aWR0aDogMTAlOyAqL1xcbiAgICBib3JkZXI6IDFweCByZ2IoNDYsIDUwLCA1Mikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vZC1jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMzUlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMyU7ICovXFxufVxcblxcbi5tb2Qtc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4ubW9kLWNhbmNlbC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBjeWFuO1xcbn1cXG5cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLnRvZG8tbW9kaWZ5OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1yZW1vdmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG5cXG5cXG5cXG4uaW5hY3RpdmUsIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSwgLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBNaXNjZWxsYW5lb3VzICovXFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDhweDsgLyogeW91IGNhbiBzaHJpbmsgdGFrZW4gd2lkdGggKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogVHJhY2sgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXFxuICB9XFxuICAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiM1NTU7IFxcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0OyBcXG4gIH1cXG5cXG5cXG5cXG4jYm9yZGVyLXB1cnBsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xcbiAgICAjbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAvKiBoZWlnaHQ6IDc5JTsgKi9cXG4gICAgICAgIHRvcDogMTUlOyAgXFxuICAgICAgICBsZWZ0OiAyLjUlOyAgICBcXG4gICAgICAgIHJpZ2h0OiAyLjUlOyAgICBcXG4gICAgICAgIGJvdHRvbTogMSU7ICAgXFxuICAgIH1cXG5cXG4gICAgI25hdi1vcGVuLWNsb3NlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgI3NjcmVlbiB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgfVxcblxcbiAgICBcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjVweCkge1xcbiAgICAudG9wLXRvZG8tY3RuIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdF9ncm91cC5qcydcblxuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNyZWF0ZV9wcm9qZWN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBwcm9qZWN0X25hbWVfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1uYW1lLWlucHV0Jyk7XG4gICAgY29uc3QgbWVudV90b2dnbGVfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1vcGVuLWNsb3NlJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuXG4gICAgcHJvamVjdF9uYW1lX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldikge1xuICAgICAgICBpZiAoZXYua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBjcmVhdGVfcHJvamVjdF9idG4uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY3JlYXRlX3Byb2plY3RfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgIVByb2plY3RzLmV4aXN0cyhwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RfbmFtZV9pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBwcm9qZWN0X25hbWVfaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIHByb2plY3QgbmFtZSEgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG1lbnVfdG9nZ2xlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobmF2LnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XG4gICAgICAgICAgICBuYXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfSBlbHNlIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG59KSgpO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaW5wdXQpIHtcbiAgICBpZiAoIVByb2plY3RzLmV4aXN0cyhpbnB1dCkpIHtcbiAgICAgICAgUHJvamVjdHMuYWRkUHJvamVjdChpbnB1dCk7XG4gICAgICAgIGNyZWF0ZVByb2plY3RCdG4oaW5wdXQpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VGFiKGlucHV0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZSkge1xuICAgIFByb2plY3RzLnJlbW92ZVByb2plY3QobmFtZSk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bihuYW1lKTtcbiAgICBkZWxldGVQcm9qZWN0VGFiKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHByb2plY3RfbmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcbiAgICBQcm9qZWN0LmFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbiAgICBjcmVhdGVUb2RvQnV0dG9uKHByb2plY3RfbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdF9uYW1lLCB0b2RvX2lkKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcbiAgICBjb25zdCBQcm9qZWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdF9uYW1lKTtcbiAgICBjb25zdCBUb2RvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9faWQpO1xuICAgIFByb2plY3QucmVtb3ZlVG9kbyh0b2RvX2lkKTtcbiAgICBQcm9qZWN0VGFiLnJlbW92ZUNoaWxkKFRvZG9FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ0bihuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdHNfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgY29uc3QgYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgY29uc3QgZGVsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICAgIGNvbnN0IG1vZGlmeV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcblxuICAgIGJ0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tY3RuJyk7XG4gICAgcHJvamVjdF9idG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpO1xuICAgIG1vZGlmeV9idG4uY2xhc3NMaXN0LmFkZCgnbW9kLXByb2plY3QtbmFtZS1idG4nKTtcblxuICAgIHByb2plY3RfYnRuLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgZGVsZXRlX2J0bi5pbm5lclRleHQgPSAn4pyYJztcbiAgICBtb2RpZnlfYnRuLmlubmVyVGV4dCA9ICfinJLvuI8nO1xuXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0X2J0bik7XG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RpZnlfYnRuKTtcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZV9idG4pO1xuICAgIHByb2plY3RzX25hdi5hcHBlbmRDaGlsZChidG5fY29udGFpbmVyKTtcblxuICAgIC8vIG1vZGlmeSBuYW1lXG4gICAgY29uc3QgbmFtZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHNldEF0dHJpYnV0ZXMobmFtZV9pbnB1dCwge2NsYXNzOiAnbW9kLXByb2plY3QtbmFtZS1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHN1Ym1pdF9idG4sIHtjbGFzczogJ21vZC1wcm9qZWN0LW5hbWUtc3ViLWJ0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGNhbmNlbF9idG4sIHtjbGFzczogJ21vZC1wcm9qZWN0LW5hbWUtY2FuY2VsLWJ0bid9KVxuXG4gICAgbmFtZV9pbnB1dC52YWx1ZSA9IG5hbWU7XG4gICAgc3VibWl0X2J0bi5pbm5lclRleHQgPSAn4oaqJztcbiAgICBjYW5jZWxfYnRuLmlubmVyVGV4dCA9ICfinJgnO1xuXG4gICAgbW9kaWZ5X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdF9idG4ucmVwbGFjZVdpdGgobmFtZV9pbnB1dCk7XG4gICAgICAgIG1vZGlmeV9idG4ucmVwbGFjZVdpdGgoc3VibWl0X2J0bik7XG4gICAgICAgIGRlbGV0ZV9idG4ucmVwbGFjZVdpdGgoY2FuY2VsX2J0bik7XG4gICAgfSlcblxuICAgIHN1Ym1pdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChuYW1lX2lucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdE5hbWUocHJvamVjdF9idG4uaW5uZXJUZXh0LCBuYW1lX2lucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHByb2plY3RfYnRuLmlubmVyVGV4dCA9IG5hbWVfaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBuYW1lX2lucHV0LnJlcGxhY2VXaXRoKHByb2plY3RfYnRuKTtcbiAgICAgICAgICAgIHN1Ym1pdF9idG4ucmVwbGFjZVdpdGgobW9kaWZ5X2J0bik7XG4gICAgICAgICAgICBjYW5jZWxfYnRuLnJlcGxhY2VXaXRoKGRlbGV0ZV9idG4pO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVfaW5wdXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBuYW1lIGlucHV0IScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjYW5jZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuYW1lX2lucHV0LnJlcGxhY2VXaXRoKHByb2plY3RfYnRuKTtcbiAgICAgICAgc3VibWl0X2J0bi5yZXBsYWNlV2l0aChtb2RpZnlfYnRuKTtcbiAgICAgICAgY2FuY2VsX2J0bi5yZXBsYWNlV2l0aChkZWxldGVfYnRuKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG9wZW5Qcm9qZWN0KG5hbWUpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW5uYSBkbyB0aGF0PycpO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHsgZGVsZXRlUHJvamVjdChuYW1lKTsgfVxuICAgIH0pO1xuXG4gICAgXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3ROYW1lKGN1cnJlbnRfbmFtZSwgbmV3X25hbWUpIHtcbiAgICBjb25zdCBQcm9qZWN0ID0gUHJvamVjdHMucmV0dXJuUHJvamVjdEJ5TmFtZShjdXJyZW50X25hbWUpO1xuICAgIGNvbnN0IFByb2plY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50X25hbWUpO1xuICAgIGNvbnN0IHRhYl90aXRsZSA9IFByb2plY3RUYWIucXVlcnlTZWxlY3RvcignLnRhYi10aXRsZScpO1xuXG4gICAgUHJvamVjdHMucmVuYW1lUHJvamVjdChjdXJyZW50X25hbWUsIG5ld19uYW1lKTtcbiAgICBQcm9qZWN0VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdfbmFtZSk7XG4gICAgdGFiX3RpdGxlLmlubmVyVGV4dCA9IG5ld19uYW1lO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0QnRuKG5hbWUpIHtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1idG4nKTtcbiAgICBmb3IgKGxldCBidG4gb2YgYnRucykge1xuICAgICAgICBpZiAoYnRuLmlubmVyVGV4dCA9PT0gbmFtZSkge1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFRhYihuYW1lKSB7XG4gICAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpO1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBhZGRfdG9kb19idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0b2RvX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgdG9wX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvdHRvbV9yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IGRhdGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBzZXRBdHRyaWJ1dGVzKHRhYiwgXG4gICAgICAgIHtpZDogYCR7bmFtZX1gLCBjbGFzczogJ3RhYiBpbmFjdGl2ZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRpdGxlLCB7Y2xhc3M6ICd0YWItdGl0bGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhhZGRfdG9kb19idG4sIFxuICAgICAgICB7Y2xhc3M6ICdhZGQtdG9kby1idG4gc2hvdyd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fZm9ybSwgXG4gICAgICAgIHthY3Rpb246ICcnLCBjbGFzczogJ3RvZG8tZm9ybSBoaWRlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9wX2JveCwgXG4gICAgICAgIHtjbGFzczogJ2FkZC10b2RvLXRvcC1ib3gnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhib3R0b21fcm93LCBcbiAgICAgICAge2NsYXNzOiAnYWRkLXRvZG8tYm90dG9tLXJvdyd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRpdGxlX2lucHV0LCBcbiAgICAgICAge3R5cGU6ICd0ZXh0JywgbmFtZTogJ3RpdGxlJywgcGxhY2Vob2xkZXI6ICdFbnRlciB0aXRsZSBoZXJlJywgY2xhc3M6ICd0aXRsZS1pbnB1dCd9KTtcbiAgICAgICAgdGl0bGVfaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHNldEF0dHJpYnV0ZXMoZGVzY3JpcHRpb25faW5wdXQsIFxuICAgICAgICB7bmFtZTogJ2Rlc2NyaXB0aW9uJywgY29sczogJzMwJywgcm93czogJzEwJywgcGxhY2Vob2xkZXI6ICdFbnRlciBkZXNjcmlwdGlvbiBoZXJlJywgY2xhc3M6ICdkZXNjcmlwdGlvbi1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRhdGVfaW5wdXQsIFxuICAgICAgICB7dHlwZTogJ2RhdGUnLCBuYW1lOiAnZGF0ZScsIGNsYXNzOiAnZGF0ZS1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHN1Ym1pdF9idG4sIFxuICAgICAgICB7dHlwZTogJ3N1Ym1pdCcsIGNsYXNzOiAnc3VibWl0LWJ0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGNhbmNlbF9idG4sIFxuICAgICAgICB7dHlwZTogJ2J1dHRvbicsIGNsYXNzOiAnY2FuY2VsLWZvcm0nfSk7XG5cblxuICAgIHRhYi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFiLmFwcGVuZENoaWxkKGFkZF90b2RvX2J0bik7XG4gICAgdGFiLmFwcGVuZENoaWxkKHRvZG9fZm9ybSk7XG4gICAgdG9kb19mb3JtLmFwcGVuZENoaWxkKHRvcF9ib3gpO1xuICAgIHRvZG9fZm9ybS5hcHBlbmRDaGlsZChib3R0b21fcm93KTtcbiAgICB0b3BfYm94LmFwcGVuZENoaWxkKHRpdGxlX2lucHV0KTtcbiAgICB0b3BfYm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2lucHV0KTtcbiAgICBib3R0b21fcm93LmFwcGVuZENoaWxkKGRhdGVfaW5wdXQpO1xuICAgIGJvdHRvbV9yb3cuYXBwZW5kQ2hpbGQoc3VibWl0X2J0bik7XG4gICAgYm90dG9tX3Jvdy5hcHBlbmRDaGlsZChjYW5jZWxfYnRuKTtcblxuXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBhZGRfdG9kb19idG4uaW5uZXJUZXh0ID0gJ+KelSBBZGQgVG9kbyc7XG4gICAgc3VibWl0X2J0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICBjYW5jZWxfYnRuLmlubmVyVGV4dCA9ICfinJgnO1xuXG5cbiAgICBhZGRfdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZG9fZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRvZG9fZm9ybS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgdG9kb19mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICAgICAgY3JlYXRlVG9kbyhuYW1lLCB0aXRsZV9pbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsIGRhdGVfaW5wdXQudmFsdWUpO1xuXG4gICAgICAgIHRvZG9fZm9ybS5yZXNldCgpO1xuICAgIH0pXG5cbiAgICBjYW5jZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgICB0b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG5cbiAgICBzY3JlZW4uYXBwZW5kQ2hpbGQodGFiKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhYihuYW1lKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgdGFiLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgY29uc3QgYV90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7ICAgIFxuXG4gICAgaWYgKGFfdGFiICE9PSBudWxsKSB7XG4gICAgICAgIGFfdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBhX3RhYi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgIH1cbiAgICBcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9CdXR0b24ocHJvamVjdF9uYW1lKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcblxuICAgIGNvbnN0IFRvZG8gPSBQcm9qZWN0LmdldExhc3RUb2RvKCk7XG5cbiAgICBjb25zdCBUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtQcm9qZWN0LmdldE5hbWUoKX1gKTtcbiAgICBjb25zdCB0b2RvX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcF90b2RvX2N0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcF90b2RvX2xlZnRfY3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wX3RvZG9fcmlnaHRfY3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb19jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fbW9kaWZ5X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRvZG9fcmVtb3ZlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJvdHRvbV90b2RvX2N0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRzY190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3QgdG9kb19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHNldEF0dHJpYnV0ZXModG9kb19idG4sIHtjbGFzczogJ3RvZG8nLCBpZDogVG9kby5nZXRJZCgpfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b3BfdG9kb19jdG4sIHtjbGFzczogJ3RvcC10b2RvLWN0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvcF90b2RvX2xlZnRfY3RuLCB7Y2xhc3M6ICd0b3AtdG9kby1sZWZ0LWN0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvcF90b2RvX3JpZ2h0X2N0biwge2NsYXNzOiAndG9wLXRvZG8tcmlnaHQtY3RuJ30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9kb19jaGVja2JveCwge2NsYXNzOiAndG9kby1jaGVja2JveCcsIHR5cGU6ICdjaGVja2JveCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fdGl0bGUsIHtjbGFzczogJ3RvZG8tdGl0bGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX2RhdGUsIHtjbGFzczogJ3RvZG8tZGF0ZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fbW9kaWZ5X2J0biwge2NsYXNzOiAndG9kby1tb2RpZnknfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX3JlbW92ZV9idG4sIHtjbGFzczogJ3RvZG8tcmVtb3ZlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoYm90dG9tX3RvZG9fY3RuLCB7Y2xhc3M6ICdib3R0b20tdG9kby1jdG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkc2NfdGl0bGUsIHtjbGFzczogJ2RzYy10aXRsZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fZGVzY3JpcHRpb24sIHtjbGFzczogJ3RvZG8tZGVzY3JpcHRpb24nfSk7XG5cbiAgICB0b2RvX3RpdGxlLmlubmVyVGV4dCA9IFRvZG8uZ2V0VGl0bGUoKTtcbiAgICB0b2RvX2RhdGUuaW5uZXJUZXh0ID0gVG9kby5nZXREYXRlKCk7XG4gICAgdG9kb19tb2RpZnlfYnRuLmlubmVyVGV4dCA9ICfinJLvuI8nO1xuICAgIHRvZG9fcmVtb3ZlX2J0bi5pbm5lclRleHQgPSAn4pyYJztcbiAgICBkc2NfdGl0bGUuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgdG9kb19kZXNjcmlwdGlvbi5pbm5lclRleHQgPSBUb2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICB0b3BfdG9kb19sZWZ0X2N0bi5hcHBlbmRDaGlsZCh0b2RvX2NoZWNrYm94KTtcbiAgICB0b3BfdG9kb19sZWZ0X2N0bi5hcHBlbmRDaGlsZCh0b2RvX3RpdGxlKTtcbiAgICB0b3BfdG9kb19yaWdodF9jdG4uYXBwZW5kQ2hpbGQodG9kb19kYXRlKTtcbiAgICB0b3BfdG9kb19yaWdodF9jdG4uYXBwZW5kQ2hpbGQodG9kb19tb2RpZnlfYnRuKTtcbiAgICB0b3BfdG9kb19yaWdodF9jdG4uYXBwZW5kQ2hpbGQodG9kb19yZW1vdmVfYnRuKTtcbiAgICB0b3BfdG9kb19jdG4uYXBwZW5kQ2hpbGQodG9wX3RvZG9fbGVmdF9jdG4pO1xuICAgIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b3BfdG9kb19yaWdodF9jdG4pO1xuICAgIGJvdHRvbV90b2RvX2N0bi5hcHBlbmRDaGlsZChkc2NfdGl0bGUpO1xuICAgIGJvdHRvbV90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX2Rlc2NyaXB0aW9uKTtcbiAgICB0b2RvX2J0bi5hcHBlbmRDaGlsZCh0b3BfdG9kb19jdG4pO1xuICAgIFRhYi5hcHBlbmRDaGlsZCh0b2RvX2J0bik7XG5cbiAgICAvLyBNb2RpZnkgZm9ybSBlbGVtZW50c1xuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHNldEF0dHJpYnV0ZXModGl0bGVfaW5wdXQsIHtjbGFzczogJ21vZC10aXRsZS1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uX2lucHV0LCB7Y2xhc3M6ICdtb2QtZGVzY3JpcHRpb24taW5wdXQnLCBjb2xzOiAnMzAnLCByb3dzOiAnMTAnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkYXRlX2lucHV0LCB7Y2xhc3M6ICdtb2QtZGF0ZS1pbnB1dCcsIHR5cGU6ICdkYXRlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoc3VibWl0X2J0biwge2NsYXNzOiAnbW9kLXN1Ym1pdC1idG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxfYnRuLCB7Y2xhc3M6ICdtb2QtY2FuY2VsLWJ0bid9KTtcblxuICAgIHN1Ym1pdF9idG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsX2J0bi5pbm5lclRleHQgPSAn4pyYJztcbiAgICB0aXRsZV9pbnB1dC52YWx1ZSA9IFRvZG8uZ2V0VGl0bGUoKTtcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZSA9IFRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBkYXRlX2lucHV0LnZhbHVlID0gVG9kby5nZXREYXRlKCk7XG5cbiAgICB0b2RvX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2tlZCBUb2RvIScpOyAvLyBsb2dcblxuICAgICAgICBpZiAodG9kb19idG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICAgICAgICB0b2RvX2J0bi5yZW1vdmVDaGlsZChib3R0b21fdG9kb19jdG4pO1xuICAgICAgICAgICAgdG9kb19idG4uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9fYnRuLmFwcGVuZENoaWxkKGJvdHRvbV90b2RvX2N0bik7XG4gICAgICAgICAgICB0b2RvX2J0bi5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRvZG9fbW9kaWZ5X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRvZG9fYnRuLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgdG9kb19idG4uYXBwZW5kQ2hpbGQoYm90dG9tX3RvZG9fY3RuKTtcbiAgICAgICAgICAgIHRvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2RvX3RpdGxlLnJlcGxhY2VXaXRoKHRpdGxlX2lucHV0KTtcbiAgICAgICAgdG9kb19kZXNjcmlwdGlvbi5yZXBsYWNlV2l0aChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gICAgICAgIHRvZG9fZGF0ZS5yZXBsYWNlV2l0aChkYXRlX2lucHV0KTtcbiAgICAgICAgdG9kb19tb2RpZnlfYnRuLnJlcGxhY2VXaXRoKHN1Ym1pdF9idG4pO1xuICAgICAgICB0b2RvX3JlbW92ZV9idG4ucmVwbGFjZVdpdGgoY2FuY2VsX2J0bik7XG4gICAgfSlcblxuICAgIHRvZG9fcmVtb3ZlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbm5hIGRvIHRoYXQ/Jyk7XG4gICAgICAgIGlmIChyZXNwb25zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGVsZXRlVG9kbyhQcm9qZWN0LmdldE5hbWUoKSwgVG9kby5nZXRJZCgpKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0b2RvX2NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGRlbGV0ZVRvZG8oUHJvamVjdC5nZXROYW1lKCksIFRvZG8uZ2V0SWQoKSk7XG4gICAgfSlcblxuICAgIHRvZG9fZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICB0b2RvX2Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuXG4gICAgdGl0bGVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cbiAgICBkZXNjcmlwdGlvbl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcblxuICAgIGRhdGVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pXG5cbiAgICBzdWJtaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBQcm9qZWN0Lm1vZGlmeVRvZG8oVG9kby5nZXRJZCgpLCB0aXRsZV9pbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsIGRhdGVfaW5wdXQudmFsdWUpO1xuXG4gICAgICAgIHRvZG9fdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVfaW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG9fZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25faW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG9fZGF0ZS5pbm5lclRleHQgPSBkYXRlX2lucHV0LnZhbHVlO1xuXG4gICAgICAgIHRpdGxlX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fdGl0bGUpO1xuICAgICAgICBkZXNjcmlwdGlvbl9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgZGF0ZV9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2RhdGUpO1xuICAgICAgICBzdWJtaXRfYnRuLnJlcGxhY2VXaXRoKHRvZG9fbW9kaWZ5X2J0bik7XG4gICAgICAgIGNhbmNlbF9idG4ucmVwbGFjZVdpdGgodG9kb19yZW1vdmVfYnRuKTtcbiAgICB9KVxuXG4gICAgY2FuY2VsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGl0bGVfaW5wdXQucmVwbGFjZVdpdGgodG9kb190aXRsZSk7XG4gICAgICAgIGRlc2NyaXB0aW9uX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fZGVzY3JpcHRpb24pO1xuICAgICAgICBkYXRlX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fZGF0ZSk7XG4gICAgICAgIHN1Ym1pdF9idG4ucmVwbGFjZVdpdGgodG9kb19tb2RpZnlfYnRuKTtcbiAgICAgICAgY2FuY2VsX2J0bi5yZXBsYWNlV2l0aCh0b2RvX3JlbW92ZV9idG4pO1xuICAgIH0pXG5cbn1cblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XG4gICAgfSk7XG59ICBcblxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBjcmVhdGVUb2RvLFxuICAgIG9wZW5Qcm9qZWN0XG59XG4iLCJjb25zdCB1bmlxdWVJZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbn1cblxuZXhwb3J0IHtcbiAgICB1bmlxdWVJZFxufSIsImltcG9ydCB7VG9kb30gZnJvbSBcIi4vdG9kby5qc1wiXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcblxuY29uc3QgUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIGxldCBpZCA9IG5hbWU7XG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBsZXQgZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBsZXQgc2V0TmFtZSA9IGZ1bmN0aW9uKG5ld19uYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuZXdfbmFtZTtcbiAgICB9XG5cbiAgICBsZXQgYWRkVG9kbyA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUpIHtcbiAgICAgICAgbGV0IFRvZG9PQkogPSBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUpO1xuICAgICAgICB0b2Rvcy5wdXNoKFRvZG9PQkopO1xuICAgICAgICBTdG9yYWdlLmFkZFRvZG8oaWQsIFRvZG9PQkouZ2V0SWQoKSwgVG9kb09CSi5nZXRUYWJsZSgpKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRvZG8gQURERUQgaW4gJHtuYW1lfWApOyAvLyBsb2dcbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlVG9kbyA9IGZ1bmN0aW9uKHRvZG9faWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRvZG9zW2ldLmdldElkKCkgPT09IHRvZG9faWQpIHtcbiAgICAgICAgICAgICAgICB0b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgU3RvcmFnZS5yZW1vdmVUb2RvKGlkLCB0b2RvX2lkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVG9kbyBSRU1PVkVEIGZyb20gJHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1vZGlmeVRvZG8gPSBmdW5jdGlvbih0b2RvX2lkLCBuZXdfdGl0bGUsIG5ld19kZXNjcmlwdGlvbiwgbmV3X2R1ZV9kYXRlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0b2Rvc1tpXS5nZXRJZCgpID09PSB0b2RvX2lkKSB7XG4gICAgICAgICAgICAgICAgdG9kb3NbaV0uc2V0VGl0bGUobmV3X3RpdGxlKTtcbiAgICAgICAgICAgICAgICB0b2Rvc1tpXS5zZXREZXNjcmlwdGlvbihuZXdfZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHRvZG9zW2ldLnNldERhdGUobmV3X2R1ZV9kYXRlKTtcbiAgICAgICAgICAgICAgICBTdG9yYWdlLm1vZGlmeVRvZG8oaWQsIHRvZG9zW2ldLmdldElkKCksIHRvZG9zW2ldLmdldFRhYmxlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2RvIE1PRElGSUVEIGluICR7bmFtZX0nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBnZXRMYXN0VG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdG9kb3NbdG9kb3MubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgbGV0IGdldFRvZG9CeUlkID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgZm9yIChsZXQgdG9kbyBpbiB0b2Rvcykge1xuICAgICAgICAgICAgaWYgKGlkID09PSB0b2RvLmdldElkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIHNldE5hbWUsXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG8sXG4gICAgICAgIG1vZGlmeVRvZG8sXG4gICAgICAgIGdldExhc3RUb2RvLFxuICAgICAgICBnZXRUb2RvQnlJZFxuICAgIH1cbn1cblxuXG5leHBvcnQge1xuICAgIFByb2plY3QsIFxufSIsImltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnXG5cbmNvbnN0IFByb2plY3RzID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbmV3X3Byb2plY3QgPSBQcm9qZWN0KG5hbWUpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld19wcm9qZWN0KTtcbiAgICAgICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTmV3IHByb2plY3QgKCAke25ld19wcm9qZWN0LmdldE5hbWUoKX0gKSBoYXMgYmVlbiBDUkVBVEVEIWApOyAvLyBsb2cgXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3RfbmFtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0uZ2V0TmFtZSgpID09PSBwcm9qZWN0X25hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCAoICR7cHJvamVjdHNbaV0uZ2V0TmFtZSgpfSApIGhhcyBiZWVuIFJFTU9WRUQhYCk7IC8vIGxvZ1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbW92ZVByb2plY3QocHJvamVjdF9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmFtZVByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0X25hbWUsIG5ld19uYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1tpXS5nZXROYW1lKCkgPT09IHByb2plY3RfbmFtZSAmJiBwcm9qZWN0X25hbWUgIT09IG5ld19uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgXCIke3Byb2plY3RfbmFtZX1cIiBoYXMgYmVlbiBSRU5BTUVEIGludG8gXCIke25ld19uYW1lfVwiIWApOyAvLyBsb2dcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXROYW1lKG5ld19uYW1lKTtcbiAgICAgICAgICAgICAgICBTdG9yYWdlLnJlbmFtZVByb2plY3QocHJvamVjdF9uYW1lLCBuZXdfbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmludFByb2plY3RzQnlOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0TmFtZSgpKTsgLy8gbG9nXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRMYXN0RWxlbWVudElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5pZDtcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5Qcm9qZWN0QnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV4aXN0cyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IHByb2plY3QuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICByZW5hbWVQcm9qZWN0LFxuICAgICAgICBnZXRMYXN0RWxlbWVudElkLFxuICAgICAgICBwcmludFByb2plY3RzQnlOYW1lLFxuICAgICAgICByZXR1cm5Qcm9qZWN0QnlOYW1lLFxuICAgICAgICBleGlzdHNcbiAgICB9XG59KSgpO1xuXG5cbmV4cG9ydCB7XG4gICAgUHJvamVjdHNcbn1cbiIsImZ1bmN0aW9uIGFkZFByb2plY3QoaWQpIHsgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgJ3t9Jyk7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QoaWQsIG5ld19uYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3X25hbWUsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaWQpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KGlkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaWQpO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvKHByb2plY3RfaWQsIHRvZG9faWQsIHRhYmxlKSB7XG4gICAgbGV0IFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RfaWQpKTtcbiAgICBQcm9qZWN0W3RvZG9faWRdID0gdGFibGU7XG4gICAgbG9jYWxTdG9yYWdlW3Byb2plY3RfaWRdID0gSlNPTi5zdHJpbmdpZnkoUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVRvZG8ocHJvamVjdF9pZCwgdG9kb19pZCwgbmV3X3RhYmxlKSB7XG4gICAgbGV0IFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RfaWQpKTtcbiAgICBQcm9qZWN0W3RvZG9faWRdID0gbmV3X3RhYmxlO1xuICAgIGxvY2FsU3RvcmFnZVtwcm9qZWN0X2lkXSA9IEpTT04uc3RyaW5naWZ5KFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvKHByb2plY3RfaWQsIHRvZG9faWQpIHtcbiAgICBsZXQgUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdF9pZCkpO1xuICAgIGRlbGV0ZSBQcm9qZWN0W3RvZG9faWRdO1xuICAgIGxvY2FsU3RvcmFnZVtwcm9qZWN0X2lkXSA9IEpTT04uc3RyaW5naWZ5KFByb2plY3QpO1xufVxuXG5sZXQgZ2V0VGFibGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgVGFibGUgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBUYWJsZVtsb2NhbFN0b3JhZ2Uua2V5KGkpXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBUYWJsZTtcbn1cblxubGV0IGNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHJlbmFtZVByb2plY3QsXG4gICAgYWRkVG9kbyxcbiAgICBtb2RpZnlUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG4gICAgZ2V0VGFibGUsXG4gICAgY2xlYXJcbn1cbiIsImltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSBcIi4vaWRfZ2VuZXJhdG9yLmpzXCI7XG5cbmNvbnN0IFRvZG8gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBkdWVfZGF0ZSA9IFwiXCIpIHtcbiAgICBcbiAgICBsZXQgaWQgPSB1bmlxdWVJZCgpOyAgICBcblxuICAgIGNvbnN0IGdldFRpdGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IGZ1bmN0aW9uKG5ld190aXRsZSkge1xuICAgICAgICB0aXRsZSA9IG5ld190aXRsZTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbihuZXdfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdfZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZHVlX2RhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgZHVlX2RhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZHVlX2RhdGU6IGR1ZV9kYXRlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJZCxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIGdldERhdGUsXG4gICAgICAgIHNldERhdGUsXG4gICAgICAgIGdldFRhYmxlXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFRvZG9cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgKiBhcyBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnXG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcydcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBsZXQgU3RvcmFnZVRhYmxlID0gU3RvcmFnZS5nZXRUYWJsZSgpO1xuICAgIFN0b3JhZ2UuY2xlYXIoKTtcblxuICAgIGZvciAobGV0IFByb2plY3ROYW1lIG9mIE9iamVjdC5rZXlzKFN0b3JhZ2VUYWJsZSkpIHtcbiAgICAgICAgbGV0IFByb2plY3QgPSBTdG9yYWdlVGFibGVbUHJvamVjdE5hbWVdO1xuICAgICAgICBFdmVudHMuY3JlYXRlUHJvamVjdChQcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgZm9yIChsZXQgVG9kb05hbWUgaW4gUHJvamVjdCkge1xuICAgICAgICAgICAgbGV0IFRvZG8gPSBQcm9qZWN0W1RvZG9OYW1lXTtcbiAgICAgICAgICAgIEV2ZW50cy5jcmVhdGVUb2RvKFByb2plY3ROYW1lLCBUb2RvWyd0aXRsZSddLCBUb2RvWydkZXNjcmlwdGlvbiddLCBUb2RvWydkdWVfZGF0ZSddKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4oZnVuY3Rpb24gbWFpbigpIHtcbiAgICBsb2FkKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9