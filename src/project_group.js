import {Project} from './project.js'
import * as Storage from './storage.js'

const Projects = (function() {
    let projects = [];

    const addProject = function(name) {
        const new_project = Project(name);
        projects.push(new_project);
        Storage.addProject(name);
        console.log(`New project ( ${new_project.getName()} ) has been CREATED!`); // log 
    }

    const removeProject = function(project_name) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].getName() === project_name) {
                console.log(`Project ( ${projects[i].getName()} ) has been REMOVED!`); // log
                projects.splice(i, 1);
                Storage.removeProject(project_name);
                break;
            }
        }
    }

    const renameProject = function(project_name, new_name) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].getName() === project_name && project_name !== new_name) {
                console.log(`Project "${project_name}" has been RENAMED into "${new_name}"!`); // log
                projects[i].setName(new_name);
                Storage.renameProject(project_name, new_name);
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


export {
    Projects
}
