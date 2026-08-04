import{r as o,R as t}from"./index-CDlOlYQx.js";import{c as m}from"./styled-components.browser.esm-CsHOGV45.js";import{n as b,o as _,u as x,p as S,F as A,h as y,k as h}from"./index-DQ5lYjg-.js";import{D as F}from"./DataViewPrimaryFilter-BDVbgUZO.js";import{B as T,t as O}from"./sizes-BeWafy6f.js";import{t as v}from"./testIds-B6Pox1zA.js";import{a as w,D as I}from"./DataViewFilterDropdownButtons-CBDNlFNO.js";import{a as R}from"./Button-J6Kw363Y.js";import{a as V}from"./MosaicContext-OO7tZJdO.js";function C(e){b(1,arguments);var a=_(e);return a.setHours(0,0,0,0),a}function k(e,a){b(2,arguments);var i=C(e),l=C(a);return i.getTime()===l.getTime()}const N=m.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${T.sm};
`,L=m.div`
	display: flex;
	flex-direction: row;
`,M=m.div`
	display: flex;
	flex-direction: column;
`,B=m.ul`
	border-right: 1px solid ${O.color.gray[300]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,W=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:T.sm}];function H(e){const a=x({data:{rangeStart:"rangeStart"in e?e.rangeStart:void 0,rangeEnd:"rangeEnd"in e?e.rangeEnd:void 0}}),{state:i,methods:{setFormValues:l}}=a,{rangeStart:r,rangeEnd:d}=i.data,[E,f]=o.useState("selectedOption"in e?e.selectedOption:void 0),D=o.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:d},validators:[{fn:S,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:r},validators:[{fn:S,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[d,r]),n=o.useCallback(c=>{e.onChange({option:c}),e.onClose()},[e.onChange,e.onClose]),s=o.useCallback(()=>{l({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0,resetInputs:!0}),f(void 0)},[l]),u=o.useCallback(()=>{!r&&!d?e.onChange(void 0):e.onChange({rangeStart:r,rangeEnd:d}),e.onClose()},[e.onChange,e.onClose,r,d]),g=Object.values(i.errors).filter(Boolean).length>0;return t.createElement(L,{"data-testid":v.DATA_VIEW_FILTER_DATE_CONTENT},"options"in e&&e.options&&t.createElement(M,null,t.createElement(B,{"data-testid":v.DATA_VIEW_FILTER_DATE_OPTIONS},e.options.map(c=>t.createElement(R,{key:c.value,label:c.label,selected:E===c.value,onClick:()=>n(c.value),truncateText:!0,title:!0})))),t.createElement(N,null,t.createElement("div",{"data-testid":"dataview-filter-date-inputs"},t.createElement(A,{...a,fields:D,sections:W,fullHeight:!1,spacing:"compact",autoFocus:!0})),t.createElement(w,{onApply:u,onClear:s,disableApply:g})))}const P=m.span``;function Z(e){var a,i,l;const[r,d]=o.useState(null),E=function(n){d(n.currentTarget)},f=function(){d(null)},D=o.useMemo(()=>{if(e.data){if("rangeStart"in e.data||"rangeEnd"in e.data){const n=e.data.rangeStart!==void 0,s=e.data.rangeEnd!==void 0,u=n?y(e.data.rangeStart,h):void 0,g=s?y(e.data.rangeEnd,h):void 0;return k(e.data.rangeStart,e.data.rangeEnd)?[{type:"term",label:u}]:n&&s?[{type:"term",label:u},{type:"operator",label:"to"},{type:"term",label:g}]:n?[{type:"operator",label:"from"},{type:"term",label:u}]:[{type:"operator",label:"to"},{type:"term",label:g}]}else if("option"in e.data&&e.data.option!==void 0&&e.args.options!==void 0){const n=e.args.options.find(({value:s})=>"option"in e.data&&s===e.data.option);if(n)return[{type:"term",label:n.label}]}}},[e.args.options,e.data]);return t.createElement(P,null,t.createElement(F,{label:e.label,parts:D,onClick:E}),t.createElement(I,{anchorEl:r,onClose:f},t.createElement(H,{onClose:f,onChange:e.onChange,rangeStart:e.data&&"rangeStart"in e.data?(a=e.data)===null||a===void 0?void 0:a.rangeStart:void 0,rangeEnd:e.data&&"rangeEnd"in e.data?(i=e.data)===null||i===void 0?void 0:i.rangeEnd:void 0,options:e.args.options,selectedOption:e.data&&"option"in e.data?(l=e.data)===null||l===void 0?void 0:l.option:void 0,minDate:e==null?void 0:e.args.minDate})))}const j={choose_a_date___:"Choose a date..."},z={en:j};V({prefix:"DataViewFilterDate",bundle:z});export{Z as D};
