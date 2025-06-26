import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as d,F as b}from"./index-BzvhE4oF.js";import{O as f}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-aVcmUYMZ.js";import"./sizes-CTdyEcea.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-D4ztpYuS.js";import"./Button-Cu24UfKA.js";import"./identifier-C21A9frq.js";import"./generateUtilityClasses-iHFtG1jj.js";import"./ButtonBase-CLHtCICo.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-Csnu-DvG.js";import"./Popper-B4A_VUge.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-4eCcP-Dc.js";import"./useThemeWithoutDefault-BHc79qG-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-D9vD66Ez.js";import"./createSvgIcon-DLboviGw.js";import"./createSvgIcon-YkkRvR3V.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DM2nLVeQ.js";import"./DisplayText-BRdY6ERT.js";import"./ButtonRow-Cj7WA1zR.js";import"./index-DDIZOs0d.js";import"./debounce-D-BUC-g1.js";import"./ExpandMore-CEbXN-sG.js";import"./Chip-BxvGyYQV.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CW8xvHG-.js";import"./formControlState-FGREjXRn.js";import"./Spinner-C5cgjXi2.js";import"./Text-Bw6wJuVZ.js";import"./CheckboxList-B0rkeBY0.js";import"./Checkbox-ig6Jea2e.js";import"./FormControlLabel-sQC-fLMo.js";import"./DataViewPrimaryFilter.styled-DJMCb03L.js";import"./MoreVert-DAsd8IpG.js";import"./ChevronRight-BMdJevFR.js";import"./PageHeader-ClUPNuza.js";import"./formats-CMvQHWsT.js";import"./ChipList-63E8Z3sb.js";import"./RadioButton-Bcxn9PJS.js";import"./StyledFormControl.styled-BQMYotuj.js";import"./Toggle-CrhCMNND.js";import"./Dialog-CCRRhmOO.js";import"./ThemeProvider-DKfWeLFc.js";import"./SideNav-AzQy47h5.js";import"./Snackbar-DyF0qJal.js";import"./Close-CheCpke4.js";import"./ClickAwayListener-Dkkr5f_-.js";const Nt={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  showSections
}: typeof QuickSubmit.args): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "firstName",
    label: "First Name",
    type: "text"
  }, {
    name: "lastName",
    label: "Last Name",
    type: "text"
  }, {
    name: "age",
    label: "Age",
    type: "text"
  }], []);
  const buttons = useMemo<ButtonProps[]>(() => [{
    label: "Save",
    color: "yellow",
    variant: "contained",
    type: "submit"
  }], []);
  const onSubmit = handleSubmit(data => {
    alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
  });
  return <div style={{
    height: "100vh"
  }}>
            <Form {...controller} buttons={buttons} title="Quick Submit" fields={fields} sections={showSections ? sections : undefined} onSubmit={onSubmit} autoFocus />
        </div>;
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const xt=["QuickSubmit"];export{t as QuickSubmit,xt as __namedExportsOrder,Nt as default};
