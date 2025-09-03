import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as n}from"./index-D0AnReJb.js";import{u as p,v as u,c as D,d as b,e as v,F as y}from"./index-B4r44Pjp.js";import{r as c}from"./renderButtons-DP0bGf4C.js";import{O as h}from"./dom-BR2PSRFh.js";import"./ExpandMore-Ca3pe8z0.js";import"./identifier-DOqdnZ6L.js";import"./sizes-DkIXWPpc.js";import"./createSvgIcon-DDyBApXB.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./ButtonBase-O4ZQd6U4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./MosaicContext-Y61KIvFP.js";import"./FormFieldText.styled-e8Bs0syX.js";import"./formControlState-BI4toe_X.js";import"./Popper-CeYJ7yNz.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./Button-CyFYeSR6.js";import"./index-CYsLg4TE.js";import"./useToggle-CTbnrs6g.js";import"./testIds-oQNwr1rf.js";import"./TitleWrapper-DK3mQSoI.js";import"./containerQuery-CYj0-5X2.js";import"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-DJBG-tfi.js";import"./DataViewFilterDropdownButtons-B-4fHIWu.js";import"./StyledPopperPaper-BODJ-ail.js";import"./index-8mKnpAWh.js";import"./Chip-CuRU8A0j.js";import"./DataViewPrimaryFilter.styled-EiL82tvk.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-DqRiB1vB.js";import"./PageHeader-CcTtabNf.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-Dtr7xjiR.js";import"./Checkbox-Be3Yhveb.js";import"./StyledOptionFormControl-Br1jmfxi.js";import"./MoreVert-BAJenQd7.js";import"./stable-CpItcOrb.js";import"./throws-DLZ75Q5e.js";import"./formats-CMvQHWsT.js";import"./Snackbar-BY140rqK.js";import"./Close-DizofMnI.js";import"./ClickAwayListener-Cp7Ry44a.js";import"./ChipList-Bjx88ODE.js";import"./RadioButton-DplP-WlB.js";import"./Toggle-BL_WBRmO.js";import"./Dialog-zScg2qCO.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-BRHRM8UV.js";const Rt={title:"Components/Form"},t=({showState:m})=>{const a=p(),{state:s,handleSubmit:l}=a;n.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const d=n.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[D]},{name:"number",label:"Number",type:"text",validators:[b]},{name:"url",label:"URL",type:"text",validators:[v]},{name:"startDate",type:"date",label:"Start date",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"]},{name:"startDateWithTime",type:"date",label:"Start date With Time",validators:[{fn:"validateDateRange",options:{endDateName:"endDateWithTime"}}],validates:["endDateWithTime"],inputSettings:{showTime:!0,defaultTime:"00:00"},required:!0},{name:"endDateWithTime",type:"date",label:"End date With Time",validators:[{fn:"validateDateRange",options:{startDateName:"startDateWithTime"}}],validates:["startDateWithTime"],inputSettings:{showTime:!0,defaultTime:"23:59"},required:!0},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[m&&e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...a,buttons:c(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Nt=["Validators"];export{t as Validators,Nt as __namedExportsOrder,Rt as default};
