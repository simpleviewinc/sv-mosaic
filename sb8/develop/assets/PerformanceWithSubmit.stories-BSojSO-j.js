import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CDlOlYQx.js";import{u as c,r as h,F as f}from"./index-CEvXTbTM.js";import{r as x}from"./renderButtons-DP0bGf4C.js";import{O as b}from"./dom-BR2PSRFh.js";import"./MosaicContext-OO7tZJdO.js";import"./ButtonBase-CSsk5_gr.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BR9nxWVt.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-DJ3oxuZn.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-J6Kw363Y.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-aPK7NacD.js";import"./index-fPYtWVub.js";import"./useTooltip-Hifh6sld.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./Popover-CfJhcp6M.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-BrbIZV1W.js";import"./createSvgIcon-BOHM49HM.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-y0O1VC79.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-CblYxRKp.js";import"./TooltipIcon-if6WdNgf.js";import"./DataViewFilterDropdownButtons-CBDNlFNO.js";import"./FormFieldText.styled-D7KmSwYO.js";import"./formControlState-CJTic6Sf.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DylK-kVm.js";import"./ExpandMore-D30LWCsE.js";import"./Chip-BvxPiOpy.js";import"./DataViewPrimaryFilter.styled-BC5S4hgN.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DnLdQwbM.js";import"./PageHeader-DIWebNsC.js";import"./Spinner-By1vTLAu.js";import"./CheckboxList-D9FFWuZY.js";import"./Checkbox-DXOuBkLC.js";import"./SwitchBase-BlAgGKJx.js";import"./StyledOptionFormControl-BaE74fbD.js";import"./FormGroup-DqpNDYHy.js";import"./MoreVert-BYQ12PEe.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-BkXc3b2-.js";import"./Snackbar-kq0Zn7SC.js";import"./Close-BouFTol8.js";import"./ChipList-BnPd1b7I.js";import"./RadioGroup-LpJpC3lq.js";import"./Toggle-Cchzb_ud.js";import"./Dialog-CB9M2CMQ.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-BGXzeqiu.js";import"./CardHeading-COwA42ZW.js";const It={title:"Components/Form"},t=({showState:a})=>{const e=c(),{state:l,handleSubmit:d}=e;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let o=0;o<100;o++)i.push({name:`text${o}`,label:`Simple Text ${o}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...e,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Nt=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,Nt as __namedExportsOrder,It as default};
