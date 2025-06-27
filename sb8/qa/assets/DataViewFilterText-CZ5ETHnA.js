import{r as g,R as a}from"./index-D0AnReJb.js";import{D as h}from"./DataViewPrimaryFilter-DKxQ8eUH.js";import{E}from"./ExpandMore-CEbXN-sG.js";import{a as b,D}from"./DataViewFilterDropdownButtons-B-NSlGS8.js";import{u as w}from"./useMosaicTranslation-CoWLI8L7.js";import{s as x}from"./styled-components.browser.esm-aVcmUYMZ.js";import{S as _}from"./sizes-CTdyEcea.js";import{S as y}from"./FormFieldText.styled-DTQIdddZ.js";import{B as S}from"./Button-Cu24UfKA.js";import{t as T}from"./testIds-BKutUmNQ.js";const F=x.div`

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
		width: ${_.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`,B=x(S)`
	&& {
		position: relative;
		z-index: 1;

		.MuiSvgIcon-root:first-of-type {
			margin-left: auto;
		}

		${({$hasQuery:e})=>!e&&`
			width: calc(100% - 32px);

			.MuiButtonBase-root {
				width: 100%;
				justify-content: start;

			}
		`}
	}
`,I=x(y)`
	${({$hasComparisonDropdown:e})=>e&&`
		&& {
			margin-left: -1px;

			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`,v=["exists","not_exists"];function M(e){const[n,c]=g.useState({value:e.value,comparison:e.comparison}),{t:m}=w(),l=e.comparisons?e.comparisons.find(t=>t.value===n.comparison):void 0,r=function(){const t=n.value.trim();v.includes(n.comparison)?e.onChange({comparison:n.comparison}):t===""?e.onChange(void 0):e.onChange({value:t,comparison:n.comparison}),e.onClose()},f=function(){c({...n,value:"",comparison:e.comparison})},d=function(t){c({...n,value:t.target.value})},i=function(t){t.key==="Enter"&&r()},u=v.includes(n.comparison);let o;if(e.comparisons){const t=e.comparisons.map(s=>({label:s.label,onClick:function(){const p={...n};v.includes(s.value)===!0&&(p.value=""),p.comparison=s.value,c(p)}}));o=a.createElement(B,{className:"comparisonButton",label:l.label,variant:"input",color:"black",iconPosition:"right",mIcon:E,menuItems:t,$hasQuery:!u})}return a.createElement(F,{"data-testid":T.DATA_VIEW_FILTER_TEXT_CONTENT},a.createElement("div",{className:"inputRow"},o,!u&&a.createElement(I,{autoComplete:"off",autoFocus:!0,placeholder:e.placeholder||m("mosaic:common.filter___"),margin:"dense",value:n.value,variant:"outlined",onChange:d,onKeyPress:i,fieldSize:"",disabled:u,$hasComparisonDropdown:!!o})),a.createElement(b,{onApply:r,onClear:f}))}const C=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],q={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function L(e){var n;if(e.args.comparisonDefault&&C.find(o=>o.value===e.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[c,m]=g.useState(null),l=g.useMemo(()=>{const{args:o,data:t}=e;if(!o||!o.comparisons)return"equals";if(t.comparison)return t.comparison;const s=o.comparisonDefault;return s&&o.comparisons.includes(s)?s:o.comparisons[0]},[e.args,e.args.comparisons,e.args.comparisonDefault,e.data]),r=e.data.value||"",f=function(o){m(o.currentTarget)},d=function(){m(null)};let i;l==="exists"?i="exists":l==="not_exists"?i="does not exist":r===""?i="":i=`${q[l]} "${r}"`;const u=e.args&&e.args.comparisons?C.filter(o=>e.args.comparisons.includes(o.value)):void 0;return a.createElement("span",null,a.createElement(h,{label:e.label,value:i,onClick:f}),a.createElement(D,{anchorEl:c,onClose:d},a.createElement(M,{value:r,onChange:e.onChange,comparison:l,comparisons:u,onClose:d,placeholder:(n=e.args)===null||n===void 0?void 0:n.placeholder})))}export{L as D};
