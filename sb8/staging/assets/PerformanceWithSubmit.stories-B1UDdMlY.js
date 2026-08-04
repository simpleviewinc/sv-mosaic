import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-wekxHvEx.js";import{u as c,r as h,F as f}from"./index-DHKTy8Oe.js";import{r as x}from"./renderButtons-DP0bGf4C.js";import{O as b}from"./dom-BR2PSRFh.js";import"./MosaicContext-DJPbhtc9.js";import"./ButtonBase-CEIt18Mr.js";import"./identifier-Bq1wI7MV.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BVevyrl8.js";import"./useSlot-VZdH5auH.js";import"./TitleWrapper-G0h8wZmh.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./Button-CdzdKupF.js";import"./useId-69YouNVI.js";import"./CircularProgress-PxS61-je.js";import"./index-Zzm_Wx6F.js";import"./useTooltip-B7zXsQMX.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-DT_DvNHq.js";import"./mergeSlotProps-BJLz0-OO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DQPkTHY5.js";import"./createSvgIcon-h9rIBQiG.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-D77Uk9vr.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-BmgFD-Us.js";import"./ExpandMore-BE6LXXJH.js";import"./Help-BcORB-TR.js";import"./Chip-BCe941lM.js";import"./Clear-u1SsJyJR.js";import"./FormFieldText.styled-yvYOpJcX.js";import"./formControlState-Qaq2QphE.js";import"./GlobalStyles-Ylo9bxXj.js";import"./useControlled-Mt41fVm8.js";import"./DataViewFilterDropdownButtons-CG0hq6Hh.js";import"./StyledPopperPaper-C4GIz6jS.js";import"./TooltipIcon-CPXCaul4.js";import"./DataViewPrimaryFilter.styled-CoIgiDUg.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-DMqhm_jY.js";import"./Add-SmKzKNaz.js";import"./PageHeader-CXRi2Lzn.js";import"./Spinner-pOddc5Fg.js";import"./CheckboxList-CRirri0N.js";import"./Checkbox-DBSudIqU.js";import"./SwitchBase-DgSlJAjj.js";import"./StyledOptionFormControl-GdCwvfsB.js";import"./FormGroup-BzWjA99g.js";import"./MoreVert-DegxOP5X.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DkHhhliA.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-CRBs-4if.js";import"./Close-C8qa5nrL.js";import"./ChipList-CKVS403F.js";import"./RadioGroup-BJ9uTRhE.js";import"./Toggle-BgAmXpG1.js";import"./Dialog-Da9Q9p0y.js";import"./ThemeProvider-Be_gFf1k.js";import"./Link-BKwfuJVQ.js";import"./CardHeading-Cfv9ll9K.js";import"./OpenInNew-GvVN9mBj.js";import"./Delete-VhiuMRtt.js";import"./Settings-pl1mUW38.js";import"./CloudDownload-DVh_jn78.js";import"./InsertDriveFile-DIzz3aBU.js";const Gt={title:"Components/Form"},t=({showState:a})=>{const i=c(),{state:l,handleSubmit:d}=i;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const e=[];for(let o=0;o<100;o++)e.push({name:`text${o}`,label:`Simple Text ${o}`,type:"text",instructionText:"testing",validators:[h]});return e},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...i,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,p,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  showState
}: typeof PerformanceWithSubmit.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => {
    const hundredFields: FieldDef[] = [];
    for (let i = 0; i < 100; i++) {
      hundredFields.push({
        name: \`text\${i}\`,
        label: \`Simple Text \${i}\`,
        type: "text",
        instructionText: "testing",
        validators: [required]
      });
    }
    return hundredFields;
  }, []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} fields={fields} title="Performance with submit" />
            </div>
        </>;
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Mt=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,Mt as __namedExportsOrder,Gt as default};
