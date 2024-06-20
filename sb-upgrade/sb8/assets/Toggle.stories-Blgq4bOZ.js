import{j as s}from"./jsx-runtime-qGIIFXMu.js";import{r as p}from"./index-CDs2tPxN.js";import{T as g}from"./Toggle-CBkjn9tX.js";import"./theme-tUuL1bpb.js";import"./useThemeProps-DZj2lB8w.js";import"./FormControlLabel-D6jwZlG2.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./testIds-B75WQI-K.js";const E={title:"Components/Toggle"},e=({label:t,disabled:d,required:l})=>{const[r,c]=p.useState(!1),i=async m=>{c(m)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Is toggle checked?",`${r}`]}),s.jsx(g,{label:t,disabled:d,required:l,onChange:i,checked:r})]})};e.args={label:"Label",disabled:!1,required:!1};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"}};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
  label,
  disabled,
  required
}: typeof Playground.args): ReactElement => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = async (checked: boolean) => {
    setIsChecked(checked);
  };
  return <>
            <p>
                Is toggle checked?
                {\`\${isChecked}\`}
            </p>
            <Toggle label={label} disabled={disabled} required={required} onChange={handleChange} checked={isChecked} />
        </>;
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const P=["Playground"];export{e as Playground,P as __namedExportsOrder,E as default};
