import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as d,F as b}from"./index-BeCxSKiY.js";import{O as f}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./sizes-DkIXWPpc.js";import"./ExpandMore-JUNNgEdW.js";import"./identifier-DOqdnZ6L.js";import"./createSvgIcon-B2sN9389.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./useMosaicTranslation-di9nduwf.js";import"./testIds-DLbO0bd9.js";import"./TitleWrapper-CQxWIXzH.js";import"./Button-CN4kYzMe.js";import"./ButtonBase-Dg-QHo0d.js";import"./index-CYsLg4TE.js";import"./Popover-BG0BPeg-.js";import"./Popper-DKTKzQfx.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CYj0-5X2.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-C5wOwzPe.js";import"./toNumber-DuWhFW-p.js";import"./DataViewFilterDropdownButtons-DRwFtKQ6.js";import"./StyledPopperPaper-DKpxPU4i.js";import"./index-CtsnE9bo.js";import"./Chip-CpsUtANy.js";import"./DataViewPrimaryFilter.styled-hTjiiCYc.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-D4_DzPYT.js";import"./PageHeader-Rtx_tFBF.js";import"./FormFieldText.styled-CCsJeQGV.js";import"./formControlState-BI4toe_X.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-CIADAAOD.js";import"./Checkbox-DnVUUwfp.js";import"./StyledOptionFormControl-CmOcJT1x.js";import"./MoreVert-BXVssJ4w.js";import"./formats-CMvQHWsT.js";import"./Snackbar-Bv8HGMID.js";import"./Close-BKfiyhHV.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-TQ6-UhAA.js";import"./RadioButton-1BL3SEux.js";import"./Toggle-BYU1iYU_.js";import"./Dialog-Bg1_LB1W.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-CFjdJbjv.js";const vt={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",intent:"primary",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
