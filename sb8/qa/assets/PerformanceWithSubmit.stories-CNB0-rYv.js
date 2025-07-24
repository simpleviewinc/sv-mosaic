import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-D0AnReJb.js";import{u as c,r as h,F as f}from"./index-CNkl0l2T.js";import{r as x}from"./renderButtons-DP0bGf4C.js";import{O as b}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-C5LJ_neh.js";import"./sizes-_ON_TzAH.js";import"./testIds-BKXNnpj0.js";import"./TitleWrapper-BiC1Wb-5.js";import"./Button-D5Mq00Ds.js";import"./identifier-Bktyv6O_.js";import"./generateUtilityClasses-D4jmUuEZ.js";import"./ButtonBase-CyOgbtoj.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./index-R4Jqw3Tw.js";import"./Popover-B_lFWVkj.js";import"./Popper-B65p2oiP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DTBsETmh.js";import"./useThemeWithoutDefault-CsQox1c5.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-Byjr_VO4.js";import"./createSvgIcon-D5aI0OD-.js";import"./createSvgIcon-C735tyhT.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DBsSg8HG.js";import"./DisplayText-Ip6DAA4t.js";import"./ButtonRow-Daljk49C.js";import"./toNumber-DqzDMBhJ.js";import"./useMosaicTranslation-di9nduwf.js";import"./DataViewFilterDropdownButtons-B_FGX-fS.js";import"./index-D77a6n9L.js";import"./ExpandMore-Dl7LJMh2.js";import"./Chip-DNwtmRHZ.js";import"./CheckboxList-DDeK_q7o.js";import"./Checkbox-_0JQhlIl.js";import"./StyledOptionFormControl-Cwl0Q2GB.js";import"./formControlState-BI4toe_X.js";import"./Text-ChOjGkiI.js";import"./DataViewPrimaryFilter.styled-BORqmM8y.js";import"./PickerPanel-DZf3nPrH.js";import"./PageHeader-DbhT7nzS.js";import"./FormFieldText.styled-CJUQilOD.js";import"./Spinner-m5_IcvNq.js";import"./MoreVert-DKRvdU6X.js";import"./formats-CMvQHWsT.js";import"./Snackbar-DaK7yvE3.js";import"./Close-DkzKxLx5.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-BAGapJVE.js";import"./RadioButton-DJt--7LN.js";import"./Toggle-DNhIGYb9.js";import"./Dialog-DofFNcAh.js";import"./ThemeProvider-DAuzgAUw.js";import"./SideNav-BYUaKA9k.js";const vt={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const wt=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,wt as __namedExportsOrder,vt as default};
