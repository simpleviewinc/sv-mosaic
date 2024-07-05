import{r as U,o as T,f as W,s as X,t as K,i as G,C as J}from"./CheckboxList-BCG88NR0.js";import{j as o}from"./jsx-runtime-CexXSJP5.js";import{g as Q,r as v}from"./index-BP8_t0zE.js";import{d as Y}from"./debounce-C_xMouBr.js";import{d as Z}from"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import{r as B,i as I}from"./createSvgIcon-CQgce1KM.js";import{S as ee,a as te}from"./FormFieldText.styled-C9eExh2D.js";import{B as j}from"./Button-BBNnoZZP.js";import{B as oe}from"./ButtonRow-BZVmEtFA.js";import{S as se}from"./Spinner-BPM3b5sV.js";import{C as ae}from"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import{S as ne}from"./SubtitleText-jYpjhjNV.js";import{u as ie}from"./useMosaicTranslation-DzvJLSut.js";import{s as b,t as x}from"./theme-CtvfJOCv.js";import{a as re,g as le,s as ce,b as S,u as de,_ as pe,d as ue,c as $,e as me}from"./useThemeProps-Ds-LJhvX.js";import{u as he,F as fe}from"./formControlState-CeBwnzuK.js";import{T as ve}from"./FormControlLabel-CIIRzCdb.js";function xe(t){return function(e,s,l){for(var c=-1,n=Object(e),i=l(e),u=i.length;u--;){var h=i[t?u:++c];if(s(n[h],h,n)===!1)break}return e}}var be=xe,ge=be,we=ge(),ye=we,_e=ye,je=U;function Ce(t,e){return t&&_e(t,e,je)}var ke=Ce,Oe=T;function Se(t,e){return function(s,l){if(s==null)return s;if(!Oe(s))return t(s,l);for(var c=s.length,n=e?c:-1,i=Object(s);(e?n--:++n<c)&&l(i[n],n,i)!==!1;);return s}}var $e=Se,Be=ke,Ie=$e,Me=Ie(Be),Ee=Me,Fe=Ee,Ae=T;function De(t,e){var s=-1,l=Ae(t)?Array(t.length):[];return Fe(t,function(c,n,i){l[++s]=e(c,n,i)}),l}var Bt=De,Pe=X,Le=W,Ne=K,Te=G,ze=Le(function(t){return Ne(Pe(t,Te))}),Re=ze;const He=Q(Re);var M={},Ve=I;Object.defineProperty(M,"__esModule",{value:!0});var z=M.default=void 0,qe=Ve(B()),Ue=o,We=(0,qe.default)((0,Ue.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");z=M.default=We;var E={},Xe=I;Object.defineProperty(E,"__esModule",{value:!0});var R=E.default=void 0,Ke=Xe(B()),Ge=o,Je=(0,Ke.default)((0,Ge.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");R=E.default=Je;var F={},Qe=I;Object.defineProperty(F,"__esModule",{value:!0});var H=F.default=void 0,Ye=Qe(B()),Ze=o,et=(0,Ye.default)((0,Ze.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");H=F.default=et;const tt=b.div`
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
		font-weight: ${x.fontWeight.medium};
		font-size: 16px;
		line-height: 19px;
		color: ${x.newColors.almostBlack[100]};
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
			color: ${x.newColors.realTeal[100]};
		}
	}
`,ot=b.div`
	margin-bottom: 1rem;
`,st=b.p`
	margin: 0px;
`,at=b.hr`
	border: 2px solid ${x.newColors.grey2[100]};
	margin:  ${({$margin:t})=>t||"0px -16px"};
`,nt=b.hr`
	border: 2px solid ${x.newColors.grey2[100]};
	margin: ${({$margin:t})=>t||"-32px 0px 0px 0px"};
`;function it(t){return le("MuiInputAdornment",t)}const P=re("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var L;const rt=["children","className","component","disablePointerEvents","disableTypography","position","variant"],lt=(t,e)=>{const{ownerState:s}=t;return[e.root,e[`position${$(s.position)}`],s.disablePointerEvents===!0&&e.disablePointerEvents,e[s.variant]]},ct=t=>{const{classes:e,disablePointerEvents:s,hiddenLabel:l,position:c,size:n,variant:i}=t,u={root:["root",s&&"disablePointerEvents",c&&`position${$(c)}`,i,l&&"hiddenLabel",n&&`size${$(n)}`]};return me(u,it,e)},dt=ce("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:lt})(({theme:t,ownerState:e})=>S({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},e.variant==="filled"&&{[`&.${P.positionStart}&:not(.${P.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),N=v.forwardRef(function(e,s){const l=de({props:e,name:"MuiInputAdornment"}),{children:c,className:n,component:i="div",disablePointerEvents:u=!1,disableTypography:h=!1,position:g,variant:w}=l,C=pe(l,rt),m=he()||{};let f=w;w&&m.variant,m&&!f&&(f=m.variant);const y=S({},l,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:u,position:g,variant:f}),k=ct(y);return o.jsx(fe.Provider,{value:null,children:o.jsx(dt,S({as:i,ownerState:y,className:ue(k.root,n),ref:s},C,{children:typeof c=="string"&&!h?o.jsx(ve,{color:"text.secondary",children:c}):o.jsxs(v.Fragment,{children:[g==="start"?L||(L=o.jsx("span",{className:"notranslate",children:"​"})):null,c]})}))})});function It(t){var D;const[e,s]=v.useState({options:[],selected:t.selected.map(a=>a.value),hasMore:!1,skip:0,keyword:void 0,comparison:t.comparison,loaded:!1,listOfChips:t.selected}),[l,c]=v.useState(!1),{t:n}=ie(),i=Math.abs(t.limit)||25,u=t.comparisons?t.comparisons.find(a=>a.value===e.comparison):void 0,h=t.selectLimit>0&&e.selected.length>=t.selectLimit;v.useEffect(()=>{async function a(){const d=await t.getOptions({limit:i,skip:e.skip});s({...e,options:d.docs,hasMore:d.hasMore===!0,skip:e.skip+i,loaded:!0})}a()},[]);const g=function(){s({...e,selected:[],comparison:"in",keyword:void 0,listOfChips:[]})},w=function(){t.onApply({value:_?[]:e.selected,comparison:e.comparison})},C=a=>()=>{var p;const d=He(e.selected,[a.value]),r=e.listOfChips.filter(q=>q.value!==a.value);(p=t.onChange)==null||p.call(t,r),s({...e,selected:d,listOfChips:r})},m=function(a){const d=a.currentTarget;async function r(){const p=await t.getOptions({limit:i,skip:e.skip,keyword:e.keyword});s({...e,options:[...e.options,...p.docs],hasMore:p.hasMore===!0,skip:e.skip+i}),d.blur()}r()},f=Y(function(a){c(!!t.createNewOption&&a.trim().length>0);async function d(){const r=await t.getOptions({limit:i,skip:0,keyword:a});s({...e,options:r.docs,hasMore:r.hasMore===!0,keyword:a===""?void 0:a,skip:i})}d()},200),y=function(a){f(a.target.value)},k=async()=>{const a=await t.createNewOption(e.keyword);s({...e,options:[...e.options,a]})};let A;if(t.comparisons){const a=t.comparisons.map(r=>({label:r.label,onClick:function(){["exists","not_exists"].includes(r.value)===!0&&s({...e,selected:[]}),s({...e,comparison:r.value})}})),d={In:"The row must match one of selected option.","Not In":"The row must match none of the selected options.",All:"The row must match all of the selected options.",Exists:"The row must have a value for this filter.","Not Exists":"The row must not have a value for this filter."};A=o.jsxs("div",{className:"comparisonDropdown",children:[o.jsx(ot,{children:o.jsx(ne,{tag:"h3",children:n("mosaic:DataView.comparison")})}),o.jsxs(oe,{children:[o.jsx(j,{label:u.label,variant:"outlined",color:"black",iconPosition:"right",mIcon:Z,menuItems:a}),o.jsx(j,{variant:"icon",color:"blue",mIcon:R,popover:o.jsx(st,{children:a.map((r,p)=>o.jsxs("span",{children:[o.jsx("b",{children:r.label})," ","-",d[r.label],o.jsx("br",{})]},p))})})]})]})}const _=["exists","not_exists"].includes(e.comparison),O=t.isOpen&&e.loaded,V=async function(a){var r;const d=[...a];(r=t.onChange)==null||r.call(t,d),s({...e,selected:d.map(p=>p.value),listOfChips:d})};return o.jsxs(tt,{children:[o.jsxs("div",{className:"topBlock",children:[o.jsxs("div",{className:`options ${_?"disabled":""}`,children:[o.jsx(ee,{autoComplete:"off",InputProps:{startAdornment:o.jsx(N,{position:"start",children:o.jsx(z,{})}),endAdornment:l&&o.jsx(N,{position:"end",children:o.jsx(j,{label:"Create",variant:"text",color:"teal",className:"realTeal-icon",mIcon:H,onClick:k})})},className:"searchBar",placeholder:t.placeholder||n("mosaic:common.keyword___"),autoFocus:!0,onChange:y,fieldSize:"100%"}),!O&&o.jsx(se,{className:"spinner"}),O&&o.jsx(J,{checked:_?[]:e.listOfChips,options:e.options,onChange:V,disabled:h}),e.hasMore&&o.jsx("div",{className:"loadContainer",children:o.jsx(j,{label:n("mosaic:common.load_more___"),color:"blue",variant:"outlined",fullWidth:!0,onClick:m})})]}),o.jsx(nt,{}),o.jsxs("div",{className:"selected",children:[A,!_&&o.jsxs(o.Fragment,{children:[o.jsx("p",{className:"selected-options-title",children:n("mosaic:DataView.selected_options")}),o.jsx("div",{className:"chips",children:O&&((D=e.listOfChips)==null?void 0:D.length)>0&&e.listOfChips.map(a=>o.jsx(ae,{className:"chip",label:a.label,onDelete:C(a)},a.value))})]})]})]}),!t.hideButtons&&o.jsxs(o.Fragment,{children:[o.jsx(at,{}),o.jsx(te,{onApply:w,onClear:g})]})]})}export{It as D,N as I,Bt as _,ke as a,H as d,He as x};
