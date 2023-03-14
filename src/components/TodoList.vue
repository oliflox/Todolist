<script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: []
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({
            name: this.newTask,
            done: false
          });
          this.newTask = '';
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      deleteDoneTasks() {
        this.tasks = this.tasks.filter(task => !task.done);
      }
    }
  }
</script>

<template>
    <div>
      <h1>Ma Todo List</h1>
      <form @submit.prevent="addTask">
        <input type="text" v-model="newTask">
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.done">
          <span :class="{ done: task.done }">{{ task.name }}</span>
          <button @click="deleteTask(index)">Supprimer</button>
        </li>
      </ul>
      <button @click="deleteDoneTasks">Supprimer les tâches terminées</button>
    </div>
</template>
  
<style>
.done {
text-decoration: line-through;
}
</style>
  