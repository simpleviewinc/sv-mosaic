import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-ePW8zFKp.js";import{u as d,F as b}from"./index-Bn1Xjit4.js";import{O as f}from"./dom-BR2PSRFh.js";import"./ExpandMore-DTgjfsqJ.js";import"./identifier-vWKndVvV.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-DOp_2lHr.js";import"./createSvgIcon-JtMyjPpt.js";import"./generateUtilityClasses-CUUJXLh7.js";import"./styled-components.browser.esm-CUKKF2J4.js";import"./ButtonBase-YTDCQqeW.js";import"./useIsFocusVisible-BxLBCNny.js";import"./ownerWindow-DvT1GKkC.js";import"./MosaicContext-CjWw6F81.js";import"./FormFieldText.styled-CoekE1cZ.js";import"./formControlState-kJY1j3p4.js";import"./Popper-DP0cm8Rf.js";import"./useTheme-DTRH4aGG.js";import"./useThemeWithoutDefault-Dj6yTNm1.js";import"./index-DnRBG-o-.js";import"./index-CKydZLen.js";import"./Button-DrJO7SQT.js";import"./index-Ca1iOyRL.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-DmKVz7XJ.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import"./DisplayText-DlqFHcnF.js";import"./ButtonRow-YhuqC_GR.js";import"./DataViewFilterDropdownButtons-B3tTaEgA.js";import"./StyledPopperPaper-8Ep909Ba.js";import"./index-B-yLbyMH.js";import"./Chip-0jtXmB96.js";import"./DataViewPrimaryFilter.styled-BsgbKxfV.js";import"./Badge-BWKQiQcj.js";import"./Text-cPxBJcyq.js";import"./PickerPanel-CNh03pIa.js";import"./PageHeader-CGRiWJUd.js";import"./Spinner-Bi6mQivf.js";import"./CheckboxList-Dy-kOrHq.js";import"./Checkbox-DHQwFOa3.js";import"./SwitchBase-BYEDHepN.js";import"./StyledOptionFormControl-Ca00866Q.js";import"./MoreVert-BnBEmsSM.js";import"./stable-BFc8HSVh.js";import"./throws-Jdg6RwkA.js";import"./Snackbar-CXJOSA6g.js";import"./Close-Da-iw-_d.js";import"./ChipList-DaRpkRZU.js";import"./RadioButton-C4xgaHsm.js";import"./Toggle-Bi6du1gm.js";import"./Dialog-oPs8S-ZP.js";import"./ThemeProvider-B65WN4y2.js";import"./SideNav-BHwtuPtb.js";import"./Card.styled-Cfnm8QOk.js";const Nt={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",intent:"primary",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const xt=["QuickSubmit"];export{t as QuickSubmit,xt as __namedExportsOrder,Nt as default};
