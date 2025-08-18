import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as v}from"./index-D0AnReJb.js";import{P as k,a as h,b as P}from"./PickerPanel-D4_DzPYT.js";import{m as S}from"./options-DEOzrsxm.js";import{C as b}from"./Chip-CpsUtANy.js";import{C}from"./StyledPopperPaper-DKpxPU4i.js";import"./identifier-DOqdnZ6L.js";import"./sizes-DkIXWPpc.js";import"./createSvgIcon-B2sN9389.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./PageHeader-Rtx_tFBF.js";import"./TitleWrapper-CQxWIXzH.js";import"./Button-CN4kYzMe.js";import"./ButtonBase-Dg-QHo0d.js";import"./index-CYsLg4TE.js";import"./Popover-BG0BPeg-.js";import"./Popper-DKTKzQfx.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CYj0-5X2.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-C5wOwzPe.js";import"./testIds-DLbO0bd9.js";import"./Text-BjwqtcAz.js";import"./FormFieldText.styled-CCsJeQGV.js";import"./formControlState-BI4toe_X.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-CIADAAOD.js";import"./Checkbox-DnVUUwfp.js";import"./StyledOptionFormControl-CmOcJT1x.js";import"./useMosaicTranslation-di9nduwf.js";const me={title:"Components/PickerPanel"},o=({title:a,optionsSubtitle:l,activeSubtitle:p})=>{const[m,c]=v.useState([]),s=e=>{c(u=>u.filter(d=>d.value!==e.value))};return t.jsx("div",{style:{height:"80vh"},children:t.jsx(k,{title:a,optionsSubtitle:l,options:S,onSave:e=>alert(`Save checked: ${JSON.stringify(e)}`),onCancel:()=>alert("Cancel"),activePanel:t.jsxs(h,{children:[p&&t.jsx(P,{children:"Checked Options"}),t.jsx(C,{$align:"start",$gap:[3],children:m.map(e=>t.jsx(b,{label:e.label,onDelete:()=>s(e)},e.value))})]}),onLoadMore:()=>alert("Load more options"),onCreateNew:e=>alert(`Create new option for "${e}"`)})})};o.args={title:"Picker panel",optionsSubtitle:"Available Options",activeSubtitle:"Checked Options"};o.argTypes={title:{name:"Title"},optionsSubtitle:{name:"Options Subtitle"},activeSubtitle:{name:"Active Options Subtitle"}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const ce=["Playground"];export{o as Playground,ce as __namedExportsOrder,me as default};
