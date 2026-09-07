import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-wekxHvEx.js";import{u as f,F as h}from"./index-Be0ln9Sk.js";import{r as g}from"./renderButtons-DP0bGf4C.js";import"./MosaicContext-DJPbhtc9.js";import"./ButtonBase-CEIt18Mr.js";import"./identifier-Bq1wI7MV.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BVevyrl8.js";import"./useSlot-VZdH5auH.js";import"./TitleWrapper-B678JoiA.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./Button-DIVFsLMo.js";import"./useId-69YouNVI.js";import"./CircularProgress-PxS61-je.js";import"./index-Zzm_Wx6F.js";import"./useTooltip-B7zXsQMX.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-BqC9NAU7.js";import"./useMountWarning-Q6RqOhZJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DQPkTHY5.js";import"./createSvgIcon-h9rIBQiG.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-DOqctSak.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-B8rSa391.js";import"./ExpandMore-BE6LXXJH.js";import"./Help-BcORB-TR.js";import"./Chip-BCe941lM.js";import"./Clear-u1SsJyJR.js";import"./FormFieldText.styled-Dm2g3xmg.js";import"./formControlState-Qaq2QphE.js";import"./GlobalStyles-Ylo9bxXj.js";import"./useControlled-Mt41fVm8.js";import"./DataViewFilterDropdownButtons-PC354Uox.js";import"./StyledPopperPaper-eorsSgGN.js";import"./TooltipIcon-CPXCaul4.js";import"./DataViewPrimaryFilter.styled-uuR6Tdbm.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-SRkOx8Tl.js";import"./Add-SmKzKNaz.js";import"./PageHeader-7knH4mAR.js";import"./Spinner-pOddc5Fg.js";import"./CheckboxList-h5W3PYVW.js";import"./Checkbox-CCK0f4bK.js";import"./SwitchBase-DgSlJAjj.js";import"./StyledOptionFormControl-B1Oz8mMA.js";import"./FormGroup-BzWjA99g.js";import"./MoreVert-DegxOP5X.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CGaHXwxY.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-DYrzhSLw.js";import"./Close-C8qa5nrL.js";import"./ChipList-BwSIiXGv.js";import"./RadioGroup-Brp0rBnf.js";import"./Toggle-BR8whRGg.js";import"./Dialog-BX7zumSd.js";import"./ThemeProvider-Be_gFf1k.js";import"./Link-DusayIDr.js";import"./CardHeading-CtzkucTu.js";import"./OpenInNew-GvVN9mBj.js";import"./Delete-VhiuMRtt.js";import"./Settings-pl1mUW38.js";import"./CloudDownload-DVh_jn78.js";import"./InsertDriveFile-DIzz3aBU.js";const qt={title:"Components/Form"},y=document.body.style.margin,t=({showState:n})=>{const i=f(),{state:e,methods:{setFieldValue:m},handleSubmit:d}=i;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var s;if(!e.touched.slug){const c=(s=e.data.name)==null?void 0:s.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");m({name:"slug",value:c})}},[m,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[n&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...i,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var p,a,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const At=["CopyField"];export{t as CopyField,At as __namedExportsOrder,qt as default};
