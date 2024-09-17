import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{u as f,F as h}from"./formUtils-Chz1BKzT.js";import"./Button-nZpOdxAh.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as g}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-Dy7YdaNR.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-Bq4SLC4n.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CLmY5moR.js";import"./createSvgIcon-CYUKOE7w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-DKfV5JUa.js";import"./useTheme-JcVqJUPL.js";import"./index-BxmsGmlx.js";import"./index-D3nDZNMY.js";import"./CheckboxList-vtqXYb3p.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DlKnOsMd.js";import"./FormControlLabel-CADsa67j.js";import"./ButtonBase-B9MACyLv.js";import"./getThemeProps-DQ8M-aLx.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-BbvqwW3v.js";import"./ButtonRow-mHN3ze0L.js";import"./useToggle-lipGlewK.js";import"./Spinner-BweMUiuT.js";import"./Chip-CULEVs9E.js";import"./Typography-cUIkDVC5.js";import"./SubtitleText-BtBCMBDH.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CQ27sEkY.js";import"./StyledFormControl.styled-CjmTklcO.js";import"./Toggle-Nou3pw5b.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-tvyFmnDf.js";import"./TitleWrapper-BMh3rxDx.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-DWruTFKQ.js";import"./MoreVert-LCJpouIh.js";import"./ChevronRight-ClDk1Oir.js";import"./PageHeader-BKvpMOBE.js";import"./MenuSelect-DW9Vb27W.js";import"./formats-CDjt32hU.js";import"./Dialog-oIWE6RL0.js";import"./useMediaQuery-BRf2ARoC.js";import"./SideNav-BjSBl4fN.js";import"./Snackbar-WG1ScYsF.js";import"./Close-BZa28Lj1.js";import"./ClickAwayListener-C0tzoxWy.js";import"./Blank-Ci2z0OwS.js";const St={title:"Components/Form"},y=document.body.style.margin,t=({showState:p})=>{const i=f(),{state:e,methods:{setFieldValue:n},handleSubmit:d}=i;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var m;if(!e.touched.slug){const c=(m=e.data.name)==null?void 0:m.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");n({name:"slug",value:c})}},[n,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[p&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...i,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
