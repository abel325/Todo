import './style.css'
import * as Events from './events.js'
import * as Storage from './storage.js'

function load() {
    let StorageTable = Storage.getTable();
    Storage.clear();

    for (let ProjectName of Object.keys(StorageTable)) {
        let Project = StorageTable[ProjectName];
        Events.createProject(ProjectName);

        for (let TodoName in Project) {
            let Todo = Project[TodoName];
            Events.createTodo(ProjectName, Todo['title'], Todo['description'], Todo['due_date']);
        }
    }
}


(function main() {
    load();
})();
