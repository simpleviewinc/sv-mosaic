import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as l}from"./index-CDs2tPxN.js";import{R as p}from"./RadioButton-DCf-nOaB.js";import{_ as f}from"./extends-CF3RwP-h.js";import{g as P,a as E,s as M,u as B,_ as q,b as I,e as V,k as D,j as L,l as N}from"./styled-P6hUx81_.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./FormControlLabel-D6jwZlG2.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./createSvgIcon-Ca3CxB0T.js";import"./createChainedFunction-BO_9K8Jh.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./emotion-unitless.esm-sScrWPmR.js";function T(e){return P("MuiFormGroup",e)}E("MuiFormGroup",["root","row","error"]);const U=l.createContext();function k(){return l.useContext(U)}function H({props:e,states:o,muiFormControl:r}){return o.reduce((a,t)=>(a[t]=e[t],r&&typeof e[t]>"u"&&(a[t]=r[t]),a),{})}const W=["className","row"],O=e=>{const{classes:o,row:r,error:a}=e;return V({root:["root",r&&"row",a&&"error"]},T,o)},$=M("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})(({ownerState:e})=>f({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),z=l.forwardRef(function(o,r){const a=B({props:o,name:"MuiFormGroup"}),{className:t,row:b=!1}=a,g=q(a,W),c=k(),R=H({props:a,muiFormControl:c,states:["error"]}),m=f({},a,{row:b,error:R.error}),i=O(m);return n.jsx($,f({className:I(i.root,t),ownerState:m,ref:r},g))}),A=l.createContext(void 0),J=["actions","children","defaultValue","name","onChange","value"],K=l.forwardRef(function(o,r){const{actions:a,children:t,defaultValue:b,name:g,onChange:c,value:R}=o,m=q(o,J),i=l.useRef(null),[w,F]=D({controlled:R,default:b,name:"RadioGroup"});l.useImperativeHandle(a,()=>({focus:()=>{let s=i.current.querySelector("input:not(:disabled):checked");s||(s=i.current.querySelector("input:not(:disabled)")),s&&s.focus()}}),[]);const _=L(r,i),j=s=>{F(s.target.value),c&&c(s,s.target.value)},S=N(g);return n.jsx(A.Provider,{value:{name:S,onChange:j,value:w},children:n.jsx(z,f({role:"radiogroup",ref:_},m,{children:t}))})}),pe={title:"Components/RadioButton"},u=({label:e,disabled:o,required:r})=>n.jsx(p,{label:e,disabled:o,required:r});u.args={label:"Label",disabled:!1,required:!1};u.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"}};const d=()=>{const[e,o]=l.useState("female"),r=a=>{o(a.target.value)};return n.jsxs(K,{"aria-label":"gender",name:"gender1",value:e,onChange:r,children:[n.jsx(p,{label:"Male",disabled:!1,required:!1,value:"male"}),n.jsx(p,{label:"Female",disabled:!1,required:!1,value:"female"}),n.jsx(p,{label:"(Disabled option)",disabled:!0,required:!1,value:"disabled"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Playground"};d.__docgenInfo={description:"",methods:[],displayName:"Group"};var h,v,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  disabled,
  required
}: typeof Playground.args): ReactElement => <RadioButton label={label} disabled={disabled} required={required} />`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,G,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
  const [value, setValue] = useState("female");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <RadioButton label="Male" disabled={false} required={false} value="male" />
            <RadioButton label="Female" disabled={false} required={false} value="female" />
            <RadioButton label="(Disabled option)" disabled={true} required={false} value="disabled" />
        </RadioGroup>;
}`,...(y=(G=d.parameters)==null?void 0:G.docs)==null?void 0:y.source}}};const fe=["Playground","Group"];export{d as Group,u as Playground,fe as __namedExportsOrder,pe as default};
