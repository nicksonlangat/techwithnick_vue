<template>
    <div>
        <nav class="container fixed inset-x-0 z-20 top-4 flex font-base justify-between left-0 bg-[#14171a] w-1/2 mx-auto py-3 rounded-full">
            <h3 class="ml-8 name cursor-pointer hover:text-white text-2xl font-bold">Nick</h3>
            <ul class="mx-auto flex gap-6 text-[#878787]">

                <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#resume">Resume</a>
                </li>
                <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#projects">Projects</a>
                </li>
                <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#contact">Contact</a>
                </li>
                <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#articles">Blog</a>
                </li>

            </ul>
            <button class="mr-8  transition-opacity duration-300 ease-in hover:opacity-70 contact-btn cursor-pointer px-4 rounded-full text-white py-1">
                Let's talk
            </button>
        </nav>

        <div class="container mx-auto mt-32">
            <div class="flex justify-between gap-6">
                <div class=" pb-4 w-1/2 rounded-2xl">
                    <div class="mt-4 ml-16 text-start">
                        <h1 class="font-base inline-flex gap-3 text-[#fcf4fa] font-bold text-4xl mr-4">Let's create something amazing
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-yellow-500 w-8 h-8 mt-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </h1>
                            <p class="text-start font-base mt-6 text-3xl text-[#878787]">
                               It all starts with the first step, <br>
                               hitting me up...
                            </p>
                            
                            <p class="text-start uppercase font-base mt-6 text-xl text-[#878787]">
                              or call me
                            </p>
                            <p class="text-start uppercase font-base mt-2 text-xl text-[#fcfaf4]">
                             +254713754946
                            </p>
                            <p class="text-start uppercase font-base mt-6 text-xl text-[#878787]">
                              or just email me
                            </p>
                            <p class="text-start font-base mt-2 text-xl text-[#fcfaf4]">
                              nicksonlangat95[at]gmail[dot]com 
                            </p>
                            <button class="bg-[#14171a] text-[#fcfaf4] px-3 py-1.5 rounded-lg mt-4
                            transition-opacity duration-300 ease-in hover:opacity-70
                            ">Copy to clipboard</button>
                    </div>
                    
                </div>
                <div class="bg-[#14171a] w-1/2 pb-4 rounded-2xl">
                    <div class="mt-6 ml-8">
                        <form>
                            <div class="grid grid-cols-2 gap-x-6 mr-8">
                                <input type="text" class="bg-[#1b1c1d] p-2.5 placeholder:text-[#878787] text-[#fcfaf4] rounded focus:ring-0 focus:outline-none" placeholder="Name">
                                <input type="text" class="bg-[#1b1c1d] p-2.5 placeholder:text-[#878787] text-[#fcfaf4] rounded focus:ring-0 focus:outline-none" placeholder="Email">
                            </div>
                            <div class="mt-6 mr-8">
                                <textarea rows="8" class="block w-full bg-[#1b1c1d] p-2.5 placeholder:text-[#878787] text-[#fcfaf4] rounded focus:ring-0 focus:outline-none" placeholder="Talk to me..."></textarea>
                            </div>
                            <div class="flex mt-4 justify-center items-center">
                                <button class="contact-btn px-12 rounded text-[#fcfaf4] p-2  transition-opacity duration-300 ease-in hover:opacity-70">
                                Send Message
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            <div class="container mt-10 flex font-base justify-between w-1/3 mx-auto py-1">
                <h3 class="ml-8 name cursor-pointer hover:text-white text-2xl font-bold">Nick</h3>
                <ul class="mx-auto flex gap-6 text-[#878787]">
                    
                    <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#resume">Resume</a>
                </li>
                <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#projects">Projects</a>
                </li>
                <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#contact">Contact</a>
                </li>
                <li class="mt-1 cursor-pointer hover:text-white transition-all duration-300 ">
                    <a href="#articles">Blog</a>
                </li>

                </ul>
                
            </div>
            <div class="container mt-4 flex font-base justify-between mx-auto py-2">
                
                <ul class="mx-auto flex gap-6 text-[#878787]">

                    <li class="mt-1 cursor-pointer hover:text-white">
                        <svg  class="w-10 h-10" fill="#000000" viewBox="-192 -192 2304.00 2304.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-192" y="-192" width="2304.00" height="2304.00" rx="230.4" fill="#878787" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></path> </g></svg>
                        </li>
                    <li class="mt-1 cursor-pointer hover:text-white">
                        <svg class="w-10 h-10" fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="61.44" fill="#878787" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path style="display: inline; fill-rule: evenodd; clip-rule: evenodd;" d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"> </path> </g> </g></svg>
                         </li>
                         <li class="mt-1 cursor-pointer hover:text-white">
                            <svg class="w-10 h-10" viewBox="-2 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2" y="-2" width="24.00" height="24.00" rx="2.4" fill="#878787" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                             </li>
                        <li class="mt-1 cursor-pointer hover:text-white">
                            <svg class="w-10 h-10" fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="61.44" fill="#878787" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd12f847"> <path style="display: inline;" d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"> </path> </g> </g></svg>
                        </li>
                        <li class="mt-1 cursor-pointer hover:text-white">
                            <svg class="w-10 h-10" viewBox="-2 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2" y="-2" width="24.00" height="24.00" rx="2.4" fill="#878787" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>instagram [#167]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]"> </path> </g> </g> </g> </g></svg>
                        </li>

                </ul>
            </div>
            <div class="container mt-2 flex font-base justify-center items-center mx-auto">
               <h3 class="text-[#fcf4fa]">Baked & maintained by Nick Langat &copy;2023</h3>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
     name: 'About',
   data() {
       return {
           projects: [],
           articles: []
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
html{
    background-color: black;
}
</style>