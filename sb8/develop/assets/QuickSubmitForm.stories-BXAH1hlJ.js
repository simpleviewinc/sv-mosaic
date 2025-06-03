import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as d,F as b}from"./index-xUlmrCO2.js";import{O as f}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-DbGdO_qH.js";import"./Button-Bb1YkNRl.js";import"./DefaultPropsProvider-DAx12mnL.js";import"./generateUtilityClasses-B-YHycAP.js";import"./ButtonBase-DI0zIr47.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-DJOBlCMp.js";import"./Popper-DwGs7ij-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-CEnrwtsk.js";import"./useThemeWithoutDefault-_krlN3OB.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./createSvgIcon-SiNoGNLO.js";import"./createSvgIcon-Dpio520k.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-CaKiXxBh.js";import"./DisplayText-p-dXd17y.js";import"./ButtonRow-o01CmugY.js";import"./index-Cx_oxk9s.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DOv3O6Qd.js";import"./Chip-CxjPie9P.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-1uP8QWr0.js";import"./formControlState-Cf1KMWlV.js";import"./Spinner-Bh-LCVD3.js";import"./Text-SN-dsdu2.js";import"./CheckboxList-M1uSKKL_.js";import"./Checkbox-B7o2aMoG.js";import"./FormControlLabel-DHYheffG.js";import"./MoreVert-Bzx_zck9.js";import"./ChevronRight-C0GgObWN.js";import"./PageHeader-smgljVMb.js";import"./formats-CMvQHWsT.js";import"./RadioButton-D8tkv9AU.js";import"./StyledFormControl.styled-BUp5Nrjc.js";import"./Toggle-BqCsCBy-.js";import"./Dialog-B-sGlfn4.js";import"./ThemeProvider-xpJBffxI.js";import"./ChipList-BIFBiti5.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-BrqHKIPs.js";import"./Close-ClEuQas1.js";import"./ClickAwayListener-Dkkr5f_-.js";const gt={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const Nt=["QuickSubmit"];export{t as QuickSubmit,Nt as __namedExportsOrder,gt as default};
