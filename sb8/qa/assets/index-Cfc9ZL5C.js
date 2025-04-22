import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as l}from"./index-DDfD_3TG.js";import{B as C,s as c,t as T}from"./theme-DWrYR5Gu.js";import{u as y,m as E,F,g as S,n as _}from"./Form-947MsihE.js";import{D as b}from"./DataViewPrimaryFilter-CR1jqifp.js";import{t as h}from"./testIds-Dso8kRSM.js";import{a as j,D as w}from"./DataViewFilterDropdown-D8zsAVgS.js";import{a as A}from"./Button-_6SRCSsN.js";import{a as D}from"./formats-sBod7wm8.js";import{a as O}from"./useMosaicTranslation-CCZzHAOs.js";const V=c.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${C.sm};
`,I=c.div`
	display: flex;
	flex-direction: row;
`,R=c.div`
	display: flex;
	flex-direction: column;
`,N=c.ul`
	border-right: 2px solid ${T.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,$=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:C.sm}];function k(t){const g=y({data:{rangeStart:"rangeStart"in t?t.rangeStart:void 0,rangeEnd:"rangeEnd"in t?t.rangeEnd:void 0}}),{state:r,methods:{setFormValues:m}}=g,{rangeStart:i,rangeEnd:a}=r.data,[f,u]=l.useState("selectedOption"in t?t.selectedOption:void 0),v=l.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:a},validators:[{fn:E,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:i},validators:[{fn:E,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[a,i]),n=l.useCallback(d=>{t.onChange({option:d}),t.onClose()},[t.onChange,t.onClose]),o=l.useCallback(()=>{m({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0}),u(void 0)},[m]),s=l.useCallback(()=>{!i&&!a?t.onChange(void 0):t.onChange({rangeStart:i,rangeEnd:a}),t.onClose()},[t.onChange,t.onClose,i,a]),x=Object.values(r.errors).filter(Boolean).length>0;return e.jsxs(I,{"data-testid":h.DATA_VIEW_FILTER_DATE_CONTENT,children:["options"in t&&t.options&&e.jsx(R,{children:e.jsx(N,{"data-testid":h.DATA_VIEW_FILTER_DATE_OPTIONS,children:t.options.map(d=>e.jsx(A,{label:d.label,selected:f===d.value,color:"blue",onClick:()=>n(d.value),truncateText:!0,title:!0},d.value))})}),e.jsxs(V,{children:[e.jsx("div",{"data-testid":"dataview-filter-date-inputs",children:e.jsx(F,{...g,fields:v,sections:$,fullHeight:!1,spacing:"compact"})}),e.jsx(j,{onApply:s,onClear:o,disableApply:x})]})]})}const B=c.span``;function X(t){var f,u,v;const[g,r]=l.useState(null),m=function(n){r(n.currentTarget)},i=function(){r(null)};let a;if(t.data){if("rangeStart"in t.data||"rangeEnd"in t.data){const n=t.data.rangeStart!==void 0,o=t.data.rangeEnd!==void 0,s=n?S(t.data.rangeStart,D):void 0,x=o?S(t.data.rangeEnd,D):void 0;_(t.data.rangeStart,t.data.rangeEnd)?a=s:n&&o?a=`${s} - ${x}`:n?a=`from ${s}`:a=`to ${x}`}else if("option"in t.data&&t.data.option!==void 0&&t.args.options!==void 0){const n=t.args.options.find(({value:o})=>"option"in t.data&&o===t.data.option);n&&(a=n.label)}}return e.jsxs(B,{children:[e.jsx(b,{label:t.label,value:a,onClick:m}),e.jsx(w,{anchorEl:g,onClose:i,children:e.jsx(k,{onClose:i,onChange:t.onChange,rangeStart:t.data&&"rangeStart"in t.data?(f=t.data)==null?void 0:f.rangeStart:void 0,rangeEnd:t.data&&"rangeEnd"in t.data?(u=t.data)==null?void 0:u.rangeEnd:void 0,options:t.args.options,selectedOption:t.data&&"option"in t.data?(v=t.data)==null?void 0:v.option:void 0,minDate:t==null?void 0:t.args.minDate})})]})}const L={choose_a_date___:"Choose a date..."},M={en:L};O({prefix:"DataViewFilterDate",bundle:M});export{X as D};
