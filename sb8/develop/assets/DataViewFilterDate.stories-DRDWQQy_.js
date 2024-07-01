import{j as l}from"./jsx-runtime-CexXSJP5.js";import{r as _}from"./index-BP8_t0zE.js";import{D as y}from"./index-DwRL4HI-.js";const h={title:"Components/DataViewFilterDate"},b=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"A really really long time ago",value:"a_really_really_long_time_ago"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"},{label:"Last 4 years",value:"last_4_years"},{label:"Last 5 years",value:"last_5_years"},{label:"Last 6 years",value:"last_6_years"},{label:"Last 7 years",value:"last_7_years"},{label:"Last 8 years",value:"last_8_years"},{label:"Last 9 years",value:"last_9_years"}],a=({showOptions:t})=>{const[r,i]=_.useState({}),o=b.slice(0,t),s=function(u){i(u)},e=()=>{};return l.jsx(y,{label:"Date filter example",data:r,args:{options:t>0?o:void 0},onRemove:e,onChange:s})};a.args={showOptions:0};a.argTypes={showOptions:{name:"Number of options to show",control:{type:"range",min:0,max:b.length}}};const n=()=>{const[t,r]=_.useState({regular:{},options:{}}),i=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"}],o=function(e,u){const f={...t,[e]:u};r(f)},s=()=>{};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsx(y,{label:"Regular Date filter",data:t.regular,onRemove:s,onChange:e=>o("regular",e),args:{options:void 0}}),l.jsx(y,{label:"Date filter with options",data:t.options,args:{options:i},onRemove:s,onChange:e=>o("options",e)})]})};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  showOptions
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({});
  const options = optionLibrary.slice(0, showOptions);
  const onChange = function (data) {
    setState(data);
  };
  const onRemove = () => undefined;
  return <DataViewFilterDate label="Date filter example" data={state} args={{
    options: showOptions > 0 ? options : undefined
  }} onRemove={onRemove} onChange={onChange} />;
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState({
    regular: {},
    options: {}
  });
  const options: MosaicLabelValue[] = [{
    label: "Today",
    value: "today"
  }, {
    label: "Yesterday",
    value: "yesterday"
  }, {
    label: "Tomorrow",
    value: "tomorrow"
  }, {
    label: "Last year",
    value: "last_year"
  }, {
    label: "Last 2 years",
    value: "last_2_years"
  }, {
    label: "Last 3 years",
    value: "last_3_years"
  }];
  const onChange = function (type, data) {
    const newState = {
      ...state,
      [type]: data
    };
    setState(newState);
  };
  const onRemove = () => undefined;
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
            <DataViewFilterDate label="Regular Date filter" data={state.regular} onRemove={onRemove} onChange={data => onChange("regular", data)} args={{
      options: undefined
    }} />
            <DataViewFilterDate label="Date filter with options" data={state.options} args={{
      options
    }} onRemove={onRemove} onChange={data => onChange("options", data)} />
        </div>;
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const w=["Playground","KitchenSink"],L=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:n,Playground:a,__namedExportsOrder:w,default:h},Symbol.toStringTag,{value:"Module"}));export{a as P,L as s};
