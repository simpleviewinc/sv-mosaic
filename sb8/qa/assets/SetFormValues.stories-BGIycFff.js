import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{r as e}from"./index-D0AnReJb.js";import{u,F as d}from"./index-BzvhE4oF.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import"./styled-components.browser.esm-aVcmUYMZ.js";import"./sizes-CTdyEcea.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-D4ztpYuS.js";import"./Button-Cu24UfKA.js";import"./identifier-C21A9frq.js";import"./generateUtilityClasses-iHFtG1jj.js";import"./ButtonBase-CLHtCICo.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-Csnu-DvG.js";import"./Popper-B4A_VUge.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-4eCcP-Dc.js";import"./useThemeWithoutDefault-BHc79qG-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-D9vD66Ez.js";import"./createSvgIcon-DLboviGw.js";import"./createSvgIcon-YkkRvR3V.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DM2nLVeQ.js";import"./DisplayText-BRdY6ERT.js";import"./ButtonRow-Cj7WA1zR.js";import"./index-DDIZOs0d.js";import"./debounce-D-BUC-g1.js";import"./ExpandMore-CEbXN-sG.js";import"./Chip-BxvGyYQV.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CW8xvHG-.js";import"./formControlState-FGREjXRn.js";import"./Spinner-C5cgjXi2.js";import"./Text-Bw6wJuVZ.js";import"./CheckboxList-B0rkeBY0.js";import"./Checkbox-ig6Jea2e.js";import"./FormControlLabel-sQC-fLMo.js";import"./DataViewPrimaryFilter.styled-DJMCb03L.js";import"./MoreVert-DAsd8IpG.js";import"./ChevronRight-BMdJevFR.js";import"./PageHeader-ClUPNuza.js";import"./formats-CMvQHWsT.js";import"./ChipList-63E8Z3sb.js";import"./RadioButton-Bcxn9PJS.js";import"./StyledFormControl.styled-BQMYotuj.js";import"./Toggle-CrhCMNND.js";import"./Dialog-CCRRhmOO.js";import"./ThemeProvider-DKfWeLFc.js";import"./SideNav-AzQy47h5.js";import"./Snackbar-DyF0qJal.js";import"./Close-CheCpke4.js";import"./ClickAwayListener-Dkkr5f_-.js";const yt={title:"Components/Form"},t=()=>{const o=u({disabled:!0,skeleton:!0}),{methods:{setFormValues:r},handleSubmit:n}=o,p=e.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"}],[]);return e.useEffect(()=>{(async()=>(await new Promise(a=>setTimeout(()=>a(null),2e3)),r({values:{firstName:"Fluffy"},skeleton:!1,disabled:!1})))()},[r]),l.jsx(d,{...o,buttons:f(n),title:"Profile",description:"Give us some information to understand a little more about you.",fields:p})};t.args={};t.argTypes={};var m,i,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
