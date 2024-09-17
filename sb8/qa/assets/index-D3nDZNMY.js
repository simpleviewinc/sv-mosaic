import{r as U,o as T,f as G,s as W,t as X,i as J,C as K}from"./CheckboxList-vtqXYb3p.js";import{j as a}from"./jsx-runtime-CexXSJP5.js";import{g as Q,r as x}from"./index-BP8_t0zE.js";import{d as Y}from"./debounce-C_xMouBr.js";import{d as Z}from"./DataViewPrimaryFilter.styled-BbvqwW3v.js";import{i as M,a as ee,g as te,s as ae,d as S,u as se,_ as oe,e as ie,b as B,f as ne}from"./generateUtilityClasses-Bq4SLC4n.js";import{r as $}from"./createSvgIcon-CLmY5moR.js";import{S as re,a as le}from"./FormFieldText.styled-Dy7YdaNR.js";import{B as C}from"./Button-nZpOdxAh.js";import{B as ce}from"./ButtonRow-mHN3ze0L.js";import{S as de}from"./Spinner-BweMUiuT.js";import{C as pe}from"./Chip-CULEVs9E.js";import"./Typography-cUIkDVC5.js";import{S as ue}from"./SubtitleText-BtBCMBDH.js";import{u as me,a as ve}from"./useMosaicTranslation-CZCb37QS.js";import{u as he,F as fe}from"./formControlState-D52vkf9K.js";import{T as xe}from"./FormControlLabel-CADsa67j.js";import"./isSymbol-CEVJpixJ.js";import{s as y,t as f}from"./theme-Cyujm90X.js";import"./Checkbox-DlKnOsMd.js";function we(t){return function(e,s,l){for(var c=-1,i=Object(e),n=l(e),u=n.length;u--;){var v=n[t?u:++c];if(s(i[v],v,i)===!1)break}return e}}var _e=we,be=_e,ge=be(),Ce=ge,ye=Ce,je=U;function ke(t,e){return t&&ye(t,e,je)}var Oe=ke,Se=T;function Be(t,e){return function(s,l){if(s==null)return s;if(!Se(s))return t(s,l);for(var c=s.length,i=e?c:-1,n=Object(s);(e?i--:++i<c)&&l(n[i],i,n)!==!1;);return s}}var Me=Be,$e=Oe,De=Me,Fe=De($e),Ie=Fe,Ae=Ie,Ee=T;function Pe(t,e){var s=-1,l=Ee(t)?Array(t.length):[];return Ae(t,function(c,i,n){l[++s]=e(c,i,n)}),l}var $t=Pe,Le=W,Ne=G,Te=X,Re=J,Ve=Ne(function(t){return Te(Le(t,Re))}),ze=Ve;const He=Q(ze);var D={},qe=M;Object.defineProperty(D,"__esModule",{value:!0});var R=D.default=void 0,Ue=qe($()),Ge=a;R=D.default=(0,Ue.default)((0,Ge.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var F={},We=M;Object.defineProperty(F,"__esModule",{value:!0});var V=F.default=void 0,Xe=We($()),Je=a;V=F.default=(0,Xe.default)((0,Je.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"}),"Help");var I={},Ke=M;Object.defineProperty(I,"__esModule",{value:!0});var z=I.default=void 0,Qe=Ke($()),Ye=a;z=I.default=(0,Qe.default)((0,Ye.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const Ze=y.div`
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
		font-weight: ${f.fontWeight.medium};
		font-size: 16px;
		line-height: 19px;
		color: ${f.newColors.almostBlack[100]};
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
			color: ${f.newColors.realTeal[100]};
		}
	}

	& .selected {
		border-left: 2px solid ${f.newColors.grey2[100]};
	}
`,et=y.div`
	margin-bottom: 1rem;
`,tt=y.p`
	margin: 0px;
`;y.hr`
	border: 2px solid ${f.newColors.grey2[100]};
	margin:  ${({$margin:t})=>t||"0px -16px"};
`;function at(t){return te("MuiInputAdornment",t)}const P=ee("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var L;const st=["children","className","component","disablePointerEvents","disableTypography","position","variant"],ot=(t,e)=>{const{ownerState:s}=t;return[e.root,e[`position${B(s.position)}`],s.disablePointerEvents===!0&&e.disablePointerEvents,e[s.variant]]},it=t=>{const{classes:e,disablePointerEvents:s,hiddenLabel:l,position:c,size:i,variant:n}=t,u={root:["root",s&&"disablePointerEvents",c&&`position${B(c)}`,n,l&&"hiddenLabel",i&&`size${B(i)}`]};return ne(u,at,e)},nt=ae("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:ot})(({theme:t,ownerState:e})=>S({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},e.variant==="filled"&&{[`&.${P.positionStart}&:not(.${P.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),N=x.forwardRef(function(e,s){const l=se({props:e,name:"MuiInputAdornment"}),{children:c,className:i,component:n="div",disablePointerEvents:u=!1,disableTypography:v=!1,position:w,variant:_}=l,j=oe(l,st),m=he()||{};let h=_;_&&m.variant,m&&!h&&(h=m.variant);const b=S({},l,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:u,position:w,variant:h}),k=it(b);return a.jsx(fe.Provider,{value:null,children:a.jsx(nt,S({as:n,ownerState:b,className:ie(k.root,i),ref:s},j,{children:typeof c=="string"&&!v?a.jsx(xe,{color:"text.secondary",children:c}):a.jsxs(x.Fragment,{children:[w==="start"?L||(L=a.jsx("span",{className:"notranslate",children:"​"})):null,c]})}))})});function Dt(t){var E;const[e,s]=x.useState({options:[],selected:t.selected.map(o=>o.value),hasMore:!1,skip:0,keyword:void 0,comparison:t.comparison,loaded:!1,listOfChips:t.selected}),[l,c]=x.useState(!1),{t:i}=me(),n=Math.abs(t.limit)||25,u=t.comparisons?t.comparisons.find(o=>o.value===e.comparison):void 0,v=t.selectLimit>0&&e.selected.length>=t.selectLimit;x.useEffect(()=>{async function o(){const d=await t.getOptions({limit:n,skip:e.skip});s({...e,options:d.docs,hasMore:d.hasMore===!0,skip:e.skip+n,loaded:!0})}o()},[]);const w=function(){s({...e,selected:[],comparison:"in",keyword:void 0,listOfChips:[]})},_=function(){t.onApply({value:g?[]:e.selected,comparison:e.comparison})},j=o=>()=>{var p;const d=He(e.selected,[o.value]),r=e.listOfChips.filter(q=>q.value!==o.value);(p=t.onChange)==null||p.call(t,r),s({...e,selected:d,listOfChips:r})},m=function(o){const d=o.currentTarget;async function r(){const p=await t.getOptions({limit:n,skip:e.skip,keyword:e.keyword});s({...e,options:[...e.options,...p.docs],hasMore:p.hasMore===!0,skip:e.skip+n}),d.blur()}r()},h=Y(function(o){c(!!t.createNewOption&&o.trim().length>0);async function d(){const r=await t.getOptions({limit:n,skip:0,keyword:o});s({...e,options:r.docs,hasMore:r.hasMore===!0,keyword:o===""?void 0:o,skip:n})}d()},200),b=function(o){h(o.target.value)},k=async()=>{const o=await t.createNewOption(e.keyword);s({...e,options:[...e.options,o]})};let A;if(t.comparisons){const o=t.comparisons.map(r=>({label:r.label,onClick:function(){["exists","not_exists"].includes(r.value)===!0&&s({...e,selected:[]}),s({...e,comparison:r.value})}})),d={In:"The row must match one of selected option.","Not In":"The row must match none of the selected options.",All:"The row must match all of the selected options.",Exists:"The row must have a value for this filter.","Not Exists":"The row must not have a value for this filter."};A=a.jsxs("div",{className:"comparisonDropdown",children:[a.jsx(et,{children:a.jsx(ue,{tag:"h3",children:i("mosaic:DataView.comparison")})}),a.jsxs(ce,{children:[a.jsx(C,{label:u.label,variant:"outlined",color:"black",iconPosition:"right",mIcon:Z,menuItems:o}),a.jsx(C,{variant:"icon",color:"blue",mIcon:V,popover:a.jsx(tt,{children:o.map((r,p)=>a.jsxs("span",{children:[a.jsx("b",{children:r.label})," ","-"," ",d[r.label],a.jsx("br",{})]},p))})})]})]})}const g=["exists","not_exists"].includes(e.comparison),O=t.isOpen&&e.loaded,H=async function(o){var r;const d=[...o];(r=t.onChange)==null||r.call(t,d),s({...e,selected:d.map(p=>p.value),listOfChips:d})};return a.jsxs(Ze,{children:[a.jsxs("div",{className:"topBlock",children:[a.jsxs("div",{className:`options ${g?"disabled":""}`,children:[a.jsx(re,{autoComplete:"off",InputProps:{startAdornment:a.jsx(N,{position:"start",children:a.jsx(R,{})}),endAdornment:l&&a.jsx(N,{position:"end",children:a.jsx(C,{label:"Create",variant:"text",color:"teal",className:"realTeal-icon",mIcon:z,onClick:k})})},className:"searchBar",placeholder:t.placeholder||i("mosaic:common.keyword___"),autoFocus:!0,onChange:b,fieldSize:"100%"}),!O&&a.jsx(de,{className:"spinner"}),O&&a.jsx(K,{checked:g?[]:e.listOfChips,options:e.options,onChange:H,disabled:v}),e.hasMore&&a.jsx("div",{className:"loadContainer",children:a.jsx(C,{label:i("mosaic:common.load_more___"),color:"blue",variant:"outlined",fullWidth:!0,onClick:m})})]}),a.jsxs("div",{className:"selected",children:[A,!g&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"selected-options-title",children:i("mosaic:DataView.selected_options")}),a.jsx("div",{className:"chips",children:O&&((E=e.listOfChips)==null?void 0:E.length)>0&&e.listOfChips.map(o=>a.jsx(pe,{className:"chip",label:o.label,onDelete:j(o)},o.value))})]})]})]}),!t.hideButtons&&a.jsx(a.Fragment,{children:a.jsx(le,{onApply:_,onClear:w})})]})}const rt={actions:"Actions",clear_filters:"Clear filters",column_order:"Column Order",columns:"Columns",comparison:"Comparison",default:"Default",default_view:"Default View",filters:"Filters",go:"Go",jump_to_page:"Jump to Page",label:"Label",mine:"Mine",more:"More",overwrite_current_view:"Overwrite Current View",page:"Page",remove:"Remove",save_as:"Save As",view:"View",save_as_new_view:"Save as New View",save_view:"Save View",saved_views:"Saved Views",no_view_selected:"No view selected",selected_options:"Selected Options",show_for_all_users:"Show for all Users",table_settings:"Table Settings",type:"Type",cancel_save_view:"Cancel save view",cancel_saved_views:"Cancel saved views",cancel_table_settings:"Cancel table settings"},lt={clear_filters:"Limpiar filtros",columns:"Columnas",default_view:"Vista predeterminada",filters:"Filtros",jump_to_page:"Ir a la página",more:"Más",overwrite_current_view:"Sobrescribir vista actual",save_as:"Guardar como",save_as_new_view:"Guardar como nueva vista",save_view:"Guardar Vista"},ct={en:rt,es:lt};ve({prefix:"DataView",bundle:ct});export{Dt as D,N as I,$t as _,Oe as a,z as d,ct as l,He as x};
