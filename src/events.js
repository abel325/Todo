import { add, format, set } from 'date-fns';
import {Projects} from './project_group.js'
import { Project } from './project.js';

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
        if (project_name_input.value !== "" && !Projects.exists(project_name_input.value)) {
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
    Projects.addProject(name1);
    createProjectTab(name1);

    Projects.addProject(name2);
    createProjectTab(name2);
}

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

function createTodo(project_name, title, description, date) {
    const Project = Projects.returnProjectByName(project_name);
    Project.addTodo(title, description, date);
    createTodoButton(project_name);
}

function deleteTodo(project_name, todo_id) {
    const Project = Projects.returnProjectByName(project_name);
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
    const Project = Projects.returnProjectByName(current_name);
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
    const Project = Projects.returnProjectByName(project_name);

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



export {
    createProject,
    createTodo,
    openProject,
    createInitialProjects
}