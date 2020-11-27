const projectList = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];

class Project {
  constructor(name, dueDate, items = []) {
    this.name = name;
    this.dueDate = dueDate;
    this.items = items;
  }
}
