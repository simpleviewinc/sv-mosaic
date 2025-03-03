import{j as a}from"./jsx-runtime-DiwAibxM.js";import{r as v}from"./index-Btj5Fd67.js";import{D as C}from"./DataViewPrimaryFilter-DSC83jPV.js";import{E as D}from"./DataViewPrimaryFilter.styled-Ckb-VyLy.js";import{S as b,a as w,D as E}from"./FormFieldText.styled-CWtnKjLU.js";import{u as _}from"./useMosaicTranslation-DPUDh126.js";import{s as g}from"./theme-C7C0QMlu.js";import{S}from"./sizes-C6oSOElx.js";import{B as T}from"./Button-CRbkpCI2.js";import{t as j}from"./testIds-fiKIunms.js";const y=g.div`

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
		width: ${S.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`,F=g(T)`
	&& {
		position: relative;
		z-index: 1;

		.MuiSvgIcon-root:first-of-type {
			margin-left: auto;
		}

		${({$hasQuery:o})=>!o&&`
			width: calc(100% - 32px);

			.MuiButtonBase-root {
				width: 100%;
				justify-content: start;

			}
		`}
	}
`,B=g(b)`
	${({$hasComparisonDropdown:o})=>o&&`
		&& {
			margin-left: -1px;

			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`,x=["exists","not_exists"];function I(o){const[e,l]=v.useState({value:o.value,comparison:o.comparison}),{t:r}=_(),u=o.comparisons?o.comparisons.find(t=>t.value===e.comparison):void 0,m=function(){const t=e.value.trim();x.includes(e.comparison)?o.onChange({comparison:e.comparison}):t===""?o.onChange(void 0):o.onChange({value:t,comparison:e.comparison}),o.onClose()},d=function(){l({...e,value:"",comparison:o.comparison})},s=function(t){l({...e,value:t.target.value})},f=function(t){t.key==="Enter"&&m()},c=x.includes(e.comparison);let n;if(o.comparisons){const t=o.comparisons.map(i=>({label:i.label,onClick:function(){const p={...e};x.includes(i.value)===!0&&(p.value=""),p.comparison=i.value,l(p)}}));n=a.jsx(F,{className:"comparisonButton",label:u.label,variant:"input",color:"black",iconPosition:"right",mIcon:D,menuItems:t,$hasQuery:!c})}return a.jsxs(y,{"data-testid":j.DATA_VIEW_FILTER_TEXT_CONTENT,children:[a.jsxs("div",{className:"inputRow",children:[n,!c&&a.jsx(B,{autoComplete:"off",autoFocus:!0,placeholder:o.placeholder||r("mosaic:common.filter___"),margin:"dense",value:e.value,variant:"outlined",onChange:s,onKeyPress:f,fieldSize:"",disabled:c,$hasComparisonDropdown:!!n})]}),a.jsx(w,{onApply:m,onClear:d})]})}const h=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],M={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function L(o){var c;if(o.args.comparisonDefault&&h.find(n=>n.value===o.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[e,l]=v.useState(null),r=v.useMemo(()=>{const{args:n,data:t}=o;if(!n||!n.comparisons)return"equals";if(t.comparison)return t.comparison;const i=n.comparisonDefault;return i&&n.comparisons.includes(i)?i:n.comparisons[0]},[o.args,o.args.comparisons,o.args.comparisonDefault,o.data]),u=o.data.value||"",m=function(n){l(n.currentTarget)},d=function(){l(null)};let s;r==="exists"?s="exists":r==="not_exists"?s="does not exist":u===""?s="":s=`${M[r]} "${u}"`;const f=o.args&&o.args.comparisons?h.filter(n=>o.args.comparisons.includes(n.value)):void 0;return a.jsxs("span",{children:[a.jsx(C,{label:o.label,value:s,onClick:m}),a.jsx(E,{anchorEl:e,onClose:d,children:a.jsx(I,{value:u,onChange:o.onChange,comparison:r,comparisons:f,onClose:d,placeholder:(c=o.args)==null?void 0:c.placeholder})})]})}export{L as D};
