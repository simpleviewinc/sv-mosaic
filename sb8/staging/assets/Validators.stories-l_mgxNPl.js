import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as n}from"./index-lnx8lKqn.js";import{u as p,v as u,d as D,e as b,f as v,F as y}from"./index-BiBMp58k.js";import{r as c}from"./renderButtons-DP0bGf4C.js";import{O as h}from"./dom-BR2PSRFh.js";import"./ExpandMore-BWMeOleT.js";import"./identifier-DL_MWCt5.js";import"./createSvgIcon-DtmGrA-N.js";import"./generateUtilityClasses-BXdgOgaD.js";import"./useIsFocusVisible-CUUNsth7.js";import"./MosaicContext-Bd_KQqXt.js";import"./ButtonBase-CvKKHeWu.js";import"./FormFieldText.styled-C8FVpgqR.js";import"./styled-components.browser.esm-DqsT1pAc.js";import"./sizes-BcVUBVYw.js";import"./formControlState-DQjLAsCB.js";import"./useTooltip-DxGcUIuP.js";import"./useThemeWithoutDefault-DtYdwAl6.js";import"./index-DJZ3_iYS.js";import"./index-BySu-MVC.js";import"./Button-CNe7umd6.js";import"./index-BXfeNjdK.js";import"./Popover-BteNYKgc.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-BzZp6KFF.js";import"./containerQuery-BGTno4Nd.js";import"./ChevronLeft-vDd10AKU.js";import"./Typography-BDSgj_cw.js";import"./DisplayText-DNcU0R6O.js";import"./ButtonRow-BvtHToaG.js";import"./DataViewFilterDropdownButtons-rxxLPn9R.js";import"./StyledPopperPaper-DUCM88TM.js";import"./TooltipIcon-CIvFjYBP.js";import"./index-WeqoMoTB.js";import"./Chip-CbNdHOhT.js";import"./DataViewPrimaryFilter.styled-CBPEvKLp.js";import"./Badge-QaR-AhQl.js";import"./Text-6QT-9GAX.js";import"./PickerPanel-BfvGlJ8s.js";import"./PageHeader-nP7hDafL.js";import"./Spinner-9l6dePBI.js";import"./CheckboxList-6gebeIaX.js";import"./Checkbox-Bd_VDYHl.js";import"./SwitchBase-gKBphwxl.js";import"./StyledOptionFormControl-IcAt2LqD.js";import"./MoreVert-Dnd0CSMf.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CKhuYVYb.js";import"./Snackbar-C_CrhD95.js";import"./Close-R1hfxO-H.js";import"./ChipList-_8tC_zVn.js";import"./RadioButton-G3onKhzu.js";import"./Toggle-DL53UmwG.js";import"./Dialog-64i6eqDA.js";import"./ThemeProvider-D5DIG-lM.js";import"./SideNav-DjxcEScw.js";import"./CardHeading-CmuJXUee.js";const Tt={title:"Components/Form"},t=({showState:m})=>{const a=p(),{state:s,handleSubmit:l}=a;n.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const d=n.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[D]},{name:"number",label:"Number",type:"text",validators:[b]},{name:"url",label:"URL",type:"text",validators:[v]},{name:"startDate",type:"date",label:"Start date",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"]},{name:"startDateWithTime",type:"date",label:"Start date With Time",validators:[{fn:"validateDateRange",options:{endDateName:"endDateWithTime"}}],validates:["endDateWithTime"],inputSettings:{showTime:!0,defaultTime:"00:00"},required:!0},{name:"endDateWithTime",type:"date",label:"End date With Time",validators:[{fn:"validateDateRange",options:{startDateName:"startDateWithTime"}}],validates:["startDateWithTime"],inputSettings:{showTime:!0,defaultTime:"23:59"},required:!0},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[m&&e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...a,buttons:c(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
