<template>
  <div class="w-full">
    <div class="flex items-center w-full h-12 bg-white">
      <div class="flex w-full text-white">
        <div class="flex ml-10">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-slate-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for task..."
              type="text"
              name="search"
            />
          </label>
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
