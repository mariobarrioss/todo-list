class Project {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }

  updateName(name) {
    this.name = name;
  }

  updateTodos(todo) {
    this.todos.push(JSON.stringify(todo));
  }
}

export default Project;
