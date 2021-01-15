import Project from '../project';
import Todo from '../todo';

test('create a new project of type project', () => {
  const newProject = new Project('test Project');
  const t = newProject instanceof Project;
  expect(t).toEqual(true);
});


test('checking update name on project', () => {
  const newProject = new Project('name1');
  newProject.updateName('name2');
  expect(newProject.name).toEqual('name2');
});

test('checking update todos on project', () => {
  const newProject = new Project('newProject');
  const newTodo = new Todo('todo1');
  newProject.updateTodos(newTodo);
  expect(newProject.todos).toEqual(["{\"title\":\"todo1\"}"]);
}); 
