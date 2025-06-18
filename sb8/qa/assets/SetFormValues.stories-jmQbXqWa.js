import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{r as e}from"./index-D0AnReJb.js";import{u,F as d}from"./index-Cc5HBuF_.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-ePYozolN.js";import"./Button-mgz2aTYm.js";import"./DefaultPropsProvider-BwNoCFE_.js";import"./generateUtilityClasses-42_at76R.js";import"./ButtonBase-EThHB291.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-CtiN8CS7.js";import"./Popper-BpP7Dmyd.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Dt0_M2VT.js";import"./useThemeWithoutDefault-ML7LN7QY.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./createSvgIcon-Bdc0w2F6.js";import"./createSvgIcon-CmcFkBiI.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DKFSDQw0.js";import"./DisplayText-CNJUHUbG.js";import"./ButtonRow-gAFOvWL6.js";import"./index-3jzVDf5u.js";import"./debounce-D-BUC-g1.js";import"./ExpandMore-DyHVniBt.js";import"./Chip-BiF3n3mk.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CpwAbK4m.js";import"./formControlState-DKt-4xzo.js";import"./Spinner-BIub0DbD.js";import"./Text-9y4gMspU.js";import"./CheckboxList-BXiGiY-c.js";import"./Checkbox-CABnih5k.js";import"./FormControlLabel-FaPuCwUU.js";import"./DataViewPrimaryFilter.styled-8yAJNZFq.js";import"./MoreVert-BxoNaVuW.js";import"./ChevronRight-C-yhpJTc.js";import"./PageHeader-u9qr2_b1.js";import"./formats-CMvQHWsT.js";import"./ChipList-BHKNfYFT.js";import"./RadioButton-peGC_BMl.js";import"./StyledFormControl.styled-CW3JaFWW.js";import"./Toggle-IqG9sXDk.js";import"./Dialog-BFp4KNLR.js";import"./ThemeProvider-CyphNCQQ.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-DXnnQTTm.js";import"./Close-CGtmtFuS.js";import"./ClickAwayListener-Dkkr5f_-.js";const yt={title:"Components/Form"},t=()=>{const o=u({disabled:!0,skeleton:!0}),{methods:{setFormValues:r},handleSubmit:n}=o,p=e.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"}],[]);return e.useEffect(()=>{(async()=>(await new Promise(a=>setTimeout(()=>a(null),2e3)),r({values:{firstName:"Fluffy"},skeleton:!1,disabled:!1})))()},[r]),l.jsx(d,{...o,buttons:f(n),title:"Profile",description:"Give us some information to understand a little more about you.",fields:p})};t.args={};t.argTypes={};var m,i,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm({
    disabled: true,
    skeleton: true
  });
  const {
    methods: {
      setFormValues
    },
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "firstName",
    label: "First Name",
    type: "text"
  }], []);
  useEffect(() => {
    (async () => {
      await new Promise(resolve => setTimeout(() => resolve(null), 2000));
      setFormValues({
        values: {
          firstName: "Fluffy"
        },
        skeleton: false,
        disabled: false
      });
    })();
  }, [setFormValues]);
  return <Form {...controller} buttons={renderButtons(handleSubmit)} title="Profile" description="Give us some information to understand a little more about you." fields={fields} />;
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const xt=["SetFormValues"];export{t as SetFormValues,xt as __namedExportsOrder,yt as default};
