(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4116:function(e,t,l){Promise.resolve().then(l.bind(l,299))},299:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return p}});var n=l(7437),s=l(2265),r=l(4887),a=e=>{let{children:t,onClose:l}=e;return(0,s.useEffect)(()=>{let e=e=>{console.log(e.key),"Escape"===e.key&&l&&l()},t=e=>(e.preventDefault(),e.stopPropagation(),!1);return document.addEventListener("keydown",e),window.addEventListener("scroll",t),document.documentElement.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),window.removeEventListener("scroll",t),document.documentElement.style.overflow="auto"}},[l]),(0,r.createPortal)((0,n.jsxs)("div",{className:"fixed z-20 inset-0 flex items-center justify-center bg-black bg-opacity-50",onClick:l,children:[(0,n.jsx)("button",{className:"absolute block w-auto h-auto top-0 right-3 text-white hover:text-gray-600 text-4xl",onClick:l,"aria-label":"Close modal",children:"\xd7"}),(0,n.jsx)("div",{className:"relative bg-white rounded-lg shadow-lg",onClick:e=>e.stopPropagation(),children:t})]}),document.body)};let i=l(357).env.DOC_URL||"";var c=e=>{let{demo:{media:t,link:l}}=e,s="w-[1280px]",r="h-[90vh]";"s"===t&&(s="w-[350px]",r="h-[650px]");let a=(-1===l.indexOf(".")?i:"")+l;return(0,n.jsxs)("div",{className:r+" "+s,children:[(0,n.jsx)("div",{className:"absolute -top-6 left-0 w-full text-center",children:(0,n.jsx)("a",{target:"_blank",href:a,className:"w-8 text-white hover:text-blue-800",children:"Open in new tab"})}),(0,n.jsx)("iframe",{width:"100%",height:"100%",src:a})]})},d=l(7138),o=e=>{let{icon:t}=e;return t?(0,n.jsx)("div",{className:"mr-8 p-2 w-20 h-20 content-center",children:(0,n.jsx)("img",{className:"inline-block object-contain max-h-full",src:t.src,alt:""})}):null},m=e=>{let{description:t,icon:l,children:s}=e;return(0,n.jsxs)("div",{className:"whitespace-pre-line content-center text-sm flex-1  "+(l?"":"content-center"),children:[(0,n.jsx)("p",{className:"break-words text-neutral-800 first-letter:text-2xl first-letter:mr-[1px]",children:decodeURIComponent(t)}),(0,n.jsx)(n.Fragment,{children:s})]})},x=e=>{let{data:{demo:t,icon:l,description:s},onClick:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{icon:l}),(0,n.jsxs)(m,{icon:l,description:s,children:[t&&t.link&&(0,n.jsx)(d.default,{href:t.link,onClick:e=>r(e,t),target:"_blank",className:"underline mr-2 text-blue-400 hover:text-blue-800",children:t.linkText||"Link"}),t&&t.stacks&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"mt-5 italic text-xs text-neutral-500",children:t.stacks})})]})]})},h=e=>{let{data:{icon:t,list:l,description:s,stacks:r},onClick:a,...i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{icon:t}),(0,n.jsxs)(m,{icon:t,description:s,children:[(0,n.jsxs)("div",{className:"mt-1 pt-1 text-sm flex items-start",children:[(0,n.jsx)("h1",{className:"mr-2",children:"Links: "}),(0,n.jsx)("div",{className:"gap-x-2 gap-y-1 text-sm flex flex-wrap items-center",children:l.map((e,t)=>(0,n.jsx)(d.default,{href:e.link,onClick:t=>a(t,e),target:"_blank",className:"block text-center min-w-6 px-2 rounded border text-blue-400 hover:text-blue-800",children:e.linkText||t+1},t))})]}),r&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"mt-5 italic text-xs text-neutral-500",children:r})})]})]})},u=e=>{let{data:t,sectionTheme:l}=e,[r,i]=(0,s.useState)(null),d=(e,t)=>{e.preventDefault(),i(t)};return(0,n.jsxs)("div",{className:"grid grid-cols-1 grid-flow-row gap-3",children:[t&&t.map((e,t)=>(0,n.jsxs)("div",{className:"min-h-10 items-center flex rounded-md overflow-hidden p-4 border drop-shadow-md border-"+l,children:["simple"===e.type&&(0,n.jsx)(x,{data:e,onClick:(e,t)=>d(e,t)}),"cluster"===e.type&&(0,n.jsx)(h,{data:e,onClick:(e,t)=>d(e,t)})]},t)),r&&(0,n.jsx)(a,{onClose:()=>i(null),children:(0,n.jsx)(c,{demo:r})})]})};let j=["pink-400","rose-400","red-400","orange-400","amber-400","yellow-400","lime-400","green-400","emerald-400","teal-400","cyan-400","sky-400","blue-400","indigo-400","violet-400","purple-400","fuchsia-400","pink-300","rose-300","red-300","orange-300","amber-300","yellow-300","lime-300","green-300","emerald-300","cyan-300","blue-300","indigo-300","violet-600"],v=e=>{let t=e.map((t,l)=>0===l?"from-".concat(t):l===e.length-1?"to-".concat(t):"via-".concat(t));return"".concat("bg-gradient-to-b"," ").concat(t.join(" "))};var f=e=>{let{feeds:t}=e,l=[...j];return l.length=t.length,(0,n.jsx)("div",{className:"relative",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex items-start relative h-48",children:(0,n.jsx)("div",{className:"absolute h-full -left-1 flex",children:(0,n.jsx)("div",{className:"w-1 h-full "+v([j[j.length-1],l[0]])})})}),t.map((e,t)=>{let s="bg-"+l[t],r="text-"+l[t],a=l[t+1],i=v([l[t],a]);return(0,n.jsxs)("div",{className:"relative min-h-48",children:[(0,n.jsx)("div",{className:"absolute top-0 -left-1 h-full flex",children:(0,n.jsx)("div",{className:"w-1 h-full "+i})}),(0,n.jsxs)("div",{className:"sticky top-0 bg-white z-10",children:[(0,n.jsx)("div",{className:"inline-block align-middle w-4 h-1 "+s}),(0,n.jsx)("div",{className:"inline-block align-middle ml-4 w-4 h-4 drop-shadow-lg rounded-3xl border border-solid border-gray-200 "+s}),(0,n.jsx)("h1",{className:"inline-block align-middle ml-4 text-3xl font-bold drop-shadow-lg "+r,children:e.year}),(0,n.jsx)("h4",{className:"inline-block align-middle ml-4 "+r,children:e.description})]}),(0,n.jsx)("div",{className:"ml-16 pb-20",children:(0,n.jsx)("div",{className:"ml-0 mt-4 flex-1 pb-0 pl-0 rounded-lg border-"+l[t],children:(0,n.jsx)(u,{data:e.data,sectionTheme:l[t]})})})]},t)})]})})},p=()=>{let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async function(){let{data:e}=await l.e(699).then(l.bind(l,8699));t(e)})()},[]),(0,n.jsx)("div",{className:"w-5/6 mx-auto my-20",children:(0,n.jsx)(f,{feeds:e})})}}},function(e){e.O(0,[349,971,23,744],function(){return e(e.s=4116)}),_N_E=e.O()}]);