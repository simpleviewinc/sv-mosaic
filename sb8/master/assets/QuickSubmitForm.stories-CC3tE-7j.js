import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as d,F as b}from"./formUtils-CERrhxxw.js";import"./Button-BrUhf9jf.js";import{O as f}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-CDQUwglR.js";import"./theme-DRtZtbPc.js";import"./useMosaicTranslation-CZCb37QS.js";import"./useIsFocusVisible-De2ftVE9.js";import"./generateUtilityClasses-CplxKB4o.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CA50KEz-.js";import"./useTheme-vMmOGwbU.js";import"./index-BxmsGmlx.js";import"./index-CiJN4qBb.js";import"./CheckboxList-9J3AJhZb.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-Daz-CCp_.js";import"./FormControlLabel-2HxiQW27.js";import"./ButtonBase-Btj-nnLi.js";import"./getThemeProps-CBTZRUO9.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CJaR1K_8.js";import"./ButtonRow-C8VNIQ4B.js";import"./useToggle-lipGlewK.js";import"./Spinner-Cxn5F_rN.js";import"./Chip-CuADowIf.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D1cjnaj9.js";import"./StyledFormControl.styled-DR5TItxT.js";import"./Toggle-DqBdDGXG.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CUu1BnTo.js";import"./TitleWrapper-B_5wLb-y.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-CHB9Iy9y.js";import"./ChevronRight-Bc3jAIO-.js";import"./PageHeader-B0SeyLtR.js";import"./formats-CDjt32hU.js";import"./Dialog-DYdX5JhR.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-B3ORSSfg.js";import"./Snackbar-CeVWLZcc.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";const ht={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
