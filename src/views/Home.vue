<template>
  <div>
    <Navbar />
    <div class="mt-8">
      <img class="object-cover w-48 h-48 rounded-full ring ring-gray-300 rounded-full mx-auto" src="../assets/WhatsApp Image 2023-04-14 at 15.14.29.jpeg" alt="">
      <h3 class="font-base mt-2 intro text-white font-bold text-xl lg:text-5xl text-center">
        Software engineer. I help startups design, build  & <br>
         deploy systems that scale. I also mentor & tutor <br> 
         junior devs and I give back to the tech community <br> through writing.
         I code in Python, Go and JavaScript.

      </h3>
    </div>

    <Projects id="projects" class="pt-12" />
    <Clones id="clones" class="pt-16"/>
    <Articles id="articles" class="pt-16" />
    <Contact id="contact" class="pt-16" />
    
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
