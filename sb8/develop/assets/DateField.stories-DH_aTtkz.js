import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as c}from"./index-D0AnReJb.js";import{u as j,t as v,F as q}from"./Form-CgwovX7A.js";import{r as M}from"./renderButtons-BmHfsf_z.js";import{c as $}from"./commonFieldControl-LQDYMh-C.js";import{p as E}from"./parseDateControl-DsOdrk5q.js";import{D as R}from"./formats-sBod7wm8.js";const I={title:"FormFields/FormFieldDateField"},r=({label:l,required:t,disabled:o,instructionText:n,prepop:a,prepopData:i,helperText:s,showTime:m,minDateStr:u,defaultTime:p})=>{const h=j({data:a?{...i,date:E(i==null?void 0:i.date)}:{}}),{state:O,handleSubmit:_}=h,b=c.useMemo(()=>{if(!u||!v(u,R))return;const[f,T,k]=u.split("/");return new Date(k,f-1,T)},[u]),x=c.useMemo(()=>{if(!/\d{4}/.test(p))return;const[,f,T]=p.match(/(\d{2})(\d{2})/);return`${f}:${T}`},[p]),C=c.useMemo(()=>[{name:"date",type:"date",label:l,required:t,disabled:o,helperText:s,instructionText:n,inputSettings:{showTime:m,minDate:b,defaultTime:x,fixedTime:[23,59,59,999]}}],[l,t,o,s,n,m,b,x]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(q,{...h,buttons:M(_),title:"Date Field",fields:C})]})};r.args={...$.args({prepopData:{date:"2024-12-25-11-30"}}),showTime:!1,minDateStr:"",defaultTime:""};r.argTypes={...$.argTypes,showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"},defaultTime:{name:"Default Time"}};const d=()=>{const l=j(),{state:t,handleSubmit:o}=l,n="Helper text",a="Instruction text",i=c.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:a,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(q,{...l,buttons:M(o),title:"Date Field Calendar",description:"This is a description example",fields:i}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((s,m)=>e.jsxs("div",{children:[s,":"," ",t.data[s]&&t.data[s].toString()]},m))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var S,D,g;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
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
    required,
    disabled,
    helperText,
    instructionText,
    inputSettings: {
      showTime,
      minDate,
      defaultTime,
      fixedTime: [23, 59, 59, 999]
    }
  }], [label, required, disabled, helperText, instructionText, showTime, minDate, defaultTime]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Date Field" fields={fields} />
        </>;
}`,...(g=(D=r.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var y,F,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const P=["Playground","KitchenSink"],U=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:d,Playground:r,__namedExportsOrder:P,default:I},Symbol.toStringTag,{value:"Module"}));export{U as s};
