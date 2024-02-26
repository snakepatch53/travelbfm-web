import{j as e,B as c,e as b,r as m,I as w,c as g,F as y,g as C,P}from"./index-BykTsgFK.js";import{S as u,A as N,E as v,a as r}from"./effect-fade-Bp4GvLTp.js";import{H as S}from"./History-DAbASlts.js";import{T as x}from"./Title-Qfo1BIYQ.js";import{P as k,S as o}from"./PartnerItem-yDhbD-Ua.js";import{F as V}from"./Form-DYMoaDyu.js";import"./index.esm--OHrqmgB.js";const I=[{id:1,title:"Nuestro Menu",subtitle:"Conoce nuestra variedad de platillos",button:"Ver Menu",to:"/business",img:"/image/food2.jpg"},{id:2,title:"Comida saludable",subtitle:"Disfruta de alimentos saludables",button:"Conocer mas",to:"/business",img:"/image/food3.jpg"},{id:3,title:"Variedad de platillos",subtitle:"No tienes que preocuparte por la variedad",button:"Ver Menu",to:"/business",img:"/image/food4.jpg"},{id:4,title:"Bebidas",subtitle:"Tambien puedes encontrar bebidas",button:"Refréscate",to:"/business",img:"/image/drink1.jpg"}];function L(){return e.jsx("div",{className:"relative w-full h-screen",children:e.jsx(u,{className:"w-full h-full",modules:[N,v],effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:5e3},speed:1e3,loop:!0,spaceBetween:0,slidesPerView:1,children:I.map(s=>e.jsx(r,{className:"relative w-full h-full",children:e.jsxs("div",{className:"w-full h-full",children:[e.jsx("div",{className:"absolute inset-0 z-10 bg-gradient-to-b from-black via-black/50 to-transparent"}),e.jsx("div",{className:"absolute inset-0 z-10 bg-gradient-to-b from-black/50"}),e.jsx("img",{src:s.img,alt:s.title,className:"w-full h-full object-cover"}),e.jsxs("div",{className:"px-[--pdd] absolute inset-0 z-50 flex flex-col items-center justify-center",children:[e.jsx("h2",{style:{textShadow:h.textShadow},className:"text-5xl md:text-8xl font-title2 text-center text-balance text-[--c2-bg] leading-9",children:s.title}),e.jsx("p",{style:{textShadow:h.textShadow},className:"text-white text-xl md:text-2xl text-balance leading-7 font-content text-center w-3/4 tracking-wider md:mt-2",children:s.subtitle}),e.jsx(c,{text:s.button,to:s.to,icon:b,classNameWrapper:"mt-16",classNameIcon:"group-hover/button:translate-x-1 transition-translate duration-100"})]})]})},s.id))})})}const h={textShadow:"1px 0px 1px #000, -1px 0px 1px #000, 0px 1px 1px #000, 0 -1px 1px #000"};function A(){var j;const{products:s,categories:t}=m.useContext(w),[a,n]=m.useState(null),d=()=>s===null?null:a===null?s:s==null?void 0:s.filter(l=>{var f;return((f=l.category)==null?void 0:f.id)===a}),p=l=>()=>{n(l)};return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(x,{text:"Menú"}),e.jsxs("div",{className:"scroll-style flex flex-col sm:flex-row gap-2 pt-5 overflow-x-auto max-w-full pb-2",children:[e.jsx(c,{text:"TODOS LOS PLATOS",tag:"button",style:"2",classNameWrapper:g("text-nowrap uppercase",{"bg-[--c2-bg] text-[--c2-txt2]":a===null}),onClick:p(null)}),t==null?void 0:t.slice(0,t.lenght).map(l=>e.jsx(c,{text:l.name,tag:"button",style:"2",classNameWrapper:g("text-nowrap uppercase",{"bg-[--c2-bg] text-[--c2-txt2]":a===l.id}),onClick:p(l.id)},l.id))]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 w-full p-5 md:p-10 lg:p-20",children:[(j=d())==null?void 0:j.slice(0,8).map(l=>e.jsx(M,{...l},l.id)),s&&e.jsx(c,{text:"Ver más",icon:b,style:"2",to:"/login",classNameWrapper:"col-span-1 sm:col-span-2 mx-auto mt-5"}),!s&&e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{}),e.jsx(i,{})]})]})]})}function M({name:s,description:t,photo_url:a,category:n}){var d;return e.jsxs("div",{className:"flex flex-row items-center gap-5 p-3 font-content ",children:[e.jsx("img",{src:a,className:"w-20 rounded-full aspect-square border-solid border-4 border-gray-300 object-cover"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("h3",{className:"flex font-title text-sm",children:s}),e.jsx("p",{className:"text-sm leading-4 max-h-8 overflow-hidden opacity-70",children:t}),e.jsxs("div",{className:"flex items-center gap-[1px]",children:[e.jsx("span",{className:"font-title text-[0.8rem] opacity-70",children:(d=n==null?void 0:n.business)==null?void 0:d.name}),e.jsx("svg",{viewBox:"0 0 24 24",className:"w-[12px] fill-blue-500 pt-[1.5px]",children:e.jsx("path",{d:"M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"})})]})]})]})}function i(){return e.jsxs("div",{className:"flex flex-row items-center gap-5 p-3 font-content animate-pulse bg-black/15 m-2 rounded-xl",children:[e.jsx("div",{className:"w-20 min-w-20 rounded-full aspect-square border-solid border-4 border-gray-400 object-cover bg-gray-200"}),e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("h3",{className:"w-48 h-3 bg-slate-500 rounded-full "}),e.jsx("p",{className:"w-72 h-3 bg-slate-500 rounded-full "}),e.jsxs("div",{className:"flex flex-row w-full items-center gap-1",children:[e.jsx("span",{className:"flex w-28 h-3 bg-slate-500 rounded-full "}),e.jsx("div",{className:"w-3 h-3 bg-slate-500 rounded-full"})]})]})]})}function R(){return e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"/image/food4.jpg",alt:"imagen de vegetales",className:"absolute w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-sm"}),e.jsxs("div",{className:" relative z-10 flex flex-col items-center py-52 gap-10",children:[e.jsx(x,{text:"Reserva Ahora",dark:!0,big:!0}),e.jsx(c,{text:"Reservar",to:"/login",classNameWrapper:"border-[white] text-[white] hover:bg-white"})]})]})}function F(){const{businesses:s}=m.useContext(w);return e.jsxs("div",{className:"relative flex flex-col gap-20 ",children:[e.jsx(x,{text:"Nuestros Asociados",dark:!0,big:!0}),e.jsxs(u,{className:"w-full h-full",modules:[N,v],autoplay:{delay:2e3},speed:1e3,loop:!0,spaceBetween:40,slidesPerView:5,breakpoints:{0:{slidesPerView:1},320:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1280:{slidesPerView:5}},children:[s==null?void 0:s.map(t=>e.jsx(r,{className:"relative w-full h-full",children:e.jsx(k,{img:t.logo_url,title:t.name,text:t.description,href:t.link,tag:"link",to:"/business",classNameWrapper:"group",classNameImg:"group-hover:scale-100 object-contain",classNameTitle:"group-hover:underline",classNameText:"group-hover:underline"})},t.id)),!s&&e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsx(o,{})}),e.jsx(r,{children:e.jsx(o,{})}),e.jsx(r,{children:e.jsx(o,{})}),e.jsx(r,{children:e.jsx(o,{})}),e.jsx(r,{children:e.jsx(o,{})})]})]})]})}const z=[{id:1,name:"Alex",title:"Manager",description:"rem iP5um dolor amet, consectetur adipi5icing elit, do eiusmod tempor incididunt Ut labore dolore magna aliaua. ",img:"/customers/1.png"},{id:2,name:"Rapuncel",title:"Gerente",description:"Conoce nuestra variedad de platillos",img:"/customers/2.png"},{id:3,name:"Juan",title:"holas",description:"rem iP5um dolor amet, consectetur adipi5icing elit, do eiusmod tempor incididunt Ut labore dolore magna aliaua. ",img:"/customers/3.png"},{id:4,name:"Marco",title:"M",description:"Lorem iP5um dolor amet, consectetur adipi5icing elit, do eiusmod tempor incididunt Ut labore dolore magna aliaua. Ut enim ad minim nostrud exercitation ullarnco nisi.",img:"/customers/4.png"},{id:5,name:"Luis",title:"Diseñador",description:"holis",img:"/customers/5.png"}];function B({info:s}){return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col items-center ",children:[e.jsx(x,{text:"Nuestros Clientes",big:!0}),e.jsx("p",{className:"text-base sm:px-20 lg:px-60 text-center font-content opacity-80 mt-5",children:"Lee las reseñas de nuestros clientes y descubre por qué eligen nuestra empresa para sus necesidades."})]}),e.jsxs("div",{className:"max-w-[900px] mx-auto",children:[e.jsx(u,{className:"w-full h-full py-20",loop:!0,spaceBetween:40,slidesPerView:3,grabCursor:!0,breakpoints:{0:{slidesPerView:1},320:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:3}},children:z.map(t=>e.jsx(r,{className:"group relative w-full aspect-video rounded-lg shadow-xl overflow-hidden bg-[--c2-bg] cursor-pointer",onClick:a=>{console.log(a)},children:e.jsx("img",{src:t.img,className:"w-full h-full object-contain object-bottom group-hover:scale-125 transition-transform duration-200"})},t.id))}),e.jsx(T,{text:`¡Increíble experiencia con ${s.name}! Su calidad, funcionalidad y atención al cliente son excepcionales. Recomiendo totalmente ${s.name} a todos.`,src:"/img/happygirld.png",name:"Alexandra"})]})]})}function T({src:s,text:t,name:a}){return e.jsxs("div",{className:"relative flex flex-col font-content items-center shadow-xl p-3 sm:p-10",children:[e.jsx("img",{src:s,className:" absolute -z-10 h-full opacity-50 object-contain object-bottom"}),e.jsx(y,{icon:C,className:"text-3xl text-[--c3-txt2]"}),e.jsx("p",{className:"text-sm text-center p-5 opacity-80",style:{textShadow:"0 0 10px rgba(0,0,0,0.5)"},children:t}),e.jsx("h3",{className:"font-title text-xl text-[--c3-txt2] ",children:a})]})}function $({info:s}){return e.jsxs(P,{className:"min-h-screen",children:[e.jsx(L,{}),e.jsx("section",{children:e.jsx(S,{})}),e.jsx("section",{children:e.jsx(R,{})}),e.jsx("section",{className:"relative z-10 px-[--pdd] py-20",children:e.jsx("div",{className:"container",children:e.jsx(A,{})})}),e.jsxs("section",{className:"relative bg-[--c1-bg] mt-20",children:[e.jsx("svg",{viewBox:"0 0 1440 320",className:"absolute left-0 w-full bottom-full fill-[--c1-bg] translate-y-1",children:e.jsx("path",{d:"M0,224L120,229.3C240,235,480,245,720,208C960,171,1200,85,1320,42.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"})}),e.jsx("div",{className:"px-[--pdd] pb-32 pt-16",children:e.jsx("div",{className:"container",children:e.jsx(F,{})})})]}),e.jsx("section",{className:" px-[--pdd] py-20",children:e.jsx("div",{className:"container",children:e.jsx(V,{info:s})})}),e.jsx("section",{className:"px-[--pdd] py-20",children:e.jsx("div",{className:"container",children:e.jsx(B,{info:s})})})]})}export{$ as default};
