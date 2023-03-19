<template>
  <div class="w-full">
    <div class="flex items-center w-full h-12 bg-white">
      <div class="flex w-full text-white">
        <div class="flex ml-10">
          <input
            type="search"
            placeholder="search for task"
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
        </div>
        <div class="w-full"></div>
      </div>
      <div class="flex w-60 p-2">
        <div class="w-20 border-amber-700 mr-2">Notification</div>
        <div class="w-20 border-amber-700 ml-2">Chat</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotifBar",
};
</script>
