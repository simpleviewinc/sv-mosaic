import{r as K,j as t}from"./jsx-runtime-DiwAibxM.js";import{r as i,g as O}from"./index-Btj5Fd67.js";import{s as v,t as d}from"./theme-D38K4W-Z.js";import{h as H}from"./generateUtilityClasses-B5i8Rs7p.js";import{r as W}from"./createSvgIcon-CAs7t9wT.js";import{C as G}from"./Close-gDfoKZ0c.js";import{D as J,C as U,S as V}from"./ChevronRight-CNo34ydh.js";import{T as X}from"./TridentIcon-DUvelBIm.js";import{b as Q,a as Y,d as Z}from"./debounce-IFS8tfQQ.js";import{a as ee,P as ne}from"./Popper-BV6MzckQ.js";import{u as te,a as oe}from"./useMosaicTranslation-C-FZRKWr.js";const x=i.createContext(null);var N={},R;function ae(){if(R)return N;R=1;var e=H();Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var a=e(W()),n=K();return N.default=(0,a.default)((0,n.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace"),N}var ie=ae();const re=O(ie),se={anchor:"left",variant:"temporary",ModalProps:{disableEnforceFocus:!0},PaperProps:{style:{borderRight:"0px",zIndex:"auto"}}};function D(e){const a=i.useContext(x),n=i.useMemo(()=>({zIndex:a.zIndex}),[a.zIndex]);return t.jsx(J,{...se,open:e.open,onClose:e.onClose,style:n,children:e.children})}const P=v.nav`
	background: #2e2e31;
	display: flex;
	flex-direction: column;
	height: 100%;
`,le=v.h3`
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
`;function $(e){return t.jsxs(le,{title:e.label,children:[e.mIcon&&t.jsx(e.mIcon,{className:"icon"}),t.jsx("span",{children:e.label})]})}const ce=v.div`
	border-top: 1px solid ${d.newColors.grey4[100]};
`;function ue(e){return t.jsxs(ce,{children:[t.jsx($,{label:e.item.label,mIcon:e.item.mIcon}),t.jsx(C,{items:e.item.items,onOpen:e.onOpen,openName:e.openName})]})}function C(e){const a=i.useContext(x);return t.jsx(i.Fragment,{children:e.items.map(n=>{const o=n.type==="group"?ue:a.ItemComponent;return t.jsx(o,{item:n,showLabel:e.showLabel,openName:e.openName,onOpen:e.onOpen},n.name)})})}const me=v.a`
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
`;function de(e,a){const{item:n,showLabel:o=!0,attrs:r={}}=e,s=i.useContext(x),l=n.items!==void 0,m=s.active&&(s.active===n.name||s.active.startsWith(`${n.name}.`));return!n.mIcon&&!o?null:t.jsxs(me,{...n.attrs,...r,ref:a,className:`
				${l?"hasItems":""}
				${o?"showLabel":""}
				${m?"active":""}
			`,title:n.label,children:[t.jsxs("span",{className:"left",children:[n.mIcon&&t.jsx(n.mIcon,{className:"icon"}),o&&t.jsx("span",{className:"navLabel",children:n.label})]}),o&&t.jsx("span",{className:"right",children:t.jsx(U,{className:"arrow"})})]})}const T=i.forwardRef(de);function fe(e){const{item:a,onOpen:n}=e,o=i.useContext(x),s={onClick:i.useCallback(l=>{a.items?n(a.name):o.onNav({item:a,event:l})},[])};return t.jsx(T,{...e,attrs:s})}const xe=v.div`
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
`;function _(e){const{attrs:a={}}=e;return t.jsx(xe,{...a,className:e.className,children:e.children})}const pe=v(P)`
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
`;function k(e,a,n){for(const o of e){if(o.name===a)return n;if(o.items){const r=k(o.items,a,o.type==="group"?n:o);if(r)return r}}}function z(e,a){for(const n of e){if(n.name===a)return n;if(n.items){const o=z(n.items,a);if(o)return o}}}const y="_internal.root";function Pe(e){const a=i.useMemo(()=>[{name:y,label:"Main Menu",items:e.items}],[e.items]),[n,o]=i.useState(y),{current:r,previous:s}=i.useMemo(()=>({current:z(a,n),previous:k(a,n)}),[a,n]),l=i.useContext(x),m=function(){o(y),e.onClose()},u=function(p){o(y),l.onNav(p)},f=function(){const p=k(a,n);o(p.name)},g={...l,onNav:u,ItemComponent:fe};return r?t.jsx(D,{open:e.open,onClose:m,children:t.jsx(x.Provider,{value:g,children:t.jsxs(pe,{"aria-label":"Main",children:[t.jsxs("div",{className:"header",children:[t.jsx(X,{}),t.jsx(G,{onClick:m,className:"closeIcon"})]}),s!==void 0&&t.jsxs(i.Fragment,{children:[t.jsxs("div",{className:"backButton",onClick:f,children:[t.jsx(re,{}),t.jsx("div",{className:"buttonLabel",children:s.label})]}),t.jsx($,{label:r.label})]}),t.jsx(_,{children:t.jsx(C,{items:r.items,onOpen:o})})]})})}):(o(y),null)}var L,E;function ve(){if(E)return L;E=1;var e=Q(),a=Y(),n="Expected a function";function o(r,s,l){var m=!0,u=!0;if(typeof r!="function")throw new TypeError(n);return a(l)&&(m="leading"in l?!!l.leading:m,u="trailing"in l?!!l.trailing:u),e(r,s,{leading:m,maxWait:s,trailing:u})}return L=o,L}var he=ve();const S=O(he),be=v.div`
	&.paper {
		background-color: #404045;
		max-width: 250px;
		max-height: 80vh;
		display: flex;
	}
`,ge={open:!0,placement:"right",modifiers:[{name:"preventOverflow",enabled:!0,options:{rootBoundary:"viewport"}},{name:"computeStyles",options:{gpuAcceleration:!1}}]};function Ne(e){const[a,n]=i.useState({openName:void 0}),o=i.useContext(x),r=u=>{n({...a,openName:u})},l={onScroll:S(function(u){u.target===u.currentTarget&&a.openName!==void 0&&n({...a,openName:void 0})},100,{leading:!0,trailing:!1})},m=i.useMemo(()=>({zIndex:o.zIndex+1}),[o.zIndex]);return t.jsx(ee,{...ge,anchorEl:e.anchorEl,style:m,children:t.jsx(ne,{elevation:3,component:be,className:"paper",children:t.jsxs(_,{attrs:l,children:[t.jsx($,{label:e.parent.label}),t.jsx(C,{items:e.parent.items,openName:a.openName,onOpen:r})]})})})}function ye(e){const{openName:a,onOpen:n,item:o}=e,r=i.useContext(x),s=i.useRef(null),l=o.name===a,m=o.items!==void 0&&o.items.length>0,u=i.useCallback(I=>{r.onNav({item:o,event:I})},[r.onNav]),f=S(function(){a!==o.name&&n(o.name)},r.enterTimeout,{leading:!1,trailing:!0}),g=function(){f.cancel()},p=function(){n(o.name)},h=function(){f.cancel()},j="PointerEvent"in window?void 0:f,b="PointerEvent"in window?void 0:h;i.useEffect(()=>function(){f.cancel()},[f]);const w={onPointerMove:f,onPointerLeave:h,onTouchStart:g,onMouseMove:j,onMouseLeave:b,onClick:m?p:u};return t.jsxs(i.Fragment,{children:[t.jsx(T,{...e,ref:s,attrs:w}),o.items&&l&&t.jsx(Ne,{parent:o,anchorEl:s.current})]})}const Ce=v(P)`
	max-width: 250px;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .bottom {
		flex: 0 0 auto;
		border-top: 1px solid ${d.newColors.grey3[100]};
	}
`;function Te(e){const{t:a}=te(),[n,o]=i.useState({openName:void 0}),r=i.useContext(x),s=c=>{o({...n,openName:c})},l=function(){o({...n,openName:void 0}),e.onClose()},m=function(c){if(o({...n,openName:void 0}),c.item.name.startsWith("_internal.")){const A=c.item.name.match(/_internal.(.*)/)[1];e.onVariantChange(A)}else r.onNav(c)},u=e.variant!=="icons_only",f=e.variant==="icons_only"?e.items.map(c=>({...c,type:"item"})):e.items,g=f.filter(({pinned:c})=>c===void 0),p=f.filter(({pinned:c})=>c==="bottom"),h=function(c){return c===e.variant?` (${a("mosaic:LeftNav.active")})`:""},j={name:"_internal",label:a("mosaic:LeftNav.nav_display"),type:"item",mIcon:V,items:[{name:"_internal.full",label:`${a("mosaic:LeftNav.full")}${h("full")}`},{name:"_internal.icons_only",label:`${a("mosaic:LeftNav.icons_only")}${h("icons_only")}`},{name:"_internal.hidden",label:`${a("mosaic:LeftNav.hidden")}${h("hidden")}`}]};p.push(j);const b=Z(function(){o({...n,openName:void 0})},r.leaveTimeout),w=function(){b.cancel()},B={onScroll:S(function(c){c.target===c.currentTarget&&n.openName!==void 0&&o({...n,openName:void 0})},100,{leading:!0,trailing:!1})};i.useEffect(()=>function(){b.cancel()},[b]);const q={...r,onNav:m,ItemComponent:ye},M=t.jsx(Ce,{"aria-label":"Main",onMouseEnter:w,onMouseLeave:b,children:t.jsxs(x.Provider,{value:q,children:[t.jsx(_,{className:"top",attrs:B,children:t.jsx(C,{items:g,showLabel:u,onOpen:s,openName:n.openName})}),t.jsx("div",{className:"bottom",children:t.jsx(C,{items:p,showLabel:u,onOpen:s,openName:n.openName})})]})}),F=t.jsx(D,{open:e.open,onClose:l,children:M});return["icons_only","full"].includes(e.variant)?M:F}const je={nav_display:"Nav Display",full:"Full",icons_only:"Icons Only",hidden:"Hidden",active:"Active"},we={en:je};oe({prefix:"LeftNav",bundle:we});export{Pe as L,Te as a,x as b};
