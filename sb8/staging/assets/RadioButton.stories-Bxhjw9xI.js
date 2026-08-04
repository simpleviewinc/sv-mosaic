import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CDlOlYQx.js";import{R as r,a as f}from"./RadioGroup-bYFNZFp8.js";const g={title:"Components/RadioButton",parameters:{layout:"centered"}},e=({label:s,checked:t,disabled:d,required:n})=>a.jsx(r,{label:s,checked:t,disabled:d,required:n});e.args={label:"Label",checked:!1,disabled:!1,required:!1};e.argTypes={label:{name:"Label"},checked:{name:"Checked"},disabled:{name:"Disabled"},required:{name:"Required"}};const l=()=>{const[s,t]=p.useState("female"),d=n=>{t(n.target.value)};return a.jsxs(f,{"aria-label":"gender",name:"gender1",value:s,onChange:d,children:[a.jsx(r,{label:"Male",disabled:!1,required:!1,value:"male"}),a.jsx(r,{label:"Female",disabled:!1,required:!1,value:"female"}),a.jsx(r,{label:"(Disabled option)",disabled:!0,required:!1,value:"disabled"})]})};var o,u,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  label,
  checked,
  disabled,
  required
}: typeof Playground.args): ReactElement => <RadioButton label={label} checked={checked} disabled={disabled} required={required} />`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,m,b;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
  const [value, setValue] = useState("female");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <RadioButton label="Male" disabled={false} required={false} value="male" />
            <RadioButton label="Female" disabled={false} required={false} value="female" />
            <RadioButton label="(Disabled option)" disabled={true} required={false} value="disabled" />
        </RadioGroup>;
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const h=["Playground","Group"],x=Object.freeze(Object.defineProperty({__proto__:null,Group:l,Playground:e,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{l as G,e as P,x as s};
