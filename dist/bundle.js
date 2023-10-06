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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    font-size: 100%;    \n}\n\n\ntextarea:focus, input:focus {\n    outline: none;\n}\n\nhtml, body {\n    height: 100%;\n    overflow: hidden;\n}\n\n/* PAGE CONTAINER */\n\n#container {\n    height: 100vh;\n    background-color: rgb(40, 40, 40);\n    display: grid;\n    grid-template: repeat(7, 1fr) / repeat(5, 1fr);\n}\n\n\n/* Header (Title of Page) */\n\n#header {\n    background-color: rgb(41, 45, 47);\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    height: 100%;\n\n    font-weight: bold;\n    font-size: 64px;\n    padding-left: 20px;\n    padding-right: 20px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    \n\n\n}\n\n\n/* NAVIGATION BAR */\n\n#nav {\n    background-color: rgb(38, 41, 42);\n    grid-row: 2 / -1;\n    grid-column: 1 / 2;\n\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    padding: 20px;\n}\n\n#today, #this-week {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 700;\n    text-align: center;\n    flex-grow: 3;\n    overflow-wrap: break-word;\n}\n\n#today:hover, #this-week:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n#nav-open-close {\n    display: none;\n    width: 100px;\n}\n\n#nav-open-close:hover {\n    cursor: pointer;\n}\n\n#p-title {\n    font-weight: bold;\n    font-size: 200%;\n    text-align: center;\n}\n\n\n/* Console of Navigation */\n\n#nav > #console {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    position: relative;\n}\n\n#nav > #console * {\n    box-sizing: border-box;\n}\n\n#nav > #console > #input-container {\n    display: flex;\n}\n\n#input-container > #p-name-input {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n    flex-grow: 1;\n}\n\n#p-name-input:focus {\n    outline: none;\n}\n\n#input-container > #create-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n}\n\n#input-container > #create-project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    color: rgb(180, 249, 249);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n\n/* Nav Projects */\n\n#nav > #projects {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n    gap: 10px;\n    height: 100%;\n\n    overflow-y: auto;\n}\n\n.project-btn-ctn {\n    display: flex;\n}\n\n.project-btn-ctn > .project-btn {\n    width: 70%;\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    text-align: center;\n    flex-grow: 3;\n    overflow-wrap: break-word;\n}\n\n.project-btn-ctn > .project-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.project-btn-ctn > .mod-project-name-btn {\n    background-color: rgb(41, 45, 47);\n    text-align: center;\n    padding: 10px;\n    border: 1px rgb(61, 65, 67) solid;\n    font-size: 80%;\n}\n\n.project-btn-ctn > .mod-project-name-btn:hover {\n    border: 1px cyan solid;\n    cursor: pointer;\n}\n\n.project-btn-ctn > .delete-project-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n    text-align: center;\n}\n\n.project-btn-ctn > .delete-project-btn:hover {\n    background-color: rgb(36, 40, 42);\n    color: crimson;\n    border-color: crimson;\n    \n    cursor: pointer;\n}\n\n.mod-project-name-input {\n    width: 70%;\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 14px 0px 0px 14px;\n    padding: 10px 10px;\n    font-size: 90%;\n    text-align: center;\n    flex-grow: 1;\n    overflow-wrap: break-word;\n}\n\n.mod-project-name-sub-btn {\n    background-color: rgb(41, 45, 47);\n    text-align: center;\n    padding: 10px;\n    font-size: 90%;\n    border: 1px rgb(61, 65, 67) solid;\n}\n\n.mod-project-name-sub-btn:hover {\n    background-color: rgb(36, 40, 42);\n    border: 1px cyan solid;\n    cursor: pointer;\n}\n\n.mod-project-name-cancel-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 0px 14px 14px 0px;\n    padding: 10px 10px;\n    font-size: 90%;\n    font-weight: 500;\n    text-align: center;\n}\n\n.mod-project-name-cancel-btn:hover {\n    background-color: rgb(36, 40, 42);\n    color: cyan;\n    border-color: cyan;\n    \n    cursor: pointer;\n}\n\n/* PROJECT SCREEN */\n\n#screen {\n    background-color: rgb(34, 37, 38);\n    grid-row: 2 / -1;\n    grid-column: 2 / -1;\n}\n\n.tab {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    height: 100%;\n    gap: 20px;\n    align-items: center;\n}\n\n.add-todo-btn {\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 5px;\n    font-size: 100%;\n    padding: 10px;\n    width: 80%;\n    text-align: start;\n}\n\n.add-todo-btn:hover {\n    background-color: rgb(46, 50, 52);\n    cursor: pointer;\n    border-color: cyan;\n}\n\n.todo-form {\n    width: 80%;\n    /* display: flex; */\n    flex-direction: column;\n    border: 1px solid rgb(56, 60, 62);\n}\n\n.add-todo-top-box {\n    display: flex;\n    flex-direction: column;\n}\n\n.add-todo-bottom-row {\n    display: flex; \n}\n\n.title-input, .description-input {\n    border: none;\n    background-color: rgb(41, 45, 47);\n    padding: 10px;\n    margin: 5px;\n}\n\n.title-input, .description-input:focus {\n    outline: none;\n}\n\n.description-input {\n    resize: none;\n}\n\n.date-input {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    border: none;\n}\n\n.date-input:focus {\n    outline: none;\n}\n\n.submit-btn {\n    margin: 5px;\n    padding: 5px;\n    background-color: rgb(41, 45, 47);\n    min-width: 100px;\n    border: 1px rgb(46, 50, 52) solid;\n    border-radius: 5px;\n}\n\n.submit-btn:hover {\n    background-color: rgb(46, 50, 52);\n    border-color: cyan;\n    cursor: pointer;\n}\n\n.cancel-form {\n    margin-left: auto;\n    margin-right: 5px;\n    font-size: 135%;\n    background-color: rgb(34, 37, 38);\n    border: none;\n    padding: 5px;\n    text-align: center;\n}\n\n.cancel-form:hover {\n    color: crimson;\n    cursor: pointer;\n}\n\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    background-color: rgb(41, 45, 47);\n    border: 1px rgb(61, 65, 67) solid;\n    border-radius: 5px;\n    /* font-size: 15px; */\n    padding: 10px;\n    width: 80%;\n    text-align: start;\n}\n\n.top-todo-ctn {\n    width: 100%;\n    display: flex;\n    /* flex-direction: column;  */\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    font-size: 100%;\n}\n\n.top-todo-left-ctn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.top-todo-right-ctn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.bottom-todo-ctn {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 10px;\n}\n\n.todo-checkbox:hover {\n    cursor: pointer;\n}\n\n.todo-date {\n    margin-right: 10px;\n    width: max-content;\n}\n\n.todo-title {\n    flex-grow: 4;\n    /* width: 70%; */\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.todo-modify {\n    background-color: transparent;\n    border: none;\n}\n\n.todo-remove {\n    background-color: transparent;\n    border: none;\n}\n\n\n.mod-title-input {\n    /* width: fit-content; */\n    flex-grow: 4;\n    background-color: transparent;\n    border: 1px solid rgb(61, 65, 67);\n    border-radius: 5px;\n    padding: 5px;\n    font-size: 100%;\n}\n\n.mod-description-input {\n    border: 1px solid rgb(61, 65, 67);\n    /* background-color: rgb(41, 45, 47); */\n    background-color: transparent;\n    resize: none;\n    font-size: 100%;\n    padding: 5px;\n\n    width: 100%;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;  \n    \n}\n\n.mod-date-input {\n    background-color: rgb(34, 37, 38);\n    padding: 5px;\n    border: none;\n    font-size: 100%;\n    /* width: 12%; */\n}\n\n.mod-submit-btn {\n    background-color: rgb(34, 37, 38);\n    padding: 5px;\n    /* width: 10%; */\n    border: 1px rgb(46, 50, 52) solid;\n    border-radius: 5px;\n}\n\n.mod-cancel-btn {\n    background-color: transparent;\n    border: none;\n    font-size: 135%;\n    border: none;\n    padding: 5px;\n    text-align: center;\n    /* width: 3%; */\n}\n\n.mod-submit-btn:hover {\n    cursor: pointer;\n    border-color: cyan;\n}\n\n.mod-cancel-btn:hover {\n    cursor: pointer;\n    color: cyan;\n}\n\n\n.todo:hover {\n    background-color: rgb(46, 50, 52);\n    cursor: pointer;\n    border-color: purple;\n}\n\n.todo-modify:hover {\n    cursor: pointer;\n}\n\n.todo-remove:hover {\n    cursor: pointer;\n    color: crimson;\n}\n\n\n\n\n.inactive, .hide {\n    display: none;\n}\n\n.active, .show {\n    display: flex;\n}\n\n/* Miscellaneous */\n\n/* ::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n} */\n\n\n\n/* width */\n::-webkit-scrollbar {\n    width: 8px; /* you can shrink taken width */\n    display: none;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent; \n  }\n   \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background:#555; \n  }\n  \n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #444; \n  }\n\n\n\n#border-purple {\n    border: 1px solid purple;\n}\n\n\n@media only screen and (max-width: 910px) {\n    #nav {\n        display: none;\n        position: absolute;\n        /* height: 79%; */\n        top: 15%;  \n        left: 2.5%;    \n        right: 2.5%;    \n        bottom: 1%;   \n    }\n\n    #nav-open-close {\n        display: block;\n        background-color: transparent;\n    }\n\n    #screen {\n        grid-row: 2 / -1;\n        grid-column: 1 / -1;\n    }\n\n    \n}\n\n\n@media only screen and (max-width: 665px) {\n    .top-todo-ctn {\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   createInitialProjects: () => (/* binding */ createInitialProjects),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   openProject: () => (/* binding */ openProject)
/* harmony export */ });
/* harmony import */ var _project_group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_group.js */ "./src/project_group.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




