<template>
    <section class="flex">

        <!-- menu sidebar  -->
       <MenuBar/>

      <!-- Content area section -->
      <div class="w-full bg-slate-100">
        <NotifBar/>
        <section>
          <ContentArea/>
        </section>
      </div>


    </section>
</template>



 
 <script>
import MenuBar from '../todo/MenuBar.vue';
import NotifBar from '../todo/NotificationBar.vue';
import ContentArea from '../todo/ContentArea.vue';


     export default{
    name: "ToDoNavBar",
    components: { MenuBar, NotifBar,ContentArea }
}
 </script>