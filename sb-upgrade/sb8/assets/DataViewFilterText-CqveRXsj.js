import{j as i}from"./jsx-runtime-qGIIFXMu.js";import{r as g}from"./index-CDs2tPxN.js";import{d as h,D as C}from"./DataViewPrimaryFilter-BcJhbbuH.js";import{S as T,D as q,a as D}from"./FormFieldText.styled-CqAP5jTo.js";import{u as _}from"./useMosaicTranslation-DFgKwIAM.js";import{s as x}from"./theme-tUuL1bpb.js";import{S as b}from"./sizes-C6oSOElx.js";import{B as F}from"./Button-B_QyrzNG.js";const S=x.div`

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
		width: ${b.sm};
	}

	& .comparisonContainer {
		border-left: 1px solid #ccc;
		margin: 5px;
		padding-left: 5px;
		flex-shrink: 0;
	}
`,V=x(F)`
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
`,j=x(T)`
	${({$hasComparisonDropdown:e})=>e&&`
		&& {
			margin-left: -1px;

			.Mui-focused fieldset,
			fieldset:hover {
				z-index: 1;
			}
		}
	`}
`,f=["exists","not_exists"];function w(e){const[n,r]=g.useState({value:e.value,comparison:e.comparison}),{t:l}=_(),c=e.comparisons?e.comparisons.find(t=>t.value===n.comparison):void 0,m=function(){const t=n.value.trim();f.includes(n.comparison)?e.onChange({comparison:n.comparison}):t===""?e.onChange(void 0):e.onChange({value:t,comparison:n.comparison}),e.onClose()},d=function(){r({...n,value:"",comparison:e.comparison})},o=function(t){r({...n,value:t.target.value})},p=function(t){t.key==="Enter"&&m()},u=f.includes(n.comparison);let a;if(e.comparisons){const t=e.comparisons.map(s=>({label:s.label,onClick:function(){const v={...n};f.includes(s.value)===!0&&(v.value=""),v.comparison=s.value,r(v)}}));a=i.jsx(V,{className:"comparisonButton",label:c.label,variant:"input",color:"black",iconPosition:"right",mIcon:h,menuItems:t,$hasQuery:!u})}return i.jsxs(S,{children:[i.jsxs("div",{className:"inputRow",children:[a,!u&&i.jsx(j,{autoComplete:"off",autoFocus:!0,placeholder:e.placeholder||l("mosaic:common.filter___"),margin:"dense",value:n.value,variant:"outlined",onChange:o,onKeyPress:p,fieldSize:"",disabled:u,$hasComparisonDropdown:!!a})]}),i.jsx(q,{onApply:m,onClear:d})]})}w.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterTextDropdownContent",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:'DataViewFilterTextProps["onChange"]',raw:'DataViewFilterTextProps["onChange"]'},description:""},comparison:{required:!0,tsType:{name:'DataViewFilterTextProps["data"]["comparison"]',raw:'DataViewFilterTextProps["data"]["comparison"]'},description:""},comparisons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ label: string; value: DataViewFilterTextProps["data"]["comparison"] }',signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:'DataViewFilterTextProps["data"]["comparison"]',raw:'DataViewFilterTextProps["data"]["comparison"]',required:!0}}]}}],raw:'{ label: string; value: DataViewFilterTextProps["data"]["comparison"] }[]'},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const y=[{label:"Contains",value:"contains"},{label:"Not Contains",value:"not_contains"},{label:"Equals",value:"equals"},{label:"Not Equal",value:"not_equals"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],k={equals:"",not_equals:"!=",contains:"~",not_contains:"!~"};function E(e){var u;if(e.args.comparisonDefault&&y.find(a=>a.value===e.args.comparisonDefault)===void 0)throw new Error("The selected comparison is not a valid comparison");const[n,r]=g.useState(null),l=g.useMemo(()=>{const{args:a,data:t}=e;if(!a||!a.comparisons)return"equals";if(t.comparison)return t.comparison;const s=a.comparisonDefault;return s&&a.comparisons.includes(s)?s:a.comparisons[0]},[e.args,e.args.comparisons,e.args.comparisonDefault,e.data]),c=e.data.value||"",m=function(a){r(a.currentTarget)},d=function(){r(null)};let o;l==="exists"?o="EXISTS":l==="not_exists"?o="NOT EXISTS":c===""?o="":o=`${k[l]} "${c}"`;const p=e.args&&e.args.comparisons?y.filter(a=>e.args.comparisons.includes(a.value)):void 0;return i.jsxs("span",{children:[i.jsx(C,{label:e.label,value:o,onClick:m}),i.jsx(D,{anchorEl:n,onClose:d,children:i.jsx(w,{value:c,onChange:e.onChange,comparison:l,comparisons:p,onClose:d,placeholder:(u=e.args)==null?void 0:u.placeholder})})]})}E.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterText",props:{label:{required:!0,tsType:{name:"string"},description:""},args:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	comparisons?: FilterTextComparison[];
	placeholder?: string;
	comparisonDefault?: string;
}`,signature:{properties:[{key:"comparisons",value:{name:"Array",elements:[{name:"union",raw:'"contains" | "not_contains" | "equals" | "not_equals" | "exists" | "not_exists"',elements:[{name:"literal",value:'"contains"'},{name:"literal",value:'"not_contains"'},{name:"literal",value:'"equals"'},{name:"literal",value:'"not_equals"'},{name:"literal",value:'"exists"'},{name:"literal",value:'"not_exists"'}]}],raw:"FilterTextComparison[]",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"comparisonDefault",value:{name:"string",required:!1}}]}},description:""},data:{required:!0,tsType:{name:"signature",type:"object",raw:"{ value?: string; comparison?: FilterTextComparison }",signature:{properties:[{key:"value",value:{name:"string",required:!1}},{key:"comparison",value:{name:"union",raw:'"contains" | "not_contains" | "equals" | "not_equals" | "exists" | "not_exists"',elements:[{name:"literal",value:'"contains"'},{name:"literal",value:'"not_contains"'},{name:"literal",value:'"equals"'},{name:"literal",value:'"not_equals"'},{name:"literal",value:'"exists"'},{name:"literal",value:'"not_exists"'}],required:!1}}]}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value?: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{E as D};
