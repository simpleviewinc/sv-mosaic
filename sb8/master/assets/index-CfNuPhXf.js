import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{s as c,B as E,t as C}from"./theme-CtvfJOCv.js";import{f as S}from"./ColorSelected-UT9jNI-S.js";import{u as w,V as h,F as b,i as j,f as F,g as O}from"./formUtils-Hz1OPN0j.js";import{D as T}from"./DataViewPrimaryFilter-Dg9RKP-e.js";import{a as A,D as V}from"./FormFieldText.styled-C9eExh2D.js";import{a as _}from"./Button-BBNnoZZP.js";import{a as D}from"./formats-CDjt32hU.js";import{a as R}from"./useMosaicTranslation-DzvJLSut.js";const $=c.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${E.sm};

	& > div .inputRow {
		display: flex;
		align-items: center;
	}
`,k=c.div`
	display: flex;
	flex-direction: row;
`,M=c.div`
	display: flex;
	flex-direction: column;
`,B=c.ul`
	border-right: 2px solid ${C.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,N=c.div`
	border-top: 2px solid ${C.newColors.grey2[100]};
`,I=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:E.sm}];function L(t){const r=w(),{state:o,methods:{setFormValues:m}}=r,{rangeStart:i,rangeEnd:a}=o.data,[f,u]=l.useState("selectedOption"in t?t.selectedOption:void 0),v=l.useCallback(async()=>{if(!(!("rangeStart"in t)||!("rangeEnd"in t)))return{rangeStart:t.rangeStart,rangeEnd:t.rangeEnd}},[t]),n=l.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:a},validators:[{fn:h,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:i},validators:[{fn:h,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[a,i]),d=l.useCallback(s=>{t.onChange({option:s}),t.onClose()},[t.onChange,t.onClose]),g=l.useCallback(()=>{m({values:{rangeStart:void 0,rangeEnd:void 0}}),u(void 0)},[m]),x=l.useCallback(()=>{!i&&!a?t.onChange(void 0):t.onChange({rangeStart:i,rangeEnd:a}),t.onClose()},[t.onChange,t.onClose,i,a]),y=Object.values(o.errors).filter(Boolean).length>0;return e.jsxs(k,{"data-testid":"dataview-filter-date-dropdown-content",children:["options"in t&&t.options&&e.jsx(M,{children:e.jsx(B,{"data-testid":"dataview-filter-date-options-list",children:t.options.map(s=>e.jsx(_,{label:s.label,selected:f===s.value,color:"blue",onClick:()=>d(s.value),truncateText:!0,title:!0},s.value))})}),e.jsxs($,{children:[e.jsx("div",{"data-testid":"dataview-filter-date-inputs",children:e.jsx(b,{...r,fields:n,sections:I,fullHeight:!1,spacing:"compact",getFormValues:v})}),e.jsx(N,{children:e.jsx(A,{onApply:x,onClear:g,disableApply:y})})]})]})}const z=c.span``;function H(t,r){return[j,F,O].every(o=>o(t,r))}function tt(t){var f,u,v;const[r,o]=l.useState(null),m=function(n){o(n.currentTarget)},i=function(){o(null)};let a;if(t.data){if("rangeStart"in t.data||"rangeEnd"in t.data){const n=t.data.rangeStart!==void 0,d=t.data.rangeEnd!==void 0,g=n?S(t.data.rangeStart,D):void 0,x=d?S(t.data.rangeEnd,D):void 0;H(t.data.rangeStart,t.data.rangeEnd)?a=g:n&&d?a=`${g} - ${x}`:n?a=`from ${g}`:d&&(a=`to ${x}`)}else if("option"in t.data&&t.data.option!==void 0&&t.args.options!==void 0){const n=t.args.options.find(({value:d})=>"option"in t.data&&d===t.data.option);n&&(a=n.label)}}return e.jsxs(z,{children:[e.jsx(T,{label:t.label,value:a,onClick:m}),e.jsx(V,{anchorEl:r,onClose:i,children:e.jsx(L,{onClose:i,onChange:t.onChange,rangeStart:t.data&&"rangeStart"in t.data?(f=t.data)==null?void 0:f.rangeStart:void 0,rangeEnd:t.data&&"rangeEnd"in t.data?(u=t.data)==null?void 0:u.rangeEnd:void 0,options:t.args.options,selectedOption:t.data&&"option"in t.data?(v=t.data)==null?void 0:v.option:void 0,minDate:t==null?void 0:t.args.minDate})})]})}const P={choose_a_date___:"Choose a date..."},W={en:P};R({prefix:"DataViewFilterDate",bundle:W});export{tt as D};
