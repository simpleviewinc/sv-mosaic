import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{H}from"./Home-BhQBOOkz.js";import{c as C}from"./createSvgIcon-v5cQwfe7.js";import{H as ne}from"./Help-DkLf6Sb9.js";import{M as ae}from"./MosaicContext-Ckn3SYVO.js";import{r as d,a as oe,R as n}from"./index-CDlOlYQx.js";import{u as ie}from"./useMosaicSettings-MWPwaqUN.js";import{c as D}from"./styled-components.browser.esm-Cbu7rhRc.js";import{t as o}from"./sizes-BeWafy6f.js";import{s as se,C as le,t as j,S as re,a as ce,D as me}from"./scrollbarStyles-DAQJW3QI.js";import{c as z}from"./createSvgIcon-CpiYeT0y.js";import{C as O}from"./Close-Dcayhvfb.js";import{c as p}from"./styled-components.browser.esm-CsHOGV45.js";import{C as ue,R as Q}from"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import{B as de}from"./Button-DiGzPWWk.js";import{E as pe,a as he}from"./stable-BFc8HSVh.js";import{u as fe,T as ge}from"./useTooltip-CvILwQ8N.js";import{C as ve}from"./ChevronLeft-ef-3r2ji.js";import{t as T}from"./testIds-B6Pox1zA.js";import{F as be}from"./Popover-BARbcQa_.js";import{k as ye}from"./DefaultPropsProvider-t4VZgs2P.js";import{u as xe}from"./useThemeWithoutDefault-DDjfFhIc.js";import{g as Me,u as Ee}from"./useEnhancedEffect-DTUl3p8N.js";function we(e,t,a,i,r){const[c,h]=d.useState(()=>r&&a?a(e).matches:i?i(e).matches:t);return Ee(()=>{if(!a)return;const m=a(e),u=()=>{h(m.matches)};return u(),m.addEventListener("change",u),()=>{m.removeEventListener("change",u)}},[e,a]),c}const Se={...oe},U=Se.useSyncExternalStore;function $e(e,t,a,i,r){const c=d.useCallback(()=>t,[t]),h=d.useMemo(()=>{if(r&&a)return()=>a(e).matches;if(i!==null){const{matches:f}=i(e);return()=>f}return c},[c,e,i,r,a]),[m,u]=d.useMemo(()=>{if(a===null)return[c,()=>()=>{}];const f=a(e);return[()=>f.matches,l=>(f.addEventListener("change",l),()=>{f.removeEventListener("change",l)})]},[c,a,e]);return U(u,m,h)}function Y(e={}){const{themeId:t}=e;return function(i,r={}){let c=xe();c&&t&&(c=c[t]||c);const h=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:m=!1,matchMedia:u=h?window.matchMedia:null,ssrMatchMedia:b=null,noSsr:f=!1}=Me({name:"MuiUseMediaQuery",props:r,theme:c});let l=typeof i=="function"?i(c):i;return l=l.replace(/^@media( ?)/m,""),l.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(U!==void 0?$e:we)(l,m,u,b,f)}}Y();const Ie=C(s.jsx("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"})),_e=C(s.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),ke=C(s.jsx("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11"})),Ce=C(s.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})),ze=z(s.jsx("path",{d:"M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"})),Pe=z(s.jsx("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"})),He=z(s.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"})),je=p.nav(({$collapsed:e,$hidden:t,$zIndex:a})=>`
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

	${a===void 0?"":`
		z-index: ${a};
	`}
`),Ne=p.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100vw;
`,Le=p.div`
	display: flex;
	height: 100%;
	max-width: 100vw;

	${({$hidden:e})=>e?"":`
		position: absolute;
	`}
`,Be=p.div`
	margin-top: auto;
	border-top: 1px solid ${o.color.gray[800]};
`,Te=p.div`
	overflow: hidden;
