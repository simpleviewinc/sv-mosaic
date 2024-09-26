import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as f,F as h}from"./formUtils-CERrhxxw.js";import"./Button-BrUhf9jf.js";import{r as g}from"./renderButtons-BmHfsf_z.js";import"./FormFieldText.styled-CDQUwglR.js";import"./theme-DRtZtbPc.js";import"./useMosaicTranslation-CZCb37QS.js";import"./useIsFocusVisible-De2ftVE9.js";import"./generateUtilityClasses-CplxKB4o.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CA50KEz-.js";import"./useTheme-vMmOGwbU.js";import"./index-BxmsGmlx.js";import"./index-CiJN4qBb.js";import"./CheckboxList-9J3AJhZb.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-Daz-CCp_.js";import"./FormControlLabel-2HxiQW27.js";import"./ButtonBase-Btj-nnLi.js";import"./getThemeProps-CBTZRUO9.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CJaR1K_8.js";import"./ButtonRow-C8VNIQ4B.js";import"./useToggle-lipGlewK.js";import"./Spinner-Cxn5F_rN.js";import"./Chip-CuADowIf.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D1cjnaj9.js";import"./StyledFormControl.styled-DR5TItxT.js";import"./Toggle-DqBdDGXG.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CUu1BnTo.js";import"./TitleWrapper-B_5wLb-y.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-CHB9Iy9y.js";import"./ChevronRight-Bc3jAIO-.js";import"./PageHeader-B0SeyLtR.js";import"./formats-CDjt32hU.js";import"./Dialog-DYdX5JhR.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-B3ORSSfg.js";import"./Snackbar-CeVWLZcc.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";const xt={title:"Components/Form"},y=document.body.style.margin,t=({showState:p})=>{const i=f(),{state:e,methods:{setFieldValue:n},handleSubmit:d}=i;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var m;if(!e.touched.slug){const c=(m=e.data.name)==null?void 0:m.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");n({name:"slug",value:c})}},[n,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[p&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...i,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const Ft=["CopyField"];export{t as CopyField,Ft as __namedExportsOrder,xt as default};
