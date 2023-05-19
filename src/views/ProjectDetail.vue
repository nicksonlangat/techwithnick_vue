<template>
    <div>

        <Navigation/>

        <div class="container mx-auto mt-40 lg:mt-36 pb-4">
            
            

            <div id="contact" class="mx-4 lg:mx-0 flex flex-col lg:flex-row justify-between gap-6">
                <div class="lg:w-2/3 rounded-md">
                    
                   
                    <img class="rounded-md w-full object-cover transition-all duration-300 cursor-pointer" src="../assets/Screen Capture 001 - nick-website - localhost.jpeg" alt="">
               
                </div>
                
                <div class="lg:w-1/3  flex flex-col rounded-md">
                    
                   
                    <img class="rounded-md h-96 w-full object-cover transition-all duration-300 cursor-pointer" src="../assets/Screenshot 2023-05-19 at 13.49.42.png" alt="">
                    <img class="rounded-md h-96 w-full object-cover transition-all duration-300 cursor-pointer" src="../assets/Screenshot 2023-05-19 at 13.49.42.png" alt="">
                    <img class="rounded-md h-96 w-full object-cover transition-all duration-300 cursor-pointer" src="../assets/Screenshot 2023-05-19 at 13.49.42.png" alt="">
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
Footer
export default {
     name: 'About',
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
           fetchArticles: "fetchArticles"
       }),
       getProjects() {
           this.fetchCloneProjects({
               cb: (res=>{
                   this.projects = res
               })
           })
       },
       getArticles() {
           this.fetchArticles({
               cb: (res=>{
                   this.articles = res
               })
           })
       },
       goToContact() {
            this.$router.push({ name: 'contact' })
        },
        goToProjects() {
            this.$router.push({ name: 'projects' })
        },
   },
   mounted() {
       this.getProjects()
       this.getArticles()
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