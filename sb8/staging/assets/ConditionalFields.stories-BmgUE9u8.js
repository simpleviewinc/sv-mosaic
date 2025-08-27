import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as i}from"./index-D0AnReJb.js";import{u as c,F as y}from"./index-BjjNLCMz.js";import{r as h}from"./renderButtons-DP0bGf4C.js";import{O as f}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./sizes-DkIXWPpc.js";import"./ExpandMore-JUNNgEdW.js";import"./identifier-DOqdnZ6L.js";import"./createSvgIcon-B2sN9389.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./useMosaicTranslation-di9nduwf.js";import"./testIds-DLbO0bd9.js";import"./TitleWrapper-CQxWIXzH.js";import"./Button-CN4kYzMe.js";import"./ButtonBase-Dg-QHo0d.js";import"./index-CYsLg4TE.js";import"./Popover-BG0BPeg-.js";import"./Popper-DKTKzQfx.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CYj0-5X2.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-C5wOwzPe.js";import"./toNumber-DuWhFW-p.js";import"./DataViewFilterDropdownButtons-DRwFtKQ6.js";import"./StyledPopperPaper-DKpxPU4i.js";import"./index-CtsnE9bo.js";import"./Chip-CpsUtANy.js";import"./DataViewPrimaryFilter.styled-hTjiiCYc.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-D4_DzPYT.js";import"./PageHeader-Rtx_tFBF.js";import"./FormFieldText.styled-CCsJeQGV.js";import"./formControlState-BI4toe_X.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-CIADAAOD.js";import"./Checkbox-DnVUUwfp.js";import"./StyledOptionFormControl-CmOcJT1x.js";import"./MoreVert-BXVssJ4w.js";import"./formats-CMvQHWsT.js";import"./Snackbar-Bv8HGMID.js";import"./Close-BKfiyhHV.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-TQ6-UhAA.js";import"./RadioButton-1BL3SEux.js";import"./Toggle-BYU1iYU_.js";import"./Dialog-Bg1_LB1W.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-CFjdJbjv.js";const _t={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  showState
}: typeof ConditionalFields.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const KEY_PHRASE = "SHOW";
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "dependency",
    label: "Dependency",
    type: "text",
    instructionText: \`Type "\${KEY_PHRASE}" to show another field\`,
    required: true
  }, {
    name: "dependent",
    label: "Dependent",
    type: "text",
    show: ({
      data
    }) => {
      return data?.dependency === KEY_PHRASE;
    },
    required: true
  }], []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Runtime behaviors" fields={fields} />
            </div>
        </>;
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Ot=["ConditionalFields"];export{t as ConditionalFields,Ot as __namedExportsOrder,_t as default};
