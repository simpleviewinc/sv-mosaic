import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as v}from"./index-BP8_t0zE.js";import{D as C}from"./DataViewPrimaryFilter-DEgwM2ym.js";import{d as b}from"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import{S as D,a as w,D as S}from"./FormFieldText.styled-Drb9OlPH.js";import{u as j}from"./useMosaicTranslation-DzvJLSut.js";import{s as g}from"./theme-CtvfJOCv.js";import{S as y}from"./sizes-C6oSOElx.js";import{B as F}from"./Button-OJc5Vo8h.js";const _=g.div`

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
`,B=g(F)`
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
`,E=g(D)`
	${({$hasComparisonDropdown:o})=>o&&`
		&& {
			margin-left: -1px;

			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`,p=["exists","not_exists"];function q(o){const[a,l]=v.useState({value:o.value,comparison:o.comparison}),{t:r}=j(),u=o.comparisons?o.comparisons.find(t=>t.value===a.comparison):void 0,m=function(){const t=a.value.trim();p.includes(a.comparison)?o.onChange({comparison:a.comparison}):t===""?o.onChange(void 0):o.onChange({value:t,comparison:a.comparison}),o.onClose()},d=function(){l({...a,value:"",comparison:o.comparison})},s=function(t){l({...a,value:t.target.value})},f=function(t){t.key==="Enter"&&m()},c=p.includes(a.comparison);let n;if(o.comparisons){const t=o.comparisons.map(i=>({label:i.label,onClick:function(){const x={...a};p.includes(i.value)===!0&&(x.value=""),x.comparison=i.value,l(x)}}));n=e.jsx(B,{className:"comparisonButton",label:u.label,variant:"input",color:"black",iconPosition:"right",mIcon:b,menuItems:t,$hasQuery:!c})}return e.jsxs(_,{children:[e.jsxs("div",{className:"inputRow",children:[n,!c&&e.jsx(E,{autoComplete:"off",autoFocus:!0,placeholder:o.placeholder||r("mosaic:common.filter___"),margin:"dense",value:a.value,variant:"outlined",onChange:s,onKeyPress:f,fieldSize:"",disabled:c,$hasComparisonDropdown:!!n})]}),e.jsx(w,{onApply:m,onClear:d})]})}const h=[{label:"Contains...",value:"contains"},{label:"Does not contain...",value:"not_contains"},{label:"Equals...",value:"equals"},{label:"Not equal to...",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],M={equals:"is",not_equals:"is not",contains:"contains",not_contains:"does not contain"};function A(o){var c;if(o.args.comparisonDefault&&h.find(n=>n.value===o.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[a,l]=v.useState(null),r=v.useMemo(()=>{const{args:n,data:t}=o;if(!n||!n.comparisons)return"equals";if(t.comparison)return console.log("Uses data"),t.comparison;const i=n.comparisonDefault;return i&&n.comparisons.includes(i)?i:n.comparisons[0]},[o.args,o.args.comparisons,o.args.comparisonDefault,o.data]),u=o.data.value||"",m=function(n){l(n.currentTarget)},d=function(){l(null)};let s;r==="exists"?s="exists":r==="not_exists"?s="does not exist":u===""?s="":s=`${M[r]} "${u}"`;const f=o.args&&o.args.comparisons?h.filter(n=>o.args.comparisons.includes(n.value)):void 0;return e.jsxs("span",{children:[e.jsx(C,{label:o.label,value:s,onClick:m}),e.jsx(S,{anchorEl:a,onClose:d,children:e.jsx(q,{value:u,onChange:o.onChange,comparison:r,comparisons:f,onClose:d,placeholder:(c=o.args)==null?void 0:c.placeholder})})]})}export{A as D};
