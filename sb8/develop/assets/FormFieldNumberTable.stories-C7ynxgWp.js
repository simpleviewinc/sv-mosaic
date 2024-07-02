import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as f}from"./index-BP8_t0zE.js";import{r as R}from"./storyUtils-ByV2Bsyv.js";import{u as h,n as O,r as C,c as D,F as N}from"./formUtils-BR5ocB9f.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const Ee={title:"FormFields/FormFieldNumberTable"},e=({label:o,required:r,skeleton:F,disabled:n,instructionText:l,helperText:m,rowTotalLabel:a,columnTotalLabel:s,topLeftLabel:i,displayColumnsSums:p,displayRowsSums:u,prepopulate:b,formatOptions:d})=>{const c=h(),{state:x,methods:{setFieldValue:T},handleSubmit:w}=c;f.useEffect(()=>{T(b?{name:"numberTable",value:O}:{name:"numberTable",value:void 0})},[b]);const g=f.useMemo(()=>[{name:"numberTable",label:o,type:"numberTable",required:r,disabled:n,inputSettings:{displaySumColumn:p,displaySumRow:u,rowTotalLabel:a,columnTotalLabel:s,topLeftLabel:i,rows:C,columns:D,numberFormatOptions:d},helperText:m,instructionText:l}],[o,d,p,u,r,n,l,m,i,a,s]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(x,null,"  ")}),t.jsx(N,{...c,buttons:R(w),title:"Number Table Field",fields:g,skeleton:F})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",rowTotalLabel:"TOTAL",columnTotalLabel:"No. Rooms",topLeftLabel:"Day",displayColumnsSums:!0,displayRowsSums:!0,prepopulate:!0,formatOptions:{style:"currency",currency:"USD"}};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},rowTotalLabel:{name:"Row Total Label"},columnTotalLabel:{name:"Column Total Label"},topLeftLabel:{name:"Top Left Label"},displayColumnsSums:{name:"Display Columns Sums"},displayRowsSums:{name:"Display Rows Sums"},prepopulate:{name:"Prepopulate"},formatOptions:{name:"Number Format Options"}};var y,L,S;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
