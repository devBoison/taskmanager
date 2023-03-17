import {reactive, unref, ref} from 'vue';


export const store = reactive([]);

export let temporaryIndex = ref(0);
export let taskSelected = reactive([{id:0, selected: false}]);


const unrefTaskSelected = unref(taskSelected);




export function delItem(index){
    if(unref(store).length > 0){
        if(unrefTaskSelected.id === index){
            unref(store).splice(index, 1);
        }
        else{
            alert('please select to delete')
        }
        
    }
}

