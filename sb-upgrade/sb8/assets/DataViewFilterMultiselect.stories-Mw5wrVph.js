import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as u}from"./index-CDs2tPxN.js";import{D as g}from"./DataViewFilterMultiselect-DBNsiiVc.js";import{M as f,J as y,c as x}from"./MultiSelectHelper-DF8Zxo5z.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./theme-tUuL1bpb.js";import"./FormControlLabel-D6jwZlG2.js";import"./useThemeProps-DZj2lB8w.js";import"./formControlState-Bqc-R5cL.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useControlled-CJDj4WFd.js";import"./createSvgIcon-Ca3CxB0T.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./createSvgIcon-BGEpRDBf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-CWuiCQwo.js";import"./Button-B_QyrzNG.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./useToggle-D8hNafRh.js";import"./debounce-Dt4LOG5H.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";const ne={title:"Components/DataViewFilterMultiselect"},b=new y(x),e=new f({api:b,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),i=({showComparisons:s,limit:c})=>{const[o,r]=u.useState({comparison:"in",value:[]}),m=function(a){if(a===void 0)return r({...o,comparison:"",value:[]});r({...o,comparison:a.comparison||o.comparison,value:a.value})},p=()=>{alert("on remove")};return n.jsx(n.Fragment,{children:n.jsx(g,{label:"Multi Select Category",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:s&&["in","not_in","all","exists","not_exists"],limit:c},data:o,onRemove:p,onChange:a=>m(a)},"multi_select_category")})};i.args={showComparisons:!1,limit:25};const l=()=>{const[s,c]=u.useState({comparison:"in",value:[]}),[o,r]=u.useState({comparison:"in",value:[]}),m=function(t){if(t===void 0)return c({...s,comparison:"",value:[]});c({...s,comparison:t.comparison||s.comparison,value:t.value})},p=function(t){if(t===void 0)return r({...o,comparison:"",value:[]});r({...o,comparison:t.comparison||o.comparison,value:t.value})},a=()=>{alert("on remove")};return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Hide comparison selector"}),n.jsx(g,{label:"Multi Select Category",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e)},data:s,onRemove:a,onChange:t=>m(t)},"multi_select_category"),n.jsx("h2",{children:"Show comparison selector"}),n.jsx(g,{label:"Multi Select Category With Comparisons",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:["in","not_in","all","exists","not_exists"]},data:o,onRemove:a,onChange:t=>p(t)},"multi_select_category_with_comparisons")]})};i.__docgenInfo={description:"",methods:[],displayName:"Playground"};l.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var d,v,S;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,h,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(_=(h=l.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const ae=["Playground","KitchenSink"];export{l as KitchenSink,i as Playground,ae as __namedExportsOrder,ne as default};
