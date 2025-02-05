import{j as i}from"./jsx-runtime-DiwAibxM.js";import{r as o}from"./index-Btj5Fd67.js";import{u as d,F as b}from"./Form-DCJEJ9uH.js";import{O as f}from"./utils-BR2PSRFh.js";import"./theme-C7C0QMlu.js";import"./SideNav-BXGvGLiL.js";import"./containerQuery-BqcK0eeN.js";import"./useToggle-B3mbTfSB.js";import"./ColorSelected-DSajfO12.js";import"./index-Cgp_8tUs.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BUfrUkss.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./createSvgIcon-C7F5N1gl.js";import"./createSvgIcon-Bmixpj46.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-C9uVWUyr.js";import"./useId-DwELyCdS.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-D8KJxpyu.js";import"./Chip-Bn2vqR2u.js";import"./ButtonBase-Ci24pScM.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-L7Zdnfri.js";import"./FormFieldText.styled-BXg2h5EQ.js";import"./Button-BW21zc79.js";import"./Popper-lO7-sb5Y.js";import"./useTheme-CN1B93FI.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./formControlState-Bl9Dd4wz.js";import"./ButtonRow-DaYhrvd1.js";import"./Spinner-C0FunRuE.js";import"./Typography-D0-akgTt.js";import"./SubtitleText-DUUVrgUU.js";import"./CheckboxList-CKLT5_IE.js";import"./Checkbox-faPr4U1Q.js";import"./FormControlLabel-DlxLljVV.js";import"./getThemeProps-DdDNKTGU.js";import"./TitleWrapper-Bkg-hsBc.js";import"./TitleText-CdOksVB0.js";import"./MoreVert-BH0BHXBp.js";import"./ChevronRight-Da8zFjWX.js";import"./PageHeader-CmlBcYYr.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BFvQvs9V.js";import"./StyledFormControl.styled-D1xcYZGf.js";import"./Toggle-Lx-sDa2f.js";import"./formats-sBod7wm8.js";import"./Dialog-BFRUe6cu.js";import"./useMediaQuery-Yl5lg82S.js";import"./Snackbar-B25MKBii.js";import"./Close-CSY1ofSk.js";import"./ClickAwayListener-DweT8u9y.js";import"./TooltipIcon-C4tSz_X8.js";const ht={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const gt=["QuickSubmit"];export{t as QuickSubmit,gt as __namedExportsOrder,ht as default};
