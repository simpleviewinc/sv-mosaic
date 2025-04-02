import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{r}from"./index-D0AnReJb.js";import{u,F as d}from"./Form-DPJ23PVO.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DpopOKxc.js";import"./generateUtilityClasses-BA0DUeUY.js";import"./ButtonBase-C35XO5Ki.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-xe3MJQij.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BAqAQ4su.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-BoBd9h2u.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-BbrvVw35.js";import"./createSvgIcon-B3veWrfC.js";import"./createSvgIcon-Bee5RQ5R.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Bypx1B0d.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-D2WocfoV.js";import"./formControlState-BN-vhB5B.js";import"./ButtonRow-C0p2ODeQ.js";import"./Spinner-B9uEl8uj.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-CvmUeamL.js";import"./Checkbox-CoU1FyDt.js";import"./FormControlLabel-CZZVJTgF.js";import"./getThemeProps-BKaUAPTQ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D0yHXGOG.js";import"./StyledFormControl.styled-BkJbr-Di.js";import"./Toggle-VZ0j2DKw.js";import"./formats-sBod7wm8.js";import"./Dialog-DAXtZNzQ.js";import"./ChevronRight-DusQwXTC.js";import"./TitleWrapper-C8ENnIyi.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-DhIkxi0I.js";import"./Close-D1y_W6Pv.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Db3yE7BY.js";import"./PageHeader-B119jF-l.js";const dt={title:"Components/Form"},t=()=>{const o=u({disabled:!0,skeleton:!0}),{methods:{setFormValues:e},handleSubmit:n}=o,p=r.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"}],[]);return r.useEffect(()=>{(async()=>(await new Promise(a=>setTimeout(()=>a(null),2e3)),e({values:{firstName:"Fluffy"},skeleton:!1,disabled:!1})))()},[e]),l.jsx(d,{...o,buttons:f(n),title:"Profile",description:"Give us some information to understand a little more about you.",fields:p})};t.args={};t.argTypes={};var m,i,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const ft=["SetFormValues"];export{t as SetFormValues,ft as __namedExportsOrder,dt as default};
