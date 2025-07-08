import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as n}from"./index-D0AnReJb.js";import{u as p,v as u,c as D,d as b,e as v,F as y}from"./index-DxY2ZH9t.js";import{r as c}from"./renderButtons-BmHfsf_z.js";import{O as h}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-aVcmUYMZ.js";import"./sizes-CTdyEcea.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-D4ztpYuS.js";import"./Button-Cu24UfKA.js";import"./identifier-C21A9frq.js";import"./generateUtilityClasses-iHFtG1jj.js";import"./ButtonBase-CLHtCICo.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-Csnu-DvG.js";import"./Popper-B4A_VUge.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-4eCcP-Dc.js";import"./useThemeWithoutDefault-BHc79qG-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-D9vD66Ez.js";import"./createSvgIcon-DLboviGw.js";import"./createSvgIcon-YkkRvR3V.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DM2nLVeQ.js";import"./DisplayText-BRdY6ERT.js";import"./ButtonRow-DEKalGfm.js";import"./toNumber-ANF_7kha.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdownButtons-B-NSlGS8.js";import"./index-DOSIlNTt.js";import"./ExpandMore-CEbXN-sG.js";import"./Chip-BMBxB4HT.js";import"./PickerPanel-CDCtElFz.js";import"./PageHeader-DC2iTn04.js";import"./Text-Bw6wJuVZ.js";import"./FormFieldText.styled-DTQIdddZ.js";import"./formControlState-FGREjXRn.js";import"./Spinner-DrhQOeHK.js";import"./CheckboxList-6G7BlDZu.js";import"./Checkbox-DqndGKzg.js";import"./FormControlLabel-sQC-fLMo.js";import"./DataViewPrimaryFilter.styled-DJMCb03L.js";import"./MoreVert-DAsd8IpG.js";import"./formats-CMvQHWsT.js";import"./ChipList-CJvhQDiV.js";import"./RadioButton-Bcxn9PJS.js";import"./StyledFormControl.styled-BQMYotuj.js";import"./Toggle-DDpxCdm7.js";import"./Dialog-CCRRhmOO.js";import"./ThemeProvider-DKfWeLFc.js";import"./SideNav-AzQy47h5.js";import"./Snackbar-DyF0qJal.js";import"./Close-CheCpke4.js";import"./ClickAwayListener-Dkkr5f_-.js";const wt={title:"Components/Form"},t=({showState:m})=>{const a=p(),{state:s,handleSubmit:l}=a;n.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const d=n.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[D]},{name:"number",label:"Number",type:"text",validators:[b]},{name:"url",label:"URL",type:"text",validators:[v]},{name:"startDate",type:"date",label:"Start date",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"]},{name:"startDateWithTime",type:"date",label:"Start date With Time",validators:[{fn:"validateDateRange",options:{endDateName:"endDateWithTime"}}],validates:["endDateWithTime"],inputSettings:{showTime:!0,defaultTime:"00:00"},required:!0},{name:"endDateWithTime",type:"date",label:"End date With Time",validators:[{fn:"validateDateRange",options:{startDateName:"startDateWithTime"}}],validates:["startDateWithTime"],inputSettings:{showTime:!0,defaultTime:"23:59"},required:!0},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[m&&e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...a,buttons:c(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
    validators: [{
      fn: "validateDateRange",
      options: {
        endDateName: "endDate"
      }
    }],
    validates: ["endDate"]
  }, {
    name: "endDate",
    type: "date",
    label: "End date",
    validators: [{
      fn: "validateDateRange",
      options: {
        startDateName: "startDate"
      }
    }],
    validates: ["startDate"]
  }, {
    name: "startDateWithTime",
    type: "date",
    label: "Start date With Time",
    validators: [{
      fn: "validateDateRange",
      options: {
        endDateName: "endDateWithTime"
      }
    }],
    validates: ["endDateWithTime"],
    inputSettings: {
      showTime: true,
      defaultTime: "00:00"
    },
    required: true
  }, {
    name: "endDateWithTime",
    type: "date",
    label: "End date With Time",
    validators: [{
      fn: "validateDateRange",
      options: {
        startDateName: "startDateWithTime"
      }
    }],
    validates: ["startDateWithTime"],
    inputSettings: {
      showTime: true,
      defaultTime: "23:59"
    },
    required: true
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Et=["Validators"];export{t as Validators,Et as __namedExportsOrder,wt as default};
