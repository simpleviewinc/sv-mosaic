import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as s}from"./index-BP8_t0zE.js";import{R as m}from"./RadioButton-CO2cFro8.js";import{_ as f}from"./extends-CF3RwP-h.js";import{a as _,g as M,s as N,u as U,_ as S,b as P,d as E,o as L,n as I,p as T}from"./styled-DFznwKy7.js";function H(e){return M("MuiFormGroup",e)}_("MuiFormGroup",["root","row","error"]);const O=s.createContext(void 0);function k(){return s.useContext(O)}function W({props:e,states:o,muiFormControl:r}){return o.reduce((a,t)=>(a[t]=e[t],r&&typeof e[t]>"u"&&(a[t]=r[t]),a),{})}const $=["className","row"],z=e=>{const{classes:o,row:r,error:a}=e;return E({root:["root",r&&"row",a&&"error"]},H,o)},A=N("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})(({ownerState:e})=>f({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),J=s.forwardRef(function(o,r){const a=U({props:o,name:"MuiFormGroup"}),{className:t,row:p=!1}=a,b=S(a,$),g=k(),i=W({props:a,muiFormControl:g,states:["error"]}),c=f({},a,{row:p,error:i.error}),R=z(c);return n.jsx(A,f({className:P(R.root,t),ownerState:c,ref:r},b))});function K(e){return M("MuiRadioGroup",e)}_("MuiRadioGroup",["root","row","error"]);const Q=s.createContext(void 0),X=["actions","children","className","defaultValue","name","onChange","value"],Y=e=>{const{classes:o,row:r,error:a}=e;return E({root:["root",r&&"row",a&&"error"]},K,o)},Z=s.forwardRef(function(o,r){const{actions:a,children:t,className:p,defaultValue:b,name:g,onChange:i,value:c}=o,R=S(o,X),v=s.useRef(null),B=Y(o),[x,C]=L({controlled:c,default:b,name:"RadioGroup"});s.useImperativeHandle(a,()=>({focus:()=>{let l=v.current.querySelector("input:not(:disabled):checked");l||(l=v.current.querySelector("input:not(:disabled)")),l&&l.focus()}}),[]);const V=I(r,v),h=T(g),D=s.useMemo(()=>({name:h,onChange(l){C(l.target.value),i&&i(l,l.target.value)},value:x}),[h,i,C,x]);return n.jsx(Q.Provider,{value:D,children:n.jsx(J,f({role:"radiogroup",ref:V,className:P(B.root,p)},R,{children:t}))})}),ee={title:"Components/RadioButton"},u=({label:e,disabled:o,required:r})=>n.jsx(m,{label:e,disabled:o,required:r});u.args={label:"Label",disabled:!1,required:!1};u.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"}};const d=()=>{const[e,o]=s.useState("female"),r=a=>{o(a.target.value)};return n.jsxs(Z,{"aria-label":"gender",name:"gender1",value:e,onChange:r,children:[n.jsx(m,{label:"Male",disabled:!1,required:!1,value:"male"}),n.jsx(m,{label:"Female",disabled:!1,required:!1,value:"female"}),n.jsx(m,{label:"(Disabled option)",disabled:!0,required:!1,value:"disabled"})]})};var G,w,y;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`({
  label,
  disabled,
  required
}: typeof Playground.args): ReactElement => <RadioButton label={label} disabled={disabled} required={required} />`,...(y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var q,j,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`(): ReactElement => {
  const [value, setValue] = useState("female");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <RadioButton label="Male" disabled={false} required={false} value="male" />
            <RadioButton label="Female" disabled={false} required={false} value="female" />
            <RadioButton label="(Disabled option)" disabled={true} required={false} value="disabled" />
        </RadioGroup>;
}`,...(F=(j=d.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const oe=["Playground","Group"],ne=Object.freeze(Object.defineProperty({__proto__:null,Group:d,Playground:u,__namedExportsOrder:oe,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as G,u as P,ne as s};
