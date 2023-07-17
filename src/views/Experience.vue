<template>
    <div class="container mx-auto">
       <Navigation/>
       <div :class="[isOpen ? 'mt-40' : 'mt-28']" class="container mx-auto pb-4">
          <div class="mx-4 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
          </div>
          <div id="resume" class="mt-6 mx-4 lg:mx-0 grid grid-cols-1 gap-y-4 lg:flex lg:justify-between lg:gap-6">
             <div class="bg-[#14171a] pb-4 lg:w-1/3 rounded-md">
                <div class="mt-16 ml-8">
                   <h1 class="font-base text-white font-bold text-5xl">
                      Nick Langat, 
                      <span class="mt-3 text-4xl lg:text-5xl text-[#878787]">Full stack software engineer</span>
                   </h1>
                </div>
             </div>
             <div class=" hidden lg:block bg-[#14171a] lg:w-3/4 rounded-md lg:pb-0 pb-8">
                <img class="object-cover rounded-lg h-80 w-full transition-all duration-300 cursor-pointer" src="../assets/Capture.png" alt="">
             </div>
             <div class=" rounded-md">
                <img class="rounded-md h-80 w-96 object-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="../assets/WhatsApp Image 2023-05-19 at 08.47.53.jpeg" alt="">
             </div>
          </div>
          <div id="projects" class="mt-20 lg:pb-20 mx-4 lg:mx-0">
             <div class="flex justify-between ml-2 mr-2">
                <h3 class="mt-4 text-[#fcf4fa] lg:text-2xl font-bold font-base">Work History</h3>
                <a target="_blank" href="https://docs.google.com/document/d/1mwqVj9RJ4n8hgA5wondLVzPwPyWaE-yyiIZlvhbZx5k/edit" class="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium
                   bg-[#14171a] text-[#fcfaf4]
                   transition-opacity duration-300 ease-in hover:opacity-70
                   rounded-lg">
                   <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 
                         2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0
                         001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd">
                      </path>
                   </svg>
                   Download Resume
                </a>
             </div>
             <div class="mt-8 p-4 rounded-md pb-6 bg-[#14171a]">
                <ol class="mt-8 ml-4 relative border-l border-gray-200 ">
                   <li class="mb-10 ml-6">
                      <span class="absolute flex items-center justify-center w-6 h-6 contact-btn rounded-full -left-3">
                         <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                         </svg>
                      </span>
                      <h3 class="flex items-center mb-1 text-sm lg:text-lg font-semibold text-white font-base">Reveall, Amsterdam-Netherlands<span class="bg-[#1b1c1d] text-[#878787] text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Current</span></h3>
                      <time class="block mb-2 text-sm font-normal font-base leading-none text-[#878787]">August, 2022</time>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-8">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         I create clarity and generate energy in my feature work by developing technical documents (architectural and other artifacts) and engaging stakeholders ( engineering, design, and leadership) to get input and buy-in before execution.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         I implement new backend API endpoints while maintaining, optimising and ensuring the existing ones are perfomant. 
                         I also write the frontend code to consume and communicate with the backend APIs and database.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         I refactor existing codebase, reduce tech debt items from piling up, fix high priority bugs, merge pull requests and deploy ready code to various AWS servers owned by the company.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         I carry out code reviews, pair with other engineers, lead project update meetings and constantly communicate with stakeholders to keep them in the loop.
                         I also do demos of finished features to the whole organisation and get first hand feedback on the outcomes of my work.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         I mentor and work with junior engineers to assist with their day to day tasks and help them learn new concepts. I also learn a thing or two from them.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#878787] h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         I am involved in the recruitment of new engineers where I interview their technical skills and give feedback used in hiring decisions.
                         This equips me with people management skills and prepares me for what the future holds for me higher up the ladder.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         I have reduced multiple API calls to the backend by refactoring existing endpoints to allow bulk creates and bulk updates in DRF. 
                      </p>
                   </li>
                   <li class="mb-10 ml-6">
                      <span class="absolute flex items-center justify-center w-6 h-6 contact-btn rounded-full -left-3">
                         <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                         </svg>
                      </span>
                      <h3 class="flex items-center mb-1 text-lg font-semibold text-white font-base">Busara Center For Behavioural Economics</h3>
                      <time class="block mb-2 text-sm font-normal font-base leading-none text-[#878787]">February, 2021 - March, 2022</time>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Took ownership and built and maintained user interface for the internal project management tool, Busara Hub.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Performed code reviews, pairing with other devs for unblocking and mentired juniors and interns.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Researched, gathered and documented technical and system design requirements from users and stakeholders.
                      </p>
                      <p class="mb-4 inline-flex gap-2 text-base font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Collaborated with team members to brainstorm about new products, provided each
                         other with technical insight and reviewed working drafts.
                      </p>
                      <p class="mb-4 inline-flex gap-2 text-base font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Provided technical support to both new and existing employees from onboarding to project navigation requests and communication through Slack.
                      </p>
                   </li>
                   <li class="mb-10 ml-6">
                      <span class="absolute flex items-center justify-center w-6 h-6 contact-btn rounded-full -left-3">
                         <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                         </svg>
                      </span>
                      <h3 class="flex items-center mb-1 text-lg font-semibold text-white font-base">Ajua Africa</h3>
                      <time class="block mb-2 text-sm font-normal font-base leading-none text-[#878787]">April, 2020 - December, 2021</time>
                      <p class="mb-4 inline-flex gap-2 text-base font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Configured and Maintained MongoDB and PostgreSQL engines for the merchant API, company’s flagship product in partnership with MTN Nigeria.
                      </p>
                      <p class="mb-4 inline-flex gap-2 text-base font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Implemented API endpoints for various merchant operations like Ads,Offers and Discounts to customers.
                      </p>
                      <p class="mb-4 inline-flex gap-2 text-base font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Integrated the Merchant API with both Facebook and Instagram Marketing API for Ad campaigns to increase reach and target more sales.
                      </p>
                      <p class="mb-4 inline-flex gap-2 text-base font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Worked on the USSD backend to facilitate merchant payments via USSD. 
                      </p>
                      <p class="mb-4 inline-flex gap-2 text-base font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Constantly Offered design and architectural insights to the CTO and product managers to ensure that the tech stack is one which is accommodating to both existing engineers and future engineers.
                      </p>
                   </li>
                   <li class="mb-10 ml-6">
                      <span class="absolute flex items-center justify-center w-6 h-6 contact-btn rounded-full -left-3">
                         <svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                         </svg>
                      </span>
                      <h3 class="flex items-center mb-1 text-lg font-semibold text-white font-base">Weza Prosoft</h3>
                      <time class="block mb-2 text-sm font-normal font-base leading-none text-[#878787]">January, 2018 - January, 2020</time>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Containerized the back end API using docker and this ensured efficient resource utilization thus saving on costs while allowing fellow devs to run similar images without breaks.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Set up CI/CD for API & front end using CircleCi for tests automation & server deployments eliminating the need to manually check things up & focus on implementing new features.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4] lg:mr-48">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Introduced database replication strategy to increase read speeds. Configured one master for writes and two slave databases for reads thus offloading too much workload on the main databases.
                      </p>
                      <p class="mb-4 text-base inline-flex gap-2 font-normal font-base text-[#fcfaf4]">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#878787] h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                         </svg>
                         Configured NGINX to act as load balancer distributing incoming traffic to our servers resulting in improved performance, scalability & reliability of our web platform.
                      </p>
                   </li>
                </ol>
             </div>
          </div>
          <div id="contact" class="mt-20 mx-4 lg:mx-0 grid grid-cols-1 lg:flex lg:justify-between gap-6">
             <div class="bg-[#14171a] pb-4 lg:w-1/2 rounded-md">
                <div class="flex mt-4 ml-8">
                   <div>
                      <p class="text-[#8c8c8c] font-base mb-2 mr-2 text-sm">
                         Nick’s passion for tech keeps him going meaning he takes up
                         every challenge with a good attitude. A good team player who is willing to ask questions. A very
                         quick learner when it comes to adapting to new tech. He's confident, has good communication skills, works overtime without any supervision. Has
                         delivered all that is expected of him so far within timelines.
                         Overally, an exceptional individual willing to learn and communicates whenever he is faced with a
                         challenge. With this attitude I can only say he will keep improving and go places.
                      </p>
                      <div class="flex gap-4">
                         <img class="rounded-full w-16 h-16 object-cover" src="../assets/king.jpeg" alt="">
                         <div>
                            <h3 class="text-[#fcf4fa]">King Nelson</h3>
                            <p class="text-[#8c8c8c] text-sm">Engineering Manager - Weza Prosoft</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div class="bg-[#14171a] lg:w-3/4 pb-4 lg:pb-0 rounded-md">
                <div class="mt-12 ml-8">
                   <h1 class="font-base inline-flex gap-3 text-[#fcf4fa] font-bold text-3xl mr-4">
                      Let's create magic
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-yellow-500 w-8 h-8 mt-1">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                   </h1>
                   <p class="font-base mt-6 text-sm lg:text-xl text-[#878787] mr-4">
                      My inbox is always open. You have a question, feedback or think I might be a good fit for your
                      team/project? Hit me up, I'd love to hear from you!
                   </p>
                   <h1 @click="goToContact" class="hover:animate-headShake mt-4 cursor-pointer font-base inline-flex lg:gap-96 text-[#ff669e] font-bold text-4xl mr-4">
                      Get in touch now
                      <span class="mt-1 invisible lg:visible">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="animate-wiggle text-[#ff669e] w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                      </span>
                   </h1>
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

export default {
    name: 'Experience',
    components:{
       Footer,
       Navigation
    },
  data() {
      return {
          isOpen: false,
      }
  },
  methods: {
      goToContact() {
        this.$router.push({ name: 'contact' })
    },
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