import{r as i,R as t}from"./index-D0AnReJb.js";import{s as m}from"./styled-components.browser.esm-8X0uN6v9.js";import{u as v,f as D,F as T,g as y,h as _}from"./index-fB_RUnu1.js";import{D as x}from"./DataViewPrimaryFilter-C-ed-3Gw.js";import{B as h,t as A}from"./sizes-DkIXWPpc.js";import{t as b}from"./testIds-oQNwr1rf.js";import{a as F,D as w}from"./DataViewFilterDropdownButtons-B-tY8L0F.js";import{b as O}from"./Button-Dlaq5vsb.js";import{a as C}from"./formats-CMvQHWsT.js";import{a as V}from"./MosaicContext-Y61KIvFP.js";const I=m.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${h.sm};
`,R=m.div`
	display: flex;
	flex-direction: row;
`,k=m.div`
	display: flex;
	flex-direction: column;
`,N=m.ul`
	border-right: 2px solid ${A.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,M=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:h.sm}];function B(e){const d=v({data:{rangeStart:"rangeStart"in e?e.rangeStart:void 0,rangeEnd:"rangeEnd"in e?e.rangeEnd:void 0}}),{state:o,methods:{setFormValues:r}}=d,{rangeStart:l,rangeEnd:n}=o.data,[E,f]=i.useState("selectedOption"in e?e.selectedOption:void 0),S=i.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:n},validators:[{fn:D,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:l},validators:[{fn:D,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[n,l]),a=i.useCallback(c=>{e.onChange({option:c}),e.onClose()},[e.onChange,e.onClose]),s=i.useCallback(()=>{r({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0}),f(void 0)},[r]),u=i.useCallback(()=>{!l&&!n?e.onChange(void 0):e.onChange({rangeStart:l,rangeEnd:n}),e.onClose()},[e.onChange,e.onClose,l,n]),g=Object.values(o.errors).filter(Boolean).length>0;return t.createElement(R,{"data-testid":b.DATA_VIEW_FILTER_DATE_CONTENT},"options"in e&&e.options&&t.createElement(k,null,t.createElement(N,{"data-testid":b.DATA_VIEW_FILTER_DATE_OPTIONS},e.options.map(c=>t.createElement(O,{key:c.value,label:c.label,selected:E===c.value,color:"blue",onClick:()=>a(c.value),truncateText:!0,title:!0})))),t.createElement(I,null,t.createElement("div",{"data-testid":"dataview-filter-date-inputs"},t.createElement(T,{...d,fields:S,sections:M,fullHeight:!1,spacing:"compact",autoFocus:!0})),t.createElement(F,{onApply:u,onClear:s,disableApply:g})))}const L=m.span``;function X(e){var d,o,r;const[l,n]=i.useState(null),E=function(a){n(a.currentTarget)},f=function(){n(null)},S=i.useMemo(()=>{if(e.data){if("rangeStart"in e.data||"rangeEnd"in e.data){const a=e.data.rangeStart!==void 0,s=e.data.rangeEnd!==void 0,u=a?y(e.data.rangeStart,C):void 0,g=s?y(e.data.rangeEnd,C):void 0;return _(e.data.rangeStart,e.data.rangeEnd)?[{type:"term",label:u}]:a&&s?[{type:"term",label:u},{type:"operator",label:"to"},{type:"term",label:g}]:a?[{type:"operator",label:"from"},{type:"term",label:u}]:[{type:"operator",label:"to"},{type:"term",label:g}]}else if("option"in e.data&&e.data.option!==void 0&&e.args.options!==void 0){const a=e.args.options.find(({value:s})=>"option"in e.data&&s===e.data.option);if(a)return[{type:"term",label:a.label}]}}},[e.args.options,e.data]);return t.createElement(L,null,t.createElement(x,{label:e.label,parts:S,onClick:E}),t.createElement(w,{anchorEl:l,onClose:f},t.createElement(B,{onClose:f,onChange:e.onChange,rangeStart:e.data&&"rangeStart"in e.data?(d=e.data)===null||d===void 0?void 0:d.rangeStart:void 0,rangeEnd:e.data&&"rangeEnd"in e.data?(o=e.data)===null||o===void 0?void 0:o.rangeEnd:void 0,options:e.args.options,selectedOption:e.data&&"option"in e.data?(r=e.data)===null||r===void 0?void 0:r.option:void 0,minDate:e==null?void 0:e.args.minDate})))}const W={choose_a_date___:"Choose a date..."},P={en:W};V({prefix:"DataViewFilterDate",bundle:P});export{X as D};
