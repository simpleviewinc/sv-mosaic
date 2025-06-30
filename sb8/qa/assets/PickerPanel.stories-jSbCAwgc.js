import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as v}from"./index-D0AnReJb.js";import{P as k,a as h,b as P,C as S}from"./PickerPanel-CDCtElFz.js";import{m as b}from"./options-DEOzrsxm.js";import{C}from"./Chip-BMBxB4HT.js";import"./identifier-C21A9frq.js";import"./sizes-CTdyEcea.js";import"./createSvgIcon-DLboviGw.js";import"./createSvgIcon-YkkRvR3V.js";import"./generateUtilityClasses-iHFtG1jj.js";import"./styled-components.browser.esm-aVcmUYMZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./PageHeader-DC2iTn04.js";import"./TitleWrapper-D4ztpYuS.js";import"./Button-Cu24UfKA.js";import"./ButtonBase-CLHtCICo.js";import"./index-Csnu-DvG.js";import"./Popper-B4A_VUge.js";import"./useTheme-4eCcP-Dc.js";import"./useThemeWithoutDefault-BHc79qG-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-D9vD66Ez.js";import"./Typography-DM2nLVeQ.js";import"./DisplayText-BRdY6ERT.js";import"./ButtonRow-DEKalGfm.js";import"./testIds-BKutUmNQ.js";import"./Text-Bw6wJuVZ.js";import"./FormFieldText.styled-DTQIdddZ.js";import"./formControlState-FGREjXRn.js";import"./Spinner-DrhQOeHK.js";import"./CheckboxList-6G7BlDZu.js";import"./Checkbox-DqndGKzg.js";import"./FormControlLabel-sQC-fLMo.js";import"./useMosaicTranslation-CoWLI8L7.js";const le={title:"Components/PickerPanel"},o=({title:a,optionsSubtitle:l,activeSubtitle:p})=>{const[c,s]=v.useState([]),m=e=>{s(u=>u.filter(d=>d.value!==e.value))};return t.jsx("div",{style:{height:"80vh"},children:t.jsx(k,{title:a,optionsSubtitle:l,options:b,onSave:e=>alert(`Save checked: ${JSON.stringify(e)}`),onCancel:()=>alert("Cancel"),activePanel:t.jsxs(h,{children:[p&&t.jsx(P,{children:"Checked Options"}),t.jsx(S,{$align:"start",$gap:[3],children:c.map(e=>t.jsx(C,{label:e.label,onDelete:()=>m(e)},e.value))})]}),onLoadMore:()=>alert("Load more options"),onCreateNew:e=>alert(`Create new option for "${e}"`)})})};o.args={title:"Picker panel",optionsSubtitle:"Available Options",activeSubtitle:"Checked Options"};o.argTypes={title:{name:"Title"},optionsSubtitle:{name:"Options Subtitle"},activeSubtitle:{name:"Active Options Subtitle"}};var i,r,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const pe=["Playground"];export{o as Playground,pe as __namedExportsOrder,le as default};
