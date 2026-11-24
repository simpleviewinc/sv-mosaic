import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-wekxHvEx.js";import{P as k,a as h,b as P}from"./PickerPanel-CfqePg2q.js";import{m as S}from"./options-DEOzrsxm.js";import{C as b}from"./Chip-hlb4pmaG.js";import{C}from"./StyledPopperPaper-BTEmDkdR.js";import"./TooltipIcon-Bg32Lmm2.js";import"./createSvgIcon-TbZ0fr-h.js";import"./identifier-DEb8G0aq.js";import"./sizes-BeWafy6f.js";import"./generateUtilityClasses-NbEjrlIW.js";import"./Add-VWMKePYD.js";import"./PageHeader-CcC-OptF.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./TitleWrapper-D3WSxBwS.js";import"./Button-BUZ6VV6G.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-69YouNVI.js";import"./ButtonBase-C7cXrk-H.js";import"./mergeSlotProps-DU4484Lo.js";import"./emotion-react.browser.esm-CeqoEiNQ.js";import"./CircularProgress-XoRRhNY7.js";import"./index-BMiqk0dF.js";import"./useTooltip-CO_soAtI.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-C7i3nYv0.js";import"./useTheme-cEQ9eIsv.js";import"./useMountWarning-xu6cFXpq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DroHY8JW.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-CMLeEZxo.js";import"./testIds-B6Pox1zA.js";import"./Text-CfL2WyGr.js";import"./FormFieldText.styled-BsjNlYvA.js";import"./MosaicContext-lnnMUzUH.js";import"./useFormControl-p_2RyLus.js";import"./formControlState-Dq1zat_P.js";import"./GlobalStyles-B7dp4lKd.js";import"./Spinner-CUCt3e5k.js";import"./CheckboxList-BIvmP8ms.js";import"./Checkbox-C781D4ZG.js";import"./SwitchBase-D6K8Fkjn.js";import"./OptionField-R5YykxyG.js";import"./FormGroup-BOW51rb4.js";import"./Clear-DlU6fmaM.js";const he={title:"Components/PickerPanel"},o=({title:a,optionsSubtitle:p,activeSubtitle:l})=>{const[m,c]=v.useState([]),s=e=>{c(u=>u.filter(d=>d.value!==e.value))};return t.jsx("div",{style:{height:"80vh"},children:t.jsx(k,{title:a,optionsSubtitle:p,options:S,onSave:e=>alert(`Save checked: ${JSON.stringify(e)}`),onCancel:()=>alert("Cancel"),activePanel:t.jsxs(h,{children:[l&&t.jsx(P,{children:"Checked Options"}),t.jsx(C,{$align:"start",$gap:[3],children:m.map(e=>t.jsx(b,{label:e.label,onDelete:()=>s(e)},e.value))})]}),onLoadMore:()=>alert("Load more options"),onCreateNew:e=>alert(`Create new option for "${e}"`)})})};o.args={title:"Picker panel",optionsSubtitle:"Available Options",activeSubtitle:"Checked Options"};o.argTypes={title:{name:"Title"},optionsSubtitle:{name:"Options Subtitle"},activeSubtitle:{name:"Active Options Subtitle"}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const Pe=["Playground"];export{o as Playground,Pe as __namedExportsOrder,he as default};
