import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as i}from"./index-BP8_t0zE.js";import{u as c,F as y}from"./formUtils-Chz1BKzT.js";import"./Button-nZpOdxAh.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as h}from"./storyUtils-BoiXCagy.js";import{O as f}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-Dy7YdaNR.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-Bq4SLC4n.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CLmY5moR.js";import"./createSvgIcon-CYUKOE7w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-DKfV5JUa.js";import"./useTheme-JcVqJUPL.js";import"./index-BxmsGmlx.js";import"./index-D3nDZNMY.js";import"./CheckboxList-vtqXYb3p.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DlKnOsMd.js";import"./FormControlLabel-CADsa67j.js";import"./ButtonBase-B9MACyLv.js";import"./getThemeProps-DQ8M-aLx.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-BbvqwW3v.js";import"./ButtonRow-mHN3ze0L.js";import"./useToggle-lipGlewK.js";import"./Spinner-BweMUiuT.js";import"./Chip-CULEVs9E.js";import"./Typography-cUIkDVC5.js";import"./SubtitleText-BtBCMBDH.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CQ27sEkY.js";import"./StyledFormControl.styled-CjmTklcO.js";import"./Toggle-Nou3pw5b.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-tvyFmnDf.js";import"./TitleWrapper-BMh3rxDx.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-DWruTFKQ.js";import"./MoreVert-LCJpouIh.js";import"./ChevronRight-ClDk1Oir.js";import"./PageHeader-BKvpMOBE.js";import"./MenuSelect-DW9Vb27W.js";import"./formats-CDjt32hU.js";import"./Dialog-oIWE6RL0.js";import"./useMediaQuery-BRf2ARoC.js";import"./SideNav-BjSBl4fN.js";import"./Snackbar-WG1ScYsF.js";import"./Close-BZa28Lj1.js";import"./ClickAwayListener-C0tzoxWy.js";import"./Blank-Ci2z0OwS.js";const gt={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Ft=["ConditionalFields"];export{t as ConditionalFields,Ft as __namedExportsOrder,gt as default};
