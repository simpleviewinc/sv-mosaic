import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as T}from"./index-Btj5Fd67.js";import{r as R}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-DXwRxrKb.js";import{u as h,n as C,r as N,c as j,F as D}from"./Form-tMgN-44i.js";const _={title:"FormFields/FormFieldNumberTable"},e=({label:l,required:o,skeleton:g,disabled:t,instructionText:a,helperText:s,rowTotalLabel:r,columnTotalLabel:m,topLeftLabel:u,displayColumnsSums:i,displayRowsSums:b,prepop:p,formatOptions:d})=>{const c=h(),{state:w,methods:{setFieldValue:f},handleSubmit:O}=c;T.useEffect(()=>{f(p?{name:"numberTable",value:C}:{name:"numberTable",value:void 0})},[p]);const x=T.useMemo(()=>[{name:"numberTable",label:l,type:"numberTable",required:o,disabled:t,inputSettings:{displaySumColumn:i,displaySumRow:b,rowTotalLabel:r,columnTotalLabel:m,topLeftLabel:u,rows:N,columns:j,numberFormatOptions:d},helperText:s,instructionText:a}],[l,d,i,b,o,t,a,s,u,r,m]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(w,null,"  ")}),n.jsx(D,{...c,buttons:R(O),title:"Number Table Field",fields:x,skeleton:g})]})};e.args={...F.args,rowTotalLabel:"TOTAL",columnTotalLabel:"No. Rooms",topLeftLabel:"Day",displayColumnsSums:!0,displayRowsSums:!0,formatOptions:{style:"currency",currency:"USD"}};e.argTypes={...F.argTypes,rowTotalLabel:{name:"Row Total Label"},columnTotalLabel:{name:"Column Total Label"},topLeftLabel:{name:"Top Left Label"},displayColumnsSums:{name:"Display Columns Sums"},displayRowsSums:{name:"Display Rows Sums"},formatOptions:{name:"Number Format Options"}};var y,L,S;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
  prepop,
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
    if (!prepop) setFieldValue({
      name: "numberTable",
      value: undefined
    });else setFieldValue({
      name: "numberTable",
      value: numberTableDefaultValue
    });
  }, [prepop]);
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
}`,...(S=(L=e.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const E=["Playground"],q=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:E,default:_},Symbol.toStringTag,{value:"Module"}));export{q as s};
