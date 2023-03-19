import { reactive, unref, ref } from "vue";

export const store = reactive([]);

export let temporaryIndex = ref(0);
// export let taskSelected = reactive([]);

export function delItem(index) {

  if (unref(store).length > 0) {
    unref(store).splice(index, 1);
      }
    } 
  

