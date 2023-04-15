<template>
    <div class="container mx-auto mt-8">
      <h3 class="text-white text-4xl ml-6 font-bold uppercase font-base">articles</h3>
      <p class="ml-6 text-white mt-4 font-base">No better way to give back to the tech community than by passing down what I have learnt in my journey so far. Enjoy!</p>
      <div class="grid grid-cols-2 ml-6 mt-6 gap-x-8 gap-y-6">
        <div v-for="article of articles" :key="article.id" class="bg-[#18181b] pb-2">
            <h3 class="font-base font-bold text-blue-300 mt-2 ml-2">{{ article.title }}</h3>
          <p class=" font-base text-white text-xs mt-4 ml-2">
            {{ article.description }}
          </p>
          <div class="flex  py-2 justify-center">
             <a :href="article.canonical_url" class="mt-8 mr-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors">Read More</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
     name: 'Articles',
   data() {
       return {
           articles: [],
       }
   },
   methods: {
       ...mapActions({
           fetchArticles: "fetchArticles"
       }),
       getArticles() {
           this.fetchArticles({
               cb: (res=>{
                   this.articles = res
               })
           })
       },
   },
   mounted() {
       this.getArticles()
   }
   }
</script>
   