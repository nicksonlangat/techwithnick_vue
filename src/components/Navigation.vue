<template>
    <div class="container mx-auto">
       <nav :class="[isOpen ? 'py-6 rounded-md' : 'py-2 rounded-full']" class="mx-4 transition-all duration-300 ease-in-out fixed inset-x-0 z-20 top-4 flex font-base justify-between lg:justify-between left-0 bg-[#14171a] lg:w-1/2 lg:mx-auto py-2 lg:py-3">
          <a href="/" class="ml-8 name cursor-pointer hover:text-white text-2xl font-bold">Nick</a>
          <div :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-6 mt-8 rounded-md transition-all duration-300 ease-in-out bg-[#14171a] md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
             <ul class="flex flex-row justify-center items-center gap-2 lg:gap-6 text-[#878787]">
                <li class="lg:mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                   <a  href="/experience">Experience</a>
                </li>
                <li class="lg:mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                   <a href="/projects">Projects</a>
                </li>
                <li class="lg:mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                   <a target="_blank" href="https://docs.google.com/document/d/1mwqVj9RJ4n8hgA5wondLVzPwPyWaE-yyiIZlvhbZx5k/edit?usp=sharing" >Resume</a>
                </li>
                <li class="hidden lg:mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                   <a href="/messages" >Messages</a>
                </li>
                <li v-if="isAdmin" class="hidden lg:block lg:mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                   <a @click="toggleModal" >Notifications</a>
                </li>
                <button @click="goToContact" class="lg:hidden transition-all duration-300 ease-in hover:opacity-70 contact-btn cursor-pointer px-3 rounded-full text-white py-0.5">
                Let's talk
                </button>
             </ul>
          </div>
          <div class="flex mr-4 lg:hidden">
             <button  @click="isOpen = !isOpen" type="button" class="focus:outline-none focus:ring-0" aria-label="toggle menu">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#878787] h-8">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-8 text-[#878787] h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          </div>
          <button @click="goToContact" class="hidden lg:block mr-8 transition-opacity duration-300 ease-in hover:opacity-70 contact-btn cursor-pointer px-4 rounded-full text-white py-1">
          Let's talk
          </button>
       </nav>
       <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed top-20 left-0 right-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-full max-w-md max-h-full">
             <!-- Modal content -->
             <div class="relative rounded-md shadow bg-[#14171a]">
                <button @click="toggleModal" type="button" class="absolute top-3 right-2.5 text-[#fcfaf4] bg-transparent hover:bg-[#1b1c1d] rounded-md text-sm p-1.5 ml-auto inline-flex items-center">
                   <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                   </svg>
                   <span class="sr-only">Close modal</span>
                </button>
                <!-- Modal header -->
                <div class="px-6 py-4 border-b rounded-t">
                   <h3 class="text-base font-bold font-base text-[#fcfaf4] lg:text-xl">
                      Notifications
                   </h3>
                </div>
                <!-- Modal body -->
                <div class="p-6">
                   <ul class="my-4 space-y-3">
                      <li v-for="item of notifications">
                         <a @click="readNotification(item.id)" class="cursor-pointer flex items-center p-3 text-base font-base text-[#fcfaf4] rounded-md bg-[#1b1c1d] group hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">
                            {{ item.title }}
                            </span>
                            <span class="inline-flex items-center bg-[#14171a] text-[#fcfaf4] justify-center px-2 py-0.5 ml-3 text-xs font-base rounded">
                            {{ moment(item.created).format('DD-MM-YYYY') }}
                            </span>
                         </a>
                      </li>
                   </ul>
                   <div class="flex justify-between">
                      <p class="inline-flex items-center text-xs font-normal text-[#878787] bg-[#1b1c1d] px-3 rounded-md">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Mark all as read
                      </p>
                      <a href="/notifications" class="contact-btn inline-flex items-center px-4 py-2 text-sm font-medium
                         bg-[#1b1c1d] text-[#fcfaf4]
                         transition-opacity duration-300 ease-in hover:opacity-70
                         rounded-md">
                      View all notifications</a>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'Navigation',
    
    data() {
       return {
           notifications: [],
           isOpen: false,
           showModal: false,
           isAdmin: false,
       }
   },
   methods: {
       ...mapActions({
           fetchNotifications: "fetchNotifications",
           markRead: "markRead"
       }),
       toggleModal() {
        this.showModal = !this.showModal
    },
       getNotifications() {
        this.fetchNotifications({
        read: false,
        cb: (res=>{
                this.notifications = res
            })
        })
    },
       readNotification(id) {
        this.markRead({
        id: id,
        data: {
            is_read: true
        },
        cb: (res=>{
                this.$router.push({ name: 'notifications' })
                this.getNotifications()
            })
        })
    },
       goToContact() {
        this.$router.push({ name: 'contact' })
    },
   },
   mounted() {
       if (localStorage.getItem("password") === "33992433nkl") {
        this.isAdmin = true
       }
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