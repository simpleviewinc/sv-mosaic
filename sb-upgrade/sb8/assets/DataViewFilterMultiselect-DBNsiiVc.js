import{r as U,o as B,f as W,s as X,t as K,i as J,C as Q}from"./CheckboxList-D367s6pM.js";import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{g as Y,r as x}from"./index-CDs2tPxN.js";import{d as Z,D as ee}from"./DataViewPrimaryFilter-BcJhbbuH.js";import{d as te}from"./debounce-Dt4LOG5H.js";import{r as P,i as S}from"./createSvgIcon-BGEpRDBf.js";import{S as ae,D as ie,a as ne}from"./FormFieldText.styled-CqAP5jTo.js";import{B as k}from"./Button-B_QyrzNG.js";import{B as se}from"./ButtonRow-BqlcWF3K.js";import{S as oe}from"./Spinner-DZM1MKnU.js";import{C as re}from"./Chip-CJpy9ewu.js";import{S as le}from"./BodyText-gyiTNPhg.js";import{u as ce}from"./useMosaicTranslation-DFgKwIAM.js";import{s as C,t as _}from"./theme-tUuL1bpb.js";import{a as de,g as pe,s as ue,b as M,u as me,_ as ve,d as he,c as F,e as fe}from"./useThemeProps-DZj2lB8w.js";import{u as ge,F as xe}from"./formControlState-Bqc-R5cL.js";import{T as we}from"./FormControlLabel-D6jwZlG2.js";function ye(t){return function(e,i,l){for(var r=-1,s=Object(e),o=l(e),u=o.length;u--;){var f=o[t?u:++r];if(i(s[f],f,s)===!1)break}return e}}var be=ye,_e=be,Ce=_e(),Oe=Ce,je=Oe,ke=U;function De(t,e){return t&&je(t,e,ke)}var Me=De,Fe=B;function Pe(t,e){return function(i,l){if(i==null)return i;if(!Fe(i))return t(i,l);for(var r=i.length,s=e?r:-1,o=Object(i);(e?s--:++s<r)&&l(o[s],s,o)!==!1;);return i}}var Se=Pe,Te=Me,Ve=Se,Ae=Ve(Te),Ee=Ae,Ie=Ee,qe=B;function $e(t,e){var i=-1,l=qe(t)?Array(t.length):[];return Ie(t,function(r,s,o){l[++i]=e(r,s,o)}),l}var At=$e,Be=X,Ne=W,Le=K,Re=J,ze=Ne(function(t){return Le(Be(t,Re))}),Ge=ze;const He=Y(Ge);var T={},Ue=S;Object.defineProperty(T,"__esModule",{value:!0});var N=T.default=void 0,We=Ue(P()),Xe=a,Ke=(0,We.default)((0,Xe.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");N=T.default=Ke;var V={},Je=S;Object.defineProperty(V,"__esModule",{value:!0});var L=V.default=void 0,Qe=Je(P()),Ye=a,Ze=(0,Qe.default)((0,Ye.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");L=V.default=Ze;var A={},et=S;Object.defineProperty(A,"__esModule",{value:!0});var R=A.default=void 0,tt=et(P()),at=a,it=(0,tt.default)((0,at.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");R=A.default=it;const nt=C.div`
	& > .topBlock {
		display: flex;
		height: 400px;
		padding-left: 16px;
		margin-top: 16px;
		width: 600px;
	}

	& > .topBlock > .options > .searchBar {
		position: sticky;
		top: 0;
		margin-bottom: 24px;
		z-index: 100;
	}

	& > .topBlock > .options {
		overflow-y: auto;
		flex: 2;
		position: relative;
		transition: opacity .5s;
		padding-right: 32px;
	}

	& > .topBlock > .options.disabled {
		opacity: .4;
		pointer-events: none;
	}

	& > .topBlock > .options .listItem {
		padding-top: 0px;
		padding-bottom: 0px;
	}

	& > .topBlock > .options .listItemIcon {
		min-width: auto;
	}

	& > .topBlock > .options > .spinner {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	& > .topBlock > .selected {
		padding: 0px 16px 0px 32px;
		width: 200px;
		overflow-y: auto;
	}

	& > .topBlock > .selected > .selected-options-title {
		font-weight: ${_.fontWeight.medium};
		font-size: 16px;
		line-height: 19px;
		color: ${_.newColors.almostBlack[100]};
		margin: 0px 0px 24px 0px;
	}

	& .comparisonDropdown {
		margin-bottom: 1rem;
	}

	& .chips {
		display: flex;
		flex-direction: column;
		row-gap: 24px;
	}

	& .chip {
		display: flex;
	}

	& .chip > span {
		flex: 1 1 0%
	}

	& .realTeal-icon {
		& svg {
			color: ${_.newColors.realTeal[100]};
		}
	}
`,st=C.div`
	margin-bottom: 1rem;
`,ot=C.p`
	margin: 0px;
`,rt=C.hr`
	border: 2px solid ${_.newColors.grey2[100]};
	margin:  ${({$margin:t})=>t||"0px -16px"};
`,lt=C.hr`
	border: 2px solid ${_.newColors.grey2[100]};
	margin: ${({$margin:t})=>t||"-32px 0px 0px 0px"};
`;function ct(t){return pe("MuiInputAdornment",t)}const I=de("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var q;const dt=["children","className","component","disablePointerEvents","disableTypography","position","variant"],pt=(t,e)=>{const{ownerState:i}=t;return[e.root,e[`position${F(i.position)}`],i.disablePointerEvents===!0&&e.disablePointerEvents,e[i.variant]]},ut=t=>{const{classes:e,disablePointerEvents:i,hiddenLabel:l,position:r,size:s,variant:o}=t,u={root:["root",i&&"disablePointerEvents",r&&`position${F(r)}`,o,l&&"hiddenLabel",s&&`size${F(s)}`]};return fe(u,ct,e)},mt=ue("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:pt})(({theme:t,ownerState:e})=>M({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},e.variant==="filled"&&{[`&.${I.positionStart}&:not(.${I.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),$=x.forwardRef(function(e,i){const l=me({props:e,name:"MuiInputAdornment"}),{children:r,className:s,component:o="div",disablePointerEvents:u=!1,disableTypography:f=!1,position:w,variant:m}=l,y=ve(l,dt),v=ge()||{};let g=m;m&&v.variant,v&&!g&&(g=v.variant);const d=M({},l,{hiddenLabel:v.hiddenLabel,size:v.size,disablePointerEvents:u,position:w,variant:g}),b=ut(d);return a.jsx(xe.Provider,{value:null,children:a.jsx(mt,M({as:o,ownerState:d,className:he(b.root,s),ref:i},y,{children:typeof r=="string"&&!f?a.jsx(we,{color:"text.secondary",children:r}):a.jsxs(x.Fragment,{children:[w==="start"?q||(q=a.jsx("span",{className:"notranslate",children:"​"})):null,r]})}))})});function z(t){var E;const[e,i]=x.useState({options:[],selected:t.selected.map(n=>n.value),hasMore:!1,skip:0,keyword:void 0,comparison:t.comparison,loaded:!1,listOfChips:t.selected}),[l,r]=x.useState(!1),{t:s}=ce(),o=Math.abs(t.limit)||25,u=t.comparisons?t.comparisons.find(n=>n.value===e.comparison):void 0,f=t.selectLimit>0&&e.selected.length>=t.selectLimit;x.useEffect(()=>{async function n(){const p=await t.getOptions({limit:o,skip:e.skip});i({...e,options:p.docs,hasMore:p.hasMore===!0,skip:e.skip+o,loaded:!0})}n()},[]);const w=function(){i({...e,selected:[],comparison:"in",keyword:void 0,listOfChips:[]})},m=function(){t.onApply({value:j?[]:e.selected,comparison:e.comparison})},y=n=>()=>{var h;const p=He(e.selected,[n.value]),c=e.listOfChips.filter(H=>H.value!==n.value);(h=t.onChange)==null||h.call(t,c),i({...e,selected:p,listOfChips:c})},v=function(n){const p=n.currentTarget;async function c(){const h=await t.getOptions({limit:o,skip:e.skip,keyword:e.keyword});i({...e,options:[...e.options,...h.docs],hasMore:h.hasMore===!0,skip:e.skip+o}),p.blur()}c()},g=te(function(n){r(!!t.createNewOption&&n.trim().length>0);async function p(){const c=await t.getOptions({limit:o,skip:0,keyword:n});i({...e,options:c.docs,hasMore:c.hasMore===!0,keyword:n===""?void 0:n,skip:o})}p()},200),d=function(n){g(n.target.value)},b=async()=>{const n=await t.createNewOption(e.keyword);i({...e,options:[...e.options,n]})};let O;if(t.comparisons){const n=t.comparisons.map(c=>({label:c.label,onClick:function(){["exists","not_exists"].includes(c.value)===!0&&i({...e,selected:[]}),i({...e,comparison:c.value})}})),p={In:"The row must match one of selected option.","Not In":"The row must match none of the selected options.",All:"The row must match all of the selected options.",Exists:"The row must have a value for this filter.","Not Exists":"The row must not have a value for this filter."};O=a.jsxs("div",{className:"comparisonDropdown",children:[a.jsx(st,{children:a.jsx(le,{tag:"h3",children:s("mosaic:DataView.comparison")})}),a.jsxs(se,{children:[a.jsx(k,{label:u.label,variant:"outlined",color:"black",iconPosition:"right",mIcon:Z,menuItems:n}),a.jsx(k,{variant:"icon",color:"blue",mIcon:L,popover:a.jsx(ot,{children:n.map((c,h)=>a.jsxs("span",{children:[a.jsx("b",{children:c.label})," ","-",p[c.label],a.jsx("br",{})]},h))})})]})]})}const j=["exists","not_exists"].includes(e.comparison),D=t.isOpen&&e.loaded,G=async function(n){var c;const p=[...n];(c=t.onChange)==null||c.call(t,p),i({...e,selected:p.map(h=>h.value),listOfChips:p})};return a.jsxs(nt,{children:[a.jsxs("div",{className:"topBlock",children:[a.jsxs("div",{className:`options ${j?"disabled":""}`,children:[a.jsx(ae,{autoComplete:"off",InputProps:{startAdornment:a.jsx($,{position:"start",children:a.jsx(N,{})}),endAdornment:l&&a.jsx($,{position:"end",children:a.jsx(k,{label:"Create",variant:"text",color:"teal",className:"realTeal-icon",mIcon:R,onClick:b})})},className:"searchBar",placeholder:t.placeholder||s("mosaic:common.keyword___"),autoFocus:!0,onChange:d,fieldSize:"100%"}),!D&&a.jsx(oe,{className:"spinner"}),D&&a.jsx(Q,{checked:j?[]:e.listOfChips,options:e.options,onChange:G,disabled:f}),e.hasMore&&a.jsx("div",{className:"loadContainer",children:a.jsx(k,{label:s("mosaic:common.load_more___"),color:"blue",variant:"outlined",fullWidth:!0,onClick:v})})]}),a.jsx(lt,{}),a.jsxs("div",{className:"selected",children:[O,!j&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"selected-options-title",children:s("mosaic:DataView.selected_options")}),a.jsx("div",{className:"chips",children:D&&((E=e.listOfChips)==null?void 0:E.length)>0&&e.listOfChips.map(n=>a.jsx(re,{className:"chip",label:n.label,onDelete:y(n)},n.value))})]})]})]}),!t.hideButtons&&a.jsxs(a.Fragment,{children:[a.jsx(rt,{}),a.jsx(ie,{onApply:m,onClear:w})]})]})}z.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterMultiselectDropdownContent",props:{selected:{required:!0,tsType:{name:"Array",elements:[{name:"MosaicLabelValue"}],raw:"MosaicLabelValue[]"},description:""},comparison:{required:!0,tsType:{name:'DataViewFilterMultiselectProps["data"]["comparison"]',raw:'DataViewFilterMultiselectProps["data"]["comparison"]'},description:""},comparisons:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:'{ label: string; value: DataViewFilterMultiselectProps["data"]["comparison"] }',signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:'DataViewFilterMultiselectProps["data"]["comparison"]',raw:'DataViewFilterMultiselectProps["data"]["comparison"]',required:!0}}]}}],raw:'{ label: string; value: DataViewFilterMultiselectProps["data"]["comparison"] }[]'},description:""},getOptions:{required:!0,tsType:{name:'DataViewFilterMultiselectProps["args"]["getOptions"]',raw:'DataViewFilterMultiselectProps["args"]["getOptions"]'},description:""},onApply:{required:!0,tsType:{name:"signature",type:"function",raw:'({ value, comparison }: { value: string[]; comparison: DataViewFilterMultiselectProps["data"]["comparison"] }) => void',signature:{arguments:[{type:{name:"signature",type:"object",raw:'{ value: string[]; comparison: DataViewFilterMultiselectProps["data"]["comparison"] }',signature:{properties:[{key:"value",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"comparison",value:{name:'DataViewFilterMultiselectProps["data"]["comparison"]',raw:'DataViewFilterMultiselectProps["data"]["comparison"]',required:!0}}]}},name:""}],return:{name:"void"}}},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:'DataViewFilterMultiselectProps["args"]["placeholder"]',raw:'DataViewFilterMultiselectProps["args"]["placeholder"]'},description:""},limit:{required:!1,tsType:{name:'DataViewFilterMultiselectProps["args"]["limit"]',raw:'DataViewFilterMultiselectProps["args"]["limit"]'},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(val: MosaicLabelValue[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"MosaicLabelValue"}],raw:"MosaicLabelValue[]"},name:"val"}],return:{name:"void"}}},description:""},hideButtons:{required:!1,tsType:{name:"boolean"},description:""},createNewOption:{required:!1,tsType:{name:'union["createNewOption"]',raw:'AdvancedSelectionInputSettings["createNewOption"]'},description:""},selectLimit:{required:!1,tsType:{name:'union["selectLimit"]',raw:'AdvancedSelectionInputSettings["selectLimit"]'},description:""}}};const vt=[{label:"In",value:"in"},{label:"Not In",value:"not_in"},{label:"All",value:"all"},{label:"Exists",value:"exists"},{label:"Not Exists",value:"not_exists"}],ht={in:"",not_in:"Not In - ",all:"All - "};function ft(t){var v,g;const[e,i]=x.useState({anchorEl:null,selected:[],dropdownOpen:!1}),l=t.data.value||[],r=t.data.comparison||"in";x.useEffect(()=>{let d=!0;async function b(){const O=await t.args.getSelected(l);i({...e,selected:O})}return d&&b(),()=>{d=!1}},[t.data]);const s=function(d){i({...e,anchorEl:d.currentTarget})},o=function(){i({...e,anchorEl:null})},u=function(){i({...e,dropdownOpen:!0})},f=function(){i({...e,dropdownOpen:!1})},w=function(d){d.value.length>0||d.comparison==="exists"||d.comparison==="not_exists"?t.onChange(d):t.onChange(void 0),o()};let m;r==="exists"?m="EXISTS":r==="not_exists"?m="NOT EXISTS":e.selected.length>0?m=`${ht[r]}${(v=e.selected[0])==null?void 0:v.label}`:m="";const y=t.args&&t.args.comparisons?vt.filter(d=>t.args.comparisons.includes(d.value)):void 0;return a.jsxs("span",{children:[a.jsx(ee,{label:t.label,value:m,onClick:s,multiselect:e==null?void 0:e.selected}),a.jsx(ne,{anchorEl:e.anchorEl,onClose:o,onEntered:u,onExited:f,children:a.jsx(z,{comparison:r,comparisons:y,selected:e.selected,getOptions:t.args.getOptions,isOpen:e.dropdownOpen,onApply:w,placeholder:(g=t.args)==null?void 0:g.placeholder,limit:t.args.limit})})]})}ft.__docgenInfo={description:"",methods:[],displayName:"DataViewFilterMultiselect",props:{label:{required:!0,tsType:{name:"string"},description:""},args:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	getOptions: GetOptions;
	getSelected(val: any): Promise<any> | any;
	comparisons?: MultiSelectComparison[];
	placeholder?: string;
	limit?: number;
}`,signature:{properties:[{key:"getOptions",value:{name:"signature",type:"function",raw:"(val: GetOptionsArgs) => Promise<DataViewFilterGetOptionsReturn> | DataViewFilterGetOptionsReturn",signature:{arguments:[{type:{name:"GetOptionsArgs"},name:"val"}],return:{name:"union",raw:"Promise<DataViewFilterGetOptionsReturn> | DataViewFilterGetOptionsReturn",elements:[{name:"Promise",elements:[{name:"DataViewFilterGetOptionsReturn"}],raw:"Promise<DataViewFilterGetOptionsReturn>"},{name:"DataViewFilterGetOptionsReturn"}]}},required:!0}},{key:"getSelected",value:{name:"union",raw:"Promise<any> | any",elements:[{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"},{name:"any"}],required:!0}},{key:"comparisons",value:{name:"Array",elements:[{name:"union",raw:'"in" | "not_in" | "all" | "exists" | "not_exists"',elements:[{name:"literal",value:'"in"'},{name:"literal",value:'"not_in"'},{name:"literal",value:'"all"'},{name:"literal",value:'"exists"'},{name:"literal",value:'"not_exists"'}]}],raw:"MultiSelectComparison[]",required:!1}},{key:"placeholder",value:{name:"string",required:!1}},{key:"limit",value:{name:"number",required:!1}}]}},description:""},data:{required:!0,tsType:{name:"DataViewFilterMultiselectData"},description:""},onChange:{required:!0,tsType:{name:"unknown"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{ft as D,$ as I,At as _,z as a,Me as b,R as d,He as x};
