import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as E}from"./index-ePW8zFKp.js";import{u as M,F as j}from"./index-ZHak9-Em.js";import{r as L}from"./renderButtons-DP0bGf4C.js";import{c as b}from"./commonFieldControl-LQDYMh-C.js";import"./ExpandMore-DTgjfsqJ.js";import"./identifier-vWKndVvV.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-DOp_2lHr.js";import"./createSvgIcon-JtMyjPpt.js";import"./generateUtilityClasses-CUUJXLh7.js";import"./styled-components.browser.esm-CUKKF2J4.js";import"./ButtonBase-YTDCQqeW.js";import"./useIsFocusVisible-BxLBCNny.js";import"./ownerWindow-DvT1GKkC.js";import"./MosaicContext-CjWw6F81.js";import"./FormFieldText.styled-Bk8NGAsC.js";import"./formControlState-kJY1j3p4.js";import"./Popper-DP0cm8Rf.js";import"./useTheme-DTRH4aGG.js";import"./useThemeWithoutDefault-Dj6yTNm1.js";import"./index-DnRBG-o-.js";import"./index-CKydZLen.js";import"./Button-DrJO7SQT.js";import"./index-Ca1iOyRL.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-DmKVz7XJ.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import"./DisplayText-DlqFHcnF.js";import"./ButtonRow-YhuqC_GR.js";import"./DataViewFilterDropdownButtons-C_RCg-Qn.js";import"./StyledPopperPaper-8Ep909Ba.js";import"./index-Bh5Vkqmp.js";import"./Chip-0jtXmB96.js";import"./DataViewPrimaryFilter.styled-BsgbKxfV.js";import"./Badge-BWKQiQcj.js";import"./Text-cPxBJcyq.js";import"./PickerPanel-G-RBUfJL.js";import"./PageHeader-CGRiWJUd.js";import"./Spinner-Bi6mQivf.js";import"./CheckboxList-Dy-kOrHq.js";import"./Checkbox-DHQwFOa3.js";import"./SwitchBase-BYEDHepN.js";import"./StyledOptionFormControl-Ca00866Q.js";import"./MoreVert-BnBEmsSM.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CXoQvajJ.js";import"./Snackbar-CXJOSA6g.js";import"./Close-Da-iw-_d.js";import"./ChipList-DaRpkRZU.js";import"./RadioButton-C4xgaHsm.js";import"./Toggle-Bi6du1gm.js";import"./Dialog-oPs8S-ZP.js";import"./ThemeProvider-B65WN4y2.js";import"./SideNav-BHwtuPtb.js";import"./Card.styled-CanWcIiN.js";const kt={title:"FormFields/FormFieldCode"},t=({label:r,hideLabel:n,required:i,prepop:T,prepopData:H,disabled:m,instructionText:a,forceInstructionTooltip:p,helperText:s,theme:o,customTheme:l,language:c,autogrow:g,minHeight:u,maxHeight:d,height:h})=>{const f=M({data:T?H:{}}),{handleSubmit:S,state:w}=f,C=E.useMemo(()=>[{name:"code",label:r,hideLabel:n,type:"code",required:i,disabled:m,inputSettings:{theme:o==="custom"?l:o,language:c,autogrow:g,minHeight:u,maxHeight:d,height:h,onMount:(P,D)=>{D.languages.typescript.typescriptDefaults.addExtraLib(`
                                interface ScriptArgs {
                                    foo: string
                                }
                            `)}},helperText:s,instructionText:a,forceInstructionTooltip:p}],[r,n,i,m,o,l,c,g,u,d,h,s,a,p]);return e.jsxs(e.Fragment,{children:[e.jsx(j,{buttons:L(S),title:"Code Field",fields:C,...f}),e.jsx("pre",{children:JSON.stringify(w,null,"  ")})]})};t.args={...b.args({prepopData:{code:`interface ConcatParams {
    left: string;
    right: string;
}

function concat({ left, right }: ConcatParams): string {
    return \`\${left}:\${right}\`;
}`}}),theme:"light",customTheme:{base:"vs",inherit:!0,rules:[],colors:{"editor.background":"#fafafa"}},language:"typescript",autogrow:!1,minHeight:200,maxHeight:600,height:300};t.argTypes={...b.argTypes,theme:{name:"Theme",options:["light","dark","custom"],control:{type:"select"}},customTheme:{name:"Custom Theme",if:{arg:"theme",eq:"custom"}},language:{name:"Language",options:["typescript","html","css"],control:{type:"select"}},autogrow:{name:"Autogrow"},minHeight:{name:"Min Height",if:{arg:"autogrow"}},maxHeight:{name:"Max Height",if:{arg:"autogrow"}},height:{name:"Height",if:{arg:"autogrow",eq:!1}}};var x,y,F;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  theme,
  customTheme,
  language,
  autogrow,
  minHeight,
  maxHeight,
  height
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    handleSubmit,
    state
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "code",
    label,
    hideLabel,
    type: "code",
    required,
    disabled,
    inputSettings: {
      theme: theme === "custom" ? customTheme : theme,
      language,
      autogrow,
      minHeight,
      maxHeight,
      height,
      onMount: (_, monico) => {
        monico.languages.typescript.typescriptDefaults.addExtraLib(\`
                                interface ScriptArgs {
                                    foo: string
                                }
                            \`);
      }
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, theme, customTheme, language, autogrow, minHeight, maxHeight, height, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <Form buttons={renderButtons(handleSubmit)} title="Code Field" fields={fields} {...controller} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(F=(y=t.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};const Bt=["Playground"];export{t as Playground,Bt as __namedExportsOrder,kt as default};
