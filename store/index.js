export const state = () => ({
  tasks: []
});

export const mutations = {
    editClick(state, tasks) {
      state.task = tasks
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteallTask(state) {
      state.tasks = [];
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
        taskData.createTime = new Date().toISOString();
        const response = await this.$axios.post('https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask', taskData);
        commit('addTask', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteAllTask({ commit, state } ){
    const taskIds = state.tasks.map(task => task.id);
     const urlBase = `https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask`
      try {
        for (const id of taskIds) {
          const url = `${urlBase}/${id}`;
          await this.$axios.delete(url);
       }
       commit('deleteallTask');
      } catch (error) {
        console.error(error);
      }finally {
        confirm('вы хотите удалить все задачи')
      }
    },
    
    async editClick({ commit, dispatch }, { id, task }) {
      try {
          commit('setLoading', true)

          const url = `https://64cf6ca4ffcda80aff51d62f.mockapi.io/todoTask/${id}`
          
          const body = {
              task
          }

          console.log(body)
          await axios.put(url, body)

      } catch(e) {
          console.log(e)
          alert(e.message)
          commit('setLoading', false)
      } finally {
          dispatch('fetchTasks')

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
           alert('task' + id)
       }
    }
  };