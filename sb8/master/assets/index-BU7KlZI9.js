import{r as z,o as I,f as H,s as W,t as G,i as U,C as J}from"./CheckboxList-Dbk8JkiG.js";import{r as w,j as a}from"./jsx-runtime-nGUw9YhZ.js";import{g as X,r as _}from"./index-BP8_t0zE.js";import{d as K}from"./debounce-DO3dP4oK.js";import{d as Q}from"./DataViewPrimaryFilter.styled-auwRvG8E.js";import{i as b}from"./generateUtilityClasses-kMkq-zAT.js";import{r as g}from"./createSvgIcon-Pzp5yWPs.js";import{C as Y}from"./Chip-CRqL1Gcl.js";import{u as Z,a as ee}from"./useMosaicTranslation-CZCb37QS.js";import{t as B}from"./testIds-DZf96GK8.js";import{S as te,I as D,a as ae}from"./FormFieldText.styled-Cq8lzkgl.js";import{B as f}from"./Button-DuMlbF8s.js";import{B as se}from"./ButtonRow-CP4CrsnB.js";import{S as oe}from"./Spinner-Dfqcw6pF.js";import"./Typography-Br_RMLnS.js";import{S as ie}from"./SubtitleText-Vdwjg1jD.js";import"./isSymbol-CEVJpixJ.js";import{s as C,t as h}from"./theme-DRtZtbPc.js";import"./Checkbox-CODv9_Wr.js";function re(t){return function(e,o,d){for(var p=-1,n=Object(e),l=d(e),u=l.length;u--;){var m=l[t?u:++p];if(o(n[m],m,n)===!1)break}return e}}var ne=re,le=ne,ce=le(),de=ce,pe=de,ue=z;function me(t,e){return t&&pe(t,e,ue)}var ve=me,fe=I;function he(t,e){return function(o,d){if(o==null)return o;if(!fe(o))return t(o,d);for(var p=o.length,n=e?p:-1,l=Object(o);(e?n--:++n<p)&&d(l[n],n,l)!==!1;);return o}}var xe=he,_e=ve,we=xe,be=we(_e),ge=be,Ce=ge,ke=I;function je(t,e){var o=-1,d=ke(t)?Array(t.length):[];return Ce(t,function(p,n,l){d[++o]=e(p,n,l)}),d}var ut=je,ye=W,Oe=H,Se=G,Be=U,De=Oe(function(t){return Se(ye(t,Be))}),Ie=De;const Me=X(Ie);var k={},Te=b;Object.defineProperty(k,"__esModule",{value:!0});var M=k.default=void 0,Fe=Te(g()),$e=w();M=k.default=(0,Fe.default)((0,$e.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var j={},Ae=b;Object.defineProperty(j,"__esModule",{value:!0});var T=j.default=void 0,Ne=Ae(g()),Ee=w();T=j.default=(0,Ne.default)((0,Ee.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"}),"Help");var y={},Le=b;Object.defineProperty(y,"__esModule",{value:!0});var F=y.default=void 0,Ve=Le(g()),Re=w();F=y.default=(0,Ve.default)((0,Re.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const Pe=C.div`
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
		font-weight: ${h.fontWeight.medium};
		font-size: 16px;
		line-height: 19px;
		color: ${h.newColors.almostBlack[100]};
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
			color: ${h.newColors.realTeal[100]};
		}
	}

	& .selected {
		border-left: 2px solid ${h.newColors.grey2[100]};
	}
`,qe=C.div`
	margin-bottom: 1rem;
`,ze=C.p`
	margin: 0px;
`;function mt(t){var S;const[e,o]=_.useState({options:[],selected:t.selected.map(s=>s.value),hasMore:!1,skip:0,keyword:void 0,comparison:t.comparison,loaded:!1,listOfChips:t.selected}),[d,p]=_.useState(!1),{t:n}=Z(),l=Math.abs(t.limit)||25,u=t.comparisons?t.comparisons.find(s=>s.value===e.comparison):void 0,m=t.selectLimit>0&&e.selected.length>=t.selectLimit;_.useEffect(()=>{async function s(){const r=await t.getOptions({limit:l,skip:e.skip});o({...e,options:r.docs,hasMore:r.hasMore===!0,skip:e.skip+l,loaded:!0})}s()},[]);const $=function(){o({...e,selected:[],comparison:"in",keyword:void 0,listOfChips:[]})},A=function(){t.onApply({value:v?[]:e.selected,comparison:e.comparison})},N=s=>()=>{var c;const r=Me(e.selected,[s.value]),i=e.listOfChips.filter(q=>q.value!==s.value);(c=t.onChange)==null||c.call(t,i),o({...e,selected:r,listOfChips:i})},E=function(s){const r=s.currentTarget;async function i(){const c=await t.getOptions({limit:l,skip:e.skip,keyword:e.keyword});o({...e,options:[...e.options,...c.docs],hasMore:c.hasMore===!0,skip:e.skip+l}),r.blur()}i()},L=K(function(s){const r=s||void 0;p(!!t.createNewOption&&s.trim().length>0);async function i(){const c=await t.getOptions({limit:l,skip:0,keyword:r});o({...e,options:c.docs,hasMore:c.hasMore===!0,keyword:r,skip:l})}i()},200),V=function(s){L(s.target.value)},R=async()=>{const s=await t.createNewOption(e.keyword);o({...e,options:[...e.options,s]})};let O;if(t.comparisons){const s=t.comparisons.map(i=>({label:i.label,onClick:function(){["exists","not_exists"].includes(i.value)===!0&&o({...e,selected:[]}),o({...e,comparison:i.value})}})),r={In:"The row must match one of selected option.","Not In":"The row must match none of the selected options.",All:"The row must match all of the selected options.",Exists:"The row must have a value for this filter.","Not Exists":"The row must not have a value for this filter."};O=a.jsxs("div",{className:"comparisonDropdown",children:[a.jsx(qe,{children:a.jsx(ie,{tag:"h3",children:n("mosaic:DataView.comparison")})}),a.jsxs(se,{children:[a.jsx(f,{label:u.label,variant:"outlined",color:"black",iconPosition:"right",mIcon:Q,menuItems:s}),a.jsx(f,{variant:"icon",color:"blue",mIcon:T,popover:a.jsx(ze,{children:s.map((i,c)=>a.jsxs("span",{children:[a.jsx("b",{children:i.label})," ","-"," ",r[i.label],a.jsx("br",{})]},c))})})]})]})}const v=["exists","not_exists"].includes(e.comparison),x=t.isOpen&&e.loaded,P=async function(s){var i;const r=[...s];(i=t.onChange)==null||i.call(t,r),o({...e,selected:r.map(c=>c.value),listOfChips:r})};return a.jsxs(Pe,{"data-testid":B.DATA_VIEW_FILTER_MULTI_CONTENT,children:[a.jsxs("div",{className:"topBlock",children:[a.jsxs("div",{"data-testid":B.DATA_VIEW_FILTER_MULTI_OPTIONS,className:`options ${v?"disabled":""}`,children:[a.jsx(te,{autoComplete:"off",InputProps:{startAdornment:a.jsx(D,{position:"start",children:a.jsx(M,{})}),endAdornment:d&&a.jsx(D,{position:"end",children:a.jsx(f,{label:"Create",variant:"text",color:"teal",className:"realTeal-icon",mIcon:F,onClick:R})})},className:"searchBar",placeholder:t.placeholder||n("mosaic:common.keyword___"),autoFocus:!0,onChange:V,fieldSize:"100%"}),!x&&a.jsx(oe,{className:"spinner"}),x&&a.jsx(J,{checked:v?[]:e.listOfChips,options:e.options,onChange:P,disabled:m}),e.hasMore&&a.jsx("div",{className:"loadContainer",children:a.jsx(f,{label:n("mosaic:common.load_more___"),color:"blue",variant:"outlined",fullWidth:!0,onClick:E})})]}),a.jsxs("div",{className:"selected",children:[O,!v&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"selected-options-title",children:n("mosaic:DataView.selected_options")}),a.jsx("div",{className:"chips",children:x&&((S=e.listOfChips)==null?void 0:S.length)>0&&e.listOfChips.map(s=>a.jsx(Y,{className:"chip",label:s.label,onDelete:N(s)},s.value))})]})]})]}),!t.hideButtons&&a.jsx(a.Fragment,{children:a.jsx(ae,{onApply:A,onClear:$})})]})}const He={actions:"Actions",clear_filters:"Clear filters",column_order:"Column Order",columns:"Columns",comparison:"Comparison",default:"Default",default_view:"Default View",filters:"Filters",go:"Go",jump_to_page:"Jump to Page",label:"Label",mine:"Mine",more:"More",overwrite_current_view:"Overwrite Current View",page:"Page",remove:"Remove",save_as:"Save As",view:"View",save_as_new_view:"Save as New View",save_view:"Save View",saved_views:"Saved Views",no_view_selected:"No view selected",selected_options:"Selected Options",show_for_all_users:"Show for all Users",table_settings:"Table Settings",type:"Type",cancel_save_view:"Cancel save view",cancel_saved_views:"Cancel saved views",cancel_table_settings:"Cancel table settings"},We={clear_filters:"Limpiar filtros",columns:"Columnas",default_view:"Vista predeterminada",filters:"Filtros",jump_to_page:"Ir a la página",more:"Más",overwrite_current_view:"Sobrescribir vista actual",save_as:"Guardar como",save_as_new_view:"Guardar como nueva vista",save_view:"Guardar Vista"},Ge={en:He,es:We};ee({prefix:"DataView",bundle:Ge});export{mt as D,ut as _,ve as a,F as d,Ge as l};
