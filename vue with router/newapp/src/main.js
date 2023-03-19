import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
// import ToDoApp from './components/views/ToDoApp.vue';
import ToDoTaskManager from './components/views/ToDoTaskManager.vue';
import ToDoTaskForm from './components/views/ToDoTaskForm.vue';
import ToDoEditor from './components/views/ToDoEditor.vue';


const routes = [
  {
    name: 'Home',
    path: '/',
    component: '',
    children: [
      {
        path: 'tasks',
        name: 'Tasks',
        component: ToDoTaskManager,
      },
      {
        path: 'new',
        name: 'Create',
        component: ToDoTaskForm,
      },
      {
        path: 'edit',
        name: 'Edit',
        component: ToDoEditor,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');