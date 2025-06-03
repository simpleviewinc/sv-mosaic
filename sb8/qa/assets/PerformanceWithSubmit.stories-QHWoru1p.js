import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-D0AnReJb.js";import{u as c,r as h,F as f}from"./index-BnXkLRTE.js";import{r as x}from"./renderButtons-BmHfsf_z.js";import{O as b}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-DbGdO_qH.js";import"./Button-Bb1YkNRl.js";import"./DefaultPropsProvider-DAx12mnL.js";import"./generateUtilityClasses-B-YHycAP.js";import"./ButtonBase-DI0zIr47.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-DJOBlCMp.js";import"./Popper-DwGs7ij-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-CEnrwtsk.js";import"./useThemeWithoutDefault-_krlN3OB.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./createSvgIcon-SiNoGNLO.js";import"./createSvgIcon-Dpio520k.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-CaKiXxBh.js";import"./DisplayText-p-dXd17y.js";import"./ButtonRow-o01CmugY.js";import"./index-Cx_oxk9s.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DOv3O6Qd.js";import"./Chip-CxjPie9P.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-1uP8QWr0.js";import"./formControlState-Cf1KMWlV.js";import"./Spinner-Bh-LCVD3.js";import"./Text-SN-dsdu2.js";import"./CheckboxList-M1uSKKL_.js";import"./Checkbox-B7o2aMoG.js";import"./FormControlLabel-DHYheffG.js";import"./MoreVert-Bzx_zck9.js";import"./ChevronRight-C0GgObWN.js";import"./PageHeader-smgljVMb.js";import"./formats-CMvQHWsT.js";import"./RadioButton-D8tkv9AU.js";import"./StyledFormControl.styled-BUp5Nrjc.js";import"./Toggle-BqCsCBy-.js";import"./Dialog-B-sGlfn4.js";import"./ThemeProvider-xpJBffxI.js";import"./ChipList-BIFBiti5.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-BrqHKIPs.js";import"./Close-ClEuQas1.js";import"./ClickAwayListener-Dkkr5f_-.js";const Ft={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
