import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{r as R}from"./index-D0AnReJb.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{c as S}from"./commonFieldControl-LQDYMh-C.js";import{u as C,F as D}from"./index-TbANqjzF.js";import{c as N,r as j,m as _}from"./numberTable-_IOpZUZY.js";const E={title:"FormFields/FormFieldNumberTable"},e=({label:n,hideLabel:t,required:r,prepop:F,prepopData:g,disabled:a,instructionText:l,forceInstructionTooltip:s,helperText:m,rowTotalLabel:u,columnTotalLabel:i,topLeftLabel:p,displayColumnsSums:b,displayRowsSums:d,formatOptions:c})=>{const T=C({data:F?g:{}}),{state:w,handleSubmit:O}=T,x=R.useMemo(()=>[{name:"numberTable",label:n,hideLabel:t,type:"numberTable",required:r,disabled:a,inputSettings:{displaySumColumn:b,displaySumRow:d,rowTotalLabel:u,columnTotalLabel:i,topLeftLabel:p,rows:j,columns:N,numberFormatOptions:c},helperText:m,instructionText:l,forceInstructionTooltip:s}],[n,t,r,a,b,d,u,i,p,c,m,l,s]);return o.jsxs(o.Fragment,{children:[o.jsx("pre",{children:JSON.stringify(w,null,"  ")}),o.jsx(D,{...T,buttons:h(O),title:"Number Table Field",fields:x})]})};e.args={...S.args({prepopData:{numberTable:_}}),rowTotalLabel:"TOTAL",columnTotalLabel:"No. Rooms",topLeftLabel:"Day",displayColumnsSums:!0,displayRowsSums:!0,formatOptions:{style:"currency",currency:"USD"}};e.argTypes={...S.argTypes,rowTotalLabel:{name:"Row Total Label"},columnTotalLabel:{name:"Column Total Label"},topLeftLabel:{name:"Top Left Label"},displayColumnsSums:{name:"Display Columns Sums"},displayRowsSums:{name:"Display Rows Sums"},formatOptions:{name:"Number Format Options"}};var y,f,L;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
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
    hideLabel,
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
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, displayColumnsSums, displayRowsSums, rowTotalLabel, columnTotalLabel, topLeftLabel, formatOptions, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Number Table Field" fields={fields} />
        </>;
}`,...(L=(f=e.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};const P=["Playground"],v=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:P,default:E},Symbol.toStringTag,{value:"Module"}));export{v as s};
