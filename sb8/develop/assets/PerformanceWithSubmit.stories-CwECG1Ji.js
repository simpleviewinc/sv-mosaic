import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-D0AnReJb.js";import{u as c,r as h,F as f}from"./index-CskZx9qi.js";import{r as x}from"./renderButtons-BmHfsf_z.js";import{O as b}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-CXkPWv0m.js";import"./sizes-C0LBJJ09.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-UbmTdAF_.js";import"./Button-DaAMSO0F.js";import"./DefaultPropsProvider-Zw7se0ql.js";import"./generateUtilityClasses-CVch8Fxh.js";import"./ButtonBase-CDkrym0l.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-BnPRUgpe.js";import"./Popper-DGZlEdwR.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Bm22bs_q.js";import"./useThemeWithoutDefault-DxXNdoSH.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CBh3xxKQ.js";import"./createSvgIcon-CfA1Cyex.js";import"./createSvgIcon-18YkCsWd.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Reib778S.js";import"./TitleText-BuZN1QQA.js";import"./ButtonRow-C029PRKt.js";import"./index-BfP4QUlu.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DRsOHDYs.js";import"./Chip-IkNXxPJK.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-DrsxdApR.js";import"./formControlState-CAqH4-hG.js";import"./Spinner-D4T0rUK9.js";import"./SubtitleText-DmGUl5wt.js";import"./CheckboxList-DghwUsPs.js";import"./Checkbox-BscruA8m.js";import"./FormControlLabel-4CniAqEL.js";import"./MoreVert-CApM3moX.js";import"./ChevronRight-foCHf73R.js";import"./PageHeader-vRr5zj4B.js";import"./formats-CMvQHWsT.js";import"./RadioButton-CLTmy9-q.js";import"./StyledFormControl.styled-B0T8LICC.js";import"./Toggle-dI05S_-G.js";import"./Dialog-B6RaYDcJ.js";import"./ThemeProvider-CGOYeIs4.js";import"./ChipList-DNkGOHFk.js";import"./SideNav-DJ_5--ll.js";import"./Snackbar-DaPPPHaq.js";import"./Close-4ToqfvgU.js";import"./ClickAwayListener-Dkkr5f_-.js";const Ft={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Ot=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,Ot as __namedExportsOrder,Ft as default};
