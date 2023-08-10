<template>
  <div class="container">
    <div class="main-box">
      <h1 class="title"> Дневник Дел</h1>
        <div class="add-task">
          <input type="text" placeholder="Введите текст...">
          <button @click="addTask">"btn-task">new task</button>>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  computed: {}
}
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
