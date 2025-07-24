import{r as g,R as t}from"./index-D0AnReJb.js";import{D as C}from"./DataViewPrimaryFilter-D7qurXPm.js";import{E}from"./ExpandMore-Dl7LJMh2.js";import{a as h,D as b}from"./DataViewFilterDropdownButtons-B_FGX-fS.js";import{u as D}from"./useMosaicTranslation-di9nduwf.js";import{s as _}from"./styled-components.browser.esm-C5LJ_neh.js";import{S as w}from"./sizes-_ON_TzAH.js";import{t as T}from"./testIds-BKXNnpj0.js";import{B as y}from"./Button-D5Mq00Ds.js";import{S as F}from"./FormFieldText.styled-CJUQilOD.js";const S=_.div`

	& > .inputRow {
		display: flex;
		align-items: center;
		padding: 16px 16px 0;
		margin-bottom: 16px;
	}

	.MuiFormControl-root {
		margin-bottom: 0;
		margin-top: 0;
	}

	& > .inputRow > .disabled {
		margin-top: 8px;
		padding: 12px 16px 12px 8px;
		width: ${w.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`,v=["exists","not_exists"];function I(e){const[n,c]=g.useState({value:e.value,comparison:e.comparison}),{t:m}=D(),l=e.comparisons?e.comparisons.find(o=>o.value===n.comparison):void 0,r=function(){const o=n.value.trim();v.includes(n.comparison)?e.onChange({comparison:n.comparison}):o===""?e.onChange(void 0):e.onChange({value:o,comparison:n.comparison}),e.onClose()},f=function(){c({...n,value:"",comparison:e.comparison})},u=function(o){c({...n,value:o.target.value})},s=function(o){o.key==="Enter"&&r()},d=v.includes(n.comparison);let a;if(e.comparisons){const o=e.comparisons.map(i=>({label:i.label,onClick:function(){const p={...n};v.includes(i.value)===!0&&(p.value=""),p.comparison=i.value,c(p)}}));a=t.createElement(y,{className:"comparisonButton",label:l.label,variant:"contained",intent:"secondary",iconPosition:"right",mIcon:E,menuItems:o,bluntRight:!0,size:"xlarge"})}return t.createElement(S,{"data-testid":T.DATA_VIEW_FILTER_TEXT_CONTENT},t.createElement("div",{className:"inputRow"},a,!d&&t.createElement(F,{autoComplete:"off",autoFocus:!0,placeholder:e.placeholder||m("mosaic:common.filter___"),margin:"dense",value:n.value,variant:"outlined",onChange:u,onKeyPress:s,disabled:d,$bluntLeft:!0})),t.createElement(h,{onApply:r,onClear:f}))}const x=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],q={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function K(e){var n;if(e.args.comparisonDefault&&x.find(a=>a.value===e.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[c,m]=g.useState(null),l=g.useMemo(()=>{const{args:a,data:o}=e;if(!a||!a.comparisons)return"equals";if(o.comparison)return o.comparison;const i=a.comparisonDefault;return i&&a.comparisons.includes(i)?i:a.comparisons[0]},[e.args,e.args.comparisons,e.args.comparisonDefault,e.data]),r=e.data.value||"",f=function(a){m(a.currentTarget)},u=function(){m(null)};let s;l==="exists"?s="exists":l==="not_exists"?s="does not exist":r===""?s="":s=`${q[l]} "${r}"`;const d=e.args&&e.args.comparisons?x.filter(a=>e.args.comparisons.includes(a.value)):void 0;return t.createElement("span",null,t.createElement(C,{label:e.label,value:s,onClick:f}),t.createElement(b,{anchorEl:c,onClose:u},t.createElement(I,{value:r,onChange:e.onChange,comparison:l,comparisons:d,onClose:u,placeholder:(n=e.args)===null||n===void 0?void 0:n.placeholder})))}export{K as D};
