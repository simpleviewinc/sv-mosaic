import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as u}from"./index-CDs2tPxN.js";import{D as g}from"./DataViewFilterMultiselect-j9-y8tS-.js";import"./isSymbol-BfMcYl5G.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./Button-jXQJtfPH.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./ButtonRow-D8Ypu3LS.js";import"./theme-tUuL1bpb.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./CheckboxList-Br5Y5VJF.js";import"./Checkbox-DZF7KNvv.js";import{M as f,J as x,c as b}from"./MultiSelectHelper-B8WyU67N.js";import"./DataViewPrimaryFilter-DONY8g58.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./debounce-Dt4LOG5H.js";import"./Spinner-Dq1xuCGl.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./SubtitleText-C2xUiS7C.js";import"./formControlState-Bqc-R5cL.js";import"./FormControlLabel-D6jwZlG2.js";import"./ButtonBase-cV3lp3kg.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./useToggle-D8hNafRh.js";import"./reactTools-i2anJKce.js";const ie={title:"Components/DataViewFilterMultiselect"},y=new x(b),e=new f({api:y,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),r=({showComparisons:s,limit:l})=>{const[o,i]=u.useState({comparison:"in",value:[]}),m=function(a){if(a===void 0)return i({...o,comparison:"",value:[]});i({...o,comparison:a.comparison||o.comparison,value:a.value})},p=()=>{alert("on remove")};return n.jsx(n.Fragment,{children:n.jsx(g,{label:"Multi Select Category",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:s&&["in","not_in","all","exists","not_exists"],limit:l},data:o,onRemove:p,onChange:a=>m(a)},"multi_select_category")})};r.args={showComparisons:!1,limit:25};const c=()=>{const[s,l]=u.useState({comparison:"in",value:[]}),[o,i]=u.useState({comparison:"in",value:[]}),m=function(t){if(t===void 0)return l({...s,comparison:"",value:[]});l({...s,comparison:t.comparison||s.comparison,value:t.value})},p=function(t){if(t===void 0)return i({...o,comparison:"",value:[]});i({...o,comparison:t.comparison||o.comparison,value:t.value})},a=()=>{alert("on remove")};return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Hide comparison selector"}),n.jsx(g,{label:"Multi Select Category",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e)},data:s,onRemove:a,onChange:t=>m(t)},"multi_select_category"),n.jsx("h2",{children:"Show comparison selector"}),n.jsx(g,{label:"Multi Select Category With Comparisons",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:["in","not_in","all","exists","not_exists"]},data:o,onRemove:a,onChange:t=>p(t)},"multi_select_category_with_comparisons")]})};var d,v,S;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  showComparisons,
  limit
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
    comparison: "in",
    value: []
  });
  const onChange = function (data) {
    if (data === undefined) return setState({
      ...state,
      comparison: "",
      value: []
    });
    setState({
      ...state,
      comparison: data.comparison || state.comparison,
      value: data.value
    });
  };
  const onRemove = () => {
    alert("on remove");
  };
  return <>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: showComparisons && ["in", "not_in", "all", "exists", "not_exists"],
      limit
    }} data={state} onRemove={onRemove} onChange={value => onChange(value)} />
        </>;
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,h,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
    comparison: "in",
    value: []
  });
  const [stateComparisons, setStateComparisons] = useState<DataViewFilterMultiselectProps["data"]>({
    comparison: "in",
    value: []
  });
  const onChange = function (data) {
    if (data === undefined) return setState({
      ...state,
      comparison: "",
      value: []
    });
    setState({
      ...state,
      comparison: data.comparison || state.comparison,
      value: data.value
    });
  };
  const onChangeComparisons = function (data) {
    if (data === undefined) return setStateComparisons({
      ...stateComparisons,
      comparison: "",
      value: []
    });
    setStateComparisons({
      ...stateComparisons,
      comparison: data.comparison || stateComparisons.comparison,
      value: data.value
    });
  };
  const onRemove = () => {
    alert("on remove");
  };
  return <>
            <h2>Hide comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper)
    }} data={state} onRemove={onRemove} onChange={value => onChange(value)} />

            <h2>Show comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category_with_comparisons" label="Multi Select Category With Comparisons" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: ["in", "not_in", "all", "exists", "not_exists"]
    }} data={stateComparisons} onRemove={onRemove} onChange={value => onChangeComparisons(value)} />
        </>;
}`,...(_=(h=c.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const re=["Playground","KitchenSink"];export{c as KitchenSink,r as Playground,re as __namedExportsOrder,ie as default};
