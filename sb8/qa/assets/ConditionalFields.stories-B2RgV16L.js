import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as i}from"./index-D0AnReJb.js";import{u as c,F as y}from"./index-XS4bmHCM.js";import{r as h}from"./renderButtons-DP0bGf4C.js";import{O as f}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-C5LJ_neh.js";import"./sizes-_ON_TzAH.js";import"./ExpandMore-Dl7LJMh2.js";import"./identifier-Bktyv6O_.js";import"./createSvgIcon-D5aI0OD-.js";import"./createSvgIcon-C735tyhT.js";import"./generateUtilityClasses-D4jmUuEZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./useMosaicTranslation-di9nduwf.js";import"./testIds-DLbO0bd9.js";import"./TitleWrapper-BbWupsUF.js";import"./Button-BOlAo_yO.js";import"./ButtonBase-CyOgbtoj.js";import"./index-R4Jqw3Tw.js";import"./Popover-DMfUH9d_.js";import"./Popper-D9JYON0d.js";import"./useTheme-DTBsETmh.js";import"./useThemeWithoutDefault-CsQox1c5.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-Byjr_VO4.js";import"./Typography-DBsSg8HG.js";import"./DisplayText-Ip6DAA4t.js";import"./ButtonRow-Dil46hZf.js";import"./toNumber-CqnDHfZM.js";import"./DataViewFilterDropdownButtons-Bd_5anyu.js";import"./StyledPopperPaper-BxcX73gl.js";import"./index-DYyO2Iln.js";import"./Chip-D4exI_Oq.js";import"./DataViewPrimaryFilter.styled-ChQqXjcm.js";import"./Badge.styled-qjrvmt6O.js";import"./Text-ChOjGkiI.js";import"./PickerPanel-tAAYph5M.js";import"./PageHeader-t6Ly6_Ob.js";import"./FormFieldText.styled-DouhbL_d.js";import"./formControlState-BI4toe_X.js";import"./Spinner-m5_IcvNq.js";import"./CheckboxList-B7SbK3Ha.js";import"./Checkbox-SBjhRN_S.js";import"./StyledOptionFormControl-Cwl0Q2GB.js";import"./MoreVert-DKRvdU6X.js";import"./formats-CMvQHWsT.js";import"./Snackbar-at35UkfL.js";import"./Close-DkzKxLx5.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-zisjpXtz.js";import"./RadioButton-DJt--7LN.js";import"./Toggle-BsX429Os.js";import"./Dialog-BQccgbOq.js";import"./ThemeProvider-DAuzgAUw.js";import"./SideNav-BYUaKA9k.js";const _t={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
