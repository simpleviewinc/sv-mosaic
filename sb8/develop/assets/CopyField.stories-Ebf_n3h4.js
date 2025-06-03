import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as f,F as h}from"./index-ChNyYHZm.js";import{r as g}from"./renderButtons-BmHfsf_z.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-DeOGO1IS.js";import"./Button-mgz2aTYm.js";import"./DefaultPropsProvider-BwNoCFE_.js";import"./generateUtilityClasses-42_at76R.js";import"./ButtonBase-EThHB291.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-CtiN8CS7.js";import"./Popper-BpP7Dmyd.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Dt0_M2VT.js";import"./useThemeWithoutDefault-ML7LN7QY.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./createSvgIcon-Bdc0w2F6.js";import"./createSvgIcon-CmcFkBiI.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-CaKiXxBh.js";import"./DisplayText-p-dXd17y.js";import"./ButtonRow-gAFOvWL6.js";import"./index-CWM90NNz.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-B6PsGsAS.js";import"./Chip-BiF3n3mk.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CpwAbK4m.js";import"./formControlState-DKt-4xzo.js";import"./Spinner-BIub0DbD.js";import"./Text-SN-dsdu2.js";import"./CheckboxList-BXiGiY-c.js";import"./Checkbox-CABnih5k.js";import"./FormControlLabel-FaPuCwUU.js";import"./MoreVert-BxoNaVuW.js";import"./ChevronRight-C-yhpJTc.js";import"./PageHeader-DYkch7zz.js";import"./formats-CMvQHWsT.js";import"./RadioButton-peGC_BMl.js";import"./StyledFormControl.styled-CW3JaFWW.js";import"./Toggle-IqG9sXDk.js";import"./Dialog-kc3-0tkB.js";import"./ThemeProvider-CyphNCQQ.js";import"./ChipList-D5NUhJyC.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-DXnnQTTm.js";import"./Close-CGtmtFuS.js";import"./ClickAwayListener-Dkkr5f_-.js";const Ft={title:"Components/Form"},y=document.body.style.margin,t=({showState:p})=>{const i=f(),{state:e,methods:{setFieldValue:n},handleSubmit:d}=i;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var m;if(!e.touched.slug){const c=(m=e.data.name)==null?void 0:m.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");n({name:"slug",value:c})}},[n,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[p&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...i,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  showState
}: typeof CopyField.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    methods: {
      setFieldValue
    },
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "name",
    label: "Name",
    type: "text",
    required: true
  }, {
    name: "slug",
    label: "Slug",
    type: "text",
    required: true,
    helperText: "The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"
  }], []);
  useEffect(() => {
    if (!state.touched.slug) {
      const transformedLabel = state.data.name?.trim().toLowerCase().replace(/ {1,}/g, "_").replace(/[^a-z_]/g, "");
      setFieldValue({
        name: "slug",
        value: transformedLabel
      });
    }
  }, [setFieldValue, state.data.name, state.touched]);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Validators story" fields={fields} />
            </div>
        </>;
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const St=["CopyField"];export{t as CopyField,St as __namedExportsOrder,Ft as default};
