import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as l}from"./index-Btj5Fd67.js";import{u as q,t as I,F as j}from"./Form-D2YTXS0P.js";import{r as M}from"./renderButtons-BmHfsf_z.js";import{D as P}from"./formats-sBod7wm8.js";const R={title:"FormFields/FormFieldDateField"},E={date:new Date(2024,12,25,11,30)},a=({label:i,required:t,skeleton:p,disabled:n,instructionText:r,prepopulate:d,helperText:s,showTime:u,minDateStr:m,defaultTime:c})=>{const h=q(),{state:k,handleSubmit:$}=h,O=l.useMemo(()=>d?async()=>E:void 0,[d]),b=l.useMemo(()=>{if(!m||!I(m,P))return;const[f,T,V]=m.split("/");return new Date(V,f-1,T)},[m]),x=l.useMemo(()=>{if(!/\d{4}/.test(c))return;const[,f,T]=c.match(/(\d{2})(\d{2})/);return`${f}:${T}`},[c]),_=l.useMemo(()=>[{name:"date",type:"date",label:i,required:t,disabled:n,helperText:s,instructionText:r,inputSettings:{showTime:u,minDate:b,defaultTime:x}}],[i,t,n,s,r,u,b,x]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(k,null,"  ")}),e.jsx(j,{...h,buttons:M($),title:"Date Field",fields:_,skeleton:p,getFormValues:O})]})};a.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",prepopulate:!1,helperText:"Helper text",showTime:!1,minDateStr:"",defaultTime:""};a.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},prepopulate:{name:"Prepopulate"},helperText:{name:"Helper Text"},showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"},defaultTime:{name:"Default Time"}};const v=async()=>({dateTimePrefilled:new Date("2023-07-31T14:00:00.000Z")}),o=()=>{const i=q(),{state:t,handleSubmit:p}=i,n="Helper text",r="Instruction text",d=l.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(j,{...i,buttons:M(p),title:"Date Field Calendar",description:"This is a description example",fields:d,getFormValues:v}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((s,u)=>e.jsxs("div",{children:[s,":"," ",t.data[s]&&t.data[s].toString()]},u))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var g,D,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  prepopulate,
  helperText,
  showTime,
  minDateStr,
  defaultTime: defaultTimeStr
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const getFormValues = useMemo(() => prepopulate ? async () => prepopulateData : undefined, [prepopulate]);
  const minDate = useMemo(() => {
    if (!minDateStr || !textIsValidDate(minDateStr, DATE_FORMAT_FULL)) {
      return;
    }
    const [month, day, year] = minDateStr.split("/");
    return new Date(year, month - 1, day);
  }, [minDateStr]);
  const defaultTime = useMemo<\`\${number}\${number}:\${number}\${number}\`>(() => {
    if (!/\\d{4}/.test(defaultTimeStr)) {
      return undefined;
    }
    const [, hr, min] = defaultTimeStr.match(/(\\d{2})(\\d{2})/) as [string, \`\${number}\${number}\`, \`\${number}\${number}\`];
    return \`\${hr}:\${min}\`;
  }, [defaultTimeStr]);
  const fields = useMemo((): FieldDef[] => [{
    name: "date",
    type: "date",
    label,
    required,
    disabled,
    helperText,
    instructionText,
    inputSettings: {
      showTime,
      minDate,
      defaultTime
    }
  }], [label, required, disabled, helperText, instructionText, showTime, minDate, defaultTime]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Date Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(S=(D=a.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var y,F,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const helperText = "Helper text";
  const instructionText = "Instruction text";
  const fields: FieldDef[] = useMemo(() => [{
    name: "singleDate",
    type: "date",
    label: "Single Date Calendar",
    required: false,
    disabled: false,
    helperText,
    instructionText,
    inputSettings: {
      showTime: false
    }
  }, {
    name: "dateTime",
    type: "date",
    label: "Date Time Input",
    required: false,
    disabled: false,
    helperText,
    instructionText,
    inputSettings: {
      showTime: true
    }
  }, {
    name: "dateTimePrefilled",
    type: "date",
    label: "Date Time with preset values",
    required: false,
    disabled: false,
    helperText,
    instructionText,
    inputSettings: {
      showTime: true
    }
  }, {
    name: "requiredDateTime",
    type: "date",
    label: "Required Single Date Calendar",
    required: true,
    disabled: false,
    helperText,
    instructionText,
    inputSettings: {
      showTime: true
    }
  }], []);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Date Field Calendar" description="This is a description example" fields={fields} getFormValues={getFormValues} />
            <h3>Date.toString()</h3>
            <pre>
                {Object.keys(state.data).map((key, index) => <div key={index}>
                        {key}
                        :
                        {" "}
                        {state.data[key] && state.data[key].toString()}
                    </div>)}
            </pre>
            <h3>State</h3>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(w=(F=o.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const C=["Playground","KitchenSink"],B=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:a,__namedExportsOrder:C,default:R},Symbol.toStringTag,{value:"Module"}));export{B as s};
