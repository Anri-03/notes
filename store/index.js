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
        const response = await axios.get('https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask');
        commit('setTasks', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createTask({ commit }, taskData) {
      try {
        const response = await axios.post('https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask', taskData);
        commit('addTask', response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };