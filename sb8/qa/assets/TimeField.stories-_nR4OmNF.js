import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{u as g,F as T}from"./formUtils-BDVJudHN.js";import"./Button-Dth3WPw1.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as y}from"./storyUtils-BoiXCagy.js";const h={title:"FormFields/FormFieldTimeField"},e=({label:n,required:r,skeleton:c,disabled:s,instructionText:o,helperText:l,prepopulate:a})=>{const i=g(),{state:b,handleSubmit:x}=i,f=m.useCallback(async()=>({time:a||void 0}),[a]),F=m.useMemo(()=>[{name:"time",type:"time",label:n,required:r,disabled:s,helperText:l,instructionText:o}],[n,r,s,l,o]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(b,null,"  ")}),t.jsx(T,{...i,buttons:y(x),title:"Time Field",fields:F,getFormValues:f,skeleton:c})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",prepopulate:""};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},prepopulate:{name:"Prepopulate"}};var u,d,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  prepopulate
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const getFormValues = useCallback(async () => {
    return {
      time: prepopulate || undefined
    };
  }, [prepopulate]);
  const fields = useMemo((): FieldDef[] => [{
    name: "time",
    type: "time",
    label,
    required,
    disabled,
    helperText,
    instructionText
  }], [label, required, disabled, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Time Field" fields={fields} getFormValues={getFormValues} skeleton={skeleton} />
        </>;
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{E as s};
