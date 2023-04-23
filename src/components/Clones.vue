<template>
   <div class="mt-4 container mx-auto">
      
    <div class="ml-4">
      <h3 class="text-white text-4xl font-bold uppercase font-base">clones</h3>
      <p class="text-white mt-4 font-base">
        When I am free I like to rebuild some of the popular platforms that I admire :)
      </p>
      
    </div>

      <div class="grid ml-4 mr-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-x-8 gap-y-8">
        <div v-for="project of projects" :key="project.id" class="bg-[#18181b] pb-2">
          <img class="rounded-lg" :src="project.image" alt="">
          <div>
            <h3 class="font-base text-white mt-2 ml-2">{{ project.name }}</h3>
          <p class=" font-base text-white mt-2 ml-2">
            {{ project.description }}
        </p>
          <div class="flex py-2 justify-between">
            <a target="_blank" :href="project.live_link" class="mt-8 ml-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors">Demo</a>
            <a target="_blank" :href="project.code_link" class="mt-8 mr-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors">Code</a>
          </div>
          </div>
        </div>
      </div>

    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
     name: 'Clones',
   data() {
       return {
           projects: [],
       }
   },
   methods: {
       ...mapActions({
           fetchCloneProjects: "fetchCloneProjects"
       }),
       getProjects() {
           this.fetchCloneProjects({
               cb: (res=>{
                   this.projects = res
               })
           })
       },
   },
   mounted() {
       this.getProjects()
   }
   }
</script>