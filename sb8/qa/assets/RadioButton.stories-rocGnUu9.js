import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{R as f}from"./RadioButton-DUvfdQ-A.js";import{_ as p}from"./extends-CF3RwP-h.js";import{g as P,a as M,s as E,u as B,_ as j,b as V,e as D,k as L,j as T,l as I}from"./styled-BlYH_7wi.js";function U(e){return P("MuiFormGroup",e)}M("MuiFormGroup",["root","row","error"]);const k=l.createContext();function H(){return l.useContext(k)}function N({props:e,states:o,muiFormControl:r}){return o.reduce((a,t)=>(a[t]=e[t],r&&typeof e[t]>"u"&&(a[t]=r[t]),a),{})}const O=["className","row"],W=e=>{const{classes:o,row:r,error:a}=e;return D({root:["root",r&&"row",a&&"error"]},U,o)},z=E("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})(({ownerState:e})=>p({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),$=l.forwardRef(function(o,r){const a=B({props:o,name:"MuiFormGroup"}),{className:t,row:b=!1}=a,g=j(a,O),c=H(),v=N({props:a,muiFormControl:c,states:["error"]}),m=p({},a,{row:b,error:v.error}),d=W(m);return n.jsx(z,p({className:V(d.root,t),ownerState:m,ref:r},g))}),A=l.createContext(void 0),J=["actions","children","defaultValue","name","onChange","value"],K=l.forwardRef(function(o,r){const{actions:a,children:t,defaultValue:b,name:g,onChange:c,value:v}=o,m=j(o,J),d=l.useRef(null),[q,w]=L({controlled:v,default:b,name:"RadioGroup"});l.useImperativeHandle(a,()=>({focus:()=>{let s=d.current.querySelector("input:not(:disabled):checked");s||(s=d.current.querySelector("input:not(:disabled)")),s&&s.focus()}}),[]);const F=T(r,d),_=s=>{w(s.target.value),c&&c(s,s.target.value)},S=I(g);return n.jsx(A.Provider,{value:{name:S,onChange:_,value:q},children:n.jsx($,p({role:"radiogroup",ref:F},m,{children:t}))})}),Q={title:"Components/RadioButton"},u=({label:e,disabled:o,required:r})=>n.jsx(f,{label:e,disabled:o,required:r});u.args={label:"Label",disabled:!1,required:!1};u.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"}};const i=()=>{const[e,o]=l.useState("female"),r=a=>{o(a.target.value)};return n.jsxs(K,{"aria-label":"gender",name:"gender1",value:e,onChange:r,children:[n.jsx(f,{label:"Male",disabled:!1,required:!1,value:"male"}),n.jsx(f,{label:"Female",disabled:!1,required:!1,value:"female"}),n.jsx(f,{label:"(Disabled option)",disabled:!0,required:!1,value:"disabled"})]})};var R,x,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`({
  label,
  disabled,
  required
}: typeof Playground.args): ReactElement => <RadioButton label={label} disabled={disabled} required={required} />`,...(C=(x=u.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var h,G,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
  const [value, setValue] = useState("female");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <RadioButton label="Male" disabled={false} required={false} value="male" />
            <RadioButton label="Female" disabled={false} required={false} value="female" />
            <RadioButton label="(Disabled option)" disabled={true} required={false} value="disabled" />
        </RadioGroup>;
}`,...(y=(G=i.parameters)==null?void 0:G.docs)==null?void 0:y.source}}};const X=["Playground","Group"],ae=Object.freeze(Object.defineProperty({__proto__:null,Group:i,Playground:u,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{i as G,u as P,ae as s};
