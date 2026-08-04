import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CDlOlYQx.js";import{u as M,t as E,F as $,D as R}from"./index-CEvXTbTM.js";import{r as O}from"./renderButtons-DP0bGf4C.js";import{c as _}from"./commonFieldControl-LQDYMh-C.js";import{p as L}from"./parseDateControl-BGVYa05p.js";const P={title:"FormFields/FormFieldDateField"},a=({label:s,hideLabel:r,required:o,disabled:t,instructionText:n,forceInstructionTooltip:m,prepop:l,prepopData:i,helperText:h,showTime:b,minDateStr:u,defaultTime:p})=>{const D=M({data:l?{...i,date:L(i==null?void 0:i.date)}:{}}),{state:C,handleSubmit:I}=D,x=c.useMemo(()=>{if(!u||!E(u,R))return;const[T,f,v]=u.split("/");return new Date(v,T-1,f)},[u]),S=c.useMemo(()=>{if(!/\d{4}/.test(p))return;const[,T,f]=p.match(/(\d{2})(\d{2})/);return`${T}:${f}`},[p]),k=c.useMemo(()=>[{name:"date",type:"date",label:s,hideLabel:r,required:o,disabled:t,helperText:h,instructionText:n,forceInstructionTooltip:m,inputSettings:{showTime:b,minDate:x,defaultTime:S,fixedTime:[23,59,59,999]}}],[s,r,o,t,h,n,m,b,x,S]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(C,null,"  ")}),e.jsx($,{...D,buttons:O(I),title:"Date Field",fields:k})]})};a.args={..._.args({prepopData:{date:"2024-12-25-11-30"}}),showTime:!1,minDateStr:"",defaultTime:""};a.argTypes={..._.argTypes,showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"},defaultTime:{name:"Default Time"}};const d=()=>{const s=M(),{state:r,handleSubmit:o}=s,t="Helper text",n="Instruction text",m=c.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:t,instructionText:n,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:t,instructionText:n,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:t,instructionText:n,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:t,instructionText:n,inputSettings:{showTime:!0}},{name:"disabledDateTime",type:"date",label:"Disabled Date and Time",required:!0,disabled:!0,helperText:t,instructionText:n,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx($,{...s,buttons:O(o),title:"Date Field Calendar",description:"This is a description example",fields:m}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(r.data).map((l,i)=>e.jsxs("div",{children:[l,":"," ",r.data[l]&&r.data[l].toString()]},i))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(r,null,"  ")})]})};var g,y,F;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(F=(y=a.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var w,j,q;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const helperText = "Helper text";
  const instructionText = "Instruction text";
  const fields = useMemo<FieldDef[]>(() => [{
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
  }, {
    name: "disabledDateTime",
    type: "date",
    label: "Disabled Date and Time",
    required: true,
    disabled: true,
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
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const A=["Playground","KitchenSink"],V=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:d,Playground:a,__namedExportsOrder:A,default:P},Symbol.toStringTag,{value:"Module"}));export{V as s};
