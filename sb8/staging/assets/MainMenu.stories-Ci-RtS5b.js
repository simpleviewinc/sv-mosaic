import{r as M,j as p}from"./jsx-runtime-EKYJJIwR.js";import{H as F}from"./Home-BptBjTMc.js";import{r as l,g as E,R as a}from"./index-D0AnReJb.js";import{t as ve,r as T}from"./styled-Cb9FMILg.js";import{r as N}from"./createSvgIcon-DtczVsqP.js";import{H as he}from"./Help-Cv3bsFBc.js";import{M as ge}from"./MosaicContext-Y61KIvFP.js";import{u as xe}from"./useMosaicSettings-D4y8mIb9.js";import{s as re}from"./styled-components.browser.esm-njFAddlw.js";import{t as o}from"./sizes-DkIXWPpc.js";import{C as be,t as B,S as ye,a as _e,D as Me}from"./throws-DLZ75Q5e.js";import{r as O}from"./identifier-DOqdnZ6L.js";import{r as D}from"./createSvgIcon-DDyBApXB.js";import{s as f}from"./styled-components.browser.esm-8X0uN6v9.js";import{C as Ee,R as se}from"./StyledPopperPaper-BODJ-ail.js";import{B as we,u as Ie,T as Se}from"./Button-CyFYeSR6.js";import{E as $e,a as Ce}from"./stable-BFc8HSVh.js";import{C as qe}from"./ChevronLeft-Bjv82Anv.js";import{C as je}from"./Close-DizofMnI.js";import{t as Y}from"./testIds-oQNwr1rf.js";import{F as Pe}from"./Popper-CeYJ7yNz.js";import{u as Re}from"./useThemeWithoutDefault--IpNlO5A.js";function ke(e){const{theme:t,name:n,props:i}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?i:ve(t.components[n].defaultProps,i)}const Ae=typeof window<"u"?l.useLayoutEffect:l.useEffect;function ze(e,t,n,i,r){const[c,u]=l.useState(()=>r&&n?n(e).matches:i?i(e).matches:t);return Ae(()=>{let v=!0;if(!n)return;const s=n(e),m=()=>{v&&u(s.matches)};return m(),s.addListener(m),()=>{v=!1,s.removeListener(m)}},[e,n]),c}const le=l.useSyncExternalStore;function He(e,t,n,i,r){const c=l.useCallback(()=>t,[t]),u=l.useMemo(()=>{if(r&&n)return()=>n(e).matches;if(i!==null){const{matches:d}=i(e);return()=>d}return c},[c,e,i,r,n]),[v,s]=l.useMemo(()=>{if(n===null)return[c,()=>()=>{}];const d=n(e);return[()=>d.matches,h=>(d.addListener(h),()=>{d.removeListener(h)})]},[c,n,e]);return le(s,v,u)}function Te(e,t={}){const n=Re(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:c=i?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:v=!1}=ke({name:"MuiUseMediaQuery",props:t,theme:n});let s=e;return s=s.replace(/^@media( ?)/m,""),(le!==void 0?He:ze)(s,r,c,u,v)}var S={},W;function Ne(){if(W)return S;W=1;var e=T();Object.defineProperty(S,"__esModule",{value:!0}),S.default=void 0;var t=e(N()),n=M();return S.default=(0,t.default)((0,n.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree"),S}var Oe=Ne();const De=E(Oe);var $={},K;function Le(){if(K)return $;K=1;var e=T();Object.defineProperty($,"__esModule",{value:!0}),$.default=void 0;var t=e(N()),n=M();return $.default=(0,t.default)((0,n.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image"),$}var Ve=Le();const Fe=E(Ve);var C={},G;function Be(){if(G)return C;G=1;var e=T();Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0;var t=e(N()),n=M();return C.default=(0,t.default)((0,n.jsx)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11"}),"Extension"),C}var Qe=Be();const Ue=E(Qe);var q={},J;function Ye(){if(J)return q;J=1;var e=T();Object.defineProperty(q,"__esModule",{value:!0}),q.default=void 0;var t=e(N()),n=M();return q.default=(0,t.default)((0,n.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),q}var We=Ye();const Ke=E(We);var j={},X;function Ge(){if(X)return j;X=1;var e=O();Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var t=e(D()),n=M();return j.default=(0,t.default)((0,n.jsx)("path",{d:"M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"}),"Apps"),j}var Je=Ge();const Xe=E(Je);var P={},Z;function Ze(){if(Z)return P;Z=1;var e=O();Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var t=e(D()),n=M();return P.default=(0,t.default)((0,n.jsx)("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"ExitToApp"),P}var et=Ze();const tt=E(et);var R={},ee;function nt(){if(ee)return R;ee=1;var e=O();Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;var t=e(D()),n=M();return R.default=(0,t.default)((0,n.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff"),R}var at=nt();const ot=E(at),it=f.nav(({$collapsed:e,$hidden:t,$zIndex:n})=>`
	--collapse-duration: 0.15s;
	--collapse-timing-fn: ease-in-out;
	--collapsed-width: 56px;
	--expanded-width: 200px;

	color: ${o.color.gray[100]};
	height: 100%;
	line-height: ${o.line.tight};
	position: relative;
	display: flex;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: margin-right;

	${t?"":`
		margin-right: ${e?"var(--collapsed-width)":"var(--expanded-width)"};
	`}

	${n===void 0?"":`
		z-index: ${n};
	`}
`),rt=f.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100vw;
`,st=f.div`
	display: flex;
	height: 100%;

	${({$hidden:e})=>e?"":`
		position: absolute;
	`}
`,lt=f.div`
	margin-top: auto;
	border-top: 1px solid ${o.color.gray[800]};
`,ct=f.div`
	overflow: hidden;
	width: var(--expanded-width);
`,ce=f(Ee)(({$rootPanel:e,$collapsed:t})=>`
	padding: ${o.spacing(1,0,0)};
	background-color: ${e?o.color.gray[925]:o.color.gray[900]};
	overflow: hidden;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: width;
	height: 100%;

	${e?t?`
		width: var(--collapsed-width);
	`:`
		width: var(--expanded-width);
	`:""}
`),ue=f(se).attrs({$align:"center"})`
	color: ${o.color.gray[500]};
	padding: ${({$collapsed:e})=>e?o.spacing(0,4):o.spacing(0,3,0,6)};
	font-size: ${o.fontSize.body.lg};
	height: 40px;
	flex: none;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: padding-left;
`,me=f(we)`
	&& {
		button {
			padding: ${o.spacing(1)};
			height: ${o.spacing(5)};
			width: ${o.spacing(5)};
			color: ${o.color.gray[100]};

			&:hover {
				background-color: ${o.color.gray[925]};
			}

			&:focus-visible {
				outline-color: ${o.color.gray[100]};
			}
		}

		svg {
			font-size: 16px;
			line-height: 16px;
		}
	}
`,ut=f(me)`
	margin-left: ${o.spacing(-1)};
	margin-right: ${o.spacing(2)};
`,mt=f(me)`
	margin-left: auto;
`,dt=f.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	overflow: auto;
	width: 200px;
`,Q=f.div`
	margin-right: ${o.spacing(1)};
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: opacity;

	${({$invisible:e})=>e?`
		opacity: 0;
	`:""}
`,pt=f(se).attrs({as:"li",$justify:"stretch"})``,ft=f.button(({$isActive:e,$rootPanel:t,$collapsed:n})=>`
	all: unset;
	box-sizing: border-box;
	padding: ${n?o.spacing(0,4):o.spacing(0,3,0,6)};
	display: flex;
	height: 40px;
	align-items: center;
	cursor: pointer;
	width: 100%;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: padding-left;

	${e?`
		background-color: ${t?o.color.gray[950]:o.color.gray[925]};
		box-shadow: 0 0 20px rgba(0, 0, 0, ${t?"0.25":"0.19"}) inset;
	`:""}

	&:hover {
		background-color: ${t?o.color.gray[950]:o.color.gray[925]};
	}

	&:focus-visible {
		outline: 2px solid ${e?o.color.gold[600]:o.color.white};
		outline-offset: -6px;
	}
`),de=f.div`
	margin-right: ${o.spacing(2)};
	font-size: ${o.fontSize.icon.md};
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: opacity;

	${({$isActive:e})=>e?`
		color: ${o.color.gold[600]};
	`:""}

	${({$collapsed:e})=>e?`
		width: var(--collapsed-width);
		margin: ${o.spacing(0,-3,0,-4)};
		padding: ${o.spacing("9px",4)};
	`:""}

	${({$isPlaceholder:e,$collapsed:t})=>e?`
		position: absolute;
		opacity: ${t?"1":"0"};
		z-index: 1;
	`:""}
`,vt=f(be)`
	color: ${o.color.gray[600]};
	margin-left: auto;
	font-size: ${o.fontSize.icon.md};
`,pe=l.createContext({push:B("push requires a MainMenuContext provider"),close:B("close requires a MainMenuContext provider"),active:void 0,onNav:B("onNav requires a MainMenuContext provider")}),U=()=>l.useContext(pe);var k={},te;function ht(){if(te)return k;te=1;var e=O();Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var t=e(D()),n=M();return k.default=(0,t.default)((0,n.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"}),"Circle"),k}var gt=ht();const xt=E(gt);function bt({mIcon:e=null,depth:t}){return t>0?{Icon:e,isPlaceholderIcon:!1}:e?{Icon:e,isPlaceholderIcon:!1}:{Icon:xt,isPlaceholderIcon:!0}}function yt({depth:e=0,...t}){const{anchorProps:n,tooltipProps:i}=Ie(),{push:r,close:c,active:u,onNav:v,collapsed:s}=U(),{label:m,mIcon:d,items:h=$e,attrs:g=Ce,onNav:w}=t,I="href"in g&&g.href!==void 0?g.href:void 0,{Icon:_,isPlaceholderIcon:L}=bt({mIcon:d,depth:e}),x=l.useCallback(b=>{if(h.length){r({index:e,items:h,parent:t});return}if(w===!1)return;const{metaKey:V,ctrlKey:fe}=b;I!==void 0&&(fe||V)||(b.preventDefault(),typeof w=="function"?w({item:t,event:b}):v({item:t,event:b}),c())},[e,t,h,r,w,v,I,c]),y=t.isActive||u&&(u===t.name||u.startsWith(`${t.name}.`));return a.createElement(a.Fragment,null,a.createElement(pt,null,a.createElement(ft,{onClick:x,$rootPanel:!e,$isActive:y,$collapsed:s,...g,...I!==void 0?{href:I,as:"a"}:{}},_&&a.createElement(de,{$isActive:y,$isPlaceholder:L,$collapsed:s,...s?n:{}},a.createElement(_,null)),a.createElement(Q,{$invisible:!e&&s},m),h.length>0&&a.createElement(vt,null))),s&&a.createElement(Se,{...i,placement:"right"},m))}function _t({label:e,items:t,mIcon:n=null,depth:i}){const{collapsed:r}=U();return a.createElement(a.Fragment,null,a.createElement(ue,{$collapsed:r},n&&a.createElement(de,null,a.createElement(n,null)),a.createElement(Q,{$invisible:!i&&r},e)),a.createElement(H,{items:t,depth:i}))}function H({items:e,depth:t=0}){return a.createElement(dt,null,e.map(n=>n.type==="group"?a.createElement(_t,{key:n.name,depth:t,...n}):a.createElement(yt,{key:n.name,depth:t,...n})))}function Mt({showBack:e,title:t,items:n,pop:i,depth:r}){const c=l.useRef(),{close:u}=U();return a.createElement(Pe,{open:!0},a.createElement(ct,{ref:c,tabIndex:-1,"data-testid":Y.MAIN_MENU_FLYOUT},a.createElement(ye,{in:!0,direction:"right",container:c.current},a.createElement(ce,null,a.createElement(ue,null,e&&a.createElement(ut,{variant:"text",mIcon:qe,size:"small",onClick:i,tooltip:"Back"}),a.createElement(Q,{"data-testid":Y.MAIN_MENU_FLYOUT_TITLE},t),a.createElement(mt,{variant:"text",mIcon:je,size:"small",onClick:u,tooltip:"Close"})),a.createElement(H,{items:n,depth:r})))))}function ne({items:e,active:t,onNav:n,variant:i,onVariantChange:r,zIndex:c}){const[u,v]=l.useState([]),s=u[u.length-1],m=i==="icons_only",d=i==="hidden"||i==="mobile",[h,g]=l.useMemo(()=>{const x=[],y=[];for(const b of e)b.pinned==="bottom"?y.push(b):x.push(b);return i!=="mobile"&&y.push({name:"__mos_menu_display",label:"Menu Display",mIcon:_e,items:[{name:"__mos_menu_display.full",label:"Full",onNav:()=>r("full"),mIcon:tt,isActive:i==="full"},{name:"__mos_menu_display.icons_only",label:"Icons Only",onNav:()=>r("icons_only"),mIcon:Xe,isActive:i==="icons_only"},{name:"__mos_menu_display.hidden",label:"Hidden",onNav:()=>r("hidden"),mIcon:ot,isActive:i==="hidden"}]}),[x,y]},[e,r,i]),w=l.useCallback(({index:x,items:y,parent:b})=>{v(V=>[...V.slice(0,x),{items:y,parent:b}])},[]),I=l.useCallback(()=>{v(x=>x.slice(0,x.length-1))},[]),_=l.useCallback(()=>v([]),[]);l.useEffect(()=>{const x=({key:y,repeat:b})=>{y!=="Escape"||b||_()};return window.document.addEventListener("keydown",x),()=>window.document.removeEventListener("keydown",x)},[_]);const L=l.useMemo(()=>({push:w,close:_,active:t,onNav:n,collapsed:m,hidden:d}),[w,_,t,n,m,d]);return a.createElement(pe.Provider,{value:L},a.createElement(it,{$collapsed:m,$hidden:d,$zIndex:c},s&&!d&&a.createElement(rt,{onClick:_}),a.createElement(st,{$hidden:d},a.createElement(ce,{$rootPanel:!0,$collapsed:m},a.createElement(H,{items:h}),a.createElement(lt,null,a.createElement(H,{items:g}))),s&&a.createElement(Mt,{items:s.items,title:s.parent.label,depth:u.length,showBack:u.length>1,pop:I}))))}const Et={anchor:"left",variant:"temporary",ModalProps:{disableEnforceFocus:!0},PaperProps:{style:{backgroundColor:"transparent",borderRight:"0px",boxShadow:"none",zIndex:"auto"}}};function wt(e){const{variant:t,zIndex:n}=e,i=l.useMemo(()=>({zIndex:n}),[n]);return t==="hidden"||t==="mobile"?a.createElement(Me,{...Et,open:e.open,onClose:e.onClose,style:i},a.createElement(ne,{...e})):a.createElement(ne,{...e})}const It=`Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque placerat praesent dignissim iaculis eget fusce. Aliquet praesent quis purus id iaculis est himenaeos. Eu mi luctus pellentesque id magnis natoque placerat. Aenean erat semper dolor, luctus libero tellus convallis. Parturient eros nisi feugiat malesuada augue hendrerit nulla.

Venenatis pharetra taciti aptent pretium et. Habitasse id egestas platea eu; himenaeos ex nec gravida. Suspendisse habitasse eget varius neque; taciti sociosqu sem auctor. Arcu justo odio proin cursus tempus sem. Ac viverra inceptos lacinia congue lectus. Iaculis litora tempor eget non quam euismod nascetur.

Fringilla ultrices erat convallis lobortis augue ullamcorper amet. Ac lobortis taciti facilisis proin duis tortor elit. Taciti viverra nostra hac dapibus himenaeos ac. Etiam faucibus tortor praesent sollicitudin penatibus vulputate ipsum nullam. Suscipit nostra penatibus venenatis pulvinar ac. Erat massa commodo elit nulla tellus lectus sollicitudin. Cubilia fames potenti lacus posuere; tortor fusce! Sagittis pellentesque at class pulvinar vivamus; justo hac habitant.

Diam vitae consequat est nullam vitae proin rutrum porta. Per cubilia ante tempor; sollicitudin aenean platea neque purus. Suspendisse hendrerit ultricies finibus magnis lacinia natoque fames. Conubia neque felis torquent iaculis diam eros. Massa sit imperdiet dictum, cubilia orci adipiscing. Quisque quam commodo elementum, proin duis sit?

Interdum ante cursus iaculis amet dui cubilia; arcu est. Vel vivamus potenti dui vivamus nulla egestas rhoncus amet neque. Commodo ex dapibus a; odio conubia quisque magnis. Ornare massa quam volutpat euismod convallis commodo netus rhoncus. Mus magnis praesent sem integer vivamus maecenas donec. Ultricies dui vivamus viverra pretium eros parturient parturient non. Torquent neque in sociosqu adipiscing, vitae montes. Lacinia metus laoreet ante nunc orci.`,St=re.div`
	flex: 0 0 auto;
	background: ${o.newColors.almostBlack[100]};
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
`,$t=function(e){const n=Math.max(window.innerHeight,window.innerWidth)<1024?"mobile":e.variant;return p.jsxs(St,{children:[["hidden","mobile"].includes(n)&&p.jsx("span",{title:"Open Navigation",className:"menuButton",children:p.jsx(Ke,{onClick:e.openNav})}),p.jsx("img",{src:"https://auth.simpleviewinc.com/static_shared/simpleview_reverse.png",className:"logo"})]})},Ct=re.div`
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
`,qt="sv-mosaic-left-nav-variant",jt=()=>{},Pt=function(e){var d,h;const[t,n]=l.useState({open:!1,collapsed:!1,variant:localStorage.getItem(qt)??"full",label:((d=e.items[0])==null?void 0:d.label)||"home",name:((h=e.items[0])==null?void 0:h.name)||"Home"}),r=Te("(min-width: 1024px)",{defaultMatches:!0})?t.variant:"mobile",c=function(){n({...t,open:!0})},u=function(){n({...t,open:!1})},v=function({item:g}){n({...t,open:!1,label:g.label,name:g.name})},s=function(g){localStorage.setItem("sv-mosaic-left-nav-variant",g),n({...t,variant:g,open:!1})},m=l.useRef(null);return l.useEffect(()=>{m.current&&m.current.scrollTo(0,0)},[t.label,t.name]),p.jsxs(Ct,{onClick:jt,$onlyContent:e.onlyContent,children:[p.jsx($t,{variant:r,openNav:c}),p.jsxs("div",{className:"main",children:[p.jsx(wt,{active:t.name,open:t.open,items:e.items,variant:r,onClose:u,onNav:v,onVariantChange:s,zIndex:1101}),p.jsxs("div",{className:"content",ref:m,children:[!e.onlyContent&&p.jsxs(p.Fragment,{children:[p.jsx("h1",{children:t.label}),p.jsx("h2",{children:t.name})]}),e.children?e.children:It]})]})]})},Rt={title:"Components/MainMenu"},z=e=>[{name:`sitemap.${e}.main`,label:"Main Navigation"},{name:`sitemap.${e}.secondary`,label:"Secondary Navigation"},{name:`sitemap.${e}.footer`,label:"Footer Navigation"},{name:`sitemap.${e}.landing`,label:"Landing Pages"},{name:`sitemap.${e}.system`,label:"System"},{name:`sitemap.${e}.microsites`,label:"Microsites"}],kt=[{name:"home",label:"Home",mIcon:F},{name:"sitemap",label:"Sitemap",mIcon:De,items:[{name:"sitemap.primary",label:"Primary",items:z("primary")},{name:"sitemap.dutch",label:"Dutch",items:z("dutch")},{name:"sitemap.french",label:"French",items:z("french")},{name:"sitemap.spanish",label:"Spanish",items:z("spanish")}]},{mIcon:Fe,name:"assets",label:"Assets",items:[{name:"assets.documents",label:"Documents"},{name:"assets.external",label:"External Links"},{name:"assets.images",label:"Images"},{name:"assets.videos",label:"Videos"}]},{name:"modules",label:"Action Types",type:"group",mIcon:Ue,items:[{name:"click_variations.default",label:"Default"},{name:"click_variations.default_with_href",label:"Default with href",attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_only",label:"Href, default prevented",onNav:!1,attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_new_window",label:"Href, new window",onNav:!1,attrs:{href:"https://www.google.com/",target:"_blank"}},{name:"click_variations.custom_handler",label:"Custom Handler",onNav:function(){alert("Custom handler!")}}]},{name:"pinned_bottom",label:"Pinned Bottom",pinned:"bottom",mIcon:he,items:[{name:"pinned_bottom.short",label:"Short"},{name:"pinned_bottom.short_icon",label:"Short Icon",mIcon:F},{name:"pinned_bottom.short_icon_children",label:"Short Icon Children",mIcon:F,items:[{name:"pinned_bottom.short_icon_children.item",label:"Item"}]}]}],A=()=>{const e=xe();return p.jsx(ge.Provider,{value:e,children:p.jsx("div",{style:{height:"100vh"},children:p.jsx(Pt,{items:kt})})})};var ae,oe,ie;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`(): ReactElement => {
  const mosaicSettings = useMosaicSettings();
  return <MosaicContext.Provider value={mosaicSettings}>
            <div style={{
      height: "100vh"
    }}>
                <MainMenuNavWrapper items={items} />
            </div>
        </MosaicContext.Provider>;
}`,...(ie=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const At=["Playground"],an=Object.freeze(Object.defineProperty({__proto__:null,Playground:A,__namedExportsOrder:At,default:Rt},Symbol.toStringTag,{value:"Module"}));export{an as s};
