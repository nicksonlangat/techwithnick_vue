<template>
    <div>
       <Navigation/>
       <div class="container mx-auto mt-40 lg:mt-36 pb-4">
          <div id="projects" class="mt-20 pb-20">
             <div class="mx-4 lg:mx-0 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5">
                <div v-for="project of projects" class="flex flex-col text-white  pb-5 rounded-md">
                      <img class="object-cover rounded-t-md"
                         :src="project.image" alt="" />
                        
                     <div class="mt-3">
                        
                          <div class="flex justify-between">
                           <h3 class="text-white font-extrabold  text-lg">{{ project.name }}</h3>
                           <h3 class="text-[#878787] font-extrabold mr-2 text-sm">{{ project.type }}</h3>
                          </div>
                        <div class="flex mt-3 text-sm justify-between">
                           <a target="_blank" :href="project.live_link" class="bg-[#14171a] rounded-md px-6 py-2">Preview</a>
                           <a target="_blank" :href="project.code_link" class="bg-[#14171a] rounded-md px-6 py-1.5">Code</a>
                        </div>
                     </div>
                      
                 
                </div>
             </div>
          </div>
          <div id="contact" class="mx-4 lg:mx-0 mt-10 flex flex-col lg:flex-row justify-between gap-6">
             <div class="lg:w-1/4 rounded-md">
                <img class="rounded-md h-80 w-full object-cover transition-all duration-300 cursor-pointer" src="../assets/image_processing20220305-7813-19y4c1j.png" alt="">
             </div>
             <div class="bg-[#14171a] pb-4 lg:pb-0 lg:w-1/2 rounded-md">
                <div class="mt-12 ml-8">
                   <div>
                      <h1 class="font-base inline-flex gap-3 text-[#fcf4fa] font-bold text-2xl lg:text-3xl mr-4">
                         Let's create magic
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-yellow-500 w-8 h-8 mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                         </svg>
                      </h1>
                      <p class="font-base mt-6 text-lg lg:text-xl text-[#878787] mr-4">
                         My inbox is always open. You have a question, feedback or think I might be a good fit for your
                         team/project? Hit me up, I'd love to hear from you!
                      </p>
                      <h1 @click="goToContact" class="hover:animate-headShake mt-4 lg:mt-8 cursor-pointer font-base inline-flex lg:gap-64 text-[#ff669e] font-bold text-2xl lg:text-4xl mr-4">
                         Get in touch now
                         <span class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden lg:block animate-wiggle text-[#ff669e] w-10 h-10">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                         </span>
                      </h1>
                   </div>
                </div>
             </div>
             <div class="lg:w-1/4 rounded-md">
                <img class="rounded-md h-80 w-full object-cover transition-all duration-300 cursor-pointer" src="../assets/original-996a59b178dc23c23856efbbcc219b29.webp" alt="">
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
     name: 'Projects',
     components:{
        Footer,
        Navigation
     },
   data() {
       return {
           projects: [],
           articles: [],
           isOpen: false,
       }
   },
   methods: {
       ...mapActions({
           fetchCloneProjects: "fetchCloneProjects",
       }),
       getProjects() {
           this.fetchCloneProjects({
               cb: (res=>{
                   this.projects = res
               })
           })
       },
       goToContact() {
            this.$router.push({ name: 'contact' })
        },
   },
   mounted() {
       this.getProjects()
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