import{j as a}from"./jsx-runtime-nGUw9YhZ.js";import{r as u}from"./index-BP8_t0zE.js";import{s as v}from"./theme-D4oZEIDo.js";import{D as E}from"./DataViewPrimaryFilter-BFFlBPmL.js";import{b as S}from"./Button-D45VzSit.js";import{M as x}from"./MenuSelect-C5aqLYLX.js";function w(e){return a.jsx(S,{anchorEl:e.anchorEl,open:!!e.anchorEl,onClose:e.onClose,children:e.children})}const C=v.span``;function F(e){var s,c;const[n,o]=u.useState({anchorEl:null,selected:void 0,options:[]});if(e.args.required&&!e.data.value)throw new Error("Invalid use-case, a value is required but none was provided");const l=(s=e.data)==null?void 0:s.value;u.useEffect(()=>{let t=!0;async function h(){const m=await e.args.getSelected(l),g=await e.args.getOptions();o({...n,options:g.docs,selected:m})}return t&&h(),()=>{t=!1}},[e.data]);const d=function(t){o({...n,anchorEl:t.currentTarget})},i=function(){o({...n,anchorEl:null})};let r;n.selected!==void 0&&(r=n.selected.label);const f=function(t){t===""||t===void 0?e.onChange(void 0):e.onChange({value:t}),i()};return a.jsxs(C,{children:[a.jsx(E,{label:e.label,value:r,onClick:d}),a.jsx(w,{onClose:i,anchorEl:n.anchorEl,children:a.jsx(x,{placeholder:(c=e.args)!=null&&c.required?void 0:"Any...",value:l,options:n.options,onChange:f})})]})}export{F as D};