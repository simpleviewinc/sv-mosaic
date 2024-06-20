import{j as o}from"./jsx-runtime-qGIIFXMu.js";import{r as d}from"./index-CDs2tPxN.js";import{C as p}from"./CheckboxList-D367s6pM.js";import{c as m}from"./FormFieldCheckboxUtils-C4lbz8gc.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./theme-tUuL1bpb.js";import"./FormControlLabel-D6jwZlG2.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./createSvgIcon-Ca3CxB0T.js";import"./reactTools-i2anJKce.js";const E={title:"Components/CheckboxList"},e=()=>{const[t,c]=d.useState([]),i=a=>{c(a)};return o.jsxs("div",{children:[o.jsxs("div",{children:["checked:",JSON.stringify(t)]}),o.jsx(p,{checked:t,options:m,onChange:i})]})};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(): ReactElement => {
  const [checked, setChecked] = useState<MosaicLabelValue[]>([]);
  const onChange = c => {
    setChecked(c);
  };
  return <div>
            <div>
                checked:
                {JSON.stringify(checked)}
            </div>
            <CheckboxList checked={checked} options={checkboxOptions} onChange={onChange} />
        </div>;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const N=["Playground"];export{e as Playground,N as __namedExportsOrder,E as default};
