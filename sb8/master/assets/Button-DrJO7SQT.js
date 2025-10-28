import{r as c,R as I}from"./index-ePW8zFKp.js";import{s as R}from"./styled-components.browser.esm-CUKKF2J4.js";import{t as a}from"./sizes-1ZdlMWGC.js";import{j as Ce,_ as W,a as $,b as P,h as T}from"./identifier-vWKndVvV.js";import{a as O,g as U,u as K,s as F,c as _,b as q,r as Z}from"./generateUtilityClasses-CUUJXLh7.js";import{j as B}from"./jsx-runtime-EKYJJIwR.js";import{B as de,a as ue,u as pe}from"./ButtonBase-YTDCQqeW.js";import{u as Ie}from"./index-Ca1iOyRL.js";import{f as we,h as fe,b as Ee,d as te,P as ke}from"./Popper-DP0cm8Rf.js";import{o as re}from"./ownerWindow-DvT1GKkC.js";function Se(e){return U("MuiButton",e)}const G=O("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Pe=c.createContext({}),Re=c.createContext(void 0),ze=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Be=e=>{const{color:o,disableElevation:r,fullWidth:t,size:i,variant:l,classes:s}=e,d={root:["root",l,`${l}${P(o)}`,`size${P(i)}`,`${l}Size${P(i)}`,`color${P(o)}`,r&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${P(i)}`],endIcon:["icon","endIcon",`iconSize${P(i)}`]},u=q(d,Se,s);return $({},s,u)},be=e=>$({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Le=F(de,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],o[`${r.variant}${P(r.color)}`],o[`size${P(r.size)}`],o[`${r.variant}Size${P(r.size)}`],r.color==="inherit"&&o.colorInherit,r.disableElevation&&o.disableElevation,r.fullWidth&&o.fullWidth]}})(({theme:e,ownerState:o})=>{var r,t;const i=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],l=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return $({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":$({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:T.alpha(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:T.alpha(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[o.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:T.alpha(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}),"&:active":$({},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${G.focusVisible}`]:$({},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${G.disabled}`]:$({color:(e.vars||e).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${T.alpha(e.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(r=(t=e.palette).getContrastText)==null?void 0:r.call(t,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${G.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${G.disabled}`]:{boxShadow:"none"}}),Te=F("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.startIcon,o[`iconSize${P(r.size)}`]]}})(({ownerState:e})=>$({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},be(e))),Fe=F("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.endIcon,o[`iconSize${P(r.size)}`]]}})(({ownerState:e})=>$({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},be(e))),Ne=c.forwardRef(function(o,r){const t=c.useContext(Pe),i=c.useContext(Re),l=Ce(t,o),s=K({props:l,name:"MuiButton"}),{children:d,color:u="primary",component:b="button",className:h,disabled:p=!1,disableElevation:f=!1,disableFocusRipple:g=!1,endIcon:E,focusVisibleClassName:C,fullWidth:n=!1,size:y="medium",startIcon:S,type:v,variant:M="text"}=s,k=W(s,ze),w=$({},s,{color:u,component:b,disabled:p,disableElevation:f,disableFocusRipple:g,fullWidth:n,size:y,type:v,variant:M}),x=Be(w),L=S&&B.jsx(Te,{className:x.startIcon,ownerState:w,children:S}),D=E&&B.jsx(Fe,{className:x.endIcon,ownerState:w,children:E}),N=i||"";return B.jsxs(Le,$({ownerState:w,className:_(t.className,x.root,h,N),component:b,disabled:p,focusRipple:!g,focusVisibleClassName:_(x.focusVisible,C),ref:r,type:v},k,{classes:x,children:[L,d,D]}))}),Oe=R("span")(({$fullWidth:e})=>`
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
		`}};function We({$size:e,$isIconButton:o}){return o?[0]:e==="inherit"?[0,"0.25em"]:e==="small"?[0,3]:e==="xsmall"?[0,2]:[0,4]}const _e={xsmall:"24px",small:"32px",medium:"36px",large:"40px",xlarge:"44px",inherit:"auto"};function Ae({$fullWidth:e,$isIconButton:o,$size:r}){const t=_e[r];return e?["100%",t]:o?r==="xsmall"?["24px",t]:r==="small"?["32px",t]:["36px",t]:[void 0,t]}const je=R(Ne)(({$intent:e,$variant:o,$fullWidth:r,$size:t,$isIconButton:i,$bluntLeft:l,$bluntRight:s})=>{const d=We({$size:t,$isIconButton:i}),[u,b]=Ae({$fullWidth:r,$isIconButton:i,$size:t});return`
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
			font-size: ${t==="inherit"?"inherit":a.fontSize.text.md};
			font-weight: ${a.weight.medium};
			line-height: ${t==="inherit"?"inherit":a.line.normal};
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

			${t!=="inherit"?"":`
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
	`}),Ve=R.div`
	&& {
		margin: -2px;

		${({$inherit:e,$size:o="sm"})=>e?`
			font-size: 1em;
			line-height: inherit;
		`:`
			font-size: ${a.fontSize.icon[o]};
			line-height: ${a.fontSize.icon[o]};
		`}

		${({$isAdornment:e})=>e?`
			color: var(--icon-color);
		`:""}
	}
`,He=R.span.attrs({className:"Mos-ButtonGradient"})`
	position: absolute;
	inset: 0;
	border-radius: ${a.rounded.md};
	opacity: 0;
	transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`,Ge=R.div.attrs({className:"Mos-ButtonContent"})`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({$size:e})=>`
		gap: ${a.spacing(e==="inherit"?"0.25em":e==="xsmall"?1:2)};
	`}
`,Ue=R.div.attrs({className:"Mos-ButtonLabel"})`
	align-self: baseline;
	margin-bottom: -1px;
`;var X={exports:{}},m={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Ke(){if(ne)return m;ne=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),t=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen"),E;E=Symbol.for("react.module.reference");function C(n){if(typeof n=="object"&&n!==null){var y=n.$$typeof;switch(y){case e:switch(n=n.type,n){case r:case i:case t:case b:case h:return n;default:switch(n=n&&n.$$typeof,n){case d:case s:case u:case f:case p:case l:return n;default:return y}}case o:return y}}}return m.ContextConsumer=s,m.ContextProvider=l,m.Element=e,m.ForwardRef=u,m.Fragment=r,m.Lazy=f,m.Memo=p,m.Portal=o,m.Profiler=i,m.StrictMode=t,m.Suspense=b,m.SuspenseList=h,m.isAsyncMode=function(){return!1},m.isConcurrentMode=function(){return!1},m.isContextConsumer=function(n){return C(n)===s},m.isContextProvider=function(n){return C(n)===l},m.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===e},m.isForwardRef=function(n){return C(n)===u},m.isFragment=function(n){return C(n)===r},m.isLazy=function(n){return C(n)===f},m.isMemo=function(n){return C(n)===p},m.isPortal=function(n){return C(n)===o},m.isProfiler=function(n){return C(n)===i},m.isStrictMode=function(n){return C(n)===t},m.isSuspense=function(n){return C(n)===b},m.isSuspenseList=function(n){return C(n)===h},m.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===r||n===i||n===t||n===b||n===h||n===g||typeof n=="object"&&n!==null&&(n.$$typeof===f||n.$$typeof===p||n.$$typeof===l||n.$$typeof===s||n.$$typeof===u||n.$$typeof===E||n.getModuleId!==void 0)},m.typeOf=C,m}var ae;function qe(){return ae||(ae=1,X.exports=Ke()),X.exports}qe();const Q=c.createContext({});function Xe(e){return U("MuiList",e)}O("MuiList",["root","padding","dense","subheader"]);const Ye=["children","className","component","dense","disablePadding","subheader"],Je=e=>{const{classes:o,disablePadding:r,dense:t,subheader:i}=e;return q({root:["root",!r&&"padding",t&&"dense",i&&"subheader"]},Xe,o)},Qe=F("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,!r.disablePadding&&o.padding,r.dense&&o.dense,r.subheader&&o.subheader]}})(({ownerState:e})=>$({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Ze=c.forwardRef(function(o,r){const t=K({props:o,name:"MuiList"}),{children:i,className:l,component:s="ul",dense:d=!1,disablePadding:u=!1,subheader:b}=t,h=W(t,Ye),p=c.useMemo(()=>({dense:d}),[d]),f=$({},t,{component:s,dense:d,disablePadding:u}),g=Je(f);return B.jsx(Q.Provider,{value:p,children:B.jsxs(Qe,$({as:s,className:_(g.root,l),ref:r,ownerState:f},h,{children:[b,i]}))})}),eo=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Y(e,o,r){return e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:r?null:e.firstChild}function ie(e,o,r){return e===o?r?e.firstChild:e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:r?null:e.lastChild}function me(e,o){if(o===void 0)return!0;let r=e.innerText;return r===void 0&&(r=e.textContent),r=r.trim().toLowerCase(),r.length===0?!1:o.repeating?r[0]===o.keys[0]:r.indexOf(o.keys.join(""))===0}function A(e,o,r,t,i,l){let s=!1,d=i(e,o,o?r:!1);for(;d;){if(d===e.firstChild){if(s)return!1;s=!0}const u=t?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!me(d,l)||u)d=i(e,d,r);else return d.focus(),!0}return!1}const oo=c.forwardRef(function(o,r){const{actions:t,autoFocus:i=!1,autoFocusItem:l=!1,children:s,className:d,disabledItemsFocusable:u=!1,disableListWrap:b=!1,onKeyDown:h,variant:p="selectedMenu"}=o,f=W(o,eo),g=c.useRef(null),E=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ue(()=>{i&&g.current.focus()},[i]),c.useImperativeHandle(t,()=>({adjustStyleForScrollbar:(v,{direction:M})=>{const k=!g.current.style.width;if(v.clientHeight<g.current.clientHeight&&k){const w=`${we(re(v))}px`;g.current.style[M==="rtl"?"paddingLeft":"paddingRight"]=w,g.current.style.width=`calc(100% + ${w})`}return g.current}}),[]);const C=v=>{const M=g.current,k=v.key,w=re(M).activeElement;if(k==="ArrowDown")v.preventDefault(),A(M,w,b,u,Y);else if(k==="ArrowUp")v.preventDefault(),A(M,w,b,u,ie);else if(k==="Home")v.preventDefault(),A(M,null,b,u,Y);else if(k==="End")v.preventDefault(),A(M,null,b,u,ie);else if(k.length===1){const x=E.current,L=k.toLowerCase(),D=performance.now();x.keys.length>0&&(D-x.lastTime>500?(x.keys=[],x.repeating=!0,x.previousKeyMatched=!0):x.repeating&&L!==x.keys[0]&&(x.repeating=!1)),x.lastTime=D,x.keys.push(L);const N=w&&!x.repeating&&me(w,x);x.previousKeyMatched&&(N||A(M,w,!1,u,Y,x))?v.preventDefault():x.previousKeyMatched=!1}h&&h(v)},n=pe(g,r);let y=-1;c.Children.forEach(s,(v,M)=>{if(!c.isValidElement(v)){y===M&&(y+=1,y>=s.length&&(y=-1));return}v.props.disabled||(p==="selectedMenu"&&v.props.selected||y===-1)&&(y=M),y===M&&(v.props.disabled||v.props.muiSkipListHighlight||v.type.muiSkipListHighlight)&&(y+=1,y>=s.length&&(y=-1))});const S=c.Children.map(s,(v,M)=>{if(M===y){const k={};return l&&(k.autoFocus=!0),v.props.tabIndex===void 0&&p==="selectedMenu"&&(k.tabIndex=0),c.cloneElement(v,k)}return v});return B.jsx(Ze,$({role:"menu",ref:n,className:d,onKeyDown:C,tabIndex:i?0:-1},f,{children:S}))});function to(e){return U("MuiMenu",e)}O("MuiMenu",["root","paper","list"]);const ro=["onEntering"],no=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],ao={vertical:"top",horizontal:"right"},io={vertical:"top",horizontal:"left"},so=e=>{const{classes:o}=e;return q({root:["root"],paper:["paper"],list:["list"]},to,o)},lo=F(fe,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,o)=>o.root})({}),co=F(Ee,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),uo=F(oo,{name:"MuiMenu",slot:"List",overridesResolver:(e,o)=>o.list})({outline:0}),po=c.forwardRef(function(o,r){var t,i;const l=K({props:o,name:"MuiMenu"}),{autoFocus:s=!0,children:d,className:u,disableAutoFocusItem:b=!1,MenuListProps:h={},onClose:p,open:f,PaperProps:g={},PopoverClasses:E,transitionDuration:C="auto",TransitionProps:{onEntering:n}={},variant:y="selectedMenu",slots:S={},slotProps:v={}}=l,M=W(l.TransitionProps,ro),k=W(l,no),w=Ie(),x=$({},l,{autoFocus:s,disableAutoFocusItem:b,MenuListProps:h,onEntering:n,PaperProps:g,transitionDuration:C,TransitionProps:M,variant:y}),L=so(x),D=s&&!b&&f,N=c.useRef(null),he=(z,H)=>{N.current&&N.current.adjustStyleForScrollbar(z,{direction:w?"rtl":"ltr"}),n&&n(z,H)},xe=z=>{z.key==="Tab"&&(z.preventDefault(),p&&p(z,"tabKeyDown"))};let V=-1;c.Children.map(d,(z,H)=>{c.isValidElement(z)&&(z.props.disabled||(y==="selectedMenu"&&z.props.selected||V===-1)&&(V=H))});const oe=(t=S.paper)!=null?t:co,ye=(i=v.paper)!=null?i:g,$e=te({elementType:S.root,externalSlotProps:v.root,ownerState:x,className:[L.root,u]}),Me=te({elementType:oe,externalSlotProps:ye,ownerState:x,className:L.paper});return B.jsx(lo,$({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:w?"right":"left"},transformOrigin:w?ao:io,slots:{paper:oe,root:S.root},slotProps:{root:$e,paper:Me},open:f,ref:r,transitionDuration:C,TransitionProps:$({onEntering:he},M),ownerState:x},k,{classes:E,children:B.jsx(uo,$({onKeyDown:xe,actions:N,autoFocus:s&&(V===-1||b),autoFocusItem:D,variant:y},h,{className:_(L.list,h.className),children:d}))}))}),fo=R(po)`
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
`;function bo(e){return I.createElement(fo,{anchorEl:e.anchorEl,open:e.open,onClose:e.onClose},e.children)}const se=O("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),le=O("MuiListItemIcon",["root","alignItemsFlexStart"]),ce=O("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function mo(e){return U("MuiMenuItem",e)}const j=O("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),go=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],vo=(e,o)=>{const{ownerState:r}=e;return[o.root,r.dense&&o.dense,r.divider&&o.divider,!r.disableGutters&&o.gutters]},ho=e=>{const{disabled:o,dense:r,divider:t,disableGutters:i,selected:l,classes:s}=e,u=q({root:["root",r&&"dense",o&&"disabled",!i&&"gutters",t&&"divider",l&&"selected"]},mo,s);return $({},s,u)},xo=F(de,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:vo})(({theme:e,ownerState:o})=>$({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${j.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${j.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${j.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:T.alpha(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${j.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${j.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${se.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${se.inset}`]:{marginLeft:52},[`& .${ce.root}`]:{marginTop:0,marginBottom:0},[`& .${ce.inset}`]:{paddingLeft:36},[`& .${le.root}`]:{minWidth:36}},!o.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&$({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${le.root} svg`]:{fontSize:"1.25rem"}}))),yo=c.forwardRef(function(o,r){const t=K({props:o,name:"MuiMenuItem"}),{autoFocus:i=!1,component:l="li",dense:s=!1,divider:d=!1,disableGutters:u=!1,focusVisibleClassName:b,role:h="menuitem",tabIndex:p,className:f}=t,g=W(t,go),E=c.useContext(Q),C=c.useMemo(()=>({dense:s||E.dense||!1,disableGutters:u}),[E.dense,s,u]),n=c.useRef(null);ue(()=>{i&&n.current&&n.current.focus()},[i]);const y=$({},t,{dense:C.dense,divider:d,disableGutters:u}),S=ho(t),v=pe(n,r);let M;return t.disabled||(M=p!==void 0?p:-1),B.jsx(Q.Provider,{value:C,children:B.jsx(xo,$({ref:v,role:h,tabIndex:M,component:l,focusVisibleClassName:_(S.focusVisible,b),className:_(S.root,f)},g,{ownerState:y,classes:S}))})}),ge={black:a.color.black,gold:a.color.gold[400],gray:a.color.gray[600],red:a.color.red[500],teal:a.color.teal[700]},$o=["black","gold","gray","red","teal"],Mo=R(yo)`
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
`,Co=R.div`
	display: inline-flex;

    ${({$color:e})=>`
        & svg {
            color: ${ge[e]}
        }
    `}
`;function Io({mIcon:e,color:o="black",attrs:r,title:t,onClick:i,disabled:l,selected:s=!1,truncateText:d,autoFocus:u,tabIndex:b,className:h,...p}){const f="children"in p?p.children:null,g="label"in p?p.label:"";if(!Object.keys(ge).includes(o))throw new Error("The menu item component only accepts the following colors: "+$o.join(", ")+`. The color provided was "${o}"`);const E=c.useMemo(()=>({title:t===!0&&typeof g=="string"?g:typeof t=="string"?t:void 0,...r}),[r,t,g]);return c.createElement(Mo,{...E,onClick:i,disabled:l,selected:s,className:["menu-item",h].filter(Boolean).join(" "),disableRipple:!0,$truncateText:d,autoFocus:u,tabIndex:b,"aria-selected":s,...p},f??c.createElement(c.Fragment,null,e&&c.createElement(Co,{className:"icon",$color:o},c.createElement(e,null)),c.createElement("div",{className:"menuLabel"},c.createElement("span",null,g))))}function wo({onClose:e,open:o,anchorEl:r,items:t,onChange:i,placeholder:l,value:s}){const d=c.useMemo(()=>[...l?[{label:l,value:void 0}]:[],...t].map(({onClick:h,...p},f)=>{const g=function(){h&&h(),i&&i(p.value),e()};return I.createElement(Io,{key:f,...p,selected:i&&s===p.value,onClick:g})}),[t,i,e,l,s]);return I.createElement(bo,{anchorEl:r,open:o,onClose:e},d)}function Eo(e,o=!0){const r=e!==void 0?e:o,t=Array.isArray(r)?r:[r],i=l=>typeof l=="function"?l():l;return o?t.every(i):t.some(i)}function ee(e,o,r=!0){const t=Array.isArray(e),i=c.useMemo(()=>t?e:[e],[t,e]),l=c.useMemo(()=>i.filter(s=>Eo(s[o],r)),[r,i,o]);return t?l:l.length>0}const ko=R(ke)`
	z-index: 1500;
	background: ${a.color.black};
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
		border-bottom-color: ${a.color.black};
		border-top: 0;
		top: -5px;
	}

	&[data-popper-placement="top-start"] .arrow,
	&[data-popper-placement="top"] .arrow,
	&[data-popper-placement="top-end"] .arrow {
		border-top-color: ${a.color.black};
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
		border-left-color: ${a.color.black};
		border-right: 0;
		right: -5px;
	}

	&[data-popper-placement="right-start"] .arrow,
	&[data-popper-placement="right"] .arrow,
	&[data-popper-placement="right-end"] .arrow {
		border-right-color: ${a.color.black};
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
`,So=R.div`
	border: 5px solid transparent;
	position: absolute;
`,Po=[{name:"offset",options:{offset:[0,10]}}],Ro=e=>{const{children:o,open:r,placement:t="bottom-start",anchorEl:i,id:l,maxWidth:s}=e,d=c.useMemo(()=>({maxWidth:s}),[s]);return c.createElement(ko,{open:r,anchorEl:i,placement:t,modifiers:Po,role:"tooltip",id:l,"data-testid":"tooltip-test-id",style:d},c.createElement(So,{className:"arrow"}),o)};function zo(){const[e,o]=c.useState(null),[r,t]=c.useState(!1),i=c.useId(),l=c.useMemo(()=>({open:r,anchorEl:e,id:`tooltip-${i}`}),[r,e,i]),s=c.useMemo(()=>({ref:o,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),"aria-describedby":`tooltip-${i}`}),[i]);return{tooltipProps:l,anchorProps:s}}function J(e,o=!0){const r=c.useRef(!1);c.useEffect(()=>{r.current||!o||(console.warn(e),r.current=!0)})}const Bo=c.createContext(null),Lo={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},To={black:"specialized",blue:"info",gray:"secondary",lightBlue:"secondary",red:"danger",teal:"info",white:"secondary",yellow:"primary"},ve=c.forwardRef(function({size:o="medium",alignItems:r="center",...t},i){var l,s;const d=t.mIcon,u=!t.label&&d,b=t.iconPosition||"left",h=d&&I.createElement(Ve,{as:d,style:{color:t.mIconColor},$isAdornment:!u,$inherit:o==="inherit",$size:u?"md":"sm"}),p=ee(t,"disabled",!1);J("[MOS Button] The `color` prop is deprecated and should no longer be used, it will be removed in a future version. Use the `intent` prop instead.",t.color!==void 0),J("[MOS Button] The `icon` variant is deprecated. Mosaic now infers an icon variant from the use of the `mIcon` prop and the lack of a `label` prop.",t.variant==="icon"),J("[MOS Button] The `outlined` variant is deprecated and should no longer be used, it will be removed in a future version. Use either `contained` or `text`",t.variant==="outlined");const f=(s=(l=t.intent)!==null&&l!==void 0?l:To[t.color])!==null&&s!==void 0?s:"secondary",g={$variant:t.variant,$intent:f,$bluntLeft:t.bluntLeft,$bluntRight:t.bluntRight,disabled:t.invisible||p,size:o,$size:o,onClick:t.onClick,onBlur:t.onBlur,href:t.href,name:t.name,id:t.id,type:t.type||"button",as:t.as,ref:i,disableRipple:!0,"aria-label":typeof t.label=="string"?t.label:typeof t.tooltip=="string"?t.tooltip:void 0,...t.muiAttrs},E=["button",t.className,t.variant==="icon"?"iconButton":"normalButton",t.fullWidth&&"fullWidth",t.invisible&&"invisible",`size_${o}`,`variant_${t.variant}`].filter(Boolean).join(" ");return I.createElement(Oe,{...t.attrs,$fullWidth:t.fullWidth,className:E,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave},I.createElement(je,{...g,$fullWidth:t.fullWidth,$isIconButton:u,$alignItems:r},I.createElement(He,null),I.createElement(Ge,{$size:o},b==="left"&&h,t.label&&(typeof t.label=="string"?I.createElement(Ue,null,t.label):t.label),b==="right"&&h)))});function Fo(e){const{anchorProps:o,tooltipProps:r}=zo(),[t,i]=c.useState(null);function l(f){i(f.currentTarget)}function s(){i(null)}const d=f=>{l(f),e.onClick&&e.onClick(f)},u=e.popoverEvent==="onHover",b=f=>{e.onMouseEnter&&e.onMouseEnter(f),e.popover&&u&&l(f),o.onMouseEnter()},h=f=>{e.onMouseLeave&&e.onMouseLeave(f),e.popover&&u&&s(),o.onMouseLeave()},p=ee(e.menuItems||[],"show",!0);return e.menuItems&&!p.length?null:I.createElement(I.Fragment,null,I.createElement(ve,{...e,onClick:d,onMouseEnter:b,onMouseLeave:h,ref:o.ref}),e.tooltip&&I.createElement(Ro,{...r},e.tooltip),e.popover?I.createElement(fe,{open:!!t,anchorEl:t,onClose:s,disableRestoreFocus:!0,style:u?{pointerEvents:"none"}:null,...Lo},I.createElement(Bo.Provider,{value:{onClose:s}},e.popover)):e.menuItems?I.createElement(wo,{items:p,onChange:e.menuOnChange,value:e.menuValue,anchorEl:t,open:!!t,onClose:s}):null)}function No(e){return ee(e,"show")?e.menuItems||e.popover||e.tooltip?I.createElement(Fo,{...e}):I.createElement(ve,{...e}):null}const Ko=c.memo(No);export{Ko as B,wo as M,Ro as T,ee as a,Io as b,po as c,Ne as d,bo as e,Bo as f,Eo as g,zo as u};
