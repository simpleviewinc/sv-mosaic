import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as d}from"./index-CDs2tPxN.js";import{s as c,B as S,t as w}from"./theme-tUuL1bpb.js";import{f as h}from"./ColorSelected-CdqgCvRo.js";import{u as F,V as y,F as b,i as V,f as T,g as j}from"./formUtils-CJK8oCl3.js";import{D as O}from"./DataViewPrimaryFilter-BcJhbbuH.js";import{D as _,a as A}from"./FormFieldText.styled-CqAP5jTo.js";import{a as q}from"./Button-B_QyrzNG.js";import{a as x}from"./formats-CDjt32hU.js";import{a as R}from"./useMosaicTranslation-DFgKwIAM.js";const M=c.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${S.sm};

	& > div .inputRow {
		display: flex;
		align-items: center;
	}
`,k=c.div`
	display: flex;
	flex-direction: row;
`,$=c.div`
	display: flex;
	flex-direction: column;
`,L=c.ul`
	border-right: 2px solid ${w.newColors.grey2[100]};
	margin: 0;
	padding: 0;
	flex: 1 1 0%;
	min-height: 0;
	max-width: 130px;
	max-height: 284px;
	overflow-y: auto;
`,N=c.div`
	border-top: 2px solid ${w.newColors.grey2[100]};
`,B=[{fields:[[["rangeStart"],["rangeEnd"]]],gridMinWidth:S.sm}];function C(e){const s=F(),{state:o,methods:{setFormValues:m}}=s,{rangeStart:i,rangeEnd:a}=o.data,[g,f]=d.useState("selectedOption"in e?e.selectedOption:void 0),D=d.useCallback(async()=>{if(!(!("rangeStart"in e)||!("rangeEnd"in e)))return{rangeStart:e.rangeStart,rangeEnd:e.rangeEnd}},[e]),n=d.useMemo(()=>[{name:"rangeStart",type:"date",label:"From",size:"full",inputSettings:{fixedTime:[0,0,0,0],maxDate:a},validators:[{fn:y,options:{endDateName:"rangeEnd"}}],validates:["rangeEnd"]},{name:"rangeEnd",type:"date",label:"To",size:"full",inputSettings:{fixedTime:[23,59,59,999],minDate:i},validators:[{fn:y,options:{startDateName:"rangeStart"}}],validates:["rangeStart"]}],[a,i]),r=d.useCallback(l=>{e.onChange({option:l}),e.onClose()},[e.onChange,e.onClose]),u=d.useCallback(()=>{m({values:{rangeStart:void 0,rangeEnd:void 0}}),f(void 0)},[m]),v=d.useCallback(()=>{!i&&!a?e.onChange(void 0):e.onChange({rangeStart:i,rangeEnd:a}),e.onClose()},[e.onChange,e.onClose,i,a]),E=Object.values(o.errors).filter(Boolean).length>0;return t.jsxs(k,{"data-testid":"dataview-filter-date-dropdown-content",children:["options"in e&&e.options&&t.jsx($,{children:t.jsx(L,{"data-testid":"dataview-filter-date-options-list",children:e.options.map(l=>t.jsx(q,{label:l.label,selected:g===l.value,color:"blue",onClick:()=>r(l.value),truncateText:!0,title:!0},l.value))})}),t.jsxs(M,{children:[t.jsx("div",{"data-testid":"dataview-filter-date-inputs",children:t.jsx(b,{...s,fields:n,sections:B,fullHeight:!1,spacing:"compact",getFormValues:D})}),t.jsx(N,{children:t.jsx(_,{onApply:v,onClear:u,disableApply:E})})]})]})}C.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterDateDropdownContent",props:{onChange:{required:!0,tsType:{name:"DataViewFilterDateOnChange"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""}}};const I=c.span``;function p(e,s){return[V,T,j].every(o=>o(e,s))}function z(e){var g,f,D;const[s,o]=d.useState(null),m=function(n){o(n.currentTarget)},i=function(){o(null)};let a;if(e.data){if("rangeStart"in e.data||"rangeEnd"in e.data){const n=e.data.rangeStart!==void 0,r=e.data.rangeEnd!==void 0,u=n?h(e.data.rangeStart,x):void 0,v=r?h(e.data.rangeEnd,x):void 0;p(e.data.rangeStart,e.data.rangeEnd)?a=u:n&&r?a=`${u} - ${v}`:n?a=`from ${u}`:r&&(a=`to ${v}`)}else if("option"in e.data&&e.data.option!==void 0&&e.args.options!==void 0){const n=e.args.options.find(({value:r})=>"option"in e.data&&r===e.data.option);n&&(a=n.label)}}return t.jsxs(I,{children:[t.jsx(O,{label:e.label,value:a,onClick:m}),t.jsx(A,{anchorEl:s,onClose:i,children:t.jsx(C,{onClose:i,onChange:e.onChange,rangeStart:e.data&&"rangeStart"in e.data?(g=e.data)==null?void 0:g.rangeStart:void 0,rangeEnd:e.data&&"rangeEnd"in e.data?(f=e.data)==null?void 0:f.rangeEnd:void 0,options:e.args.options,selectedOption:e.data&&"option"in e.data?(D=e.data)==null?void 0:D.option:void 0,minDate:e==null?void 0:e.args.minDate})})]})}z.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterDate",props:{label:{required:!0,tsType:{name:"string"},description:""},args:{required:!0,tsType:{name:"signature",type:"object",raw:"{ options?: MosaicLabelValue[]; minDate?: Date }",signature:{properties:[{key:"options",value:{name:"Array",elements:[{name:"MosaicLabelValue"}],raw:"MosaicLabelValue[]",required:!1}},{key:"minDate",value:{name:"Date",required:!1}}]}},description:""},data:{required:!0,tsType:{name:"union",raw:"DataViewFilterDateRange | DataViewFilterDateOption",elements:[{name:"DataViewFilterDateRange"},{name:"DataViewFilterDateOption"}]},description:""},onChange:{required:!0,tsType:{name:"DataViewFilterDateOnChange"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const H={choose_a_date___:"Choose a date..."},P={en:H};R({prefix:"DataViewFilterDate",bundle:P});export{z as D};
