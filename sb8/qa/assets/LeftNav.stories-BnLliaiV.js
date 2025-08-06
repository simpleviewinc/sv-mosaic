import{r as q,j as v}from"./jsx-runtime-EKYJJIwR.js";import{r as a,g as w}from"./index-D0AnReJb.js";import{H as _}from"./Home-BptBjTMc.js";import{t as Te,r as V}from"./styled-Cb9FMILg.js";import{r as B}from"./createSvgIcon-DtczVsqP.js";import{B as xe,H as Re}from"./Help-CtzdK7rQ.js";import{L as $e}from"./Link-bDQN_e0H.js";import{u as je,a as Pe,M as De}from"./useMosaicTranslation-di9nduwf.js";import{u as Ae}from"./useMosaicSettings-CZa1uXv4.js";import{s as Ie}from"./styled-components.browser.esm-njFAddlw.js";import{t as g}from"./sizes-DkIXWPpc.js";import{s as S}from"./styled-components.browser.esm-8X0uN6v9.js";import{r as Oe}from"./identifier-DOqdnZ6L.js";import{r as He}from"./createSvgIcon-B2sN9389.js";import{C as ze}from"./Close-BKfiyhHV.js";import{D as Ve,C as Be,r as We,a as Fe,b as ye,S as Ke}from"./toNumber-DuWhFW-p.js";import{T as Qe}from"./TridentIcon-By7mPb6H.js";import{b as Ue,P as Ge}from"./Popper-DKTKzQfx.js";import{u as Xe}from"./useThemeWithoutDefault--IpNlO5A.js";function Je(e){const{theme:n,name:t,props:o}=e;return!n||!n.components||!n.components[t]||!n.components[t].defaultProps?o:Te(n.components[t].defaultProps,o)}const Ze=typeof window<"u"?a.useLayoutEffect:a.useEffect;function Ye(e,n,t,o,l){const[s,i]=a.useState(()=>l&&t?t(e).matches:o?o(e).matches:n);return Ze(()=>{let c=!0;if(!t)return;const r=t(e),m=()=>{c&&i(r.matches)};return m(),r.addListener(m),()=>{c=!1,r.removeListener(m)}},[e,t]),s}const Ce=a.useSyncExternalStore;function en(e,n,t,o,l){const s=a.useCallback(()=>n,[n]),i=a.useMemo(()=>{if(l&&t)return()=>t(e).matches;if(o!==null){const{matches:u}=o(e);return()=>u}return s},[s,e,o,l,t]),[c,r]=a.useMemo(()=>{if(t===null)return[s,()=>()=>{}];const u=t(e);return[()=>u.matches,d=>(u.addListener(d),()=>{u.removeListener(d)})]},[s,t,e]);return Ce(r,c,i)}function nn(e,n={}){const t=Xe(),o=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:s=o?window.matchMedia:null,ssrMatchMedia:i=null,noSsr:c=!1}=Je({name:"MuiUseMediaQuery",props:n,theme:t});let r=e;return r=r.replace(/^@media( ?)/m,""),(Ce!==void 0?en:Ye)(r,l,s,i,c)}var $={},re;function tn(){if(re)return $;re=1;var e=V();Object.defineProperty($,"__esModule",{value:!0}),$.default=void 0;var n=e(B()),t=q();return $.default=(0,n.default)((0,t.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree"),$}var an=tn();const Ne=w(an);var j={},le;function on(){if(le)return j;le=1;var e=V();Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var n=e(B()),t=q();return j.default=(0,n.default)((0,t.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image"),j}var rn=on();const se=w(rn);var P={},ce;function ln(){if(ce)return P;ce=1;var e=V();Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var n=e(B()),t=q();return P.default=(0,n.default)((0,t.jsx)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11"}),"Extension"),P}var sn=ln();const me=w(sn);var D={},ue;function cn(){if(ue)return D;ue=1;var e=V();Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var n=e(B()),t=q();return D.default=(0,n.default)((0,t.jsx)("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard"),D}var mn=cn();const un=w(mn);var A={},de;function dn(){if(de)return A;de=1;var e=V();Object.defineProperty(A,"__esModule",{value:!0}),A.default=void 0;var n=e(B()),t=q();return A.default=(0,n.default)((0,t.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),A}var hn=dn();const fn=w(hn),y=a.createContext(null);var O={},he;function pn(){if(he)return O;he=1;var e=Oe();Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var n=e(He()),t=q();return O.default=(0,n.default)((0,t.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace"),O}var bn=pn();const vn=w(bn),gn={anchor:"left",variant:"temporary",ModalProps:{disableEnforceFocus:!0},PaperProps:{style:{borderRight:"0px",zIndex:"auto"}}};function Ee(e){const n=a.useContext(y),t=a.useMemo(()=>({zIndex:n.zIndex}),[n.zIndex]);return a.createElement(Ve,{...gn,open:e.open,onClose:e.onClose,style:t},e.children)}const we=S.nav`
	background: #2e2e31;
	display: flex;
	flex-direction: column;
	height: 100%;
`,_n=S.h3`
	color: ${g.colors.gray400};
	padding: 8px 16px;
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: ${g.fontSize.text.md};
	font-weight: ${g.weight.semi};
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
`;function ee(e){return a.createElement(_n,{title:e.label},e.mIcon&&a.createElement(e.mIcon,{className:"icon"}),a.createElement("span",null,e.label))}const xn=S.div`
	border-top: 1px solid ${g.newColors.grey4[100]};
`;function In(e){return a.createElement(xn,null,a.createElement(ee,{label:e.item.label,mIcon:e.item.mIcon}),a.createElement(z,{items:e.item.items,onOpen:e.onOpen,openName:e.openName}))}function z(e){const n=a.useContext(y);return a.createElement(a.Fragment,null,e.items.map(t=>{const o=t.type==="group"?In:n.ItemComponent;return a.createElement(o,{key:t.name,item:t,showLabel:e.showLabel,openName:e.openName,onOpen:e.onOpen})}))}const yn=S.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px;
	color: ${g.colors.gray400};
	line-height: 24px;
	cursor: pointer;
	text-decoration: none;

	&.hasItems > .right > .arrow {
		visibility: visible;
	}

	&.active {
		background: ${g.colors.blue};
		color: white;
	}

	&.active:hover {
		background: ${g.colors.blueHover};
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
		color: ${g.newColors.grey2[100]};
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
		font-size: ${g.fontSize.text["2xl"]};
		visibility: hidden;
	}
`;function Cn(e,n){const{item:t,showLabel:o=!0,attrs:l={}}=e,s=a.useContext(y),i=t.items!==void 0,c=s.active&&(s.active===t.name||s.active.startsWith(`${t.name}.`));return!t.mIcon&&!o?null:a.createElement(yn,{...t.attrs,...l,ref:n,className:`
				${i?"hasItems":""}
				${o?"showLabel":""}
				${c?"active":""}
			`,title:t.label},a.createElement("span",{className:"left"},t.mIcon&&a.createElement(t.mIcon,{className:"icon"}),o&&a.createElement("span",{className:"navLabel"},t.label)),o&&a.createElement("span",{className:"right"},a.createElement(Be,{className:"arrow"})))}const Se=a.forwardRef(Cn);function Nn(e){const{item:n,onOpen:t}=e,o=a.useContext(y),s={onClick:a.useCallback(i=>{n.items?t(n.name):o.onNav({item:n,event:i})},[])};return a.createElement(Se,{...e,attrs:s})}const En=S.div`
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
`;function ne(e){const{attrs:n={}}=e;return a.createElement(En,{...n,className:e.className},e.children)}const wn=S(we)`
	width: 80vw;
	max-width: 250px;

	& > .header {
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${g.newColors.grey3[100]};
	}

	& > .header > .closeIcon {
		color: ${g.colors.gray400};
		cursor: pointer;
	}

	& > .backButton {
		padding: 8px 16px;
		color: ${g.colors.gray400};
		line-height: 24px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${g.newColors.grey4[100]};
		cursor: pointer;
	}

	& > .backButton > .buttonLabel {
		margin-left: 16px;
		color: white;
	}
`;function Y(e,n,t){for(const o of e){if(o.name===n)return t;if(o.items){const l=Y(o.items,n,o.type==="group"?t:o);if(l)return l}}}function Le(e,n){for(const t of e){if(t.name===n)return t;if(t.items){const o=Le(t.items,n);if(o)return o}}}const H="_internal.root";function Sn(e){const n=a.useMemo(()=>[{name:H,label:"Main Menu",items:e.items}],[e.items]),[t,o]=a.useState(H),{current:l,previous:s}=a.useMemo(()=>({current:Le(n,t),previous:Y(n,t)}),[n,t]),i=a.useContext(y),c=function(){o(H),e.onClose()},r=function(d){o(H),i.onNav(d)},m=function(){const d=Y(n,t);o(d.name)},u={...i,onNav:r,ItemComponent:Nn};return l?a.createElement(Ee,{open:e.open,onClose:c},a.createElement(y.Provider,{value:u},a.createElement(wn,{"aria-label":"Main"},a.createElement("div",{className:"header"},a.createElement(Qe,null),a.createElement(ze,{onClick:c,className:"closeIcon"})),s!==void 0&&a.createElement(a.Fragment,null,a.createElement("div",{className:"backButton",onClick:m},a.createElement(vn,null),a.createElement("div",{className:"buttonLabel"},s.label)),a.createElement(ee,{label:l.label})),a.createElement(ne,null,a.createElement(z,{items:l.items,onOpen:o}))))):(o(H),null)}var G,fe;function Ln(){if(fe)return G;fe=1;var e=We(),n=function(){return e.Date.now()};return G=n,G}var X,pe;function Me(){if(pe)return X;pe=1;var e=ye(),n=Ln(),t=Fe(),o="Expected a function",l=Math.max,s=Math.min;function i(c,r,m){var u,d,b,C,h,x,N=0,W=!1,L=!1,k=!0;if(typeof c!="function")throw new TypeError(o);r=t(r)||0,e(m)&&(W=!!m.leading,L="maxWait"in m,b=L?l(t(m.maxWait)||0,r):b,k="trailing"in m?!!m.trailing:k);function T(p){var E=u,R=d;return u=d=void 0,N=p,C=c.apply(R,E),C}function f(p){return N=p,h=setTimeout(F,r),W?T(p):C}function Q(p){var E=p-x,R=p-N,ie=r-E;return L?s(ie,b-R):ie}function ae(p){var E=p-x,R=p-N;return x===void 0||E>=r||E<0||L&&R>=b}function F(){var p=n();if(ae(p))return oe(p);h=setTimeout(F,Q(p))}function oe(p){return h=void 0,k&&u?T(p):(u=d=void 0,C)}function ke(){h!==void 0&&clearTimeout(h),N=0,u=x=d=h=void 0}function qe(){return h===void 0?C:oe(n())}function U(){var p=n(),E=ae(p);if(u=arguments,d=this,x=p,E){if(h===void 0)return f(x);if(L)return clearTimeout(h),h=setTimeout(F,r),T(x)}return h===void 0&&(h=setTimeout(F,r)),C}return U.cancel=ke,U.flush=qe,U}return X=i,X}var Mn=Me();const kn=w(Mn);var J,be;function qn(){if(be)return J;be=1;var e=Me(),n=ye(),t="Expected a function";function o(l,s,i){var c=!0,r=!0;if(typeof l!="function")throw new TypeError(t);return n(i)&&(c="leading"in i?!!i.leading:c,r="trailing"in i?!!i.trailing:r),e(l,s,{leading:c,maxWait:s,trailing:r})}return J=o,J}var Tn=qn();const te=w(Tn),Rn=S.div`
	&.paper {
		background-color: #404045;
		max-width: 250px;
		max-height: 80vh;
		display: flex;
	}
`,$n={open:!0,placement:"right",modifiers:[{name:"preventOverflow",enabled:!0,options:{rootBoundary:"viewport"}},{name:"computeStyles",options:{gpuAcceleration:!1}}]};function jn(e){const[n,t]=a.useState({openName:void 0}),o=a.useContext(y),l=r=>{t({...n,openName:r})},i={onScroll:te(function(r){r.target===r.currentTarget&&n.openName!==void 0&&t({...n,openName:void 0})},100,{leading:!0,trailing:!1})},c=a.useMemo(()=>({zIndex:o.zIndex+1}),[o.zIndex]);return a.createElement(Ue,{...$n,anchorEl:e.anchorEl,style:c},a.createElement(Ge,{elevation:3,component:Rn,className:"paper"},a.createElement(ne,{attrs:i},a.createElement(ee,{label:e.parent.label}),a.createElement(z,{items:e.parent.items,openName:n.openName,onOpen:l}))))}function Pn(e){const{openName:n,onOpen:t,item:o}=e,l=a.useContext(y),s=a.useRef(null),i=o.name===n,c=o.items!==void 0&&o.items.length>0,r=a.useCallback(N=>{l.onNav({item:o,event:N})},[l.onNav]),m=te(function(){n!==o.name&&t(o.name)},l.enterTimeout,{leading:!1,trailing:!0}),u=function(){m.cancel()},d=function(){t(o.name)},b=function(){m.cancel()},C="PointerEvent"in window?void 0:m,h="PointerEvent"in window?void 0:b;a.useEffect(()=>function(){m.cancel()},[m]);const x={onPointerMove:m,onPointerLeave:b,onTouchStart:u,onMouseMove:C,onMouseLeave:h,onClick:c?d:r};return a.createElement(a.Fragment,null,a.createElement(Se,{...e,ref:s,attrs:x}),o.items&&i&&a.createElement(jn,{parent:o,anchorEl:s.current}))}const Dn=S(we)`
	max-width: 250px;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .bottom {
		flex: 0 0 auto;
		border-top: 1px solid ${g.newColors.grey3[100]};
	}
`;function An(e){const{t:n}=je(),[t,o]=a.useState({openName:void 0}),l=a.useContext(y),s=f=>{o({...t,openName:f})},i=function(){o({...t,openName:void 0}),e.onClose()},c=function(f){if(o({...t,openName:void 0}),f.item.name.startsWith("_internal.")){const Q=f.item.name.match(/_internal.(.*)/)[1];e.onVariantChange(Q)}else l.onNav(f)},r=e.variant!=="icons_only",m=e.variant==="icons_only"?e.items.map(f=>({...f,type:"item"})):e.items,u=m.filter(({pinned:f})=>f===void 0),d=m.filter(({pinned:f})=>f==="bottom"),b=function(f){return f===e.variant?` (${n("mosaic:LeftNav.active")})`:""},C={name:"_internal",label:n("mosaic:LeftNav.nav_display"),type:"item",mIcon:Ke,items:[{name:"_internal.full",label:`${n("mosaic:LeftNav.full")}${b("full")}`},{name:"_internal.icons_only",label:`${n("mosaic:LeftNav.icons_only")}${b("icons_only")}`},{name:"_internal.hidden",label:`${n("mosaic:LeftNav.hidden")}${b("hidden")}`}]};d.push(C);const h=kn(function(){o({...t,openName:void 0})},l.leaveTimeout),x=function(){h.cancel()},W={onScroll:te(function(f){f.target===f.currentTarget&&t.openName!==void 0&&o({...t,openName:void 0})},100,{leading:!0,trailing:!1})};a.useEffect(()=>function(){h.cancel()},[h]);const L={...l,onNav:c,ItemComponent:Pn},k=a.createElement(Dn,{"aria-label":"Main",onMouseEnter:x,onMouseLeave:h},a.createElement(y.Provider,{value:L},a.createElement(ne,{className:"top",attrs:W},a.createElement(z,{items:u,showLabel:r,onOpen:s,openName:t.openName})),a.createElement("div",{className:"bottom"},a.createElement(z,{items:d,showLabel:r,onOpen:s,openName:t.openName})))),T=a.createElement(Ee,{open:e.open,onClose:i},k);return["icons_only","full"].includes(e.variant)?k:T}const On=300,Hn=100,zn=100;function Vn(e){var n;for(const i of e.items)if(i.mIcon===void 0)throw new Error(`All top-level navigation items require a mIcon for proper display. '${i.name}' lacks an icon.`);const t=(n=e.zIndex)!==null&&n!==void 0?n:zn,o=e.variant==="mobile"?Sn:An,l=a.useCallback(i=>{var c,r;i.item.onNav!==!1&&(((r=(c=i.item)===null||c===void 0?void 0:c.attrs)===null||r===void 0?void 0:r.href)!==void 0&&(i.event.ctrlKey||i.event.metaKey)||(i.event.preventDefault(),typeof i.item.onNav=="function"?(i.item.onNav(i),e.onClose()):e.onNav(i)))},[e.onNav]),s=a.useMemo(()=>({active:e.active,variant:e.variant,zIndex:t,leaveTimeout:On,enterTimeout:Hn,onNav:l}),[e.variant,t,e.active]);return a.createElement(y.Provider,{value:s},a.createElement(o,{...e}))}const Bn={nav_display:"Nav Display",full:"Full",icons_only:"Icons Only",hidden:"Hidden",active:"Active"},Wn={en:Bn};Pe({prefix:"LeftNav",bundle:Wn});const Fn=`Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque placerat praesent dignissim iaculis eget fusce. Aliquet praesent quis purus id iaculis est himenaeos. Eu mi luctus pellentesque id magnis natoque placerat. Aenean erat semper dolor, luctus libero tellus convallis. Parturient eros nisi feugiat malesuada augue hendrerit nulla.

Venenatis pharetra taciti aptent pretium et. Habitasse id egestas platea eu; himenaeos ex nec gravida. Suspendisse habitasse eget varius neque; taciti sociosqu sem auctor. Arcu justo odio proin cursus tempus sem. Ac viverra inceptos lacinia congue lectus. Iaculis litora tempor eget non quam euismod nascetur.

Fringilla ultrices erat convallis lobortis augue ullamcorper amet. Ac lobortis taciti facilisis proin duis tortor elit. Taciti viverra nostra hac dapibus himenaeos ac. Etiam faucibus tortor praesent sollicitudin penatibus vulputate ipsum nullam. Suscipit nostra penatibus venenatis pulvinar ac. Erat massa commodo elit nulla tellus lectus sollicitudin. Cubilia fames potenti lacus posuere; tortor fusce! Sagittis pellentesque at class pulvinar vivamus; justo hac habitant.

Diam vitae consequat est nullam vitae proin rutrum porta. Per cubilia ante tempor; sollicitudin aenean platea neque purus. Suspendisse hendrerit ultricies finibus magnis lacinia natoque fames. Conubia neque felis torquent iaculis diam eros. Massa sit imperdiet dictum, cubilia orci adipiscing. Quisque quam commodo elementum, proin duis sit?

Interdum ante cursus iaculis amet dui cubilia; arcu est. Vel vivamus potenti dui vivamus nulla egestas rhoncus amet neque. Commodo ex dapibus a; odio conubia quisque magnis. Ornare massa quam volutpat euismod convallis commodo netus rhoncus. Mus magnis praesent sem integer vivamus maecenas donec. Ultricies dui vivamus viverra pretium eros parturient parturient non. Torquent neque in sociosqu adipiscing, vitae montes. Lacinia metus laoreet ante nunc orci.`,Kn=Ie.div`
	flex: 0 0 auto;
	background: ${g.newColors.almostBlack[100]};
	color: white;
	padding: 6px 16px;
	display: flex;
	align-items: center;
	min-height: 40px;
	box-sizing: border-box;

	& > .menuButton {
		margin-right: 12px;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	& > .logo {
		max-height: 20px;
	}
`,Qn=function(e){const t=Math.max(window.innerHeight,window.innerWidth)<1024?"mobile":e.variant;return v.jsxs(Kn,{children:[["hidden","mobile"].includes(t)&&v.jsx("span",{title:"Open Navigation",className:"menuButton",children:v.jsx(fn,{onClick:e.openNav})}),v.jsx("img",{src:"https://auth.simpleviewinc.com/static_shared/simpleview_reverse.png",className:"logo"})]})},Un=Ie.div`
	height: 100%;
	display: flex;
	flex-direction: column;

	& > .main {
		flex: 1 1 0;
		overflow: hidden;
		display: flex;
	}

	& > .main > .left {
		flex: 0 0 auto;
		overflow-y: auto;
	}

	& > .main > .content {
		padding: ${({$onlyContent:e})=>e?"0px":"16px"};
		flex: 1 1 0;
		overflow-y: auto;
	}

	& h1 {
		margin-top: 0px;
	}
`,Gn="sv-mosaic-left-nav-variant",Xn=()=>{},Jn=function(e){var u,d;const[n,t]=a.useState({open:!1,variant:localStorage.getItem(Gn)??"full",label:((u=e.items[0])==null?void 0:u.label)||"home",name:((d=e.items[0])==null?void 0:d.name)||"Home"}),l=nn("(min-width: 1024px)",{defaultMatches:!0})?n.variant:"mobile",s=function(){t({...n,open:!0})},i=function(){t({...n,open:!1})},c=function({item:b}){t({...n,open:!1,label:b.label,name:b.name})},r=function(b){localStorage.setItem("sv-mosaic-left-nav-variant",b),t({...n,variant:b,open:!1})},m=a.useRef(null);return a.useEffect(()=>{m.current&&m.current.scrollTo(0,0)},[n.label,n.name]),v.jsxs(Un,{onClick:Xn,$onlyContent:e.onlyContent,children:[v.jsx(Qn,{variant:l,openNav:s}),v.jsxs("div",{className:"main",children:[v.jsx("div",{className:"left",children:v.jsx(Vn,{active:n.name,open:n.open,items:e.items,variant:l,onClose:i,onNav:c,onVariantChange:r})}),v.jsxs("div",{className:"content",ref:m,children:[!e.onlyContent&&v.jsxs(v.Fragment,{children:[v.jsx("h1",{children:n.label}),v.jsx("h2",{children:n.name})]}),e.children?e.children:Fn]})]})]})},Zn={title:"Components/LeftNav"},K=e=>[{name:`sitemap.${e}.main`,label:"Main Navigation"},{name:`sitemap.${e}.secondary`,label:"Secondary Navigation"},{name:`sitemap.${e}.footer`,label:"Footer Navigation"},{name:`sitemap.${e}.landing`,label:"Landing Pages"},{name:`sitemap.${e}.system`,label:"System"},{name:`sitemap.${e}.microsites`,label:"Microsites"}],Z=e=>[{name:`modules.blog.${e}.authors`,label:"Authors"},{name:`modules.blog.${e}.categories`,label:"Categories"},{name:`modules.blog.${e}.posts`,label:"Posts"},{name:`modules.blog.${e}.tags`,label:"Tags"}],I={dynamic:{name:"modules.dynamic",label:"Dynamic Content",items:[{name:"modules.dynamic.personas",label:"Personas"},{name:"modules.dynamic.profiles",label:"Profiles"}]},assetRequest:{name:"modules.asset_request",label:"Asset Request",items:[{name:"modules.asset_request.items",label:"Items"},{name:"modules.asset_request.categories",label:"Categories"},{name:"modules.asset_request.tags",label:"Tags"},{name:"modules.asset_request.licenses",label:"Licenses"},{name:"modules.asset_request.requests",label:"Requests"}]},collections:{name:"modules.collections",label:"Collection Types",items:[{name:"modules.collections.blog",label:"Blog Categories"},{name:"modules.collections.experience",label:"Experience"},{name:"modules.collections.header",label:"Header Slides"},{name:"modules.collections.header_video",label:"Header Video Slides"}]},mapPublisher:{name:"modules.map_publisher",label:"Map Publisher"},mediaGallery:{name:"modules.media_gallery",label:"Media Gallery",items:[{name:"modules.media_gallery.galleries",label:"Galleries"},{name:"modules.media_gallery.albums",label:"Albums"},{name:"modules.media_gallery.album_items",label:"Album Items"},{name:"modules.media_gallery.tags",label:"Tags"}]},assets:{name:"assets",label:"Assets",items:[{name:"assets.documents",label:"Documents"},{name:"assets.external",label:"External Links"},{name:"assets.images",label:"Images"},{name:"assets.videos",label:"Videos"}]},sitemap:{name:"sitemap",label:"Sitemap",mIcon:Ne,items:[{name:"sitemap.primary",label:"Primary",items:K("primary")},{name:"sitemap.dutch",label:"Dutch",items:K("dutch")},{name:"sitemap.french",label:"French",items:K("french")},{name:"sitemap.spanish",label:"Spanish",items:K("spanish")}]},settings:{name:"settings",label:"Settings",mIcon:xe,items:[{name:"settings.assets",label:"Assets",items:[{name:"settings.assets.document_categories",label:"Document Categories"},{name:"settings.assets.image_categories",label:"Image Categories"},{name:"settings.assets.video_categories",label:"Video Categories"}]},{name:"settings.cms_tags",label:"CMS Tags"},{name:"settings.field_builder",label:"Field Builder",items:[{name:"settings.field_builder.assets_documents",label:"Asset Library - Documents"},{name:"settings.field_builder.assets_external",label:"Asset Library - External Links"},{name:"settings.field_builder.assets_images",label:"Asset Library - Images"},{name:"settings.field_builder.assets_videos",label:"Asset Library - Videos"},{name:"settings.field_builder.core_textbox",label:"Core - Textbox"}]},{name:"settings.nav",label:"Nav",items:[{name:"settings.nav.locale_tags",label:"Locale Tags"},{name:"settings.nav.nav_tags",label:"Nav Tags"}]},{name:"settings.tasks",label:"Tasks",items:[{name:"settings.tasks.categories",label:"Categories"}]},{name:"settings.users",label:"Users",items:[{name:"settings.users.manage",label:"Manage Users"},{name:"settings.users.roles",label:"Manage Roles"},{name:"settings.users.history",label:"User History"}]},{name:"settings.visitors",label:"Visitors",items:[{name:"settings.visitors.test_subscription",label:"Test Subscriptions"}]}]},autoResponder:{name:"modules.auto_responder",label:"Auto Responder",items:[{name:"modules.auto_responder.content",label:"Content"},{name:"modules.auto_responder.links",label:"Links"}]},translation:{name:"modules.translation",label:"Translation",items:[{name:"modules.translation.static",label:"Static Namespaces"}]},blog:{name:"modules.blog",label:"Public Relations",items:[{name:"modules.blog.articles",label:"Articles",items:Z("articles")},{name:"modules.blog.blog",label:"Blog",items:Z("blog")},{name:"modules.blog.meetings",label:"Meetings Blog",items:Z("meetings")}]}},Yn={qa:[{name:"short_icon",label:"Short Icon",mIcon:_},{name:"short_icon_children",label:"Short Icon Children",mIcon:me,items:[{name:"short_icon_children.short",label:"Short"},{name:"short_icon_children.short_icon",label:"Short Icon",mIcon:_},{name:"short_icon_children.short_children",label:"Short Children",items:[{name:"short_icon_children.short_children.item",label:"Item"},{name:"short_icon_children.short_children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children.children.item",label:"Item"}]}]}]}]}]}]}]}]}]}]},{name:"short_icon_children.short_icon_children",label:"Short Icon Children",mIcon:_,items:[{name:"short_icon_children.short_icon_children.item",label:"Item"}]},{name:"short_icon_children.long",label:"Long - lorem ipsum dolor sit amet"},{name:"short_icon_children.long_icon",label:"Long Icon - lorem ipsum dolor sit amet",mIcon:_},{name:"short_icon_children.long_children",label:"Long Children - lorem ipsum dolor sit amet",items:[{name:"short_icon_children.long_children.item",label:"Item"}]},{name:"short_icon_children.long_icon_children",label:"Long Icon Children - lorem ipsum dolor sit amet",mIcon:_,items:[{name:"short_icon_children.long_icon_children.item",label:"Item"}]},...new Array(35).fill(0).map((e,n)=>({name:`short_icon_children.filler_item_${n}`,label:`Filler ${n}`})),{name:"short_icon_children.after_filler",label:"After Filler with Children",items:[{name:"short_icon_children.after_filler.item",label:"Item"}]}]},{name:"long_icon",label:"Long Icon - lorem ipsum dolor sit amet",mIcon:un},{name:"long_icon_children",label:"Long Icon Children - lorem ipsum dolor sit amet",mIcon:Ne,items:[{name:"long_icon_children.item",label:"Item"}]},{name:"group_short_icon",label:"Group Short",type:"group",mIcon:se,items:[{name:"group_short_icon.short",label:"Short"},{name:"group_short_icon.short_icon",label:"Short Icon",mIcon:_},{name:"group_short_icon.short_children",label:"Short Children",items:[{name:"group_short_icon.short_children.short_children.item",label:"Item"},{name:"group_short_icon.short_children.short_children.children",label:"With Children",items:[{name:"group_short_icon.short_children.short_children.children.item",label:"Item"},{name:"group_short_icon.short_children.short_children.children.children",label:"With Children",items:[{name:"group_short_icon.short_children.short_children.children.children.item",label:"Item"}]}]}]},{name:"group_short_icon.short_icon_children",label:"Short Icon Children",mIcon:_,items:[{name:"group_short_icon.short_icon_children.item",label:"Item"}]},{name:"group_short_icon.long",label:"Long - lorem ipsum dolor sit amet"},{name:"group_short_icon.long_icon",label:"Long Icon - lorem ipsum dolor sit amet",mIcon:_},{name:"group_short_icon.long_children",label:"Long Children - lorem ipsum dolor sit amet",items:[{name:"group_short_icon.long_children.item",label:"Item"}]},{name:"group_short_icon.long_icon_children",label:"Long Icon Children - lorem ipsum dolor sit amet",mIcon:_,items:[{name:"group_short_icon.long_icon_children.item",label:"Item"}]}]},{name:"group_long_icon",label:"Group Long Icon - lorem ipsum dolor sit amet",type:"group",mIcon:xe,items:[{name:"group_long_icon.item",label:"Item"}]},{name:"item_with_attrs",label:"Items With Attrs",mIcon:_,attrs:{"data-attr":"foo"}},{name:"click_variations",label:"Click Variations",mIcon:$e,items:[{name:"click_variations.default",label:"Default"},{name:"click_variations.default_with_href",label:"Default with href",attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_only",label:"Href Only",onNav:!1,attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_new_window",label:"Href, new window",onNav:!1,attrs:{href:"https://www.google.com/",target:"_blank"}},{name:"click_variations.custom_handler",label:"Custom Handler",onNav:function(){alert("Custom handler!")}}]},{name:"pinned_bottom",label:"Pinned Bottom",pinned:"bottom",mIcon:Re,items:[{name:"pinned_bottom.short",label:"Short"},{name:"pinned_bottom.short_icon",label:"Short Icon",mIcon:_},{name:"pinned_bottom.short_icon_children",label:"Short Icon Children",mIcon:_,items:[{name:"pinned_bottom.short_icon_children.item",label:"Item"}]}]}],cms_flat:[{name:"home",label:"Home",mIcon:_},{...I.sitemap},{...I.assets,mIcon:se},{name:"modules",label:"Modules",type:"group",mIcon:me,items:[I.assetRequest,I.autoResponder,I.collections,I.dynamic,I.mapPublisher,I.mediaGallery,I.blog,I.translation]},{...I.settings,type:"group"}],none:[]},M=({dataSet:e,locale:n})=>{const t=Yn[e],o=Ae();return a.useEffect(()=>{o.i18n.language!==n&&o.i18n.changeLanguage(n)},[n]),v.jsx(De.Provider,{value:o,children:v.jsx("div",{style:{height:"100vh"},children:v.jsx(Jn,{items:t})})})};M.args={dataSet:"cms_flat",locale:"en"};M.argTypes={dataSet:{name:"Data",options:["qa","cms_flat","none"],control:{type:"select"}},locale:{name:"Locale",options:["en","es","cimode","de"],control:{type:"select"}}};var ve,ge,_e;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`({
  dataSet,
  locale
}: typeof Playground.args): ReactElement => {
  const items = dataSets[dataSet];
  const mosaicSettings = useMosaicSettings();

  // If the user changes the locale knob we need to propagate to our i18n object
  useEffect(() => {
    if (mosaicSettings.i18n.language !== locale) {
      mosaicSettings.i18n.changeLanguage(locale);
    }
  }, [locale]);
  return <MosaicContext.Provider value={mosaicSettings}>
            <div style={{
      height: "100vh"
    }}>
                <NavWrapper items={items} />
            </div>
        </MosaicContext.Provider>;
}`,...(_e=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};const et=["Playground"],xt=Object.freeze(Object.defineProperty({__proto__:null,Playground:M,__namedExportsOrder:et,default:Zn},Symbol.toStringTag,{value:"Module"}));export{xt as s};
