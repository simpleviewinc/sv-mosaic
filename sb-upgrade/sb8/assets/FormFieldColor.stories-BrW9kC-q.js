import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as b}from"./index-CDs2tPxN.js";import{u as f,F as h}from"./formUtils-8tzQoWfa.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const je={title:"FormFields/FormFieldColor"},r=({label:t,required:o,skeleton:l,disabled:i})=>{const s=f(),{state:g,handleSubmit:x}=s,y=b.useMemo(()=>[{name:"color",label:t,type:"color",required:o,disabled:i}],[t,o,i]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(g,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...s,buttons:F(x),title:"Color Field",fields:y,skeleton:l})})]})};r.args={label:"Label",disabled:!1,required:!1,skeleton:!1};r.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"}};const n=()=>{const t=f(),{state:o,handleSubmit:l}=t,i=b.useMemo(()=>[{name:"color",label:"Regular Example",type:"color",required:!1,disabled:!1},{name:"colorDisabled",label:"Disabled Example",type:"color",required:!1,disabled:!0}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...t,buttons:F(l),title:"Form Title",description:"This is a description example",fields:i})})]})};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "color",
    label,
    type: "color",
    required,
    disabled
  }], [label, required, disabled]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Color Field" fields={fields} skeleton={skeleton} />
            </div>
        </>;
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo(() => ([{
    name: "color",
    label: "Regular Example",
    type: "color",
    required: false,
    disabled: false
  }, {
    name: "colorDisabled",
    label: "Disabled Example",
    type: "color",
    required: false,
    disabled: true
  }] as FieldDef[]), []);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
            </div>
        </>;
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const ve=["Playground","KitchenSink"];export{n as KitchenSink,r as Playground,ve as __namedExportsOrder,je as default};
