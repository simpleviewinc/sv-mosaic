import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as o}from"./index-CDs2tPxN.js";import{u as c,a as x,v as b,F as y}from"./formUtils-CJK8oCl3.js";import{O as h}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const ht={title:"Components/Form"},e=({showState:a})=>{const r=c(),{state:s,handleSubmit:l}=r;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const p=o.useMemo(()=>[{name:"text1",label:"Full Name",type:"text",instructionText:"testing"},{name:"text2",label:"Email",type:"text",validators:[x,b]},{name:"text3",label:"Age",type:"text"},{name:"text4",label:"City",type:"text"}],[]),u=l(d=>{alert("Form submitted with the following data: "+JSON.stringify(d,null," "))});return t.jsxs(t.Fragment,{children:[a&&t.jsx("pre",{children:JSON.stringify(s,null,"  ")}),t.jsx("p",{children:"Here is the form"}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(y,{...r,fields:p})}),t.jsx("button",{onClick:u,children:"Submit"})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};e.__docgenInfo={description:"",methods:[],displayName:"SubmitExternalButtons"};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["SubmitExternalButtons"];export{e as SubmitExternalButtons,ft as __namedExportsOrder,ht as default};
