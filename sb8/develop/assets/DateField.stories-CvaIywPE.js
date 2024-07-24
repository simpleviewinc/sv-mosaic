import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as S}from"./index-BP8_t0zE.js";import{u as D,t as j,F as g}from"./formUtils-DQDQc0nV.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import{D as k}from"./formats-CDjt32hU.js";const O={title:"FormFields/FormFieldDateField"},s=({label:l,required:t,skeleton:m,disabled:n,instructionText:r,helperText:d,showTime:a,minDateStr:i})=>{const u=D(),{state:y,handleSubmit:w}=u,p=i&&j(i,k)?new Date(Number(i.split("/")[2]),Number(i.split("/")[1])-1,Number(i.split("/")[0])):void 0,q=S.useMemo(()=>[{name:"date",type:"date",label:l,required:t,disabled:n,helperText:d,instructionText:r,inputSettings:{showTime:a,minDate:p}}],[l,t,n,d,r,a,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx(g,{...u,buttons:F(w),title:"Date Field",fields:q,skeleton:m})]})};s.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",showTime:!1,minDateStr:""};s.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"}};const _=async()=>({dateTimePrefilled:new Date("2023-07-31T14:00:00.000Z")}),o=()=>{const l=D(),{state:t,handleSubmit:m}=l,n="Helper text",r="Instruction text",d=S.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{...l,buttons:F(m),title:"Date Field Calendar",description:"This is a description example",fields:d,getFormValues:_}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((a,i)=>e.jsxs("div",{children:[a,":"," ",t.data[a]&&t.data[a].toString()]},i))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var c,T,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  showTime,
  minDateStr
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
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
      minDate
    }
  }], [label, required, disabled, helperText, instructionText, showTime, minDate]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Date Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,b,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const N=["Playground","KitchenSink"],P=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:s,__namedExportsOrder:N,default:O},Symbol.toStringTag,{value:"Module"}));export{P as s};
