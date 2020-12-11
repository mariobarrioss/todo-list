import Project from './project';

const projectList = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];

const { name } = JSON.parse(localStorage.getItem('projects'))[0];

const storeProjectList = () => {
  localStorage.setItem('projects', JSON.stringify(projectList));
};

const addProject = project => {
  projectList.push(project);
  storeProjectList();
};

const checkDefaultProject = x => {
  if (x !== 'default') {
    const defaultProject = new Project('default');
    addProject(defaultProject);
  }
};

checkDefaultProject(name);

const retrieveProjects = () => projectList;

const updateProject = (id, project) => {
  projectList.splice(id, 1, project);
  storeProjectList();
};

const deleteProject = (id) => {
  localStorage.clear();
  projectList.splice(id, 1);
  storeProjectList();
};

export {
  addProject,
  retrieveProjects,
  updateProject,
  deleteProject,
};
