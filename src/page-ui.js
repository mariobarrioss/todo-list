import { retrieveProjects } from './localStorage';

function createLayout() {
  const pageContent = document.querySelector('#page-content');
  const layout = `
    <section class="hero is-medium has-bg-img">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <a id="new-project-button" class="button is-dark is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>New Project</span>
                  </a>
                </span>
                <span class="navbar-item">
                  <a id="new-todo-button" class="button is-dark is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>New Todo</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Agendum
          </h1>
          <h2 class="subtitle">
            Plan your day...
          </h2>
        </div>
      </div>

      <div class="hero-foot">
        <div id="form-section" class="container">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <aside class="menu">
              <p class="menu-label">
                projects
              </p>
              <ul id="project-list" class="menu-list">
              </ul>
            </aside>
          </div>

          <div class="column is-9">
            <div id="todo-list-content"  class="content is-medium">
            </div>
          </div>
        </div>
      </div>
    </section>`;
  pageContent.insertAdjacentHTML('beforeend', layout);
}

function displayProjects() {
  const projectList = document.querySelector('#project-list');
  const projects = retrieveProjects();

  projects.forEach(project => {
    const { name } = project;
    const itemContent = `<li><a>${name}</a></li>`;
    projectList.insertAdjacentHTML('beforeend', itemContent);
  });
}

function addNewProjectForm() {
  const formSection = document.querySelector('#form-section');
  const newProjectForm = `
    <section class="section">
      <div class="container">
        <div id="project-form" class="is-hidden">

          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" name="project-name" type="text" placeholder="Project Name">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button id="save-project-button" class="button is-success">Save Project</button>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  formSection.insertAdjacentHTML('beforeend', newProjectForm);
}

function addNewTodoForm() {
  const formSection = document.querySelector('#form-section');
  const newTodoForm = `
  <section class="section">
      <div class="container">
        <div id="todo-form" class="is-hidden">

          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" name="todo-title" type="text" placeholder="Title">
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" name="todo-description" placeholder="Description"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Pages</label>
            <div class="control">
              <input class="input" name="todo-dueDate" type="date" placeholder="Due date">
            </div>
          </div>

          <div class="field">
            <label class="label">Priority</label>
            <div class="control">
              <div class="select">
                <select name="todo-priority">
                  <option value="high">High</option>
                  <option value="normal">Normal</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button id="save-todo-button" class="button is-success">Save Todo</button>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  formSection.insertAdjacentHTML('beforeend', newTodoForm);
}

export {
  createLayout,
  displayProjects,
  addNewProjectForm,
  addNewTodoForm,
};
