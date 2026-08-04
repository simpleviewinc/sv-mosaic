import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-CDlOlYQx.js";import{P as k,a as h,b as P}from"./PickerPanel-DnLdQwbM.js";import{m as S}from"./options-DEOzrsxm.js";import{C as b}from"./Chip-BvxPiOpy.js";import{C}from"./StyledPopperPaper-CblYxRKp.js";import"./TooltipIcon-if6WdNgf.js";import"./createSvgIcon-BOHM49HM.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BR9nxWVt.js";import"./PageHeader-DIWebNsC.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./TitleWrapper-DJ3oxuZn.js";import"./Button-J6Kw363Y.js";import"./useId-CJY4DrkM.js";import"./ButtonBase-CSsk5_gr.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./CircularProgress-aPK7NacD.js";import"./index-fPYtWVub.js";import"./useTooltip-Hifh6sld.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./Popover-CfJhcp6M.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-BrbIZV1W.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-y0O1VC79.js";import"./testIds-B6Pox1zA.js";import"./Text-B-CII8XP.js";import"./FormFieldText.styled-D7KmSwYO.js";import"./MosaicContext-OO7tZJdO.js";import"./formControlState-CJTic6Sf.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./Spinner-By1vTLAu.js";import"./CheckboxList-D9FFWuZY.js";import"./Checkbox-DXOuBkLC.js";import"./SwitchBase-BlAgGKJx.js";import"./StyledOptionFormControl-BaE74fbD.js";import"./FormGroup-DqpNDYHy.js";const ue={title:"Components/PickerPanel"},o=({title:a,optionsSubtitle:l,activeSubtitle:p})=>{const[m,c]=v.useState([]),s=e=>{c(u=>u.filter(d=>d.value!==e.value))};return t.jsx("div",{style:{height:"80vh"},children:t.jsx(k,{title:a,optionsSubtitle:l,options:S,onSave:e=>alert(`Save checked: ${JSON.stringify(e)}`),onCancel:()=>alert("Cancel"),activePanel:t.jsxs(h,{children:[p&&t.jsx(P,{children:"Checked Options"}),t.jsx(C,{$align:"start",$gap:[3],children:m.map(e=>t.jsx(b,{label:e.label,onDelete:()=>s(e)},e.value))})]}),onLoadMore:()=>alert("Load more options"),onCreateNew:e=>alert(`Create new option for "${e}"`)})})};o.args={title:"Picker panel",optionsSubtitle:"Available Options",activeSubtitle:"Checked Options"};o.argTypes={title:{name:"Title"},optionsSubtitle:{name:"Options Subtitle"},activeSubtitle:{name:"Active Options Subtitle"}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const de=["Playground"];export{o as Playground,de as __namedExportsOrder,ue as default};
