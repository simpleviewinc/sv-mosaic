import{j as l}from"./jsx-runtime-DiwAibxM.js";import{r}from"./index-Btj5Fd67.js";import{u,F as d}from"./Form-DsDAv5pr.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import"./theme-D38K4W-Z.js";import"./SideNav-D2hLlXvZ.js";import"./containerQuery-CksQJzsL.js";import"./useToggle-B3mbTfSB.js";import"./Button-DxOHnzJo.js";import"./generateUtilityClasses-B5i8Rs7p.js";import"./ButtonBase-B2xCaBev.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-BV6MzckQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DELdgGyu.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./index-D0mmSDhJ.js";import"./debounce-IFS8tfQQ.js";import"./DataViewPrimaryFilter.styled-CTVdcnW9.js";import"./createSvgIcon-CAs7t9wT.js";import"./createSvgIcon-CM-As40z.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Chip-BLORHG_J.js";import"./testIds-Cxqhkw8S.js";import"./useMosaicTranslation-C-FZRKWr.js";import"./DataViewFilterDropdown-CsfLeKEd.js";import"./formControlState-BAf21Shc.js";import"./ButtonRow-KlomlsFy.js";import"./Spinner-C_uMqEwM.js";import"./Typography-iUA5kZEF.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-Dua-Ccba.js";import"./Checkbox-CMTKNKa4.js";import"./FormControlLabel-2hVWRnF1.js";import"./getThemeProps-Fw47730D.js";import"./sizes-C6oSOElx.js";import"./RadioButton-LFlv3WCh.js";import"./StyledFormControl.styled-CNCCtQwC.js";import"./Toggle-_4jhqXCQ.js";import"./formats-sBod7wm8.js";import"./Dialog-9INDoSZN.js";import"./ChevronRight-CNo34ydh.js";import"./TitleWrapper-kkXpxrCn.js";import"./TitleText-b_QXd7Yf.js";import"./Snackbar-DkvzNMib.js";import"./Close-gDfoKZ0c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./MoreVert-B1D8IEMN.js";import"./PageHeader-BStOH7U_.js";const dt={title:"Components/Form"},t=()=>{const o=u({disabled:!0,skeleton:!0}),{methods:{setFormValues:e},handleSubmit:n}=o,p=r.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"}],[]);return r.useEffect(()=>{(async()=>(await new Promise(a=>setTimeout(()=>a(null),2e3)),e({values:{firstName:"Fluffy"},skeleton:!1,disabled:!1})))()},[e]),l.jsx(d,{...o,buttons:f(n),title:"Profile",description:"Give us some information to understand a little more about you.",fields:p})};t.args={};t.argTypes={};var m,i,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
