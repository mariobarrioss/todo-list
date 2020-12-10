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

export {
  createLayout,
  displayProjects,
};
