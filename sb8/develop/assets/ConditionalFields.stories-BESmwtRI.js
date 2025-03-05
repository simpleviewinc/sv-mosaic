import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as i}from"./index-Btj5Fd67.js";import{u as c,F as y}from"./index-DE-vLMND.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{O as f}from"./utils-BR2PSRFh.js";import"./theme-D38K4W-Z.js";import"./testIds-fiKIunms.js";import"./TitleWrapper-D0jWUQG0.js";import"./Button-D32bI-Hq.js";import"./generateUtilityClasses-8vC7aVzu.js";import"./ButtonBase-qeNCnyas.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Dpu8VSWK.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D0FYgW1y.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-CksQJzsL.js";import"./createSvgIcon-BYvI5rjI.js";import"./createSvgIcon-DEmQcq0a.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-iUA5kZEF.js";import"./TitleText-b_QXd7Yf.js";import"./ButtonRow-Bg_-eU3q.js";import"./index-BbjJqZ7X.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BZ3tfVAq.js";import"./Chip-CB_Nl8Vf.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-DbKyEzTp.js";import"./formControlState-B0dK5Yiw.js";import"./Spinner-BTI8gP3i.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-D_uRM6MU.js";import"./Checkbox-3bvh3g8i.js";import"./FormControlLabel-BnIcqxAa.js";import"./getThemeProps-CANKBKLy.js";import"./MoreVert-CcQ_DGVp.js";import"./ChevronRight-B_wNKS8s.js";import"./PageHeader-DvaIFD-A.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BelC6HqS.js";import"./StyledFormControl.styled-DMWoJm0e.js";import"./Toggle-2hh2ORfC.js";import"./Dialog-BKnqllF5.js";import"./SideNav-D2hLlXvZ.js";import"./Snackbar-BFSmGquB.js";import"./Close-CSM1BQ-c.js";import"./ClickAwayListener-DoPvkzLf.js";const ft={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const xt=["ConditionalFields"];export{t as ConditionalFields,xt as __namedExportsOrder,ft as default};
