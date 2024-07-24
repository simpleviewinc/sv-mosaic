import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as a}from"./index-BP8_t0zE.js";import{u as p,v as u,b as x,d as D,e as b,F as c}from"./formUtils-DQDQc0nV.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{O as y}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-BH1ITVt0.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-CBllSdZE.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-BPfWbbeS.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const ht={title:"Components/Form"},t=({showState:s})=>{const n=p(),{state:m,handleSubmit:l}=n;a.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const d=a.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[x]},{name:"number",label:"Number",type:"text",validators:[D]},{name:"url",label:"URL",type:"text",validators:[b]},{name:"startDate",type:"date",label:"Start date",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"],inputSettings:{showTime:!1}},{name:"endDate",type:"date",label:"End date",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"],inputSettings:{showTime:!1}},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[s&&e.jsx("pre",{children:JSON.stringify(m,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(c,{...n,buttons:f(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const wt=["Validators"];export{t as Validators,wt as __namedExportsOrder,ht as default};
