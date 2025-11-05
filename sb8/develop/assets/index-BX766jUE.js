import{r as i,R as t}from"./index-ePW8zFKp.js";import{s as m}from"./styled-components.browser.esm-CUKKF2J4.js";import{u as v,n as D,F as T,h as y,k as b,o as _}from"./index--_cQQTL2.js";import{D as x}from"./DataViewPrimaryFilter-Cf3qZr3C.js";import{B as C,t as A}from"./sizes-1ZdlMWGC.js";import{t as h}from"./testIds-B6Pox1zA.js";import{a as F,D as w}from"./DataViewFilterDropdownButtons-_2SqC-T2.js";import{b as O}from"./Button-BUa6dDgD.js";import{a as V}from"./MosaicContext-CjWw6F81.js";const I=m.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${C.sm};
`,R=m.div`
	display: flex;
	flex-direction: row;
`,k=m.div`
	display: flex;
	flex-direction: column;
`,N=m.ul`
	border-right: 1px solid ${A.color.gray[300]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,M=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:C.sm}];function B(e){const d=v({data:{rangeStart:"rangeStart"in e?e.rangeStart:void 0,rangeEnd:"rangeEnd"in e?e.rangeEnd:void 0}}),{state:o,methods:{setFormValues:r}}=d,{rangeStart:l,rangeEnd:n}=o.data,[E,f]=i.useState("selectedOption"in e?e.selectedOption:void 0),S=i.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:n},validators:[{fn:D,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:l},validators:[{fn:D,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[n,l]),a=i.useCallback(c=>{e.onChange({option:c}),e.onClose()},[e.onChange,e.onClose]),s=i.useCallback(()=>{r({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0}),f(void 0)},[r]),u=i.useCallback(()=>{!l&&!n?e.onChange(void 0):e.onChange({rangeStart:l,rangeEnd:n}),e.onClose()},[e.onChange,e.onClose,l,n]),g=Object.values(o.errors).filter(Boolean).length>0;return t.createElement(R,{"data-testid":h.DATA_VIEW_FILTER_DATE_CONTENT},"options"in e&&e.options&&t.createElement(k,null,t.createElement(N,{"data-testid":h.DATA_VIEW_FILTER_DATE_OPTIONS},e.options.map(c=>t.createElement(O,{key:c.value,label:c.label,selected:E===c.value,onClick:()=>a(c.value),truncateText:!0,title:!0})))),t.createElement(I,null,t.createElement("div",{"data-testid":"dataview-filter-date-inputs"},t.createElement(T,{...d,fields:S,sections:M,fullHeight:!1,spacing:"compact",autoFocus:!0})),t.createElement(F,{onApply:u,onClear:s,disableApply:g})))}const L=m.span``;function U(e){var d,o,r;const[l,n]=i.useState(null),E=function(a){n(a.currentTarget)},f=function(){n(null)},S=i.useMemo(()=>{if(e.data){if("rangeStart"in e.data||"rangeEnd"in e.data){const a=e.data.rangeStart!==void 0,s=e.data.rangeEnd!==void 0,u=a?y(e.data.rangeStart,b):void 0,g=s?y(e.data.rangeEnd,b):void 0;return _(e.data.rangeStart,e.data.rangeEnd)?[{type:"term",label:u}]:a&&s?[{type:"term",label:u},{type:"operator",label:"to"},{type:"term",label:g}]:a?[{type:"operator",label:"from"},{type:"term",label:u}]:[{type:"operator",label:"to"},{type:"term",label:g}]}else if("option"in e.data&&e.data.option!==void 0&&e.args.options!==void 0){const a=e.args.options.find(({value:s})=>"option"in e.data&&s===e.data.option);if(a)return[{type:"term",label:a.label}]}}},[e.args.options,e.data]);return t.createElement(L,null,t.createElement(x,{label:e.label,parts:S,onClick:E}),t.createElement(w,{anchorEl:l,onClose:f},t.createElement(B,{onClose:f,onChange:e.onChange,rangeStart:e.data&&"rangeStart"in e.data?(d=e.data)===null||d===void 0?void 0:d.rangeStart:void 0,rangeEnd:e.data&&"rangeEnd"in e.data?(o=e.data)===null||o===void 0?void 0:o.rangeEnd:void 0,options:e.args.options,selectedOption:e.data&&"option"in e.data?(r=e.data)===null||r===void 0?void 0:r.option:void 0,minDate:e==null?void 0:e.args.minDate})))}const W={choose_a_date___:"Choose a date..."},P={en:W};V({prefix:"DataViewFilterDate",bundle:P});export{U as D};
