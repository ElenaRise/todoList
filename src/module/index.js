// eslint-disable-next-line @typescript-eslint/no-use-before-define
const store = window.Redux.createStore(todoReducer);

window.store = store;

const addTodo = 'ADD_TODO';

const addTodoItem = {
  type: addTodo,
  payload: 'Приготовить кушать',
};

function addTodoCreator() {
  return addTodoItem;
}

// eslint-disable-next-line no-shadow
function todoReducer(state = [], addTodoCreator) {
  // eslint-disable-next-line default-case
  if (addTodoCreator.type === addTodo) {
    return [
      ...state,
      addTodoCreator.payload];
  }

  return state;
}

const todoAddItemNode = document.getElementById('todoBtnAdd');

todoAddItemNode.addEventListener('click', () => {
  store.dispatch(addTodoCreator());
});

store.subscribe(() => {
  store.getState();
});
