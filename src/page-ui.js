export function displayProjects() {
  const projectList = document.querySelector('#project-list');
  const projects = retrieveProjects();

  projects.forEach(project => {
    const item = document.createElement('li');
    const { name } = project;
    const itemContent = `<a>${name}</a>`;
    item.insertAdjacentHTML('beforeend', itemContent);
    projectList.appendChild(item);
  });
}
