import{j as a}from"./jsx-runtime-nGUw9YhZ.js";import{r as u}from"./index-BP8_t0zE.js";import{D as p}from"./DataViewPrimaryFilter-4MzIGpV0.js";import{D as w}from"./DataViewFilterMultiselectDropdownContent-LrLFz5bJ.js";import{D}from"./FormFieldText.styled-BIYxLo8o.js";const b=[{label:"In",value:"in"},{label:"Not In",value:"not_in"},{label:"All",value:"all"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],O={in:"",not_in:"Not In - ",all:"All - "};function F(e){var c,r;const[t,l]=u.useState({anchorEl:null,selected:[],dropdownOpen:!1}),d=e.data.value||[],s=e.data.comparison||"in";u.useEffect(()=>{let n=!0;async function h(){const E=await e.args.getSelected(d);l({...t,selected:E})}return n&&h(),()=>{n=!1}},[e.data]);const m=function(n){l({...t,anchorEl:n.currentTarget})},i=function(){l({...t,anchorEl:null})},f=function(){l({...t,dropdownOpen:!0})},g=function(){l({...t,dropdownOpen:!1})},x=function(n){n.value.length>0||n.comparison==="exists"||n.comparison==="not_exists"?e.onChange(n):e.onChange(void 0),i()};let o;s==="exists"?o="EXISTS":s==="not_exists"?o="NOT EXISTS":t.selected.length>0?o=`${O[s]}${(c=t.selected[0])==null?void 0:c.label}`:o="";const v=e.args&&e.args.comparisons?b.filter(n=>e.args.comparisons.includes(n.value)):void 0;return a.jsxs("span",{children:[a.jsx(p,{label:e.label,value:o,onClick:m,multiselect:t==null?void 0:t.selected}),a.jsx(D,{anchorEl:t.anchorEl,onClose:i,onEntered:f,onExited:g,children:a.jsx(w,{comparison:s,comparisons:v,selected:t.selected,getOptions:e.args.getOptions,isOpen:t.dropdownOpen,onApply:x,placeholder:(r=e.args)==null?void 0:r.placeholder,limit:e.args.limit})})]})}export{F as D};
