import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as K}from"./index-BP8_t0zE.js";import{r as S}from"./storyUtils-ByV2Bsyv.js";import{u as b,F as y}from"./formUtils-BR5ocB9f.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const Ze={title:"FormFields/FormFieldMapCoordinates"},V=async()=>({map:{lat:32.369247319672866,lng:-110.96678114089914}}),t=({label:o,required:r,skeleton:i,disabled:a,initialCenterKnob:s,zoom:l,focusZoom:p,prepopulate:h})=>{const m=b(),{state:A,handleSubmit:x}=m,C=K.useMemo(()=>[{name:"map",label:o,type:"mapCoordinates",required:r,disabled:a,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:s,zoom:l,focusZoom:p}}],[a,o,s,r,l,p]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{...m,buttons:S(x),title:"Map Coordinates Field",fields:C,getFormValues:h?V:void 0,skeleton:i}),e.jsx("pre",{children:JSON.stringify(A,null,"  ")})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,initialCenterKnob:{lat:48.858321470423576,lng:2.2945004162050564},zoom:7,focusZoom:11,prepopulate:!1};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},initialCenterKnob:{name:"Initial Center"},zoom:{name:"Zoom",control:{type:"range",min:0,max:18}},focusZoom:{name:"Focus Zoom",control:{type:"range",min:0,max:18}},prepopulate:{name:"Prepopulate"}};const q=[{name:"mapStandard",label:"Standard map",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"mapZoom",label:"Map with zoom set to 8",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",zoom:8,initialCenter:{lat:40.7127753,lng:-74.0059728}}},{name:"mapWithInitalPosition",label:"Map with an inital map position set",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:{lat:19.3884403,lng:-99.1747252}}},{name:"mapDisabled",label:"Map disabled",type:"mapCoordinates",required:!1,disabled:!0,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}}],n=()=>{const o=b(),{state:r,handleSubmit:i}=o;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(y,{...o,buttons:S(i),title:"Form Title",description:"This is a description example",fields:q})]})};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
