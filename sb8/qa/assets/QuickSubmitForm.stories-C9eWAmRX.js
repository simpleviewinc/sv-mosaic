import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as d,F as b}from"./Form-DI4diVc8.js";import{O as f}from"./utils-BR2PSRFh.js";import"./theme-DRtZtbPc.js";import"./SideNav-D66jd1x5.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./index-CV8e2Lol.js";import"./debounce-CHvAeqRr.js";import"./DataViewPrimaryFilter.styled-auwRvG8E.js";import"./generateUtilityClasses-kMkq-zAT.js";import"./createSvgIcon-Pzp5yWPs.js";import"./createSvgIcon-BcZTMgP9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Chip-CRqL1Gcl.js";import"./ButtonBase-BP_P9WLq.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-CZCb37QS.js";import"./FormFieldText.styled-Cq8lzkgl.js";import"./Button-DuMlbF8s.js";import"./Popper-BWFpCfKc.js";import"./useTheme-Cud-ikZw.js";import"./index-BxmsGmlx.js";import"./formControlState-DyMXFR7f.js";import"./ButtonRow-CP4CrsnB.js";import"./Spinner-Dfqcw6pF.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./CheckboxList-DjNmes3Y.js";import"./Checkbox-D_4gEYtK.js";import"./FormControlLabel-f9znFBMA.js";import"./getThemeProps-BVsvmf2Q.js";import"./sizes-C6oSOElx.js";import"./RadioButton-q7Nz9IFm.js";import"./StyledFormControl.styled-BDgwaEEo.js";import"./Toggle-aOIYV_sD.js";import"./ColorSelected-DERcqfqY.js";import"./TitleWrapper-CYciWRcJ.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-gv79E1WA.js";import"./ChevronRight-bPXdPGpY.js";import"./PageHeader-DvUko4so.js";import"./formats-sBod7wm8.js";import"./Dialog-BI8WLJ8j.js";import"./useMediaQuery-Bupge7Mj.js";import"./Snackbar-BF1WUGPv.js";import"./Close-CC6bEs2P.js";import"./ClickAwayListener-DnjBLK-5.js";import"./TooltipIcon-Bg8I7hop.js";const St={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const ht=["QuickSubmit"];export{t as QuickSubmit,ht as __namedExportsOrder,St as default};
