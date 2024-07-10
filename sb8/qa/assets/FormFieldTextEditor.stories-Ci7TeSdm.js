import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as C}from"./index-BP8_t0zE.js";import{u as T,F as S}from"./formUtils-BDmDTW9-.js";import{r as E}from"./storyUtils-ByV2Bsyv.js";const L={title:"FormFields/FormFieldTextEditor"},t=({label:r,disabled:i,required:l,skeleton:y,instructionText:s,helperText:a,toggleLabel:F,spellcheck:o,direction:d,language:c,maxCharacters:u})=>{const m=T(),{state:k,handleSubmit:q}=m,j=C.useMemo(()=>[{name:"textEditor",label:r,type:"textEditor",required:l,inputSettings:{spellcheck:o,direction:d,language:c,maxCharacters:u},disabled:i,helperText:a,instructionText:s}],[d,l,i,F,r,a,s,u,o,c]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(k,null,"  ")}),e.jsx(S,{...m,title:"Text Editor Field",fields:j,buttons:E(q),skeleton:y})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",toggleLabel:"Toggle label",spellcheck:!1,direction:"ltr",language:"en",maxCharacters:100};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},toggleLabel:{name:"Toggle Label"},spellcheck:{name:"Direction",control:{type:"select"},options:["ltr","rtl"]},direction:{name:"Direction"},language:{name:"Language"},maxCharacters:{name:"Maximum Characters"}};const O=[{name:"spellCheck",label:"Text editor with spellcheck active",type:"textEditor",required:!1,inputSettings:{spellcheck:!0}},{name:"ltr",label:"Text editor with left to right direction",type:"textEditor",required:!1,inputSettings:{direction:"ltr"}},{name:"rtl",label:"Text editor with right to left direction",type:"textEditor",required:!1,inputSettings:{direction:"rtl"}},{name:"german",label:"Text editor in german (de) language",type:"textEditor",required:!1,inputSettings:{language:"de"}},{name:"maxChars",label:"Text editor with max character limit",type:"textEditor",required:!1,inputSettings:{maxCharacters:20}},{name:"disabled",label:"Disabled text editor",type:"textEditor",required:!1,disabled:!0}],n=()=>{const r=T(),{state:i,handleSubmit:l}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(S,{...r,title:"Text Editor Kitchen Sink",description:"This is a description example",fields:O,buttons:E(l)})]})};var p,x,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  instructionText,
  helperText,
  toggleLabel,
  spellcheck,
  direction,
  language,
  maxCharacters
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "textEditor",
    label,
    type: "textEditor",
    required,
    inputSettings: {
      spellcheck,
      direction,
      language,
      maxCharacters
    },
    disabled,
    helperText,
    instructionText
  }], [direction, required, disabled, toggleLabel, label, helperText, instructionText, maxCharacters, spellcheck, language]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Field" fields={fields} buttons={renderButtons(handleSubmit)} skeleton={skeleton} />
        </>;
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,b,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Kitchen Sink" description="This is a description example" fields={fields} buttons={renderButtons(handleSubmit)} />
        </>;
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const _=["Playground","KitchenSink"],M=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:n,Playground:t,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{M as s};
