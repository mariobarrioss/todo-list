import { addProject, retrieveProjects } from '../localStorage';
import Project from '../project';

test('addProject should add new project object to array', () => {
  const projectList = retrieveProjects();
  const newProject = new Project('test project');
  addProject(newProject);
  expect(projectList[1]).toEqual({ name: 'test project', todos: [] });
});
