

<template>
  <div class="w-full">
    <div class="flex items-center w-full h-12 bg-white">
      <div class="flex w-full text-white">
        <div class="flex ml-10">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </span>
            <input v-model="searchQuery" @change="filterTasks"  id="dropdownUsersButton" data-dropdown-toggle="searchBar" data-dropdown-placement="bottom" data-dropdown-trigger="click"
              class="placeholder:italic text-black block bg-gray-50 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 sm:text-sm"
              placeholder="Search for task..."
              type="text"
              name="search"
            />
           
              
<!-- Dropdown menu -->
<div id="searchBar" class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700" v-if="filterTasks">
  <ul class="h-48 overflow-y-auto text-black dark:text-gray-200" aria-labelledby="dropdownUsersButton">
    <li v-for="(item, index) in storedTasks" :key="index">
      <a href="#" class="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        {{ item ? item.title : 'nothing found...' }}
      </a>
    </li>
  </ul>
  <a href="#" class="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
      <svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
      Add new task
  </a>
</div>

          </label>
        </div>
        <div class="w-full"></div>
      </div>
      <div class="flex w-60 p-2">
        <div class="w-20 border-amber-700 mr-2">Notification</div>
        <div class="w-20 border-amber-700 ml-2">Chat</div>
      </div>
    </div>
  </div>
</template>

<script>
import {unref,ref, onMounted} from 'vue';
import { initFlowbite } from 'flowbite';
import { store } from '../state/store';


export default {
  name: "NotifBar",


  setup(){

    const storedTasks = unref(store);

    const searchQuery = ref();
     

// const filterTasks = storedTasks.filter((item) => (item.title).includes(unref(searchQuery)));

function filterTasks(){
  for(let i=0; i < storedTasks.length; i++){
    if((storedTasks[i].title).includes(unref(searchQuery))){
      return storedTasks;
    }
  }
}



 

    onMounted(() => {
    initFlowbite();
})
return{
      searchQuery,
      storedTasks,
      filterTasks,
    }
  },
};

</script>
