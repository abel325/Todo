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

export {
    addProject,
    removeProject,
    renameProject,
    addTodo,
    modifyTodo,
    removeTodo,
    getTable,
    clear
}
