import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as p}from"./index-BP8_t0zE.js";import{T as g}from"./Toggle-BQ1JdWW7.js";import"./theme-CtvfJOCv.js";import"./useThemeProps-Ds-LJhvX.js";import"./FormControlLabel-CIIRzCdb.js";import"./formControlState-CeBwnzuK.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useControlled-im5M3O13.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./testIds-B75WQI-K.js";const P={title:"Components/Toggle"},e=({label:t,disabled:d,required:l})=>{const[s,c]=p.useState(!1),i=async m=>{c(m)};return r.jsxs(r.Fragment,{children:[r.jsxs("p",{children:["Is toggle checked?",`${s}`]}),r.jsx(g,{label:t,disabled:d,required:l,onChange:i,checked:s})]})};e.args={label:"Label",disabled:!1,required:!1};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const R=["Playground"];export{e as Playground,R as __namedExportsOrder,P as default};
