import {Projects} from './project_group.js'

(function() {
    const create_project_btn = document.querySelector('#create-project-btn');
    const project_name_input = document.querySelector('#p-name-input');

    project_name_input.addEventListener('keydown', function(ev) {
        if (ev.key === 'Enter') {
            create_project_btn.click();
        }
    });

    create_project_btn.addEventListener('click', function() {
        if (project_name_input.value !== "" && !Projects.exists(project_name_input.value)) {
            createProject(project_name_input.value);
            project_name_input.value = "";
        } else {
            alert("Invalid project name! Please try again.");
        }
    });
})();

function createProject(input) {
    Projects.addProject(input);
    createProjectBtn(input);
    createProjectTab(input);
}

function deleteProject(name) {
    Projects.removeProjectByName(name);
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


    // project_btn.addEventListener('dblclick', () => {
    //     console.log('Double clicked!');
    // });

    // project_btn.onclick = event => {
    //     if (event.detail === 1) {
    //       openProject(name);
    //     } else if (event.detail === 2) {
    //         console.log('double clicked!');
    //     }
    //  };

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

    tab.setAttribute('id', name);
    tab.classList.add('tab');
    tab.classList.add('inactive');
    // tab.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);   
    

    const title = document.createElement('h1');
    title.innerText = name;
    
    const create_todo_ctn = document.createElement('div');
    const todo_description_input = document.createElement('input');



    tab.appendChild(title);
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

