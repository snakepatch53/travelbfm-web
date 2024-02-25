import{r as n,j as e,P,C as v,v as I,k as r,z as O,w as D,x as w,m as F}from"./index-CG9mGcM9.js";import{u as M,C as q,a as R,h as U,c as t,d as V,e as _,f as a,g as z}from"./useCrudPanel-DUkQ6LXF.js";import{a as G,b as H,c as L,e as W,g as $,C as A,M as J}from"./ModalProducts-Cg9XEyY-.js";import"./validations-R_Xd7w2Q.js";function Z(){const{entityName:d,pluralEntityName:c,head:u,table:x,form:p,confirm:C,progress:j,datalist:m,$form:g,handleModeNew:h,handleModeEdit:f,handleModeDelete:b,hanleCancel:o,handleSubmit:y,handleDelete:N,searchValue:S,searchOnChange:B}=M({entityName:"Categoria",pluralEntityName:"Categorias",excludeFieldsValidationEdit:["icon"],searchFields:["name","state"],crudGet:G,crudStorage:H,crudUpdate:L,crudDestroy:W}),[E,T]=n.useState([]);n.useEffect(()=>{$().then(s=>T(s))},[]);const[k,i]=n.useState(null);return e.jsxs(P,{className:"flex flex-col gap-7 w-full",children:[e.jsx(v,{src:"/image/food4.jpg"}),e.jsx(q,{title:c,icon:I,isOpen:u,onClickNew:h,searchValue:S,searchOnChange:B}),e.jsx(R,{titles:["Icono","Nombre","Descripción","Tienda"],dataList:m,isOpen:x,onRowPrint:s=>{var l;return e.jsxs("tr",{children:[e.jsx(U,{code:s.icon}),e.jsx(t,{value:s.name}),e.jsx(t,{value:s.description}),e.jsx(t,{value:(l=s==null?void 0:s.business)==null?void 0:l.name}),e.jsx(V,{children:e.jsxs(A,{children:[e.jsx(r,{text:"Productos",icon:O,type:"cancel",onClick:()=>i(s.business_id)}),e.jsx(r,{text:"Editar",icon:D,type:"edit",onClick:()=>f(s)}),e.jsx(r,{text:"Borrar",icon:w,type:"delete",onClick:()=>b(s)})]})})]},s.id)}}),e.jsxs(_,{title:d,isOpen:p,onClickCancel:o,onSubmit:y,formRef:g,children:[e.jsx(a,{label:"Nombre",placeholder:"Escriba el nombre de la categoria ",name:"name",required:!0}),e.jsx(a,{label:"Icono",placeholder:"Selecione un icono ",name:"icon"}),e.jsx(a,{label:"Descripcion",placeholder:"Escriba una descripcion",name:"description",required:!0}),e.jsxs(a,{label:"Negocio",name:"business_id",type:"select",required:!0,children:[e.jsx("option",{value:"",children:"Seleccione un Negocio"}),E.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})]}),e.jsx(z,{isOpen:C,text:"¿Seguro de eliminar este usuario?",onClickDelete:N,onClickCancel:o}),e.jsx(F,{isOpen:j,text:"Procesando tu solicitud..."}),e.jsx(J,{businessId:k,setBusinessId:i})]})}export{Z as default};
