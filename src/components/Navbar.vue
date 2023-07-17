<template>
    <nav>
        <div class="container mx-auto flex justify-between">

            <div class="ml-4 flex gap-4">
                <img class="mt-6" src="../assets/codelogo_v2.svg" alt="">
                <h3 class="text-white font-base  font-bold mt-8 text-2xl">Nick Langat</h3>
            </div>

            <div class="flex mr-4 lg:hidden">
                <button  @click="isOpen = !isOpen" type="button" class="text-white  hover:text-white  focus:outline-none focus:text-white" aria-label="toggle menu">
                    <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

            
                    <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>


            <div :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-56 shadow-lg rounded-lg px-6 py-6 mt-4 transition-all duration-300 ease-in-out bg-[#0F172A] md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            
            <div class="flex flex-col lg:gap-4 md:flex-row md:mx-6">
                <a href="#projects" class="lg:mt-8 lg:border lg:border-white lg:rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors">
                    Projects
                </a>
                <a href="" class="lg:mt-8 lg:border lg:border-white lg:rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors">
                    Resume
                </a>
                <a href="#contact" class="lg:mt-8 lg:border lg:border-white lg:rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors">
                    Contact
                </a>
                <a href="#contact" class="lg:mt-8 lg:border lg:border-white lg:rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors">
                    Templates
                </a>
            </div>

            
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    }
}
</script>