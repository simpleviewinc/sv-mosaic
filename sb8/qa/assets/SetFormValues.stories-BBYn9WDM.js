import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{r as e}from"./index-D0AnReJb.js";import{u,F as d}from"./index-C9jB5BV3.js";import{r as f}from"./renderButtons-DP0bGf4C.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./sizes-DkIXWPpc.js";import"./ExpandMore-JUNNgEdW.js";import"./identifier-DOqdnZ6L.js";import"./createSvgIcon-B2sN9389.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./useMosaicTranslation-di9nduwf.js";import"./testIds-DLbO0bd9.js";import"./TitleWrapper-CChjkoX5.js";import"./Button-BdEZ7jiv.js";import"./ButtonBase-Dg-QHo0d.js";import"./index-CYsLg4TE.js";import"./Popover-BG0BPeg-.js";import"./Popper-DKTKzQfx.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CYj0-5X2.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-CPtYrWck.js";import"./toNumber-DuWhFW-p.js";import"./DataViewFilterDropdownButtons-j8BN_zxt.js";import"./StyledPopperPaper-DKpxPU4i.js";import"./index-B5R14LNF.js";import"./Chip-CpsUtANy.js";import"./DataViewPrimaryFilter.styled-ChYpVZBM.js";import"./Badge.styled-BCjjr0_d.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-Cm3I3E_B.js";import"./PageHeader-DqS_kq9L.js";import"./FormFieldText.styled-B3HCazQq.js";import"./formControlState-BI4toe_X.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-CIADAAOD.js";import"./Checkbox-DnVUUwfp.js";import"./StyledOptionFormControl-CmOcJT1x.js";import"./MoreVert-BXVssJ4w.js";import"./formats-CMvQHWsT.js";import"./Snackbar-DtbIjcUl.js";import"./Close-BKfiyhHV.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-DKTz5B1S.js";import"./RadioButton-1BL3SEux.js";import"./Toggle-CtisJX2d.js";import"./Dialog-D6TeJdy7.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-CFjdJbjv.js";const Vt={title:"Components/Form"},t=()=>{const o=u({disabled:!0,skeleton:!0}),{methods:{setFormValues:r},handleSubmit:n}=o,p=e.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"}],[]);return e.useEffect(()=>{(async()=>(await new Promise(a=>setTimeout(()=>a(null),2e3)),r({values:{firstName:"Fluffy"},skeleton:!1,disabled:!1})))()},[r]),l.jsx(d,{...o,buttons:f(n),title:"Profile",description:"Give us some information to understand a little more about you.",fields:p})};t.args={};t.argTypes={};var m,i,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const vt=["SetFormValues"];export{t as SetFormValues,vt as __namedExportsOrder,Vt as default};
