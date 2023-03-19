<template>
  <div class="isolate bg-white px-6 lg:px-8">
    <form class="mx-auto max-w-xl mb-4" @submit.stop.prevent="storeData">
      <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <div class="mt-1">
            <input
              v-model="title"
              @change="checkFieldsFilled"
              type="text"
              name="title"
              id="company"
              autocomplete="title"
              placeholder="title"
              class="hover:border-sky-600 block w-full rounded-md border-2 py-2 px-3.5 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <div class="mt-1">
            <textarea
              v-model="message"
              @change="checkFieldsFilled"
              placeholder="description"
              id="message"
              rows="4"
              class="hover:border-sky-600 block w-full rounded-md border-2 py-2 px-3.5 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>

        <div>
          <div class="mt-2.5">
            <input
              v-model="date"
              @change="checkFieldsFilled"
              type="date"
              name="date"
              id="first-name"
              class="hover:border-sky-600 hover:cursor-pointer block w-full rounded-md border-2 py-2 px-3.5 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div class="mt-2.5">
            <input
              v-model="time"
              @change="checkFieldsFilled"
              type="time"
              name="time"
              id="last-name"
              class="hover:border-sky-600 hover:cursor-pointer block w-full rounded-md border-2 py-2 px-3.5 text-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="relative">
          <select
            v-model="status"
            @change="checkFieldsFilled"
            class="hover:cursor-pointer block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option disabled value="">SELECT TASK STATUS</option>
            <option value="todo">TODO</option>
            <option value="pending">PENDING</option>
            <option value="done">COMPLETED</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <input
          v-bind:disabled="disableButton"
          type="submit"
          class="disabled:bg-gray-100 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          value="Add a task"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { ref, unref } from "vue";
import { store } from "../state/store";
// import moment from 'moment';
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "ToDoTaskForm",

  setup() {
    const router = useRouter();

    const ApiData = unref(store);
    const ToDoTitle = ref("");
    const ToDoMessage = ref("");
    const ToDoDate = ref("");
    const ToDoTime = ref("");
    const ToDoStatus = ref("");

    let disableButton = ref(true);

    const checkFieldsFilled = () => {
      if (
        Boolean(unref(ToDoTitle)) &&
        Boolean(unref(ToDoMessage)) &&
        Boolean(unref(ToDoDate)) &&
        Boolean(unref(ToDoTime)) &&
        Boolean(unref(ToDoStatus))
      ) {
        //toggle state (disable == false)
        disableButton.value = false;
      } else {
        disableButton.value = true;
      }
    };

    function storeData() {
      ApiData.push({
        title: unref(ToDoTitle).replace(/"([^"]+(?="))"/g, "$1"),
        message: unref(ToDoMessage).replace(/"([^"]+(?="))"/g, "$1"),
        date: ToDoDate,
        time: ToDoTime,
        status: unref(ToDoStatus).replace(/"([^"]+(?="))"/g, "$1"),
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task recorded! successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      router.push("/tasks");
    }

    return {
      title: ToDoTitle,
      message: ToDoMessage,
      date: ToDoDate,
      time: ToDoTime,
      status: ToDoStatus,
      storeData: storeData,
      ApiData: ApiData,
      checkFieldsFilled: checkFieldsFilled,
      disableButton: disableButton,
    };
  },
};
</script>
