import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as v}from"./index-BP8_t0zE.js";import{D as C}from"./DataViewPrimaryFilter-jm5PRQOV.js";import{d as b}from"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import{S as w,a as D,D as S}from"./FormFieldText.styled-D8aJbBKM.js";import{u as j}from"./useMosaicTranslation-DzvJLSut.js";import{s as g}from"./theme-CtvfJOCv.js";import{S as y}from"./sizes-C6oSOElx.js";import{B as E}from"./Button-uCo3N7IM.js";const F=g.div`

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
`,x=["exists","not_exists"];function B(o){const[t,l]=v.useState({value:o.value,comparison:o.comparison}),{t:r}=j(),u=o.comparisons?o.comparisons.find(n=>n.value===t.comparison):void 0,m=function(){const n=t.value.trim();x.includes(t.comparison)?o.onChange({comparison:t.comparison}):n===""?o.onChange(void 0):o.onChange({value:n,comparison:t.comparison}),o.onClose()},d=function(){l({...t,value:"",comparison:o.comparison})},s=function(n){l({...t,value:n.target.value})},f=function(n){n.key==="Enter"&&m()},c=x.includes(t.comparison);let a;if(o.comparisons){const n=o.comparisons.map(i=>({label:i.label,onClick:function(){const p={...t};x.includes(i.value)===!0&&(p.value=""),p.comparison=i.value,l(p)}}));a=e.jsx(_,{className:"comparisonButton",label:u.label,variant:"input",color:"black",iconPosition:"right",mIcon:b,menuItems:n,$hasQuery:!c})}return e.jsxs(F,{children:[e.jsxs("div",{className:"inputRow",children:[a,!c&&e.jsx(T,{autoComplete:"off",autoFocus:!0,placeholder:o.placeholder||r("mosaic:common.filter___"),margin:"dense",value:t.value,variant:"outlined",onChange:s,onKeyPress:f,fieldSize:"",disabled:c,$hasComparisonDropdown:!!a})]}),e.jsx(D,{onApply:m,onClear:d})]})}const h=[{label:"Contains",value:"contains"},{label:"Not Contains",value:"not_contains"},{label:"Equals",value:"equals"},{label:"Not Equal",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],q={equals:"",not_equals:"!=",contains:"~",not_contains:"!~"};function A(o){var c;if(o.args.comparisonDefault&&h.find(a=>a.value===o.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[t,l]=v.useState(null),r=v.useMemo(()=>{const{args:a,data:n}=o;if(!a||!a.comparisons)return"equals";if(n.comparison)return console.log("Uses data"),n.comparison;const i=a.comparisonDefault;return i&&a.comparisons.includes(i)?i:a.comparisons[0]},[o.args,o.args.comparisons,o.args.comparisonDefault,o.data]),u=o.data.value||"",m=function(a){l(a.currentTarget)},d=function(){l(null)};let s;r==="exists"?s="EXISTS":r==="not_exists"?s="NOT EXISTS":u===""?s="":s=`${q[r]} "${u}"`;const f=o.args&&o.args.comparisons?h.filter(a=>o.args.comparisons.includes(a.value)):void 0;return e.jsxs("span",{children:[e.jsx(C,{label:o.label,value:s,onClick:m}),e.jsx(S,{anchorEl:t,onClose:d,children:e.jsx(B,{value:u,onChange:o.onChange,comparison:r,comparisons:f,onClose:d,placeholder:(c=o.args)==null?void 0:c.placeholder})})]})}export{A as D};
