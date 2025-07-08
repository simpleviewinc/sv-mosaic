import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as c}from"./index-D0AnReJb.js";import{u as M,t as E,F as $}from"./index-DxY2ZH9t.js";import{r as O}from"./renderButtons-BmHfsf_z.js";import{c as _}from"./commonFieldControl-LQDYMh-C.js";import{p as R}from"./parseDateControl-DMwMNq7a.js";import{D as L}from"./formats-CMvQHWsT.js";const P={title:"FormFields/FormFieldDateField"},a=({label:s,hideLabel:t,required:d,disabled:n,instructionText:r,forceInstructionTooltip:m,prepop:l,prepopData:i,helperText:h,showTime:b,minDateStr:u,defaultTime:p})=>{const x=M({data:l?{...i,date:R(i==null?void 0:i.date)}:{}}),{state:C,handleSubmit:I}=x,S=c.useMemo(()=>{if(!u||!E(u,L))return;const[f,T,v]=u.split("/");return new Date(v,f-1,T)},[u]),D=c.useMemo(()=>{if(!/\d{4}/.test(p))return;const[,f,T]=p.match(/(\d{2})(\d{2})/);return`${f}:${T}`},[p]),k=c.useMemo(()=>[{name:"date",type:"date",label:s,hideLabel:t,required:d,disabled:n,helperText:h,instructionText:r,forceInstructionTooltip:m,inputSettings:{showTime:b,minDate:S,defaultTime:D,fixedTime:[23,59,59,999]}}],[s,t,d,n,h,r,m,b,S,D]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(C,null,"  ")}),e.jsx($,{...x,buttons:O(I),title:"Date Field",fields:k})]})};a.args={..._.args({prepopData:{date:"2024-12-25-11-30"}}),showTime:!1,minDateStr:"",defaultTime:""};a.argTypes={..._.argTypes,showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"},defaultTime:{name:"Default Time"}};const o=()=>{const s=M(),{state:t,handleSubmit:d}=s,n="Helper text",r="Instruction text",m=c.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx($,{...s,buttons:O(d),title:"Date Field Calendar",description:"This is a description example",fields:m}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((l,i)=>e.jsxs("div",{children:[l,":"," ",t.data[l]&&t.data[l].toString()]},i))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var g,y,F;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  disabled,
  instructionText,
  forceInstructionTooltip,
  prepop,
  prepopData,
  helperText,
  showTime,
  minDateStr,
  defaultTime: defaultTimeStr
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? {
      ...prepopData,
      date: parseDateControl(prepopData?.date)
    } : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
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
    hideLabel,
    required,
    disabled,
    helperText,
    instructionText,
    forceInstructionTooltip,
    inputSettings: {
      showTime,
      minDate,
      defaultTime,
      fixedTime: [23, 59, 59, 999]
    }
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip, showTime, minDate, defaultTime]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Date Field" fields={fields} />
        </>;
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var w,j,q;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`(): ReactElement => {
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Date Field Calendar" description="This is a description example" fields={fields} />
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
}`,...(q=(j=o.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const A=["Playground","KitchenSink"],z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:a,__namedExportsOrder:A,default:P},Symbol.toStringTag,{value:"Module"}));export{z as s};
