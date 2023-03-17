
<template>
    <div class="w-full h-full flex justify-center items-center mt-10 ">
        <div class="w-5/12 h-auto bg-white rounded-lg shadow-md">
            <h1 class="p-6 uppercase">{{ ($route.path).replace("/", "") }}</h1>
            <hr class="border-b border-red-500"/>
            <div class="m-2 flex justify-center">
                    <RouterView/>
          </div>
        </div>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
    
    export default{
    name: "ContentArea",
    components: {RouterView},
}
</script>