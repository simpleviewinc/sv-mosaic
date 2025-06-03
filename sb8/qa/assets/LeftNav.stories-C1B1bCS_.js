import{r as C,j as d}from"./jsx-runtime-EKYJJIwR.js";import{r as a,g as x}from"./index-D0AnReJb.js";import{H as b,L as ge}from"./Link-D7asXCyE.js";import{t as _e,r as w}from"./styled-BWOE7yIf.js";import{a as xe,r as E}from"./createSvgIcon-CFLdSkGK.js";import{H as Ie}from"./Help-DsoPPS02.js";import{u as ye,a as Ce,M as Ne}from"./useMosaicTranslation-CoWLI8L7.js";import{u as we}from"./useMosaicSettings-PoFK8XpM.js";import{s as le}from"./styled-components.browser.esm-njFAddlw.js";import{t as f}from"./sizes-HwDk6ODv.js";import{s as I}from"./styled-components.browser.esm-B06rF3P8.js";import{r as Ee}from"./DefaultPropsProvider-BwNoCFE_.js";import{r as Se}from"./createSvgIcon-Bdc0w2F6.js";import{C as Le}from"./Close-CGtmtFuS.js";import{D as Me,C as qe,S as ke}from"./ChevronRight-C-yhpJTc.js";import{T as Re}from"./TridentIcon-DK3OMhMM.js";import{r as je,a as $e,d as Pe}from"./debounce-D-BUC-g1.js";import{a as De,P as Te}from"./Popper-BpP7Dmyd.js";import{u as Ae}from"./useThemeWithoutDefault-B0y5BOgo.js";function Oe(e){const{theme:n,name:t,props:o}=e;return!n||!n.components||!n.components[t]||!n.components[t].defaultProps?o:_e(n.components[t].defaultProps,o)}function He(e,n,t,o,l){const[r,i]=a.useState(()=>l&&t?t(e).matches:o?o(e).matches:n);return xe(()=>{let c=!0;if(!t)return;const s=t(e),m=()=>{c&&i(s.matches)};return m(),s.addListener(m),()=>{c=!1,s.removeListener(m)}},[e,t]),r}const re=a.useSyncExternalStore;function Be(e,n,t,o,l){const r=a.useCallback(()=>n,[n]),i=a.useMemo(()=>{if(l&&t)return()=>t(e).matches;if(o!==null){const{matches:h}=o(e);return()=>h}return r},[r,e,o,l,t]),[c,s]=a.useMemo(()=>{if(t===null)return[r,()=>()=>{}];const h=t(e);return[()=>h.matches,p=>(h.addListener(p),()=>{h.removeListener(p)})]},[r,t,e]);return re(s,c,i)}function ze(e,n={}){const t=Ae(),o=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:l=!1,matchMedia:r=o?window.matchMedia:null,ssrMatchMedia:i=null,noSsr:c=!1}=Oe({name:"MuiUseMediaQuery",props:n,theme:t});let s=e;return s=s.replace(/^@media( ?)/m,""),(re!==void 0?Be:He)(s,l,r,i,c)}var S={},Q;function Ve(){if(Q)return S;Q=1;var e=w();Object.defineProperty(S,"__esModule",{value:!0}),S.default=void 0;var n=e(E()),t=C();return S.default=(0,n.default)((0,t.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree"),S}var We=Ve();const se=x(We);var L={},G;function Fe(){if(G)return L;G=1;var e=w();Object.defineProperty(L,"__esModule",{value:!0}),L.default=void 0;var n=e(E()),t=C();return L.default=(0,n.default)((0,t.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image"),L}var Ke=Fe();const U=x(Ke);var M={},J;function Qe(){if(J)return M;J=1;var e=w();Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var n=e(E()),t=C();return M.default=(0,n.default)((0,t.jsx)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11"}),"Extension"),M}var Ge=Qe();const X=x(Ge);var q={},Z;function Ue(){if(Z)return q;Z=1;var e=w();Object.defineProperty(q,"__esModule",{value:!0}),q.default=void 0;var n=e(E()),t=C();return q.default=(0,n.default)((0,t.jsx)("path",{d:"m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"}),"Build"),q}var Je=Ue();const ce=x(Je);var k={},Y;function Xe(){if(Y)return k;Y=1;var e=w();Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var n=e(E()),t=C();return k.default=(0,n.default)((0,t.jsx)("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard"),k}var Ze=Xe();const Ye=x(Ze);var R={},ee;function et(){if(ee)return R;ee=1;var e=w();Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;var n=e(E()),t=C();return R.default=(0,n.default)((0,t.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),R}var tt=et();const nt=x(tt),_=a.createContext(null);var j={},te;function at(){if(te)return j;te=1;var e=Ee();Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var n=e(Se()),t=C();return j.default=(0,n.default)((0,t.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace"),j}var ot=at();const it=x(ot),lt={anchor:"left",variant:"temporary",ModalProps:{disableEnforceFocus:!0},PaperProps:{style:{borderRight:"0px",zIndex:"auto"}}};function me(e){const n=a.useContext(_),t=a.useMemo(()=>({zIndex:n.zIndex}),[n.zIndex]);return a.createElement(Me,{...lt,open:e.open,onClose:e.onClose,style:t},e.children)}const ue=I.nav`
	background: #2e2e31;
	display: flex;
	flex-direction: column;
	height: 100%;
`,rt=I.h3`
	color: ${f.colors.gray400};
	padding: 8px 16px;
	margin: 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: ${f.fontSize.text.md};
	font-weight: ${f.weight.semi};
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
`;function V(e){return a.createElement(rt,{title:e.label},e.mIcon&&a.createElement(e.mIcon,{className:"icon"}),a.createElement("span",null,e.label))}const st=I.div`
	border-top: 1px solid ${f.newColors.grey4[100]};
`;function ct(e){return a.createElement(st,null,a.createElement(V,{label:e.item.label,mIcon:e.item.mIcon}),a.createElement(P,{items:e.item.items,onOpen:e.onOpen,openName:e.openName}))}function P(e){const n=a.useContext(_);return a.createElement(a.Fragment,null,e.items.map(t=>{const o=t.type==="group"?ct:n.ItemComponent;return a.createElement(o,{key:t.name,item:t,showLabel:e.showLabel,openName:e.openName,onOpen:e.onOpen})}))}const mt=I.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 16px;
	color: ${f.colors.gray400};
	line-height: 24px;
	cursor: pointer;
	text-decoration: none;

	&.hasItems > .right > .arrow {
		visibility: visible;
	}

	&.active {
		background: ${f.colors.blue};
		color: white;
	}

	&.active:hover {
		background: ${f.colors.blueHover};
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
		color: ${f.newColors.grey2[100]};
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
		font-size: ${f.fontSize.text["2xl"]};
		visibility: hidden;
	}
`;function ut(e,n){const{item:t,showLabel:o=!0,attrs:l={}}=e,r=a.useContext(_),i=t.items!==void 0,c=r.active&&(r.active===t.name||r.active.startsWith(`${t.name}.`));return!t.mIcon&&!o?null:a.createElement(mt,{...t.attrs,...l,ref:n,className:`
				${i?"hasItems":""}
				${o?"showLabel":""}
				${c?"active":""}
			`,title:t.label},a.createElement("span",{className:"left"},t.mIcon&&a.createElement(t.mIcon,{className:"icon"}),o&&a.createElement("span",{className:"navLabel"},t.label)),o&&a.createElement("span",{className:"right"},a.createElement(qe,{className:"arrow"})))}const de=a.forwardRef(ut);function dt(e){const{item:n,onOpen:t}=e,o=a.useContext(_),r={onClick:a.useCallback(i=>{n.items?t(n.name):o.onNav({item:n,event:i})},[])};return a.createElement(de,{...e,attrs:r})}const ht=I.div`
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
`;function W(e){const{attrs:n={}}=e;return a.createElement(ht,{...n,className:e.className},e.children)}const ft=I(ue)`
	width: 80vw;
	max-width: 250px;

	& > .header {
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid ${f.newColors.grey3[100]};
	}

	& > .header > .closeIcon {
		color: ${f.colors.gray400};
		cursor: pointer;
	}

	& > .backButton {
		padding: 8px 16px;
		color: ${f.colors.gray400};
		line-height: 24px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid ${f.newColors.grey4[100]};
		cursor: pointer;
	}

	& > .backButton > .buttonLabel {
		margin-left: 16px;
		color: white;
	}
`;function z(e,n,t){for(const o of e){if(o.name===n)return t;if(o.items){const l=z(o.items,n,o.type==="group"?t:o);if(l)return l}}}function he(e,n){for(const t of e){if(t.name===n)return t;if(t.items){const o=he(t.items,n);if(o)return o}}}const $="_internal.root";function pt(e){const n=a.useMemo(()=>[{name:$,label:"Main Menu",items:e.items}],[e.items]),[t,o]=a.useState($),{current:l,previous:r}=a.useMemo(()=>({current:he(n,t),previous:z(n,t)}),[n,t]),i=a.useContext(_),c=function(){o($),e.onClose()},s=function(p){o($),i.onNav(p)},m=function(){const p=z(n,t);o(p.name)},h={...i,onNav:s,ItemComponent:dt};return l?a.createElement(me,{open:e.open,onClose:c},a.createElement(_.Provider,{value:h},a.createElement(ft,{"aria-label":"Main"},a.createElement("div",{className:"header"},a.createElement(Re,null),a.createElement(Le,{onClick:c,className:"closeIcon"})),r!==void 0&&a.createElement(a.Fragment,null,a.createElement("div",{className:"backButton",onClick:m},a.createElement(it,null),a.createElement("div",{className:"buttonLabel"},r.label)),a.createElement(V,{label:l.label})),a.createElement(W,null,a.createElement(P,{items:l.items,onOpen:o}))))):(o($),null)}var H,ne;function bt(){if(ne)return H;ne=1;var e=je(),n=$e(),t="Expected a function";function o(l,r,i){var c=!0,s=!0;if(typeof l!="function")throw new TypeError(t);return n(i)&&(c="leading"in i?!!i.leading:c,s="trailing"in i?!!i.trailing:s),e(l,r,{leading:c,maxWait:r,trailing:s})}return H=o,H}var vt=bt();const F=x(vt),gt=I.div`
	&.paper {
		background-color: #404045;
		max-width: 250px;
		max-height: 80vh;
		display: flex;
	}
`,_t={open:!0,placement:"right",modifiers:[{name:"preventOverflow",enabled:!0,options:{rootBoundary:"viewport"}},{name:"computeStyles",options:{gpuAcceleration:!1}}]};function xt(e){const[n,t]=a.useState({openName:void 0}),o=a.useContext(_),l=s=>{t({...n,openName:s})},i={onScroll:F(function(s){s.target===s.currentTarget&&n.openName!==void 0&&t({...n,openName:void 0})},100,{leading:!0,trailing:!1})},c=a.useMemo(()=>({zIndex:o.zIndex+1}),[o.zIndex]);return a.createElement(De,{..._t,anchorEl:e.anchorEl,style:c},a.createElement(Te,{elevation:3,component:gt,className:"paper"},a.createElement(W,{attrs:i},a.createElement(V,{label:e.parent.label}),a.createElement(P,{items:e.parent.items,openName:n.openName,onOpen:l}))))}function It(e){const{openName:n,onOpen:t,item:o}=e,l=a.useContext(_),r=a.useRef(null),i=o.name===n,c=o.items!==void 0&&o.items.length>0,s=a.useCallback(O=>{l.onNav({item:o,event:O})},[l.onNav]),m=F(function(){n!==o.name&&t(o.name)},l.enterTimeout,{leading:!1,trailing:!0}),h=function(){m.cancel()},p=function(){t(o.name)},v=function(){m.cancel()},T="PointerEvent"in window?void 0:m,N="PointerEvent"in window?void 0:v;a.useEffect(()=>function(){m.cancel()},[m]);const A={onPointerMove:m,onPointerLeave:v,onTouchStart:h,onMouseMove:T,onMouseLeave:N,onClick:c?p:s};return a.createElement(a.Fragment,null,a.createElement(de,{...e,ref:r,attrs:A}),o.items&&i&&a.createElement(xt,{parent:o,anchorEl:r.current}))}const yt=I(ue)`
	max-width: 250px;

	& > .top {
		flex: 1 1 0;
		overflow-y: auto;
	}

	& > .bottom {
		flex: 0 0 auto;
		border-top: 1px solid ${f.newColors.grey3[100]};
	}
`;function Ct(e){const{t:n}=ye(),[t,o]=a.useState({openName:void 0}),l=a.useContext(_),r=u=>{o({...t,openName:u})},i=function(){o({...t,openName:void 0}),e.onClose()},c=function(u){if(o({...t,openName:void 0}),u.item.name.startsWith("_internal.")){const ve=u.item.name.match(/_internal.(.*)/)[1];e.onVariantChange(ve)}else l.onNav(u)},s=e.variant!=="icons_only",m=e.variant==="icons_only"?e.items.map(u=>({...u,type:"item"})):e.items,h=m.filter(({pinned:u})=>u===void 0),p=m.filter(({pinned:u})=>u==="bottom"),v=function(u){return u===e.variant?` (${n("mosaic:LeftNav.active")})`:""},T={name:"_internal",label:n("mosaic:LeftNav.nav_display"),type:"item",mIcon:ke,items:[{name:"_internal.full",label:`${n("mosaic:LeftNav.full")}${v("full")}`},{name:"_internal.icons_only",label:`${n("mosaic:LeftNav.icons_only")}${v("icons_only")}`},{name:"_internal.hidden",label:`${n("mosaic:LeftNav.hidden")}${v("hidden")}`}]};p.push(T);const N=Pe(function(){o({...t,openName:void 0})},l.leaveTimeout),A=function(){N.cancel()},fe={onScroll:F(function(u){u.target===u.currentTarget&&t.openName!==void 0&&o({...t,openName:void 0})},100,{leading:!0,trailing:!1})};a.useEffect(()=>function(){N.cancel()},[N]);const pe={...l,onNav:c,ItemComponent:It},K=a.createElement(yt,{"aria-label":"Main",onMouseEnter:A,onMouseLeave:N},a.createElement(_.Provider,{value:pe},a.createElement(W,{className:"top",attrs:fe},a.createElement(P,{items:h,showLabel:s,onOpen:r,openName:t.openName})),a.createElement("div",{className:"bottom"},a.createElement(P,{items:p,showLabel:s,onOpen:r,openName:t.openName})))),be=a.createElement(me,{open:e.open,onClose:i},K);return["icons_only","full"].includes(e.variant)?K:be}const Nt=300,wt=100,Et=100;function St(e){var n;for(const i of e.items)if(i.mIcon===void 0)throw new Error(`All top-level navigation items require a mIcon for proper display. '${i.name}' lacks an icon.`);const t=(n=e.zIndex)!==null&&n!==void 0?n:Et,o=e.variant==="mobile"?pt:Ct,l=a.useCallback(i=>{var c,s;i.item.onNav!==!1&&(((s=(c=i.item)===null||c===void 0?void 0:c.attrs)===null||s===void 0?void 0:s.href)!==void 0&&(i.event.ctrlKey||i.event.metaKey)||(i.event.preventDefault(),typeof i.item.onNav=="function"?(i.item.onNav(i),e.onClose()):e.onNav(i)))},[e.onNav]),r=a.useMemo(()=>({active:e.active,variant:e.variant,zIndex:t,leaveTimeout:Nt,enterTimeout:wt,onNav:l}),[e.variant,t,e.active]);return a.createElement(_.Provider,{value:r},a.createElement(o,{...e}))}const Lt={nav_display:"Nav Display",full:"Full",icons_only:"Icons Only",hidden:"Hidden",active:"Active"},Mt={en:Lt};Ce({prefix:"LeftNav",bundle:Mt});const qt=`Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque placerat praesent dignissim iaculis eget fusce. Aliquet praesent quis purus id iaculis est himenaeos. Eu mi luctus pellentesque id magnis natoque placerat. Aenean erat semper dolor, luctus libero tellus convallis. Parturient eros nisi feugiat malesuada augue hendrerit nulla.

Venenatis pharetra taciti aptent pretium et. Habitasse id egestas platea eu; himenaeos ex nec gravida. Suspendisse habitasse eget varius neque; taciti sociosqu sem auctor. Arcu justo odio proin cursus tempus sem. Ac viverra inceptos lacinia congue lectus. Iaculis litora tempor eget non quam euismod nascetur.

Fringilla ultrices erat convallis lobortis augue ullamcorper amet. Ac lobortis taciti facilisis proin duis tortor elit. Taciti viverra nostra hac dapibus himenaeos ac. Etiam faucibus tortor praesent sollicitudin penatibus vulputate ipsum nullam. Suscipit nostra penatibus venenatis pulvinar ac. Erat massa commodo elit nulla tellus lectus sollicitudin. Cubilia fames potenti lacus posuere; tortor fusce! Sagittis pellentesque at class pulvinar vivamus; justo hac habitant.

Diam vitae consequat est nullam vitae proin rutrum porta. Per cubilia ante tempor; sollicitudin aenean platea neque purus. Suspendisse hendrerit ultricies finibus magnis lacinia natoque fames. Conubia neque felis torquent iaculis diam eros. Massa sit imperdiet dictum, cubilia orci adipiscing. Quisque quam commodo elementum, proin duis sit?

Interdum ante cursus iaculis amet dui cubilia; arcu est. Vel vivamus potenti dui vivamus nulla egestas rhoncus amet neque. Commodo ex dapibus a; odio conubia quisque magnis. Ornare massa quam volutpat euismod convallis commodo netus rhoncus. Mus magnis praesent sem integer vivamus maecenas donec. Ultricies dui vivamus viverra pretium eros parturient parturient non. Torquent neque in sociosqu adipiscing, vitae montes. Lacinia metus laoreet ante nunc orci.`,kt=le.div`
	flex: 0 0 auto;
	background: ${f.newColors.almostBlack[100]};
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
`,Rt=function(e){const t=Math.max(window.innerHeight,window.innerWidth)<1024?"mobile":e.variant;return d.jsxs(kt,{children:[["hidden","mobile"].includes(t)&&d.jsx("span",{title:"Open Navigation",className:"menuButton",children:d.jsx(nt,{onClick:e.openNav})}),d.jsx("img",{src:"https://auth.simpleviewinc.com/static_shared/simpleview_reverse.png",className:"logo"})]})},jt=le.div`
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
`,$t="sv-mosaic-left-nav-variant",Pt=()=>{},Dt=function(e){var h,p;const[n,t]=a.useState({open:!1,variant:localStorage.getItem($t)??"full",label:((h=e.items[0])==null?void 0:h.label)||"home",name:((p=e.items[0])==null?void 0:p.name)||"Home"}),l=ze("(min-width: 1024px)",{defaultMatches:!0})?n.variant:"mobile",r=function(){t({...n,open:!0})},i=function(){t({...n,open:!1})},c=function({item:v}){t({...n,open:!1,label:v.label,name:v.name})},s=function(v){localStorage.setItem("sv-mosaic-left-nav-variant",v),t({...n,variant:v,open:!1})},m=a.useRef(null);return a.useEffect(()=>{m.current&&m.current.scrollTo(0,0)},[n.label,n.name]),d.jsxs(jt,{onClick:Pt,$onlyContent:e.onlyContent,children:[d.jsx(Rt,{variant:l,openNav:r}),d.jsxs("div",{className:"main",children:[d.jsx("div",{className:"left",children:d.jsx(St,{active:n.name,open:n.open,items:e.items,variant:l,onClose:i,onNav:c,onVariantChange:s})}),d.jsxs("div",{className:"content",ref:m,children:[!e.onlyContent&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{children:n.label}),d.jsx("h2",{children:n.name})]}),e.children?e.children:qt]})]})]})},Tt={title:"Components/LeftNav"},D=e=>[{name:`sitemap.${e}.main`,label:"Main Navigation"},{name:`sitemap.${e}.secondary`,label:"Secondary Navigation"},{name:`sitemap.${e}.footer`,label:"Footer Navigation"},{name:`sitemap.${e}.landing`,label:"Landing Pages"},{name:`sitemap.${e}.system`,label:"System"},{name:`sitemap.${e}.microsites`,label:"Microsites"}],B=e=>[{name:`modules.blog.${e}.authors`,label:"Authors"},{name:`modules.blog.${e}.categories`,label:"Categories"},{name:`modules.blog.${e}.posts`,label:"Posts"},{name:`modules.blog.${e}.tags`,label:"Tags"}],g={dynamic:{name:"modules.dynamic",label:"Dynamic Content",items:[{name:"modules.dynamic.personas",label:"Personas"},{name:"modules.dynamic.profiles",label:"Profiles"}]},assetRequest:{name:"modules.asset_request",label:"Asset Request",items:[{name:"modules.asset_request.items",label:"Items"},{name:"modules.asset_request.categories",label:"Categories"},{name:"modules.asset_request.tags",label:"Tags"},{name:"modules.asset_request.licenses",label:"Licenses"},{name:"modules.asset_request.requests",label:"Requests"}]},collections:{name:"modules.collections",label:"Collection Types",items:[{name:"modules.collections.blog",label:"Blog Categories"},{name:"modules.collections.experience",label:"Experience"},{name:"modules.collections.header",label:"Header Slides"},{name:"modules.collections.header_video",label:"Header Video Slides"}]},mapPublisher:{name:"modules.map_publisher",label:"Map Publisher"},mediaGallery:{name:"modules.media_gallery",label:"Media Gallery",items:[{name:"modules.media_gallery.galleries",label:"Galleries"},{name:"modules.media_gallery.albums",label:"Albums"},{name:"modules.media_gallery.album_items",label:"Album Items"},{name:"modules.media_gallery.tags",label:"Tags"}]},assets:{name:"assets",label:"Assets",items:[{name:"assets.documents",label:"Documents"},{name:"assets.external",label:"External Links"},{name:"assets.images",label:"Images"},{name:"assets.videos",label:"Videos"}]},sitemap:{name:"sitemap",label:"Sitemap",mIcon:se,items:[{name:"sitemap.primary",label:"Primary",items:D("primary")},{name:"sitemap.dutch",label:"Dutch",items:D("dutch")},{name:"sitemap.french",label:"French",items:D("french")},{name:"sitemap.spanish",label:"Spanish",items:D("spanish")}]},settings:{name:"settings",label:"Settings",mIcon:ce,items:[{name:"settings.assets",label:"Assets",items:[{name:"settings.assets.document_categories",label:"Document Categories"},{name:"settings.assets.image_categories",label:"Image Categories"},{name:"settings.assets.video_categories",label:"Video Categories"}]},{name:"settings.cms_tags",label:"CMS Tags"},{name:"settings.field_builder",label:"Field Builder",items:[{name:"settings.field_builder.assets_documents",label:"Asset Library - Documents"},{name:"settings.field_builder.assets_external",label:"Asset Library - External Links"},{name:"settings.field_builder.assets_images",label:"Asset Library - Images"},{name:"settings.field_builder.assets_videos",label:"Asset Library - Videos"},{name:"settings.field_builder.core_textbox",label:"Core - Textbox"}]},{name:"settings.nav",label:"Nav",items:[{name:"settings.nav.locale_tags",label:"Locale Tags"},{name:"settings.nav.nav_tags",label:"Nav Tags"}]},{name:"settings.tasks",label:"Tasks",items:[{name:"settings.tasks.categories",label:"Categories"}]},{name:"settings.users",label:"Users",items:[{name:"settings.users.manage",label:"Manage Users"},{name:"settings.users.roles",label:"Manage Roles"},{name:"settings.users.history",label:"User History"}]},{name:"settings.visitors",label:"Visitors",items:[{name:"settings.visitors.test_subscription",label:"Test Subscriptions"}]}]},autoResponder:{name:"modules.auto_responder",label:"Auto Responder",items:[{name:"modules.auto_responder.content",label:"Content"},{name:"modules.auto_responder.links",label:"Links"}]},translation:{name:"modules.translation",label:"Translation",items:[{name:"modules.translation.static",label:"Static Namespaces"}]},blog:{name:"modules.blog",label:"Public Relations",items:[{name:"modules.blog.articles",label:"Articles",items:B("articles")},{name:"modules.blog.blog",label:"Blog",items:B("blog")},{name:"modules.blog.meetings",label:"Meetings Blog",items:B("meetings")}]}},At={qa:[{name:"short_icon",label:"Short Icon",mIcon:b},{name:"short_icon_children",label:"Short Icon Children",mIcon:X,items:[{name:"short_icon_children.short",label:"Short"},{name:"short_icon_children.short_icon",label:"Short Icon",mIcon:b},{name:"short_icon_children.short_children",label:"Short Children",items:[{name:"short_icon_children.short_children.item",label:"Item"},{name:"short_icon_children.short_children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children.item",label:"Item"},{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children.children",label:"With Children",items:[{name:"short_icon_children.short_children.children.children.children.children.children.children.children.children.children.item",label:"Item"}]}]}]}]}]}]}]}]}]}]},{name:"short_icon_children.short_icon_children",label:"Short Icon Children",mIcon:b,items:[{name:"short_icon_children.short_icon_children.item",label:"Item"}]},{name:"short_icon_children.long",label:"Long - lorem ipsum dolor sit amet"},{name:"short_icon_children.long_icon",label:"Long Icon - lorem ipsum dolor sit amet",mIcon:b},{name:"short_icon_children.long_children",label:"Long Children - lorem ipsum dolor sit amet",items:[{name:"short_icon_children.long_children.item",label:"Item"}]},{name:"short_icon_children.long_icon_children",label:"Long Icon Children - lorem ipsum dolor sit amet",mIcon:b,items:[{name:"short_icon_children.long_icon_children.item",label:"Item"}]},...new Array(35).fill(0).map((e,n)=>({name:`short_icon_children.filler_item_${n}`,label:`Filler ${n}`})),{name:"short_icon_children.after_filler",label:"After Filler with Children",items:[{name:"short_icon_children.after_filler.item",label:"Item"}]}]},{name:"long_icon",label:"Long Icon - lorem ipsum dolor sit amet",mIcon:Ye},{name:"long_icon_children",label:"Long Icon Children - lorem ipsum dolor sit amet",mIcon:se,items:[{name:"long_icon_children.item",label:"Item"}]},{name:"group_short_icon",label:"Group Short",type:"group",mIcon:U,items:[{name:"group_short_icon.short",label:"Short"},{name:"group_short_icon.short_icon",label:"Short Icon",mIcon:b},{name:"group_short_icon.short_children",label:"Short Children",items:[{name:"group_short_icon.short_children.short_children.item",label:"Item"},{name:"group_short_icon.short_children.short_children.children",label:"With Children",items:[{name:"group_short_icon.short_children.short_children.children.item",label:"Item"},{name:"group_short_icon.short_children.short_children.children.children",label:"With Children",items:[{name:"group_short_icon.short_children.short_children.children.children.item",label:"Item"}]}]}]},{name:"group_short_icon.short_icon_children",label:"Short Icon Children",mIcon:b,items:[{name:"group_short_icon.short_icon_children.item",label:"Item"}]},{name:"group_short_icon.long",label:"Long - lorem ipsum dolor sit amet"},{name:"group_short_icon.long_icon",label:"Long Icon - lorem ipsum dolor sit amet",mIcon:b},{name:"group_short_icon.long_children",label:"Long Children - lorem ipsum dolor sit amet",items:[{name:"group_short_icon.long_children.item",label:"Item"}]},{name:"group_short_icon.long_icon_children",label:"Long Icon Children - lorem ipsum dolor sit amet",mIcon:b,items:[{name:"group_short_icon.long_icon_children.item",label:"Item"}]}]},{name:"group_long_icon",label:"Group Long Icon - lorem ipsum dolor sit amet",type:"group",mIcon:ce,items:[{name:"group_long_icon.item",label:"Item"}]},{name:"item_with_attrs",label:"Items With Attrs",mIcon:b,attrs:{"data-attr":"foo"}},{name:"click_variations",label:"Click Variations",mIcon:ge,items:[{name:"click_variations.default",label:"Default"},{name:"click_variations.default_with_href",label:"Default with href",attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_only",label:"Href Only",onNav:!1,attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_new_window",label:"Href, new window",onNav:!1,attrs:{href:"https://www.google.com/",target:"_blank"}},{name:"click_variations.custom_handler",label:"Custom Handler",onNav:function(){alert("Custom handler!")}}]},{name:"pinned_bottom",label:"Pinned Bottom",pinned:"bottom",mIcon:Ie,items:[{name:"pinned_bottom.short",label:"Short"},{name:"pinned_bottom.short_icon",label:"Short Icon",mIcon:b},{name:"pinned_bottom.short_icon_children",label:"Short Icon Children",mIcon:b,items:[{name:"pinned_bottom.short_icon_children.item",label:"Item"}]}]}],cms_flat:[{name:"home",label:"Home",mIcon:b},{...g.sitemap},{...g.assets,mIcon:U},{name:"modules",label:"Modules",type:"group",mIcon:X,items:[g.assetRequest,g.autoResponder,g.collections,g.dynamic,g.mapPublisher,g.mediaGallery,g.blog,g.translation]},{...g.settings,type:"group"}],none:[]},y=({dataSet:e,locale:n})=>{const t=At[e],o=we();return a.useEffect(()=>{o.i18n.language!==n&&o.i18n.changeLanguage(n)},[n]),d.jsx(Ne.Provider,{value:o,children:d.jsx("div",{style:{height:"100vh"},children:d.jsx(Dt,{items:t})})})};y.args={dataSet:"cms_flat",locale:"en"};y.argTypes={dataSet:{name:"Data",options:["qa","cms_flat","none"],control:{type:"select"}},locale:{name:"Locale",options:["en","es","cimode","de"],control:{type:"select"}}};var ae,oe,ie;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`({
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
}`,...(ie=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Ot=["Playground"],ln=Object.freeze(Object.defineProperty({__proto__:null,Playground:y,__namedExportsOrder:Ot,default:Tt},Symbol.toStringTag,{value:"Module"}));export{ln as s};
