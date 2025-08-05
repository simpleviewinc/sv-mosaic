import{r as c,R as w}from"./index-D0AnReJb.js";import{s as B}from"./styled-components.browser.esm-C5LJ_neh.js";import{t as a}from"./sizes-_ON_TzAH.js";import{j as Me,_ as W,a as $,b as P,e as T}from"./identifier-Bktyv6O_.js";import{a as O,g as U,u as K,s as F,c as _,b as q,r as Z}from"./generateUtilityClasses-D4jmUuEZ.js";import{j as z}from"./jsx-runtime-EKYJJIwR.js";import{B as ue}from"./ButtonBase-CyOgbtoj.js";import{u as we}from"./index-R4Jqw3Tw.js";import{P as pe,a as Ie}from"./Popover-B_lFWVkj.js";import{e as fe,u as be}from"./useIsFocusVisible-o8lB1h8w.js";import{c as Ee,a as te,b as Se}from"./Popper-B65p2oiP.js";import{o as re}from"./ownerWindow-DvT1GKkC.js";import{u as ee}from"./useToggle-CTbnrs6g.js";function ke(e){return U("MuiButton",e)}const G=O("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Pe=c.createContext({}),Be=c.createContext(void 0),Re=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],ze=e=>{const{color:o,disableElevation:t,fullWidth:n,size:i,variant:l,classes:s}=e,d={root:["root",l,`${l}${P(o)}`,`size${P(i)}`,`${l}Size${P(i)}`,`color${P(o)}`,t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${P(i)}`],endIcon:["icon","endIcon",`iconSize${P(i)}`]},u=q(d,ke,s);return $({},s,u)},me=e=>$({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Le=F(ue,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${P(t.color)}`],o[`size${P(t.size)}`],o[`${t.variant}Size${P(t.size)}`],t.color==="inherit"&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})(({theme:e,ownerState:o})=>{var t,n;const i=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],l=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return $({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":$({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:T.alpha(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:T.alpha(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[o.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:T.alpha(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}),"&:active":$({},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${G.focusVisible}`]:$({},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${G.disabled}`]:$({color:(e.vars||e).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${T.alpha(e.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(t=(n=e.palette).getContrastText)==null?void 0:t.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${G.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${G.disabled}`]:{boxShadow:"none"}}),Te=F("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.startIcon,o[`iconSize${P(t.size)}`]]}})(({ownerState:e})=>$({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},me(e))),Fe=F("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.endIcon,o[`iconSize${P(t.size)}`]]}})(({ownerState:e})=>$({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},me(e))),Ne=c.forwardRef(function(o,t){const n=c.useContext(Pe),i=c.useContext(Be),l=Me(n,o),s=K({props:l,name:"MuiButton"}),{children:d,color:u="primary",component:b="button",className:h,disabled:p=!1,disableElevation:f=!1,disableFocusRipple:g=!1,endIcon:S,focusVisibleClassName:M,fullWidth:r=!1,size:y="medium",startIcon:k,type:v,variant:C="text"}=s,E=W(s,Re),I=$({},s,{color:u,component:b,disabled:p,disableElevation:f,disableFocusRipple:g,fullWidth:r,size:y,type:v,variant:C}),x=ze(I),L=k&&z.jsx(Te,{className:x.startIcon,ownerState:I,children:k}),D=S&&z.jsx(Fe,{className:x.endIcon,ownerState:I,children:S}),N=i||"";return z.jsxs(Le,$({ownerState:I,className:_(n.className,x.root,h,N),component:b,disabled:p,focusRipple:!g,focusVisibleClassName:_(x.focusVisible,M),ref:t,type:v},E,{classes:x,children:[L,d,D]}))}),Oe=B("span")(({$fullWidth:e})=>`
	display: inline-block;

	&.invisible {
		visbility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	${e&&`
		width: 100%;
	`}
`),De={danger:{contained:`
			--bg: ${a.color.red[500]};
			--color: ${a.color.white};
			--shadow-border: ${a.color.red[600]};

			--over-bg: ${a.color.red[600]};
			--over-shadow-border: ${a.color.red[700]};
		`,text:`
			--color: ${a.color.red[600]};
			--over-bg: ${a.color.red[50]};
		`},primary:{contained:`
			--bg-top: #FDBA26;
			--bg-bottom: #FDAE02;
			--shadow: 0 1px 2.5px rgba(253, 175, 4, 0.33);
			--shadow-border: #F5A904;
			--icon-color: ${a.color.gold[950]};

			--over-bg-top: #FFC84E;
			--over-bg-bottom: #FFB513;
			--over-shadow-border: #FDAF04;
		`,text:`
			--color: ${a.color.gold[950]};

			--over-bg: ${a.color.gold[100]};
		`},secondary:{contained:`
			--bg: ${a.color.white};
			--color: ${a.color.black};
			--shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
			--shadow-border: rgba(0, 0, 0, .2);
			--icon-color: ${a.color.gray[600]};

			--over-bg: ${a.color.gray[50]};
		`,text:`
			--icon-color: ${a.color.gray[500]};

			--over-bg: ${a.color.gray[50]};
		`},info:{contained:`
			--bg-top: ${a.color.teal[600]};
			--bg-bottom: ${a.color.teal[700]};
			--color: ${a.color.white};
			--shadow: 0 1px 2.5px rgba(0, 130, 155, 0.33);
			--shadow-border: ${a.color.teal[700]};

			--over-bg-top: #0E9DB9;
			--over-bg-bottom: #078AA3;
			--over-shadow-border: #078DA7;
		`,text:`
			--color: ${a.color.teal[700]};

			--over-bg: ${a.color.teal[25]};
		`},specialized:{contained:`
			--bg: ${a.color.gray[925]};
			--color: ${a.color.white};
			--shadow-border: ${a.color.black};

			--over-bg: ${a.color.black};
			--over-shadow-border: ${a.color.black};
		`,text:`
			--icon-color: ${a.color.gray[500]};

			--over-bg: ${a.color.gray[50]};
		`},tertiary:{contained:`
			--bg: ${a.color.gray[100]};
			--color: ${a.color.black};
			--shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
			--shadow-border: rgba(0, 0, 0, .2);
			--icon-color: ${a.color.gray[600]};

			--over-bg: ${a.color.gray[200]};
		`,text:`
			--icon-color: ${a.color.gray[500]};

			--over-bg: ${a.color.gray[200]};
		`}};function We({$size:e,$isIconButton:o}){return o?[0]:e==="inherit"?[0,"0.25em"]:e==="small"?[0,3]:e==="xsmall"?[0,2]:[0,4]}const _e={xsmall:"24px",small:"32px",medium:"36px",large:"40px",xlarge:"44px",inherit:"auto"};function je({$fullWidth:e,$isIconButton:o,$size:t}){const n=_e[t];return e?["100%",n]:o?t==="xsmall"?["24px",n]:t==="small"?["32px",n]:["36px",n]:[void 0,n]}const Ae=B(Ne)(({$intent:e,$variant:o,$fullWidth:t,$size:n,$isIconButton:i,$bluntLeft:l,$bluntRight:s})=>{const d=We({$size:n,$isIconButton:i}),[u,b]=je({$fullWidth:t,$isIconButton:i,$size:n});return`
		&& {
			--bg-top: transparent;
			--bg-bottom: transparent;
			--color: ${a.color.black};
			--shadow: 0 0;
			--shadow-border: transparent;
			--icon-color: inherit;

			--over-bg-top: var(--bg-top);
			--over-bg-bottom: var(--bg-bottom);
			--over-shadow-border: var(--shadow-border);

			${De[e][o]}

			align-items: center;
			background-color: var(--bg);
			background-image: linear-gradient(to bottom, var(--bg-top) 0%, var(--bg-bottom) 100%);
			border: none;
			border-radius: ${a.rounded.md};
			box-shadow: 0 0 0 1px var(--shadow-border), var(--shadow);
			color: var(--color);
			cursor: pointer;
			display: flex;
			height: ${b};
			font-size: ${n==="inherit"?"inherit":a.fontSize.text.md};
			font-weight: ${a.weight.medium};
			line-height: ${n==="inherit"?"inherit":a.line.normal};
			min-width: 0;
			padding: ${a.spacing(...d)};
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			transition-property: background-color, box-shadow;
			vertical-align: middle;

			${l?`
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			`:""}

			${s?`
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			`:""}

			${n!=="inherit"?"":`
				margin-left: -0.25em;
				margin-right: -0.25em;
			`}

			${u?`
				width: ${u};
			`:""}

			${o!=="input"?"":`
				font: inherit;
				height: 1.4375em;
				box-sizing: content-box;
			`}

			& .Mos-ButtonGradient {
				background-image: linear-gradient(to bottom, var(--over-bg-top) 0%, var(--over-bg-bottom) 100%);
			}

			&:hover {
				background-color: var(--over-bg);
				box-shadow: 0 0 0 1px var(--over-shadow-border), var(--shadow);

				.Mos-ButtonGradient {
					opacity: 1;
				}
			}

			&:focus-visible {
				outline: 2px solid ${a.color.gray[700]};
				outline-offset: ${o==="text"?"-2px":"3px"};
				position: relative;
				z-index: 2;
			}

			&:disabled {
				color: var(--color);
				opacity: .4;
			}
		}
	`}),Ve=B.div`
	&& {
		margin: -2px;

		${({$inherit:e})=>`
			font-size: ${e?"1em":a.fontSize.text["2xl"]};
		`}

		${({$isAdornment:e})=>e?`
			color: var(--icon-color);
		`:""}
	}
`,He=B.span.attrs({className:"Mos-ButtonGradient"})`
	position: absolute;
	inset: 0;
	border-radius: ${a.rounded.md};
	opacity: 0;
	transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`,Ge=B.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({$size:e})=>`
		gap: ${a.spacing(e==="inherit"?"0.25em":e==="xsmall"?1:2)};
	`}
`,Ue=B.span`
	align-self: baseline;
`;var X={exports:{}},m={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Ke(){if(ne)return m;ne=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),S;S=Symbol.for("react.module.reference");function M(r){if(typeof r=="object"&&r!==null){var y=r.$$typeof;switch(y){case e:switch(r=r.type,r){case t:case i:case n:case b:case h:return r;default:switch(r=r&&r.$$typeof,r){case d:case s:case u:case f:case p:case l:return r;default:return y}}case o:return y}}}return m.ContextConsumer=s,m.ContextProvider=l,m.Element=e,m.ForwardRef=u,m.Fragment=t,m.Lazy=f,m.Memo=p,m.Portal=o,m.Profiler=i,m.StrictMode=n,m.Suspense=b,m.SuspenseList=h,m.isAsyncMode=function(){return!1},m.isConcurrentMode=function(){return!1},m.isContextConsumer=function(r){return M(r)===s},m.isContextProvider=function(r){return M(r)===l},m.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===e},m.isForwardRef=function(r){return M(r)===u},m.isFragment=function(r){return M(r)===t},m.isLazy=function(r){return M(r)===f},m.isMemo=function(r){return M(r)===p},m.isPortal=function(r){return M(r)===o},m.isProfiler=function(r){return M(r)===i},m.isStrictMode=function(r){return M(r)===n},m.isSuspense=function(r){return M(r)===b},m.isSuspenseList=function(r){return M(r)===h},m.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===t||r===i||r===n||r===b||r===h||r===g||typeof r=="object"&&r!==null&&(r.$$typeof===f||r.$$typeof===p||r.$$typeof===l||r.$$typeof===s||r.$$typeof===u||r.$$typeof===S||r.getModuleId!==void 0)},m.typeOf=M,m}var ae;function qe(){return ae||(ae=1,X.exports=Ke()),X.exports}qe();const Q=c.createContext({});function Xe(e){return U("MuiList",e)}O("MuiList",["root","padding","dense","subheader"]);const Ye=["children","className","component","dense","disablePadding","subheader"],Je=e=>{const{classes:o,disablePadding:t,dense:n,subheader:i}=e;return q({root:["root",!t&&"padding",n&&"dense",i&&"subheader"]},Xe,o)},Qe=F("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disablePadding&&o.padding,t.dense&&o.dense,t.subheader&&o.subheader]}})(({ownerState:e})=>$({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Ze=c.forwardRef(function(o,t){const n=K({props:o,name:"MuiList"}),{children:i,className:l,component:s="ul",dense:d=!1,disablePadding:u=!1,subheader:b}=n,h=W(n,Ye),p=c.useMemo(()=>({dense:d}),[d]),f=$({},n,{component:s,dense:d,disablePadding:u}),g=Je(f);return z.jsx(Q.Provider,{value:p,children:z.jsxs(Qe,$({as:s,className:_(g.root,l),ref:t,ownerState:f},h,{children:[b,i]}))})}),eo=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Y(e,o,t){return e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:t?null:e.firstChild}function ie(e,o,t){return e===o?t?e.firstChild:e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:t?null:e.lastChild}function ge(e,o){if(o===void 0)return!0;let t=e.innerText;return t===void 0&&(t=e.textContent),t=t.trim().toLowerCase(),t.length===0?!1:o.repeating?t[0]===o.keys[0]:t.indexOf(o.keys.join(""))===0}function j(e,o,t,n,i,l){let s=!1,d=i(e,o,o?t:!1);for(;d;){if(d===e.firstChild){if(s)return!1;s=!0}const u=n?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!ge(d,l)||u)d=i(e,d,t);else return d.focus(),!0}return!1}const oo=c.forwardRef(function(o,t){const{actions:n,autoFocus:i=!1,autoFocusItem:l=!1,children:s,className:d,disabledItemsFocusable:u=!1,disableListWrap:b=!1,onKeyDown:h,variant:p="selectedMenu"}=o,f=W(o,eo),g=c.useRef(null),S=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});fe(()=>{i&&g.current.focus()},[i]),c.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(v,{direction:C})=>{const E=!g.current.style.width;if(v.clientHeight<g.current.clientHeight&&E){const I=`${Ee(re(v))}px`;g.current.style[C==="rtl"?"paddingLeft":"paddingRight"]=I,g.current.style.width=`calc(100% + ${I})`}return g.current}}),[]);const M=v=>{const C=g.current,E=v.key,I=re(C).activeElement;if(E==="ArrowDown")v.preventDefault(),j(C,I,b,u,Y);else if(E==="ArrowUp")v.preventDefault(),j(C,I,b,u,ie);else if(E==="Home")v.preventDefault(),j(C,null,b,u,Y);else if(E==="End")v.preventDefault(),j(C,null,b,u,ie);else if(E.length===1){const x=S.current,L=E.toLowerCase(),D=performance.now();x.keys.length>0&&(D-x.lastTime>500?(x.keys=[],x.repeating=!0,x.previousKeyMatched=!0):x.repeating&&L!==x.keys[0]&&(x.repeating=!1)),x.lastTime=D,x.keys.push(L);const N=I&&!x.repeating&&ge(I,x);x.previousKeyMatched&&(N||j(C,I,!1,u,Y,x))?v.preventDefault():x.previousKeyMatched=!1}h&&h(v)},r=be(g,t);let y=-1;c.Children.forEach(s,(v,C)=>{if(!c.isValidElement(v)){y===C&&(y+=1,y>=s.length&&(y=-1));return}v.props.disabled||(p==="selectedMenu"&&v.props.selected||y===-1)&&(y=C),y===C&&(v.props.disabled||v.props.muiSkipListHighlight||v.type.muiSkipListHighlight)&&(y+=1,y>=s.length&&(y=-1))});const k=c.Children.map(s,(v,C)=>{if(C===y){const E={};return l&&(E.autoFocus=!0),v.props.tabIndex===void 0&&p==="selectedMenu"&&(E.tabIndex=0),c.cloneElement(v,E)}return v});return z.jsx(Ze,$({role:"menu",ref:r,className:d,onKeyDown:M,tabIndex:i?0:-1},f,{children:k}))});function to(e){return U("MuiMenu",e)}O("MuiMenu",["root","paper","list"]);const ro=["onEntering"],no=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],ao={vertical:"top",horizontal:"right"},io={vertical:"top",horizontal:"left"},so=e=>{const{classes:o}=e;return q({root:["root"],paper:["paper"],list:["list"]},to,o)},lo=F(pe,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,o)=>o.root})({}),co=F(Ie,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),uo=F(oo,{name:"MuiMenu",slot:"List",overridesResolver:(e,o)=>o.list})({outline:0}),po=c.forwardRef(function(o,t){var n,i;const l=K({props:o,name:"MuiMenu"}),{autoFocus:s=!0,children:d,className:u,disableAutoFocusItem:b=!1,MenuListProps:h={},onClose:p,open:f,PaperProps:g={},PopoverClasses:S,transitionDuration:M="auto",TransitionProps:{onEntering:r}={},variant:y="selectedMenu",slots:k={},slotProps:v={}}=l,C=W(l.TransitionProps,ro),E=W(l,no),I=we(),x=$({},l,{autoFocus:s,disableAutoFocusItem:b,MenuListProps:h,onEntering:r,PaperProps:g,transitionDuration:M,TransitionProps:C,variant:y}),L=so(x),D=s&&!b&&f,N=c.useRef(null),he=(R,H)=>{N.current&&N.current.adjustStyleForScrollbar(R,{direction:I?"rtl":"ltr"}),r&&r(R,H)},xe=R=>{R.key==="Tab"&&(R.preventDefault(),p&&p(R,"tabKeyDown"))};let V=-1;c.Children.map(d,(R,H)=>{c.isValidElement(R)&&(R.props.disabled||(y==="selectedMenu"&&R.props.selected||V===-1)&&(V=H))});const oe=(n=k.paper)!=null?n:co,ye=(i=v.paper)!=null?i:g,$e=te({elementType:k.root,externalSlotProps:v.root,ownerState:x,className:[L.root,u]}),Ce=te({elementType:oe,externalSlotProps:ye,ownerState:x,className:L.paper});return z.jsx(lo,$({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:I?"right":"left"},transformOrigin:I?ao:io,slots:{paper:oe,root:k.root},slotProps:{root:$e,paper:Ce},open:f,ref:t,transitionDuration:M,TransitionProps:$({onEntering:he},C),ownerState:x},E,{classes:S,children:z.jsx(uo,$({onKeyDown:xe,actions:N,autoFocus:s&&(V===-1||b),autoFocusItem:D,variant:y},h,{className:_(L.list,h.className),children:d}))}))}),fo=B(po)`
	& > .MuiMenu-paper {
		border-radius: ${a.rounded.md};
		box-shadow:
			var(--mos-border-light),
			0 34px 60px 0 rgba(0, 0, 0, 0.15),
			var(--mos-shadow-xl);
		margin-top: ${a.spacing(2)};

		.MuiList-root {
			padding: ${a.spacing(1)};
		}
	}
`;function bo(e){return w.createElement(fo,{anchorEl:e.anchorEl,open:e.open,onClose:e.onClose},e.children)}const se=O("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),le=O("MuiListItemIcon",["root","alignItemsFlexStart"]),ce=O("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function mo(e){return U("MuiMenuItem",e)}const A=O("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),go=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],vo=(e,o)=>{const{ownerState:t}=e;return[o.root,t.dense&&o.dense,t.divider&&o.divider,!t.disableGutters&&o.gutters]},ho=e=>{const{disabled:o,dense:t,divider:n,disableGutters:i,selected:l,classes:s}=e,u=q({root:["root",t&&"dense",o&&"disabled",!i&&"gutters",n&&"divider",l&&"selected"]},mo,s);return $({},s,u)},xo=F(ue,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:vo})(({theme:e,ownerState:o})=>$({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${A.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${A.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${A.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${se.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${se.inset}`]:{marginLeft:52},[`& .${ce.root}`]:{marginTop:0,marginBottom:0},[`& .${ce.inset}`]:{paddingLeft:36},[`& .${le.root}`]:{minWidth:36}},!o.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&$({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${le.root} svg`]:{fontSize:"1.25rem"}}))),yo=c.forwardRef(function(o,t){const n=K({props:o,name:"MuiMenuItem"}),{autoFocus:i=!1,component:l="li",dense:s=!1,divider:d=!1,disableGutters:u=!1,focusVisibleClassName:b,role:h="menuitem",tabIndex:p,className:f}=n,g=W(n,go),S=c.useContext(Q),M=c.useMemo(()=>({dense:s||S.dense||!1,disableGutters:u}),[S.dense,s,u]),r=c.useRef(null);fe(()=>{i&&r.current&&r.current.focus()},[i]);const y=$({},n,{dense:M.dense,divider:d,disableGutters:u}),k=ho(n),v=be(r,t);let C;return n.disabled||(C=p!==void 0?p:-1),z.jsx(Q.Provider,{value:M,children:z.jsx(xo,$({ref:v,role:h,tabIndex:C,component:l,focusVisibleClassName:_(k.focusVisible,b),className:_(k.root,f)},g,{ownerState:y,classes:k}))})}),de=["black","blue","red","yellow","teal","gray"],$o=B(yo)`
	padding: ${a.spacing(2,3)};
	border-radius: ${a.rounded.md};

	&:hover {
		background-color: ${a.color.gray[100]};
	}

	&:focus-visible {
		background-color: ${a.color.gray[200]};
	}

	&.Mui-selected {
		background-color: ${a.color.teal[50]};

		&:hover,
		&.Mui-focusVisible {
			background-color: ${a.color.teal[100]};
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${a.fontSize.text["2xl"]};
	}

	& > .menuLabel {
		${({$truncateText:e})=>e&&`
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	}
`,Co=B.div`
	display: inline-flex;

    ${({$color:e})=>`
        & svg {
            color: ${a.colors[e]}
        }
    `}
`;function Mo({mIcon:e,color:o="black",attrs:t,title:n,onClick:i,disabled:l,selected:s=!1,truncateText:d,autoFocus:u,tabIndex:b,className:h,...p}){const f="children"in p?p.children:null,g="label"in p?p.label:"";if(!de.includes(o))throw new Error("The menu item component only accepts the following colors: "+de.join(", ")+`. The color provided was "${o}"`);const S=c.useMemo(()=>({title:n===!0&&typeof g=="string"?g:typeof n=="string"?n:void 0,...t}),[t,n,g]);return c.createElement($o,{...S,onClick:i,disabled:l,selected:s,className:["menu-item",h].filter(Boolean).join(" "),disableRipple:!0,$truncateText:d,autoFocus:u,tabIndex:b,"aria-selected":s,...p},f??c.createElement(c.Fragment,null,e&&c.createElement(Co,{className:"icon",$color:o},c.createElement(e,null)),c.createElement("div",{className:"menuLabel"},c.createElement("span",null,g))))}function wo({onClose:e,open:o,anchorEl:t,items:n,onChange:i,placeholder:l,value:s}){const d=c.useMemo(()=>[...l?[{label:l,value:void 0}]:[],...n].map(({onClick:h,...p},f)=>{const g=function(){h&&h(),i&&i(p.value),e()};return w.createElement(Mo,{key:f,...p,selected:i&&s===p.value,onClick:g})}),[n,i,e,l,s]);return w.createElement(bo,{anchorEl:t,open:o,onClose:e},d)}const Io=B(Se)`
	z-index: 1500;
	background: ${a.newColors.almostBlack[100]};
	color: white;
	padding: 8px;
	border-radius: 4px;
	color: white;
	font-size: ${a.fontSize.text.sm};
	max-width: 500px;
	pointer-events: none;

	&[data-popper-placement="bottom-start"] .arrow,
	&[data-popper-placement="bottom"] .arrow,
	&[data-popper-placement="bottom-end"] .arrow {
		border-bottom-color: ${a.newColors.almostBlack[100]};
		border-top: 0;
		top: -5px;
	}

	&[data-popper-placement="top-start"] .arrow,
	&[data-popper-placement="top"] .arrow,
	&[data-popper-placement="top-end"] .arrow {
		border-top-color: ${a.newColors.almostBlack[100]};
		border-bottom: 0;
		bottom: -5px;
	}

	&[data-popper-placement="bottom-start"] .arrow,
	&[data-popper-placement="top-start"] .arrow{
		left: 5px;
	}

	&[data-popper-placement="bottom"] .arrow,
	&[data-popper-placement="top"] .arrow{
		left: 50%;
		transform: translateX(-50%);
	}

	&[data-popper-placement="bottom-end"] .arrow,
	&[data-popper-placement="top-end"] .arrow{
		right: 5px;
	}

	&[data-popper-placement="left-start"] .arrow,
	&[data-popper-placement="left"] .arrow,
	&[data-popper-placement="left-end"] .arrow {
		border-left-color: ${a.newColors.almostBlack[100]};
		border-right: 0;
		right: -5px;
	}

	&[data-popper-placement="right-start"] .arrow,
	&[data-popper-placement="right"] .arrow,
	&[data-popper-placement="right-end"] .arrow {
		border-right-color: ${a.newColors.almostBlack[100]};
		border-left: 0;
		left: -5px;
	}

	&[data-popper-placement="left-start"] .arrow,
	&[data-popper-placement="right-start"] .arrow{
		top: 5px;
	}

	&[data-popper-placement="left"] .arrow,
	&[data-popper-placement="right"] .arrow{
		top: 50%;
		transform: translateY(-50%);
	}

	&[data-popper-placement="left-end"] .arrow,
	&[data-popper-placement="right-end"] .arrow{
		bottom: 5px;
	}
`,Eo=B.div`
	border: 5px solid transparent;
	position: absolute;
`,So=[{name:"offset",options:{offset:[0,10]}}],ko=e=>{const{children:o,open:t,placement:n="bottom-start",anchorEl:i,id:l,maxWidth:s}=e,d=c.useMemo(()=>({maxWidth:s}),[s]);return c.createElement(Io,{open:t,anchorEl:i,placement:n,modifiers:So,role:"tooltip",id:l,"data-testid":"tooltip-test-id",style:d},c.createElement(Eo,{className:"arrow"}),o)};function Po(){const[e,o]=c.useState(null),[t,n]=c.useState(!1),i=c.useId(),l=c.useMemo(()=>({open:t,anchorEl:e,id:`tooltip-${i}`}),[t,e,i]),s=c.useMemo(()=>({ref:o,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),"aria-describedby":`tooltip-${i}`}),[i]);return{tooltipProps:l,anchorProps:s}}function J(e,o=!0){const t=c.useRef(!1);c.useEffect(()=>{t.current||!o||(console.warn(e),t.current=!0)})}const Bo=c.createContext(null),Ro={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},zo={black:"specialized",blue:"info",gray:"secondary",lightBlue:"secondary",red:"danger",teal:"info",white:"secondary",yellow:"primary"},ve=c.forwardRef(function({size:o="medium",...t},n){var i,l;const s=t.mIcon,d=!t.label&&s,u=t.iconPosition||"left",b=s&&w.createElement(Ve,{as:s,style:{color:t.mIconColor},$isAdornment:!d,$inherit:o==="inherit"}),h=ee(t,"disabled",!1);J("[MOS Button] The `color` prop is deprecated and should no longer be used, it will be removed in a future version. Use the `intent` prop instead.",t.color!==void 0),J("[MOS Button] The `icon` variant is deprecated. Mosaic now infers an icon variant from the use of the `mIcon` prop and the lack of a `label` prop.",t.variant==="icon"),J("[MOS Button] The `outlined` variant is deprecated and should no longer be used, it will be removed in a future version. Use either `contained` or `text`",t.variant==="outlined");const p=(l=(i=t.intent)!==null&&i!==void 0?i:zo[t.color])!==null&&l!==void 0?l:"secondary",f={$variant:t.variant,$intent:p,$bluntLeft:t.bluntLeft,$bluntRight:t.bluntRight,disabled:t.invisible||h,size:o,$size:o,onClick:t.onClick,onBlur:t.onBlur,href:t.href,name:t.name,id:t.id,type:t.type||"button",as:t.as,ref:n,disableRipple:!0,"aria-label":typeof t.label=="string"?t.label:typeof t.tooltip=="string"?t.tooltip:void 0,...t.muiAttrs},g=["button",t.className,t.variant==="icon"?"iconButton":"normalButton",t.fullWidth&&"fullWidth",t.invisible&&"invisible",`size_${o}`,`variant_${t.variant}`].filter(Boolean).join(" ");return w.createElement(Oe,{...t.attrs,$fullWidth:t.fullWidth,className:g,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave},w.createElement(Ae,{...f,$fullWidth:t.fullWidth,$isIconButton:d},w.createElement(He,null),w.createElement(Ge,{$size:o},u==="left"&&b,t.label&&w.createElement(Ue,null,t.label),u==="right"&&b)))});function Lo(e){const{anchorProps:o,tooltipProps:t}=Po(),[n,i]=c.useState(null);function l(f){i(f.currentTarget)}function s(){i(null)}const d=f=>{l(f),e.onClick&&e.onClick(f)},u=e.popoverEvent==="onHover",b=f=>{e.onMouseEnter&&e.onMouseEnter(f),e.popover&&u&&l(f),o.onMouseEnter()},h=f=>{e.onMouseLeave&&e.onMouseLeave(f),e.popover&&u&&s(),o.onMouseLeave()},p=ee(e.menuItems||[],"show",!0);return e.menuItems&&!p.length?null:w.createElement(w.Fragment,null,w.createElement(ve,{...e,onClick:d,onMouseEnter:b,onMouseLeave:h,ref:o.ref}),e.tooltip&&w.createElement(ko,{...t},e.tooltip),e.popover?w.createElement(pe,{open:!!n,anchorEl:n,onClose:s,disableRestoreFocus:!0,style:u?{pointerEvents:"none"}:null,...Ro},w.createElement(Bo.Provider,{value:{onClose:s}},e.popover)):e.menuItems?w.createElement(wo,{items:p,onChange:e.menuOnChange,value:e.menuValue,anchorEl:n,open:!!n,onClose:s}):null)}function To(e){return ee(e,"show")?e.menuItems||e.popover||e.tooltip?w.createElement(Lo,{...e}):w.createElement(ve,{...e}):null}const qo=c.memo(To);export{qo as B,wo as M,ko as T,Mo as a,po as b,Ne as c,bo as d,Bo as e,Po as u};
