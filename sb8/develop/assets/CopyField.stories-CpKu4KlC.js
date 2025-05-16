import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as f,F as h}from"./index-TbANqjzF.js";import{r as g}from"./renderButtons-BmHfsf_z.js";import"./sizes-BklZZmo4.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-FC5BdKNu.js";import"./Button-DWbCZful.js";import"./generateUtilityClasses-rDn4KRfY.js";import"./ButtonBase-C5QWJNfJ.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-BwE5duTX.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D7dAzrtf.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CZARXB1J.js";import"./createSvgIcon-BLTtL5Y9.js";import"./createSvgIcon-Dg0jtXvj.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-iddL5eaH.js";import"./TitleText-CICG0G5h.js";import"./ButtonRow-BOELw1Tj.js";import"./index-5FtVc0ZK.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-BizDTt4x.js";import"./Chip-CMTBWucu.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CGYIYrSS.js";import"./formControlState-BAKA1Iy6.js";import"./Spinner-CbDJlIED.js";import"./SubtitleText-DS-qVyZH.js";import"./CheckboxList-BfityfDx.js";import"./Checkbox-CpLxzsg0.js";import"./FormControlLabel-BKc7O7Lz.js";import"./MoreVert-CMcGX8SU.js";import"./ChevronRight-BydWUgoJ.js";import"./PageHeader-DTPo7jCK.js";import"./formats-CMvQHWsT.js";import"./RadioButton-p7gSMkH6.js";import"./StyledFormControl.styled-BMW4FUOw.js";import"./Toggle-9YEwDS0M.js";import"./Dialog-CnKRaqxG.js";import"./ChipList-DGWZ9ZdD.js";import"./SideNav-kqb59Ukq.js";import"./Snackbar-CMDie7lV.js";import"./Close-DQPzhJmS.js";import"./ClickAwayListener-Dkkr5f_-.js";const ht={title:"Components/Form"},y=document.body.style.margin,t=({showState:p})=>{const n=f(),{state:e,methods:{setFieldValue:i},handleSubmit:d}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var s;if(!e.touched.slug){const c=(s=e.data.name)==null?void 0:s.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");i({name:"slug",value:c})}},[i,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[p&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...n,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,a,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const gt=["CopyField"];export{t as CopyField,gt as __namedExportsOrder,ht as default};
