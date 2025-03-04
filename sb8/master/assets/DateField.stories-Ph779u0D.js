import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as l}from"./index-Btj5Fd67.js";import{u as j,t as E,F as q}from"./index-BtJjjTTO.js";import{r as M}from"./renderButtons-BmHfsf_z.js";import{c as $}from"./commonFieldControl-DXwRxrKb.js";import{D as P}from"./formats-CMvQHWsT.js";const R={title:"FormFields/FormFieldDateField"},v={date:new Date(2024,12,25,11,30)},a=({label:i,required:t,skeleton:c,disabled:n,instructionText:r,prepop:d,helperText:s,showTime:m,minDateStr:u,defaultTime:p})=>{const h=j(),{state:O,handleSubmit:_}=h,k=l.useMemo(()=>d?async()=>v:void 0,[d]),g=l.useMemo(()=>{if(!u||!E(u,P))return;const[f,T,C]=u.split("/");return new Date(C,f-1,T)},[u]),b=l.useMemo(()=>{if(!/\d{4}/.test(p))return;const[,f,T]=p.match(/(\d{2})(\d{2})/);return`${f}:${T}`},[p]),V=l.useMemo(()=>[{name:"date",type:"date",label:i,required:t,disabled:n,helperText:s,instructionText:r,inputSettings:{showTime:m,minDate:g,defaultTime:b}}],[i,t,n,s,r,m,g,b]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(q,{...h,buttons:M(_),title:"Date Field",fields:V,skeleton:c,getFormValues:k})]})};a.args={...$.args,showTime:!1,minDateStr:"",defaultTime:""};a.argTypes={...$.argTypes,showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"},defaultTime:{name:"Default Time"}};const I=async()=>({dateTimePrefilled:new Date("2023-07-31T14:00:00.000Z")}),o=()=>{const i=j(),{state:t,handleSubmit:c}=i,n="Helper text",r="Instruction text",d=l.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(q,{...i,buttons:M(c),title:"Date Field Calendar",description:"This is a description example",fields:d,getFormValues:I}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((s,m)=>e.jsxs("div",{children:[s,":"," ",t.data[s]&&t.data[s].toString()]},m))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var D,S,x;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  prepop,
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
  const getFormValues = useMemo(() => prepop ? async () => prepopulateData : undefined, [prepop]);
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
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var y,F,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(w=(F=o.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const A=["Playground","KitchenSink"],U=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:a,__namedExportsOrder:A,default:R},Symbol.toStringTag,{value:"Module"}));export{U as s};
