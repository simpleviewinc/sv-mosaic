import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-ePW8zFKp.js";import{u as f,F as h}from"./index-YAzqtmUw.js";import{r as g}from"./renderButtons-DP0bGf4C.js";import"./ExpandMore-DTgjfsqJ.js";import"./identifier-vWKndVvV.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-DOp_2lHr.js";import"./createSvgIcon-JtMyjPpt.js";import"./generateUtilityClasses-CUUJXLh7.js";import"./styled-components.browser.esm-CUKKF2J4.js";import"./ButtonBase-YTDCQqeW.js";import"./useIsFocusVisible-BxLBCNny.js";import"./ownerWindow-DvT1GKkC.js";import"./MosaicContext-CjWw6F81.js";import"./FormFieldText.styled-Bk8NGAsC.js";import"./formControlState-kJY1j3p4.js";import"./Popper-DP0cm8Rf.js";import"./useTheme-DTRH4aGG.js";import"./useThemeWithoutDefault-Dj6yTNm1.js";import"./index-DnRBG-o-.js";import"./index-CKydZLen.js";import"./Button-DrJO7SQT.js";import"./index-Ca1iOyRL.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-DmKVz7XJ.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import"./DisplayText-DlqFHcnF.js";import"./ButtonRow-YhuqC_GR.js";import"./DataViewFilterDropdownButtons-C_RCg-Qn.js";import"./StyledPopperPaper-8Ep909Ba.js";import"./index-Bh5Vkqmp.js";import"./Chip-0jtXmB96.js";import"./DataViewPrimaryFilter.styled-BsgbKxfV.js";import"./Badge-BWKQiQcj.js";import"./Text-cPxBJcyq.js";import"./PickerPanel-G-RBUfJL.js";import"./PageHeader-CGRiWJUd.js";import"./Spinner-Bi6mQivf.js";import"./CheckboxList-Dy-kOrHq.js";import"./Checkbox-DHQwFOa3.js";import"./SwitchBase-BYEDHepN.js";import"./StyledOptionFormControl-Ca00866Q.js";import"./MoreVert-BnBEmsSM.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CXoQvajJ.js";import"./Snackbar-CXJOSA6g.js";import"./Close-Da-iw-_d.js";import"./ChipList-DaRpkRZU.js";import"./RadioButton-C4xgaHsm.js";import"./Toggle-Bi6du1gm.js";import"./Dialog-oPs8S-ZP.js";import"./ThemeProvider-B65WN4y2.js";import"./SideNav-BHwtuPtb.js";import"./Card.styled-Cfnm8QOk.js";const St={title:"Components/Form"},y=document.body.style.margin,t=({showState:p})=>{const i=f(),{state:e,methods:{setFieldValue:n},handleSubmit:d}=i;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const u=o.useMemo(()=>[{name:"name",label:"Name",type:"text",required:!0},{name:"slug",label:"Slug",type:"text",required:!0,helperText:"The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched"}],[]);return o.useEffect(()=>{var m;if(!e.touched.slug){const c=(m=e.data.name)==null?void 0:m.trim().toLowerCase().replace(/ {1,}/g,"_").replace(/[^a-z_]/g,"");n({name:"slug",value:c})}},[n,e.data.name,e.touched]),r.jsxs(r.Fragment,{children:[p&&r.jsx("pre",{children:JSON.stringify(e,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(h,{...i,buttons:g(d),title:"Validators story",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
