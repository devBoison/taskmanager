<template>
  <div class="w-full divide-y divide-slate-200 overflow-y-scroll">
    <div
      class="flex justify-around w-full h-24 py-4 first:pt-0 last:pb-0"
      v-for="(item, index) in ApiData"
      :key="index"
    >
      <div class="flex align-center ml-4"></div>
      <div class="w-11/12 text-left ml-4">
        <h2 class="text-xl font-medium text-black">{{ item.title }}</h2>
        <p class="text-slate-500">
          {{ item.message }}
        </p>
        <div class="w-full mt-1 text-sm">
          <span class="pr-2">{{ item.date }}</span>
          <span> {{ item.time }}</span>
          <span class="pl-2">{{ item.status }}</span>
        </div>
      </div>
      <div class="flex justify-center items-center pr-4">
        <button @click="delItem(index)" class="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-6 h-6 hover:stroke-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>

        <button @click="editButton(index)" class="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-6 h-6 hover:stroke-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { temporaryIndex, delItem, store } from "../state/store.js";
import { unref } from "vue";

import { useRouter } from "vue-router";
// import moment from 'moment';

export default {
  name: "ToDoTaskManager",

  setup() {
    const router = useRouter();
    const data = unref(store);

    function editButtonHandler(index) {
      if (data.length > 0) {
        if (data[index]) {
          router.push("edit");
          temporaryIndex.value = index;
        }
      }
    }

    return {
      ApiData: unref(store),
      delItem: delItem,
      editButton: editButtonHandler,
    };
  },
};
</script>
