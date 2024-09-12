import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as f,F as h}from"./formUtils-CZ0W2Uz2.js";import"./Button-Dth3WPw1.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as g}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-Bd74be6I.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-DQAffLtG.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CpDkk29s.js";import"./createSvgIcon-DV_hUcxO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CU1avGbv.js";import"./useTheme-D1npBiLf.js";import"./index-BxmsGmlx.js";import"./index-B05xQjuh.js";import"./CheckboxList-BQ6x_Hvh.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-C56Mz24f.js";import"./FormControlLabel-D-Q_BSJi.js";import"./ButtonBase-Cd1-20QD.js";import"./getThemeProps-DaW1Ssab.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-D7zshuFL.js";import"./ButtonRow-WNepJUJ6.js";import"./useToggle-lipGlewK.js";import"./Spinner-BJvuYi3M.js";import"./Chip-CIJzu56h.js";import"./Typography-BXo9fTd2.js";import"./SubtitleText-BK7UxBzP.js";import"./sizes-C6oSOElx.js";import"./RadioButton-65NVzLMy.js";import"./StyledFormControl.styled-Vy3KCkom.js";import"./Toggle-D0mZyQ2E.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-C1Ge2OOe.js";import"./TitleWrapper-DfdTImyn.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-SU3bZ5Lh.js";import"./MoreVert--g84jLkq.js";import"./ChevronRight-DCOtcHmH.js";import"./PageHeader-BH_G1KhX.js";import"./MenuSelect-Ca8tFfLg.js";import"./useMediaQuery-C-A7lI-2.js";import"./formats-CDjt32hU.js";import"./Dialog-D_7cNnRq.js";import"./SideNav-BrsNz3mT.js";import"./Snackbar-DilGcmOI.js";import"./Close-CngHQLDC.js";import"./ClickAwayListener-DnjBLK-5.js";import"./Blank-JgbFIOSE.js";const St={title:"Components/Form"},y=document.body.style.margin,t=({showState:p})=>{const i=f(),{state:e,methods:{setFieldValue:n},handleSubmit:d}=i;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var m;if(!e.touched.slug){const c=(m=e.data.name)==null?void 0:m.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");n({name:"slug",value:c})}},[n,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[p&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...i,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const wt=["CopyField"];export{t as CopyField,wt as __namedExportsOrder,St as default};
