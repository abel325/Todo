import { uniqueId } from "./id_generator.js";

const Todo = function(title, description, due_date) {
    
    let id = uniqueId();

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
        setDescription
    }
}

export {
    Todo
}
