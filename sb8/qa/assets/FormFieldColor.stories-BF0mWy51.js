import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as b}from"./index-BP8_t0zE.js";import{u as f,F as h}from"./formUtils-C5IZy0Gf.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const je={title:"FormFields/FormFieldColor"},r=({label:t,required:o,skeleton:l,disabled:i})=>{const s=f(),{state:g,handleSubmit:x}=s,y=b.useMemo(()=>[{name:"color",label:t,type:"color",required:o,disabled:i}],[t,o,i]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(g,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...s,buttons:F(x),title:"Color Field",fields:y,skeleton:l})})]})};r.args={label:"Label",disabled:!1,required:!1,skeleton:!1};r.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"}};const n=()=>{const t=f(),{state:o,handleSubmit:l}=t,i=b.useMemo(()=>[{name:"color",label:"Regular Example",type:"color",required:!1,disabled:!1},{name:"colorDisabled",label:"Disabled Example",type:"color",required:!1,disabled:!0}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...t,buttons:F(l),title:"Form Title",description:"This is a description example",fields:i})})]})};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
