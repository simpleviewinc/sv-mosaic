import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CDlOlYQx.js";import{u as c,r as h,F as f}from"./index-CLN1Uqsu.js";import{r as x}from"./renderButtons-DP0bGf4C.js";import{O as b}from"./dom-BR2PSRFh.js";import"./MosaicContext-Ckn3SYVO.js";import"./ButtonBase-BTOUCkJL.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-CQDqkEyb.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-D9Xlm0gk.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-DiGzPWWk.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-DnZWjXCP.js";import"./index-fPYtWVub.js";import"./Popover-BARbcQa_.js";import"./useTooltip-CvILwQ8N.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-ef-3r2ji.js";import"./createSvgIcon-CpiYeT0y.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-Cf2fXVyQ.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import"./DataViewFilterDropdownButtons-DxJf3FQF.js";import"./FormFieldText.styled-CRryNLjj.js";import"./formControlState-VojGIu4f.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DJjmFJak.js";import"./ExpandMore-C3mveD_C.js";import"./Chip-BzCeYly-.js";import"./DataViewPrimaryFilter.styled-64dlO4D8.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DAZkKGvP.js";import"./PageHeader-CVwaxNeh.js";import"./Spinner-Dd-oad_B.js";import"./CheckboxList-BlEbFa5n.js";import"./Checkbox-65JO9dLp.js";import"./SwitchBase-Cr0Iw5cH.js";import"./StyledOptionFormControl-DVa9h7YW.js";import"./MoreVert-BuMRkz_g.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DAQJW3QI.js";import"./Snackbar-Bo2ZVk08.js";import"./Close-Dcayhvfb.js";import"./ChipList-DMumVwBB.js";import"./RadioButton-CsJnPFmg.js";import"./Toggle-DXGG91mo.js";import"./Dialog-DXGYH3lr.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-0jIe1PLd.js";import"./CardHeading-c7RPWGjr.js";const Et={title:"Components/Form"},t=({showState:a})=>{const e=c(),{state:l,handleSubmit:d}=e;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let o=0;o<100;o++)i.push({name:`text${o}`,label:`Simple Text ${o}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...e,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const It=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,It as __namedExportsOrder,Et as default};
