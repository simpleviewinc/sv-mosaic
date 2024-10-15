import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as p}from"./index-BP8_t0zE.js";import{u as F,t as _,F as y}from"./formUtils-DxPmN41M.js";import"./Button-Dv6p7qil.js";import{r as w}from"./renderButtons-BmHfsf_z.js";import{D as M}from"./formats-CDjt32hU.js";const N={title:"FormFields/FormFieldDateField"},V={date:new Date(2024,12,25,11,30)},r=({label:i,required:t,skeleton:m,disabled:n,instructionText:a,prepopulate:d,helperText:s,showTime:u,minDateStr:l,defaultTime:c})=>{const T=F(),{state:q,handleSubmit:j}=T,k=p.useMemo(()=>d?async()=>V:void 0,[d]),f=l&&_(l,M)?new Date(Number(l.split("/")[2]),Number(l.split("/")[1])-1,Number(l.split("/")[0])):void 0,O=p.useMemo(()=>[{name:"date",type:"date",label:i,required:t,disabled:n,helperText:s,instructionText:a,inputSettings:{showTime:u,minDate:f,defaultTime:c}}],[i,t,n,s,a,u,f,c]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(q,null,"  ")}),e.jsx(y,{...T,buttons:w(j),title:"Date Field",fields:O,skeleton:m,getFormValues:k})]})};r.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",prepopulate:!1,helperText:"Helper text",showTime:!1,minDateStr:"",defaultTime:""};r.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},prepopulate:{name:"Prepopulate"},helperText:{name:"Helper Text"},showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"},defaultTime:{name:"Default Time"}};const v=async()=>({dateTimePrefilled:new Date("2023-07-31T14:00:00.000Z")}),o=()=>{const i=F(),{state:t,handleSubmit:m}=i,n="Helper text",a="Instruction text",d=p.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{...i,buttons:w(m),title:"Date Field Calendar",description:"This is a description example",fields:d,getFormValues:v}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((s,u)=>e.jsxs("div",{children:[s,":"," ",t.data[s]&&t.data[s].toString()]},u))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var h,x,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  prepopulate,
  helperText,
  showTime,
  minDateStr,
  defaultTime
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const getFormValues = useMemo(() => prepopulate ? async () => prepopulateData : undefined, [prepopulate]);
  const minDate = minDateStr && textIsValidDate(minDateStr, DATE_FORMAT_FULL) ? new Date(Number(minDateStr.split("/")[2]), Number(minDateStr.split("/")[1]) - 1, Number(minDateStr.split("/")[0])) : undefined;
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
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,D,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const I=["Playground","KitchenSink"],H=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:r,__namedExportsOrder:I,default:N},Symbol.toStringTag,{value:"Module"}));export{H as s};
