import {reactive, unref, ref} from 'vue';


export const store = reactive([]);

export let temporaryIndex = ref(0);
export let taskSelected = reactive([{id:0, selected: false}]);







export function delItem(index){
    const unrefTaskSelected = {...taskSelected};
    if(unref(store).length > 0){

        if(unrefTaskSelected[0].selected){
            if(unrefTaskSelected[0].id === index){
           
                unref(store).splice(index, 1);
            }
            else{
                alert('please select to delete')
            }
        }
        else{
            alert('No task selected!')
        }
       
        
    }
}

