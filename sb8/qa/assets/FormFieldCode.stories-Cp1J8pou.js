import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as j}from"./index-ePW8zFKp.js";import{u as D,F as M}from"./index-Cy5s5VEB.js";import{r as E}from"./renderButtons-DP0bGf4C.js";import{c as F}from"./commonFieldControl-LQDYMh-C.js";const P={title:"FormFields/FormFieldCode"},e=({label:o,hideLabel:r,required:a,prepop:T,prepopData:S,disabled:s,instructionText:i,forceInstructionTooltip:l,helperText:m,theme:n,customTheme:c,language:g,autogrow:u,minHeight:p,maxHeight:d,height:h})=>{const f=D({data:T?S:{}}),{handleSubmit:H,state:_}=f,w=j.useMemo(()=>[{name:"code",label:o,hideLabel:r,type:"code",required:a,disabled:s,inputSettings:{theme:n==="custom"?c:n,language:g,autogrow:u,minHeight:p,maxHeight:d,height:h,onMount:(O,C)=>{C.languages.typescript.typescriptDefaults.addExtraLib(`
                                interface ScriptArgs {
                                    foo: string
                                }
                            `)}},helperText:m,instructionText:i,forceInstructionTooltip:l}],[o,r,a,s,n,c,g,u,p,d,h,m,i,l]);return t.jsxs(t.Fragment,{children:[t.jsx(M,{buttons:E(H),title:"Code Field",fields:w,...f}),t.jsx("pre",{children:JSON.stringify(_,null,"  ")})]})};e.args={...F.args({prepopData:{code:`interface ConcatParams {
    left: string;
    right: string;
}

function concat({ left, right }: ConcatParams): string {
    return \`\${left}:\${right}\`;
}`}}),theme:"light",customTheme:{base:"vs",inherit:!0,rules:[],colors:{"editor.background":"#fafafa"}},language:"typescript",autogrow:!1,minHeight:200,maxHeight:600,height:300};e.argTypes={...F.argTypes,theme:{name:"Theme",options:["light","dark","custom"],control:{type:"select"}},customTheme:{name:"Custom Theme",if:{arg:"theme",eq:"custom"}},language:{name:"Language",options:["typescript","html","css"],control:{type:"select"}},autogrow:{name:"Autogrow"},minHeight:{name:"Min Height",if:{arg:"autogrow"}},maxHeight:{name:"Max Height",if:{arg:"autogrow"}},height:{name:"Height",if:{arg:"autogrow",eq:!1}}};var y,x,b;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  theme,
  customTheme,
  language,
  autogrow,
  minHeight,
  maxHeight,
  height
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    handleSubmit,
    state
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "code",
    label,
    hideLabel,
    type: "code",
    required,
    disabled,
    inputSettings: {
      theme: theme === "custom" ? customTheme : theme,
      language,
      autogrow,
      minHeight,
      maxHeight,
      height,
      onMount: (_, monico) => {
        monico.languages.typescript.typescriptDefaults.addExtraLib(\`
                                interface ScriptArgs {
                                    foo: string
                                }
                            \`);
      }
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, theme, customTheme, language, autogrow, minHeight, maxHeight, height, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <Form buttons={renderButtons(handleSubmit)} title="Code Field" fields={fields} {...controller} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const L=["Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:L,default:P},Symbol.toStringTag,{value:"Module"}));export{I as s};
