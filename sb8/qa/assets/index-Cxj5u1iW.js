import{r as U,o as T,f as G,s as W,t as X,i as J,C as K}from"./CheckboxList-BqPA3yNH.js";import{j as a}from"./jsx-runtime-CexXSJP5.js";import{g as Q,r as x}from"./index-BP8_t0zE.js";import{d as Y}from"./debounce-C_xMouBr.js";import{d as Z}from"./DataViewPrimaryFilter.styled-CTR0uMlm.js";import{r as B,i as M}from"./createSvgIcon-BSB-bEHM.js";import{S as ee,a as te}from"./FormFieldText.styled-CusvceWb.js";import{B as C}from"./Button-CV4WQHOn.js";import{B as ae}from"./ButtonRow-BUuIelsn.js";import{S as se}from"./Spinner-tjn3ihlQ.js";import{C as oe}from"./Chip-o_TLrMPM.js";import"./Typography-Bm8mlfoU.js";import{S as ie}from"./SubtitleText-A3erhwRa.js";import{u as ne,a as re}from"./useMosaicTranslation-DzvJLSut.js";import{a as le,g as ce,s as de,b as S,u as pe,_ as ue,d as me,c as $,e as ve}from"./useThemeProps-CM1XnGOG.js";import{u as he,F as fe}from"./formControlState-CeBwnzuK.js";import{T as xe}from"./FormControlLabel-Cy6KcgOl.js";import"./isSymbol-CEVJpixJ.js";import{s as y,t as f}from"./theme-D4oZEIDo.js";import"./Checkbox-_RXYTNJz.js";function we(t){return function(e,s,l){for(var c=-1,i=Object(e),n=l(e),u=n.length;u--;){var v=n[t?u:++c];if(s(i[v],v,i)===!1)break}return e}}var _e=we,be=_e,ge=be(),Ce=ge,ye=Ce,je=U;function ke(t,e){return t&&ye(t,e,je)}var Oe=ke,Se=T;function $e(t,e){return function(s,l){if(s==null)return s;if(!Se(s))return t(s,l);for(var c=s.length,i=e?c:-1,n=Object(s);(e?i--:++i<c)&&l(n[i],i,n)!==!1;);return s}}var Be=$e,Me=Oe,Fe=Be,Ie=Fe(Me),Ae=Ie,De=Ae,Ee=T;function Pe(t,e){var s=-1,l=Ee(t)?Array(t.length):[];return De(t,function(c,i,n){l[++s]=e(c,i,n)}),l}var At=Pe,Le=W,Ne=G,Te=X,Re=J,ze=Ne(function(t){return Te(Le(t,Re))}),Ve=ze;const He=Q(Ve);var F={},qe=M;Object.defineProperty(F,"__esModule",{value:!0});var R=F.default=void 0,Ue=qe(B()),Ge=a,We=(0,Ue.default)((0,Ge.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");R=F.default=We;var I={},Xe=M;Object.defineProperty(I,"__esModule",{value:!0});var z=I.default=void 0,Je=Xe(B()),Ke=a,Qe=(0,Je.default)((0,Ke.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");z=I.default=Qe;var A={},Ye=M;Object.defineProperty(A,"__esModule",{value:!0});var V=A.default=void 0,Ze=Ye(B()),et=a,tt=(0,Ze.default)((0,et.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");V=A.default=tt;const at=y.div`
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
`,st=y.div`
	margin-bottom: 1rem;
`,ot=y.p`
	margin: 0px;
`;y.hr`
	border: 2px solid ${f.newColors.grey2[100]};
	margin:  ${({$margin:t})=>t||"0px -16px"};
`;function it(t){return ce("MuiInputAdornment",t)}const P=le("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var L;const nt=["children","className","component","disablePointerEvents","disableTypography","position","variant"],rt=(t,e)=>{const{ownerState:s}=t;return[e.root,e[`position${$(s.position)}`],s.disablePointerEvents===!0&&e.disablePointerEvents,e[s.variant]]},lt=t=>{const{classes:e,disablePointerEvents:s,hiddenLabel:l,position:c,size:i,variant:n}=t,u={root:["root",s&&"disablePointerEvents",c&&`position${$(c)}`,n,l&&"hiddenLabel",i&&`size${$(i)}`]};return ve(u,it,e)},ct=de("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>S({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},e.variant==="filled"&&{[`&.${P.positionStart}&:not(.${P.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),N=x.forwardRef(function(e,s){const l=pe({props:e,name:"MuiInputAdornment"}),{children:c,className:i,component:n="div",disablePointerEvents:u=!1,disableTypography:v=!1,position:w,variant:_}=l,j=ue(l,nt),m=he()||{};let h=_;_&&m.variant,m&&!h&&(h=m.variant);const b=S({},l,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:u,position:w,variant:h}),k=lt(b);return a.jsx(fe.Provider,{value:null,children:a.jsx(ct,S({as:n,ownerState:b,className:me(k.root,i),ref:s},j,{children:typeof c=="string"&&!v?a.jsx(xe,{color:"text.secondary",children:c}):a.jsxs(x.Fragment,{children:[w==="start"?L||(L=a.jsx("span",{className:"notranslate",children:"​"})):null,c]})}))})});function Dt(t){var E;const[e,s]=x.useState({options:[],selected:t.selected.map(o=>o.value),hasMore:!1,skip:0,keyword:void 0,comparison:t.comparison,loaded:!1,listOfChips:t.selected}),[l,c]=x.useState(!1),{t:i}=ne(),n=Math.abs(t.limit)||25,u=t.comparisons?t.comparisons.find(o=>o.value===e.comparison):void 0,v=t.selectLimit>0&&e.selected.length>=t.selectLimit;x.useEffect(()=>{async function o(){const d=await t.getOptions({limit:n,skip:e.skip});s({...e,options:d.docs,hasMore:d.hasMore===!0,skip:e.skip+n,loaded:!0})}o()},[]);const w=function(){s({...e,selected:[],comparison:"in",keyword:void 0,listOfChips:[]})},_=function(){t.onApply({value:g?[]:e.selected,comparison:e.comparison})},j=o=>()=>{var p;const d=He(e.selected,[o.value]),r=e.listOfChips.filter(q=>q.value!==o.value);(p=t.onChange)==null||p.call(t,r),s({...e,selected:d,listOfChips:r})},m=function(o){const d=o.currentTarget;async function r(){const p=await t.getOptions({limit:n,skip:e.skip,keyword:e.keyword});s({...e,options:[...e.options,...p.docs],hasMore:p.hasMore===!0,skip:e.skip+n}),d.blur()}r()},h=Y(function(o){c(!!t.createNewOption&&o.trim().length>0);async function d(){const r=await t.getOptions({limit:n,skip:0,keyword:o});s({...e,options:r.docs,hasMore:r.hasMore===!0,keyword:o===""?void 0:o,skip:n})}d()},200),b=function(o){h(o.target.value)},k=async()=>{const o=await t.createNewOption(e.keyword);s({...e,options:[...e.options,o]})};let D;if(t.comparisons){const o=t.comparisons.map(r=>({label:r.label,onClick:function(){["exists","not_exists"].includes(r.value)===!0&&s({...e,selected:[]}),s({...e,comparison:r.value})}})),d={In:"The row must match one of selected option.","Not In":"The row must match none of the selected options.",All:"The row must match all of the selected options.",Exists:"The row must have a value for this filter.","Not Exists":"The row must not have a value for this filter."};D=a.jsxs("div",{className:"comparisonDropdown",children:[a.jsx(st,{children:a.jsx(ie,{tag:"h3",children:i("mosaic:DataView.comparison")})}),a.jsxs(ae,{children:[a.jsx(C,{label:u.label,variant:"outlined",color:"black",iconPosition:"right",mIcon:Z,menuItems:o}),a.jsx(C,{variant:"icon",color:"blue",mIcon:z,popover:a.jsx(ot,{children:o.map((r,p)=>a.jsxs("span",{children:[a.jsx("b",{children:r.label})," ","-"," ",d[r.label],a.jsx("br",{})]},p))})})]})]})}const g=["exists","not_exists"].includes(e.comparison),O=t.isOpen&&e.loaded,H=async function(o){var r;const d=[...o];(r=t.onChange)==null||r.call(t,d),s({...e,selected:d.map(p=>p.value),listOfChips:d})};return a.jsxs(at,{children:[a.jsxs("div",{className:"topBlock",children:[a.jsxs("div",{className:`options ${g?"disabled":""}`,children:[a.jsx(ee,{autoComplete:"off",InputProps:{startAdornment:a.jsx(N,{position:"start",children:a.jsx(R,{})}),endAdornment:l&&a.jsx(N,{position:"end",children:a.jsx(C,{label:"Create",variant:"text",color:"teal",className:"realTeal-icon",mIcon:V,onClick:k})})},className:"searchBar",placeholder:t.placeholder||i("mosaic:common.keyword___"),autoFocus:!0,onChange:b,fieldSize:"100%"}),!O&&a.jsx(se,{className:"spinner"}),O&&a.jsx(K,{checked:g?[]:e.listOfChips,options:e.options,onChange:H,disabled:v}),e.hasMore&&a.jsx("div",{className:"loadContainer",children:a.jsx(C,{label:i("mosaic:common.load_more___"),color:"blue",variant:"outlined",fullWidth:!0,onClick:m})})]}),a.jsxs("div",{className:"selected",children:[D,!g&&a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"selected-options-title",children:i("mosaic:DataView.selected_options")}),a.jsx("div",{className:"chips",children:O&&((E=e.listOfChips)==null?void 0:E.length)>0&&e.listOfChips.map(o=>a.jsx(oe,{className:"chip",label:o.label,onDelete:j(o)},o.value))})]})]})]}),!t.hideButtons&&a.jsx(a.Fragment,{children:a.jsx(te,{onApply:_,onClear:w})})]})}const dt={actions:"Actions",clear_filters:"Clear filters",column_order:"Column Order",columns:"Columns",comparison:"Comparison",default:"Default",default_view:"Default View",filters:"Filters",go:"Go",jump_to_page:"Jump to Page",label:"Label",mine:"Mine",more:"More",overwrite_current_view:"Overwrite Current View",page:"Page",remove:"Remove",save_as:"Save As",view:"View",save_as_new_view:"Save as New View",save_view:"Save View",saved_views:"Saved Views",no_view_selected:"No view selected",selected_options:"Selected Options",show_for_all_users:"Show for all Users",table_settings:"Table Settings",type:"Type",cancel_save_view:"Cancel save view",cancel_saved_views:"Cancel saved views",cancel_table_settings:"Cancel table settings"},pt={clear_filters:"Limpiar filtros",columns:"Columnas",default_view:"Vista predeterminada",filters:"Filtros",jump_to_page:"Ir a la página",more:"Más",overwrite_current_view:"Sobrescribir vista actual",save_as:"Guardar como",save_as_new_view:"Guardar como nueva vista",save_view:"Guardar Vista"},ut={en:dt,es:pt};re({prefix:"DataView",bundle:ut});export{Dt as D,N as I,At as _,Oe as a,V as d,ut as l,He as x};
