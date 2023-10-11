import {Todo} from "./todo.js"
import * as Storage from './storage.js'

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
        let TodoOBJ = Todo(title, description, due_date);
        todos.push(TodoOBJ);
        Storage.addTodo(id, TodoOBJ.getId(), TodoOBJ.getTable());
        console.log(`Todo ADDED in ${name}`); // log
    }

    let removeTodo = function(todo_id) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].getId() === todo_id) {
                todos.splice(i, 1);
                Storage.removeTodo(id, todo_id);
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
                Storage.modifyTodo(id, todos[i].getId(), todos[i].getTable());
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


export {
    Project, 
}