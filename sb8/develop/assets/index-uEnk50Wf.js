import{j as a}from"./jsx-runtime-DiwAibxM.js";import{r as d}from"./index-Btj5Fd67.js";import{s as c,B as T,t as y}from"./theme-C7C0QMlu.js";import{f as E}from"./ColorSelected-rVJC1bnf.js";import{u as F,h as S,F as b,i as _}from"./Form-vpubj07T.js";import{D as j}from"./DataViewPrimaryFilter-BOH2oXUo.js";import{t as D}from"./testIds-DZf96GK8.js";import{a as w,D as A}from"./FormFieldText.styled-BXg2h5EQ.js";import{a as O}from"./Button-BW21zc79.js";import{a as C}from"./formats-sBod7wm8.js";import{a as V}from"./useMosaicTranslation-L7Zdnfri.js";const I=c.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${T.sm};
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
`,$=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:T.sm}];function B(e){const f=F(),{state:r,methods:{setFormValues:u}}=f,{rangeStart:i,rangeEnd:t}=r.data,[g,m]=d.useState("selectedOption"in e?e.selectedOption:void 0),h=d.useCallback(async()=>({rangeStart:"rangeStart"in e?e.rangeStart:void 0,rangeEnd:"rangeEnd"in e?e.rangeEnd:void 0}),[e]),n=d.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:t},validators:[{fn:S,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:i},validators:[{fn:S,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[t,i]),l=d.useCallback(o=>{e.onChange({option:o}),e.onClose()},[e.onChange,e.onClose]),s=d.useCallback(()=>{u({values:{rangeStart:void 0,rangeEnd:void 0},validate:!0}),m(void 0)},[u]),x=d.useCallback(()=>{!i&&!t?e.onChange(void 0):e.onChange({rangeStart:i,rangeEnd:t}),e.onClose()},[e.onChange,e.onClose,i,t]),v=Object.values(r.errors).filter(Boolean).length>0;return a.jsxs(R,{"data-testid":D.DATA_VIEW_FILTER_DATE_CONTENT,children:["options"in e&&e.options&&a.jsx(N,{children:a.jsx(k,{"data-testid":D.DATA_VIEW_FILTER_DATE_OPTIONS,children:e.options.map(o=>a.jsx(O,{label:o.label,selected:g===o.value,color:"blue",onClick:()=>l(o.value),truncateText:!0,title:!0},o.value))})}),a.jsxs(I,{children:[a.jsx("div",{"data-testid":"dataview-filter-date-inputs",children:a.jsx(b,{...f,fields:n,sections:$,fullHeight:!1,spacing:"compact",getFormValues:h})}),a.jsx(w,{onApply:x,onClear:s,disableApply:v})]})]})}const L=c.span``;function Z(e){var g,m,h;const[f,r]=d.useState(null),u=function(n){r(n.currentTarget)},i=function(){r(null)};let t;if(e.data){if("rangeStart"in e.data||"rangeEnd"in e.data){const n=e.data.rangeStart!==void 0,l=e.data.rangeEnd!==void 0,s=n?E(e.data.rangeStart,C):void 0,x=l?E(e.data.rangeEnd,C):void 0;_(e.data.rangeStart,e.data.rangeEnd)?t=s:n&&l?t=`${s} - ${x}`:n?t=`from ${s}`:t=`to ${x}`}else if("option"in e.data&&e.data.option!==void 0&&e.args.options!==void 0){const n=e.args.options.find(({value:l})=>"option"in e.data&&l===e.data.option);n&&(t=n.label)}}return a.jsxs(L,{children:[a.jsx(j,{label:e.label,value:t,onClick:u}),a.jsx(A,{anchorEl:f,onClose:i,children:a.jsx(B,{onClose:i,onChange:e.onChange,rangeStart:e.data&&"rangeStart"in e.data?(g=e.data)==null?void 0:g.rangeStart:void 0,rangeEnd:e.data&&"rangeEnd"in e.data?(m=e.data)==null?void 0:m.rangeEnd:void 0,options:e.args.options,selectedOption:e.data&&"option"in e.data?(h=e.data)==null?void 0:h.option:void 0,minDate:e==null?void 0:e.args.minDate})})]})}const M={choose_a_date___:"Choose a date..."},W={en:M};V({prefix:"DataViewFilterDate",bundle:W});export{Z as D};
