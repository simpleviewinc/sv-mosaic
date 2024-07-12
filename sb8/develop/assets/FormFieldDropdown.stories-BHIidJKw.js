import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as k}from"./index-BP8_t0zE.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{u as F,F as v}from"./formUtils-DjW1hEz-.js";import{g as y}from"./getOptions-Co9K7i91.js";const I={title:"FormFields/FormFieldDropdown"},e=[{label:"The Shawshank Redemption",value:"1994"},{label:"The Godfather",value:"1972"},{label:"The Godfather: Part II",value:"1974"},{label:"The Dark Knight",value:"2008"},{label:"12 Angry Men",value:"1957"},{label:"Schindler's List",value:"1993"},{label:"Pulp Fiction",value:"1994"},{label:"The Lord of the Rings: The Return of the King",value:"2003"},{label:"The Good, the Bad and the Ugly",value:"1966"},{label:"Fight Club",value:"1999"},{label:"The Lord of the Rings: The Fellowship of the Ring",value:"2001"},{label:"Star Wars: Episode V - The Empire Strikes Back",value:"1980"},{label:"Forrest Gump",value:"1994"},{label:"Inception",value:"2010"},{label:"The Lord of the Rings: The Two Towers",value:"2002"},{label:"One Flew Over the Cuckoo's Nest",value:"1975"},{label:"Goodfellas",value:"1990"},{label:"The Matrix",value:"1999"},{label:"Seven Samurai",value:"1954"},{label:"Star Wars: Episode IV - A New Hope",value:"1977"},{label:"City of God",value:"2002"},{label:"Se7en",value:"1995"}],n=({label:l,required:r,skeleton:i,disabled:a,instructionText:d,helperText:p,optionsOrigin:s,placeholder:u,size:c})=>{const m=F(),{state:w,handleSubmit:z}=m,O=k.useMemo(()=>[{name:"dropdown",label:l,type:"dropdown",required:r,disabled:a,size:c,inputSettings:{options:s==="Local"?e:void 0,getOptions:s==="DB"?y:void 0,placeholder:u},helperText:p,instructionText:d}],[r,a,c,u,e,p,d,l,s]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(w,null,"  ")}),t.jsx(v,{...m,buttons:f(z),title:"Dropdown Field",fields:O,skeleton:i})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const D=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:y,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"}],o=()=>{const l=F(),{state:r,handleSubmit:i}=l;return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(r,null,"  ")}),t.jsx(v,{...l,buttons:f(i),title:"Form title",description:"Form description",fields:D})]})};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,S,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const R=["Playground","KitchenSink"],P=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:n,__namedExportsOrder:R,default:I},Symbol.toStringTag,{value:"Module"}));export{P as s};
