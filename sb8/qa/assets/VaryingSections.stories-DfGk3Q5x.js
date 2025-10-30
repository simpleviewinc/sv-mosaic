import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-ePW8zFKp.js";import{u as _,F as u}from"./index-ZHak9-Em.js";import{r as S}from"./renderButtons-DP0bGf4C.js";import"./ExpandMore-DTgjfsqJ.js";import"./identifier-vWKndVvV.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-DOp_2lHr.js";import"./createSvgIcon-JtMyjPpt.js";import"./generateUtilityClasses-CUUJXLh7.js";import"./styled-components.browser.esm-CUKKF2J4.js";import"./ButtonBase-YTDCQqeW.js";import"./useIsFocusVisible-BxLBCNny.js";import"./ownerWindow-DvT1GKkC.js";import"./MosaicContext-CjWw6F81.js";import"./FormFieldText.styled-Bk8NGAsC.js";import"./formControlState-kJY1j3p4.js";import"./Popper-DP0cm8Rf.js";import"./useTheme-DTRH4aGG.js";import"./useThemeWithoutDefault-Dj6yTNm1.js";import"./index-DnRBG-o-.js";import"./index-CKydZLen.js";import"./Button-DrJO7SQT.js";import"./index-Ca1iOyRL.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-DmKVz7XJ.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import"./DisplayText-DlqFHcnF.js";import"./ButtonRow-YhuqC_GR.js";import"./DataViewFilterDropdownButtons-C_RCg-Qn.js";import"./StyledPopperPaper-8Ep909Ba.js";import"./index-Bh5Vkqmp.js";import"./Chip-0jtXmB96.js";import"./DataViewPrimaryFilter.styled-BsgbKxfV.js";import"./Badge-BWKQiQcj.js";import"./Text-cPxBJcyq.js";import"./PickerPanel-G-RBUfJL.js";import"./PageHeader-CGRiWJUd.js";import"./Spinner-Bi6mQivf.js";import"./CheckboxList-Dy-kOrHq.js";import"./Checkbox-DHQwFOa3.js";import"./SwitchBase-BYEDHepN.js";import"./StyledOptionFormControl-Ca00866Q.js";import"./MoreVert-BnBEmsSM.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CXoQvajJ.js";import"./Snackbar-CXJOSA6g.js";import"./Close-Da-iw-_d.js";import"./ChipList-DaRpkRZU.js";import"./RadioButton-C4xgaHsm.js";import"./Toggle-Bi6du1gm.js";import"./Dialog-oPs8S-ZP.js";import"./ThemeProvider-B65WN4y2.js";import"./SideNav-BHwtuPtb.js";import"./Card.styled-CanWcIiN.js";const Di={title:"Components/Form"},y=document.body.style.margin,e=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,i)=>({name:`field_${i}`,label:`Field ${i}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,i)=>({title:`Section ${i+4}`,description:`Description for section ${i+4}`,collapsed:!0,fields:[[[`field_${i*5+9}`]],[[`field_${i*5+10}`]],[[`field_${i*5+11}`]],[[`field_${i*5+12}`]],[[`field_${i*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  showState
}: typeof VaryingSections.args): ReactElement => {
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
  const fields = useMemo((): FieldDef[] => [...Array(80).fill(null).map<FieldDef>((_, i) => ({
    name: \`field_\${i}\`,
    label: \`Field \${i}\`,
    type: "text"
  }))], []);
  const sections = useMemo(() => [{
    title: "Section 1",
    description: "Description for section 1",
    collapsed: true,
    fields: [
    // row 1
    [["field_1"]], [["field_2"]]]
  }, {
    title: "Section 2",
    description: "Description for section 2",
    collapsed: false,
    fields: [
    // row 1
    [["field_3"]]]
  }, {
    title: "Section 3",
    description: "Description for section 3",
    collapsed: false,
    fields: [
    // row 1
    [["field_4"]], [["field_5"]], [["field_6"]], [["field_7"]], [["field_8"]]]
  }, ...Array(10).fill(null).map((_, i) => ({
    title: \`Section \${i + 4}\`,
    description: \`Description for section \${i + 4}\`,
    collapsed: true,
    fields: [
    // row 1
    [[\`field_\${i * 5 + 9}\`]], [[\`field_\${i * 5 + 10}\`]], [[\`field_\${i * 5 + 11}\`]], [[\`field_\${i * 5 + 12}\`]], [[\`field_\${i * 5 + 13}\`]]]
  })), {
    title: "Section 14",
    description: "Description for section 14",
    collapsed: false,
    fields: [
    // row 1
    [["field_59"]], [["field_60"]], [["field_61"]], [["field_62"]], [["field_63"]]]
  }, {
    title: "Section 15",
    description: "Description for section 15",
    collapsed: false,
    fields: [
    // row 1
    [["field_64"]]]
  }], []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Varying Sections" fields={fields} sections={sections} />
            </div>
        </>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const xi=["VaryingSections"];export{e as VaryingSections,xi as __namedExportsOrder,Di as default};
