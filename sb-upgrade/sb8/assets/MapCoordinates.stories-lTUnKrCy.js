import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as K}from"./index-CDs2tPxN.js";import{r as S}from"./storyUtils-ByV2Bsyv.js";import{u as b,F as y}from"./formUtils-8tzQoWfa.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Ze={title:"FormFields/FormFieldMapCoordinates"},V=async()=>({map:{lat:32.369247319672866,lng:-110.96678114089914}}),t=({label:o,required:r,skeleton:i,disabled:a,initialCenterKnob:s,zoom:l,focusZoom:p,prepopulate:h})=>{const m=b(),{state:A,handleSubmit:x}=m,C=K.useMemo(()=>[{name:"map",label:o,type:"mapCoordinates",required:r,disabled:a,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:s,zoom:l,focusZoom:p}}],[a,o,s,r,l,p]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{...m,buttons:S(x),title:"Map Coordinates Field",fields:C,getFormValues:h?V:void 0,skeleton:i}),e.jsx("pre",{children:JSON.stringify(A,null,"  ")})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,initialCenterKnob:{lat:48.858321470423576,lng:2.2945004162050564},zoom:7,focusZoom:11,prepopulate:!1};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},initialCenterKnob:{name:"Initial Center"},zoom:{name:"Zoom",control:{type:"range",min:0,max:18}},focusZoom:{name:"Focus Zoom",control:{type:"range",min:0,max:18}},prepopulate:{name:"Prepopulate"}};const q=[{name:"mapStandard",label:"Standard map",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"mapZoom",label:"Map with zoom set to 8",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",zoom:8,initialCenter:{lat:40.7127753,lng:-74.0059728}}},{name:"mapWithInitalPosition",label:"Map with an inital map position set",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:{lat:19.3884403,lng:-99.1747252}}},{name:"mapDisabled",label:"Map disabled",type:"mapCoordinates",required:!1,disabled:!0,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}}],n=()=>{const o=b(),{state:r,handleSubmit:i}=o;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(y,{...o,buttons:S(i),title:"Form Title",description:"This is a description example",fields:q})]})};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  initialCenterKnob,
  zoom,
  focusZoom,
  prepopulate
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "map",
    label,
    type: "mapCoordinates",
    required,
    disabled,
    inputSettings: {
      googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
      initialCenter: initialCenterKnob,
      zoom,
      focusZoom
    }
  }], [disabled, label, initialCenterKnob, required, zoom, focusZoom]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Map Coordinates Field" fields={fields} getFormValues={prepopulate ? getFormValues : undefined} skeleton={skeleton} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,f,F;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(F=(f=n.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const ke=["Playground","KitchenSink"];export{n as KitchenSink,t as Playground,ke as __namedExportsOrder,Ze as default};
