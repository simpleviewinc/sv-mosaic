import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as d,F as b}from"./index-yDZ0j7Wx.js";import{O as f}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./sizes-DkIXWPpc.js";import"./ExpandMore-Ca3pe8z0.js";import"./identifier-DOqdnZ6L.js";import"./createSvgIcon-DDyBApXB.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./ButtonBase-O4ZQd6U4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./MosaicContext-Y61KIvFP.js";import"./FormFieldText.styled-e8Bs0syX.js";import"./formControlState-BI4toe_X.js";import"./Popper-CeYJ7yNz.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./Button-CyFYeSR6.js";import"./index-CYsLg4TE.js";import"./useToggle-CTbnrs6g.js";import"./testIds-oQNwr1rf.js";import"./TitleWrapper-DK3mQSoI.js";import"./containerQuery-CYj0-5X2.js";import"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-B33uQ4OQ.js";import"./DataViewFilterDropdownButtons-B-4fHIWu.js";import"./StyledPopperPaper-BODJ-ail.js";import"./index-DW-iQxit.js";import"./Chip-CuRU8A0j.js";import"./DataViewPrimaryFilter.styled-EiL82tvk.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-BjpwXlnw.js";import"./PageHeader-t08h7SxQ.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-Dtr7xjiR.js";import"./Checkbox-Be3Yhveb.js";import"./StyledOptionFormControl-Br1jmfxi.js";import"./MoreVert-BAJenQd7.js";import"./throws-DLZ75Q5e.js";import"./formats-CMvQHWsT.js";import"./Snackbar-BY140rqK.js";import"./Close-DizofMnI.js";import"./ClickAwayListener-Cp7Ry44a.js";import"./ChipList-DjriK11X.js";import"./stable-BFc8HSVh.js";import"./RadioButton-DplP-WlB.js";import"./Toggle-BL_WBRmO.js";import"./Dialog-zScg2qCO.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-CFjdJbjv.js";const vt={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",intent:"primary",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
    intent: "primary",
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const wt=["QuickSubmit"];export{t as QuickSubmit,wt as __namedExportsOrder,vt as default};
