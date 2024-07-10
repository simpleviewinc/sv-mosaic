import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as d,F as b}from"./formUtils-BDmDTW9-.js";import{O as f}from"./utils-BR2PSRFh.js";import"./DataViewFilterDropdown-B4X4i9iN.js";import"./theme-BFHUhhnW.js";import"./useThemeProps-CC0A0wW3.js";import"./useFormControl-h1XKtQPT.js";import"./createSvgIcon-BFtO5Q3M.js";import"./createSvgIcon-D-pnGctT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Button-BH4-03LC.js";import"./ButtonBase-R8jPeFSW.js";import"./emotion-react.browser.esm-F1m11hi1.js";import"./Popper-DptWoz9V.js";import"./index-BxmsGmlx.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./_baseMap-CD-F1Lik.js";import"./debounce-DCEw8XId.js";import"./isSymbol-C7K7xDG1.js";import"./CheckboxList-BW3qbPww.js";import"./Checkbox-Dcjyc20p.js";import"./FormControlLabel-xKzxkw-X.js";import"./reactTools-D2O6dTsh.js";import"./DataViewPrimaryFilter.styled-CqJQyTfl.js";import"./ButtonRow-CG1gNQ0k.js";import"./Spinner-qhh6Qxwa.js";import"./Chip-CC244fBs.js";import"./Typography-D0sDo15u.js";import"./SubtitleText-B5uTxLpF.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CRToYo89.js";import"./StyledFormControl.styled-6O-ETzJ6.js";import"./Toggle-B_NBlHrs.js";import"./testIds-B75WQI-K.js";import"./index-DS2IKydr.js";import"./TitleWrapper-N6k_cHLp.js";import"./containerQuery-v_lW7Ytt.js";import"./TitleText-BTs7Gt0E.js";import"./MoreVert-D7-p9KfM.js";import"./ChevronRight-B_Gprqw3.js";import"./PageHeader-mb5NuRbn.js";import"./MenuSelect-DV8M_NkV.js";import"./useMediaQuery-DL62vn1N.js";import"./formats-CDjt32hU.js";import"./Dialog-H5GqHGP3.js";import"./SideNav-wnS0nnEp.js";import"./Snackbar-C3sy6vop.js";import"./Close-DTUN_E5S.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const gt={title:"Components/Form"},y=[{title:"Other",fields:[[["age"]]]},{title:"Name",fields:[[["lastName"]],[["firstName"]]]}],t=({showSections:s})=>{const e=d(),{handleSubmit:a}=e;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const p=o.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"},{name:"age",label:"Age",type:"text"}],[]),l=o.useMemo(()=>[{label:"Save",color:"yellow",variant:"contained",type:"submit"}],[]),u=a(c=>{alert("Form submitted with the following data: "+JSON.stringify(c,null," "))});return i.jsx("div",{style:{height:"100vh"},children:i.jsx(b,{...e,buttons:l,title:"Quick Submit",fields:p,sections:s?y:void 0,onSubmit:u,autoFocus:!0})})};t.args={showSections:!1};t.argTypes={showSections:{name:"Show Sections"}};var r,m,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