(function() {
    const create_project_btn = document.querySelector('#create-project-btn');
    const project_name_input = document.querySelector('#p-name-input');
    const menu_toggle_btn = document.querySelector('#nav-open-close');
    const nav = document.querySelector('#nav');
    const today_btn = document.getElementById('today');
    const this_week_btn = document.getElementById('this-week');

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
            console.log(nav.style.display);
            nav.style.display = 'flex';
        } else if (nav.style.display == 'flex') {
            console.log(nav.style.display);
            nav.style.display = '';
        }
    });


})();

function createInitialProjects(name1, name2) {
    _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.addProject(name1);
    createProjectTab(name1);

    _project_group_js__WEBPACK_IMPORTED_MODULE_0__.Projects.addProject(name2);
    createProjectTab(name2);
}

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
        // const project_btns = document.querySelectorAll('project-btn');
        // for (let btn of project_btns) {
        //     if (btn.getAttribute('id') === 'border-purple') {
        //         btn.removeAttribute('id');
        //     }
        // }
        // project_btn.setAttribute('id', 'border-purple'); // not working for now, have to fix later maybe
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

    Project.setName(new_name);
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

        console.log(`Project name is: ${name}`);
        console.log(`the title is: ${title_input.value}`);
        console.log(`description is: ${description_input.value}`);
        console.log(`date is: ${date_input.value}`);

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
    // top_todo_ctn.appendChild(todo_date);
    // top_todo_ctn.appendChild(todo_modify_btn);
    // top_todo_ctn.appendChild(todo_remove_btn);
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



