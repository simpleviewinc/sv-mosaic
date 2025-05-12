import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as d,F as b}from"./index-DH4cLurB.js";import{O as f}from"./dom-BR2PSRFh.js";import"./sizes-BklZZmo4.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-FC5BdKNu.js";import"./Button-DWbCZful.js";import"./generateUtilityClasses-rDn4KRfY.js";import"./ButtonBase-C5QWJNfJ.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-BwE5duTX.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D7dAzrtf.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CZARXB1J.js";import"./createSvgIcon-BLTtL5Y9.js";import"./createSvgIcon-Dg0jtXvj.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-iddL5eaH.js";import"./TitleText-CICG0G5h.js";import"./ButtonRow-BOELw1Tj.js";import"./index-Bd1hwoKI.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-BizDTt4x.js";import"./Chip-CMTBWucu.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CGYIYrSS.js";import"./formControlState-BAKA1Iy6.js";import"./Spinner-CbDJlIED.js";import"./SubtitleText-DS-qVyZH.js";import"./CheckboxList-BfityfDx.js";import"./Checkbox-CpLxzsg0.js";import"./FormControlLabel-BKc7O7Lz.js";import"./MoreVert-CMcGX8SU.js";import"./ChevronRight-BydWUgoJ.js";import"./PageHeader-DTPo7jCK.js";import"./formats-CMvQHWsT.js";import"./RadioButton-p7gSMkH6.js";import"./StyledFormControl.styled-BMW4FUOw.js";import"./Toggle-9YEwDS0M.js";import"./Dialog-CnKRaqxG.js";import"./ChipList-DGWZ9ZdD.js";import"./SideNav-kqb59Ukq.js";import"./Snackbar-CMDie7lV.js";import"./Close-DQPzhJmS.js";import"./ClickAwayListener-Dkkr5f_-.js";const bt={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,n,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const ft=["QuickSubmit"];export{t as QuickSubmit,ft as __namedExportsOrder,bt as default};
