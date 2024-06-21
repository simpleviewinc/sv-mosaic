import{j as o}from"./jsx-runtime-qGIIFXMu.js";import{r as p}from"./index-CDs2tPxN.js";import{C as m}from"./CheckboxList-Br5Y5VJF.js";import{c as d}from"./FormFieldCheckboxUtils-C4lbz8gc.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./theme-tUuL1bpb.js";import"./FormControlLabel-D6jwZlG2.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./createSvgIcon-Ca3CxB0T.js";import"./reactTools-i2anJKce.js";const _={title:"Components/CheckboxList"},e=()=>{const[t,n]=p.useState([]),i=a=>{n(a)};return o.jsxs("div",{children:[o.jsxs("div",{children:["checked:",JSON.stringify(t)]}),o.jsx(m,{checked:t,options:d,onChange:i})]})};var r,s,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const J=["Playground"];export{e as Playground,J as __namedExportsOrder,_ as default};
