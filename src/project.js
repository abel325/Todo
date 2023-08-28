import {Todo} from "./todo.js"
import { uniqueId } from "./id_generator.js";

const Project = function(name) {

    let id = uniqueId();
    let todos = [];

    let getName = function() {
        return name;
    }

    let setName = function(new_name) {
        name = new_name;
    }

    let addTodo = function(description) {
        todos.push(Todo(description));
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


export {
    Project, 
}