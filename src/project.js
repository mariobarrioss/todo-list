class Project {
  constructor(name, dueDate, items = []) {
    this.name = name;
    this.dueDate = dueDate;
    this.items = items;
  }

  updateName(name) {
    this.name = name;
  }

  updateDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  updateItems(items) {
    this.items.push(items);
  }
}

export default Project;
