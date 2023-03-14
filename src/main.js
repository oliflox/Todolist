import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TodoList from './components/TodoList.vue'

// createApp(App).mount('#app')
createApp(App).component('TodoList', TodoList).mount('#app')
