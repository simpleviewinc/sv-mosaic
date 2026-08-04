import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./index-CDlOlYQx.js";import{C}from"./ChipList-BnPd1b7I.js";import{m as n}from"./options-DEOzrsxm.js";import"./createSvgIcon-BOHM49HM.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BR9nxWVt.js";import"./ExpandMore-D30LWCsE.js";import"./Chip-BvxPiOpy.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./useSlot-BF1fWNxP.js";import"./ButtonBase-CSsk5_gr.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./testIds-B6Pox1zA.js";import"./Button-J6Kw363Y.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-aPK7NacD.js";import"./index-fPYtWVub.js";import"./useTooltip-Hifh6sld.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./Popover-CfJhcp6M.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./stable-BFc8HSVh.js";const v={title:"Components/ChipList"},t=({optionCount:o,maxInitialChips:m,hasOnDelete:i})=>{const a=e.useMemo(()=>o>=0?n.slice(0,o):n,[o]),l=e.useMemo(()=>{if(i)return u=>alert(`Option delete. New options: ${JSON.stringify(u)}`)},[i]);return c.jsx(C,{options:a,maxInitialChips:m,onDelete:l})};t.args={optionCount:25,maxInitialChips:8,hasOnDelete:!1};t.argTypes={optionCount:{name:"Number of Options",control:{min:0}},maxInitialChips:{name:"Maximum Initial Chips"},hasOnDelete:{name:"Has onDelete Handler"}};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  optionCount,
  maxInitialChips,
  hasOnDelete
}: typeof Playground.args): ReactElement => {
  const options = useMemo<ChipListProps["options"]>(() => {
    return optionCount >= 0 ? mockOptions.slice(0, optionCount) : mockOptions;
  }, [optionCount]);
  const onDelete = useMemo(() => {
    if (!hasOnDelete) {
      return;
    }
    return (options: ChipListProps["options"]) => alert(\`Option delete. New options: \${JSON.stringify(options)}\`);
  }, [hasOnDelete]);
  return <ChipList options={options} maxInitialChips={maxInitialChips} onDelete={onDelete} />;
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const z=["Playground"];export{t as Playground,z as __namedExportsOrder,v as default};
