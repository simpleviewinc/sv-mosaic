import{r as c,R as I}from"./index-BcWw8SPZ.js";import{s as z}from"./styled-components.browser.esm-iTa7G-AD.js";import{t as a}from"./sizes-1ZdlMWGC.js";import{j as Me,_ as W,a as $,c as w,g as F}from"./identifier-vCS-QwDM.js";import{a as O,g as U,u as K,s as T,c as _,b as q,r as Z}from"./generateUtilityClasses-DxEc1O3f.js";import{j as B}from"./jsx-runtime-EKYJJIwR.js";import{B as de}from"./ButtonBase-C5IHe1v7.js";import{u as Ie}from"./index-BFOXBPPy.js";import{c as Ee,d as ue,a as Se}from"./Popover-BsgnjFRv.js";import{g as pe,o as te,a as fe}from"./useIsFocusVisible-BiDRLN3G.js";import{a as ne,u as ke,T as Re}from"./useTooltip-Ca_MnstU.js";function we(e){return U("MuiButton",e)}const G=O("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Pe=c.createContext({}),Be=c.createContext(void 0),ze=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Le=e=>{const{color:o,disableElevation:n,fullWidth:t,size:i,variant:l,classes:s}=e,u={root:["root",l,`${l}${w(o)}`,`size${w(i)}`,`${l}Size${w(i)}`,`color${w(o)}`,n&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${w(i)}`],endIcon:["icon","endIcon",`iconSize${w(i)}`]},d=q(u,we,s);return $({},s,d)},be=e=>$({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Fe=T(de,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`${n.variant}${w(n.color)}`],o[`size${w(n.size)}`],o[`${n.variant}Size${w(n.size)}`],n.color==="inherit"&&o.colorInherit,n.disableElevation&&o.disableElevation,n.fullWidth&&o.fullWidth]}})(({theme:e,ownerState:o})=>{var n,t;const i=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],l=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return $({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":$({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:F.alpha(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:F.alpha(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[o.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:F.alpha(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}),"&:active":$({},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${G.focusVisible}`]:$({},o.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${G.disabled}`]:$({color:(e.vars||e).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${F.alpha(e.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(t=e.palette).getContrastText)==null?void 0:n.call(t,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${G.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${G.disabled}`]:{boxShadow:"none"}}),Te=T("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.startIcon,o[`iconSize${w(n.size)}`]]}})(({ownerState:e})=>$({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},be(e))),Ne=T("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.endIcon,o[`iconSize${w(n.size)}`]]}})(({ownerState:e})=>$({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},be(e))),Oe=c.forwardRef(function(o,n){const t=c.useContext(Pe),i=c.useContext(Be),l=Me(t,o),s=K({props:l,name:"MuiButton"}),{children:u,color:d="primary",component:b="button",className:h,disabled:p=!1,disableElevation:f=!1,disableFocusRipple:v=!1,endIcon:S,focusVisibleClassName:M,fullWidth:r=!1,size:x="medium",startIcon:R,type:m,variant:C="text"}=s,k=W(s,ze),E=$({},s,{color:d,component:b,disabled:p,disableElevation:f,disableFocusRipple:v,fullWidth:r,size:x,type:m,variant:C}),y=Le(E),L=R&&B.jsx(Te,{className:y.startIcon,ownerState:E,children:R}),D=S&&B.jsx(Ne,{className:y.endIcon,ownerState:E,children:S}),N=i||"";return B.jsxs(Fe,$({ownerState:E,className:_(t.className,y.root,h,N),component:b,disabled:p,focusRipple:!v,focusVisibleClassName:_(y.focusVisible,M),ref:n,type:m},k,{classes:y,children:[L,u,D]}))}),De=z("span")(({$fullWidth:e})=>`
	display: inline-block;

	&.invisible {
		visbility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	${e&&`
		width: 100%;
	`}
`),We={danger:{contained:`
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
		`}};function _e({$size:e,$isIconButton:o}){return o?[0]:e==="inherit"?[0,"0.25em"]:e==="small"?[0,3]:e==="xsmall"?[0,2]:[0,4]}const Ae={xsmall:"24px",small:"32px",medium:"36px",large:"40px",xlarge:"44px",inherit:"auto"};function je({$fullWidth:e,$isIconButton:o,$size:n}){const t=Ae[n];return e?["100%",t]:o?n==="xsmall"?["24px",t]:n==="small"?["32px",t]:["36px",t]:[void 0,t]}const Ve=z(Oe)(({$intent:e,$variant:o,$fullWidth:n,$size:t,$isIconButton:i,$bluntLeft:l,$bluntRight:s})=>{const u=_e({$size:t,$isIconButton:i}),[d,b]=je({$fullWidth:n,$isIconButton:i,$size:t});return`
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

			${We[e][o]}

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
			padding: ${a.spacing(...u)};
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

			${d?`
				width: ${d};
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
	`}),He=z.div`
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
`,Ge=z.span.attrs({className:"Mos-ButtonGradient"})`
	position: absolute;
	inset: 0;
	border-radius: ${a.rounded.md};
	opacity: 0;
	transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`,Ue=z.div.attrs({className:"Mos-ButtonContent"})`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({$size:e})=>`
		gap: ${a.spacing(e==="inherit"?"0.25em":e==="xsmall"?1:2)};
	`}
`,Ke=z.div.attrs({className:"Mos-ButtonLabel"})`
	align-self: baseline;
	margin-bottom: -1px;
`;var J={exports:{}},g={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function qe(){if(re)return g;re=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),t=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen"),S;S=Symbol.for("react.module.reference");function M(r){if(typeof r=="object"&&r!==null){var x=r.$$typeof;switch(x){case e:switch(r=r.type,r){case n:case i:case t:case b:case h:return r;default:switch(r=r&&r.$$typeof,r){case u:case s:case d:case f:case p:case l:return r;default:return x}}case o:return x}}}return g.ContextConsumer=s,g.ContextProvider=l,g.Element=e,g.ForwardRef=d,g.Fragment=n,g.Lazy=f,g.Memo=p,g.Portal=o,g.Profiler=i,g.StrictMode=t,g.Suspense=b,g.SuspenseList=h,g.isAsyncMode=function(){return!1},g.isConcurrentMode=function(){return!1},g.isContextConsumer=function(r){return M(r)===s},g.isContextProvider=function(r){return M(r)===l},g.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===e},g.isForwardRef=function(r){return M(r)===d},g.isFragment=function(r){return M(r)===n},g.isLazy=function(r){return M(r)===f},g.isMemo=function(r){return M(r)===p},g.isPortal=function(r){return M(r)===o},g.isProfiler=function(r){return M(r)===i},g.isStrictMode=function(r){return M(r)===t},g.isSuspense=function(r){return M(r)===b},g.isSuspenseList=function(r){return M(r)===h},g.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===n||r===i||r===t||r===b||r===h||r===v||typeof r=="object"&&r!==null&&(r.$$typeof===f||r.$$typeof===p||r.$$typeof===l||r.$$typeof===s||r.$$typeof===d||r.$$typeof===S||r.getModuleId!==void 0)},g.typeOf=M,g}var ae;function Je(){return ae||(ae=1,J.exports=qe()),J.exports}Je();const Y=c.createContext({});function Qe(e){return U("MuiList",e)}O("MuiList",["root","padding","dense","subheader"]);const Xe=["children","className","component","dense","disablePadding","subheader"],Ye=e=>{const{classes:o,disablePadding:n,dense:t,subheader:i}=e;return q({root:["root",!n&&"padding",t&&"dense",i&&"subheader"]},Qe,o)},Ze=T("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,!n.disablePadding&&o.padding,n.dense&&o.dense,n.subheader&&o.subheader]}})(({ownerState:e})=>$({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),eo=c.forwardRef(function(o,n){const t=K({props:o,name:"MuiList"}),{children:i,className:l,component:s="ul",dense:u=!1,disablePadding:d=!1,subheader:b}=t,h=W(t,Xe),p=c.useMemo(()=>({dense:u}),[u]),f=$({},t,{component:s,dense:u,disablePadding:d}),v=Ye(f);return B.jsx(Y.Provider,{value:p,children:B.jsxs(Ze,$({as:s,className:_(v.root,l),ref:n,ownerState:f},h,{children:[b,i]}))})}),oo=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Q(e,o,n){return e===o?e.firstChild:o&&o.nextElementSibling?o.nextElementSibling:n?null:e.firstChild}function ie(e,o,n){return e===o?n?e.firstChild:e.lastChild:o&&o.previousElementSibling?o.previousElementSibling:n?null:e.lastChild}function ge(e,o){if(o===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:o.repeating?n[0]===o.keys[0]:n.indexOf(o.keys.join(""))===0}function A(e,o,n,t,i,l){let s=!1,u=i(e,o,o?n:!1);for(;u;){if(u===e.firstChild){if(s)return!1;s=!0}const d=t?!1:u.disabled||u.getAttribute("aria-disabled")==="true";if(!u.hasAttribute("tabindex")||!ge(u,l)||d)u=i(e,u,n);else return u.focus(),!0}return!1}const to=c.forwardRef(function(o,n){const{actions:t,autoFocus:i=!1,autoFocusItem:l=!1,children:s,className:u,disabledItemsFocusable:d=!1,disableListWrap:b=!1,onKeyDown:h,variant:p="selectedMenu"}=o,f=W(o,oo),v=c.useRef(null),S=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});pe(()=>{i&&v.current.focus()},[i]),c.useImperativeHandle(t,()=>({adjustStyleForScrollbar:(m,{direction:C})=>{const k=!v.current.style.width;if(m.clientHeight<v.current.clientHeight&&k){const E=`${Ee(te(m))}px`;v.current.style[C==="rtl"?"paddingLeft":"paddingRight"]=E,v.current.style.width=`calc(100% + ${E})`}return v.current}}),[]);const M=m=>{const C=v.current,k=m.key,E=te(C).activeElement;if(k==="ArrowDown")m.preventDefault(),A(C,E,b,d,Q);else if(k==="ArrowUp")m.preventDefault(),A(C,E,b,d,ie);else if(k==="Home")m.preventDefault(),A(C,null,b,d,Q);else if(k==="End")m.preventDefault(),A(C,null,b,d,ie);else if(k.length===1){const y=S.current,L=k.toLowerCase(),D=performance.now();y.keys.length>0&&(D-y.lastTime>500?(y.keys=[],y.repeating=!0,y.previousKeyMatched=!0):y.repeating&&L!==y.keys[0]&&(y.repeating=!1)),y.lastTime=D,y.keys.push(L);const N=E&&!y.repeating&&ge(E,y);y.previousKeyMatched&&(N||A(C,E,!1,d,Q,y))?m.preventDefault():y.previousKeyMatched=!1}h&&h(m)},r=fe(v,n);let x=-1;c.Children.forEach(s,(m,C)=>{if(!c.isValidElement(m)){x===C&&(x+=1,x>=s.length&&(x=-1));return}m.props.disabled||(p==="selectedMenu"&&m.props.selected||x===-1)&&(x=C),x===C&&(m.props.disabled||m.props.muiSkipListHighlight||m.type.muiSkipListHighlight)&&(x+=1,x>=s.length&&(x=-1))});const R=c.Children.map(s,(m,C)=>{if(C===x){const k={};return l&&(k.autoFocus=!0),m.props.tabIndex===void 0&&p==="selectedMenu"&&(k.tabIndex=0),c.cloneElement(m,k)}return m});return B.jsx(eo,$({role:"menu",ref:r,className:u,onKeyDown:M,tabIndex:i?0:-1},f,{children:R}))});function no(e){return U("MuiMenu",e)}O("MuiMenu",["root","paper","list"]);const ro=["onEntering"],ao=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],io={vertical:"top",horizontal:"right"},so={vertical:"top",horizontal:"left"},lo=e=>{const{classes:o}=e;return q({root:["root"],paper:["paper"],list:["list"]},no,o)},co=T(ue,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,o)=>o.root})({}),uo=T(Se,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),po=T(to,{name:"MuiMenu",slot:"List",overridesResolver:(e,o)=>o.list})({outline:0}),fo=c.forwardRef(function(o,n){var t,i;const l=K({props:o,name:"MuiMenu"}),{autoFocus:s=!0,children:u,className:d,disableAutoFocusItem:b=!1,MenuListProps:h={},onClose:p,open:f,PaperProps:v={},PopoverClasses:S,transitionDuration:M="auto",TransitionProps:{onEntering:r}={},variant:x="selectedMenu",slots:R={},slotProps:m={}}=l,C=W(l.TransitionProps,ro),k=W(l,ao),E=Ie(),y=$({},l,{autoFocus:s,disableAutoFocusItem:b,MenuListProps:h,onEntering:r,PaperProps:v,transitionDuration:M,TransitionProps:C,variant:x}),L=lo(y),D=s&&!b&&f,N=c.useRef(null),he=(P,H)=>{N.current&&N.current.adjustStyleForScrollbar(P,{direction:E?"rtl":"ltr"}),r&&r(P,H)},ye=P=>{P.key==="Tab"&&(P.preventDefault(),p&&p(P,"tabKeyDown"))};let V=-1;c.Children.map(u,(P,H)=>{c.isValidElement(P)&&(P.props.disabled||(x==="selectedMenu"&&P.props.selected||V===-1)&&(V=H))});const oe=(t=R.paper)!=null?t:uo,xe=(i=m.paper)!=null?i:v,$e=ne({elementType:R.root,externalSlotProps:m.root,ownerState:y,className:[L.root,d]}),Ce=ne({elementType:oe,externalSlotProps:xe,ownerState:y,className:L.paper});return B.jsx(co,$({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?io:so,slots:{paper:oe,root:R.root},slotProps:{root:$e,paper:Ce},open:f,ref:n,transitionDuration:M,TransitionProps:$({onEntering:he},C),ownerState:y},k,{classes:S,children:B.jsx(po,$({onKeyDown:ye,actions:N,autoFocus:s&&(V===-1||b),autoFocusItem:D,variant:x},h,{className:_(L.list,h.className),children:u}))}))}),bo=z(fo)`
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
`;function go(e){return I.createElement(bo,{anchorEl:e.anchorEl,open:e.open,onClose:e.onClose},e.children)}const se=O("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),le=O("MuiListItemIcon",["root","alignItemsFlexStart"]),ce=O("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function vo(e){return U("MuiMenuItem",e)}const j=O("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),mo=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ho=(e,o)=>{const{ownerState:n}=e;return[o.root,n.dense&&o.dense,n.divider&&o.divider,!n.disableGutters&&o.gutters]},yo=e=>{const{disabled:o,dense:n,divider:t,disableGutters:i,selected:l,classes:s}=e,d=q({root:["root",n&&"dense",o&&"disabled",!i&&"gutters",t&&"divider",l&&"selected"]},vo,s);return $({},s,d)},xo=T(de,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ho})(({theme:e,ownerState:o})=>$({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${j.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:F.alpha(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${j.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:F.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${j.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:F.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:F.alpha(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${j.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${j.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${se.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${se.inset}`]:{marginLeft:52},[`& .${ce.root}`]:{marginTop:0,marginBottom:0},[`& .${ce.inset}`]:{paddingLeft:36},[`& .${le.root}`]:{minWidth:36}},!o.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&$({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${le.root} svg`]:{fontSize:"1.25rem"}}))),$o=c.forwardRef(function(o,n){const t=K({props:o,name:"MuiMenuItem"}),{autoFocus:i=!1,component:l="li",dense:s=!1,divider:u=!1,disableGutters:d=!1,focusVisibleClassName:b,role:h="menuitem",tabIndex:p,className:f}=t,v=W(t,mo),S=c.useContext(Y),M=c.useMemo(()=>({dense:s||S.dense||!1,disableGutters:d}),[S.dense,s,d]),r=c.useRef(null);pe(()=>{i&&r.current&&r.current.focus()},[i]);const x=$({},t,{dense:M.dense,divider:u,disableGutters:d}),R=yo(t),m=fe(r,n);let C;return t.disabled||(C=p!==void 0?p:-1),B.jsx(Y.Provider,{value:M,children:B.jsx(xo,$({ref:m,role:h,tabIndex:C,component:l,focusVisibleClassName:_(R.focusVisible,b),className:_(R.root,f)},v,{ownerState:x,classes:R}))})}),ve={black:a.color.black,gold:a.color.gold[400],gray:a.color.gray[600],red:a.color.red[500],teal:a.color.teal[700]},Co=["black","gold","gray","red","teal"],Mo=z($o)`
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
`,Io=z.div`
	display: inline-flex;

    ${({$color:e})=>`
        & svg {
            color: ${ve[e]}
        }
    `}
`;function Eo({mIcon:e,color:o="black",attrs:n,title:t,onClick:i,disabled:l,selected:s=!1,truncateText:u,autoFocus:d,tabIndex:b,className:h,...p}){const f="children"in p?p.children:null,v="label"in p?p.label:"";if(!Object.keys(ve).includes(o))throw new Error("The menu item component only accepts the following colors: "+Co.join(", ")+`. The color provided was "${o}"`);const S=c.useMemo(()=>({title:t===!0&&typeof v=="string"?v:typeof t=="string"?t:void 0,...n}),[n,t,v]);return c.createElement(Mo,{...S,onClick:i,disabled:l,selected:s,className:["menu-item",h].filter(Boolean).join(" "),disableRipple:!0,$truncateText:u,autoFocus:d,tabIndex:b,"aria-selected":s,...p},f??c.createElement(c.Fragment,null,e&&c.createElement(Io,{className:"icon",$color:o},c.createElement(e,null)),c.createElement("div",{className:"menuLabel"},c.createElement("span",null,v))))}function So({onClose:e,open:o,anchorEl:n,items:t,onChange:i,placeholder:l,value:s}){const u=c.useMemo(()=>[...l?[{label:l,value:void 0}]:[],...t].map(({onClick:h,...p},f)=>{const v=function(){h&&h(),i&&i(p.value),e()};return I.createElement(Eo,{key:f,...p,selected:i&&s===p.value,onClick:v})}),[t,i,e,l,s]);return I.createElement(go,{anchorEl:n,open:o,onClose:e},u)}function ko(e,o=!0){const n=e!==void 0?e:o,t=Array.isArray(n)?n:[n],i=l=>typeof l=="function"?l():l;return o?t.every(i):t.some(i)}function ee(e,o,n=!0){const t=Array.isArray(e),i=c.useMemo(()=>t?e:[e],[t,e]),l=c.useMemo(()=>i.filter(s=>ko(s[o],n)),[n,i,o]);return t?l:l.length>0}function X(e,o=!0){const n=c.useRef(!1);c.useEffect(()=>{n.current||!o||(console.warn(e),n.current=!0)})}const Ro=c.createContext(null),wo={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},Po={black:"specialized",blue:"info",gray:"secondary",lightBlue:"secondary",red:"danger",teal:"info",white:"secondary",yellow:"primary"},me=c.forwardRef(function({size:o="medium",alignItems:n="center",...t},i){var l,s;const u=t.mIcon,d=!t.label&&u,b=t.iconPosition||"left",h=u&&I.createElement(He,{as:u,style:{color:t.mIconColor},$isAdornment:!d,$inherit:o==="inherit",$size:d?"md":"sm"}),p=ee(t,"disabled",!1);X("[MOS Button] The `color` prop is deprecated and should no longer be used, it will be removed in a future version. Use the `intent` prop instead.",t.color!==void 0),X("[MOS Button] The `icon` variant is deprecated. Mosaic now infers an icon variant from the use of the `mIcon` prop and the lack of a `label` prop.",t.variant==="icon"),X("[MOS Button] The `outlined` variant is deprecated and should no longer be used, it will be removed in a future version. Use either `contained` or `text`",t.variant==="outlined");const f=(s=(l=t.intent)!==null&&l!==void 0?l:Po[t.color])!==null&&s!==void 0?s:"secondary",v={$variant:t.variant,$intent:f,$bluntLeft:t.bluntLeft,$bluntRight:t.bluntRight,disabled:t.invisible||p,size:o,$size:o,onClick:t.onClick,onBlur:t.onBlur,href:t.href,name:t.name,id:t.id,type:t.type||"button",as:t.as,ref:i,disableRipple:!0,"aria-label":typeof t.label=="string"?t.label:typeof t.tooltip=="string"?t.tooltip:void 0,...t.muiAttrs},S=["button",t.className,t.variant==="icon"?"iconButton":"normalButton",t.fullWidth&&"fullWidth",t.invisible&&"invisible",`size_${o}`,`variant_${t.variant}`].filter(Boolean).join(" ");return I.createElement(De,{...t.attrs,$fullWidth:t.fullWidth,className:S,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave},I.createElement(Ve,{...v,$fullWidth:t.fullWidth,$isIconButton:d,$alignItems:n},I.createElement(Ge,null),I.createElement(Ue,{$size:o},b==="left"&&h,t.label&&(typeof t.label=="string"?I.createElement(Ke,null,t.label):t.label),b==="right"&&h)))});function Bo(e){const{anchorProps:o,tooltipProps:n}=ke(),[t,i]=c.useState(null);function l(f){i(f.currentTarget)}function s(){i(null)}const u=f=>{l(f),e.onClick&&e.onClick(f)},d=e.popoverEvent==="onHover",b=f=>{e.onMouseEnter&&e.onMouseEnter(f),e.popover&&d&&l(f),o.onMouseEnter()},h=f=>{e.onMouseLeave&&e.onMouseLeave(f),e.popover&&d&&s(),o.onMouseLeave()},p=ee(e.menuItems||[],"show",!0);return e.menuItems&&!p.length?null:I.createElement(I.Fragment,null,I.createElement(me,{...e,onClick:u,onMouseEnter:b,onMouseLeave:h,ref:o.ref}),e.tooltip&&I.createElement(Re,{...n},e.tooltip),e.popover?I.createElement(ue,{open:!!t,anchorEl:t,onClose:s,disableRestoreFocus:!0,style:d?{pointerEvents:"none"}:null,...wo},I.createElement(Ro.Provider,{value:{onClose:s}},e.popover)):e.menuItems?I.createElement(So,{items:p,onChange:e.menuOnChange,value:e.menuValue,anchorEl:t,open:!!t,onClose:s}):null)}function zo(e){return ee(e,"show")?e.menuItems||e.popover||e.tooltip?I.createElement(Bo,{...e}):I.createElement(me,{...e}):null}const Ho=c.memo(zo);export{Ho as B,So as M,Eo as a,fo as b,Oe as c,go as d,Ro as e,ko as g,ee as u};
