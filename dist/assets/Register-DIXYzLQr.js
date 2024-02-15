import{j as e,r as f,S as E,a as y,s as j,B as S,f as q,c as i,F,b as M,d as I,L}from"./index-BxvfZeIZ.js";import{c as C,a as u,d as k,e as P,F as O,b as v,E as $}from"./index.esm-Csaa8V35.js";import{O as A}from"./validations-BkNB8m1K.js";function B({info:a}){return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"relative flex justify-center items-center px-[--pdd] overflow-hidden font-content min-h-dvh",children:[e.jsx("img",{src:"/image/food4.jpg",alt:"",className:"absolute inset-0 w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-black/90"}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center w-full max-w-[700px] bg-black/30 p-10 rounded-md",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("div",{className:"w-full max-w-32 aspect-square bg-white rounded-full pb-7 pt-4",children:e.jsx("img",{src:a.logo,alt:"Logo de "+a.name,className:"w-full h-full object-contain object-center"})}),e.jsx("h3",{className:"text-[--c1-txt] text-3xl text-center font-title p-5",children:"Registrarse"})]}),e.jsx(R,{}),e.jsx("div",{className:"flex flex-col w-full gap-2",children:e.jsxs("div",{className:"flex flex-row justify-between mt-2",children:[e.jsx(w,{to:"/",text:"Volver al inicio"}),e.jsx(w,{to:"/login",text:"Iniciar Sesión"})]})})]})]})})}function R(){const{updateSession:a}=f.useContext(E),[l,c]=f.useState(!1),d={image:["jpg","png","jpeg"]},x=s=>d[s].map(o=>`.${o}`).toString(),p=(s,o)=>s&&d[o].indexOf(s.split(".").pop())>-1,m=1e6;let n=C().shape({name:u().required("El nombre es requerido").min(3,"Mínimo 3 caracteres").max(50,"Máximo 50 caracteres"),lastname:u().required("El apellido es requerido").min(3,"Mínimo 3 caracteres").max(50,"Máximo 50 caracteres"),photo:k().test("is-valid-type","Tipo de archivo no valido",s=>p(s&&s.name.toLowerCase(),"image")||!s).test("is-valid-size","El tamaño máximo es "+m/1e6+"MB",s=>s&&s.size<=m||!s),phone:u().required("El celular es requerido").min(10,"Mínimo 10 caracteres").max(15,"Máximo 15 caracteres"),address:u().required("La dirección es requerida").min(5,"Mínimo 5 caracteres").max(100,"Máximo 100 caracteres"),email:u().required("El email es requerido").email("El email no es valido").min(5,"Mínimo 5 caracteres").max(70,"Máximo 70 caracteres"),password:u().required("La contraseña es requerida").min(8,"Mínimo 8 caracteres").max(50,"Máximo 50 caracteres"),confirmPassword:u().required("La confirmación de contraseña es requerida").oneOf([P("password"),null],"Las contraseñas no coinciden")});return e.jsx(O,{initialValues:{name:"",lastname:"",photo:"",phone:"",address:"",email:"",password:"",confirmPassword:""},validationSchema:n,onSubmit:(s,{resetForm:o})=>{c(!0),s.photo||delete s.photo;let r=A(s);y({data:r}).then(t=>{c(!1),t!=null&&t.success?(a(t.data),j({title:"Exito",message:"Usuario creado con exito",type:"success"}),o()):j({title:"Error desde el servidor",message:t.message||"Ocurrio un error al intentar crear el usuario",type:"danger"})})},children:({setFieldValue:s,handleSubmit:o,errors:r,touched:t})=>e.jsxs("form",{onSubmit:o,className:"flex flex-col gap-9 pt-5 items-center w-full",children:[e.jsxs("div",{className:"grid sm:grid-cols-2 gap-8 w-full",children:[e.jsx(h,{name:"name",error:r.name,touched:t.name,text:"Nombre",placeholder:"Escriba su nombre"}),e.jsx(h,{name:"lastname",error:r.lastname,touched:t.lastname,text:"Apellido",placeholder:"Escriba su apellido"}),e.jsx(T,{name:"photo",error:r.photo,touched:t.photo,text:"Foto",type:"file",placeholder:"Foto",allowedExts:x("image"),setValue:s}),e.jsx(h,{name:"phone",error:r.phone,touched:t.phone,text:"Celular",placeholder:"Escriba su numer de celular"}),e.jsx(h,{name:"address",error:r.address,touched:t.address,text:"Direccion",placeholder:"Escriba su direccion "}),e.jsx(h,{name:"email",error:r.email,touched:t.email,text:"Email",placeholder:"Escriba su correo electronico"}),e.jsx(g,{name:"password",error:r.password,touched:t.password,text:"Contraseña",placeholder:"Escriba su contraseña"}),e.jsx(g,{name:"confirmPassword",error:r.confirmPassword,touched:t.confirmPassword,text:"Confirmar Contraseña",placeholder:"Confirme su contraseña"})]}),e.jsx(S,{tag:"button",type:"submit",text:l?"":"Registrarse",icon:l?q:"",classNameIcon:"animate-spin text-sm",classNameWrapper:i("w-full h-10 items-center bg-[--c6-bg] text-[--c6-txt] border-0 hover:bg-white justify-center",{"text-black/80 hover:text-black/80 bg-gray-300 hover:bg-gray-300":l})})]})})}function h({name:a,text:l,error:c,touched:d,type:x="",placeholder:p,classNameWrapper:m="",classNameInput:n=""}){const s=i("w-full bg-transparent text-[--c1-txt]",m),o=i("focus:bg-transparent not-italic placeholder-shown:italic py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",n,{"border-red-500":c&&d});return e.jsxs("div",{className:s,children:[e.jsx("span",{children:l}),e.jsx(v,{name:a,placeholder:p,as:x,className:o}),e.jsx(b,{name:a})]})}function g({name:a,text:l,error:c,touched:d,placeholder:x,classNameWrapper:p="",classNameInput:m=""}){const[n,s]=f.useState(!1),o=i("w-full bg-transparent text-[--c1-txt]",p),r=i("not-italic placeholder-shown:italic py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",m,{"border-red-500":c&&d});return e.jsxs("div",{className:o,children:[e.jsx("span",{children:l}),e.jsxs("div",{className:i("flex",r),children:[e.jsx(v,{type:n?"text":"password",className:i(r,"border-0 w-full p-0"),name:a,placeholder:x}),e.jsx("button",{className:"w-8 ml-2 opacity-50 hover:opacity-100 transition-all duration-200",onClick:()=>s(!n),type:"button",children:e.jsx(F,{icon:n?I:M,className:"text-[--c1-txt]"})})]}),e.jsx(b,{name:a})]})}function T({name:a,text:l,error:c,touched:d,type:x="text",placeholder:p,classNameWrapper:m="",classNameInput:n="",allowedExts:s,setValue:o}){const r=i("w-full bg-transparent text-[--c1-txt]",m),t=i("not-italic placeholder-shown:italic py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",n,{"border-red-500":c&&d});return e.jsxs("div",{className:r,children:[e.jsx("span",{children:l}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("label",{htmlFor:a,className:i(t,"block italic text-white/70 cursor-pointer hover:text-white/100 transition-all duration-200"),children:p}),e.jsx("input",{type:x,className:i("hidden",t),id:a,name:a,accept:s,onChange:N=>{o(a,N.currentTarget.files[0])}})]}),e.jsx(b,{name:a})]})}function b({name:a}){return e.jsx("div",{className:"w-full text-red-500 text-sm",children:e.jsx($,{name:a})})}function w({to:a,text:l,className:c}){return e.jsx(L,{to:a,className:i("text-[--c1-txt] text-sm hover:underline opacity-70",c),children:l})}export{B as default};
