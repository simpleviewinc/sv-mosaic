import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r}from"./index-BP8_t0zE.js";import{u as h,F as y}from"./formUtils-BYxmBxm2.js";import{r as f}from"./storyUtils-BoiXCagy.js";import{O as S}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-Bt4xFNEa.js";import"./theme-D4oZEIDo.js";import"./Button-DtrbI49b.js";import"./generateUtilityClasses-BPeOZGYv.js";import"./ButtonBase-XhX7nRZA.js";import"./useIsFocusVisible-B0UKn5st.js";import"./Popper-XtJavzF_.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BNssCB1g.js";import"./index-BxmsGmlx.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-COKC524W.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-FZ6f8RnB.js";import"./createSvgIcon-BtentTTR.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-DS8uJRIW.js";import"./CheckboxList-KMp2i93r.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-U_yyaHlS.js";import"./FormControlLabel-DBnW5Tz0.js";import"./getThemeProps-C7Gh6k4C.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CnIiVLVy.js";import"./ButtonRow-DkywlgRX.js";import"./Spinner-BCi31wiD.js";import"./Chip-ClM3atSE.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-B-eZefD4.js";import"./StyledFormControl.styled-DtM0hwgT.js";import"./Toggle-CsG9lN-c.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-DJl1bcU6.js";import"./TitleWrapper-CwZWuCfT.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-C7wPIcx0.js";import"./ChevronRight-DzCnyQxa.js";import"./PageHeader-DZLZxWQa.js";import"./MenuSelect-Duu-F1kP.js";import"./useMediaQuery-Ek32I1kU.js";import"./formats-CDjt32hU.js";import"./Dialog-CBmRC4WJ.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-C0aKiv9i.js";import"./Close-D5vwSMiv.js";import"./ClickAwayListener-DdjayeQ_.js";import"./Blank-JgbFIOSE.js";const xe={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  showState
}: typeof ConditionalSections.args): ReactElement => {
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
  const sections = useMemo<SectionDef[]>(() => {
    return [{
      title: "Section 1",
      description: "Description for section 1",
      fields: [
      // row 1
      [["dependency"]],
      // row 2
      [["section_show"]]]
    }, {
      title: "Section 2",
      description: "Description for section 2",
      fields: [[["dependent"]]],
      show: ({
        data
      }) => data?.dependency === KEY_PHRASE && data?.section_show
    }];
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "dependency",
    label: "Dependency",
    type: "text",
    instructionText: \`Type "\${KEY_PHRASE}" to show another field\`,
    required: true
  }, {
    name: "section_show",
    label: "Show another section",
    type: "toggle",
    show: ({
      data
    }) => {
      return data?.dependency === KEY_PHRASE;
    }
  }, {
    name: "dependent",
    label: "Dependent",
    type: "text",
    required: true
  }], []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Runtime behaviors" fields={fields} sections={sections} />
            </div>
        </>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Ee=["ConditionalSections"];export{t as ConditionalSections,Ee as __namedExportsOrder,xe as default};
