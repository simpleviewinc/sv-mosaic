import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as i}from"./index-BP8_t0zE.js";import{u as c,F as y}from"./formUtils-BDmDTW9-.js";import{r as h}from"./storyUtils-ByV2Bsyv.js";import{O as f}from"./utils-BR2PSRFh.js";import"./DataViewFilterDropdown-B4X4i9iN.js";import"./theme-BFHUhhnW.js";import"./useThemeProps-CC0A0wW3.js";import"./useFormControl-h1XKtQPT.js";import"./createSvgIcon-BFtO5Q3M.js";import"./createSvgIcon-D-pnGctT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Button-BH4-03LC.js";import"./ButtonBase-R8jPeFSW.js";import"./emotion-react.browser.esm-F1m11hi1.js";import"./Popper-DptWoz9V.js";import"./index-BxmsGmlx.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./_baseMap-CD-F1Lik.js";import"./debounce-DCEw8XId.js";import"./isSymbol-C7K7xDG1.js";import"./CheckboxList-BW3qbPww.js";import"./Checkbox-Dcjyc20p.js";import"./FormControlLabel-xKzxkw-X.js";import"./reactTools-D2O6dTsh.js";import"./DataViewPrimaryFilter.styled-CqJQyTfl.js";import"./ButtonRow-CG1gNQ0k.js";import"./Spinner-qhh6Qxwa.js";import"./Chip-CC244fBs.js";import"./Typography-D0sDo15u.js";import"./SubtitleText-B5uTxLpF.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CRToYo89.js";import"./StyledFormControl.styled-6O-ETzJ6.js";import"./Toggle-B_NBlHrs.js";import"./testIds-B75WQI-K.js";import"./index-DS2IKydr.js";import"./TitleWrapper-N6k_cHLp.js";import"./containerQuery-v_lW7Ytt.js";import"./TitleText-BTs7Gt0E.js";import"./MoreVert-D7-p9KfM.js";import"./ChevronRight-B_Gprqw3.js";import"./PageHeader-mb5NuRbn.js";import"./MenuSelect-DV8M_NkV.js";import"./useMediaQuery-DL62vn1N.js";import"./formats-CDjt32hU.js";import"./Dialog-H5GqHGP3.js";import"./SideNav-wnS0nnEp.js";import"./Snackbar-C3sy6vop.js";import"./Close-DTUN_E5S.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const Et={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
