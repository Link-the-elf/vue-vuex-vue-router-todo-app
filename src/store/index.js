import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: 1, title: 'Buy Coffee' },
      { id: 2, title: 'Buy Milk' },
    ],
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    createTodo(state, payload) {
      state.todos.push({
        id: new Date(),
        title: payload,
      });

      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
      
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
  },
});
