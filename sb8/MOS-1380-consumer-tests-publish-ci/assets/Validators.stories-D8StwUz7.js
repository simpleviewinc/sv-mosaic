import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as a}from"./index-BP8_t0zE.js";import{u as p,v as u,b as x,d as D,e as b,F as c}from"./formUtils-C9VpIqNJ.js";import"./Button-Dv6p7qil.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import{O as y}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-DY-cBMyi.js";import"./theme-DRtZtbPc.js";import"./useMosaicTranslation-CZCb37QS.js";import"./useIsFocusVisible-De2ftVE9.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CcHL1II5.js";import"./createSvgIcon-CPgMIgId.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CPbWUqAP.js";import"./useTheme-5hcycNQy.js";import"./index-BxmsGmlx.js";import"./index-BcS5vVNk.js";import"./CheckboxList-Bq1TaTYH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-aoYNk8Xu.js";import"./FormControlLabel-n1qioM9o.js";import"./ButtonBase-BZmvw3BH.js";import"./getThemeProps-Cs15h2IA.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./ButtonRow-OnULoQP7.js";import"./useToggle-lipGlewK.js";import"./Spinner-DgupAfKo.js";import"./Chip-Da3idaCC.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-PGODfCtA.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CEyZfcGg.js";import"./TitleWrapper-B_YZcXoR.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-lzGsiXAs.js";import"./formats-CDjt32hU.js";import"./Dialog-DbUj91wm.js";import"./useMediaQuery-CguehUMS.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-CO3K7ssQ.js";import"./Snackbar-DNEJC7rG.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";const St={title:"Components/Form"},t=({showState:s})=>{const n=p(),{state:m,handleSubmit:l}=n;a.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const d=a.useMemo(()=>[{name:"required",label:"Required",type:"text",required:!0},{name:"email",label:"Email",type:"text",validators:[u]},{name:"slow",label:"Slow",type:"text",validators:[x]},{name:"number",label:"Number",type:"text",validators:[D]},{name:"url",label:"URL",type:"text",validators:[b]},{name:"startDate",type:"date",label:"Start date",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text",validators:[{fn:"validateDateRange",options:{endDateName:"endDate"}}],validates:["endDate"],inputSettings:{showTime:!1}},{name:"endDate",type:"date",label:"End date",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text",validators:[{fn:"validateDateRange",options:{startDateName:"startDate"}}],validates:["startDate"],inputSettings:{showTime:!1}},{name:"minDate",type:"date",label:"Minimum Date",instructionText:"Enter a date on or after 12 Feb 2024",inputSettings:{minDate:new Date(2024,1,12,0,0,0,0)}},{name:"maxDate",type:"date",label:"Maximum Date",instructionText:"Enter a date on or before 25 Jun 2024",inputSettings:{maxDate:new Date(2024,5,25,23,59,59,999)}},{name:"dateBounds",type:"date",label:"Date boundary",instructionText:"Enter a date between 1 Jan 2024 and 31 Dec 2024",inputSettings:{minDate:new Date(2024,0,1,0,0,0,0),maxDate:new Date(2024,11,31,23,59,59,999)}}],[]);return e.jsxs(e.Fragment,{children:[s&&e.jsx("pre",{children:JSON.stringify(m,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(c,{...n,buttons:f(l),title:"Validators story",fields:d})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var r,i,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
