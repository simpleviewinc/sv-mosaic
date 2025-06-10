import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{r}from"./index-D0AnReJb.js";import{u,F as d}from"./index-BheFIjOT.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import"./sizes-BklZZmo4.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-BVBDXDWY.js";import"./Button-DWbCZful.js";import"./generateUtilityClasses-rDn4KRfY.js";import"./ButtonBase-C5QWJNfJ.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-BwE5duTX.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D7dAzrtf.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CZARXB1J.js";import"./createSvgIcon-BLTtL5Y9.js";import"./createSvgIcon-Dg0jtXvj.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-iddL5eaH.js";import"./TitleText-CICG0G5h.js";import"./ButtonRow-BOELw1Tj.js";import"./index-DoyK6Ru4.js";import"./debounce-D-BUC-g1.js";import"./ExpandMore-DDFjf7E5.js";import"./Chip-CMTBWucu.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CGYIYrSS.js";import"./formControlState-BAKA1Iy6.js";import"./Spinner-CbDJlIED.js";import"./SubtitleText-DS-qVyZH.js";import"./CheckboxList-BfityfDx.js";import"./Checkbox-CpLxzsg0.js";import"./FormControlLabel-BKc7O7Lz.js";import"./DataViewPrimaryFilter.styled-BW7jwC5N.js";import"./MoreVert-CMcGX8SU.js";import"./ChevronRight-BydWUgoJ.js";import"./PageHeader-DhpZ4BIu.js";import"./formats-CMvQHWsT.js";import"./ChipList-ByRIr1lv.js";import"./RadioButton-p7gSMkH6.js";import"./StyledFormControl.styled-BMW4FUOw.js";import"./Toggle-9YEwDS0M.js";import"./Dialog-CnKRaqxG.js";import"./SideNav-kqb59Ukq.js";import"./Snackbar-CMDie7lV.js";import"./Close-DQPzhJmS.js";import"./ClickAwayListener-Dkkr5f_-.js";const dt={title:"Components/Form"},t=()=>{const o=u({disabled:!0,skeleton:!0}),{methods:{setFormValues:e},handleSubmit:n}=o,p=r.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"}],[]);return r.useEffect(()=>{(async()=>(await new Promise(a=>setTimeout(()=>a(null),2e3)),e({values:{firstName:"Fluffy"},skeleton:!1,disabled:!1})))()},[e]),l.jsx(d,{...o,buttons:f(n),title:"Profile",description:"Give us some information to understand a little more about you.",fields:p})};t.args={};t.argTypes={};var m,i,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
