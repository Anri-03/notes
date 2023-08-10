<template>
  <div class="container">
    <div class="main-box">
      <h1 class="title">Дневник Дел</h1>
      <div class="add-task">
        <input v-model="newTaskText" type="text" placeholder="Введите текст...">
        <button @click="addTask" class="btn-task">new task</button>
      </div>
      <ul class="todo-list">
        <li v-for="task in tasks" :key="task.id">{{ task.text }}
          <button class="delete" @click="deleteContact(task.id)">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  data() {
    return {
      newTaskText: ''
    };
  },
  mounted() {
    this.$store.dispatch('fetchTasks');
  },
  methods: {
    deleteContact(id) {
    this.$store.dispatch('deleteContact', id);
   },
    addTask() {
      if (this.newTaskText.trim() === '') return;

      this.$store.dispatch('createTask', {
        text: this.newTaskText
      });

      this.newTaskText = '';
    }
  }
};
</script>


<style>
.title {
  margin-top: -500px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main-box {
  background-color: #f9d0d9;
  height: 700px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  border-radius: 6px;
}

.todo-list {
  margin-top: 20px;
}

.add-task {
  display: flex;
  align-items: center;
}

.add-task input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-task {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
