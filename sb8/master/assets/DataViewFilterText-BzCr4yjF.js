import{r as d,R as t}from"./index-D0AnReJb.js";import{D as E}from"./DataViewPrimaryFilter-CHH50UID.js";import{E as h}from"./ExpandMore-Ca3pe8z0.js";import{a as D,D as _}from"./DataViewFilterDropdownButtons-bgrEEUrv.js";import"./MosaicContext-Y61KIvFP.js";import{u as w,S as y}from"./FormFieldText.styled-DQ22Tenv.js";import{s as T}from"./styled-components.browser.esm-8X0uN6v9.js";import{S as F}from"./sizes-DkIXWPpc.js";import{t as I}from"./testIds-B6Pox1zA.js";import{B as S}from"./Button-Dlaq5vsb.js";const q=T.div`

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
		width: ${F.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`,C=["exists","not_exists"];function R(e){var i;const[o,r]=d.useState({value:e.value,comparison:e.comparison}),{t:l}=w(),s=((i=e.comparisons)===null||i===void 0?void 0:i.length)>0,p=s?e.comparisons.find(a=>a.value===o.comparison):void 0,u=function(){const a=o.value.trim();C.includes(o.comparison)?e.onChange({comparison:o.comparison}):a===""?e.onChange(void 0):e.onChange({value:a,comparison:o.comparison}),e.onClose()},f=function(){r({...o,value:"",comparison:e.comparison})},v=function(a){r({...o,value:a.target.value})},n=function(a){a.key==="Enter"&&u()},m=C.includes(o.comparison);let c;if(s){const a=e.comparisons.map(g=>({label:g.label,onClick:function(){const x={...o};C.includes(g.value)===!0&&(x.value=""),x.comparison=g.value,r(x)}}));c=t.createElement(S,{className:"comparisonButton",label:p.label,variant:"contained",intent:"secondary",iconPosition:"right",mIcon:h,menuItems:a,bluntRight:!0,size:"xlarge"})}return t.createElement(q,{"data-testid":I.DATA_VIEW_FILTER_TEXT_CONTENT},t.createElement("div",{className:"inputRow"},c,!m&&t.createElement(y,{autoComplete:"off",autoFocus:!0,placeholder:e.placeholder||l("mosaic:common.filter___"),margin:"dense",value:o.value,variant:"outlined",onChange:v,onKeyPress:n,disabled:m,$bluntLeft:s})),t.createElement(D,{onApply:u,onClear:f}))}const b=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],V={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function O(e){var i;if(e.args.comparisonDefault&&b.find(n=>n.value===e.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[o,r]=d.useState(null),l=d.useMemo(()=>{const{args:n,data:m}=e;if(!n||!n.comparisons)return"equals";if(m.comparison)return m.comparison;const c=n.comparisonDefault;return c&&n.comparisons.includes(c)?c:n.comparisons[0]},[e.args,e.args.comparisons,e.args.comparisonDefault,e.data]),s=e.data.value||"",p=function(n){r(n.currentTarget)},u=function(){r(null)},f=e.args&&e.args.comparisons?b.filter(n=>e.args.comparisons.includes(n.value)):void 0,v=d.useMemo(()=>{if(l==="exists")return[{type:"operator",label:"exists"}];if(l==="not_exists")return[{type:"operator",label:"does not exist"}];if(s)return[{type:"operator",label:V[l]},{type:"term",label:s}]},[l,s]);return t.createElement("span",null,t.createElement(E,{label:e.label,parts:v,onClick:p}),t.createElement(_,{anchorEl:o,onClose:u},t.createElement(R,{value:s,onChange:e.onChange,comparison:l,comparisons:f,onClose:u,placeholder:(i=e.args)===null||i===void 0?void 0:i.placeholder})))}export{O as D};
