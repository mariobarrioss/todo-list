import {
  addProject,
  retrieveProjects,
  updateProject,
  deleteProject,
  storeProjectList,
} from '../localStorage';
import Project from '../project';

test('storeProjectList should create a projects Storage object', () => {
  storeProjectList();
  expect(localStorage.getItem('projects')).toBeTruthy();
});

test('checkDefaultProject should add a default project object if projectList is empty within localStorage module', () => {
  const projectList = retrieveProjects();
  expect(projectList).toEqual([{ name: 'default', todos: [] }]);
});

test('addProject should add new project object to array', () => {
  const projectList = retrieveProjects();
  const newProject = new Project('test project');
  addProject(newProject);
  expect(projectList[1]).toEqual({ name: 'test project', todos: [] });
});

test('retrieveProjects should return the projectList array with project objects', () => {
  const projectList = retrieveProjects();
  expect(projectList).toEqual([{ name: 'default', todos: [] }, { name: 'test project', todos: [] }]);
});

test('updateProject should take a project object and replace and object within projectList', () => {
  const projectList = retrieveProjects();
  const updatedProject = new Project('updated project');
  updateProject(1, updatedProject);
  expect(projectList[1]).toEqual({ name: 'updated project', todos: [] });
});

test('deleteProject should delete a project at the specified location', () => {
  const projectList = retrieveProjects();
  const lengthBeforeDeletion = projectList.length;
  deleteProject(1);
  expect(lengthBeforeDeletion).toBe(2);
  expect(projectList.length).toBe(1);
});
