

<template>
    <div class="isolate bg-white px-6 lg:px-8">
  <!-- <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg class="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
      <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
      <defs>
        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9089FC" />
          <stop offset="1" stop-color="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
  </div> -->
 
  <form class="mx-auto max-w-xl mb-4" @submit.stop.prevent="storeData">
    <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
    
      <div class="sm:col-span-2">
        <div class="mt-1">
          <input v-model="title"  type="text" name="title" id="company" autocomplete="title" placeholder="title" class="hover:border-sky-600 block w-full rounded-md border-2 py-2 px-3.5 text-gray-400  placeholder:text-gray-400 sm:text-sm sm:leading-6">
        </div>
      </div>
      
      <div class="sm:col-span-2">
        <div class="mt-1">
          <textarea v-model="message" placeholder="description" id="message" rows="4" class="hover:border-sky-600 block w-full rounded-md border-2 py-2 px-3.5 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>


      <div>
    
        <div class="mt-2.5">
          <input v-bind="date" type="date" name="date" id="first-name"  class="hover:border-sky-600 hover:cursor-pointer block w-full rounded-md border-2 py-2 px-3.5 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>

        <div class="mt-2.5">
          <input v-bind="time" type="time" name="time" id="last-name" class="hover:border-sky-600 hover:cursor-pointer block w-full rounded-md border-2 py-2 px-3.5 text-gray-400  placeholder:text-gray-400 sm:text-sm sm:leading-6">
        </div>
      </div>


<!-- 
      <div>
        <div class="relative mt-1">
          <div>
            <select v-model="status" id="country" name="status" class="h-full rounded-md border-2 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 sm:text-sm sm:leading-6">
              <option value="not set" aria-selected="true" selected>STATUS</option>
              <option value="todo">TODO</option>
              <option value="pending">PENDING</option>
              <option value="completed">COMPLETED</option>
            </select>
          </div>
          <input type="text" name="" id="" autocomplete="" >
        </div>
      </div> -->
    <!-- </div> -->


    <div class="relative">
        <select  v-model="status" class="hover:cursor-pointer block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option disabled value="">Select Task Status</option>
          <option value="todo">TODO</option>
          <option value="pending">PENDING</option>
          <option value="done">COMPLETED</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add a task</button>
    </div>
  </form>
</div>
</template>

<script >
import {ref, unref} from 'vue';
import { store } from '../state/store';
import moment from 'moment';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'


    export default{
        name: 'ToDoTaskForm',

        setup(){
          const router = useRouter();

          const ApiData = unref(store) 
          const ToDoTitle = ref('');
          const ToDoMessage = ref('');
          const ToDoDate = ref('');
          const ToDoTime = ref('');
          const ToDoStatus = ref('');

         

          function storeData(){
            if(unref(ToDoTitle) && unref(ToDoMessage) && unref(ToDoStatus)){
    
              ApiData.push({
                title: (unref(ToDoTitle)).replace(/"([^"]+(?="))"/g, '$1'),
                message:(unref(ToDoMessage)).replace(/"([^"]+(?="))"/g, '$1'),
                date: moment(ToDoDate).format('dddd'),
                time: moment(ToDoTime).startOf('hour').fromNow(),
                status: (unref(ToDoStatus)).replace(/"([^"]+(?="))"/g, '$1'),
              });

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


          return{
            title: ToDoTitle,
            message: ToDoMessage,
            date: ToDoDate,
            time: ToDoTime,
            status: ToDoStatus,
            storeData: storeData,
            ApiData: ApiData,
          }

        }
    }
</script>