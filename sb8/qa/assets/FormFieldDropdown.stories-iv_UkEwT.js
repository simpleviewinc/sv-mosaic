import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as k}from"./index-BP8_t0zE.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import{u as F,F as v}from"./formUtils-DSkNbvno.js";import"./Button-Dv6p7qil.js";import{g as y}from"./options-BIHZJM4G.js";const I={title:"FormFields/FormFieldDropdown"},e=[{label:"The Shawshank Redemption",value:"tt0111161"},{label:"The Godfather",value:"tt0068646"},{label:"The Godfather: Part II",value:"tt0071562"},{label:"The Dark Knight",value:"tt0468569"},{label:"12 Angry Men",value:"tt0050083"},{label:"Schindler's List",value:"tt0108052"},{label:"Pulp Fiction",value:"tt0110912"},{label:"The Lord of the Rings: The Return of the King",value:"tt0167260"},{label:"The Good, the Bad and the Ugly",value:"tt0060196"},{label:"Fight Club",value:"tt0137523"},{label:"The Lord of the Rings: The Fellowship of the Ring",value:"tt0120737"},{label:"Star Wars: Episode V - The Empire Strikes Back",value:"tt0080684"},{label:"Forrest Gump",value:"tt0109830"},{label:"Inception",value:"tt1375666"},{label:"The Lord of the Rings: The Two Towers",value:"tt0167261"},{label:"One Flew Over the Cuckoo's Nest",value:"tt0073486"},{label:"Goodfellas",value:"tt0099685"},{label:"The Matrix",value:"tt0133093"},{label:"Seven Samurai",value:"tt0047478"},{label:"Star Wars: Episode IV - A New Hope",value:"tt0076759"},{label:"City of God",value:"tt0317248"},{label:"Aftermath",value:"tt1564368"},{label:"Aftermath",value:"tt4581576"}],n=({label:l,required:r,skeleton:i,disabled:a,instructionText:d,helperText:p,optionsOrigin:s,placeholder:u,size:c})=>{const m=F(),{state:w,handleSubmit:z}=m,O=k.useMemo(()=>[{name:"dropdown",label:l,type:"dropdown",required:r,disabled:a,size:c,inputSettings:{options:s==="Local"?e:void 0,getOptions:s==="DB"?y:void 0,placeholder:u},helperText:p,instructionText:d}],[r,a,c,u,e,p,d,l,s]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(w,null,"  ")}),t.jsx(v,{...m,buttons:f(z),title:"Dropdown Field",fields:O,skeleton:i})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local",size:"sm",placeholder:"Choose a movie.."};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const D=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:y,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:e,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:e},helperText:"Helper text",instructionText:"Instruction text"}],o=()=>{const l=F(),{state:r,handleSubmit:i}=l;return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(r,null,"  ")}),t.jsx(v,{...l,buttons:f(i),title:"Form title",description:"Form description",fields:D})]})};var h,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,S,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const R=["Playground","KitchenSink"],_=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:n,__namedExportsOrder:R,default:I},Symbol.toStringTag,{value:"Module"}));export{_ as s};
