import{r as x,R as n}from"./index-D0AnReJb.js";import{D as h}from"./DataViewPrimaryFilter-DbuXG1-l.js";import{E as T}from"./ExpandMore-JUNNgEdW.js";import{a as D,D as b}from"./DataViewFilterDropdownButtons-j8BN_zxt.js";import{u as A}from"./useMosaicTranslation-di9nduwf.js";import{s as R}from"./styled-components.browser.esm-8X0uN6v9.js";import{S as I}from"./sizes-DkIXWPpc.js";import{t as u}from"./testIds-DLbO0bd9.js";import{B as w}from"./Button-BdEZ7jiv.js";import{S as F}from"./FormFieldText.styled-B3HCazQq.js";import{B as V}from"./Badge-nT9K5bgY.js";const y=R.div`

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
		width: ${I.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`,g=["exists","not_exists"];function S(e){var s;const[t,l]=x.useState({value:e.value,comparison:e.comparison}),{t:r}=A(),i=((s=e.comparisons)===null||s===void 0?void 0:s.length)>0,f=i?e.comparisons.find(o=>o.value===t.comparison):void 0,m=function(){const o=t.value.trim();g.includes(t.comparison)?e.onChange({comparison:t.comparison}):o===""?e.onChange(void 0):e.onChange({value:o,comparison:t.comparison}),e.onClose()},p=function(){l({...t,value:"",comparison:e.comparison})},a=function(o){l({...t,value:o.target.value})},d=function(o){o.key==="Enter"&&m()},c=g.includes(t.comparison);let C;if(i){const o=e.comparisons.map(E=>({label:E.label,onClick:function(){const v={...t};g.includes(E.value)===!0&&(v.value=""),v.comparison=E.value,l(v)}}));C=n.createElement(w,{className:"comparisonButton",label:f.label,variant:"contained",intent:"secondary",iconPosition:"right",mIcon:T,menuItems:o,bluntRight:!0,size:"xlarge"})}return n.createElement(y,{"data-testid":u.DATA_VIEW_FILTER_TEXT_CONTENT},n.createElement("div",{className:"inputRow"},C,!c&&n.createElement(F,{autoComplete:"off",autoFocus:!0,placeholder:e.placeholder||r("mosaic:common.filter___"),margin:"dense",value:t.value,variant:"outlined",onChange:a,onKeyPress:d,disabled:c,$bluntLeft:i})),n.createElement(D,{onApply:m,onClear:p}))}const _=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],q={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function U(e){var s;if(e.args.comparisonDefault&&_.find(a=>a.value===e.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[t,l]=x.useState(null),r=x.useMemo(()=>{const{args:a,data:d}=e;if(!a||!a.comparisons)return"equals";if(d.comparison)return d.comparison;const c=a.comparisonDefault;return c&&a.comparisons.includes(c)?c:a.comparisons[0]},[e.args,e.args.comparisons,e.args.comparisonDefault,e.data]),i=e.data.value||"",f=function(a){l(a.currentTarget)},m=function(){l(null)},p=e.args&&e.args.comparisons?_.filter(a=>e.args.comparisons.includes(a.value)):void 0;return n.createElement("span",null,n.createElement(h,{label:e.label,value:r==="exists"?n.createElement("span",{"data-testid":u.DATA_VIEW_FILTER_OPERATOR},"exists"):r==="not_exists"?n.createElement("span",{"data-testid":u.DATA_VIEW_FILTER_OPERATOR},"does not exist"):i&&n.createElement(n.Fragment,null,n.createElement("span",{"data-testid":u.DATA_VIEW_FILTER_OPERATOR},q[r]),n.createElement(V,{attrs:{"data-testid":u.DATA_VIEW_FILTER_VALUE}},i)),onClick:f}),n.createElement(b,{anchorEl:t,onClose:m},n.createElement(S,{value:i,onChange:e.onChange,comparison:r,comparisons:p,onClose:m,placeholder:(s=e.args)===null||s===void 0?void 0:s.placeholder})))}export{U as D};
