<template>
  <div>
    <nav class="shadow py-4 bg-gray-900">
    <div class="container flex justify-between">
        <h3 class="text-white ml-8 font-bold text-3xl">Ask AI Anything</h3>
        <h3  class="text-white font-bold text-3xl">Get Instant Answers</h3>
    </div>
  </nav>

  <div class="mt-12 bg-[#1C1E1C]  max-w-6xl w-full mx-auto">
    <h3  class="text-white font-bold text-center text-3xl">Chat</h3>
    <!-- <div class="flex justify-between">
        <div class="bg-white ml-6 px-4 rounded-r-3xl w-96 pb-4 pt-4">
            <p class="break-words">
                My purpose is to assist and communicate with users through text-based conversations, helping to answer questions, provide information, and engage in discussions on a wide range of topics.
       
            </p>
         </div>

        <div class="bg-[#1CB76E] mr-6 px-4 rounded-b w-96 pb-4 pt-4">
           <p class="break-words text-white">
            My purpose is to assist and communicate with users through text-based conversations, helping to answer questions, provide information, and engage in discussions on a wide range of topics.
           </p>
        </div>
    </div> -->


<ol class="relative mx-auto max-w-5xl pb-4 border-l border-gray-200">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        </span>
        <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
        </div>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Thomas Lean image"/>
        </span>
        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div class="items-center justify-between mb-3 sm:flex">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
            </div>
            <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
        </div>
    </li>
    <li class="ml-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
        </span>
        <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
            <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Pricing page</a> task status to  <span class="font-semibold text-gray-900 dark:text-white">Finished</span></div>
        </div>
    </li>
</ol>

  </div>
  </div>
</template>


<script>

export default {
    data() {
        return {
            isOpen: false
        }
    },
}
</script>