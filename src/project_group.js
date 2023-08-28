import {Project} from './project.js'

const Projects = (function() {
    let projects = [];

    const addProject = function(name) {
        const new_project = Project(name);
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
        exists,
    }
})();


export {
    Projects
}
