import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as v}from"./index-lnx8lKqn.js";import{P as k,a as h,b as P}from"./PickerPanel-BfvGlJ8s.js";import{m as S}from"./options-DEOzrsxm.js";import{C as b}from"./Chip-CbNdHOhT.js";import{C}from"./StyledPopperPaper-DUCM88TM.js";import"./TooltipIcon-CIvFjYBP.js";import"./identifier-DL_MWCt5.js";import"./createSvgIcon-DtmGrA-N.js";import"./generateUtilityClasses-BXdgOgaD.js";import"./useIsFocusVisible-CUUNsth7.js";import"./PageHeader-nP7hDafL.js";import"./sizes-BcVUBVYw.js";import"./styled-components.browser.esm-DqsT1pAc.js";import"./TitleWrapper-BzZp6KFF.js";import"./Button-CNe7umd6.js";import"./ButtonBase-CvKKHeWu.js";import"./index-BXfeNjdK.js";import"./Popover-BteNYKgc.js";import"./useTooltip-DxGcUIuP.js";import"./useThemeWithoutDefault-DtYdwAl6.js";import"./index-DJZ3_iYS.js";import"./index-BySu-MVC.js";import"./containerQuery-BGTno4Nd.js";import"./ChevronLeft-vDd10AKU.js";import"./Typography-BDSgj_cw.js";import"./DisplayText-DNcU0R6O.js";import"./ButtonRow-BvtHToaG.js";import"./testIds-B6Pox1zA.js";import"./Text-6QT-9GAX.js";import"./FormFieldText.styled-C8FVpgqR.js";import"./MosaicContext-Bd_KQqXt.js";import"./formControlState-DQjLAsCB.js";import"./Spinner-9l6dePBI.js";import"./CheckboxList-6gebeIaX.js";import"./Checkbox-Bd_VDYHl.js";import"./SwitchBase-gKBphwxl.js";import"./StyledOptionFormControl-IcAt2LqD.js";const ne={title:"Components/PickerPanel"},o=({title:a,optionsSubtitle:l,activeSubtitle:p})=>{const[c,s]=v.useState([]),m=e=>{s(u=>u.filter(d=>d.value!==e.value))};return t.jsx("div",{style:{height:"80vh"},children:t.jsx(k,{title:a,optionsSubtitle:l,options:S,onSave:e=>alert(`Save checked: ${JSON.stringify(e)}`),onCancel:()=>alert("Cancel"),activePanel:t.jsxs(h,{children:[p&&t.jsx(P,{children:"Checked Options"}),t.jsx(C,{$align:"start",$gap:[3],children:c.map(e=>t.jsx(b,{label:e.label,onDelete:()=>m(e)},e.value))})]}),onLoadMore:()=>alert("Load more options"),onCreateNew:e=>alert(`Create new option for "${e}"`)})})};o.args={title:"Picker panel",optionsSubtitle:"Available Options",activeSubtitle:"Checked Options"};o.argTypes={title:{name:"Title"},optionsSubtitle:{name:"Options Subtitle"},activeSubtitle:{name:"Active Options Subtitle"}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const ae=["Playground"];export{o as Playground,ae as __namedExportsOrder,ne as default};
