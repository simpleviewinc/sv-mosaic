import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./index-wekxHvEx.js";import{C}from"./ChipList-D-Z4RzuG.js";import{m as n}from"./options-DEOzrsxm.js";import"./createSvgIcon-TbZ0fr-h.js";import"./identifier-DEb8G0aq.js";import"./sizes-BeWafy6f.js";import"./generateUtilityClasses-NbEjrlIW.js";import"./ExpandMore-DMteFeWA.js";import"./Chip-hlb4pmaG.js";import"./Clear-DlU6fmaM.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C7cXrk-H.js";import"./mergeSlotProps-DU4484Lo.js";import"./emotion-react.browser.esm-CeqoEiNQ.js";import"./testIds-B6Pox1zA.js";import"./Button-BUZ6VV6G.js";import"./useId-69YouNVI.js";import"./CircularProgress-XoRRhNY7.js";import"./index-BMiqk0dF.js";import"./useTooltip-CO_soAtI.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-C7i3nYv0.js";import"./useTheme-cEQ9eIsv.js";import"./useMountWarning-xu6cFXpq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./stable-BFc8HSVh.js";const B={title:"Components/ChipList"},t=({optionCount:o,maxInitialChips:m,hasOnDelete:i})=>{const a=e.useMemo(()=>o>=0?n.slice(0,o):n,[o]),l=e.useMemo(()=>{if(i)return u=>alert(`Option delete. New options: ${JSON.stringify(u)}`)},[i]);return c.jsx(C,{options:a,maxInitialChips:m,onDelete:l})};t.args={optionCount:25,maxInitialChips:8,hasOnDelete:!1};t.argTypes={optionCount:{name:"Number of Options",control:{min:0}},maxInitialChips:{name:"Maximum Initial Chips"},hasOnDelete:{name:"Has onDelete Handler"}};var r,p,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const F=["Playground"];export{t as Playground,F as __namedExportsOrder,B as default};
