import{j as c}from"./jsx-runtime-EKYJJIwR.js";import{r as e}from"./index-BcWw8SPZ.js";import{C}from"./ChipList-T_9FOMMC.js";import{m as n}from"./options-DEOzrsxm.js";import"./identifier-vCS-QwDM.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-CFpEEiA8.js";import"./generateUtilityClasses-DxEc1O3f.js";import"./styled-components.browser.esm-iTa7G-AD.js";import"./useIsFocusVisible-BiDRLN3G.js";import"./ExpandMore-DZ5qJANw.js";import"./Chip-CtO-XFaP.js";import"./ButtonBase-C5IHe1v7.js";import"./testIds-B6Pox1zA.js";import"./Button-Ux1FJEQf.js";import"./index-BFOXBPPy.js";import"./Popover-BsgnjFRv.js";import"./useTooltip-Ca_MnstU.js";import"./useThemeWithoutDefault-DcDKfq8w.js";import"./index-CcJIGMye.js";import"./index-lsJDjLAm.js";import"./stable-BFc8HSVh.js";const $={title:"Components/ChipList"},t=({optionCount:o,maxInitialChips:m,hasOnDelete:i})=>{const a=e.useMemo(()=>o>=0?n.slice(0,o):n,[o]),l=e.useMemo(()=>{if(i)return u=>alert(`Option delete. New options: ${JSON.stringify(u)}`)},[i]);return c.jsx(C,{options:a,maxInitialChips:m,onDelete:l})};t.args={optionCount:25,maxInitialChips:8,hasOnDelete:!1};t.argTypes={optionCount:{name:"Number of Options",control:{min:0}},maxInitialChips:{name:"Maximum Initial Chips"},hasOnDelete:{name:"Has onDelete Handler"}};var r,s,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const b=["Playground"];export{t as Playground,b as __namedExportsOrder,$ as default};
