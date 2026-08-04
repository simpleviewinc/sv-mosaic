import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{H as P}from"./Home-BZetNL79.js";import{c as $}from"./createSvgIcon-h9rIBQiG.js";import{s as X,C as Z,t as H,S as ee,D as te,u as ne,I as ae}from"./scrollbarStyles-DkHhhliA.js";import{H as ie}from"./Help-BcORB-TR.js";import{M as oe}from"./MosaicContext-DJPbhtc9.js";import{r as c,R as n}from"./index-wekxHvEx.js";import{u as se}from"./useMosaicSettings-M5P3nAy8.js";import{c as l}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as a}from"./sizes-BeWafy6f.js";import{S as le}from"./Settings-pl1mUW38.js";import{C as R}from"./Close-C8qa5nrL.js";import{C as re,R as D}from"./StyledPopperPaper-C4GIz6jS.js";import"./TooltipIcon-CPXCaul4.js";import{B as ce}from"./Button-CdzdKupF.js";import{E as me,a as ue}from"./stable-BFc8HSVh.js";import{u as de,T as pe}from"./useTooltip-B7zXsQMX.js";import{C as he}from"./ChevronLeft-DQPkTHY5.js";import{t as B}from"./testIds-B6Pox1zA.js";import{F as ge}from"./Popover-DT_DvNHq.js";const fe=$(o.jsx("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"})),ve=$(o.jsx("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11"})),be=$(o.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})),ye=$(o.jsx("path",{d:"M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"})),xe=$(o.jsx("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"})),Me=$(o.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"})),Ee=l.nav(({$collapsed:e,$hidden:t,$zIndex:i})=>`
	--collapse-duration: 0.15s;
	--collapse-timing-fn: ease-in-out;
	--collapsed-width: 56px;
	--expanded-width: 200px;

	color: ${a.color.gray[100]};
	height: 100%;
	line-height: ${a.line.tight};
	position: relative;
	display: flex;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: margin-right;

	${t?"":`
		margin-right: ${e?"var(--collapsed-width)":"var(--expanded-width)"};
	`}

	${i===void 0?"":`
		z-index: ${i};
	`}
`),we=l.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100vw;
`,Se=l.div`
	display: flex;
	height: 100%;
	max-width: 100vw;

	${({$hidden:e})=>e?"":`
		position: absolute;
	`}
`,$e=l.div`
	margin-top: auto;
	border-top: 1px solid ${a.color.gray[800]};
`,Ie=l.div`
	overflow: hidden;
`,O=l(re)(({$rootPanel:e,$collapsed:t})=>`
	padding: ${a.spacing(1,0,0)};
	background-color: ${e?a.color.gray[925]:a.color.gray[900]};
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
`),j=l(D).attrs({$align:"center"})`
	color: ${a.color.gray[500]};
	padding: ${({$collapsed:e})=>e?a.spacing(0,4):a.spacing(0,3,0,6)};
	font-size: ${a.fontSize.body.lg};
	height: 40px;
	flex: none;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: padding-left;
`,U=l(ce)`
	&& {
		button {
			padding: ${a.spacing(1)};
			height: ${a.spacing(5)};
			width: ${a.spacing(5)};
			color: ${a.color.gray[100]};

			&:hover {
				background-color: ${a.color.gray[925]};
			}

			&:focus-visible {
				outline-color: ${a.color.gray[100]};
			}
		}

		svg {
			font-size: 16px;
			line-height: 16px;
		}
	}
`,_e=l(U)`
	margin-left: ${a.spacing(-1)};
	margin-right: ${a.spacing(2)};
`,Y=l(U)`
	margin-left: auto;
`,W=l.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	overflow: auto;
`,K=l(W)`
	${X}
`,A=l(K)`
	width: 200px;
`,ke=l(K)`
	min-width: 200px;
`,N=l.div`
	margin-right: ${a.spacing(1)};
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: opacity;

	${({$invisible:e})=>e?`
		opacity: 0;
	`:""}
`,Ce=l(D).attrs({as:"li",$justify:"stretch"})``,ze=l.button(({$isActive:e,$rootPanel:t,$collapsed:i})=>`
	all: unset;
	box-sizing: border-box;
	padding: ${i?a.spacing(0,4):a.spacing(0,3,0,6)};
	display: flex;
	height: 40px;
	align-items: center;
	cursor: pointer;
	width: 100%;
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: padding-left;

	${e?`
		background-color: ${t?a.color.gray[950]:a.color.gray[925]};
		box-shadow: 0 0 20px rgba(0, 0, 0, ${t?"0.25":"0.19"}) inset;
	`:""}

	&:hover {
		background-color: ${t?a.color.gray[950]:a.color.gray[925]};
	}

	&:focus-visible {
		outline: 2px solid ${e?a.color.gold[600]:a.color.white};
		outline-offset: -6px;
	}
`),Q=l.div`
	margin-right: ${a.spacing(2)};
	font-size: ${a.fontSize.icon.md};
	transition-duration: var(--collapse-duration);
	transition-timing-function: var(--collapse-timing-fn);
	transition-property: opacity;

	${({$isActive:e})=>e?`
		color: ${a.color.gold[600]};
	`:""}

	${({$collapsed:e})=>e?`
		width: var(--collapsed-width);
		margin: ${a.spacing(0,-3,0,-4)};
		padding: ${a.spacing("9px",4)};
	`:""}

	${({$isPlaceholder:e,$collapsed:t})=>e?`
		position: absolute;
		opacity: ${t?"1":"0"};
		z-index: 1;
	`:""}
`,Pe=l(Z)`
	color: ${a.color.gray[600]};
	margin-left: auto;
	font-size: ${a.fontSize.icon.md};
`,G=c.createContext({push:H("push requires a MainMenuContext provider"),clearStack:H("clearStack requires a MainMenuContext provider"),active:void 0,onNav:H("onNav requires a MainMenuContext provider")}),q=()=>c.useContext(G),He=$(o.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"}));function je({mIcon:e=null,depth:t}){return t>0?{Icon:e,isPlaceholderIcon:!1}:e?{Icon:e,isPlaceholderIcon:!1}:{Icon:He,isPlaceholderIcon:!0}}function Ne({depth:e=0,...t}){const{anchorProps:i,tooltipProps:s}=de(),{push:m,clearStack:w,active:p,onNav:h,collapsed:f}=q(),{label:v,mIcon:M,items:u=me,attrs:d=ue,onNav:b}=t,g="href"in d&&d.href!==void 0?d.href:void 0,{Icon:I,isPlaceholderIcon:z}=je({mIcon:M,depth:e}),E=c.useCallback(r=>{if(u.length){m({index:e,items:u,parent:t});return}if(b===!1)return;const{metaKey:y,ctrlKey:x}=r;g!==void 0&&(x||y)||(r.preventDefault(),typeof b=="function"?b({item:t,event:r}):h({item:t,event:r}),w())},[e,t,u,m,b,h,g,w]),k=t.isActive||p&&(p===t.name||p.startsWith(`${t.name}.`));return n.createElement(n.Fragment,null,n.createElement(Ce,null,n.createElement(ze,{onClick:E,$rootPanel:!e,$isActive:k,$collapsed:f,...d,...g!==void 0?{href:g,as:"a"}:{}},I&&n.createElement(Q,{$isActive:k,$isPlaceholder:z,$collapsed:f,...f?i:{}},n.createElement(I,null)),n.createElement(N,{$invisible:!e&&f},v),u.length>0&&n.createElement(Pe,null))),f&&n.createElement(pe,{...s,placement:"right"},v))}function qe({label:e,items:t,mIcon:i=null,depth:s}){const{collapsed:m}=q();return n.createElement("li",null,n.createElement(j,{$collapsed:m},i&&n.createElement(Q,null,n.createElement(i,null)),n.createElement(N,{$invisible:!s&&m},e)),n.createElement(W,null,n.createElement(C,{items:t,depth:s})))}function C({items:e,depth:t=0}){return n.createElement(n.Fragment,null,e.map(i=>i.type==="group"?n.createElement(qe,{key:i.name,depth:t,...i}):n.createElement(Ne,{key:i.name,depth:t,...i})))}function Be({onBack:e,title:t,items:i,depth:s}){const m=c.useRef(void 0),{clearStack:w,onClose:p,isMobileVariant:h}=q();return n.createElement(ge,{open:!0},n.createElement(Ie,{ref:m,tabIndex:-1,"data-testid":B.MAIN_MENU_FLYOUT},n.createElement(ee,{timeout:h?0:void 0,in:!0,direction:"right",container:m.current},n.createElement(O,null,n.createElement(j,null,e&&n.createElement(_e,{variant:"text",mIcon:he,size:"small",onClick:e,tooltip:"Back"}),n.createElement(N,{"data-testid":B.MAIN_MENU_FLYOUT_TITLE},t),n.createElement(Y,{variant:"text",mIcon:R,size:"small",onClick:h?p:w,tooltip:"Close"})),n.createElement(ke,null,n.createElement(C,{items:i,depth:s}))))))}function L({items:e,active:t,onNav:i,variant:s,onVariantChange:m,zIndex:w,onClose:p}){const[h,f]=c.useState([]),v=h[h.length-1],M=s==="icons_only",u=s==="mobile",d=s==="hidden"||u,[b,g]=c.useMemo(()=>{const r=[],y=[];for(const x of e)x.pinned==="bottom"?y.push(x):r.push(x);return s!=="mobile"&&y.push({name:"__mos_menu_display",label:"Menu Display",mIcon:le,items:[{name:"__mos_menu_display.full",label:"Full",onNav:()=>m("full"),mIcon:xe,isActive:s==="full"},{name:"__mos_menu_display.icons_only",label:"Icons Only",onNav:()=>m("icons_only"),mIcon:ye,isActive:s==="icons_only"},{name:"__mos_menu_display.hidden",label:"Hidden",onNav:()=>m("hidden"),mIcon:Me,isActive:s==="hidden"}]}),[r,y]},[e,m,s]),I=c.useCallback(({index:r,items:y,parent:x})=>{f(J=>[...J.slice(0,r),{items:y,parent:x}])},[]),z=c.useCallback(()=>{f(r=>r.slice(0,r.length-1))},[]),E=c.useCallback(()=>f([]),[]);c.useEffect(()=>{const r=({key:y,repeat:x})=>{y!=="Escape"||x||E()};return window.document.addEventListener("keydown",r),()=>window.document.removeEventListener("keydown",r)},[E]);const k=c.useMemo(()=>({push:I,clearStack:E,active:t,onNav:i,collapsed:M,hidden:d,isMobileVariant:u,onClose:p}),[I,E,t,i,M,d,u,p]);return n.createElement(G.Provider,{value:k},n.createElement(Ee,{$collapsed:M,$hidden:d,$zIndex:w},v&&!d&&n.createElement(we,{onClick:E}),n.createElement(Se,{$hidden:d},(!u||!v)&&n.createElement(O,{$rootPanel:!0,$collapsed:M},d&&n.createElement(j,null,n.createElement(Y,{variant:"text",mIcon:R,size:"small",onClick:p,tooltip:"Close"})),n.createElement(A,null,n.createElement(C,{items:b})),n.createElement($e,null,n.createElement(A,null,n.createElement(C,{items:g})))),v&&n.createElement(Be,{items:v.items,title:v.parent.label,depth:h.length,onBack:u?E:h.length>1?z:void 0}))))}const Ae={anchor:"left",variant:"temporary",ModalProps:{disableEnforceFocus:!0},PaperProps:{style:{backgroundColor:"transparent",borderRight:"0px",boxShadow:"none",zIndex:"auto"}}};function Le(e){const{variant:t,zIndex:i}=e,s=c.useMemo(()=>({zIndex:i}),[i]);return t==="hidden"||t==="mobile"?n.createElement(te,{...Ae,open:e.open,onClose:e.onClose,style:s},n.createElement(L,{...e})):n.createElement(L,{...e})}const Te=`Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque placerat praesent dignissim iaculis eget fusce. Aliquet praesent quis purus id iaculis est himenaeos. Eu mi luctus pellentesque id magnis natoque placerat. Aenean erat semper dolor, luctus libero tellus convallis. Parturient eros nisi feugiat malesuada augue hendrerit nulla.

Venenatis pharetra taciti aptent pretium et. Habitasse id egestas platea eu; himenaeos ex nec gravida. Suspendisse habitasse eget varius neque; taciti sociosqu sem auctor. Arcu justo odio proin cursus tempus sem. Ac viverra inceptos lacinia congue lectus. Iaculis litora tempor eget non quam euismod nascetur.

Fringilla ultrices erat convallis lobortis augue ullamcorper amet. Ac lobortis taciti facilisis proin duis tortor elit. Taciti viverra nostra hac dapibus himenaeos ac. Etiam faucibus tortor praesent sollicitudin penatibus vulputate ipsum nullam. Suscipit nostra penatibus venenatis pulvinar ac. Erat massa commodo elit nulla tellus lectus sollicitudin. Cubilia fames potenti lacus posuere; tortor fusce! Sagittis pellentesque at class pulvinar vivamus; justo hac habitant.

Diam vitae consequat est nullam vitae proin rutrum porta. Per cubilia ante tempor; sollicitudin aenean platea neque purus. Suspendisse hendrerit ultricies finibus magnis lacinia natoque fames. Conubia neque felis torquent iaculis diam eros. Massa sit imperdiet dictum, cubilia orci adipiscing. Quisque quam commodo elementum, proin duis sit?

Interdum ante cursus iaculis amet dui cubilia; arcu est. Vel vivamus potenti dui vivamus nulla egestas rhoncus amet neque. Commodo ex dapibus a; odio conubia quisque magnis. Ornare massa quam volutpat euismod convallis commodo netus rhoncus. Mus magnis praesent sem integer vivamus maecenas donec. Ultricies dui vivamus viverra pretium eros parturient parturient non. Torquent neque in sociosqu adipiscing, vitae montes. Lacinia metus laoreet ante nunc orci.`,Ve=l.div`
	flex: 0 0 auto;
	background: ${a.color.black};
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
`,Fe=function(e){const i=Math.max(window.innerHeight,window.innerWidth)<1024?"mobile":e.variant;return o.jsxs(Ve,{children:[["hidden","mobile"].includes(i)&&o.jsx("span",{title:"Open Navigation",className:"menuButton",children:o.jsx(be,{onClick:e.openNav})}),o.jsx("img",{src:"https://auth.simpleviewinc.com/static_shared/simpleview_reverse.png",className:"logo"})]})},Re=l.div`
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
`,De="sv-mosaic-left-nav-variant",Oe=()=>{},Ue=function(e){var d,b;const[t,i]=c.useState({open:!1,collapsed:!1,variant:localStorage.getItem(De)??"full",label:((d=e.items[0])==null?void 0:d.label)||"home",name:((b=e.items[0])==null?void 0:b.name)||"Home"}),s=Number(e.mobileBreakpoint),p=ne(`(min-width: ${s!==s?1024:s}px)`,{defaultMatches:!0})?t.variant:"mobile",h=function(){i({...t,open:!0})},f=function(){i({...t,open:!1})},v=function({item:g}){i({...t,open:!1,label:g.label,name:g.name})},M=function(g){localStorage.setItem("sv-mosaic-left-nav-variant",g),i({...t,variant:g,open:!1})},u=c.useRef(null);return c.useEffect(()=>{u.current&&u.current.scrollTo(0,0)},[t.label,t.name]),o.jsxs(Re,{onClick:Oe,$onlyContent:e.onlyContent,children:[o.jsx(Fe,{variant:p,openNav:h}),o.jsxs("div",{className:"main",children:[o.jsx(Le,{active:t.name,open:t.open,items:e.items,variant:p,onClose:f,onNav:v,onVariantChange:M,zIndex:1101}),o.jsxs("div",{className:"content",ref:u,children:[!e.onlyContent&&o.jsxs(o.Fragment,{children:[o.jsx("h1",{children:t.label}),o.jsx("h2",{children:t.name})]}),e.children?e.children:Te]})]})]})},Ye={title:"Components/MainMenu"},_=e=>[{name:`sitemap.${e}.main`,label:"Main Navigation"},{name:`sitemap.${e}.secondary`,label:"Secondary Navigation"},{name:`sitemap.${e}.footer`,label:"Footer Navigation"},{name:`sitemap.${e}.landing`,label:"Landing Pages"},{name:`sitemap.${e}.system`,label:"System"},{name:`sitemap.${e}.microsites`,label:"Microsites"}],We=[{name:"home",label:"Home",mIcon:P},{name:"sitemap",label:"Sitemap",mIcon:fe,items:[{name:"sitemap.primary",label:"Primary",items:_("primary")},{name:"sitemap.dutch",label:"Dutch",items:_("dutch")},{name:"sitemap.french",label:"French",items:_("french")},{name:"sitemap.spanish",label:"Spanish",items:_("spanish")},{name:"sitemap.ethiophia",label:"Federal Democratic Republic of Ethiopia",items:_("ethiophia")}]},{mIcon:ae,name:"assets",label:"Assets",items:[{name:"assets.documents",label:"Documents"},{name:"assets.external",label:"External Links"},{name:"assets.images",label:"Images"},{name:"assets.videos",label:"Videos"}]},{name:"long.names",label:"Long menu labels that have no business being so long",type:"item",items:[{name:"super.long.name",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sapien nulla. Sed vestibulum magna eu ante tincidunt, sit amet sagittis turpis gravida. Sed et tincidunt diam.",type:"item"}]},{name:"modules",label:"Action Types",type:"group",mIcon:ve,items:[{name:"click_variations.default",label:"Default"},{name:"click_variations.default_with_href",label:"Default with href",attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_only",label:"Href, default prevented",onNav:!1,attrs:{href:"https://www.google.com/"}},{name:"click_variations.href_new_window",label:"Href, new window",onNav:!1,attrs:{href:"https://www.google.com/",target:"_blank"}},{name:"click_variations.custom_handler",label:"Custom Handler",onNav:function(){alert("Custom handler!")}}]},{name:"pinned_bottom",label:"Pinned Bottom",pinned:"bottom",mIcon:ie,items:[{name:"pinned_bottom.short",label:"Short"},{name:"pinned_bottom.short_icon",label:"Short Icon",mIcon:P},{name:"pinned_bottom.short_icon_children",label:"Short Icon Children",mIcon:P,items:[{name:"pinned_bottom.short_icon_children.item",label:"Item"}]}]}],S=({mobileBreakpoint:e})=>{const t=se();return o.jsx(oe.Provider,{value:t,children:o.jsx("div",{style:{height:"100vh"},children:o.jsx(Ue,{items:We,mobileBreakpoint:e})})})};S.args={mobileBreakpoint:1024};S.argTypes={mobileBreakpoint:{name:"Mobile Breakpoint",control:{type:"number"}}};var T,V,F;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
}`,...(F=(V=S.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Ke=["Playground"],gt=Object.freeze(Object.defineProperty({__proto__:null,Playground:S,__namedExportsOrder:Ke,default:Ye},Symbol.toStringTag,{value:"Module"}));export{gt as s};
