import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{u as c,a as h,F as f}from"./formUtils-D8tkyYyB.js";import{r as x}from"./storyUtils-ByV2Bsyv.js";import{O as b}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-DC9l5o26.js";import"./theme-D4oZEIDo.js";import"./Button-B7Cp1A2i.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-tCQFe4bJ.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CVnL_KSQ.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-BSB-bEHM.js";import"./createSvgIcon-Ctt9EnSd.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-BVq8MUDq.js";import"./CheckboxList-BqPA3yNH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-_RXYTNJz.js";import"./FormControlLabel-Cy6KcgOl.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CTR0uMlm.js";import"./ButtonRow-nrQV_x_-.js";import"./Spinner-tjn3ihlQ.js";import"./Chip-D6uKAMXX.js";import"./Typography-Bm8mlfoU.js";import"./SubtitleText-A3erhwRa.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BVjzWjPW.js";import"./StyledFormControl.styled-BRiA3uuL.js";import"./Toggle-BXalcPDR.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-x_Fjm0Zg.js";import"./TitleWrapper-Dli_wbop.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-CFZnrs7C.js";import"./MoreVert-Dt36-imA.js";import"./ChevronRight-CA0RLU_a.js";import"./PageHeader-BAPyqEJv.js";import"./MenuSelect-BxBGlSfr.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-BnEQnkF5.js";import"./SideNav-BixOpWCF.js";import"./Snackbar-QgEqhdTF.js";import"./Close-DUapGJLS.js";import"./ClickAwayListener-DFiznkjI.js";import"./Blank-DPcqZTKv.js";const Ft={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
