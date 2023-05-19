<template>
    <div>
        <Navigation/>
        <div class="mx-4 lg:mx-8 lg:container mx-auto mt-20 lg:mt-36 pb-4">
            <div class="flex flex-col lg:flex-row justify-between gap-6">
                <div class="lg:w-1/2 pb-4 rounded-md">
                    <div class="mt-4 mx-2 lg:mx-0 lg:ml-16 text-start">
                        <h1 class="font-base inline-flex gap-3 text-[#fcf4fa] font-bold text-2xl lg:text-4xl mr-4">Let's create something amazing
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-yellow-500 w-8 h-8 mt-0.5 mr-12 lg:mr-0 lg:mt-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </h1>
                            <p class="text-start font-base mt-6 text-xl lg:text-3xl text-[#878787]">
                               It all starts with the first step, <br>
                               hitting me up...
                            </p>
                            
                            <p class="text-start uppercase font-base mt-6 lg:text-xl text-[#878787]">
                              or call me
                            </p>
                            <p class="text-start uppercase font-base mt-2 lg:text-xl text-[#fcfaf4]">
                             +254713754946
                            </p>
                            <p class="text-start uppercase font-base mt-6 lg:text-xl text-[#878787]">
                              or just email me
                            </p>
                            <p class="text-start font-base mt-2 lg:text-xl text-[#fcfaf4]">
                              nicksonlangat95[at]gmail[dot]com 
                            </p>
                            <button v-if="!isLinkCopied"  @click="copyEmail" class="bg-[#14171a] text-[#fcfaf4] px-3 py-1.5 rounded-lg mt-4
                            transition-opacity duration-300 ease-in hover:opacity-70
                            ">Copy to clipboard</button>
                            <button v-if="isLinkCopied" class="bg-[#14171a] text-[#fcfaf4] px-3 py-1.5 rounded-lg mt-4
                            transition-opacity duration-300 ease-in hover:opacity-70
                            ">Email copied!</button>
                    </div>
                    
                </div>
                <div class="bg-[#14171a] lg:w-1/2 pb-4 rounded-md">
                    <div class="mt-6 ml-2 lg:ml-4">
                        <div class="lg:mt-16 flex flex-col pb-3 lg:pb-0 justify-center items-center" v-if="sent">
                            <span class="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 text-[#fcfaf4] h-20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                            </span>
                            <h3 class="text-[#fcfaf4] lg:text-3xl">Thank you for your message!</h3>
                            <p class="font-base text-center mt-2 lg:text-xl text-[#878787] mr-4">
                                I have received your message. I will be in touch shortly.
                            </p>
                            <a href="/" class="contact-btn mt-6  mr-8 lg:mr-0 px-12 rounded text-[#fcfaf4] p-2  transition-opacity duration-300 ease-in hover:opacity-70">
                              Homepage
                            </a>
                        </div>
                        <form v-if="!sent">
                            <div class="grid grid-cols-2 gap-x-6 mr-2 lg:mr-4">
                                <input :class="[hasError && name=='' ? 'border border-red-900' : '']" v-model="name" type="text" class="bg-[#1b1c1d] p-2.5 placeholder:text-[#878787] text-[#fcfaf4] rounded focus:ring-0 focus:outline-none" placeholder="Name" required>
                                <input v-model="email" type="text" class="bg-[#1b1c1d] p-2.5 placeholder:text-[#878787] text-[#fcfaf4] rounded focus:ring-0 focus:outline-none" placeholder="Email (optional)">
                                <p v-if="hasError && name==''" class="text-xs text-red-900 ml-1">Please fill out this field.</p>
                            </div>
                            <div class="mt-6 mr-2 lg:mr-4">
                                <textarea :class="[hasError && message=='' ? 'border border-red-900' : '']" v-model="message" rows="8" class="block w-full bg-[#1b1c1d]  p-2.5 placeholder:text-[#878787] text-[#fcfaf4] rounded focus:ring-0 focus:outline-none" placeholder="Talk to me..." required></textarea>
                                <p v-if="hasError && message==''" class="text-xs text-red-900 ml-1">Please fill out this field.</p>
                            
                            </div>
                            <div class="flex mt-4 justify-center items-center">
                                <button @click.prevent="sendMessage" class="contact-btn mr-8 lg:mr-0 px-12 rounded text-[#fcfaf4] p-2  transition-opacity duration-300 ease-in hover:opacity-70">
                                Send Message
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            
            <Footer />
            
        </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
export default {
     name: 'Contact',
     components:{
        Footer,
        Navigation
     },
   data() {
       return {
          name: "",
          email: "",
          message: "",
          sent: false,
          hasError: false,
          isLinkCopied: false,
          my_email: "nicksonlangat95@gmail.com"
       }
   },
   methods: {
       ...mapActions({
        createMessage: "createMessage"
       }),
       sendMessage() {
        this.createMessage({
            data: {
                name: this.name,
                email: this.email,
                content: this.message
            },
            cb: (res=>{
                this.sent = true
            })
       }).catch(error=>{
        this.hasError = true
       })
       
       }, 

       copyEmail() {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(this.my_email)
        } else {
            this.unsecuredCopyToClipboard(this.my_email)
        }
        this.isLinkCopied = true
        },    
        // hackish way of copying content to clipboard since 
        // navigator API is not available on non HTTPS connections.
        unsecuredCopyToClipboard(text) {
            const textArea = document.createElement("textarea")
            textArea.value = text
            document.body.appendChild(textArea)
            textArea.focus()
            textArea.select()
            try {
                document.execCommand('copy')
            } catch (err) {
                console.error('Unable to copy to clipboard', err)
            }
            document.body.removeChild(textArea)
        }
    }}
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