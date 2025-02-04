import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as i}from"./index-Btj5Fd67.js";import{u as c,F as y}from"./Form-D2YTXS0P.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{O as f}from"./utils-BR2PSRFh.js";import"./theme-C7C0QMlu.js";import"./SideNav-BXGvGLiL.js";import"./containerQuery-BqcK0eeN.js";import"./useToggle-B3mbTfSB.js";import"./ColorSelected-rVJC1bnf.js";import"./index-B6f3rorp.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BUfrUkss.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./createSvgIcon-C7F5N1gl.js";import"./createSvgIcon-Bmixpj46.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-C9uVWUyr.js";import"./useId-DwELyCdS.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-D8KJxpyu.js";import"./Chip-BycvDKsV.js";import"./ButtonBase-Ci24pScM.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-L7Zdnfri.js";import"./FormFieldText.styled-BXg2h5EQ.js";import"./Button-BW21zc79.js";import"./Popper-lO7-sb5Y.js";import"./useTheme-CN1B93FI.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./formControlState-Bl9Dd4wz.js";import"./ButtonRow-DaYhrvd1.js";import"./Spinner-C0FunRuE.js";import"./Typography-D0-akgTt.js";import"./SubtitleText-DUUVrgUU.js";import"./CheckboxList-CKLT5_IE.js";import"./Checkbox-faPr4U1Q.js";import"./FormControlLabel-DlxLljVV.js";import"./getThemeProps-DdDNKTGU.js";import"./TitleWrapper-Bkg-hsBc.js";import"./TitleText-CdOksVB0.js";import"./MoreVert-BH0BHXBp.js";import"./ChevronRight-Da8zFjWX.js";import"./PageHeader-CmlBcYYr.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BFvQvs9V.js";import"./StyledFormControl.styled-D1xcYZGf.js";import"./Toggle-Lx-sDa2f.js";import"./formats-sBod7wm8.js";import"./Dialog-BFRUe6cu.js";import"./useMediaQuery-Yl5lg82S.js";import"./Snackbar-B25MKBii.js";import"./Close-CSY1ofSk.js";import"./ClickAwayListener-DweT8u9y.js";import"./TooltipIcon-C4tSz_X8.js";const bt={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
