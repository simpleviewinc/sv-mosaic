import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as i}from"./index-D0AnReJb.js";import{u as c,F as y}from"./index-COHoq8jo.js";import{r as h}from"./renderButtons-DP0bGf4C.js";import{O as f}from"./dom-BR2PSRFh.js";import"./ExpandMore-Ca3pe8z0.js";import"./identifier-DOqdnZ6L.js";import"./sizes-DkIXWPpc.js";import"./createSvgIcon-DDyBApXB.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./ButtonBase-O4ZQd6U4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./MosaicContext-Y61KIvFP.js";import"./FormFieldText.styled-DQ22Tenv.js";import"./formControlState-BI4toe_X.js";import"./Popper-CeYJ7yNz.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./Button-Dlaq5vsb.js";import"./index-CYsLg4TE.js";import"./testIds-oQNwr1rf.js";import"./TitleWrapper-D8cEbksV.js";import"./containerQuery-CYj0-5X2.js";import"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-BcTDDHHE.js";import"./DataViewFilterDropdownButtons-B-tY8L0F.js";import"./StyledPopperPaper-BODJ-ail.js";import"./index-D9NSECxA.js";import"./Chip-CuRU8A0j.js";import"./DataViewPrimaryFilter.styled-Ej2pGgIE.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-sTfyWN5V.js";import"./PageHeader-CcwWPZa_.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-Dtr7xjiR.js";import"./Checkbox-Be3Yhveb.js";import"./StyledOptionFormControl-Br1jmfxi.js";import"./MoreVert-BAJenQd7.js";import"./stable-CpItcOrb.js";import"./throws-DLZ75Q5e.js";import"./formats-CMvQHWsT.js";import"./Snackbar-YB8AgySY.js";import"./Close-DizofMnI.js";import"./ClickAwayListener-Cp7Ry44a.js";import"./ChipList-CT9ZnIEN.js";import"./RadioButton-DplP-WlB.js";import"./Toggle-BL_WBRmO.js";import"./Dialog-CJUzIf8Q.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-BDVPwiRJ.js";const Rt={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const _t=["ConditionalFields"];export{t as ConditionalFields,_t as __namedExportsOrder,Rt as default};
