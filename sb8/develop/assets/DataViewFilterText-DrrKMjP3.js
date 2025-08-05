import{r as g,R as n}from"./index-D0AnReJb.js";import{D as C}from"./DataViewPrimaryFilter-BT-dYY0O.js";import{E as _}from"./ExpandMore-Dl7LJMh2.js";import{a as T,D}from"./DataViewFilterDropdownButtons-Bd_5anyu.js";import{u as h}from"./useMosaicTranslation-di9nduwf.js";import{s as b}from"./styled-components.browser.esm-C5LJ_neh.js";import{S as A}from"./sizes-_ON_TzAH.js";import{t as c}from"./testIds-DLbO0bd9.js";import{B as R}from"./Button-BOlAo_yO.js";import{S as I}from"./FormFieldText.styled-DouhbL_d.js";import{B as w}from"./Badge-D2_qX7Jf.js";const F=b.div`

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
		width: ${A.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`,v=["exists","not_exists"];function V(e){const[a,l]=g.useState({value:e.value,comparison:e.comparison}),{t:m}=h(),s=e.comparisons?e.comparisons.find(o=>o.value===a.comparison):void 0,i=function(){const o=a.value.trim();v.includes(a.comparison)?e.onChange({comparison:a.comparison}):o===""?e.onChange(void 0):e.onChange({value:o,comparison:a.comparison}),e.onClose()},d=function(){l({...a,value:"",comparison:e.comparison})},u=function(o){l({...a,value:o.target.value})},f=function(o){o.key==="Enter"&&i()},t=v.includes(a.comparison);let r;if(e.comparisons){const o=e.comparisons.map(p=>({label:p.label,onClick:function(){const E={...a};v.includes(p.value)===!0&&(E.value=""),E.comparison=p.value,l(E)}}));r=n.createElement(R,{className:"comparisonButton",label:s.label,variant:"contained",intent:"secondary",iconPosition:"right",mIcon:_,menuItems:o,bluntRight:!0,size:"xlarge"})}return n.createElement(F,{"data-testid":c.DATA_VIEW_FILTER_TEXT_CONTENT},n.createElement("div",{className:"inputRow"},r,!t&&n.createElement(I,{autoComplete:"off",autoFocus:!0,placeholder:e.placeholder||m("mosaic:common.filter___"),margin:"dense",value:a.value,variant:"outlined",onChange:u,onKeyPress:f,disabled:t,$bluntLeft:!0})),n.createElement(T,{onApply:i,onClear:d}))}const x=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],y={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function K(e){var a;if(e.args.comparisonDefault&&x.find(t=>t.value===e.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[l,m]=g.useState(null),s=g.useMemo(()=>{const{args:t,data:r}=e;if(!t||!t.comparisons)return"equals";if(r.comparison)return r.comparison;const o=t.comparisonDefault;return o&&t.comparisons.includes(o)?o:t.comparisons[0]},[e.args,e.args.comparisons,e.args.comparisonDefault,e.data]),i=e.data.value||"",d=function(t){m(t.currentTarget)},u=function(){m(null)},f=e.args&&e.args.comparisons?x.filter(t=>e.args.comparisons.includes(t.value)):void 0;return n.createElement("span",null,n.createElement(C,{label:e.label,value:s==="exists"?n.createElement("span",{"data-testid":c.DATA_VIEW_FILTER_OPERATOR},"exists"):s==="not_exists"?n.createElement("span",{"data-testid":c.DATA_VIEW_FILTER_OPERATOR},"does not exist"):i&&n.createElement(n.Fragment,null,n.createElement("span",{"data-testid":c.DATA_VIEW_FILTER_OPERATOR},y[s]),n.createElement(w,{attrs:{"data-testid":c.DATA_VIEW_FILTER_VALUE}},i)),onClick:d}),n.createElement(D,{anchorEl:l,onClose:u},n.createElement(V,{value:i,onChange:e.onChange,comparison:s,comparisons:f,onClose:u,placeholder:(a=e.args)===null||a===void 0?void 0:a.placeholder})))}export{K as D};
