import{r as K,j as n}from"./jsx-runtime-EKYJJIwR.js";import{r as i,g as O}from"./index-D0AnReJb.js";import{s as p,t as d}from"./theme-BSoCkN4E.js";import{h as H}from"./generateUtilityClasses-DR3ZN2W1.js";import{r as W}from"./createSvgIcon-Dkn5Rwb8.js";import{C as G}from"./Close-KkbZKwWJ.js";import{D as J,C as U,S as V}from"./ChevronRight-BmBn2D1l.js";import{T as X}from"./TridentIcon-D2ALK7IE.js";import{b as Q,a as Y,d as Z}from"./debounce-jQnfRpl1.js";import{a as ee,P as te}from"./Popper-CwglX3X7.js";import{u as ne,a as oe}from"./useMosaicTranslation-CoWLI8L7.js";const x=i.createContext(null);var N={},R;function ae(){if(R)return N;R=1;var e=H();Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var a=e(W()),t=K();return N.default=(0,a.default)((0,t.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace"),N}var ie=ae();const re=O(ie),se={anchor:"left",variant:"temporary",ModalProps:{disableEnforceFocus:!0},PaperProps:{style:{borderRight:"0px",zIndex:"auto"}}};function D(e){const a=i.useContext(x),t=i.useMemo(()=>({zIndex:a.zIndex}),[a.zIndex]);return n.jsx(J,{...se,open:e.open,onClose:e.onClose,style:t,children:e.children})}const P=p.nav`
	background: #2e2e31;
	display: flex;
	flex-direction: column;
	height: 100%;
`,le=p.h3`
	color: ${d.colors.gray400};
	padding: 8px 16px;
	font-family: ${d.fontFamily};
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 14px;
	font-weight: normal;
	display: flex;
	align-items: center;
	line-height: 24px;

	& > span {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .icon {
		margin-right: 16px;
	}
`;function $(e){return n.jsxs(le,{title:e.label,children:[e.mIcon&&n.jsx(e.mIcon,{className:"icon"}),n.jsx("span",{children:e.label})]})}const ce=p.div`
	border-top: 1px solid ${d.newColors.grey4[100]};
`;function me(e){return n.jsxs(ce,{children:[n.jsx($,{label:e.item.label,mIcon:e.item.mIcon}),n.jsx(C,{items:e.item.items,onOpen:e.onOpen,openName:e.openName})]})}function C(e){const a=i.useContext(x);return n.jsx(i.Fragment,{children:e.items.map(t=>{const o=t.type==="group"?me:a.ItemComponent;return n.jsx(o,{item:t,showLabel:e.showLabel,openName:e.openName,onOpen:e.onOpen},t.name)})})}const ue=p.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px;
	color: ${d.colors.gray400};
	line-height: 24px;
	cursor: pointer;
	text-decoration: none;
	font-family: ${d.fontFamily};
	font-size: 14px;

	&.hasItems > .right > .arrow {
		visibility: visible;
	}

	&.active {
		background: ${d.colors.blue};
		color: white;
	}

	&.active:hover {
		background: ${d.colors.blueHover};
	}

	&:hover {
		background: #505057;
	}

	& > .left {
		display: flex;
		align-items: center;
		flex: 1 0 0px;
		min-width: 0;
	}

	&.showLabel > .left {
		margin-right: 10px;
	}

	&.showLabel > .left > .icon {
		margin-right: 16px;
	}

	& > .left > .navLabel {
		color: ${d.newColors.grey2[100]};
		font-size: 14px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& > .right {
		display: flex;
		align-items: center;
		flex: 0 0 auto;
	}

	& > .right > * {
		font-size: 20px;
		visibility: hidden;
	}
`;function de(e,a){const{item:t,showLabel:o=!0,attrs:r={}}=e,s=i.useContext(x),l=t.items!==void 0,u=s.active&&(s.active===t.name||s.active.startsWith(`${t.name}.`));return!t.mIcon&&!o?null:n.jsxs(ue,{...t.attrs,...r,ref:a,className:`
				${l?"hasItems":""}
				${o?"showLabel":""}
				${u?"active":""}
			`,title:t.label,children:[n.jsxs("span",{className:"left",children:[t.mIcon&&n.jsx(t.mIcon,{className:"icon"}),o&&n.jsx("span",{className:"navLabel",children:t.label})]}),o&&n.jsx("span",{className:"right",children:n.jsx(U,{className:"arrow"})})]})}const T=i.forwardRef(de);function fe(e){const{item:a,onOpen:t}=e,o=i.useContext(x),s={onClick:i.useCallback(l=>{a.items?t(a.name):o.onNav({item:a,event:l})},[])};return n.jsx(T,{...e,attrs:s})}const xe=p.div`
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background-color: #26262a;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #7a7a7d;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #5b5b5d;
	}
`;function _(e){const{attrs:a={}}=e;return n.jsx(xe,{...a,className:e.className,children:e.children})}const ve=p(P)`
	width: 80vw;
	max-width: 250px;
	font-family: ${d.fontFamily};
	font-size: 14px;

	& > .header {
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${d.newColors.grey3[100]};
	}

	& > .header > .closeIcon {
		color: ${d.colors.gray400};
		cursor: pointer;
	}

	& > .backButton {
		padding: 8px 16px;
		color: ${d.colors.gray400};
		line-height: 24px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${d.newColors.grey4[100]};
		cursor: pointer;
	}

	& > .backButton > .buttonLabel {
		margin-left: 16px;
		color: white;
	}
`;function k(e,a,t){for(const o of e){if(o.name===a)return t;if(o.items){const r=k(o.items,a,o.type==="group"?t:o);if(r)return r}}}function z(e,a){for(const t of e){if(t.name===a)return t;if(t.items){const o=z(t.items,a);if(o)return o}}}const y="_internal.root";function Pe(e){const a=i.useMemo(()=>[{name:y,label:"Main Menu",items:e.items}],[e.items]),[t,o]=i.useState(y),{current:r,previous:s}=i.useMemo(()=>({current:z(a,t),previous:k(a,t)}),[a,t]),l=i.useContext(x),u=function(){o(y),e.onClose()},m=function(v){o(y),l.onNav(v)},f=function(){const v=k(a,t);o(v.name)},g={...l,onNav:m,ItemComponent:fe};return r?n.jsx(D,{open:e.open,onClose:u,children:n.jsx(x.Provider,{value:g,children:n.jsxs(ve,{"aria-label":"Main",children:[n.jsxs("div",{className:"header",children:[n.jsx(X,{}),n.jsx(G,{onClick:u,className:"closeIcon"})]}),s!==void 0&&n.jsxs(i.Fragment,{children:[n.jsxs("div",{className:"backButton",onClick:f,children:[n.jsx(re,{}),n.jsx("div",{className:"buttonLabel",children:s.label})]}),n.jsx($,{label:r.label})]}),n.jsx(_,{children:n.jsx(C,{items:r.items,onOpen:o})})]})})}):(o(y),null)}var L,E;function pe(){if(E)return L;E=1;var e=Q(),a=Y(),t="Expected a function";function o(r,s,l){var u=!0,m=!0;if(typeof r!="function")throw new TypeError(t);return a(l)&&(u="leading"in l?!!l.leading:u,m="trailing"in l?!!l.trailing:m),e(r,s,{leading:u,maxWait:s,trailing:m})}return L=o,L}var he=pe();const S=O(he),be=p.div`
	&.paper {
		background-color: #404045;
		max-width: 250px;
		max-height: 80vh;
		display: flex;
	}
`,ge={open:!0,placement:"right",modifiers:[{name:"preventOverflow",enabled:!0,options:{rootBoundary:"viewport"}},{name:"computeStyles",options:{gpuAcceleration:!1}}]};function Ne(e){const[a,t]=i.useState({openName:void 0}),o=i.useContext(x),r=m=>{t({...a,openName:m})},l={onScroll:S(function(m){m.target===m.currentTarget&&a.openName!==void 0&&t({...a,openName:void 0})},100,{leading:!0,trailing:!1})},u=i.useMemo(()=>({zIndex:o.zIndex+1}),[o.zIndex]);return n.jsx(ee,{...ge,anchorEl:e.anchorEl,style:u,children:n.jsx(te,{elevation:3,component:be,className:"paper",children:n.jsxs(_,{attrs:l,children:[n.jsx($,{label:e.parent.label}),n.jsx(C,{items:e.parent.items,openName:a.openName,onOpen:r})]})})})}function ye(e){const{openName:a,onOpen:t,item:o}=e,r=i.useContext(x),s=i.useRef(null),l=o.name===a,u=o.items!==void 0&&o.items.length>0,m=i.useCallback(I=>{r.onNav({item:o,event:I})},[r.onNav]),f=S(function(){a!==o.name&&t(o.name)},r.enterTimeout,{leading:!1,trailing:!0}),g=function(){f.cancel()},v=function(){t(o.name)},h=function(){f.cancel()},j="PointerEvent"in window?void 0:f,b="PointerEvent"in window?void 0:h;i.useEffect(()=>function(){f.cancel()},[f]);const w={onPointerMove:f,onPointerLeave:h,onTouchStart:g,onMouseMove:j,onMouseLeave:b,onClick:u?v:m};return n.jsxs(i.Fragment,{children:[n.jsx(T,{...e,ref:s,attrs:w}),o.items&&l&&n.jsx(Ne,{parent:o,anchorEl:s.current})]})}const Ce=p(P)`
	max-width: 250px;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .bottom {
		flex: 0 0 auto;
		border-top: 1px solid ${d.newColors.grey3[100]};
	}
`;function Te(e){const{t:a}=ne(),[t,o]=i.useState({openName:void 0}),r=i.useContext(x),s=c=>{o({...t,openName:c})},l=function(){o({...t,openName:void 0}),e.onClose()},u=function(c){if(o({...t,openName:void 0}),c.item.name.startsWith("_internal.")){const A=c.item.name.match(/_internal.(.*)/)[1];e.onVariantChange(A)}else r.onNav(c)},m=e.variant!=="icons_only",f=e.variant==="icons_only"?e.items.map(c=>({...c,type:"item"})):e.items,g=f.filter(({pinned:c})=>c===void 0),v=f.filter(({pinned:c})=>c==="bottom"),h=function(c){return c===e.variant?` (${a("mosaic:LeftNav.active")})`:""},j={name:"_internal",label:a("mosaic:LeftNav.nav_display"),type:"item",mIcon:V,items:[{name:"_internal.full",label:`${a("mosaic:LeftNav.full")}${h("full")}`},{name:"_internal.icons_only",label:`${a("mosaic:LeftNav.icons_only")}${h("icons_only")}`},{name:"_internal.hidden",label:`${a("mosaic:LeftNav.hidden")}${h("hidden")}`}]};v.push(j);const b=Z(function(){o({...t,openName:void 0})},r.leaveTimeout),w=function(){b.cancel()},B={onScroll:S(function(c){c.target===c.currentTarget&&t.openName!==void 0&&o({...t,openName:void 0})},100,{leading:!0,trailing:!1})};i.useEffect(()=>function(){b.cancel()},[b]);const q={...r,onNav:u,ItemComponent:ye},M=n.jsx(Ce,{"aria-label":"Main",onMouseEnter:w,onMouseLeave:b,children:n.jsxs(x.Provider,{value:q,children:[n.jsx(_,{className:"top",attrs:B,children:n.jsx(C,{items:g,showLabel:m,onOpen:s,openName:t.openName})}),n.jsx("div",{className:"bottom",children:n.jsx(C,{items:v,showLabel:m,onOpen:s,openName:t.openName})})]})}),F=n.jsx(D,{open:e.open,onClose:l,children:M});return["icons_only","full"].includes(e.variant)?M:F}const je={nav_display:"Nav Display",full:"Full",icons_only:"Icons Only",hidden:"Hidden",active:"Active"},we={en:je};oe({prefix:"LeftNav",bundle:we});export{Pe as L,Te as a,x as b};
