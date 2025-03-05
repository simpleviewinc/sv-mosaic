import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as n}from"./index-Btj5Fd67.js";import{u as p,v as u,e as D,f as b,g as v,F as y}from"./index-B0t4kTeH.js";import{r as c}from"./renderButtons-BmHfsf_z.js";import{O as h}from"./utils-BR2PSRFh.js";import"./theme-C7C0QMlu.js";import"./testIds-fiKIunms.js";import"./TitleWrapper-BAR2n_rD.js";import"./Button-CRbkpCI2.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./ButtonBase-biKTBdl5.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Cwezlgxk.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-R4ufcCXK.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-BqcK0eeN.js";import"./createSvgIcon-CzNXaSwG.js";import"./createSvgIcon-Bmixpj46.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-D0-akgTt.js";import"./TitleText-CdOksVB0.js";import"./ButtonRow-BXJCCKLJ.js";import"./index-DvTtuJek.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-Ckb-VyLy.js";import"./Chip-C_h72JNQ.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-CWtnKjLU.js";import"./formControlState-Bl9Dd4wz.js";import"./Spinner-C0FunRuE.js";import"./SubtitleText-DUUVrgUU.js";import"./CheckboxList-8phOVoJn.js";import"./Checkbox-Dw77DCJG.js";import"./FormControlLabel-DHn1WcqZ.js";import"./getThemeProps-DdDNKTGU.js";import"./MoreVert-Djp96t97.js";import"./ChevronRight-CA1Fd4W_.js";import"./PageHeader-Dwi4ENWc.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-Ba6ulvNI.js";import"./StyledFormControl.styled-i13hAbZe.js";import"./Toggle-DhOz43zT.js";import"./Dialog-D-UDZ0Lf.js";import"./SideNav-BXGvGLiL.js";import"./Snackbar-ByKQOjhS.js";import"./Close-BLCogFul.js";import"./ClickAwayListener-DoPvkzLf.js";const ht={title:"Components/Form"},t=({showState:m})=>{const a=p(),{state:s,handleSubmit:l}=a;n.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=h}),[]);const d=n.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[D]},{name:"number",label:"Number",type:"text",validators:[b]},{name:"url",label:"URL",type:"text",validators:[v]},{name:"startDate",type:"date",label:"Start date",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"]},{name:"endDate",type:"date",label:"End date",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"]},{name:"startDateWithTime",type:"date",label:"Start date With Time",validators:[{fn:"validateDateRange",options:{endDateName:"endDateWithTime"}}],validates:["endDateWithTime"],inputSettings:{showTime:!0,defaultTime:"00:00"},required:!0},{name:"endDateWithTime",type:"date",label:"End date With Time",validators:[{fn:"validateDateRange",options:{startDateName:"startDateWithTime"}}],validates:["startDateWithTime"],inputSettings:{showTime:!0,defaultTime:"23:59"},required:!0},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[m&&e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...a,buttons:c(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const ft=["Validators"];export{t as Validators,ft as __namedExportsOrder,ht as default};
