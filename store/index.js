import axios from 'axios';

export const state = () => ({
  tasks: []
});

export const mutations = {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    }
  };

  export const actions = {
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get('https://your-api-url/tasks');
        commit('setTasks', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createTask({ commit }, taskData) {
      try {
        const response = await axios.post('https://your-api-url/tasks', taskData);
        commit('addTask', response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };