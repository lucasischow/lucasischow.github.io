(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4116:function(e,t,s){Promise.resolve().then(s.bind(s,3910))},3910:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var i=s(7437),a=s(2265),n=(0,a.lazy)(()=>s.e(850).then(s.bind(s,1648))),l=e=>{let{onClose:t,demo:{media:s,link:a}}=e,l="w-[1280px]",o="h-[90vh]";"s"===s&&(l="w-[350px]",o="h-[650px]");let d=(a.indexOf("."),""+a);return(0,i.jsx)(n,{onClose:t,children:(0,i.jsxs)("div",{className:o+" "+l,children:[(0,i.jsx)("div",{className:"absolute -top-6 left-0 w-full text-center",children:(0,i.jsx)("a",{target:"_blank",href:d,className:"w-8 text-white hover:text-blue-800",children:"Open in new tab"})}),(0,i.jsx)("iframe",{width:"100%",height:"100%",src:d})]})})},o=s(7648),d=(0,a.lazy)(()=>s.e(854).then(s.bind(s,7854))),r=(0,a.lazy)(()=>Promise.all([s.e(164),s.e(240)]).then(s.bind(s,6240)));class c{static getInstance(){return this.instance||(this.instance=new c),this.instance}on(e,t){this.callbacks[e]||(this.callbacks[e]=new Set),this.callbacks[e].add(t)}off(e,t){this.callbacks[e]&&(this.callbacks[e].delete(t),0===this.callbacks[e].size&&delete this.callbacks[e])}emit(e,t){var s;null===(s=this.callbacks[e])||void 0===s||s.forEach(e=>e(t))}destroy(){for(let e in this.callbacks)this.callbacks[e].clear(),delete this.callbacks[e]}constructor(){this.callbacks={}}}c.instance=new c;let m=c.getInstance();var p=e=>{let{children:t}=e,[s,n]=(0,a.useState)(!1),l=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=()=>{!s&&l.current&&l.current.getBoundingClientRect().bottom-window.innerHeight<100&&(m.off("scroll",e),n(!0))};return e(),m.on("scroll",e),()=>{m.off("scroll",e)}},[]),s?t:(0,i.jsx)("b",{ref:l,style:{width:0,height:0}})};let h={width:"100%"},g={width:"100%",height:"100%",borderRadius:"3px"},x={preClassName:"scrollbar-custom ",customWrapStyle:{height:180,padding:"10px"},customPreStyle:{padding:10,background:"none"}},u={preClassName:"scrollbar-custom ",customPreStyle:{padding:20,background:"none"}},k=e=>{let{item:t,highlightConfig:s,imgMaxHeight:a=""}=e;return(0,i.jsxs)("div",{onClick:null,className:"flex-1 flex justify-center min-w-0 min-h-0 overflow-hidden items-center",children:["text"===t.type&&(0,i.jsx)("span",{children:t.data}),"img"===t.type&&(0,i.jsx)("img",{className:a+" inline-block object-contain max-w-full",src:t.data,alt:""}),"code"===t.type&&(0,i.jsx)(r,{url:t.data,...s})]})};var b=e=>{let{description:t,themeColor:s="gray-300",icon:l,assets:o,stacks:r,children:c}=e,[m,b]=(0,a.useState)(-1),[y,f]=(0,a.useState)(0),w=o?o.length:0;return w>1&&(x.customWrapStyle.padding="0 1.5rem"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"min-h-6 items-stretch flex overflow-hidden",children:[l&&(0,i.jsx)("div",{className:"mr-4 sm:mr-8 max-w-12 max-h-12 sm:max-w-20 sm:max-h-20 content-center flex",children:(0,i.jsx)(p,{children:(0,i.jsx)("img",{className:"object-contain",src:l,alt:""})})}),(0,i.jsxs)("div",{className:"whitespace-pre-line content-center text-sm flex-1 "+(l?"":"content-center"),children:[(0,i.jsx)("div",{className:"break-words text-neutral-800 first-letter:text-lg first-letter:mr-[1px]",children:t instanceof Array?t.map((e,t)=>(0,i.jsx)("p",{className:"first:text-gray-600 pl-[0.9rem] mb-2 indent-[-0.9rem] first-line:indent-4",children:decodeURIComponent(e)},t)):(0,i.jsx)("p",{className:"first:text-gray-600",children:decodeURIComponent(t)})}),(0,i.jsx)(i.Fragment,{children:c})]})]}),w>0&&(0,i.jsxs)("div",{className:"pt-0 mt-4 relative ",children:[(0,i.jsx)(p,{children:(0,i.jsx)(d,{style:h,onIndexChange:e=>{f(e)},children:o.map((e,t)=>(0,i.jsx)(k,{item:e,highlightConfig:x,imgMaxHeight:"max-h-40"},t))})}),(0,i.jsx)("button",{onClick:()=>b(y),className:"absolute right-0 bottom-0 z-20 p-2 rounded-full bg-".concat(s," opacity-20 hover:opacity-100 flex items-center justify-center"),children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[(0,i.jsx)("circle",{cx:"10.5",cy:"10.5",r:"7"}),(0,i.jsx)("line",{x1:"16.5",y1:"16.5",x2:"20",y2:"20",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),r&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"mt-5 italic text-xs text-neutral-500",children:r})}),m>=0&&(0,i.jsx)(n,{onClose:()=>b(-1),children:(0,i.jsx)("div",{className:"w-[90vw] h-[90vh] overflow-hidden",children:(0,i.jsx)(p,{children:(0,i.jsx)(d,{autoplay:!1,defaultIndex:m,style:g,children:o.map((e,t)=>(0,i.jsx)(k,{item:e,highlightConfig:u},t))})})})})]})},y=e=>{let{data:{demo:t,icon:s,assets:a,description:n},onClick:l,themeColor:d}=e;return(0,i.jsx)(b,{themeColor:d,icon:s,assets:a,description:n,stacks:t&&t.stacks,children:t&&t.link&&(0,i.jsx)(o.default,{prefetch:!1,href:t.link,onClick:t.openInNewTab?null:e=>l(e,t),target:"_blank",className:"underline mr-2 text-blue-400 hover:text-blue-800",children:t.linkText||"Link"})})},f=e=>{let{data:{icon:t,list:s,description:a,stacks:n,assets:l},themeColor:d,onClick:r,...c}=e,m=s.length;return(0,i.jsx)(b,{themeColor:d,assets:l,icon:t,description:a,stacks:n,children:(0,i.jsxs)("div",{className:"mt-1 pt-1 text-sm items-center",children:[m>0&&(0,i.jsxs)("h1",{className:"mr-2 my-2 text-gray-600 mb-1",children:["Link",m>1&&"s",": "]}),(0,i.jsx)("div",{className:"gap-x-2 gap-y-1 text-sm flex flex-wrap items-center",children:s.map((e,t)=>{let s=e.linkText||t+1;return e.media,e.media,(0,i.jsx)(o.default,{prefetch:!1,href:e.link,onClick:e.openInNewTab?null:t=>r(t,e),target:"_blank",className:"underline mr-2 text-blue-400 hover:text-blue-800",children:s},t)})})]})})},w=e=>{let{data:t,sectionTheme:s}=e,[n,o]=(0,a.useState)(null),d=(e,t)=>{e.preventDefault(),o(t)};return(0,i.jsxs)("div",{className:"grid grid-cols-1 grid-flow-row gap-3",children:[t&&t.map((e,t)=>(0,i.jsx)("div",{className:"min-h-16 sm:min-h-24 items-center flex rounded-md overflow-hidden p-3 sm:p-4 border border-"+s,children:(0,i.jsxs)("div",{className:"flex flex-col overflow-hidden w-full",children:["simple"===e.type&&(0,i.jsx)(y,{themeColor:s,data:e,onClick:(e,t)=>d(e,t)}),"cluster"===e.type&&(0,i.jsx)(f,{themeColor:s,data:e,onClick:(e,t)=>d(e,t)})]})},t)),n&&(0,i.jsx)(l,{demo:n,onClose:()=>o(null)})]})};let j=["pink-400","rose-400","red-400","orange-400","amber-400","yellow-400","lime-400","green-400","emerald-400","teal-400","cyan-400","sky-400","blue-400","indigo-400","violet-400","purple-400","fuchsia-400","pink-300","rose-300","red-300","orange-300","amber-300","yellow-300","lime-300","green-300","emerald-300","cyan-300","blue-300","indigo-300","violet-600"],v=e=>{let t=e.map((t,s)=>0===s?"from-".concat(t):s===e.length-1?"to-".concat(t):"via-".concat(t));return"".concat("bg-gradient-to-b"," ").concat(t.join(" "))};var N=e=>{let{feeds:t}=e,s=[...j];return s.length=t.length,(0,i.jsx)("div",{className:"relative",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex items-start relative h-48","data-node-placehoder":!0,children:(0,i.jsx)("div",{className:"absolute h-full -left-1 flex",children:(0,i.jsx)("div",{className:"w-1 h-full "+v([j[j.length-1],s[0]])})})}),t.map((e,t)=>{let a="bg-"+s[t],n="text-"+s[t],l=s[t+1],o=v([s[t],l]);return(0,i.jsxs)("div",{className:"relative min-h-48",children:[(0,i.jsx)("div",{className:"absolute top-0 -left-1 h-full flex",children:(0,i.jsx)("div",{className:"w-1 h-full "+o})}),(0,i.jsxs)("div",{className:"sticky top-0 bg-white z-10",children:[(0,i.jsx)("div",{className:"inline-block align-middle w-4 h-1 "+a}),(0,i.jsx)("div",{className:"inline-block align-middle ml-4 w-4 h-4 drop-shadow-lg rounded-3xl border border-solid border-gray-200 "+a}),(0,i.jsx)("h1",{className:"inline-block align-middle ml-4 text-3xl font-bold drop-shadow-lg "+n,children:e.year}),(0,i.jsx)("h4",{className:"inline-block align-middle ml-4 "+n,children:e.description})]}),(0,i.jsx)("div",{className:"ml-4 md:ml-16 pb-20",children:(0,i.jsx)("div",{className:"ml-0 mt-4 flex-1 pb-0 pl-0 rounded-lg border-"+s[t],children:(0,i.jsx)(w,{data:e.data,sectionTheme:s[t]})})})]},t)})]})})},S=[{year:"2025",description:"",data:[{type:"simple",description:"Created the page you’re currently visiting.",demo:{openInNewTab:!0,linkText:"Github Repo",link:"https://github.com/17x/portfolio",stacks:"Next.js, TypeScript, and Tailwind CSS"}}]},{year:"2024",description:"",data:[{type:"simple",description:"Keep exploring the world. Obtained a visa and moved to Japan."}]},{year:"2023",description:"",data:[{type:"simple",description:"Started a gap period"}]},{year:"2022",description:"",data:[{type:"cluster",description:"data scraping",list:[],assets:[{type:"code",data:"codes/facebook-puppeteer/index.js"},{type:"code",data:"codes/88db/taskQueue.js"},{type:"img",data:"imgs/88db-01.png"}],stacks:"Selenium, Puppeteer, Node.js"},{type:"simple",description:"Developed CRM system and Website Generator system",demo:{stacks:"React, Redux, Typescript, Material-UI"},assets:[{type:"code",data:"codes/emedia-page-design/index.tsx"},{type:"code",data:"codes/emedia-platform-fed/App.tsx"}]},{type:"cluster",description:"Developed mobile Apps and published to stores",list:[{linkText:"Android APP ( download link )",openInNewTab:!0,link:"https://shop.andersonfoodsupply.com/download/anderson-shop.apk"},{linkText:"IOS APP( HongKong Only )",openInNewTab:!0,link:"https://apps.apple.com/hk/app/%E5%AE%89%E9%81%94%E9%A3%9F%E5%93%81/id1632138590"},{linkText:"Official website",openInNewTab:!0,link:"https://shop.andersonfoodsupply.com/"}],assets:[{type:"code",data:"codes/anderson-shop/pubspec.yaml"},{type:"code",data:"codes/anderson-shop/home.dart"}],stacks:"Flutter"},{type:"simple",description:"Started working as a technical partner at Times Interactive Media",assets:[],icon:"imgs/umem.png"}]},{year:"2021",description:"",data:[{type:"cluster",description:"Miscellaneous plugins and tools",list:[{link:"/demos/misc/paint-board",linkText:"paint-board"},{link:"/demos/misc/color-picker",linkText:"color-picker"}],assets:[{type:"img",data:"imgs/2021-02.png"}]},{type:"cluster",description:"Canvas effects",list:[{link:"/demos/misc/canvas-effect-1",linkText:"1"},{link:"/demos/misc/canvas-effect-2",linkText:"2"}],assets:[{type:"img",data:"imgs/2021-01.png"}]}]},{year:"2020",description:"",data:[{type:"simple",description:"Web Audio API Sample",demo:{link:"/demos/misc/web-audio-demo/3"}},{type:"simple",description:"Responsible for refactoring projects, conducting technical research, and managing polyrepos.",demo:{}}]},{year:"2019",description:"",data:[{type:"simple",description:"Started working as a front-end developer at Naozhixin Technologies",assets:[],icon:"imgs/nzx.jpg"},{type:"cluster",description:["Finished interview questions"," 1: right-click to create a dragable square on Canvas, bring it front by left-click."," 2: Render six letters on the Canvas; left-click to change the color of the clicked letter, and right-click to change the color of the three letters that the clicked letter belongs to."," 3: Render an image onto the Canvas and color the nearby pixels that SIMILAR the color of the clicked pixel."],list:[{link:"/demos/misc/nzx/q1",linkText:"Question 1",media:"l"},{link:"/demos/misc/nzx/q2",linkText:"Question 2",media:"l"},{link:"/demos/misc/nzx/q3",linkText:"Question 3",media:"l"}],assets:[{type:"img",data:"imgs/2019-01.gif"}]},{type:"simple",description:"Built and published react table plugin to NPM",demo:{link:"https://www.npmjs.com/package/rc-table-s",linkText:"NPM Link",openInNewTab:!0},assets:[{type:"img",data:"imgs/2019-02.png"}]}]},{year:"2018",description:"",data:[{type:"simple",description:"Learned React, Webpack, and ES6, applied to new projects",icon:"imgs/react.png",assets:[{type:"code",data:"codes/ak-sw-drag-edit-page/package.json"},{type:"code",data:"codes/ak-sw-drag-edit-page/webpack.config.js"},{type:"code",data:"codes/ak-sw-drag-edit-page/index.js"},{type:"code",data:"codes/ak-sw-drag-edit-page/reducer.js"}],demo:{link:"/demos/misc/ak-sw-drag-edit-page/public/",linkText:"[Static Page] Drag and drop to generate portrait page",media:"l",stacks:"React, Redux, Material-UI, Webpack"}}]},{year:"2017",description:"",data:[{type:"simple",description:"Based on the AngularJS ecosystem, developed numerous SPAs that are compatible with encapsulation into apps and browsers.",demo:{},assets:[{type:"code",data:"codes/ak-sw-tg/package.json"},{type:"code",data:"codes/ak-sw-tg/gulpfile-http.js"},{type:"code",data:"codes/ak-sw-tg/mainCtrl.js"},{type:"code",data:"codes/ak-sw-tg/route.js"}]},{type:"simple",description:"Started working for Ankai IT",demo:{link:"https://www.akxx.tech/",linkText:"Company website",media:"l"},icon:"imgs/ankai.png"},{type:"simple",description:"A SPA for job interview",demo:{stacks:"AngularJs, Ui-router, Gulp, Sass, and Python(data scraping)",link:"/demos/fzwjg/dist/",media:"s",linkText:"Demo link"}}]},{year:"2016",data:[{type:"simple",description:"August - Break time until next year"},{type:"simple",description:"diving deeper into AngularJs ecosystem",icon:"imgs/angularjs.png"},{type:"cluster",description:"Continued to sharpen skills",list:[{link:"/demos/misc/z-copy/",linkText:"Copy module",media:"l"},{link:"/demos/misc/dafeiji/",linkText:"Tiny game",media:"s"},{link:"/demos/misc/range-comp/",linkText:"Range module",media:"l"},{link:"/demos/misc/zAnchorMenuScroll/",linkText:"Scroll page sample",media:"l"},{link:"/demos/misc/zSelect/",linkText:"Selection module",media:"l"},{link:"/demos/misc/zTouch/",linkText:"Touch events module",media:"s"}],stacks:"HTML, CSS, Javascript"}]},{year:"2015",description:"",data:[{type:"cluster",description:"Started working as a front-end developer at SIGBIT Computer Co. Ltd.",list:[{link:"/demos/sigbits/dengmiSubPage/",media:"s"},{link:"/demos/sigbits/leshihuiyuanmianfeiling/",media:"s"},{link:"/demos/sigbits/LiRongHao/",media:"s"},{link:"/demos/sigbits/muqinjie/",media:"s"},{link:"/demos/sigbits/olduserhuikui/",media:"s"},{link:"/demos/sigbits/qiandaosonghaoli/",media:"s"},{link:"/demos/sigbits/tianjinmobiledownload2016chunjie/",media:"s"},{link:"/demos/sigbits/tuniu/",media:"s"}],icon:"imgs/sigbit.png",stacks:"HTML, CSS, JavaScript, JQuery, Zepto, AngularJs, Bootstrap, etc."},{type:"simple",description:"A mock webpage for my first frontend developer job interview",demo:{stacks:"HTML, CSS, JavaScript, JQuery",media:"l",link:"/demos/sinaPC/",linkText:"demo link"},icon:"imgs/sinaLogo.png"},{type:"simple",description:"Studied HTML, CSS, Javascript and JQuery from internet"}]}];let T=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,s=!1;return i=>{s||(s=!0,e(i),window.setTimeout(()=>{s=null},t))}};var C=()=>{window.addEventListener("scroll",T(()=>{m.emit("scroll")},100)),window.addEventListener("scrollend",()=>{m.emit("scroll")})};let I="CV_tips_closed_by_click_v1";var A=()=>{let[e,t]=(0,a.useState)([]),[s,l]=(0,a.useState)(!1),o=()=>{!localStorage||localStorage.getItem(I)||l(!0)},d=()=>{l(!1),localStorage&&localStorage.setItem(I,"true")};return(0,a.useEffect)(()=>{C(),o(),async function(){t(S)}()},[]),(0,i.jsxs)("div",{className:"w-5/6 mx-auto my-20",children:[(0,i.jsx)(N,{feeds:e}),s&&(0,i.jsx)(n,{onClose:d,children:(0,i.jsxs)("div",{className:"w-[50vw] sm:w-[33vw] overflow-hidden p-4",children:[(0,i.jsx)("h1",{className:"text-center mb-2",children:"Tips"}),(0,i.jsx)("p",{className:"text-sm  mb-2",children:"Some samples are designed specifically for mobile or desktop, Accessing this site from a desktop is recommended for a better experience."}),(0,i.jsx)("button",{onClick:d,className:"block my-0 mx-auto border px-2 py-1 text-sm rounded bg-sky-800 text-white active:bg-sky-600",children:"Close"})]})})]})}}},function(e){e.O(0,[648,971,117,744],function(){return e(e.s=4116)}),_N_E=e.O()}]);