import{j as l}from"./jsx-runtime-nGUw9YhZ.js";import{r as b}from"./index-BP8_t0zE.js";import{D as u}from"./index-BP9jMc-q.js";const f={title:"Components/DataViewFilterDate"},m=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"A really really long time ago",value:"a_really_really_long_time_ago"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"},{label:"Last 4 years",value:"last_4_years"},{label:"Last 5 years",value:"last_5_years"},{label:"Last 6 years",value:"last_6_years"},{label:"Last 7 years",value:"last_7_years"},{label:"Last 8 years",value:"last_8_years"},{label:"Last 9 years",value:"last_9_years"}],e=({showOptions:t})=>{const[o,r]=b.useState({}),n=m.slice(0,t),a=function(i){r(i)};return l.jsx(u,{label:"Date filter example",data:o,args:{options:t>0?n:void 0},onChange:a})};e.args={showOptions:0};e.argTypes={showOptions:{name:"Number of options to show",control:{type:"range",min:0,max:m.length}}};const s=()=>{const[t,o]=b.useState({regular:{},options:{}}),r=[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Tomorrow",value:"tomorrow"},{label:"Last year",value:"last_year"},{label:"Last 2 years",value:"last_2_years"},{label:"Last 3 years",value:"last_3_years"}],n=function(a,i){const v={...t,[a]:i};o(v)};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsx(u,{label:"Regular Date filter",data:t.regular,onChange:a=>n("regular",a),args:{options:void 0}}),l.jsx(u,{label:"Date filter with options",data:t.options,args:{options:r},onChange:a=>n("options",a)})]})};var y,p,c;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`({
  showOptions
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({});
  const options = optionLibrary.slice(0, showOptions);
  const onChange = function (data) {
    setState(data);
  };
  return <DataViewFilterDate label="Date filter example" data={state} args={{
    options: showOptions > 0 ? options : undefined
  }} onChange={onChange} />;
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,g,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(): ReactElement => {
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
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
            <DataViewFilterDate label="Regular Date filter" data={state.regular} onChange={data => onChange("regular", data)} args={{
      options: undefined
    }} />
            <DataViewFilterDate label="Date filter with options" data={state.options} args={{
      options
    }} onChange={data => onChange("options", data)} />
        </div>;
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const h=["Playground","KitchenSink"],x=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:s,Playground:e,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{e as P,x as s};
