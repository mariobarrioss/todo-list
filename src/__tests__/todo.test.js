import Todo from '../todo';

test('expect the todo object to be of type todo', () => {
  const newTodo = new Todo('todo');
  const t = newTodo instanceof Todo;
  expect(t).toEqual(true);
});

test('testing update title function', () => {
  const newTodo = new Todo();
  newTodo.updateTitle('todo');
  expect(newTodo.title).toEqual('todo');
});

test('testing update description function', () => {
  const newTodo = new Todo();
  newTodo.updateDescription('description');
  expect(newTodo.description).toEqual('description');
});

test('testing update duedate function', () => {
  const newTodo = new Todo();
  newTodo.updateDueDate('20/12/2020');
  expect(newTodo.dueDate).toEqual('20/12/2020');
});

test('testing update priority function', () => {
  const newTodo = new Todo();
  newTodo.updatePriority('medium');
  expect(newTodo.priority).toEqual('medium');
});
