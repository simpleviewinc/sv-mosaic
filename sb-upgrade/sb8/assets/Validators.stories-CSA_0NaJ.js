import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as a}from"./index-CDs2tPxN.js";import{u as p,v as u,b as x,d as D,e as b,F as c}from"./formUtils-8tzQoWfa.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{O as y}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const St={title:"Components/Form"},t=({showState:s})=>{const n=p(),{state:m,handleSubmit:l}=n;a.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const d=a.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[x]},{name:"number",label:"Number",type:"text",validators:[D]},{name:"url",label:"URL",type:"text",validators:[b]},{name:"startDate",type:"date",label:"Start date",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"],inputSettings:{showTime:!1}},{name:"endDate",type:"date",label:"End date",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"],inputSettings:{showTime:!1}},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[s&&e.jsx("pre",{children:JSON.stringify(m,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(c,{...n,buttons:f(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  showState
}: typeof Validators.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "required",
    label: "Required",
    type: "text",
    required: true
  }, {
    name: "email",
    label: "Email",
    type: "text",
    validators: [validateEmail]
  }, {
    name: "slow",
    label: "Slow",
    type: "text",
    validators: [validateSlow]
  }, {
    name: "number",
    label: "Number",
    type: "text",
    validators: [validateNumber]
  }, {
    name: "url",
    label: "URL",
    type: "text",
    validators: [validateURL]
  }, {
    name: "startDate",
    type: "date",
    label: "Start date",
    required: false,
    disabled: false,
    helperText: "Helper text",
    instructionText: "Instruction text",
    validators: [{
      fn: "validateDateRange",
      options: {
        endDateName: "endDate"
      }
    }],
    validates: ["endDate"],
    inputSettings: {
      showTime: false
    }
  }, {
    name: "endDate",
    type: "date",
    label: "End date",
    required: false,
    disabled: false,
    helperText: "Helper text",
    instructionText: "Instruction text",
    validators: [{
      fn: "validateDateRange",
      options: {
        startDateName: "startDate"
      }
    }],
    validates: ["startDate"],
    inputSettings: {
      showTime: false
    }
  }, {
    name: "minDate",
    type: "date",
    label: "Minimum Date",
    instructionText: "Enter a date on or after 12 Feb 2024",
    inputSettings: {
      minDate: new Date(2024, 1, 12, 0, 0, 0, 0)
    }
  }, {
    name: "maxDate",
    type: "date",
    label: "Maximum Date",
    instructionText: "Enter a date on or before 25 Jun 2024",
    inputSettings: {
      maxDate: new Date(2024, 5, 25, 23, 59, 59, 999)
    }
  }, {
    name: "dateBounds",
    type: "date",
    label: "Date boundary",
    instructionText: "Enter a date between 1 Jan 2024 and 31 Dec 2024",
    inputSettings: {
      minDate: new Date(2024, 0, 1, 0, 0, 0, 0),
      maxDate: new Date(2024, 11, 31, 23, 59, 59, 999)
    }
  }], []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Validators story" fields={fields} />
            </div>
        </>;
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const ht=["Validators"];export{t as Validators,ht as __namedExportsOrder,St as default};
