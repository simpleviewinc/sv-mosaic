import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as c,a as x,v as b,F as y}from"./formUtils-BfbmhTFo.js";import{O as h}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-BH1ITVt0.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-CBllSdZE.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-DosTBnE9.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const St={title:"Components/Form"},e=({showState:a})=>{const r=c(),{state:s,handleSubmit:l}=r;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const p=o.useMemo(()=>[{name:"text1",label:"Full Name",type:"text",instructionText:"testing"},{name:"text2",label:"Email",type:"text",validators:[x,b]},{name:"text3",label:"Age",type:"text"},{name:"text4",label:"City",type:"text"}],[]),u=l(d=>{alert("Form submitted with the following data: "+JSON.stringify(d,null," "))});return t.jsxs(t.Fragment,{children:[a&&t.jsx("pre",{children:JSON.stringify(s,null,"  ")}),t.jsx("p",{children:"Here is the form"}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(y,{...r,fields:p})}),t.jsx("button",{onClick:u,children:"Submit"})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
