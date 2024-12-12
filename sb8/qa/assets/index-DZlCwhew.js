import{j as a}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{s as c,B as C,t as y}from"./theme-DRtZtbPc.js";import{f as x}from"./ColorSelected-CO0cbi0b.js";import{u as F,h as E,F as b,i as _}from"./Form-BNxHQKbh.js";import{D as j}from"./DataViewPrimaryFilter-BY7RwnGl.js";import{t as S}from"./testIds-wFnuQL-c.js";import{a as w,D as A}from"./FormFieldText.styled-BceLEoIp.js";import{a as O}from"./Button-Do5OxnZO.js";import{a as D}from"./formats-sBod7wm8.js";import{a as V}from"./useMosaicTranslation-CZCb37QS.js";const I=c.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${C.sm};
`,R=c.div`
	display: flex;
	flex-direction: row;
`,N=c.div`
	display: flex;
	flex-direction: column;
`,k=c.ul`
	border-right: 2px solid ${y.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,$=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:C.sm}];function B(t){const g=F(),{state:r,methods:{setFormValues:m}}=g,{rangeStart:i,rangeEnd:e}=r.data,[f,u]=o.useState("selectedOption"in t?t.selectedOption:void 0),v=o.useCallback(async()=>({rangeStart:"rangeStart"in t?t.rangeStart:void 0,rangeEnd:"rangeEnd"in t?t.rangeEnd:void 0}),[t]),n=o.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:e},validators:[{fn:E,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:i},validators:[{fn:E,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[e,i]),d=o.useCallback(l=>{t.onChange({option:l}),t.onClose()},[t.onChange,t.onClose]),s=o.useCallback(()=>{m({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0}),u(void 0)},[m]),h=o.useCallback(()=>{!i&&!e?t.onChange(void 0):t.onChange({rangeStart:i,rangeEnd:e}),t.onClose()},[t.onChange,t.onClose,i,e]),T=Object.values(r.errors).filter(Boolean).length>0;return a.jsxs(R,{"data-testid":S.DATA_VIEW_FILTER_DATE_CONTENT,children:["options"in t&&t.options&&a.jsx(N,{children:a.jsx(k,{"data-testid":S.DATA_VIEW_FILTER_DATE_OPTIONS,children:t.options.map(l=>a.jsx(O,{label:l.label,selected:f===l.value,color:"blue",onClick:()=>d(l.value),truncateText:!0,title:!0},l.value))})}),a.jsxs(I,{children:[a.jsx("div",{"data-testid":"dataview-filter-date-inputs",children:a.jsx(b,{...g,fields:n,sections:$,fullHeight:!1,spacing:"compact",getFormValues:v})}),a.jsx(w,{onApply:h,onClear:s,disableApply:T})]})]})}const L=c.span``;function Z(t){var f,u,v;const[g,r]=o.useState(null),m=function(n){r(n.currentTarget)},i=function(){r(null)};let e;if(t.data){if("rangeStart"in t.data||"rangeEnd"in t.data){const n=t.data.rangeStart!==void 0,d=t.data.rangeEnd!==void 0,s=n?x(t.data.rangeStart,D):void 0,h=d?x(t.data.rangeEnd,D):void 0;_(t.data.rangeStart,t.data.rangeEnd)?e=s:n&&d?e=`${s} - ${h}`:n?e=`from ${s}`:e=`to ${h}`}else if("option"in t.data&&t.data.option!==void 0&&t.args.options!==void 0){const n=t.args.options.find(({value:d})=>"option"in t.data&&d===t.data.option);n&&(e=n.label)}}return a.jsxs(L,{children:[a.jsx(j,{label:t.label,value:e,onClick:m}),a.jsx(A,{anchorEl:g,onClose:i,children:a.jsx(B,{onClose:i,onChange:t.onChange,rangeStart:t.data&&"rangeStart"in t.data?(f=t.data)==null?void 0:f.rangeStart:void 0,rangeEnd:t.data&&"rangeEnd"in t.data?(u=t.data)==null?void 0:u.rangeEnd:void 0,options:t.args.options,selectedOption:t.data&&"option"in t.data?(v=t.data)==null?void 0:v.option:void 0,minDate:t==null?void 0:t.args.minDate})})]})}const M={choose_a_date___:"Choose a date..."},W={en:M};V({prefix:"DataViewFilterDate",bundle:W});export{Z as D};
