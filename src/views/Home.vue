<template>
  <div>
    <Navbar />
    <div class="mt-8">
      <img class="object-cover w-48 h-48 rounded-full ring ring-gray-300 rounded-full mx-auto" src="../assets/WhatsApp Image 2023-04-14 at 15.14.29.jpeg" alt="">
      <h3 class="font-base intro text-white font-bold text-5xl text-center">
        Software engineer obsessed with <br>
        building digital products, <br>
        brands and experiences.

      </h3>
    </div>

    
    <Projects class="pt-12" />
    <Clones class="pt-16"/>
    <Articles class="pt-16" />
    <Contact class="pt-16" />
    
    
  </div>
</template>

<script>

import Articles from '@/components/Articles.vue';
import Clones from '@/components/Clones.vue';
import Navbar from '@/components/Navbar.vue'
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Projects,
    Clones,
    Articles,
    Contact
  }
}
</script>

<style>

</style>
