(function(){"use strict";var t={7633:function(t,e,s){var r=s(7195),n=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},a=[],i=s(1001),o={},l=(0,i.Z)(o,n,a,!1,null,null,null),c=l.exports,u=s(2241),d=function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._m(0),e("Projects",{staticClass:"pt-12",attrs:{id:"projects"}}),e("Clones",{staticClass:"pt-16",attrs:{id:"clones"}}),e("Articles",{staticClass:"pt-16",attrs:{id:"articles"}}),e("Contact",{staticClass:"pt-16",attrs:{id:"contact"}})],1)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-8"},[e("img",{staticClass:"object-cover w-48 h-48 rounded-full ring ring-gray-300 rounded-full mx-auto",attrs:{src:s(7701),alt:""}}),e("h3",{staticClass:"font-base mt-2 intro text-white font-bold text-xl lg:text-5xl text-center"},[t._v(" Software engineer. I help startups design, build & "),e("br"),t._v(" deploy systems that scale. I also mentor & tutor "),e("br"),t._v(" junior devs and I give back to the tech community "),e("br"),t._v(" through writing. I code in Python, Go and JavaScript. ")])])}],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto mt-8"},[e("h3",{staticClass:"text-white text-4xl font-bold uppercase font-base"},[t._v("articles")]),e("p",{staticClass:"text-white mt-4 font-base"},[t._v("No better way to give back to the tech community than by passing down what I have learnt in my journey so far. Enjoy!")]),e("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2 mt-6 gap-x-8 gap-y-6"},t._l(t.articles,(function(s){return e("div",{key:s.id,staticClass:"bg-[#18181b] pb-2"},[e("h3",{staticClass:"font-base font-bold text-blue-300 mt-2 ml-2"},[t._v(t._s(s.title))]),e("p",{staticClass:"font-base text-white text-xs mt-4 ml-2"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"flex py-2 justify-center"},[e("a",{staticClass:"mt-8 mr-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{target:"_blank",href:s.canonical_url}},[t._v("Read More")])])])})),0)])},m=[],p=s(408),g={name:"Articles",data(){return{articles:[]}},methods:{...(0,p.nv)({fetchArticles:"fetchArticles"}),getArticles(){this.fetchArticles({cb:t=>{this.articles=t}})}},mounted(){this.getArticles()}},v=g,b=(0,i.Z)(v,h,m,!1,null,null,null),x=b.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4 container mx-auto"},[t._m(0),e("div",{staticClass:"grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-x-8 gap-y-8"},t._l(t.projects,(function(s){return e("div",{key:s.id,staticClass:"bg-[#18181b] pb-2"},[e("img",{staticClass:"rounded-lg",attrs:{src:s.image,alt:""}}),e("div",[e("h3",{staticClass:"font-base text-white mt-2 ml-2"},[t._v(t._s(s.name))]),e("p",{staticClass:"font-base text-white mt-2 ml-2"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"flex py-2 justify-between"},[e("a",{staticClass:"mt-8 ml-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{target:"_blank",href:s.live_link}},[t._v("Demo")]),e("a",{staticClass:"mt-8 mr-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{target:"_blank",href:s.code_link}},[t._v("Code")])])])])})),0)])},_=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-white text-4xl font-bold uppercase font-base"},[t._v("clones")]),e("p",{staticClass:"text-white mt-4 font-base"},[t._v(" When I am free I like to rebuild some of the popular platforms that I admire :) ")])])}],C={name:"Clones",data(){return{projects:[]}},methods:{...(0,p.nv)({fetchCloneProjects:"fetchCloneProjects"}),getProjects(){this.fetchCloneProjects({cb:t=>{this.projects=t}})}},mounted(){this.getProjects()}},y=C,k=(0,i.Z)(y,w,_,!1,null,null,null),j=k.exports,P=function(){var t=this,e=t._self._c;return e("nav",[e("div",{staticClass:"container mx-auto flex justify-between"},[t._m(0),e("div",{staticClass:"flex lg:hidden"},[e("button",{staticClass:"text-white hover:text-white focus:outline-none focus:text-white",attrs:{type:"button","aria-label":"toggle menu"},on:{click:function(e){t.isOpen=!t.isOpen}}},[t.isOpen?t._e():e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"}})]),t.isOpen?e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})]):t._e()])]),e("div",{staticClass:"absolute inset-x-0 z-20 w-48 shadow-lg rounded-lg px-6 py-6 mt-4 transition-all duration-300 ease-in-out bg-[#0F172A] md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center",class:[t.isOpen?"translate-x-0 opacity-100 ":"opacity-0 -translate-x-full"]},[t._m(1)])])])},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-4"},[e("img",{staticClass:"mt-6",attrs:{src:s(9017),alt:""}}),e("h3",{staticClass:"text-white font-base font-bold mt-8 text-2xl"},[t._v("Nick Langat")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col lg:gap-4 md:flex-row md:mx-6"},[e("a",{staticClass:"lg:mt-8 lg:border lg:border-white lg:rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{href:"#projects"}},[t._v(" Projects ")]),e("a",{staticClass:"lg:mt-8 lg:border lg:border-white lg:rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{href:""}},[t._v(" Resume ")]),e("a",{staticClass:"lg:mt-8 lg:border lg:border-white lg:rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{href:"#contact"}},[t._v(" Contact ")])])}],O={data(){return{isOpen:!1}}},Z=O,F=(0,i.Z)(Z,P,A,!1,null,null,null),T=F.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-4 container mx-auto"},[t._m(0),e("div",{staticClass:"grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-x-8 gap-y-8"},t._l(t.projects,(function(s){return e("div",{key:s.id,staticClass:"bg-[#18181b] pb-2"},[e("img",{staticClass:"rounded-lg",attrs:{src:s.image,alt:""}}),e("div",[e("h3",{staticClass:"font-base text-white mt-2 ml-2"},[t._v(t._s(s.name))]),e("p",{staticClass:"font-base text-white mt-2 ml-2"},[t._v(" "+t._s(s.description)+" ")]),e("div",{staticClass:"flex py-2 justify-between"},[e("a",{staticClass:"mt-8 ml-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{target:"_blank",href:s.live_link}},[t._v("Demo")]),e("a",{staticClass:"mt-8 mr-2 border border-white rounded-full px-8 py-2 text-white hover:bg-white hover:text-[#0F172A] duration-300 transition-colors",attrs:{target:"_blank",href:s.code_link}},[t._v("Code")])])])])})),0)])},N=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-white text-4xl font-bold uppercase font-base"},[t._v("projects")]),e("p",{staticClass:"text-white mt-4 font-base"},[t._v("That showcase my skills and general background in building softwre.")])])}],S={name:"Projects",data(){return{projects:[]}},methods:{...(0,p.nv)({fetchProjects:"fetchProjects"}),getProjects(){this.fetchProjects({cb:t=>{this.projects=t}})}},mounted(){this.getProjects()}},E=S,L=(0,i.Z)(E,I,N,!1,null,null,null),M=L.exports,B=function(){var t=this;t._self._c;return t._m(0)},R=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container pb-16 mx-auto"},[e("div",[e("h3",{staticClass:"text-white text-center text-4xl font-bold uppercase font-base"},[t._v("find me on")]),e("div",{staticClass:"mt-4 grid grid-cols-4 lg:grid-cols-6 gap-y-4"},[e("a",{attrs:{href:"https://github.com/nicksonlangat",target:"_blank"}},[e("img",{staticClass:"h-20",attrs:{src:s(6300),alt:""}})]),e("a",{attrs:{href:"mailto:nicksonlangat95@gmail.com",target:"_blank"}},[e("img",{staticClass:"h-20",attrs:{src:s(6590),alt:""}})]),e("a",{attrs:{href:"https://www.linkedin.com/in/langat-nickson-26081119a/",target:"_blank"}},[e("img",{staticClass:"h-20",attrs:{src:s(9890),alt:""}})]),e("a",{attrs:{href:"https://twitter.com/NicksonLangat20",target:"_blank"}},[e("img",{staticClass:"h-20",attrs:{src:s(6582),alt:""}})]),e("a",{attrs:{href:"https://wa.me/0713754946",target:"_blank"}},[e("img",{staticClass:"h-20",attrs:{src:s(1102),alt:""}})]),e("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100002338703390&mibextid=ZbWKwL",target:"_blank"}},[e("img",{staticClass:"h-20",attrs:{src:s(4728),alt:""}})])])])])}],W={},D=(0,i.Z)(W,B,R,!1,null,null,null),q=D.exports,z={name:"Home",components:{Navbar:T,Projects:M,Clones:j,Articles:x,Contact:q}},G=z,H=(0,i.Z)(G,d,f,!1,null,null,null),J=H.exports;r.ZP.use(u.ZP);const K=[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,2168))}],U=new u.ZP({mode:"history",base:"/",routes:K});var $=U,Q=s(306),V=(t="application/json")=>{let e={Accept:"application/json","Content-Type":t};const s=Q.Z.create({baseURL:"https://old.techwithnick.com/",withCredentials:!1,headers:e});return s};r.ZP.use(p.ZP);var X=new p.ZP.Store({state:{},getters:{},mutations:{},actions:{async fetchProjects({commit:t},{cb:e}){try{const t=await V().get("/api/projects/?is_clone=false");e&&e(t.data.results)}catch(s){return await Promise.reject(s)}},async fetchCloneProjects({commit:t},{cb:e}){try{const t=await V().get("/api/projects/?is_clone=true");e&&e(t.data.results)}catch(s){return await Promise.reject(s)}},async fetchArticles({commit:t},{cb:e}){try{const t=await V().get("https://dev.to/api/articles?username=nick_langat");e&&e(t.data)}catch(s){return await Promise.reject(s)}}},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:$,store:X,render:t=>t(c)}).$mount("#app")},9017:function(t,e,s){t.exports=s.p+"img/codelogo_v2.ac0efdf0.svg"},4728:function(t,e,s){t.exports=s.p+"img/iconmonstr-facebook-3.e1b246b6.svg"},6300:function(t,e,s){t.exports=s.p+"img/iconmonstr-github-3.51a21e67.svg"},6590:function(t,e,s){t.exports=s.p+"img/iconmonstr-gmail-3.7f6c6c30.svg"},9890:function(t,e,s){t.exports=s.p+"img/iconmonstr-linkedin-3.e236b24b.svg"},6582:function(t,e,s){t.exports=s.p+"img/iconmonstr-twitter-3.fca90720.svg"},1102:function(t,e,s){t.exports=s.p+"img/iconmonstr-whatsapp-3.84037402.svg"},7701:function(t,e,s){t.exports=s.p+"img/WhatsApp Image 2023-04-14 at 15.14.29.fa41427d.jpeg"}},e={};function s(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,r,n,a){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],a=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(s.O).every((function(t){return s.O[t](r[l])}))?r.splice(l--,1):(o=!1,a<i&&(i=a));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,n,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,r){return s.f[r](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.dbcf3cf8.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="nick-website:";s.l=function(r,n,a,i){if(t[r])t[r].push(n);else{var o,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+a),o.src=r),t[r]=[n];var f=function(e,s){o.onerror=o.onload=null,clearTimeout(h);var n=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(s)})),e)return e(s)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.f.j=function(e,r){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(s,r){n=t[e]=[s,r]}));r.push(n[2]=a);var i=s.p+s.u(e),o=new Error,l=function(r){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,n[1](o)}};s.l(i,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,a,i=r[0],o=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var u=l(s)}for(e&&e(r);c<i.length;c++)a=i[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(u)},r=self["webpackChunknick_website"]=self["webpackChunknick_website"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7633)}));r=s.O(r)})();
//# sourceMappingURL=app.14612780.js.map