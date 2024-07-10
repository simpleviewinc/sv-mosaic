import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as v}from"./index-BP8_t0zE.js";import{D as C}from"./DataViewPrimaryFilter-BhREyJ2o.js";import{d as b}from"./DataViewPrimaryFilter.styled-CqJQyTfl.js";import{S as w,a as D,D as S}from"./DataViewFilterDropdown-B4X4i9iN.js";import{u as j}from"./useMosaicTranslation-DzvJLSut.js";import{s as g}from"./theme-BFHUhhnW.js";import{S as y}from"./sizes-C6oSOElx.js";import{B as E}from"./Button-BH4-03LC.js";const F=g.div`

	& > .inputRow {
		display: flex;
		align-items: center;
		padding: 12px 16px 0;
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
`,_=g(E)`
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
`,T=g(w)`
	${({$hasComparisonDropdown:o})=>o&&`
		&& {
			margin-left: -1px;

			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`,x=["exists","not_exists"];function B(o){const[t,l]=v.useState({value:o.value,comparison:o.comparison}),{t:r}=j(),u=o.comparisons?o.comparisons.find(a=>a.value===t.comparison):void 0,m=function(){const a=t.value.trim();x.includes(t.comparison)?o.onChange({comparison:t.comparison}):a===""?o.onChange(void 0):o.onChange({value:a,comparison:t.comparison}),o.onClose()},d=function(){l({...t,value:"",comparison:o.comparison})},i=function(a){l({...t,value:a.target.value})},f=function(a){a.key==="Enter"&&m()},c=x.includes(t.comparison);let n;if(o.comparisons){const a=o.comparisons.map(s=>({label:s.label,onClick:function(){const p={...t};x.includes(s.value)===!0&&(p.value=""),p.comparison=s.value,l(p)}}));n=e.jsx(_,{className:"comparisonButton",label:u.label,variant:"input",color:"black",iconPosition:"right",mIcon:b,menuItems:a,$hasQuery:!c})}return e.jsxs(F,{children:[e.jsxs("div",{className:"inputRow",children:[n,!c&&e.jsx(T,{autoComplete:"off",autoFocus:!0,placeholder:o.placeholder||r("mosaic:common.filter___"),margin:"dense",value:t.value,variant:"outlined",onChange:i,onKeyPress:f,fieldSize:"",disabled:c,$hasComparisonDropdown:!!n})]}),e.jsx(D,{onApply:m,onClear:d})]})}const h=[{label:"Contains",value:"contains"},{label:"Not Contains",value:"not_contains"},{label:"Equals",value:"equals"},{label:"Not Equal",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],q={equals:"",not_equals:"!=",contains:"~",not_contains:"!~"};function A(o){var c;if(o.args.comparisonDefault&&h.find(n=>n.value===o.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[t,l]=v.useState(null),r=v.useMemo(()=>{const{args:n,data:a}=o;if(!n||!n.comparisons)return"equals";if(a.comparison)return a.comparison;const s=n.comparisonDefault;return s&&n.comparisons.includes(s)?s:n.comparisons[0]},[o.args,o.args.comparisons,o.args.comparisonDefault,o.data]),u=o.data.value||"",m=function(n){l(n.currentTarget)},d=function(){l(null)};let i;r==="exists"?i="EXISTS":r==="not_exists"?i="NOT EXISTS":u===""?i="":i=`${q[r]} "${u}"`;const f=o.args&&o.args.comparisons?h.filter(n=>o.args.comparisons.includes(n.value)):void 0;return e.jsxs("span",{children:[e.jsx(C,{label:o.label,value:i,onClick:m}),e.jsx(S,{anchorEl:t,onClose:d,children:e.jsx(B,{value:u,onChange:o.onChange,comparison:r,comparisons:f,onClose:d,placeholder:(c=o.args)==null?void 0:c.placeholder})})]})}export{A as D};
