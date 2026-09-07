import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-wekxHvEx.js";import{P as k,a as h,b as P}from"./PickerPanel-SRkOx8Tl.js";import{m as S}from"./options-DEOzrsxm.js";import{C as b}from"./Chip-BCe941lM.js";import{C}from"./StyledPopperPaper-eorsSgGN.js";import"./TooltipIcon-CPXCaul4.js";import"./createSvgIcon-h9rIBQiG.js";import"./identifier-Bq1wI7MV.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BVevyrl8.js";import"./Add-SmKzKNaz.js";import"./PageHeader-7knH4mAR.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./TitleWrapper-B678JoiA.js";import"./Button-DIVFsLMo.js";import"./useId-69YouNVI.js";import"./ButtonBase-CEIt18Mr.js";import"./useSlot-VZdH5auH.js";import"./CircularProgress-PxS61-je.js";import"./index-Zzm_Wx6F.js";import"./useTooltip-B7zXsQMX.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-BqC9NAU7.js";import"./useMountWarning-Q6RqOhZJ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DQPkTHY5.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-DOqctSak.js";import"./testIds-B6Pox1zA.js";import"./Text-CfL2WyGr.js";import"./FormFieldText.styled-Dm2g3xmg.js";import"./MosaicContext-DJPbhtc9.js";import"./formControlState-Qaq2QphE.js";import"./GlobalStyles-Ylo9bxXj.js";import"./useControlled-Mt41fVm8.js";import"./Spinner-pOddc5Fg.js";import"./CheckboxList-h5W3PYVW.js";import"./Checkbox-CCK0f4bK.js";import"./SwitchBase-DgSlJAjj.js";import"./StyledOptionFormControl-B1Oz8mMA.js";import"./FormGroup-BzWjA99g.js";import"./Clear-u1SsJyJR.js";const de={title:"Components/PickerPanel"},o=({title:a,optionsSubtitle:p,activeSubtitle:l})=>{const[m,c]=v.useState([]),s=e=>{c(u=>u.filter(d=>d.value!==e.value))};return t.jsx("div",{style:{height:"80vh"},children:t.jsx(k,{title:a,optionsSubtitle:p,options:S,onSave:e=>alert(`Save checked: ${JSON.stringify(e)}`),onCancel:()=>alert("Cancel"),activePanel:t.jsxs(h,{children:[l&&t.jsx(P,{children:"Checked Options"}),t.jsx(C,{$align:"start",$gap:[3],children:m.map(e=>t.jsx(b,{label:e.label,onDelete:()=>s(e)},e.value))})]}),onLoadMore:()=>alert("Load more options"),onCreateNew:e=>alert(`Create new option for "${e}"`)})})};o.args={title:"Picker panel",optionsSubtitle:"Available Options",activeSubtitle:"Checked Options"};o.argTypes={title:{name:"Title"},optionsSubtitle:{name:"Options Subtitle"},activeSubtitle:{name:"Active Options Subtitle"}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const ve=["Playground"];export{o as Playground,ve as __namedExportsOrder,de as default};
