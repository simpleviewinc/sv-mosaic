import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{u as c,a as x,v as b,F as y}from"./formUtils-Hz1OPN0j.js";import{O as h}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-UT9jNI-S.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";import"./Blank-DPcqZTKv.js";const St={title:"Components/Form"},e=({showState:a})=>{const r=c(),{state:s,handleSubmit:l}=r;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const p=o.useMemo(()=>[{name:"text1",label:"Full Name",type:"text",instructionText:"testing"},{name:"text2",label:"Email",type:"text",validators:[x,b]},{name:"text3",label:"Age",type:"text"},{name:"text4",label:"City",type:"text"}],[]),u=l(d=>{alert("Form submitted with the following data: "+JSON.stringify(d,null," "))});return t.jsxs(t.Fragment,{children:[a&&t.jsx("pre",{children:JSON.stringify(s,null,"  ")}),t.jsx("p",{children:"Here is the form"}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(y,{...r,fields:p})}),t.jsx("button",{onClick:u,children:"Submit"})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  showState
}: typeof SubmitExternalButtons.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "text1",
    label: "Full Name",
    type: "text",
    instructionText: "testing"
  }, {
    name: "text2",
    label: "Email",
    type: "text",
    validators: [required, validateEmail]
  }, {
    name: "text3",
    label: "Age",
    type: "text"
  }, {
    name: "text4",
    label: "City",
    type: "text"
  }], []);
  const clickHandler = handleSubmit(data => {
    alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
  });
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <p>Here is the form</p>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} fields={fields} />
            </div>
            <button onClick={clickHandler}>Submit</button>
        </>;
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["SubmitExternalButtons"];export{e as SubmitExternalButtons,Et as __namedExportsOrder,St as default};
