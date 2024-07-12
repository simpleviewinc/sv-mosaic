import{r as W,o as R,f as X,s as J,t as K,i as G,C as Q}from"./CheckboxList-D1zEVDHX.js";import{r as S,j as o}from"./jsx-runtime-nGUw9YhZ.js";import{g as Y,r as x}from"./index-BP8_t0zE.js";import{d as Z}from"./debounce-C_xMouBr.js";import{d as ee}from"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import{r as I,i as M}from"./createSvgIcon-Coberten.js";import{S as te,a as oe}from"./FormFieldText.styled-D8aJbBKM.js";import{B as _}from"./Button-uCo3N7IM.js";import{B as se}from"./ButtonRow-DW5Veo41.js";import{S as ae}from"./Spinner-D_slr9_p.js";import{C as ne}from"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import{S as ie}from"./SubtitleText-mEFPNCHN.js";import{u as re}from"./useMosaicTranslation-DzvJLSut.js";import{s as C,t as v}from"./theme-CtvfJOCv.js";import{a as le,g as ce,s as de,b as $,u as pe,_ as ue,d as me,c as B,e as he}from"./useThemeProps-Ds-LJhvX.js";import{u as fe,F as ve}from"./formControlState-CeBwnzuK.js";import{T as xe}from"./FormControlLabel-DCWWYNLI.js";function be(t){return function(e,s,l){for(var c=-1,n=Object(e),i=l(e),u=i.length;u--;){var h=i[t?u:++c];if(s(n[h],h,n)===!1)break}return e}}var ge=be,we=ge,ye=we(),_e=ye,Ce=_e,je=W;function ke(t,e){return t&&Ce(t,e,je)}var Oe=ke,$e=R;function Be(t,e){return function(s,l){if(s==null)return s;if(!$e(s))return t(s,l);for(var c=s.length,n=e?c:-1,i=Object(s);(e?n--:++n<c)&&l(i[n],n,i)!==!1;);return s}}var Se=Be,Ie=Oe,Me=Se,Ee=Me(Ie),Fe=Ee,Ae=Fe,De=R;function Pe(t,e){var s=-1,l=De(t)?Array(t.length):[];return Ae(t,function(c,n,i){l[++s]=e(c,n,i)}),l}var Bt=Pe,Le=J,Ne=X,Te=K,Re=G,ze=Ne(function(t){return Te(Le(t,Re))}),qe=ze;const He=Y(qe);var E={},Ve=M;Object.defineProperty(E,"__esModule",{value:!0});var z=E.default=void 0,Ue=Ve(I()),We=S(),Xe=(0,Ue.default)((0,We.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");z=E.default=Xe;var F={},Je=M;Object.defineProperty(F,"__esModule",{value:!0});var q=F.default=void 0,Ke=Je(I()),Ge=S(),Qe=(0,Ke.default)((0,Ge.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");q=F.default=Qe;var A={},Ye=M;Object.defineProperty(A,"__esModule",{value:!0});var H=A.default=void 0,Ze=Ye(I()),et=S(),tt=(0,Ze.default)((0,et.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");H=A.default=tt;const ot=C.div`
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
		font-weight: ${v.fontWeight.medium};
		font-size: 16px;
		line-height: 19px;
		color: ${v.newColors.almostBlack[100]};
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
			color: ${v.newColors.realTeal[100]};
		}
	}

	& .selected {
		border-left: 2px solid ${v.newColors.grey2[100]};
	}
`,st=C.div`
	margin-bottom: 1rem;
`,at=C.p`
	margin: 0px;
`;C.hr`
	border: 2px solid ${v.newColors.grey2[100]};
	margin:  ${({$margin:t})=>t||"0px -16px"};
`;function nt(t){return ce("MuiInputAdornment",t)}const L=le("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var N;const it=["children","className","component","disablePointerEvents","disableTypography","position","variant"],rt=(t,e)=>{const{ownerState:s}=t;return[e.root,e[`position${B(s.position)}`],s.disablePointerEvents===!0&&e.disablePointerEvents,e[s.variant]]},lt=t=>{const{classes:e,disablePointerEvents:s,hiddenLabel:l,position:c,size:n,variant:i}=t,u={root:["root",s&&"disablePointerEvents",c&&`position${B(c)}`,i,l&&"hiddenLabel",n&&`size${B(n)}`]};return he(u,nt,e)},ct=de("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>$({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},e.variant==="filled"&&{[`&.${L.positionStart}&:not(.${L.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),T=x.forwardRef(function(e,s){const l=pe({props:e,name:"MuiInputAdornment"}),{children:c,className:n,component:i="div",disablePointerEvents:u=!1,disableTypography:h=!1,position:b,variant:g}=l,j=ue(l,it),m=fe()||{};let f=g;g&&m.variant,m&&!f&&(f=m.variant);const w=$({},l,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:u,position:b,variant:f}),k=lt(w);return o.jsx(ve.Provider,{value:null,children:o.jsx(ct,$({as:i,ownerState:w,className:me(k.root,n),ref:s},j,{children:typeof c=="string"&&!h?o.jsx(xe,{color:"text.secondary",children:c}):o.jsxs(x.Fragment,{children:[b==="start"?N||(N=o.jsx("span",{className:"notranslate",children:"​"})):null,c]})}))})});function St(t){var P;const[e,s]=x.useState({options:[],selected:t.selected.map(a=>a.value),hasMore:!1,skip:0,keyword:void 0,comparison:t.comparison,loaded:!1,listOfChips:t.selected}),[l,c]=x.useState(!1),{t:n}=re(),i=Math.abs(t.limit)||25,u=t.comparisons?t.comparisons.find(a=>a.value===e.comparison):void 0,h=t.selectLimit>0&&e.selected.length>=t.selectLimit;x.useEffect(()=>{async function a(){const d=await t.getOptions({limit:i,skip:e.skip});s({...e,options:d.docs,hasMore:d.hasMore===!0,skip:e.skip+i,loaded:!0})}a()},[]);const b=function(){s({...e,selected:[],comparison:"in",keyword:void 0,listOfChips:[]})},g=function(){t.onApply({value:y?[]:e.selected,comparison:e.comparison})},j=a=>()=>{var p;const d=He(e.selected,[a.value]),r=e.listOfChips.filter(U=>U.value!==a.value);(p=t.onChange)==null||p.call(t,r),s({...e,selected:d,listOfChips:r})},m=function(a){const d=a.currentTarget;async function r(){const p=await t.getOptions({limit:i,skip:e.skip,keyword:e.keyword});s({...e,options:[...e.options,...p.docs],hasMore:p.hasMore===!0,skip:e.skip+i}),d.blur()}r()},f=Z(function(a){c(!!t.createNewOption&&a.trim().length>0);async function d(){const r=await t.getOptions({limit:i,skip:0,keyword:a});s({...e,options:r.docs,hasMore:r.hasMore===!0,keyword:a===""?void 0:a,skip:i})}d()},200),w=function(a){f(a.target.value)},k=async()=>{const a=await t.createNewOption(e.keyword);s({...e,options:[...e.options,a]})};let D;if(t.comparisons){const a=t.comparisons.map(r=>({label:r.label,onClick:function(){["exists","not_exists"].includes(r.value)===!0&&s({...e,selected:[]}),s({...e,comparison:r.value})}})),d={In:"The row must match one of selected option.","Not In":"The row must match none of the selected options.",All:"The row must match all of the selected options.",Exists:"The row must have a value for this filter.","Not Exists":"The row must not have a value for this filter."};D=o.jsxs("div",{className:"comparisonDropdown",children:[o.jsx(st,{children:o.jsx(ie,{tag:"h3",children:n("mosaic:DataView.comparison")})}),o.jsxs(se,{children:[o.jsx(_,{label:u.label,variant:"outlined",color:"black",iconPosition:"right",mIcon:ee,menuItems:a}),o.jsx(_,{variant:"icon",color:"blue",mIcon:q,popover:o.jsx(at,{children:a.map((r,p)=>o.jsxs("span",{children:[o.jsx("b",{children:r.label})," ","-",d[r.label],o.jsx("br",{})]},p))})})]})]})}const y=["exists","not_exists"].includes(e.comparison),O=t.isOpen&&e.loaded,V=async function(a){var r;const d=[...a];(r=t.onChange)==null||r.call(t,d),s({...e,selected:d.map(p=>p.value),listOfChips:d})};return o.jsxs(ot,{children:[o.jsxs("div",{className:"topBlock",children:[o.jsxs("div",{className:`options ${y?"disabled":""}`,children:[o.jsx(te,{autoComplete:"off",InputProps:{startAdornment:o.jsx(T,{position:"start",children:o.jsx(z,{})}),endAdornment:l&&o.jsx(T,{position:"end",children:o.jsx(_,{label:"Create",variant:"text",color:"teal",className:"realTeal-icon",mIcon:H,onClick:k})})},className:"searchBar",placeholder:t.placeholder||n("mosaic:common.keyword___"),autoFocus:!0,onChange:w,fieldSize:"100%"}),!O&&o.jsx(ae,{className:"spinner"}),O&&o.jsx(Q,{checked:y?[]:e.listOfChips,options:e.options,onChange:V,disabled:h}),e.hasMore&&o.jsx("div",{className:"loadContainer",children:o.jsx(_,{label:n("mosaic:common.load_more___"),color:"blue",variant:"outlined",fullWidth:!0,onClick:m})})]}),o.jsxs("div",{className:"selected",children:[D,!y&&o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"selected-options-title",children:n("mosaic:DataView.selected_options")}),o.jsx("div",{className:"chips",children:O&&((P=e.listOfChips)==null?void 0:P.length)>0&&e.listOfChips.map(a=>o.jsx(ne,{className:"chip",label:a.label,onDelete:j(a)},a.value))})]})]})]}),!t.hideButtons&&o.jsx(o.Fragment,{children:o.jsx(oe,{onApply:g,onClear:b})})]})}export{St as D,T as I,Bt as _,Oe as a,H as d,He as x};
