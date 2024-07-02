import{j as i}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{u as d,F as b}from"./formUtils-C5IZy0Gf.js";import{O as f}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const ht={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
