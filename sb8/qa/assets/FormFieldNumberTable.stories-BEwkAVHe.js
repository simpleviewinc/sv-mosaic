import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as f}from"./index-BP8_t0zE.js";import{r as O}from"./renderButtons-BmHfsf_z.js";import{u as R,n as h,r as C,c as D,F as N}from"./Form-BwRej2O0.js";const j={title:"FormFields/FormFieldNumberTable"},e=({label:l,required:t,skeleton:F,disabled:a,instructionText:o,helperText:s,rowTotalLabel:r,columnTotalLabel:u,topLeftLabel:m,displayColumnsSums:i,displayRowsSums:p,prepopulate:b,formatOptions:d})=>{const c=R(),{state:x,methods:{setFieldValue:T},handleSubmit:w}=c;f.useEffect(()=>{T(b?{name:"numberTable",value:h}:{name:"numberTable",value:void 0})},[b]);const g=f.useMemo(()=>[{name:"numberTable",label:l,type:"numberTable",required:t,disabled:a,inputSettings:{displaySumColumn:i,displaySumRow:p,rowTotalLabel:r,columnTotalLabel:u,topLeftLabel:m,rows:C,columns:D,numberFormatOptions:d},helperText:s,instructionText:o}],[l,d,i,p,t,a,o,s,m,r,u]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(x,null,"  ")}),n.jsx(N,{...c,buttons:O(w),title:"Number Table Field",fields:g,skeleton:F})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",rowTotalLabel:"TOTAL",columnTotalLabel:"No. Rooms",topLeftLabel:"Day",displayColumnsSums:!0,displayRowsSums:!0,prepopulate:!0,formatOptions:{style:"currency",currency:"USD"}};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},rowTotalLabel:{name:"Row Total Label"},columnTotalLabel:{name:"Column Total Label"},topLeftLabel:{name:"Top Left Label"},displayColumnsSums:{name:"Display Columns Sums"},displayRowsSums:{name:"Display Rows Sums"},prepopulate:{name:"Prepopulate"},formatOptions:{name:"Number Format Options"}};var y,L,S;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  rowTotalLabel,
  columnTotalLabel,
  topLeftLabel,
  displayColumnsSums,
  displayRowsSums,
  prepopulate,
  formatOptions
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    methods: {
      setFieldValue
    },
    handleSubmit
  } = controller;
  useEffect(() => {
    if (!prepopulate) setFieldValue({
      name: "numberTable",
      value: undefined
    });else setFieldValue({
      name: "numberTable",
      value: numberTableDefaultValue
    });
  }, [prepopulate]);
  const fields = useMemo((): FieldDef[] => [{
    name: "numberTable",
    label,
    type: "numberTable",
    required,
    disabled,
    inputSettings: {
      displaySumColumn: displayColumnsSums,
      displaySumRow: displayRowsSums,
      rowTotalLabel: rowTotalLabel,
      columnTotalLabel: columnTotalLabel,
      topLeftLabel: topLeftLabel,
      rows: rows,
      columns: columns,
      numberFormatOptions: formatOptions
    },
    helperText,
    instructionText
  }], [label, formatOptions, displayColumnsSums, displayRowsSums, required, disabled, instructionText, helperText, topLeftLabel, rowTotalLabel, columnTotalLabel]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Number Table Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(S=(L=e.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const _=["Playground"],q=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{q as s};
