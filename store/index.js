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
        const response = await this.$axios.get('https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask');
        commit('setTasks', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createTask({ commit }, taskData) {
      try {
        const response = await this.$axios.post('https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask', taskData);
        commit('addTask', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteContact({ commit, dispatch}, id ) {
       try {

           const url = `https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask/${id}`

           await this.$axios(url, {
               method: 'DELETE'
           })

       } catch(e) {
           console.log(e)
       } finally {
          dispatch('fetchTasks');
           alert('Deleted user by id - ' + id)
       }
    }
  };