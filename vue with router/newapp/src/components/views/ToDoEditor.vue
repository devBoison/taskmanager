
<template>
    <form class="mx-auto max-w-xl mb-4" @submit.stop.prevent="updateForm">
    <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
    
      <div class="sm:col-span-2">
        <div class="mt-1">
          <input v-model="title"  type="text" name="title" id="company" autocomplete="title" placeholder="title" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      
      <div class="sm:col-span-2">
        <div class="mt-1">
          <textarea v-model="message" placeholder="description" id="message" rows="4" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>


      <div>
    
        <div class="mt-2.5">
          <input v-bind="date" disabled type="date" name="date" id="first-name"  class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>

        <div class="mt-2.5">
          <input v-bind="time" disabled type="time" name="time" id="last-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>



      <div class="sm:col-span-2">
        <div class="relative mt-1">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <select v-model="status" id="country" name="status" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option value="not set" selected>Status</option>
              <option value="todo">TODO</option>
              <option value="pending">PENDING</option>
              <option value="completed">COMPLETED</option>
            </select>
          </div>
          <input type="text" name="" id="" autocomplete="" >
        </div>
      </div>
      
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add a task</button>
    </div>
  </form>
</template>

<script>
import {unref, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { store, temporaryIndex } from '../state/store';
import Swal from 'sweetalert2'

export default {
  name: 'ToDoEditor',
  setup() {
          const taskIndex  = unref(temporaryIndex);
          const router = useRouter();
          

          const ToDoTitle = ref('');
          const ToDoMessage = ref('');
          const ToDoDate = ref('');
          const ToDoTime = ref('');
          const ToDoStatus = ref('');

          function updateForm(){
            if(unref(ToDoTitle) && unref(ToDoMessage) && unref(ToDoStatus)){
              
              store[taskIndex].title = ToDoTitle.value;
              store[taskIndex].message = ToDoMessage.value;
              store[taskIndex].status = ToDoStatus.value;

            
              Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "Task recorded! successfully",
              showConfirmButton: false,
              timer: 1500
              })

              router.push('/tasks');
              
            }else{
              Swal.fire("Please fill in empty fields!", "");
            }
          
          } 

  

        onMounted(()=>{
          if(taskIndex >= 0){
            ToDoTitle.value = store[taskIndex].title;
            ToDoMessage.value = store[taskIndex].message;
            ToDoDate.value = store[taskIndex].date;
            ToDoTime.value = store[taskIndex].time;
            ToDoStatus.value = store[taskIndex].status;
          }
        })

        return{
            title: ToDoTitle,
            message: ToDoMessage,
            date: ToDoDate,
            time: ToDoTime,
            status: ToDoStatus,
            updateForm: updateForm,
        }
  }
}

</script>