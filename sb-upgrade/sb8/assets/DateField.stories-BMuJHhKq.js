import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as D}from"./index-CDs2tPxN.js";import{u as S,t as j,F as g}from"./formUtils-8tzQoWfa.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import{D as k}from"./formats-CDjt32hU.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Ie={title:"FormFields/FormFieldDateField"},s=({label:o,required:t,skeleton:d,disabled:n,instructionText:r,helperText:l,showTime:a,minDateStr:i})=>{const p=S(),{state:y,handleSubmit:w}=p,u=i&&j(i,k)?new Date(Number(i.split("/")[2]),Number(i.split("/")[1])-1,Number(i.split("/")[0])):void 0,q=D.useMemo(()=>[{name:"date",type:"date",label:o,required:t,disabled:n,helperText:l,instructionText:r,inputSettings:{showTime:a,minDate:u}}],[o,t,n,l,r,a,u]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx(g,{...p,buttons:F(w),title:"Date Field",fields:q,skeleton:d})]})};s.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",showTime:!1,minDateStr:""};s.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"}};const N=async()=>({dateTimePrefilled:new Date("2023-07-31T14:00:00.000Z")}),m=()=>{const o=S(),{state:t,handleSubmit:d}=o,n="Helper text",r="Instruction text",l=D.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:r,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{...o,buttons:F(d),title:"Date Field Calendar",description:"This is a description example",fields:l,getFormValues:N}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((a,i)=>e.jsxs("div",{children:[a,":"," ",t.data[a]&&t.data[a].toString()]},i))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};var c,T,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  showTime,
  minDateStr
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const minDate = minDateStr && textIsValidDate(minDateStr, DATE_FORMAT_FULL) ? new Date(Number(minDateStr.split("/")[2]), Number(minDateStr.split("/")[1]) - 1, Number(minDateStr.split("/")[0])) : undefined;
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
      minDate
    }
  }], [label, required, disabled, helperText, instructionText, showTime, minDate]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Date Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,b,f;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const Re=["Playground","KitchenSink"];export{m as KitchenSink,s as Playground,Re as __namedExportsOrder,Ie as default};