`,W=p(ue)(({$rootPanel:e,$collapsed:t})=>`
	padding: ${o.spacing(1,0,0)};
	background-color: ${e?o.color.gray[925]:o.color.gray[900]};
	overflow: hidden;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: width;
	height: 100%;
	flex: none;

	${e?t?`
		width: var(--collapsed-width);
	`:`
		width: var(--expanded-width);
	`:""}
`),N=p(Q).attrs({$align:"center"})`
	color: ${o.color.gray[500]};
	padding: ${({$collapsed:e})=>e?o.spacing(0,4):o.spacing(0,3,0,6)};
	font-size: ${o.fontSize.body.lg};
	height: 40px;
	flex: none;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: padding-left;
`,K=p(de)`
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
`,qe=p(K)`
	margin-left: ${o.spacing(-1)};
	margin-right: ${o.spacing(2)};
`,G=p(K)`
	margin-left: auto;
`,J=p.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	overflow: auto;
`,X=p(J)`
	${se}
`,q=p(X)`
	width: 200px;
`,Ae=p(X)`
	min-width: 200px;
`,L=p.div`
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
`,Ve=p(Q).attrs({as:"li",$justify:"stretch"})``,Fe=p.button(({$isActive:e,$rootPanel:t,$collapsed:a})=>`
	all: unset;
	box-sizing: border-box;
	padding: ${a?o.spacing(0,4):o.spacing(0,3,0,6)};
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
`),Z=p.div`
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
`,Re=p(le)`
	color: ${o.color.gray[600]};
	margin-left: auto;
	font-size: ${o.fontSize.icon.md};
`,ee=d.createContext({push:j("push requires a MainMenuContext provider"),clearStack:j("clearStack requires a MainMenuContext provider"),active:void 0,onNav:j("onNav requires a MainMenuContext provider")}),B=()=>d.useContext(ee),De=z(s.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"}));function Oe({mIcon:e=null,depth:t}){return t>0?{Icon:e,isPlaceholderIcon:!1}:e?{Icon:e,isPlaceholderIcon:!1}:{Icon:De,isPlaceholderIcon:!0}}function Qe({depth:e=0,...t}){const{anchorProps:a,tooltipProps:i}=fe(),{push:r,clearStack:c,active:h,onNav:m,collapsed:u}=B(),{label:b,mIcon:f,items:l=pe,attrs:g=he,onNav:x}=t,y="href"in g&&g.href!==void 0?g.href:void 0,{Icon:$,isPlaceholderIcon:P}=Oe({mIcon:f,depth:e}),w=d.useCallback(v=>{if(l.length){r({index:e,items:l,parent:t});return}if(x===!1)return;const{metaKey:M,ctrlKey:E}=v;y!==void 0&&(E||M)||(v.preventDefault(),typeof x=="function"?x({item:t,event:v}):m({item:t,event:v}),c())},[e,t,l,r,x,m,y,c]),_=t.isActive||h&&(h===t.name||h.startsWith(`${t.name}.`));return n.createElement(n.Fragment,null,n.createElement(Ve,null,n.createElement(Fe,{onClick:w,$rootPanel:!e,$isActive:_,$collapsed:u,...g,...y!==void 0?{href:y,as:"a"}:{}},$&&n.createElement(Z,{$isActive:_,$isPlaceholder:P,$collapsed:u,...u?a:{}},n.createElement($,null)),n.createElement(L,{$invisible:!e&&u},b),l.length>0&&n.createElement(Re,null))),u&&n.createElement(ge,{...i,placement:"right"},b))}function Ue({label:e,items:t,mIcon:a=null,depth:i}){const{collapsed:r}=B();return n.createElement("li",null,n.createElement(N,{$collapsed:r},a&&n.createElement(Z,null,n.createElement(a,null)),n.createElement(L,{$invisible:!i&&r},e)),n.createElement(J,null,n.createElement(k,{items:t,depth:i})))}function k({items:e,depth:t=0}){return n.createElement(n.Fragment,null,e.map(a=>a.type==="group"?n.createElement(Ue,{key:a.name,depth:t,...a}):n.createElement(Qe,{key:a.name,depth:t,...a})))}function Ye({onBack:e,title:t,items:a,depth:i}){const r=d.useRef(void 0),{clearStack:c,onClose:h,isMobileVariant:m}=B();return n.createElement(be,{open:!0},n.createElement(Te,{ref:r,tabIndex:-1,"data-testid":T.MAIN_MENU_FLYOUT},n.createElement(re,{timeout:m?0:void 0,in:!0,direction:"right",container:r.current},n.createElement(W,null,n.createElement(N,null,e&&n.createElement(qe,{variant:"text",mIcon:ve,size:"small",onClick:e,tooltip:"Back"}),n.createElement(L,{"data-testid":T.MAIN_MENU_FLYOUT_TITLE},t),n.createElement(G,{variant:"text",mIcon:O,size:"small",onClick:m?h:c,tooltip:"Close"})),n.createElement(Ae,null,n.createElement(k,{items:a,depth:i}))))))}function A({items:e,active:t,onNav:a,variant:i,onVariantChange:r,zIndex:c,onClose:h}){const[m,u]=d.useState([]),b=m[m.length-1],f=i==="icons_only",l=i==="mobile",g=i==="hidden"||l,[x,y]=d.useMemo(()=>{const v=[],M=[];for(const E of e)E.pinned==="bottom"?M.push(E):v.push(E);return i!=="mobile"&&M.push({name:"__mos_menu_display",label:"Menu Display",mIcon:ce,items:[{name:"__mos_menu_display.full",label:"Full",onNav:()=>r("full"),mIcon:Pe,isActive:i==="full"},{name:"__mos_menu_display.icons_only",label:"Icons Only",onNav:()=>r("icons_only"),mIcon:ze,isActive:i==="icons_only"},{name:"__mos_menu_display.hidden",label:"Hidden",onNav:()=>r("hidden"),mIcon:He,isActive:i==="hidden"}]}),[v,M]},[e,r,i]),$=d.useCallback(({index:v,items:M,parent:E})=>{u(te=>[...te.slice(0,v),{items:M,parent:E}])},[]),P=d.useCallback(()=>{u(v=>v.slice(0,v.length-1))},[]),w=d.useCallback(()=>u([]),[]);d.useEffect(()=>{const v=({key:M,repeat:E})=>{M!=="Escape"||E||w()};return window.document.addEventListener("keydown",v),()=>window.document.removeEventListener("keydown",v)},[w]);const _=d.useMemo(()=>({push:$,clearStack:w,active:t,onNav:a,collapsed:f,hidden:g,isMobileVariant:l,onClose:h}),[$,w,t,a,f,g,l,h]);return n.createElement(ee.Provider,{value:_},n.createElement(je,{$collapsed:f,$hidden:g,$zIndex:c},b&&!g&&n.createElement(Ne,{onClick:w}),n.createElement(Le,{$hidden:g},(!l||!b)&&n.createElement(W,{$rootPanel:!0,$collapsed:f},g&&n.createElement(N,null,n.createElement(G,{variant:"text",mIcon:O,size:"small",onClick:h,tooltip:"Close"})),n.createElement(q,null,n.createElement(k,{items:x})),n.createElement(Be,null,n.createElement(q,null,n.createElement(k,{items:y})))),b&&n.createElement(Ye,{items:b.items,title:b.parent.label,depth:m.length,onBack:l?w:m.length>1?P:void 0}))))}const We={anchor:"left",variant:"temporary",ModalProps:{disableEnforceFocus:!0},PaperProps:{style:{backgroundColor:"transparent",borderRight:"0px",boxShadow:"none",zIndex:"auto"}}};function Ke(e){const{variant:t,zIndex:a}=e,i=d.useMemo(()=>({zIndex:a}),[a]);return t==="hidden"||t==="mobile"?n.createElement(me,{...We,open:e.open,onClose:e.onClose,style:i},n.createElement(A,{...e})):n.createElement(A,{...e})}const Ge=Y({themeId:ye}),Je=`Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque placerat praesent dignissim iaculis eget fusce. Aliquet praesent quis purus id iaculis est himenaeos. Eu mi luctus pellentesque id magnis natoque placerat. Aenean erat semper dolor, luctus libero tellus convallis. Parturient eros nisi feugiat malesuada augue hendrerit nulla.

Venenatis pharetra taciti aptent pretium et. Habitasse id egestas platea eu; himenaeos ex nec gravida. Suspendisse habitasse eget varius neque; taciti sociosqu sem auctor. Arcu justo odio proin cursus tempus sem. Ac viverra inceptos lacinia congue lectus. Iaculis litora tempor eget non quam euismod nascetur.

Fringilla ultrices erat convallis lobortis augue ullamcorper amet. Ac lobortis taciti facilisis proin duis tortor elit. Taciti viverra nostra hac dapibus himenaeos ac. Etiam faucibus tortor praesent sollicitudin penatibus vulputate ipsum nullam. Suscipit nostra penatibus venenatis pulvinar ac. Erat massa commodo elit nulla tellus lectus sollicitudin. Cubilia fames potenti lacus posuere; tortor fusce! Sagittis pellentesque at class pulvinar vivamus; justo hac habitant.

Diam vitae consequat est nullam vitae proin rutrum porta. Per cubilia ante tempor; sollicitudin aenean platea neque purus. Suspendisse hendrerit ultricies finibus magnis lacinia natoque fames. Conubia neque felis torquent iaculis diam eros. Massa sit imperdiet dictum, cubilia orci adipiscing. Quisque quam commodo elementum, proin duis sit?

Interdum ante cursus iaculis amet dui cubilia; arcu est. Vel vivamus potenti dui vivamus nulla egestas rhoncus amet neque. Commodo ex dapibus a; odio conubia quisque magnis. Ornare massa quam volutpat euismod convallis commodo netus rhoncus. Mus magnis praesent sem integer vivamus maecenas donec. Ultricies dui vivamus viverra pretium eros parturient parturient non. Torquent neque in sociosqu adipiscing, vitae montes. Lacinia metus laoreet ante nunc orci.`,Xe=D.div`
	flex: 0 0 auto;
	background: ${o.color.black};
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
`,Ze=function(e){const a=Math.max(window.innerHeight,window.innerWidth)<1024?"mobile":e.variant;return s.jsxs(Xe,{children:[["hidden","mobile"].includes(a)&&s.jsx("span",{title:"Open Navigation",className:"menuButton",children:s.jsx(Ce,{onClick:e.openNav})}),s.jsx("img",{src:"https://auth.simpleviewinc.com/static_shared/simpleview_reverse.png",className:"logo"})]})},et=D.div`
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
`,tt="sv-mosaic-left-nav-variant",nt=()=>{},at=function(e){var g,x;const[t,a]=d.useState({open:!1,collapsed:!1,variant:localStorage.getItem(tt)??"full",label:((g=e.items[0])==null?void 0:g.label)||"home",name:((x=e.items[0])==null?void 0:x.name)||"Home"}),i=Number(e.mobileBreakpoint),h=Ge(`(min-width: ${i!==i?1024:i}px)`,{defaultMatches:!0})?t.variant:"mobile",m=function(){a({...t,open:!0})},u=function(){a({...t,open:!1})},b=function({item:y}){a({...t,open:!1,label:y.label,name:y.name})},f=function(y){localStorage.setItem("sv-mosaic-left-nav-variant",y),a({...t,variant:y,open:!1})},l=d.useRef(null);return d.useEffect(()=>{l.current&&l.current.scrollTo(0,0)},[t.label,t.name]),s.jsxs(et,{onClick:nt,$onlyContent:e.onlyContent,children:[s.jsx(Ze,{variant:h,openNav:m}),s.jsxs("div",{className:"main",children:[s.jsx(Ke,{active:t.name,open:t.open,items:e.items,variant:h,onClose:u,onNav:b,onVariantChange:f,zIndex:1101}),s.jsxs("div",{className:"content",ref:l,children:[!e.onlyContent&&s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:t.label}),s.jsx("h2",{children:t.name})]}),e.children?e.children:Je]})]})]})},ot={title:"Components/MainMenu"},I=e=>[{name:`sitemap.${e}.main`,label:"Main Navigation"},{name:`sitemap.${e}.secondary`,label:"Secondary Navigation"},{name:`sitemap.${e}.footer`,label:"Footer Navigation"},{name:`sitemap.${e}.landing`,label:"Landing Pages"},{name:`sitemap.${e}.system`,label:"System"},{name:`sitemap.${e}.microsites`,label:"Microsites"}],it=[{name:"home",label:"Home",mIcon:H},{name:"sitemap",label:"Sitemap",mIcon:Ie,items:[{name:"sitemap.primary",label:"Primary",items:I("primary")},{name:"sitemap.dutch",label:"Dutch",items:I("dutch")},{name:"sitemap.french",label:"French",items:I("french")},{name:"sitemap.spanish",label:"Spanish",items:I("spanish")},{name:"sitemap.ethiophia",label:"Federal Democratic Republic of Ethiopia",items:I("ethiophia")}]},{mIcon:_e,name:"assets",label:"Assets",items:[{name:"assets.documents",label:"Documents"},{name:"assets.external",label:"External Links"},{name:"assets.images",label:"Images"},{name:"assets.videos",label:"Videos"}]},{name:"long.names",label:"Long menu labels that have no business being so long",type:"item",items:[{name:"super.long.name",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sapien nulla. Sed vestibulum magna eu ante tincidunt, sit amet sagittis turpis gravida. Sed et tincidunt diam.",type:"item"}]},{name:"modules",label:"Action Types",type:"group",mIcon:ke,items:[{name:"click_variations.default",label:"Default"},{name:"click_variations.default_with_href",label:"Default with href",attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_only",label:"Href, default prevented",onNav:!1,attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_new_window",label:"Href, new window",onNav:!1,attrs:{href:"https://www.google.com/",target:"_blank"}},{name:"click_variations.custom_handler",label:"Custom Handler",onNav:function(){alert("Custom handler!")}}]},{name:"pinned_bottom",label:"Pinned Bottom",pinned:"bottom",mIcon:ne,items:[{name:"pinned_bottom.short",label:"Short"},{name:"pinned_bottom.short_icon",label:"Short Icon",mIcon:H},{name:"pinned_bottom.short_icon_children",label:"Short Icon Children",mIcon:H,items:[{name:"pinned_bottom.short_icon_children.item",label:"Item"}]}]}],S=({mobileBreakpoint:e})=>{const t=ie();return s.jsx(ae.Provider,{value:t,children:s.jsx("div",{style:{height:"100vh"},children:s.jsx(at,{items:it,mobileBreakpoint:e})})})};S.args={mobileBreakpoint:1024};S.argTypes={mobileBreakpoint:{name:"Mobile Breakpoint",control:{type:"number"}}};var V,F,R;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`({
  mobileBreakpoint
}: typeof Playground.args): ReactElement => {
  const mosaicSettings = useMosaicSettings();
  return <MosaicContext.Provider value={mosaicSettings}>
            <div style={{
      height: "100vh"
    }}>
                <MainMenuNavWrapper items={items} mobileBreakpoint={mobileBreakpoint} />
            </div>
        </MosaicContext.Provider>;
}`,...(R=(F=S.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const st=["Playground"],Pt=Object.freeze(Object.defineProperty({__proto__:null,Playground:S,__namedExportsOrder:st,default:ot},Symbol.toStringTag,{value:"Module"}));export{Pt as s};
