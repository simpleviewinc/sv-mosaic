import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as n}from"./index-BcWw8SPZ.js";import{u as p,v as u,d as D,e as b,f as v,F as y}from"./index-DmNM1quz.js";import{r as c}from"./renderButtons-DP0bGf4C.js";import{O as h}from"./dom-BR2PSRFh.js";import"./ExpandMore-DZ5qJANw.js";import"./identifier-vCS-QwDM.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-CFpEEiA8.js";import"./generateUtilityClasses-DxEc1O3f.js";import"./styled-components.browser.esm-iTa7G-AD.js";import"./useIsFocusVisible-BiDRLN3G.js";import"./MosaicContext-CR3sZt-k.js";import"./ButtonBase-C5IHe1v7.js";import"./FormFieldText.styled-ClVDR1L1.js";import"./formControlState-DBjLczXb.js";import"./useTooltip-Ca_MnstU.js";import"./useThemeWithoutDefault-DcDKfq8w.js";import"./index-CcJIGMye.js";import"./index-lsJDjLAm.js";import"./Button-Ux1FJEQf.js";import"./index-BFOXBPPy.js";import"./Popover-BsgnjFRv.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-C-T-4XdU.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-deJoC413.js";import"./Typography-B-r-8hBf.js";import"./DisplayText-iy3WLqbC.js";import"./ButtonRow-BGTnrp5G.js";import"./DataViewFilterDropdownButtons-DOEmfG0b.js";import"./StyledPopperPaper-CxUbRyvr.js";import"./TooltipIcon-IdakTMWj.js";import"./index-DUEwBlnx.js";import"./Chip-CtO-XFaP.js";import"./DataViewPrimaryFilter.styled-CmyjWjxc.js";import"./Badge-BN0BUUeW.js";import"./Text-C3Iu2YK-.js";import"./PickerPanel-CWMNNA3e.js";import"./PageHeader-CPZg_1sR.js";import"./Spinner-D5EjUoUF.js";import"./CheckboxList-CrF4bjy0.js";import"./Checkbox-CratNqxV.js";import"./SwitchBase-CO7VNkpO.js";import"./StyledOptionFormControl-Bv1fp9pz.js";import"./MoreVert-rBkgd4TI.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DNVBgAUm.js";import"./Snackbar-ComNH1Eo.js";import"./Close-1U0VQJju.js";import"./ChipList-T_9FOMMC.js";import"./RadioButton-D50tCzor.js";import"./Toggle-wemzBvjs.js";import"./Dialog-nLsrSr--.js";import"./ThemeProvider-ke4tQo0r.js";import"./SideNav-DpcKnBv8.js";import"./CardHeading-DgwLSOU_.js";const Tt={title:"Components/Form"},t=({showState:m})=>{const a=p(),{state:s,handleSubmit:l}=a;n.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const d=n.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[D]},{name:"number",label:"Number",type:"text",validators:[b]},{name:"url",label:"URL",type:"text",validators:[v]},{name:"startDate",type:"date",label:"Start date",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"]},{name:"startDateWithTime",type:"date",label:"Start date With Time",validators:[{fn:"validateDateRange",options:{endDateName:"endDateWithTime"}}],validates:["endDateWithTime"],inputSettings:{showTime:!0,defaultTime:"00:00"},required:!0},{name:"endDateWithTime",type:"date",label:"End date With Time",validators:[{fn:"validateDateRange",options:{startDateName:"startDateWithTime"}}],validates:["startDateWithTime"],inputSettings:{showTime:!0,defaultTime:"23:59"},required:!0},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[m&&e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...a,buttons:c(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const St=["Validators"];export{t as Validators,St as __namedExportsOrder,Tt as default};
