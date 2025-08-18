import{j as c}from"./jsx-runtime-EKYJJIwR.js";import{r as e}from"./index-D0AnReJb.js";import{C}from"./ChipList-TQ6-UhAA.js";import{m as n}from"./options-DEOzrsxm.js";import"./identifier-DOqdnZ6L.js";import"./sizes-DkIXWPpc.js";import"./createSvgIcon-B2sN9389.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./ExpandMore-JUNNgEdW.js";import"./Chip-CpsUtANy.js";import"./ButtonBase-Dg-QHo0d.js";import"./testIds-DLbO0bd9.js";import"./Button-CN4kYzMe.js";import"./index-CYsLg4TE.js";import"./Popover-BG0BPeg-.js";import"./Popper-DKTKzQfx.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";const A={title:"Components/ChipList"},t=({optionCount:o,maxInitialChips:m,hasOnDelete:i})=>{const a=e.useMemo(()=>o>=0?n.slice(0,o):n,[o]),l=e.useMemo(()=>{if(i)return u=>alert(`Option delete. New options: ${JSON.stringify(u)}`)},[i]);return c.jsx(C,{options:a,maxInitialChips:m,onDelete:l})};t.args={optionCount:25,maxInitialChips:8,hasOnDelete:!1};t.argTypes={optionCount:{name:"Number of Options",control:{min:0}},maxInitialChips:{name:"Maximum Initial Chips"},hasOnDelete:{name:"Has onDelete Handler"}};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const B=["Playground"];export{t as Playground,B as __namedExportsOrder,A as default};
