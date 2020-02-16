const state = {
  todos: [
    {
      id: 1,
      title: "Todo 1",
      completed: false
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false
    }
  ]
};
const getters = {
  allTodos: state => state.todos
};
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
