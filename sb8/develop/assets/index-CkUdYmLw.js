import{j as a}from"./jsx-runtime-DiwAibxM.js";import{r as o}from"./index-Btj5Fd67.js";import{s as c,B as T,t as v}from"./theme-D38K4W-Z.js";import{u as y,m as S,F,g as h,n as _}from"./Form-DsDAv5pr.js";import{D as b}from"./DataViewPrimaryFilter-DhoCDLnO.js";import{t as D}from"./testIds-Cxqhkw8S.js";import{a as j,D as w}from"./DataViewFilterDropdown-CsfLeKEd.js";import{a as A}from"./Button-DxOHnzJo.js";import{a as C}from"./formats-sBod7wm8.js";import{a as O}from"./useMosaicTranslation-C-FZRKWr.js";const V=c.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${T.sm};
`,I=c.div`
	display: flex;
	flex-direction: row;
`,R=c.div`
	display: flex;
	flex-direction: column;
`,N=c.ul`
	border-right: 2px solid ${v.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,$=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:T.sm}];function k(e){const f=y({data:{rangeStart:"rangeStart"in e?e.rangeStart:void 0,rangeEnd:"rangeEnd"in e?e.rangeEnd:void 0}}),{state:r,methods:{setFormValues:u}}=f,{rangeStart:i,rangeEnd:t}=r.data,[g,m]=o.useState("selectedOption"in e?e.selectedOption:void 0),x=o.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:t},validators:[{fn:S,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:i},validators:[{fn:S,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[t,i]),n=o.useCallback(l=>{e.onChange({option:l}),e.onClose()},[e.onChange,e.onClose]),d=o.useCallback(()=>{u({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0}),m(void 0)},[u]),s=o.useCallback(()=>{!i&&!t?e.onChange(void 0):e.onChange({rangeStart:i,rangeEnd:t}),e.onClose()},[e.onChange,e.onClose,i,t]),E=Object.values(r.errors).filter(Boolean).length>0;return a.jsxs(I,{"data-testid":D.DATA_VIEW_FILTER_DATE_CONTENT,children:["options"in e&&e.options&&a.jsx(R,{children:a.jsx(N,{"data-testid":D.DATA_VIEW_FILTER_DATE_OPTIONS,children:e.options.map(l=>a.jsx(A,{label:l.label,selected:g===l.value,color:"blue",onClick:()=>n(l.value),truncateText:!0,title:!0},l.value))})}),a.jsxs(V,{children:[a.jsx("div",{"data-testid":"dataview-filter-date-inputs",children:a.jsx(F,{...f,fields:x,sections:$,fullHeight:!1,spacing:"compact"})}),a.jsx(j,{onApply:s,onClear:d,disableApply:E})]})]})}const B=c.span``;function X(e){var g,m,x;const[f,r]=o.useState(null),u=function(n){r(n.currentTarget)},i=function(){r(null)};let t;if(e.data){if("rangeStart"in e.data||"rangeEnd"in e.data){const n=e.data.rangeStart!==void 0,d=e.data.rangeEnd!==void 0,s=n?h(e.data.rangeStart,C):void 0,E=d?h(e.data.rangeEnd,C):void 0;_(e.data.rangeStart,e.data.rangeEnd)?t=s:n&&d?t=`${s} - ${E}`:n?t=`from ${s}`:t=`to ${E}`}else if("option"in e.data&&e.data.option!==void 0&&e.args.options!==void 0){const n=e.args.options.find(({value:d})=>"option"in e.data&&d===e.data.option);n&&(t=n.label)}}return a.jsxs(B,{children:[a.jsx(b,{label:e.label,value:t,onClick:u}),a.jsx(w,{anchorEl:f,onClose:i,children:a.jsx(k,{onClose:i,onChange:e.onChange,rangeStart:e.data&&"rangeStart"in e.data?(g=e.data)==null?void 0:g.rangeStart:void 0,rangeEnd:e.data&&"rangeEnd"in e.data?(m=e.data)==null?void 0:m.rangeEnd:void 0,options:e.args.options,selectedOption:e.data&&"option"in e.data?(x=e.data)==null?void 0:x.option:void 0,minDate:e==null?void 0:e.args.minDate})})]})}const L={choose_a_date___:"Choose a date..."},M={en:L};O({prefix:"DataViewFilterDate",bundle:M});export{X as D};
