import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as S}from"./index-CDs2tPxN.js";import{u as g,t as j,F as D}from"./formUtils-CJK8oCl3.js";import{r as y}from"./storyUtils-ByV2Bsyv.js";import{D as k}from"./formats-CDjt32hU.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Ne={title:"FormFields/FormFieldDateField"},a=({label:o,required:t,skeleton:d,disabled:n,instructionText:i,helperText:m,showTime:s,minDateStr:r})=>{const p=g(),{state:F,handleSubmit:w}=p,u=r&&j(r,k)?new Date(Number(r.split("/")[2]),Number(r.split("/")[1])-1,Number(r.split("/")[0])):void 0,q=S.useMemo(()=>[{name:"date",type:"date",label:o,required:t,disabled:n,helperText:m,instructionText:i,inputSettings:{showTime:s,minDate:u}}],[o,t,n,m,i,s,u]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(F,null,"  ")}),e.jsx(D,{...p,buttons:y(w),title:"Date Field",fields:q,skeleton:d})]})};a.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",showTime:!1,minDateStr:""};a.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},showTime:{name:"Show Time"},minDateStr:{name:"Minimum Date"}};const N=async()=>({dateTimePrefilled:new Date("2023-07-31T14:00:00.000Z")}),l=()=>{const o=g(),{state:t,handleSubmit:d}=o,n="Helper text",i="Instruction text",m=S.useMemo(()=>[{name:"singleDate",type:"date",label:"Single Date Calendar",required:!1,disabled:!1,helperText:n,instructionText:i,inputSettings:{showTime:!1}},{name:"dateTime",type:"date",label:"Date Time Input",required:!1,disabled:!1,helperText:n,instructionText:i,inputSettings:{showTime:!0}},{name:"dateTimePrefilled",type:"date",label:"Date Time with preset values",required:!1,disabled:!1,helperText:n,instructionText:i,inputSettings:{showTime:!0}},{name:"requiredDateTime",type:"date",label:"Required Single Date Calendar",required:!0,disabled:!1,helperText:n,instructionText:i,inputSettings:{showTime:!0}}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(D,{...o,buttons:y(d),title:"Date Field Calendar",description:"This is a description example",fields:m,getFormValues:N}),e.jsx("h3",{children:"Date.toString()"}),e.jsx("pre",{children:Object.keys(t.data).map((s,r)=>e.jsxs("div",{children:[s,":"," ",t.data[s]&&t.data[s].toString()]},r))}),e.jsx("h3",{children:"State"}),e.jsx("pre",{children:JSON.stringify(t,null,"  ")})]})};a.__docgenInfo={description:"",methods:[],displayName:"Playground"};l.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var c,T,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,f,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const _e=["Playground","KitchenSink"];export{l as KitchenSink,a as Playground,_e as __namedExportsOrder,Ne as default};
