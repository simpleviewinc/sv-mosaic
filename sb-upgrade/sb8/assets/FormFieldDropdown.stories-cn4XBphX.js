import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as O}from"./index-CDs2tPxN.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{u as F,F as v}from"./formUtils-CJK8oCl3.js";import{g as y}from"./getOptions-0PA7i_39.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const Re={title:"FormFields/FormFieldDropdown"},e=[{label:"The Shawshank Redemption",value:"1994"},{label:"The Godfather",value:"1972"},{label:"The Godfather: Part II",value:"1974"},{label:"The Dark Knight",value:"2008"},{label:"12 Angry Men",value:"1957"},{label:"Schindler's List",value:"1993"},{label:"Pulp Fiction",value:"1994"},{label:"The Lord of the Rings: The Return of the King",value:"2003"},{label:"The Good, the Bad and the Ugly",value:"1966"},{label:"Fight Club",value:"1999"},{label:"The Lord of the Rings: The Fellowship of the Ring",value:"2001"},{label:"Star Wars: Episode V - The Empire Strikes Back",value:"1980"},{label:"Forrest Gump",value:"1994"},{label:"Inception",value:"2010"},{label:"The Lord of the Rings: The Two Towers",value:"2002"},{label:"One Flew Over the Cuckoo's Nest",value:"1975"},{label:"Goodfellas",value:"1990"},{label:"The Matrix",value:"1999"},{label:"Seven Samurai",value:"1954"},{label:"Star Wars: Episode IV - A New Hope",value:"1977"},{label:"City of God",value:"2002"},{label:"Se7en",value:"1995"}],o=({label:n,required:i,skeleton:l,disabled:a,instructionText:p,helperText:d,optionsOrigin:s,placeholder:m,size:u})=>{const c=F(),{state:w,handleSubmit:z}=c,k=O.useMemo(()=>[{name:"dropdown",label:n,type:"dropdown",required:i,disabled:a,size:u,inputSettings:{options:s==="Local"?e:void 0,getOptions:s==="DB"?y:void 0,placeholder:m},helperText:d,instructionText:p}],[i,a,u,m,e,d,p,n,s]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(w,null,"  ")}),t.jsx(v,{...c,buttons:f(z),title:"Dropdown Field",fields:k,skeleton:l})]})};o.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};o.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const I=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:y,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const n=F(),{state:i,handleSubmit:l}=n;return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(i,null,"  ")}),t.jsx(v,{...n,buttons:f(l),title:"Form title",description:"Form description",fields:I})]})};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  optionsOrigin,
  placeholder,
  size
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => ([{
    name: "dropdown",
    label,
    type: "dropdown",
    required,
    disabled,
    size,
    inputSettings: {
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined,
      placeholder
    },
    helperText,
    instructionText
  }] as FieldDef[]), [required, disabled, size, placeholder, options, helperText, instructionText, label, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Dropdown Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,S,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const He=["Playground","KitchenSink"];export{r as KitchenSink,o as Playground,He as __namedExportsOrder,Re as default};
