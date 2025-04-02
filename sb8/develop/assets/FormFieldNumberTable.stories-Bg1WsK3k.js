import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{r as O}from"./index-D0AnReJb.js";import{r as x}from"./renderButtons-BmHfsf_z.js";import{c as f}from"./commonFieldControl-LQDYMh-C.js";import{u as R,F as C}from"./Form-DPJ23PVO.js";import{c as D,r as N,m as h}from"./numberTable-_IOpZUZY.js";const j={title:"FormFields/FormFieldNumberTable"},e=({label:n,required:t,prepop:L,prepopData:S,disabled:r,instructionText:a,helperText:l,rowTotalLabel:s,columnTotalLabel:m,topLeftLabel:u,displayColumnsSums:p,displayRowsSums:i,formatOptions:b})=>{const d=R({data:L?S:{}}),{state:F,handleSubmit:g}=d,w=O.useMemo(()=>[{name:"numberTable",label:n,type:"numberTable",required:t,disabled:r,inputSettings:{displaySumColumn:p,displaySumRow:i,rowTotalLabel:s,columnTotalLabel:m,topLeftLabel:u,rows:N,columns:D,numberFormatOptions:b},helperText:l,instructionText:a}],[n,b,p,i,t,r,a,l,u,s,m]);return o.jsxs(o.Fragment,{children:[o.jsx("pre",{children:JSON.stringify(F,null,"  ")}),o.jsx(C,{...d,buttons:x(g),title:"Number Table Field",fields:w})]})};e.args={...f.args({prepopData:{numberTable:h}}),rowTotalLabel:"TOTAL",columnTotalLabel:"No. Rooms",topLeftLabel:"Day",displayColumnsSums:!0,displayRowsSums:!0,formatOptions:{style:"currency",currency:"USD"}};e.argTypes={...f.argTypes,rowTotalLabel:{name:"Row Total Label"},columnTotalLabel:{name:"Column Total Label"},topLeftLabel:{name:"Top Left Label"},displayColumnsSums:{name:"Display Columns Sums"},displayRowsSums:{name:"Display Rows Sums"},formatOptions:{name:"Number Format Options"}};var c,T,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  helperText,
  rowTotalLabel,
  columnTotalLabel,
  topLeftLabel,
  displayColumnsSums,
  displayRowsSums,
  formatOptions
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Number Table Field" fields={fields} />
        </>;
}`,...(y=(T=e.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const _=["Playground"],k=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{k as s};
