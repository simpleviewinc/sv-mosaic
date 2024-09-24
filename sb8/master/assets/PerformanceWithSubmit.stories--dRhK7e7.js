import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{u as c,a as h,F as f}from"./formUtils-BV53shgQ.js";import"./Button-Cm1Qf39l.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as x}from"./storyUtils-BoiXCagy.js";import{O as b}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-B_lPWMo9.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-CplxKB4o.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CA50KEz-.js";import"./useTheme-vMmOGwbU.js";import"./index-BxmsGmlx.js";import"./index-DBogRtpm.js";import"./CheckboxList-nF3GDUWX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-CJgaGoMX.js";import"./FormControlLabel-2HxiQW27.js";import"./ButtonBase-Btj-nnLi.js";import"./getThemeProps-CBTZRUO9.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CN3zPhHZ.js";import"./ButtonRow-Dfei1Wea.js";import"./useToggle-lipGlewK.js";import"./Spinner-fkz2uue8.js";import"./Chip-By8My2oo.js";import"./Typography-BXo9fTd2.js";import"./SubtitleText-BK7UxBzP.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BChaCK1f.js";import"./StyledFormControl.styled-CNZVAVRt.js";import"./Toggle-SryGtWz_.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CMT4OGgY.js";import"./TitleWrapper-BnUyvD-V.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-SU3bZ5Lh.js";import"./MoreVert-CHB9Iy9y.js";import"./ChevronRight-Bc3jAIO-.js";import"./PageHeader-B-ax13VL.js";import"./MenuSelect-CGpLowyH.js";import"./formats-CDjt32hU.js";import"./Dialog-bxyBhLRk.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-BrsNz3mT.js";import"./Snackbar-Ba6pD4j8.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";import"./Blank-D-yfChNi.js";const Ot={title:"Components/Form"},t=({showState:a})=>{const o=c(),{state:l,handleSubmit:d}=o;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=b}),[]);const u=m.useMemo(()=>{const i=[];for(let e=0;e<100;e++)i.push({name:`text${e}`,label:`Simple Text ${e}`,type:"text",instructionText:"testing",validators:[h]});return i},[]);return r.jsxs(r.Fragment,{children:[a&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(f,{...o,buttons:x(d),fields:u,title:"Performance with submit"})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
