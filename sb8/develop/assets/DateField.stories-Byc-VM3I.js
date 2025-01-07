import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{u as y,t as N,F as w}from"./Form-CecvGgxl.js";import{r as q}from"./renderButtons-BmHfsf_z.js";import{D as V}from"./formats-sBod7wm8.js";const v={title:"FormFields/FormFieldDateField"},I={date:new Date(2024,12,25,11,30)},a=({label:i,required:t,skeleton:p,disabled:n,instructionText:r,prepopulate:d,helperText:s,showTime:u,minDateStr:l,defaultTime:c})=>{const T=y(),{state:j,handleSubmit:k}=T,M=m.useMemo(()=>d?async()=>I:void 0,[d]),f=l&&N(l,V)?new Date(Number(l.split("/")[2]),Number(l.split("/")[0])-1,Number(l.split("/")[1])):void 0,b=m.useMemo(()=>{if(!/\d{4}/.test(c))return;const[,O,_]=c.match(/(\d{2})(\d{2})/);return`${O}:${_}`},[c]),$=m.useMemo(()=>[{name:"date",type:"date",label:i,required:t,disabled:n,helperText:s,instructionText:r,inputSettings:{showTime:u,minDate:f,defaultTime:b}}],[i,t,n,s,r,u,f,b]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(j,null,"  ")}),e.jsx(w,{...T,buttons:q(k),title:"Date Field",fields:$,skeleton:p,getFormValues:M})]})};a.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",prepopulate:!1,helperText:"Helper text",showTime:!1,minDateStr:"",defaultTime:""};a.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},prepopulate:{name:"Prepopulate"},helperText:{name:"Helper Text"},showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"},defaultTime:{name:"Default Time"}};const P=async()=>({dateTimePrefilled:new Date("2023-07-31T14:00:00.000Z")}),o=()=>{const i=y(),{state:t,handleSubmit:p}=i,n="Helper text",r="Instruction text",d=m.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(w,{...i,buttons:q(p),title:"Date Field Calendar",description:"This is a description example",fields:d,getFormValues:P}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((s,u)=>e.jsxs("div",{children:[s,":"," ",t.data[s]&&t.data[s].toString()]},u))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var h,x,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
  const minDate = minDateStr && textIsValidDate(minDateStr, DATE_FORMAT_FULL) ? new Date(Number(minDateStr.split("/")[2]), Number(minDateStr.split("/")[0]) - 1, Number(minDateStr.split("/")[1])) : undefined;
  const defaultTime = useMemo<\`\${number}\${number}:\${number}\${number}\`>(() => {
    if (!/\\d{4}/.test(defaultTimeStr)) {
      return undefined;
    }
    const [, hr, min] = (defaultTimeStr.match(/(\\d{2})(\\d{2})/) as [string, \`\${number}\${number}\`, \`\${number}\${number}\`]);
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
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var D,S,F;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const R=["Playground","KitchenSink"],J=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:a,__namedExportsOrder:R,default:v},Symbol.toStringTag,{value:"Module"}));export{J as s};
