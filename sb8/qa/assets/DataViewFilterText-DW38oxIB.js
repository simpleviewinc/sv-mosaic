import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as v}from"./index-BP8_t0zE.js";import{D as C}from"./DataViewPrimaryFilter-BY7RwnGl.js";import{d as D}from"./DataViewPrimaryFilter.styled-CylNlUs-.js";import{S as b,a as w,D as _}from"./FormFieldText.styled-BceLEoIp.js";import{u as E}from"./useMosaicTranslation-CZCb37QS.js";import{s as g}from"./theme-DRtZtbPc.js";import{S}from"./sizes-C6oSOElx.js";import{B as T}from"./Button-Do5OxnZO.js";import{t as j}from"./testIds-wFnuQL-c.js";const y=g.div`

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
`,x=["exists","not_exists"];function q(o){const[a,l]=v.useState({value:o.value,comparison:o.comparison}),{t:r}=E(),u=o.comparisons?o.comparisons.find(n=>n.value===a.comparison):void 0,m=function(){const n=a.value.trim();x.includes(a.comparison)?o.onChange({comparison:a.comparison}):n===""?o.onChange(void 0):o.onChange({value:n,comparison:a.comparison}),o.onClose()},d=function(){l({...a,value:"",comparison:o.comparison})},s=function(n){l({...a,value:n.target.value})},f=function(n){n.key==="Enter"&&m()},c=x.includes(a.comparison);let t;if(o.comparisons){const n=o.comparisons.map(i=>({label:i.label,onClick:function(){const p={...a};x.includes(i.value)===!0&&(p.value=""),p.comparison=i.value,l(p)}}));t=e.jsx(F,{className:"comparisonButton",label:u.label,variant:"input",color:"black",iconPosition:"right",mIcon:D,menuItems:n,$hasQuery:!c})}return e.jsxs(y,{"data-testid":j.DATA_VIEW_FILTER_TEXT_CONTENT,children:[e.jsxs("div",{className:"inputRow",children:[t,!c&&e.jsx(B,{autoComplete:"off",autoFocus:!0,placeholder:o.placeholder||r("mosaic:common.filter___"),margin:"dense",value:a.value,variant:"outlined",onChange:s,onKeyPress:f,fieldSize:"",disabled:c,$hasComparisonDropdown:!!t})]}),e.jsx(w,{onApply:m,onClear:d})]})}const h=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],I={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function L(o){var c;if(o.args.comparisonDefault&&h.find(t=>t.value===o.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[a,l]=v.useState(null),r=v.useMemo(()=>{const{args:t,data:n}=o;if(!t||!t.comparisons)return"equals";if(n.comparison)return n.comparison;const i=t.comparisonDefault;return i&&t.comparisons.includes(i)?i:t.comparisons[0]},[o.args,o.args.comparisons,o.args.comparisonDefault,o.data]),u=o.data.value||"",m=function(t){l(t.currentTarget)},d=function(){l(null)};let s;r==="exists"?s="exists":r==="not_exists"?s="does not exist":u===""?s="":s=`${I[r]} "${u}"`;const f=o.args&&o.args.comparisons?h.filter(t=>o.args.comparisons.includes(t.value)):void 0;return e.jsxs("span",{children:[e.jsx(C,{label:o.label,value:s,onClick:m}),e.jsx(_,{anchorEl:a,onClose:d,children:e.jsx(q,{value:u,onChange:o.onChange,comparison:r,comparisons:f,onClose:d,placeholder:(c=o.args)==null?void 0:c.placeholder})})]})}export{L as D};
