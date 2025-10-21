import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as v}from"./index-ePW8zFKp.js";import{P as k,a as h,b as P}from"./PickerPanel-CNh03pIa.js";import{m as S}from"./options-DEOzrsxm.js";import{C as b}from"./Chip-0jtXmB96.js";import{C}from"./StyledPopperPaper-8Ep909Ba.js";import"./identifier-vWKndVvV.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-DOp_2lHr.js";import"./createSvgIcon-JtMyjPpt.js";import"./generateUtilityClasses-CUUJXLh7.js";import"./styled-components.browser.esm-CUKKF2J4.js";import"./ButtonBase-YTDCQqeW.js";import"./useIsFocusVisible-BxLBCNny.js";import"./ownerWindow-DvT1GKkC.js";import"./PageHeader-CGRiWJUd.js";import"./TitleWrapper-DmKVz7XJ.js";import"./Button-DrJO7SQT.js";import"./index-Ca1iOyRL.js";import"./Popper-DP0cm8Rf.js";import"./useTheme-DTRH4aGG.js";import"./useThemeWithoutDefault-Dj6yTNm1.js";import"./index-DnRBG-o-.js";import"./index-CKydZLen.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import"./DisplayText-DlqFHcnF.js";import"./ButtonRow-YhuqC_GR.js";import"./testIds-B6Pox1zA.js";import"./Text-cPxBJcyq.js";import"./FormFieldText.styled-CoekE1cZ.js";import"./MosaicContext-CjWw6F81.js";import"./formControlState-kJY1j3p4.js";import"./Spinner-Bi6mQivf.js";import"./CheckboxList-Dy-kOrHq.js";import"./Checkbox-DHQwFOa3.js";import"./SwitchBase-BYEDHepN.js";import"./StyledOptionFormControl-Ca00866Q.js";const ae={title:"Components/PickerPanel"},o=({title:a,optionsSubtitle:l,activeSubtitle:p})=>{const[c,s]=v.useState([]),m=e=>{s(u=>u.filter(d=>d.value!==e.value))};return t.jsx("div",{style:{height:"80vh"},children:t.jsx(k,{title:a,optionsSubtitle:l,options:S,onSave:e=>alert(`Save checked: ${JSON.stringify(e)}`),onCancel:()=>alert("Cancel"),activePanel:t.jsxs(h,{children:[p&&t.jsx(P,{children:"Checked Options"}),t.jsx(C,{$align:"start",$gap:[3],children:c.map(e=>t.jsx(b,{label:e.label,onDelete:()=>m(e)},e.value))})]}),onLoadMore:()=>alert("Load more options"),onCreateNew:e=>alert(`Create new option for "${e}"`)})})};o.args={title:"Picker panel",optionsSubtitle:"Available Options",activeSubtitle:"Checked Options"};o.argTypes={title:{name:"Title"},optionsSubtitle:{name:"Options Subtitle"},activeSubtitle:{name:"Active Options Subtitle"}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
  title,
  optionsSubtitle,
  activeSubtitle
}: typeof Playground.args): ReactElement => {
  const [checked, setChecked] = React.useState<MosaicLabelValue[]>([]);
  const onOptionRemove = (option: MosaicLabelValue) => {
    setChecked(checked => checked.filter(item => item.value !== option.value));
  };
  return <div style={{
    height: "80vh"
  }}>
            <PickerPanel title={title} optionsSubtitle={optionsSubtitle} options={mockOptions} onSave={checked => alert(\`Save checked: \${JSON.stringify(checked)}\`)} onCancel={() => alert("Cancel")} activePanel={<PickerPanelActive>
                        {activeSubtitle && <PickerPanelSubtitle>Checked Options</PickerPanelSubtitle>}
                        <Column $align="start" $gap={[3]}>
                            {checked.map(option => <Chip key={option.value} label={option.label} onDelete={() => onOptionRemove(option)} />)}
                        </Column>
                    </PickerPanelActive>} onLoadMore={() => alert("Load more options")} onCreateNew={value => alert(\`Create new option for "\${value}"\`)} />
        </div>;
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const le=["Playground"];export{o as Playground,le as __namedExportsOrder,ae as default};
