import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{u as c,a as h,F as f}from"./formUtils-BDmDTW9-.js";import{r as x}from"./storyUtils-ByV2Bsyv.js";import{O as b}from"./utils-BR2PSRFh.js";import"./DataViewFilterDropdown-B4X4i9iN.js";import"./theme-BFHUhhnW.js";import"./useThemeProps-CC0A0wW3.js";import"./useFormControl-h1XKtQPT.js";import"./createSvgIcon-BFtO5Q3M.js";import"./createSvgIcon-D-pnGctT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Button-BH4-03LC.js";import"./ButtonBase-R8jPeFSW.js";import"./emotion-react.browser.esm-F1m11hi1.js";import"./Popper-DptWoz9V.js";import"./index-BxmsGmlx.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./_baseMap-CD-F1Lik.js";import"./debounce-DCEw8XId.js";import"./isSymbol-C7K7xDG1.js";import"./CheckboxList-BW3qbPww.js";import"./Checkbox-Dcjyc20p.js";import"./FormControlLabel-xKzxkw-X.js";import"./reactTools-D2O6dTsh.js";import"./DataViewPrimaryFilter.styled-CqJQyTfl.js";import"./ButtonRow-CG1gNQ0k.js";import"./Spinner-qhh6Qxwa.js";import"./Chip-CC244fBs.js";import"./Typography-D0sDo15u.js";import"./SubtitleText-B5uTxLpF.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CRToYo89.js";import"./StyledFormControl.styled-6O-ETzJ6.js";import"./Toggle-B_NBlHrs.js";import"./testIds-B75WQI-K.js";import"./index-DS2IKydr.js";import"./TitleWrapper-N6k_cHLp.js";import"./containerQuery-v_lW7Ytt.js";import"./TitleText-BTs7Gt0E.js";import"./MoreVert-D7-p9KfM.js";import"./ChevronRight-B_Gprqw3.js";import"./PageHeader-mb5NuRbn.js";import"./MenuSelect-DV8M_NkV.js";import"./useMediaQuery-DL62vn1N.js";import"./formats-CDjt32hU.js";import"./Dialog-H5GqHGP3.js";import"./SideNav-wnS0nnEp.js";import"./Snackbar-C3sy6vop.js";import"./Close-DTUN_E5S.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const Ft={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Ot=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,Ot as __namedExportsOrder,Ft as default};
