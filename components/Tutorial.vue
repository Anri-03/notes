<template>
  <div class="container">
    <div class="main-box">
      <h1 class="title">Дневник Дел</h1>
      <div class="add-task">
        <input v-model="newTaskText" type="text" placeholder="Введите текст...">
        <button @click="addTask" class="btn-task">new task</button>
        <button @click="deleteallTask" class="btn-dall">delete all</button>
      </div>
      <ul class="todo-list">
      <li v-for="task in tasks" :key="task.id">
       {{ task.text }} (Создано: {{ task.createTime }}) 
       <button class="delete" @click="deleteContact(task.id)">x</button>
       <div>
       <button @click="editClick(task)"> {{ edit ? 'сохранить' : 'редактировать' }}</button>
       <div class="edit-inputs" v-if="edit">
        <input v-model="editTask" type="text" />
      </div>
    </div>
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
      edit: false, 
      editTask: '', 
      newTaskText: ''
    };
  },
  mounted() {
    this.$store.dispatch('fetchTasks');
  },
  methods: {
    async deleteallTask() {
      await this.$store.dispatch('deleteAllTask');
    },
    editClick(id) { 
    this.editTask = '';
    this.edit = !this.edit; 
    this.editTask = id.text;
    },
    deleteContact(id) {
      this.$store.dispatch('deleteContact', id);
    },
    addTask() {
      if (this.newTaskText.trim() === '') return;

      const currentTime = new Date().toISOString();

      this.$store.dispatch('createTask', {
        text: this.newTaskText,
        createTime: currentTime 
      });

      this.newTaskText = '';
    }
  }
};
</script>


<style>
.task-text {
  flex-grow: 1;
  margin-right: 10px;
}

.task-time {
  color: #888;
}

.todo-list {
  margin-top: 20px
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

  .todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  width: 800px;
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
.delete:hover {
  background-color: #ff6b6b;
}
.btn-dall {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-dall:hover {
  background-color: #ff6b6b;
}
</style>
