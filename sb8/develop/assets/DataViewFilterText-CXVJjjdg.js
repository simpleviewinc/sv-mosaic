import{r as g,R as a}from"./index-D0AnReJb.js";import{D as h}from"./DataViewPrimaryFilter-DN-yolWp.js";import{E}from"./ExpandMore-CEbXN-sG.js";import{S as b,a as D,D as w}from"./FormFieldText.styled-CW8xvHG-.js";import{u as _}from"./useMosaicTranslation-CoWLI8L7.js";import{s as x}from"./styled-components.browser.esm-aVcmUYMZ.js";import{S as y}from"./sizes-CTdyEcea.js";import{B as S}from"./Button-Cu24UfKA.js";import{t as T}from"./testIds-Dso8kRSM.js";const F=x.div`

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
		width: ${y.sm};
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
`,I=x(b)`
	${({$hasComparisonDropdown:e})=>e&&`
		&& {
			margin-left: -1px;

			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`,v=["exists","not_exists"];function M(e){const[o,c]=g.useState({value:e.value,comparison:e.comparison}),{t:m}=_(),l=e.comparisons?e.comparisons.find(t=>t.value===o.comparison):void 0,r=function(){const t=o.value.trim();v.includes(o.comparison)?e.onChange({comparison:o.comparison}):t===""?e.onChange(void 0):e.onChange({value:t,comparison:o.comparison}),e.onClose()},f=function(){c({...o,value:"",comparison:e.comparison})},d=function(t){c({...o,value:t.target.value})},i=function(t){t.key==="Enter"&&r()},u=v.includes(o.comparison);let n;if(e.comparisons){const t=e.comparisons.map(s=>({label:s.label,onClick:function(){const p={...o};v.includes(s.value)===!0&&(p.value=""),p.comparison=s.value,c(p)}}));n=a.createElement(B,{className:"comparisonButton",label:l.label,variant:"input",color:"black",iconPosition:"right",mIcon:E,menuItems:t,$hasQuery:!u})}return a.createElement(F,{"data-testid":T.DATA_VIEW_FILTER_TEXT_CONTENT},a.createElement("div",{className:"inputRow"},n,!u&&a.createElement(I,{autoComplete:"off",autoFocus:!0,placeholder:e.placeholder||m("mosaic:common.filter___"),margin:"dense",value:o.value,variant:"outlined",onChange:d,onKeyPress:i,fieldSize:"",disabled:u,$hasComparisonDropdown:!!n})),a.createElement(D,{onApply:r,onClear:f}))}const C=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],q={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function j(e){var o;if(e.args.comparisonDefault&&C.find(n=>n.value===e.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[c,m]=g.useState(null),l=g.useMemo(()=>{const{args:n,data:t}=e;if(!n||!n.comparisons)return"equals";if(t.comparison)return t.comparison;const s=n.comparisonDefault;return s&&n.comparisons.includes(s)?s:n.comparisons[0]},[e.args,e.args.comparisons,e.args.comparisonDefault,e.data]),r=e.data.value||"",f=function(n){m(n.currentTarget)},d=function(){m(null)};let i;l==="exists"?i="exists":l==="not_exists"?i="does not exist":r===""?i="":i=`${q[l]} "${r}"`;const u=e.args&&e.args.comparisons?C.filter(n=>e.args.comparisons.includes(n.value)):void 0;return a.createElement("span",null,a.createElement(h,{label:e.label,value:i,onClick:f}),a.createElement(w,{anchorEl:c,onClose:d},a.createElement(M,{value:r,onChange:e.onChange,comparison:l,comparisons:u,onClose:d,placeholder:(o=e.args)===null||o===void 0?void 0:o.placeholder})))}export{j as D};