_events_js__WEBPACK_IMPORTED_MODULE_1__.createInitialProjects('today', 'this-week');


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOzs7O0FBSUY7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksaUJBQWlCLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxh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VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ2lCOztBQUVyQyw2REFBNEI7OztBQUc1QixxREFBb0I7QUFDcEIsa0RBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0IsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaWRfZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0X2dyb3VwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTAwJTsgICAgXG59XG5cblxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogUEFHRSBDT05UQUlORVIgKi9cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNywgMWZyKSAvIHJlcGVhdCg1LCAxZnIpO1xufVxuXG5cbi8qIEhlYWRlciAoVGl0bGUgb2YgUGFnZSkgKi9cblxuI2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBcblxuXG59XG5cblxuLyogTkFWSUdBVElPTiBCQVIgKi9cblxuI25hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0MSwgNDIpO1xuICAgIGdyaWQtcm93OiAyIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jdG9kYXksICN0aGlzLXdlZWsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAzO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbiN0b2RheTpob3ZlciwgI3RoaXMtd2Vlazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuYXYtb3Blbi1jbG9zZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbiNuYXYtb3Blbi1jbG9zZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKiBDb25zb2xlIG9mIE5hdmlnYXRpb24gKi9cblxuI25hdiA+ICNjb25zb2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI25hdiA+ICNjb25zb2xlICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNuYXYgPiAjY29uc29sZSA+ICNpbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNpbnB1dC1jb250YWluZXIgPiAjcC1uYW1lLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuI3AtbmFtZS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuI2lucHV0LWNvbnRhaW5lciA+ICNjcmVhdGUtcHJvamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgY29sb3I6IHJnYigxODAsIDI0OSwgMjQ5KTtcbiAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qIE5hdiBQcm9qZWN0cyAqL1xuXG4jbmF2ID4gI3Byb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAucHJvamVjdC1idG4ge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IDBweCAwcHggMTRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMztcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4ucHJvamVjdC1idG4tY3RuID4gLnByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5tb2QtcHJvamVjdC1uYW1lLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBmb250LXNpemU6IDgwJTtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5tb2QtcHJvamVjdC1uYW1lLWJ0bjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggY3lhbiBzb2xpZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWJ0bi1jdG4gPiAuZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3QtYnRuLWN0biA+IC5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBib3JkZXItY29sb3I6IGNyaW1zb247XG4gICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kLXByb2plY3QtbmFtZS1pbnB1dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5tb2QtcHJvamVjdC1uYW1lLXN1Yi1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG59XG5cbi5tb2QtcHJvamVjdC1uYW1lLXN1Yi1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcbiAgICBib3JkZXI6IDFweCBjeWFuIHNvbGlkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZC1wcm9qZWN0LW5hbWUtY2FuY2VsLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTRweCAxNHB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2QtcHJvamVjdC1uYW1lLWNhbmNlbC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcbiAgICBjb2xvcjogY3lhbjtcbiAgICBib3JkZXItY29sb3I6IGN5YW47XG4gICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBQUk9KRUNUIFNDUkVFTiAqL1xuXG4jc2NyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xufVxuXG4udGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtdG9kby1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5hZGQtdG9kby1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xufVxuXG4udG9kby1mb3JtIHtcbiAgICB3aWR0aDogODAlO1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTYsIDYwLCA2Mik7XG59XG5cbi5hZGQtdG9kby10b3AtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hZGQtdG9kby1ib3R0b20tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbn1cblxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kZXNjcmlwdGlvbi1pbnB1dCB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uZGF0ZS1pbnB1dCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5kYXRlLWlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhbmNlbC1mb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDEzNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FuY2VsLWZvcm06aG92ZXIge1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4udG9kbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi50b3AtdG9kby1jdG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICovXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLnRvcC10b2RvLWxlZnQtY3RuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udG9wLXRvZG8tcmlnaHQtY3RuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYm90dG9tLXRvZG8tY3RuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRvZG8tY2hlY2tib3g6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZG8tZGF0ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnRvZG8tdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogNDtcbiAgICAvKiB3aWR0aDogNzAlOyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50b2RvLW1vZGlmeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udG9kby1yZW1vdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuXG4ubW9kLXRpdGxlLWlucHV0IHtcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXG4gICAgZmxleC1ncm93OiA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjUsIDY3KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLm1vZC1kZXNjcmlwdGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICBcbiAgICBcbn1cblxuLm1vZC1kYXRlLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgLyogd2lkdGg6IDEyJTsgKi9cbn1cblxuLm1vZC1zdWJtaXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8qIHdpZHRoOiAxMCU7ICovXG4gICAgYm9yZGVyOiAxcHggcmdiKDQ2LCA1MCwgNTIpIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vZC1jYW5jZWwtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMzUlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHdpZHRoOiAzJTsgKi9cbn1cblxuLm1vZC1zdWJtaXQtYnRuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xufVxuXG4ubW9kLWNhbmNlbC1idG46aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogY3lhbjtcbn1cblxuXG4udG9kbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbn1cblxuLnRvZG8tbW9kaWZ5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2RvLXJlbW92ZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuXG5cblxuXG4uaW5hY3RpdmUsIC5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYWN0aXZlLCAuc2hvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogTWlzY2VsbGFuZW91cyAqL1xuXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn0gKi9cblxuXG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4OyAvKiB5b3UgY2FuIHNocmluayB0YWtlbiB3aWR0aCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcbiAgfVxuICAgXG4gIC8qIEhhbmRsZSAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiM1NTU7IFxuICB9XG4gIFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ0NDsgXG4gIH1cblxuXG5cbiNib3JkZXItcHVycGxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xuICAgICNuYXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8qIGhlaWdodDogNzklOyAqL1xuICAgICAgICB0b3A6IDE1JTsgIFxuICAgICAgICBsZWZ0OiAyLjUlOyAgICBcbiAgICAgICAgcmlnaHQ6IDIuNSU7ICAgIFxuICAgICAgICBib3R0b206IDElOyAgIFxuICAgIH1cblxuICAgICNuYXYtb3Blbi1jbG9zZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAjc2NyZWVuIHtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAtMTtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICB9XG5cbiAgICBcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2NXB4KSB7XG4gICAgLnRvcC10b2RvLWN0biB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYiw4Q0FBOEM7QUFDbEQ7OztBQUdBLDJCQUEyQjs7QUFFM0I7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZOztJQUVaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7Ozs7O0FBS3ZCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNo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ZTtJQUNmLGNBQWM7QUFDbEI7Ozs7O0FBS0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxrQkFBa0I7O0FBRWxCOzs7Ozs7R0FNRzs7OztBQUlILFVBQVU7QUFDVjtJQUNJLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsYUFBYTtFQUNmOztFQUVBLFVBQVU7RUFDVjtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQSxXQUFXO0VBQ1g7SUFDRSxlQUFlO0VBQ2pCOztFQUVBLG9CQUFvQjtFQUNwQjtJQUNFLGdCQUFnQjtFQUNsQjs7OztBQUlGO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsUUFBUTtRQUNSLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztRQUNkLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7OztBQUdKOzs7QUFHQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxMDAlOyAgICBcXG59XFxuXFxuXFxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogUEFHRSBDT05UQUlORVIgKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNywgMWZyKSAvIHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgKFRpdGxlIG9mIFBhZ2UpICovXFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDY0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBcXG5cXG5cXG59XFxuXFxuXFxuLyogTkFWSUdBVElPTiBCQVIgKi9cXG5cXG4jbmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0MSwgNDIpO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI3RvZGF5LCAjdGhpcy13ZWVrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAzO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jdG9kYXk6aG92ZXIsICN0aGlzLXdlZWs6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDUwLCA1Mik7XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmF2LW9wZW4tY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbiNuYXYtb3Blbi1jbG9zZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3AtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIENvbnNvbGUgb2YgTmF2aWdhdGlvbiAqL1xcblxcbiNuYXYgPiAjY29uc29sZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI25hdiA+ICNjb25zb2xlICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jbmF2ID4gI2NvbnNvbGUgPiAjaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lciA+ICNwLW5hbWUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAwcHggMHB4IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI3AtbmFtZS1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXIgPiAjY3JlYXRlLXByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNHB4IDE0cHggMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyID4gI2NyZWF0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgY29sb3I6IHJnYigxODAsIDI0OSwgMjQ5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIE5hdiBQcm9qZWN0cyAqL1xcblxcbiNuYXYgPiAjcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY3RuID4gLnByb2plY3QtYnRuIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMztcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jdG4gPiAubW9kLXByb2plY3QtbmFtZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5tb2QtcHJvamVjdC1uYW1lLWJ0bjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IGN5YW4gc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnRuLWN0biA+IC5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDQwLCA0Mik7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBib3JkZXItY29sb3I6IGNyaW1zb247XFxuICAgIFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2QtcHJvamVjdC1uYW1lLWlucHV0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggMHB4IDBweCAxNHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLm1vZC1wcm9qZWN0LW5hbWUtc3ViLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDUsIDQ3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDYxLCA2NSwgNjcpIHNvbGlkO1xcbn1cXG5cXG4ubW9kLXByb2plY3QtbmFtZS1zdWItYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCA0MCwgNDIpO1xcbiAgICBib3JkZXI6IDFweCBjeWFuIHNvbGlkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2QtcHJvamVjdC1uYW1lLWNhbmNlbC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZC1wcm9qZWN0LW5hbWUtY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgNDAsIDQyKTtcXG4gICAgY29sb3I6IGN5YW47XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG4gICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogUFJPSkVDVCBTQ1JFRU4gKi9cXG5cXG4jc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNywgMzgpO1xcbiAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIGJvcmRlcjogMXB4IHJnYig2MSwgNjUsIDY3KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCA1MCwgNTIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogY3lhbjtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1NiwgNjAsIDYyKTtcXG59XFxuXFxuLmFkZC10b2RvLXRvcC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkLXRvZG8tYm90dG9tLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbn1cXG5cXG4udGl0bGUtaW5wdXQsIC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRpdGxlLWlucHV0LCAuZGVzY3JpcHRpb24taW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYXRlLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgNTAsIDUyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZm9udC1zaXplOiAxMzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYW5jZWwtZm9ybTpob3ZlciB7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDcpO1xcbiAgICBib3JkZXI6IDFweCByZ2IoNjEsIDY1LCA2Nykgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRvcC10b2RvLWN0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLnRvcC10b2RvLWxlZnQtY3RuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRvcC10b2RvLXJpZ2h0LWN0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib3R0b20tdG9kby1jdG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvLWNoZWNrYm94OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiA0O1xcbiAgICAvKiB3aWR0aDogNzAlOyAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRvZG8tbW9kaWZ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuXFxuLm1vZC10aXRsZS1pbnB1dCB7XFxuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG4gICAgZmxleC1ncm93OiA0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ubW9kLWRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2NSwgNjcpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQ1LCA0Nyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgXFxuICAgIFxcbn1cXG5cXG4ubW9kLWRhdGUtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM3LCAzOCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIHdpZHRoOiAxMiU7ICovXFxufVxcblxcbi5tb2Qtc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzcsIDM4KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiB3aWR0aDogMTAlOyAqL1xcbiAgICBib3JkZXI6IDFweCByZ2IoNDYsIDUwLCA1Mikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vZC1jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMzUlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiB3aWR0aDogMyU7ICovXFxufVxcblxcbi5tb2Qtc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG4ubW9kLWNhbmNlbC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBjeWFuO1xcbn1cXG5cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNTAsIDUyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLnRvZG8tbW9kaWZ5OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1yZW1vdmU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBjcmltc29uO1xcbn1cXG5cXG5cXG5cXG5cXG4uaW5hY3RpdmUsIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSwgLnNob3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBNaXNjZWxsYW5lb3VzICovXFxuXFxuLyogOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59ICovXFxuXFxuXFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDhweDsgLyogeW91IGNhbiBzaHJpbmsgdGFrZW4gd2lkdGggKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogVHJhY2sgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXFxuICB9XFxuICAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiM1NTU7IFxcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0OyBcXG4gIH1cXG5cXG5cXG5cXG4jYm9yZGVyLXB1cnBsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xcbiAgICAjbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAvKiBoZWlnaHQ6IDc5JTsgKi9cXG4gICAgICAgIHRvcDogMTUlOyAgXFxuICAgICAgICBsZWZ0OiAyLjUlOyAgICBcXG4gICAgICAgIHJpZ2h0OiAyLjUlOyAgICBcXG4gICAgICAgIGJvdHRvbTogMSU7ICAgXFxuICAgIH1cXG5cXG4gICAgI25hdi1vcGVuLWNsb3NlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgI3NjcmVlbiB7XFxuICAgICAgICBncmlkLXJvdzogMiAvIC0xO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgfVxcblxcbiAgICBcXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjVweCkge1xcbiAgICAudG9wLXRvZG8tY3RuIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZCwgZm9ybWF0LCBzZXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3Byb2plY3RfZ3JvdXAuanMnXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNyZWF0ZV9wcm9qZWN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBwcm9qZWN0X25hbWVfaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1uYW1lLWlucHV0Jyk7XG4gICAgY29uc3QgbWVudV90b2dnbGVfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1vcGVuLWNsb3NlJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuICAgIGNvbnN0IHRvZGF5X2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuICAgIGNvbnN0IHRoaXNfd2Vla19idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcy13ZWVrJyk7XG5cbiAgICBwcm9qZWN0X25hbWVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgIGlmIChldi5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGNyZWF0ZV9wcm9qZWN0X2J0bi5jbGljaygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjcmVhdGVfcHJvamVjdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHByb2plY3RfbmFtZV9pbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiAhUHJvamVjdHMuZXhpc3RzKHByb2plY3RfbmFtZV9pbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdF9uYW1lX2lucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHByb2plY3RfbmFtZV9pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkludmFsaWQgcHJvamVjdCBuYW1lISBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWVudV90b2dnbGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChuYXYuc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hdi5zdHlsZS5kaXNwbGF5KTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9IGVsc2UgaWYgKG5hdi5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmF2LnN0eWxlLmRpc3BsYXkpO1xuICAgICAgICAgICAgbmF2LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbn0pKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxQcm9qZWN0cyhuYW1lMSwgbmFtZTIpIHtcbiAgICBQcm9qZWN0cy5hZGRQcm9qZWN0KG5hbWUxKTtcbiAgICBjcmVhdGVQcm9qZWN0VGFiKG5hbWUxKTtcblxuICAgIFByb2plY3RzLmFkZFByb2plY3QobmFtZTIpO1xuICAgIGNyZWF0ZVByb2plY3RUYWIobmFtZTIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGlucHV0KSB7XG4gICAgUHJvamVjdHMuYWRkUHJvamVjdChpbnB1dCk7XG4gICAgY3JlYXRlUHJvamVjdEJ0bihpbnB1dCk7XG4gICAgY3JlYXRlUHJvamVjdFRhYihpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZSkge1xuICAgIFByb2plY3RzLnJlbW92ZVByb2plY3RCeU5hbWUobmFtZSk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bihuYW1lKTtcbiAgICBkZWxldGVQcm9qZWN0VGFiKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHByb2plY3RfbmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcbiAgICBQcm9qZWN0LmFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbiAgICBjcmVhdGVUb2RvQnV0dG9uKHByb2plY3RfbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdF9uYW1lLCB0b2RvX2lkKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcbiAgICBjb25zdCBQcm9qZWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdF9uYW1lKTtcbiAgICBjb25zdCBUb2RvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG9faWQpO1xuICAgIFByb2plY3QucmVtb3ZlVG9kbyh0b2RvX2lkKTtcbiAgICBQcm9qZWN0VGFiLnJlbW92ZUNoaWxkKFRvZG9FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ0bihuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdHNfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgY29uc3QgYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3RfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnRuJyk7XG4gICAgY29uc3QgZGVsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J0bicpO1xuICAgIGNvbnN0IG1vZGlmeV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcblxuICAgIGJ0bl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tY3RuJyk7XG4gICAgcHJvamVjdF9idG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpO1xuICAgIG1vZGlmeV9idG4uY2xhc3NMaXN0LmFkZCgnbW9kLXByb2plY3QtbmFtZS1idG4nKTtcblxuICAgIHByb2plY3RfYnRuLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgZGVsZXRlX2J0bi5pbm5lclRleHQgPSAn4pyYJztcbiAgICBtb2RpZnlfYnRuLmlubmVyVGV4dCA9ICfinJLvuI8nO1xuXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0X2J0bik7XG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RpZnlfYnRuKTtcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZV9idG4pO1xuICAgIHByb2plY3RzX25hdi5hcHBlbmRDaGlsZChidG5fY29udGFpbmVyKTtcblxuICAgIC8vIG1vZGlmeSBuYW1lXG4gICAgY29uc3QgbmFtZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHNldEF0dHJpYnV0ZXMobmFtZV9pbnB1dCwge2NsYXNzOiAnbW9kLXByb2plY3QtbmFtZS1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHN1Ym1pdF9idG4sIHtjbGFzczogJ21vZC1wcm9qZWN0LW5hbWUtc3ViLWJ0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGNhbmNlbF9idG4sIHtjbGFzczogJ21vZC1wcm9qZWN0LW5hbWUtY2FuY2VsLWJ0bid9KVxuXG4gICAgbmFtZV9pbnB1dC52YWx1ZSA9IG5hbWU7XG4gICAgc3VibWl0X2J0bi5pbm5lclRleHQgPSAn4oaqJztcbiAgICBjYW5jZWxfYnRuLmlubmVyVGV4dCA9ICfinJgnO1xuXG4gICAgbW9kaWZ5X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdF9idG4ucmVwbGFjZVdpdGgobmFtZV9pbnB1dCk7XG4gICAgICAgIG1vZGlmeV9idG4ucmVwbGFjZVdpdGgoc3VibWl0X2J0bik7XG4gICAgICAgIGRlbGV0ZV9idG4ucmVwbGFjZVdpdGgoY2FuY2VsX2J0bik7XG4gICAgfSlcblxuICAgIHN1Ym1pdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChuYW1lX2lucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdE5hbWUocHJvamVjdF9idG4uaW5uZXJUZXh0LCBuYW1lX2lucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHByb2plY3RfYnRuLmlubmVyVGV4dCA9IG5hbWVfaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBuYW1lX2lucHV0LnJlcGxhY2VXaXRoKHByb2plY3RfYnRuKTtcbiAgICAgICAgICAgIHN1Ym1pdF9idG4ucmVwbGFjZVdpdGgobW9kaWZ5X2J0bik7XG4gICAgICAgICAgICBjYW5jZWxfYnRuLnJlcGxhY2VXaXRoKGRlbGV0ZV9idG4pO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVfaW5wdXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBuYW1lIGlucHV0IScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjYW5jZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuYW1lX2lucHV0LnJlcGxhY2VXaXRoKHByb2plY3RfYnRuKTtcbiAgICAgICAgc3VibWl0X2J0bi5yZXBsYWNlV2l0aChtb2RpZnlfYnRuKTtcbiAgICAgICAgY2FuY2VsX2J0bi5yZXBsYWNlV2l0aChkZWxldGVfYnRuKTtcbiAgICB9KVxuXG4gICAgcHJvamVjdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RfYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Byb2plY3QtYnRuJyk7XG4gICAgICAgIC8vIGZvciAobGV0IGJ0biBvZiBwcm9qZWN0X2J0bnMpIHtcbiAgICAgICAgLy8gICAgIGlmIChidG4uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnYm9yZGVyLXB1cnBsZScpIHtcbiAgICAgICAgLy8gICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHByb2plY3RfYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9yZGVyLXB1cnBsZScpOyAvLyBub3Qgd29ya2luZyBmb3Igbm93LCBoYXZlIHRvIGZpeCBsYXRlciBtYXliZVxuICAgICAgICBvcGVuUHJvamVjdChuYW1lKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgZG8gdGhhdD8nKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7IGRlbGV0ZVByb2plY3QobmFtZSk7IH1cbiAgICB9KTtcblxuICAgIFxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0TmFtZShjdXJyZW50X25hbWUsIG5ld19uYW1lKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUoY3VycmVudF9uYW1lKTtcbiAgICBjb25zdCBQcm9qZWN0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudF9uYW1lKTtcbiAgICBjb25zdCB0YWJfdGl0bGUgPSBQcm9qZWN0VGFiLnF1ZXJ5U2VsZWN0b3IoJy50YWItdGl0bGUnKTtcblxuICAgIFByb2plY3Quc2V0TmFtZShuZXdfbmFtZSk7XG4gICAgUHJvamVjdFRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3X25hbWUpO1xuICAgIHRhYl90aXRsZS5pbm5lclRleHQgPSBuZXdfbmFtZTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEJ0bihuYW1lKSB7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtYnRuJyk7XG4gICAgZm9yIChsZXQgYnRuIG9mIGJ0bnMpIHtcbiAgICAgICAgaWYgKGJ0bi5pbm5lclRleHQgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYWIobmFtZSkge1xuICAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgYWRkX3RvZG9fYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdG9kb19mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHRvcF9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib3R0b21fcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkYXRlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzdWJtaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgc2V0QXR0cmlidXRlcyh0YWIsIFxuICAgICAgICB7aWQ6IGAke25hbWV9YCwgY2xhc3M6ICd0YWIgaW5hY3RpdmUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0aXRsZSwge2NsYXNzOiAndGFiLXRpdGxlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoYWRkX3RvZG9fYnRuLCBcbiAgICAgICAge2NsYXNzOiAnYWRkLXRvZG8tYnRuIHNob3cnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX2Zvcm0sIFxuICAgICAgICB7YWN0aW9uOiAnJywgY2xhc3M6ICd0b2RvLWZvcm0gaGlkZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvcF9ib3gsIFxuICAgICAgICB7Y2xhc3M6ICdhZGQtdG9kby10b3AtYm94J30pO1xuICAgIHNldEF0dHJpYnV0ZXMoYm90dG9tX3JvdywgXG4gICAgICAgIHtjbGFzczogJ2FkZC10b2RvLWJvdHRvbS1yb3cnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0aXRsZV9pbnB1dCwgXG4gICAgICAgIHt0eXBlOiAndGV4dCcsIG5hbWU6ICd0aXRsZScsIHBsYWNlaG9sZGVyOiAnRW50ZXIgdGl0bGUgaGVyZScsIGNsYXNzOiAndGl0bGUtaW5wdXQnfSk7XG4gICAgICAgIHRpdGxlX2lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uX2lucHV0LCBcbiAgICAgICAge25hbWU6ICdkZXNjcmlwdGlvbicsIGNvbHM6ICczMCcsIHJvd3M6ICcxMCcsIHBsYWNlaG9sZGVyOiAnRW50ZXIgZGVzY3JpcHRpb24gaGVyZScsIGNsYXNzOiAnZGVzY3JpcHRpb24taW5wdXQnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkYXRlX2lucHV0LCBcbiAgICAgICAge3R5cGU6ICdkYXRlJywgbmFtZTogJ2RhdGUnLCBjbGFzczogJ2RhdGUtaW5wdXQnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhzdWJtaXRfYnRuLCBcbiAgICAgICAge3R5cGU6ICdzdWJtaXQnLCBjbGFzczogJ3N1Ym1pdC1idG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxfYnRuLCBcbiAgICAgICAge3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2NhbmNlbC1mb3JtJ30pO1xuXG5cbiAgICB0YWIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhYi5hcHBlbmRDaGlsZChhZGRfdG9kb19idG4pO1xuICAgIHRhYi5hcHBlbmRDaGlsZCh0b2RvX2Zvcm0pO1xuICAgIHRvZG9fZm9ybS5hcHBlbmRDaGlsZCh0b3BfYm94KTtcbiAgICB0b2RvX2Zvcm0uYXBwZW5kQ2hpbGQoYm90dG9tX3Jvdyk7XG4gICAgdG9wX2JveC5hcHBlbmRDaGlsZCh0aXRsZV9pbnB1dCk7XG4gICAgdG9wX2JveC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9pbnB1dCk7XG4gICAgYm90dG9tX3Jvdy5hcHBlbmRDaGlsZChkYXRlX2lucHV0KTtcbiAgICBib3R0b21fcm93LmFwcGVuZENoaWxkKHN1Ym1pdF9idG4pO1xuICAgIGJvdHRvbV9yb3cuYXBwZW5kQ2hpbGQoY2FuY2VsX2J0bik7XG5cblxuICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgYWRkX3RvZG9fYnRuLmlubmVyVGV4dCA9ICfinpUgQWRkIFRvZG8nO1xuICAgIHN1Ym1pdF9idG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsX2J0bi5pbm5lclRleHQgPSAn4pyYJztcblxuXG4gICAgYWRkX3RvZG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIGFkZF90b2RvX2J0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIHRvZG9fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYFByb2plY3QgbmFtZSBpczogJHtuYW1lfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgdGhlIHRpdGxlIGlzOiAke3RpdGxlX2lucHV0LnZhbHVlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgZGVzY3JpcHRpb24gaXM6ICR7ZGVzY3JpcHRpb25faW5wdXQudmFsdWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBkYXRlIGlzOiAke2RhdGVfaW5wdXQudmFsdWV9YCk7XG5cbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgdG9kb19mb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBhZGRfdG9kb19idG4uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXG5cbiAgICAgICAgY3JlYXRlVG9kbyhuYW1lLCB0aXRsZV9pbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25faW5wdXQudmFsdWUsIGRhdGVfaW5wdXQudmFsdWUpO1xuXG4gICAgICAgIHRvZG9fZm9ybS5yZXNldCgpO1xuICAgIH0pXG5cbiAgICBjYW5jZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0b2RvX2Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgYWRkX3RvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgICB0b2RvX2Zvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG5cbiAgICBzY3JlZW4uYXBwZW5kQ2hpbGQodGFiKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhYihuYW1lKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgdGFiLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgY29uc3QgYV90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7ICAgIFxuXG4gICAgaWYgKGFfdGFiICE9PSBudWxsKSB7XG4gICAgICAgIGFfdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBhX3RhYi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgIH1cbiAgICBcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9CdXR0b24ocHJvamVjdF9uYW1lKSB7XG4gICAgY29uc3QgUHJvamVjdCA9IFByb2plY3RzLnJldHVyblByb2plY3RCeU5hbWUocHJvamVjdF9uYW1lKTtcblxuICAgIGNvbnN0IFRvZG8gPSBQcm9qZWN0LmdldExhc3RUb2RvKCk7XG5cbiAgICBjb25zdCBUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtQcm9qZWN0LmdldE5hbWUoKX1gKTtcbiAgICBjb25zdCB0b2RvX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcF90b2RvX2N0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcF90b2RvX2xlZnRfY3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9wX3RvZG9fcmlnaHRfY3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9kb19jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvZG9fbW9kaWZ5X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRvZG9fcmVtb3ZlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJvdHRvbV90b2RvX2N0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRzY190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3QgdG9kb19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHNldEF0dHJpYnV0ZXModG9kb19idG4sIHtjbGFzczogJ3RvZG8nLCBpZDogVG9kby5nZXRJZCgpfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b3BfdG9kb19jdG4sIHtjbGFzczogJ3RvcC10b2RvLWN0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvcF90b2RvX2xlZnRfY3RuLCB7Y2xhc3M6ICd0b3AtdG9kby1sZWZ0LWN0bid9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvcF90b2RvX3JpZ2h0X2N0biwge2NsYXNzOiAndG9wLXRvZG8tcmlnaHQtY3RuJ30pO1xuICAgIHNldEF0dHJpYnV0ZXModG9kb19jaGVja2JveCwge2NsYXNzOiAndG9kby1jaGVja2JveCcsIHR5cGU6ICdjaGVja2JveCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fdGl0bGUsIHtjbGFzczogJ3RvZG8tdGl0bGUnfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX2RhdGUsIHtjbGFzczogJ3RvZG8tZGF0ZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fbW9kaWZ5X2J0biwge2NsYXNzOiAndG9kby1tb2RpZnknfSk7XG4gICAgc2V0QXR0cmlidXRlcyh0b2RvX3JlbW92ZV9idG4sIHtjbGFzczogJ3RvZG8tcmVtb3ZlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoYm90dG9tX3RvZG9fY3RuLCB7Y2xhc3M6ICdib3R0b20tdG9kby1jdG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkc2NfdGl0bGUsIHtjbGFzczogJ2RzYy10aXRsZSd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKHRvZG9fZGVzY3JpcHRpb24sIHtjbGFzczogJ3RvZG8tZGVzY3JpcHRpb24nfSk7XG5cbiAgICB0b2RvX3RpdGxlLmlubmVyVGV4dCA9IFRvZG8uZ2V0VGl0bGUoKTtcbiAgICB0b2RvX2RhdGUuaW5uZXJUZXh0ID0gVG9kby5nZXREYXRlKCk7XG4gICAgdG9kb19tb2RpZnlfYnRuLmlubmVyVGV4dCA9ICfinJLvuI8nO1xuICAgIHRvZG9fcmVtb3ZlX2J0bi5pbm5lclRleHQgPSAn4pyYJztcbiAgICBkc2NfdGl0bGUuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgdG9kb19kZXNjcmlwdGlvbi5pbm5lclRleHQgPSBUb2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICB0b3BfdG9kb19sZWZ0X2N0bi5hcHBlbmRDaGlsZCh0b2RvX2NoZWNrYm94KTtcbiAgICB0b3BfdG9kb19sZWZ0X2N0bi5hcHBlbmRDaGlsZCh0b2RvX3RpdGxlKTtcbiAgICB0b3BfdG9kb19yaWdodF9jdG4uYXBwZW5kQ2hpbGQodG9kb19kYXRlKTtcbiAgICB0b3BfdG9kb19yaWdodF9jdG4uYXBwZW5kQ2hpbGQodG9kb19tb2RpZnlfYnRuKTtcbiAgICB0b3BfdG9kb19yaWdodF9jdG4uYXBwZW5kQ2hpbGQodG9kb19yZW1vdmVfYnRuKTtcbiAgICB0b3BfdG9kb19jdG4uYXBwZW5kQ2hpbGQodG9wX3RvZG9fbGVmdF9jdG4pO1xuICAgIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b3BfdG9kb19yaWdodF9jdG4pO1xuICAgIC8vIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX2RhdGUpO1xuICAgIC8vIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX21vZGlmeV9idG4pO1xuICAgIC8vIHRvcF90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX3JlbW92ZV9idG4pO1xuICAgIGJvdHRvbV90b2RvX2N0bi5hcHBlbmRDaGlsZChkc2NfdGl0bGUpO1xuICAgIGJvdHRvbV90b2RvX2N0bi5hcHBlbmRDaGlsZCh0b2RvX2Rlc2NyaXB0aW9uKTtcbiAgICB0b2RvX2J0bi5hcHBlbmRDaGlsZCh0b3BfdG9kb19jdG4pO1xuICAgIFRhYi5hcHBlbmRDaGlsZCh0b2RvX2J0bik7XG5cbiAgICAvLyBNb2RpZnkgZm9ybSBlbGVtZW50c1xuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHNldEF0dHJpYnV0ZXModGl0bGVfaW5wdXQsIHtjbGFzczogJ21vZC10aXRsZS1pbnB1dCd9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGRlc2NyaXB0aW9uX2lucHV0LCB7Y2xhc3M6ICdtb2QtZGVzY3JpcHRpb24taW5wdXQnLCBjb2xzOiAnMzAnLCByb3dzOiAnMTAnfSk7XG4gICAgc2V0QXR0cmlidXRlcyhkYXRlX2lucHV0LCB7Y2xhc3M6ICdtb2QtZGF0ZS1pbnB1dCcsIHR5cGU6ICdkYXRlJ30pO1xuICAgIHNldEF0dHJpYnV0ZXMoc3VibWl0X2J0biwge2NsYXNzOiAnbW9kLXN1Ym1pdC1idG4nfSk7XG4gICAgc2V0QXR0cmlidXRlcyhjYW5jZWxfYnRuLCB7Y2xhc3M6ICdtb2QtY2FuY2VsLWJ0bid9KTtcblxuICAgIHN1Ym1pdF9idG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgY2FuY2VsX2J0bi5pbm5lclRleHQgPSAn4pyYJztcbiAgICB0aXRsZV9pbnB1dC52YWx1ZSA9IFRvZG8uZ2V0VGl0bGUoKTtcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZSA9IFRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBkYXRlX2lucHV0LnZhbHVlID0gVG9kby5nZXREYXRlKCk7XG5cbiAgICB0b2RvX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2tlZCBUb2RvJyk7IC8vIGxvZ1xuXG4gICAgICAgIGlmICh0b2RvX2J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgIHRvZG9fYnRuLnJlbW92ZUNoaWxkKGJvdHRvbV90b2RvX2N0bik7XG4gICAgICAgICAgICB0b2RvX2J0bi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb19idG4uYXBwZW5kQ2hpbGQoYm90dG9tX3RvZG9fY3RuKTtcbiAgICAgICAgICAgIHRvZG9fYnRuLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdG9kb19tb2RpZnlfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdG9kb19idG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICAgICAgICB0b2RvX2J0bi5hcHBlbmRDaGlsZChib3R0b21fdG9kb19jdG4pO1xuICAgICAgICAgICAgdG9kb19idG4uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZG9fdGl0bGUucmVwbGFjZVdpdGgodGl0bGVfaW5wdXQpO1xuICAgICAgICB0b2RvX2Rlc2NyaXB0aW9uLnJlcGxhY2VXaXRoKGRlc2NyaXB0aW9uX2lucHV0KTtcbiAgICAgICAgdG9kb19kYXRlLnJlcGxhY2VXaXRoKGRhdGVfaW5wdXQpO1xuICAgICAgICB0b2RvX21vZGlmeV9idG4ucmVwbGFjZVdpdGgoc3VibWl0X2J0bik7XG4gICAgICAgIHRvZG9fcmVtb3ZlX2J0bi5yZXBsYWNlV2l0aChjYW5jZWxfYnRuKTtcbiAgICB9KVxuXG4gICAgdG9kb19yZW1vdmVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgZG8gdGhhdD8nKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKFByb2plY3QuZ2V0TmFtZSgpLCBUb2RvLmdldElkKCkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRvZG9fY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZGVsZXRlVG9kbyhQcm9qZWN0LmdldE5hbWUoKSwgVG9kby5nZXRJZCgpKTtcbiAgICB9KVxuXG4gICAgdG9kb19kYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICAgIHRvZG9fZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XG5cbiAgICB0aXRsZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcblxuICAgIGRlc2NyaXB0aW9uX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KVxuXG4gICAgZGF0ZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSlcblxuICAgIHN1Ym1pdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIFRvZG8uc2V0VGl0bGUodGl0bGVfaW5wdXQudmFsdWUpO1xuICAgICAgICBUb2RvLnNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlKTtcbiAgICAgICAgVG9kby5zZXREYXRlKGRhdGVfaW5wdXQudmFsdWUpO1xuXG4gICAgICAgIHRvZG9fdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVfaW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG9fZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25faW5wdXQudmFsdWU7XG4gICAgICAgIHRvZG9fZGF0ZS5pbm5lclRleHQgPSBkYXRlX2lucHV0LnZhbHVlO1xuXG4gICAgICAgIHRpdGxlX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fdGl0bGUpO1xuICAgICAgICBkZXNjcmlwdGlvbl9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2Rlc2NyaXB0aW9uKTtcbiAgICAgICAgZGF0ZV9pbnB1dC5yZXBsYWNlV2l0aCh0b2RvX2RhdGUpO1xuICAgICAgICBzdWJtaXRfYnRuLnJlcGxhY2VXaXRoKHRvZG9fbW9kaWZ5X2J0bik7XG4gICAgICAgIGNhbmNlbF9idG4ucmVwbGFjZVdpdGgodG9kb19yZW1vdmVfYnRuKTtcbiAgICB9KVxuXG4gICAgY2FuY2VsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGl0bGVfaW5wdXQucmVwbGFjZVdpdGgodG9kb190aXRsZSk7XG4gICAgICAgIGRlc2NyaXB0aW9uX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fZGVzY3JpcHRpb24pO1xuICAgICAgICBkYXRlX2lucHV0LnJlcGxhY2VXaXRoKHRvZG9fZGF0ZSk7XG4gICAgICAgIHN1Ym1pdF9idG4ucmVwbGFjZVdpdGgodG9kb19tb2RpZnlfYnRuKTtcbiAgICAgICAgY2FuY2VsX2J0bi5yZXBsYWNlV2l0aCh0b2RvX3JlbW92ZV9idG4pO1xuICAgIH0pXG5cbn1cblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XG4gICAgfSk7XG59ICBcblxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBjcmVhdGVUb2RvLFxuICAgIG9wZW5Qcm9qZWN0LFxuICAgIGNyZWF0ZUluaXRpYWxQcm9qZWN0c1xufSIsImNvbnN0IHVuaXF1ZUlkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xufVxuXG5leHBvcnQge1xuICAgIHVuaXF1ZUlkXG59IiwiaW1wb3J0IHtUb2RvfSBmcm9tIFwiLi90b2RvLmpzXCJcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSBcIi4vaWRfZ2VuZXJhdG9yLmpzXCI7XG5cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICBsZXQgaWQgPSB1bmlxdWVJZCgpO1xuICAgIGxldCB0b2RvcyA9IFtdO1xuXG4gICAgbGV0IGdldE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgbGV0IHNldE5hbWUgPSBmdW5jdGlvbihuZXdfbmFtZSkge1xuICAgICAgICBuYW1lID0gbmV3X25hbWU7XG4gICAgfVxuXG4gICAgbGV0IGFkZFRvZG8gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlKSB7XG4gICAgICAgIHRvZG9zLnB1c2goVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2RvIGFkZGVkJyk7IC8vIGxvZ1xuICAgIH1cblxuICAgIGxldCByZW1vdmVUb2RvID0gZnVuY3Rpb24odG9kb19pZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodG9kb3NbaV0uaWQgPT09IHRvZG9faWQpIHtcbiAgICAgICAgICAgICAgICB0b2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2V0TGFzdFRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRvZG9zW3RvZG9zLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIGxldCBnZXRUb2RvQnlJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGZvciAobGV0IHRvZG8gaW4gdG9kb3MpIHtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gdG9kby5nZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRvZG9zLFxuICAgICAgICBnZXROYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICByZW1vdmVUb2RvLFxuICAgICAgICBnZXRMYXN0VG9kbyxcbiAgICAgICAgZ2V0VG9kb0J5SWRcbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICBQcm9qZWN0LCBcbn0iLCJpbXBvcnQge1Byb2plY3R9IGZyb20gJy4vcHJvamVjdC5qcydcblxuY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCBuZXdfcHJvamVjdCA9IFByb2plY3QobmFtZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3X3Byb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtuZXdfcHJvamVjdC5nZXROYW1lKCl9IGhhcyBiZWVuIGNyZWF0ZWQhYCk7IC8vIGxvZyBcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdF9pZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0uaWQgPT09IHByb2plY3RfaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwcm9qZWN0c1tpXS5nZXROYW1lKCl9IGhhcyBiZWVuIFJFTU9WRUQhYCk7IC8vIGxvZ1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCeU5hbWUgPSBmdW5jdGlvbihwcm9qZWN0X25hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLmdldE5hbWUoKSA9PT0gcHJvamVjdF9uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cHJvamVjdHNbaV0uZ2V0TmFtZSgpfSBoYXMgYmVlbiBSRU1PVkVEIWApOyAvLyBsb2dcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmludFByb2plY3RzQnlOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0TmFtZSgpKTsgLy8gbG9nXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRMYXN0RWxlbWVudElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5pZDtcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5Qcm9qZWN0QnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV4aXN0cyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IHByb2plY3QuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICByZW1vdmVQcm9qZWN0QnlOYW1lLFxuICAgICAgICBnZXRMYXN0RWxlbWVudElkLFxuICAgICAgICBwcmludFByb2plY3RzQnlOYW1lLFxuICAgICAgICByZXR1cm5Qcm9qZWN0QnlOYW1lLFxuICAgICAgICBleGlzdHMsXG4gICAgfVxufSkoKTtcblxuXG5leHBvcnQge1xuICAgIFByb2plY3RzXG59XG4iLCJpbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gXCIuL2lkX2dlbmVyYXRvci5qc1wiO1xuXG5jb25zdCBUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uID0gXCJcIiwgZHVlX2RhdGUgPSBcIlwiKSB7XG4gICAgXG4gICAgbGV0IGlkID0gdW5pcXVlSWQoKTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IGZ1bmN0aW9uKG5ld190aXRsZSkge1xuICAgICAgICB0aXRsZSA9IG5ld190aXRsZTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbihuZXdfZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdfZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZHVlX2RhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgZHVlX2RhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJZCxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIGdldERhdGUsXG4gICAgICAgIHNldERhdGVcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgVG9kb1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuL2V2ZW50cy5qcydcblxuRXZlbnRzLmNyZWF0ZUluaXRpYWxQcm9qZWN0cygndG9kYXknLCAndGhpcy13ZWVrJyk7XG5cblxuRXZlbnRzLmNyZWF0ZVByb2plY3QoJ0phY2sgU3BhcnJvdycpO1xuRXZlbnRzLmNyZWF0ZVRvZG8oJ0phY2sgU3BhcnJvdycsICdUZXN0IFRvZG8gYW5kIHNvbWUgbW9yZSB0ZXh0IHRvIHRlc3Qgc29tZSB0aGluZ3MnLCBgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gXG5Mb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCBcbndoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIFxuSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIFxuSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBcbmFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5gLCAnMjAyMy0xMC0wNScpO1xuRXZlbnRzLm9wZW5Qcm9qZWN0KCdKYWNrIFNwYXJyb3cnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=