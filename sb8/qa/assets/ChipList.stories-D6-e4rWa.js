import{j as c}from"./jsx-runtime-EKYJJIwR.js";import{r as e}from"./index-D0AnReJb.js";import{C}from"./ChipList-DNkGOHFk.js";import{m as n}from"./options-DEOzrsxm.js";import"./Chip-IkNXxPJK.js";import"./DefaultPropsProvider-Zw7se0ql.js";import"./sizes-C0LBJJ09.js";import"./createSvgIcon-CfA1Cyex.js";import"./createSvgIcon-18YkCsWd.js";import"./generateUtilityClasses-CVch8Fxh.js";import"./styled-components.browser.esm-CXkPWv0m.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./ButtonBase-CDkrym0l.js";import"./testIds-Dso8kRSM.js";import"./Button-DaAMSO0F.js";import"./index-BnPRUgpe.js";import"./Popper-DGZlEdwR.js";import"./useTheme-Bm22bs_q.js";import"./useThemeWithoutDefault-DxXNdoSH.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";const v={title:"Components/ChipList"},t=({optionCount:o,maxInitialChips:m,hasOnDelete:i})=>{const a=e.useMemo(()=>o>=0?n.slice(0,o):n,[o]),l=e.useMemo(()=>{if(i)return u=>alert(`Option delete. New options: ${JSON.stringify(u)}`)},[i]);return c.jsx(C,{options:a,maxInitialChips:m,onDelete:l})};t.args={optionCount:25,maxInitialChips:8,hasOnDelete:!1};t.argTypes={optionCount:{name:"Number of Options",control:{min:0}},maxInitialChips:{name:"Maximum Initial Chips"},hasOnDelete:{name:"Has onDelete Handler"}};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
