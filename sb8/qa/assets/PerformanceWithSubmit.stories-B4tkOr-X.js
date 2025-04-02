import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as n}from"./index-D0AnReJb.js";import{u as c,r as h,F as f}from"./Form-CgwovX7A.js";import{r as x}from"./renderButtons-BmHfsf_z.js";import{O as b}from"./utils-BR2PSRFh.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DuPZ_syw.js";import"./generateUtilityClasses-DR3ZN2W1.js";import"./ButtonBase-D151CXhN.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-CwglX3X7.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D2wr39e0.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-Dzq3_XHF.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-Nl7VMvHi.js";import"./createSvgIcon-Dkn5Rwb8.js";import"./createSvgIcon-BJqXHHQN.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Q_76qCVq.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-CyYL6T5I.js";import"./formControlState-DOpihTi1.js";import"./ButtonRow-CMfkAXvR.js";import"./Spinner-l5n7yqAB.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-BpALmPMn.js";import"./Checkbox-DEHVDJOM.js";import"./FormControlLabel-c62W2Jp9.js";import"./getThemeProps-jN7SmM6K.js";import"./sizes-C6oSOElx.js";import"./RadioButton-C4GIeT3G.js";import"./StyledFormControl.styled-CN2FC1d6.js";import"./Toggle-ZvDv_3Et.js";import"./formats-sBod7wm8.js";import"./Dialog-q0ujYBl7.js";import"./ChevronRight-BmBn2D1l.js";import"./TitleWrapper-BBj93Dzh.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-v6BtnLJQ.js";import"./Close-KkbZKwWJ.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Bjl-7o6A.js";import"./PageHeader-UTe0naMU.js";const bt={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;n.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=n.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
