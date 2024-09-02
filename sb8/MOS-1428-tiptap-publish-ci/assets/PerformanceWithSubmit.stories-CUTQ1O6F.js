import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{u as c,a as h,F as f}from"./formUtils-DjSqlTKK.js";import"./Button-DueqkIm2.js";import"./useMosaicTranslation-COKC524W.js";import{r as x}from"./storyUtils-BoiXCagy.js";import{O as b}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-BdyxYbXv.js";import"./theme-D4oZEIDo.js";import"./generateUtilityClasses-BPeOZGYv.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-FZ6f8RnB.js";import"./createSvgIcon-BtentTTR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-B0UKn5st.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-Bh80rPSh.js";import"./useTheme-BNssCB1g.js";import"./index-BxmsGmlx.js";import"./index-2J_8zTQy.js";import"./CheckboxList-KMp2i93r.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-U_yyaHlS.js";import"./FormControlLabel-DBnW5Tz0.js";import"./ButtonBase-XhX7nRZA.js";import"./getThemeProps-C7Gh6k4C.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CnIiVLVy.js";import"./ButtonRow-qkswv1Jr.js";import"./useToggle-lipGlewK.js";import"./Spinner-BCi31wiD.js";import"./Chip-ClM3atSE.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-B-eZefD4.js";import"./StyledFormControl.styled-DtM0hwgT.js";import"./Toggle-CG00k_Wo.js";import"./testIds-BnancpY_.js";import"./ColorSelected-BP7nqoPF.js";import"./TitleWrapper-MWHBzMgh.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-C7wPIcx0.js";import"./ChevronRight-BLUVcH0g.js";import"./PageHeader-B-GYZDZp.js";import"./MenuSelect-BcCb5A_-.js";import"./useMediaQuery-Ek32I1kU.js";import"./formats-CDjt32hU.js";import"./Dialog-DAfxXC36.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-DHq1g_-o.js";import"./Close-D5vwSMiv.js";import"./ClickAwayListener-DdjayeQ_.js";import"./Blank-JgbFIOSE.js";const Ot={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const vt=["PerformanceWithSubmit"];export{t as PerformanceWithSubmit,vt as __namedExportsOrder,Ot as default};
