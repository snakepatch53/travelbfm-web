import{c as s,j as e,L as h}from"./index-tVVHshlL.js";const j=[{id:1,title:"HENDRIX",subtitle:"Cerveza artesanal, alitas con diferentes salsas, nachos y hamburguesas",link:"https://marea.pro/hendrix",img:"/businesses/1.jpg"},{id:2,title:"MUSAP BAR",subtitle:"Exquisitos platos hechos para ti",link:"https://marea.pro/musap",img:"/businesses/2.jpg"},{id:3,title:"RONCOS RESTAURANT",subtitle:"Menú de exquisitos platos hechos para paladares selectos",link:"https://marea.pro/roncos",img:"/businesses/3.jpg"},{id:4,title:"COMIDA RAPIDA DOÑA PACHI",subtitle:"Menú de exquisitos platos que se sirven en nuestro local de comida",link:"https://marea.pro/menupachi",img:"/businesses/4.jpg"},{id:5,title:"NILA EMPANADAS",subtitle:"Relleno de felicidad en cada empanada",link:"https://marea.pro/nilaempanadas",img:"/businesses/5.jpg"},{id:6,title:"TISHOS PIZZA",subtitle:"Exquisitos platos hechos para ti",link:"https://marea.pro/tishospizza",img:"/businesses/6.jpg"}];function f({classNameWrapper:o="",img:t,title:i,text:a,classNameImg:n="",classNameImgWrapper:r="",classNameTitle:l="",classNameText:c="",tag:p="link",...u}){const d=s("group flex flex-col items-center gap-3 text-[--c4-txt]",o);if(p==="link")return e.jsx(h,{className:d,...u,children:e.jsx(m,{title:i,text:a,img:t,classNameImg:n,classNameImgWrapper:r,classNameTitle:l,classNameText:c})});if(p==="a")return e.jsx("a",{target:"blank",rel:"noreferrer",className:d,...u,children:e.jsx(m,{title:i,text:a,img:t,classNameImg:n,classNameImgWrapper:r,classNameTitle:l,classNameText:c})})}function m({title:o,text:t,img:i,classNameImg:a,classNameImgWrapper:n,classNameTitle:r,classNameText:l}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s("w-full aspect-video rounded-md overflow-hidden",n),children:e.jsx("img",{src:i,className:s("w-full h-full object-cover group-hover:scale-125 transition-transform duration-200",a)})}),e.jsx("h3",{className:s("font-title text-center",r),children:o}),e.jsx("p",{className:s("font-content text-center text-sm opacity-70",l),children:t})]})}export{f as P,j as p};