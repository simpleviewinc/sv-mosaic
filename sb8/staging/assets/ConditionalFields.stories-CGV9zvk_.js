import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as i}from"./index-BP8_t0zE.js";import{u as c,F as y}from"./formUtils-CERrhxxw.js";import"./Button-BrUhf9jf.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{O as f}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-CDQUwglR.js";import"./theme-DRtZtbPc.js";import"./useMosaicTranslation-CZCb37QS.js";import"./useIsFocusVisible-De2ftVE9.js";import"./generateUtilityClasses-CplxKB4o.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CA50KEz-.js";import"./useTheme-vMmOGwbU.js";import"./index-BxmsGmlx.js";import"./index-CiJN4qBb.js";import"./CheckboxList-9J3AJhZb.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-Daz-CCp_.js";import"./FormControlLabel-2HxiQW27.js";import"./ButtonBase-Btj-nnLi.js";import"./getThemeProps-CBTZRUO9.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CJaR1K_8.js";import"./ButtonRow-C8VNIQ4B.js";import"./useToggle-lipGlewK.js";import"./Spinner-Cxn5F_rN.js";import"./Chip-CuADowIf.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D1cjnaj9.js";import"./StyledFormControl.styled-DR5TItxT.js";import"./Toggle-DqBdDGXG.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CUu1BnTo.js";import"./TitleWrapper-B_5wLb-y.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-CHB9Iy9y.js";import"./ChevronRight-Bc3jAIO-.js";import"./PageHeader-B0SeyLtR.js";import"./formats-CDjt32hU.js";import"./Dialog-DYdX5JhR.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-B3ORSSfg.js";import"./Snackbar-CeVWLZcc.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";const bt={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Et=["ConditionalFields"];export{t as ConditionalFields,Et as __namedExportsOrder,bt as default};
