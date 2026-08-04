import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./index-wekxHvEx.js";import{u,F as d}from"./index-DHKTy8Oe.js";import{r as f}from"./renderButtons-DP0bGf4C.js";import"./MosaicContext-DJPbhtc9.js";import"./ButtonBase-CEIt18Mr.js";import"./identifier-Bq1wI7MV.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BVevyrl8.js";import"./useSlot-VZdH5auH.js";import"./TitleWrapper-G0h8wZmh.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./Button-CdzdKupF.js";import"./useId-69YouNVI.js";import"./CircularProgress-PxS61-je.js";import"./index-Zzm_Wx6F.js";import"./useTooltip-B7zXsQMX.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-DT_DvNHq.js";import"./mergeSlotProps-BJLz0-OO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DQPkTHY5.js";import"./createSvgIcon-h9rIBQiG.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-D77Uk9vr.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-BmgFD-Us.js";import"./ExpandMore-BE6LXXJH.js";import"./Help-BcORB-TR.js";import"./Chip-BCe941lM.js";import"./Clear-u1SsJyJR.js";import"./FormFieldText.styled-yvYOpJcX.js";import"./formControlState-Qaq2QphE.js";import"./GlobalStyles-Ylo9bxXj.js";import"./useControlled-Mt41fVm8.js";import"./DataViewFilterDropdownButtons-CG0hq6Hh.js";import"./StyledPopperPaper-C4GIz6jS.js";import"./TooltipIcon-CPXCaul4.js";import"./DataViewPrimaryFilter.styled-CoIgiDUg.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-DMqhm_jY.js";import"./Add-SmKzKNaz.js";import"./PageHeader-CXRi2Lzn.js";import"./Spinner-pOddc5Fg.js";import"./CheckboxList-CRirri0N.js";import"./Checkbox-DBSudIqU.js";import"./SwitchBase-DgSlJAjj.js";import"./StyledOptionFormControl-GdCwvfsB.js";import"./FormGroup-BzWjA99g.js";import"./MoreVert-DegxOP5X.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DkHhhliA.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-CRBs-4if.js";import"./Close-C8qa5nrL.js";import"./ChipList-CKVS403F.js";import"./RadioGroup-BJ9uTRhE.js";import"./Toggle-BgAmXpG1.js";import"./Dialog-Da9Q9p0y.js";import"./ThemeProvider-Be_gFf1k.js";import"./Link-BKwfuJVQ.js";import"./CardHeading-Cfv9ll9K.js";import"./OpenInNew-GvVN9mBj.js";import"./Delete-VhiuMRtt.js";import"./Settings-pl1mUW38.js";import"./CloudDownload-DVh_jn78.js";import"./InsertDriveFile-DIzz3aBU.js";const _t={title:"Components/Form"},t=()=>{const o=u({disabled:!0,skeleton:!0}),{methods:{setFormValues:r},handleSubmit:p}=o,n=e.useMemo(()=>[{name:"firstName",label:"First Name",type:"text"}],[]);return e.useEffect(()=>{(async()=>(await new Promise(a=>setTimeout(()=>a(null),2e3)),r({values:{firstName:"Fluffy"},skeleton:!1,disabled:!1})))()},[r]),l.jsx(d,{...o,buttons:f(p),title:"Profile",description:"Give us some information to understand a little more about you.",fields:n})};t.args={};t.argTypes={};var m,i,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const Bt=["SetFormValues"];export{t as SetFormValues,Bt as __namedExportsOrder,_t as default};
