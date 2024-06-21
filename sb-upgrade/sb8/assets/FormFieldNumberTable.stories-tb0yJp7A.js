import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as f}from"./index-CDs2tPxN.js";import{r as R}from"./storyUtils-ByV2Bsyv.js";import{u as h,n as O,r as C,c as D,F as N}from"./formUtils-8tzQoWfa.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Ee={title:"FormFields/FormFieldNumberTable"},e=({label:o,required:r,skeleton:F,disabled:n,instructionText:l,helperText:m,rowTotalLabel:a,columnTotalLabel:s,topLeftLabel:i,displayColumnsSums:p,displayRowsSums:u,prepopulate:b,formatOptions:d})=>{const c=h(),{state:x,methods:{setFieldValue:T},handleSubmit:w}=c;f.useEffect(()=>{T(b?{name:"numberTable",value:O}:{name:"numberTable",value:void 0})},[b]);const g=f.useMemo(()=>[{name:"numberTable",label:o,type:"numberTable",required:r,disabled:n,inputSettings:{displaySumColumn:p,displaySumRow:u,rowTotalLabel:a,columnTotalLabel:s,topLeftLabel:i,rows:C,columns:D,numberFormatOptions:d},helperText:m,instructionText:l}],[o,d,p,u,r,n,l,m,i,a,s]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(x,null,"  ")}),t.jsx(N,{...c,buttons:R(w),title:"Number Table Field",fields:g,skeleton:F})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",rowTotalLabel:"TOTAL",columnTotalLabel:"No. Rooms",topLeftLabel:"Day",displayColumnsSums:!0,displayRowsSums:!0,prepopulate:!0,formatOptions:{style:"currency",currency:"USD"}};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},rowTotalLabel:{name:"Row Total Label"},columnTotalLabel:{name:"Column Total Label"},topLeftLabel:{name:"Top Left Label"},displayColumnsSums:{name:"Display Columns Sums"},displayRowsSums:{name:"Display Rows Sums"},prepopulate:{name:"Prepopulate"},formatOptions:{name:"Number Format Options"}};var y,L,S;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(S=(L=e.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Ve=["Playground"];export{e as Playground,Ve as __namedExportsOrder,Ee as default};
