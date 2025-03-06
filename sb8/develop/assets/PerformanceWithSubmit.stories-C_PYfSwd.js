import{j as r}from"./jsx-runtime-DiwAibxM.js";import{r as n}from"./index-Btj5Fd67.js";import{u as c,a as h,F as f}from"./index-CQfzl7Mw.js";import{r as x}from"./renderButtons-BmHfsf_z.js";import{O as b}from"./utils-BR2PSRFh.js";import"./theme-D38K4W-Z.js";import"./testIds-fiKIunms.js";import"./TitleWrapper-D0jWUQG0.js";import"./Button-D32bI-Hq.js";import"./generateUtilityClasses-8vC7aVzu.js";import"./ButtonBase-qeNCnyas.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Dpu8VSWK.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D0FYgW1y.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-CksQJzsL.js";import"./createSvgIcon-BYvI5rjI.js";import"./createSvgIcon-DEmQcq0a.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-iUA5kZEF.js";import"./TitleText-b_QXd7Yf.js";import"./ButtonRow-51_F2pLd.js";import"./index-DqbL_7pW.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BZ3tfVAq.js";import"./Chip-CB_Nl8Vf.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-DbKyEzTp.js";import"./formControlState-B0dK5Yiw.js";import"./Spinner-BTI8gP3i.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-D_uRM6MU.js";import"./Checkbox-3bvh3g8i.js";import"./FormControlLabel-BnIcqxAa.js";import"./getThemeProps-CANKBKLy.js";import"./MoreVert-CcQ_DGVp.js";import"./ChevronRight-B_wNKS8s.js";import"./PageHeader-CaFPrRbD.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BelC6HqS.js";import"./StyledFormControl.styled-DMWoJm0e.js";import"./Toggle-2hh2ORfC.js";import"./Dialog-BKnqllF5.js";import"./SideNav-D2hLlXvZ.js";import"./Snackbar-BFSmGquB.js";import"./Close-CSM1BQ-c.js";import"./ClickAwayListener-DoPvkzLf.js";const bt={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;n.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=n.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const St=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,St as __namedExportsOrder,bt as default};
