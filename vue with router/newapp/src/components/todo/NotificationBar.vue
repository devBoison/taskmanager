
<template>
        <div class="w-full">
    <div class="flex items-center w-full h-12 bg-white">
        <div class="flex w-full text-white">
        <div class="flex ml-10">
            <input type="search" placeholder="search for info"/>
        </div>
            <div class="w-full">
                
            </div>
        </div>
        <div class="flex w-60 p-2">
            <div class="w-20 border-amber-700 mr-2">Notification</div>
            <div class="w-20 border-amber-700 ml-2">Chat</div>
        </div>
    </div>
    <!-- <div class="w-full h-5/6 bg-gray-100 overflow-hidden">
        <ToDoContentArea>
            <RouterView/>
        </ToDoContentArea>
    </div> -->
</div>
</template>

<script>
    export default{
        name: 'NotifBar',
    }
</script>