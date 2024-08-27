import{j as a}from"./jsx-runtime-nGUw9YhZ.js";import{r as l}from"./index-BP8_t0zE.js";import{s as g,B as E,t as w}from"./theme-D4oZEIDo.js";import{f as h}from"./ColorSelected-DJl1bcU6.js";import{u as y,f as x,F as b,i as j,g as F,h as O}from"./formUtils-q2R-OBT7.js";import{D as T}from"./DataViewPrimaryFilter-Bw02z3Sh.js";import{a as A,D as V}from"./FormFieldText.styled-Bt4xFNEa.js";import{a as _}from"./Button-DtrbI49b.js";import{a as D}from"./formats-CDjt32hU.js";import{a as k}from"./useMosaicTranslation-COKC524W.js";const M=g.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${E.sm};
`,R=g.div`
	display: flex;
	flex-direction: row;
`,$=g.div`
	display: flex;
	flex-direction: column;
`,B=g.ul`
	border-right: 2px solid ${w.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,N=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:E.sm}];function I(t){const r=y(),{state:o,methods:{setFormValues:m}}=r,{rangeStart:i,rangeEnd:e}=o.data,[f,u]=l.useState("selectedOption"in t?t.selectedOption:void 0),v=l.useCallback(async()=>{if(!(!("rangeStart"in t)||!("rangeEnd"in t)))return{rangeStart:t.rangeStart,rangeEnd:t.rangeEnd}},[t]),n=l.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:e},validators:[{fn:x,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:i},validators:[{fn:x,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[e,i]),d=l.useCallback(s=>{t.onChange({option:s}),t.onClose()},[t.onChange,t.onClose]),c=l.useCallback(()=>{m({values:{rangeStart:void 0,rangeEnd:void 0}}),u(void 0)},[m]),S=l.useCallback(()=>{!i&&!e?t.onChange(void 0):t.onChange({rangeStart:i,rangeEnd:e}),t.onClose()},[t.onChange,t.onClose,i,e]),C=Object.values(o.errors).filter(Boolean).length>0;return a.jsxs(R,{"data-testid":"dataview-filter-date-dropdown-content",children:["options"in t&&t.options&&a.jsx($,{children:a.jsx(B,{"data-testid":"dataview-filter-date-options-list",children:t.options.map(s=>a.jsx(_,{label:s.label,selected:f===s.value,color:"blue",onClick:()=>d(s.value),truncateText:!0,title:!0},s.value))})}),a.jsxs(M,{children:[a.jsx("div",{"data-testid":"dataview-filter-date-inputs",children:a.jsx(b,{...r,fields:n,sections:N,fullHeight:!1,spacing:"compact",getFormValues:v})}),a.jsx(A,{onApply:S,onClear:c,disableApply:C})]})]})}const L=g.span``;function z(t,r){return[j,F,O].every(o=>o(t,r))}function p(t){var f,u,v;const[r,o]=l.useState(null),m=function(n){o(n.currentTarget)},i=function(){o(null)};let e;if(t.data){if("rangeStart"in t.data||"rangeEnd"in t.data){const n=t.data.rangeStart!==void 0,d=t.data.rangeEnd!==void 0,c=n?h(t.data.rangeStart,D):void 0,S=d?h(t.data.rangeEnd,D):void 0;z(t.data.rangeStart,t.data.rangeEnd)?e=c:n&&d?e=`${c} - ${S}`:n?e=`from ${c}`:d&&(e=`to ${S}`)}else if("option"in t.data&&t.data.option!==void 0&&t.args.options!==void 0){const n=t.args.options.find(({value:d})=>"option"in t.data&&d===t.data.option);n&&(e=n.label)}}return a.jsxs(L,{children:[a.jsx(T,{label:t.label,value:e,onClick:m}),a.jsx(V,{anchorEl:r,onClose:i,children:a.jsx(I,{onClose:i,onChange:t.onChange,rangeStart:t.data&&"rangeStart"in t.data?(f=t.data)==null?void 0:f.rangeStart:void 0,rangeEnd:t.data&&"rangeEnd"in t.data?(u=t.data)==null?void 0:u.rangeEnd:void 0,options:t.args.options,selectedOption:t.data&&"option"in t.data?(v=t.data)==null?void 0:v.option:void 0,minDate:t==null?void 0:t.args.minDate})})]})}const H={choose_a_date___:"Choose a date..."},P={en:H};k({prefix:"DataViewFilterDate",bundle:P});export{p as D};
