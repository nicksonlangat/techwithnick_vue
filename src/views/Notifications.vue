<template>
    <div>
       <Navigation/>
       <div class="container mx-auto mt-40 lg:mt-28 pb-4">
          <div class="flex justify-between gap-6">
             <div class="w-1/3 bg-[#14171a] text-[#fcfaf4] h-[500px] rounded-md">
                <div class="p-6">
                   <ul class="my-4 space-y-3">
                      <li @click="viewMessage(item.message)" v-for="item of notifications">
                         <a class="flex cursor-pointer items-center p-3 text-base font-base text-[#fcfaf4] rounded-lg bg-[#1b1c1d] group hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">
                            Message from {{ item.message.name}}
                            </span>
                            <span class="inline-flex items-center bg-[#14171a] text-[#fcfaf4] justify-center px-2 py-0.5 ml-3 text-xs font-base rounded">
                            {{ moment(item.created).format('DD-MM-YYYY') }}
                            </span>
                         </a>
                      </li>
                   </ul>
                </div>
             </div>
             <div class="w-2/3 bg-[#14171a] text-[#fcfaf4 rounded-md">
                <div v-if="message != ''" class="p-8">
                   <div class="flex flex-row items-center">
                      <div
                         class="flex items-center justify-center h-10 w-10 rounded-full contact-btn text-[#fcfaf4] flex-shrink-0"
                         >
                         A
                      </div>
                      <div
                         class="relative ml-3 font-base text-sm py-2 px-4 text-[#fcfaf4]"
                         >
                         <div>
                            {{ message.content }}
                         </div>
                      </div>
                   </div>
                   <div class="mt-8 flex font-base gap-6 ml-16">
                      <h3 class="text-[#878787] mt-2">  Sender:  {{ message.name }}</h3>
                      <h3 class="text-[#878787] mt-2">  Email:  {{ message.email }}</h3>
                      <button  class="bg-[#1b1c1d] mr-8 lg:mr-0 px-12 rounded text-[#fcfaf4] p-2  transition-opacity duration-300 ease-in hover:opacity-70">
                      Delete
                      </button>
                      <button  class="bg-[#1b1c1d] mr-8 lg:mr-0 px-12 rounded text-[#fcfaf4] p-2  transition-opacity duration-300 ease-in hover:opacity-70">
                      Respond
                      </button>
                   </div>
                </div>
             </div>
          </div>
          <Footer />
       </div>
    </div>
 </template>
<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

import { mapActions } from 'vuex';

export default {
     name: 'Notifications',
     components:{
        Footer,
        Navigation
     },
   data() {
       return {
           isOpen: false,
           notifications: [],
           message: ""
       }
   },
   methods: {
       ...mapActions({
           fetchNotifications: "fetchNotifications"
       }),
       viewMessage(message) {
        this.message = message
       },
        getNotifications() {
           this.fetchNotifications({
           
            cb: (res=>{
                   this.notifications = res
               })
           })
       },
   },
   mounted() {
       this.getNotifications()
   }
   }
</script>

<style>
.name {
    background: linear-gradient(120deg, #cf5262, #2b6da8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.contact-btn {
    background: linear-gradient(109deg, rgb(132, 43, 247) 0%, rgb(215, 9, 157) 100%) rgba(0, 0, 0, 0);
}
html, body{
    overflow-x: hidden;
    background-color: black;
}
</style>