import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as O}from"./index-BP8_t0zE.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{u as F,F as v}from"./formUtils-BR5ocB9f.js";import{g as w}from"./getOptions-nrnLasDJ.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const Ee={title:"FormFields/FormFieldDropdown"},e=[{label:"The Shawshank Redemption",value:"1994"},{label:"The Godfather",value:"1972"},{label:"The Godfather: Part II",value:"1974"},{label:"The Dark Knight",value:"2008"},{label:"12 Angry Men",value:"1957"},{label:"Schindler's List",value:"1993"},{label:"Pulp Fiction",value:"1994"},{label:"The Lord of the Rings: The Return of the King",value:"2003"},{label:"The Good, the Bad and the Ugly",value:"1966"},{label:"Fight Club",value:"1999"},{label:"The Lord of the Rings: The Fellowship of the Ring",value:"2001"},{label:"Star Wars: Episode V - The Empire Strikes Back",value:"1980"},{label:"Forrest Gump",value:"1994"},{label:"Inception",value:"2010"},{label:"The Lord of the Rings: The Two Towers",value:"2002"},{label:"One Flew Over the Cuckoo's Nest",value:"1975"},{label:"Goodfellas",value:"1990"},{label:"The Matrix",value:"1999"},{label:"Seven Samurai",value:"1954"},{label:"Star Wars: Episode IV - A New Hope",value:"1977"},{label:"City of God",value:"2002"},{label:"Se7en",value:"1995"}],o=({label:r,required:n,skeleton:l,disabled:a,instructionText:p,helperText:m,optionsOrigin:s,placeholder:d,size:u})=>{const c=F(),{state:y,handleSubmit:z}=c,k=O.useMemo(()=>[{name:"dropdown",label:r,type:"dropdown",required:n,disabled:a,size:u,inputSettings:{options:s==="Local"?e:void 0,getOptions:s==="DB"?w:void 0,placeholder:d},helperText:m,instructionText:p}],[n,a,u,d,e,m,p,r,s]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(y,null,"  ")}),t.jsx(v,{...c,buttons:f(z),title:"Dropdown Field",fields:k,skeleton:l})]})};o.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};o.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const I=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:w,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"}],i=()=>{const r=F(),{state:n,handleSubmit:l}=r;return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(n,null,"  ")}),t.jsx(v,{...r,buttons:f(l),title:"Form title",description:"Form description",fields:I})]})};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,S,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const Le=["Playground","KitchenSink"];export{i as KitchenSink,o as Playground,Le as __namedExportsOrder,Ee as default};
