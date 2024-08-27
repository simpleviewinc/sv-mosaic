import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as i}from"./index-BP8_t0zE.js";import{u as c,F as y}from"./formUtils-_3vuFM65.js";import{r as h}from"./storyUtils-BoiXCagy.js";import{O as f}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-D52tBzSN.js";import"./theme-D4oZEIDo.js";import"./Button-hDbntUFq.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-PbTCDhKf.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-w-fPOHP0.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-DtSB7Npb.js";import"./createSvgIcon-C--OfSMv.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-Dj2uKZPX.js";import"./CheckboxList-BJKO_tlZ.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-99gvqvpC.js";import"./FormControlLabel-6w5tMtqL.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-D6sgaW_7.js";import"./ButtonRow-CMyoNa1j.js";import"./Spinner-CkdL5ves.js";import"./Chip-DXGqlxO_.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-cXyE_jQb.js";import"./StyledFormControl.styled-BiBtmbII.js";import"./Toggle-CVDhB75Z.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-Br-7O02j.js";import"./TitleWrapper-pxn7wBs7.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-DHzDrhAG.js";import"./ChevronRight-_vfyNBs1.js";import"./PageHeader-Bx1E2hEF.js";import"./MenuSelect-Cs3ZiiP1.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-C7U_7KSK.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-uNo4FsPQ.js";import"./Close-SaQPltJO.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const Et={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const gt=["ConditionalFields"];export{t as ConditionalFields,gt as __namedExportsOrder,Et as default};
