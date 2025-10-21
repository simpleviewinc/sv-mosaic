import{j as a}from"./jsx-runtime-EKYJJIwR.js";import{r as p}from"./index-ePW8zFKp.js";import"./index-B-yLbyMH.js";import{J as b,c as u,M as w}from"./MultiSelectHelper-DgYfTDKm.js";import{D as g}from"./DataViewFilterMultiselect-DHd4kAX1.js";const y={title:"Components/DataViewFilterMultiselect"},o=({showComparisons:t,itemsPerLoad:s,totalAvailableOptions:i})=>{const[n,l]=p.useState({comparison:"in",value:[]}),r=p.useMemo(()=>{const e=new b(i>-1?u.slice(0,i):u);return new w({api:e,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"})},[i]),m=function(e){if(e===void 0)return l({...n,comparison:"",value:[]});l({...n,comparison:e.comparison||n.comparison,value:e.value})};return a.jsx(a.Fragment,{children:a.jsx(g,{label:"Multi Select Category",args:{getOptions:async e=>(await new Promise(f=>setTimeout(()=>f(null),2e3)),r.getOptions.bind(r)(e)),getSelected:r.getSelected.bind(r),comparisons:t&&["in","not_in","all","exists","not_exists"],limit:s},data:n,onChange:e=>m(e)},"multi_select_category")})};o.args={showComparisons:!1,itemsPerLoad:25,totalAvailableOptions:-1};o.argTypes={showComparisons:{name:"Show Comparisons"},itemsPerLoad:{name:"Items Per Load"},totalAvailableOptions:{name:"Total Available Options"}};const c=()=>{const t=p.useMemo(()=>{const e=new b(u);return new w({api:e,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"})},[]),[s,i]=p.useState({comparison:"in",value:[]}),[n,l]=p.useState({comparison:"in",value:[]}),r=function(e){if(e===void 0)return i({...s,comparison:"",value:[]});i({...s,comparison:e.comparison||s.comparison,value:e.value})},m=function(e){if(e===void 0)return l({...n,comparison:"",value:[]});l({...n,comparison:e.comparison||n.comparison,value:e.value})};return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Hide comparison selector"}),a.jsx(g,{label:"Multi Select Category Without Comparisons",args:{getOptions:t.getOptions.bind(t),getSelected:t.getSelected.bind(t)},data:s,onChange:e=>r(e)},"multi_select_category"),a.jsx("h2",{children:"Show comparison selector"}),a.jsx(g,{label:"Multi Select Category With Comparisons",args:{getOptions:t.getOptions.bind(t),getSelected:t.getSelected.bind(t),comparisons:["in","not_in","all","exists","not_exists"]},data:n,onChange:e=>m(e)},"multi_select_category_with_comparisons")]})};var d,C,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`({
  showComparisons,
  itemsPerLoad,
  totalAvailableOptions
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
    comparison: "in",
    value: []
  });
  const categoriesHelper = React.useMemo(() => {
    const categoriesApi = new JSONDB(totalAvailableOptions > -1 ? categories.slice(0, totalAvailableOptions) : categories);
    return new MultiSelectHelper({
      api: categoriesApi,
      labelColumn: "tag",
      valueColumn: "id",
      sortColumn: "sort_tag"
    });
  }, [totalAvailableOptions]);
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
  return <>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category" args={{
      getOptions: async params => {
        await new Promise(resolve => setTimeout(() => resolve(null), 2_000));
        return categoriesHelper.getOptions.bind(categoriesHelper)(params);
      },
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: showComparisons && ["in", "not_in", "all", "exists", "not_exists"],
      limit: itemsPerLoad
    }} data={state} onChange={value => onChange(value)} />
        </>;
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var v,h,_;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`(): ReactElement => {
  const categoriesHelper = React.useMemo(() => {
    const categoriesApi = new JSONDB(categories);
    return new MultiSelectHelper({
      api: categoriesApi,
      labelColumn: "tag",
      valueColumn: "id",
      sortColumn: "sort_tag"
    });
  }, []);
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
  return <>
            <h2>Hide comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category Without Comparisons" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper)
    }} data={state} onChange={value => onChange(value)} />

            <h2>Show comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category_with_comparisons" label="Multi Select Category With Comparisons" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: ["in", "not_in", "all", "exists", "not_exists"]
    }} data={stateComparisons} onChange={value => onChangeComparisons(value)} />
        </>;
}`,...(_=(h=c.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const M=["Playground","KitchenSink"],j=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:c,Playground:o,__namedExportsOrder:M,default:y},Symbol.toStringTag,{value:"Module"}));export{o as P,j as s};
