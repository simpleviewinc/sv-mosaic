import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as f,F as h}from"./index-CskZx9qi.js";import{r as g}from"./renderButtons-BmHfsf_z.js";import"./styled-components.browser.esm-CXkPWv0m.js";import"./sizes-C0LBJJ09.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-UbmTdAF_.js";import"./Button-DaAMSO0F.js";import"./DefaultPropsProvider-Zw7se0ql.js";import"./generateUtilityClasses-CVch8Fxh.js";import"./ButtonBase-CDkrym0l.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-BnPRUgpe.js";import"./Popper-DGZlEdwR.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Bm22bs_q.js";import"./useThemeWithoutDefault-DxXNdoSH.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CBh3xxKQ.js";import"./createSvgIcon-CfA1Cyex.js";import"./createSvgIcon-18YkCsWd.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Reib778S.js";import"./TitleText-BuZN1QQA.js";import"./ButtonRow-C029PRKt.js";import"./index-BfP4QUlu.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DRsOHDYs.js";import"./Chip-IkNXxPJK.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-DrsxdApR.js";import"./formControlState-CAqH4-hG.js";import"./Spinner-D4T0rUK9.js";import"./SubtitleText-DmGUl5wt.js";import"./CheckboxList-DghwUsPs.js";import"./Checkbox-BscruA8m.js";import"./FormControlLabel-4CniAqEL.js";import"./MoreVert-CApM3moX.js";import"./ChevronRight-foCHf73R.js";import"./PageHeader-vRr5zj4B.js";import"./formats-CMvQHWsT.js";import"./RadioButton-CLTmy9-q.js";import"./StyledFormControl.styled-B0T8LICC.js";import"./Toggle-dI05S_-G.js";import"./Dialog-B6RaYDcJ.js";import"./ThemeProvider-CGOYeIs4.js";import"./ChipList-DNkGOHFk.js";import"./SideNav-DJ_5--ll.js";import"./Snackbar-DaPPPHaq.js";import"./Close-4ToqfvgU.js";import"./ClickAwayListener-Dkkr5f_-.js";const Ft={title:"Components/Form"},y=document.body.style.margin,t=({showState:p})=>{const i=f(),{state:e,methods:{setFieldValue:n},handleSubmit:d}=i;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var m;if(!e.touched.slug){const c=(m=e.data.name)==null?void 0:m.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");n({name:"slug",value:c})}},[n,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[p&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...i,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
