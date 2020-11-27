const projectList = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];

const storeProjectList = () => {
  localStorage.setItem('projects', JSON.stringify(projectList));
};

const addProject = (project) => {
  projectList.push(project);
  storeProjectList();
};

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
