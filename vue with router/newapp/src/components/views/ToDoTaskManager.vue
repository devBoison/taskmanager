

<template>
  
        
              <div class="w-full divide-y divide-slate-200 overflow-y-scroll">
                  <div class="flex justify-around w-3/4 h-24 py-4 first:pt-0 last:pb-0" v-for="(item, index) in ApiData" :key="index">
                      <div class="flex align-center ml-4">
                          <input class="peer/draft" type="checkbox" @change="taskSelectButton(index)"/>
                      </div>
                      <div class="w-11/12 text-left ml-4">
                          <h2 class="text-xl font-medium text-black">{{ item.title }}</h2>
                          <p class="text-slate-500">
                              {{ item.message }}
                          </p> 
                          <div class="w-full mt-1 text-sm">
                          <span class="pr-2">{{ item.date }}</span>
                          <span>  {{ item.time }}</span>
                          <span class="pl-2">{{item.status}}</span>
                          </div>
                      </div>
                      <div>
                        <button @click="delItem(index)">
                            delete
                        </button>
                        <button @click="editButton(index)">
                            edit
                        </button>
                      </div>
                  </div>


              </div>


</template>

<script>

import {temporaryIndex, taskSelected, delItem, store} from '../state/store.js';


import { useRouter } from 'vue-router';
import { unref} from 'vue';

const tasksSelected = unref(taskSelected);

  export default{
      name: 'ToDoTaskManager',


      setup(){
        const router = useRouter();
        const data = unref(store)
        

        
    function editButtonHandler(index){
        if(data.length > 0){
            if(data[index]){
                router.push('edit');
                temporaryIndex.value = index;
        }
    }
}
    function taskSelector(index){
        tasksSelected.id = index;
        taskSelected.selected = taskSelected.selected === true ? false : true;
        
    }    


    return{
            ApiData: unref(store),
            delItem: delItem,
            editButton: editButtonHandler,
            taskSelectButton: taskSelector,
        }
    
        
}
      }
</script>


