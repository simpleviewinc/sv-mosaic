import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as u}from"./index-BP8_t0zE.js";import{M as r,a as m}from"./Button-OJc5Vo8h.js";function d(o){const c=u.useContext(r),n=[...o.options];o.placeholder!==void 0&&n.unshift({label:o.placeholder,value:""});const l=n.map(e=>{const s=function(){o.onChange(e.value),c.onClose()},a=e.value===""&&o.value===void 0||e.value===o.value;return t.jsx(m,{mIcon:e.mIcon,color:e.color,label:e.label,selected:a,onClick:s},e.value)});return t.jsx(u.Fragment,{children:l})}export{d as M};
