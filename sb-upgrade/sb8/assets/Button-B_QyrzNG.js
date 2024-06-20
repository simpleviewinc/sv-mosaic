import{j as d}from"./jsx-runtime-qGIIFXMu.js";import{r as s}from"./index-CDs2tPxN.js";import{t as p,s as F}from"./theme-tUuL1bpb.js";import{_ as W,b as u,g as J,a as U,s as _,u as Y,d as K,e as Q,r as $e,c as S,f as D,q as it}from"./useThemeProps-DZj2lB8w.js";import{B as we}from"./ButtonBase-cV3lp3kg.js";import{u as Ve,T as at,r as st,g as He,M as lt,P as Ue,b as ct,a as dt}from"./Popper-CAohKvIp.js";import{u as te,b as Ge}from"./assertThisInitialized-DcNg8fFv.js";import{o as ae,a as qe,d as ut}from"./ownerWindow-DvT1GKkC.js";import{u as Ie}from"./useToggle-D8hNafRh.js";var h={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=Symbol.for("react.element"),ke=Symbol.for("react.portal"),se=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),ue=Symbol.for("react.context"),pt=Symbol.for("react.server_context"),pe=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),mt=Symbol.for("react.offscreen"),Ke;Ke=Symbol.for("react.module.reference");function A(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Re:switch(e=e.type,e){case se:case ce:case le:case me:case fe:return e;default:switch(e=e&&e.$$typeof,e){case pt:case ue:case pe:case be:case ge:case de:return e;default:return t}}case ke:return t}}}h.ContextConsumer=ue;h.ContextProvider=de;h.Element=Re;h.ForwardRef=pe;h.Fragment=se;h.Lazy=be;h.Memo=ge;h.Portal=ke;h.Profiler=ce;h.StrictMode=le;h.Suspense=me;h.SuspenseList=fe;h.isAsyncMode=function(){return!1};h.isConcurrentMode=function(){return!1};h.isContextConsumer=function(e){return A(e)===ue};h.isContextProvider=function(e){return A(e)===de};h.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Re};h.isForwardRef=function(e){return A(e)===pe};h.isFragment=function(e){return A(e)===se};h.isLazy=function(e){return A(e)===be};h.isMemo=function(e){return A(e)===ge};h.isPortal=function(e){return A(e)===ke};h.isProfiler=function(e){return A(e)===ce};h.isStrictMode=function(e){return A(e)===le};h.isSuspense=function(e){return A(e)===me};h.isSuspenseList=function(e){return A(e)===fe};h.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===se||e===ce||e===le||e===me||e===fe||e===mt||typeof e=="object"&&e!==null&&(e.$$typeof===be||e.$$typeof===ge||e.$$typeof===de||e.$$typeof===ue||e.$$typeof===pe||e.$$typeof===Ke||e.getModuleId!==void 0)};h.typeOf=A;const ft=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Me(e){return`scale(${e}, ${e**2})`}const gt={entering:{opacity:1,transform:Me(1)},entered:{opacity:1,transform:"none"}},he=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Xe=s.forwardRef(function(t,o){const{addEndListener:n,appear:r=!0,children:i,easing:a,in:c,onEnter:l,onEntered:y,onEntering:T,onExit:C,onExited:g,onExiting:f,style:w,timeout:E="auto",TransitionComponent:j=at}=t,k=W(t,ft),B=s.useRef(),m=s.useRef(),v=Ve(),x=s.useRef(null),R=te(i.ref,o),$=te(x,R),z=I=>b=>{if(I){const M=x.current;b===void 0?I(M):I(M,b)}},H=z(T),P=z((I,b)=>{st(I);const{duration:M,delay:L,easing:O}=He({style:w,timeout:E,easing:a},{mode:"enter"});let q;E==="auto"?(q=v.transitions.getAutoHeightDuration(I.clientHeight),m.current=q):q=M,I.style.transition=[v.transitions.create("opacity",{duration:q,delay:L}),v.transitions.create("transform",{duration:he?q:q*.666,delay:L,easing:O})].join(","),l&&l(I,b)}),V=z(y),oe=z(f),G=z(I=>{const{duration:b,delay:M,easing:L}=He({style:w,timeout:E,easing:a},{mode:"exit"});let O;E==="auto"?(O=v.transitions.getAutoHeightDuration(I.clientHeight),m.current=O):O=b,I.style.transition=[v.transitions.create("opacity",{duration:O,delay:M}),v.transitions.create("transform",{duration:he?O:O*.666,delay:he?M:M||O*.333,easing:L})].join(","),I.style.opacity=0,I.style.transform=Me(.75),C&&C(I)}),ve=z(g),ne=I=>{E==="auto"&&(B.current=setTimeout(I,m.current||0)),n&&n(x.current,I)};return s.useEffect(()=>()=>{clearTimeout(B.current)},[]),d.jsx(j,u({appear:r,in:c,nodeRef:x,onEnter:P,onEntered:V,onEntering:H,onExit:G,onExited:ve,onExiting:oe,addEndListener:ne,timeout:E==="auto"?null:E},k,{children:(I,b)=>s.cloneElement(i,u({style:u({opacity:0,transform:Me(.75),visibility:I==="exited"&&!c?"hidden":void 0},gt[I],w,i.props.style),ref:$},b))}))});Xe.muiSupportAuto=!0;function bt(e){return J("MuiPopover",e)}U("MuiPopover",["root","paper"]);const vt=["onEntering"],ht=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function Oe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function Ae(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Ne(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ye(e){return typeof e=="function"?e():e}const yt=e=>{const{classes:t}=e;return Q({root:["root"],paper:["paper"]},bt,t)},xt=_(lt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Tt=_(Ue,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Je=s.forwardRef(function(t,o){const n=Y({props:t,name:"MuiPopover"}),{action:r,anchorEl:i,anchorOrigin:a={vertical:"top",horizontal:"left"},anchorPosition:c,anchorReference:l="anchorEl",children:y,className:T,container:C,elevation:g=8,marginThreshold:f=16,open:w,PaperProps:E={},transformOrigin:j={vertical:"top",horizontal:"left"},TransitionComponent:k=Xe,transitionDuration:B="auto",TransitionProps:{onEntering:m}={}}=n,v=W(n.TransitionProps,vt),x=W(n,ht),R=s.useRef(),$=te(R,E.ref),z=u({},n,{anchorOrigin:a,anchorReference:l,elevation:g,marginThreshold:f,PaperProps:E,transformOrigin:j,TransitionComponent:k,transitionDuration:B,TransitionProps:v}),H=yt(z),P=s.useCallback(()=>{if(l==="anchorPosition")return c;const b=ye(i),L=(b&&b.nodeType===1?b:ae(R.current).body).getBoundingClientRect();return{top:L.top+Oe(L,a.vertical),left:L.left+Ae(L,a.horizontal)}},[i,a.horizontal,a.vertical,c,l]),V=s.useCallback(b=>({vertical:Oe(b,j.vertical),horizontal:Ae(b,j.horizontal)}),[j.horizontal,j.vertical]),oe=s.useCallback(b=>{const M={width:b.offsetWidth,height:b.offsetHeight},L=V(M);if(l==="none")return{top:null,left:null,transformOrigin:Ne(L)};const O=P();let q=O.top-L.vertical,X=O.left-L.horizontal;const Pe=q+M.height,Le=X+M.width,Be=qe(ye(i)),Se=Be.innerHeight-f,je=Be.innerWidth-f;if(q<f){const N=q-f;q-=N,L.vertical+=N}else if(Pe>Se){const N=Pe-Se;q-=N,L.vertical+=N}if(X<f){const N=X-f;X-=N,L.horizontal+=N}else if(Le>je){const N=Le-je;X-=N,L.horizontal+=N}return{top:`${Math.round(q)}px`,left:`${Math.round(X)}px`,transformOrigin:Ne(L)}},[i,l,P,V,f]),G=s.useCallback(()=>{const b=R.current;if(!b)return;const M=oe(b);M.top!==null&&(b.style.top=M.top),M.left!==null&&(b.style.left=M.left),b.style.transformOrigin=M.transformOrigin},[oe]),ve=(b,M)=>{m&&m(b,M),G()};s.useEffect(()=>{w&&G()}),s.useImperativeHandle(r,()=>w?{updatePosition:()=>{G()}}:null,[w,G]),s.useEffect(()=>{if(!w)return;const b=ut(()=>{G()}),M=qe(i);return M.addEventListener("resize",b),()=>{b.clear(),M.removeEventListener("resize",b)}},[i,w,G]);let ne=B;B==="auto"&&!k.muiSupportAuto&&(ne=void 0);const I=C||(i?ae(ye(i)).body:void 0);return d.jsx(xt,u({BackdropProps:{invisible:!0},className:K(H.root,T),container:I,open:w,ref:o,ownerState:z},x,{children:d.jsx(k,u({appear:!0,in:w,onEntering:ve,timeout:ne},v,{children:d.jsx(Tt,u({elevation:g},E,{ref:$,className:K(H.paper,E.className),children:y}))}))}))});function Mt(e){return J("MuiButton",e)}const re=U("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Ct=s.createContext({}),Et=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],$t=["root"],wt=e=>{const{color:t,disableElevation:o,fullWidth:n,size:r,variant:i,classes:a}=e,c={root:["root",i,`${i}${S(t)}`,`size${S(r)}`,`${i}Size${S(r)}`,t==="inherit"&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${S(r)}`],endIcon:["endIcon",`iconSize${S(r)}`]},l=Q(c,Mt,a);return u({},a,l)},Ye=e=>u({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),It=_(we,{shouldForwardProp:e=>$e(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${S(o.color)}`],t[`size${S(o.size)}`],t[`${o.variant}Size${S(o.size)}`],o.color==="inherit"&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,n;return u({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":u({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:D(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:D(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:D(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":u({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${re.focusVisible}`]:u({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${re.disabled}`]:u({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="outlined"&&t.color==="secondary"&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${D(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(o=(n=e.palette).getContrastText)==null?void 0:o.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${re.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${re.disabled}`]:{boxShadow:"none"}}),Rt=_("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${S(o.size)}`]]}})(({ownerState:e})=>u({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},Ye(e))),kt=_("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${S(o.size)}`]]}})(({ownerState:e})=>u({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},Ye(e))),zt=s.forwardRef(function(t,o){const n=s.useContext(Ct),r=it(n,t),i=Y({props:r,name:"MuiButton"}),{children:a,color:c="primary",component:l="button",className:y,disabled:T=!1,disableElevation:C=!1,disableFocusRipple:g=!1,endIcon:f,focusVisibleClassName:w,fullWidth:E=!1,size:j="medium",startIcon:k,type:B,variant:m="text"}=i,v=W(i,Et),x=u({},i,{color:c,component:l,disabled:T,disableElevation:C,disableFocusRipple:g,fullWidth:E,size:j,type:B,variant:m}),R=wt(x),{root:$}=R,z=W(R,$t),H=k&&d.jsx(Rt,{className:z.startIcon,ownerState:x,children:k}),P=f&&d.jsx(kt,{className:z.endIcon,ownerState:x,children:f});return d.jsxs(It,u({ownerState:x,className:K(n.className,$,y),component:l,disabled:T,focusRipple:!g,focusVisibleClassName:K(z.focusVisible,w),ref:o,type:B},v,{classes:z,children:[H,a,P]}))});function Pt(e){return J("MuiIconButton",e)}const Lt=U("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Bt=["edge","children","className","color","disabled","disableFocusRipple","size"],St=e=>{const{classes:t,disabled:o,color:n,edge:r,size:i}=e,a={root:["root",o&&"disabled",n!=="default"&&`color${S(n)}`,r&&`edge${S(r)}`,`size${S(i)}`]};return Q(a,Pt,t)},jt=_(we,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="default"&&t[`color${S(o.color)}`],o.edge&&t[`edge${S(o.edge)}`],t[`size${S(o.size)}`]]}})(({theme:e,ownerState:t})=>u({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:D(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>u({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&u({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:D(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Lt.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})),Ht=s.forwardRef(function(t,o){const n=Y({props:t,name:"MuiIconButton"}),{edge:r=!1,children:i,className:a,color:c="default",disabled:l=!1,disableFocusRipple:y=!1,size:T="medium"}=n,C=W(n,Bt),g=u({},n,{edge:r,color:c,disabled:l,disableFocusRipple:y,size:T}),f=St(g);return d.jsx(jt,u({className:K(f.root,a),centerRipple:!0,focusRipple:!y,disabled:l,ref:o,ownerState:g},C,{children:i}))}),xe={lightBlue:{text:p.colors.blue},white:{text:{contained:p.colors.almostBlack,icon:p.colors.white}},yellow:{text:{contained:p.colors.almostBlack,icon:p.colors.yellow,outlined:p.colors.almostBlack,text:p.colors.almostBlack}},gray:{text:{contained:p.colors.almostBlack,icon:p.colors.gray,outlined:p.colors.almostBlack,text:p.colors.almostBlack},border:{outlined:p.colors.simplyGray}},black:{background:{input:p.newColors.grey1[100]},border:{input:p.newColors.simplyGrey[100]}}},qt={gray:"gray200"};function ie(e,{type:t,color:o,variant:n}){if(xe[o]&&xe[o][t]){const r=xe[o][t];if(typeof r=="string")return r;if(r[n])return r[n]}return e}function Qe(e,t){const o=qt[e]||e,n=p.colors[o],r=p.colors[`${o}Intense`],i=p.colors[`${o}Washed`];return{base:n,background:ie(t==="contained"?n:"transparent",{type:"background",color:e,variant:t}),border:ie(t==="outlined"?n:"transparent",{type:"border",color:e,variant:t}),text:ie(t==="contained"?"white":n,{type:"text",color:e,variant:t}),hover:{background:t==="contained"?r:i,border:ie(t==="outlined"?n:"transparent",{type:"border",color:e,variant:t})}}}function Ot(e,t="medium"){return e==="input"?"9px 16px":t==="small"?e==="outlined"?"1px 12px":"3px 14px":e==="outlined"?"4px 16px":"6px 18px"}const At=F("span")(({$fullWidth:e})=>`
	display: inline-block;

	&.invisible {
		visbility: hidden;
		opacity: 0;
	}

	${e&&`
		width: 100%;
	`}
`),Nt=F(zt)(({$color:e,$variant:t,$size:o,$fullWidth:n,disabled:r})=>{const i=Qe(e,t);return`
		&& {
			border: none;
			background-color: ${i.background};
			border-color: ${i.border};
			color: ${i.text};
			opacity: ${r?.5:1};

			align-items: center;
			border-width: ${t==="outlined"?2:t==="input"?1:0}px;
			border-style: solid;
			border-radius: 0;
			box-shadow: none;
			display: inline-flex;
			gap: 12px;
			padding: ${Ot(t,o)};
			width: ${n?"100%":"auto"};
			text-transform: ${t==="text"||t==="input"?"none":"uppercase"};
			line-height: 1.75;
			cursor: pointer;

			${t!=="input"?`
				font-family: ${p.fontFamily};
				font-size: 14px;
				font-weight: ${p.fontWeight.bold};
				letter-spacing: 1px;
			`:`
				font: inherit;
				height: 1.4375em;
				box-sizing: content-box;
			`}

			&:hover {
				background-color: ${r?i.background:i.hover.background};
				border-color: ${r?i.border:i.hover.border};
			}

			&[disabled] {
				background-color: ${i.background};
				color: ${i.text};
			}

			& .MuiSvgIcon-root {
				&:first-of-type {
					margin-left: -4px;
				}
				&:last-of-type {
					margin-right: -4px;
				}
			}

			& .adornment-icon {
				width: 1em;
				height: 1em;
				font-size: 16px;
			}
		}
	`}),Ft=F(Ht)(({$color:e,$variant:t,disabled:o})=>{const n=Qe(e,t);return`
		&& {
			background-color: ${n.background};
			border-color: ${n.border};
			color: ${n.text};
			opacity: ${o?.6:1};

			&:hover {
				background-color: ${o?n.background:n.hover.background};
				border-color: ${o?n.border:n.hover.border};
			}
		}
	`}),Wt=F.div`
	font-family: ${p.fontFamily};
	padding: 10px;
`,Ce=s.createContext({});function _t(e){return J("MuiList",e)}U("MuiList",["root","padding","dense","subheader"]);const Dt=["children","className","component","dense","disablePadding","subheader"],Vt=e=>{const{classes:t,disablePadding:o,dense:n,subheader:r}=e;return Q({root:["root",!o&&"padding",n&&"dense",r&&"subheader"]},_t,t)},Ut=_("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>u({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Gt=s.forwardRef(function(t,o){const n=Y({props:t,name:"MuiList"}),{children:r,className:i,component:a="ul",dense:c=!1,disablePadding:l=!1,subheader:y}=n,T=W(n,Dt),C=s.useMemo(()=>({dense:c}),[c]),g=u({},n,{component:a,dense:c,disablePadding:l}),f=Vt(g);return d.jsx(Ce.Provider,{value:C,children:d.jsxs(Ut,u({as:a,className:K(f.root,i),ref:o,ownerState:g},T,{children:[y,r]}))})}),Kt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Te(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function Fe(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function Ze(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}function Z(e,t,o,n,r,i){let a=!1,c=r(e,t,t?o:!1);for(;c;){if(c===e.firstChild){if(a)return!1;a=!0}const l=n?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!Ze(c,i)||l)c=r(e,c,o);else return c.focus(),!0}return!1}const Xt=s.forwardRef(function(t,o){const{actions:n,autoFocus:r=!1,autoFocusItem:i=!1,children:a,className:c,disabledItemsFocusable:l=!1,disableListWrap:y=!1,onKeyDown:T,variant:C="selectedMenu"}=t,g=W(t,Kt),f=s.useRef(null),w=s.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ge(()=>{r&&f.current.focus()},[r]),s.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(m,v)=>{const x=!f.current.style.width;if(m.clientHeight<f.current.clientHeight&&x){const R=`${ct(ae(m))}px`;f.current.style[v.direction==="rtl"?"paddingLeft":"paddingRight"]=R,f.current.style.width=`calc(100% + ${R})`}return f.current}}),[]);const E=m=>{const v=f.current,x=m.key,R=ae(v).activeElement;if(x==="ArrowDown")m.preventDefault(),Z(v,R,y,l,Te);else if(x==="ArrowUp")m.preventDefault(),Z(v,R,y,l,Fe);else if(x==="Home")m.preventDefault(),Z(v,null,y,l,Te);else if(x==="End")m.preventDefault(),Z(v,null,y,l,Fe);else if(x.length===1){const $=w.current,z=x.toLowerCase(),H=performance.now();$.keys.length>0&&(H-$.lastTime>500?($.keys=[],$.repeating=!0,$.previousKeyMatched=!0):$.repeating&&z!==$.keys[0]&&($.repeating=!1)),$.lastTime=H,$.keys.push(z);const P=R&&!$.repeating&&Ze(R,$);$.previousKeyMatched&&(P||Z(v,R,!1,l,Te,$))?m.preventDefault():$.previousKeyMatched=!1}T&&T(m)},j=te(f,o);let k=-1;s.Children.forEach(a,(m,v)=>{s.isValidElement(m)&&(m.props.disabled||(C==="selectedMenu"&&m.props.selected||k===-1)&&(k=v))});const B=s.Children.map(a,(m,v)=>{if(v===k){const x={};return i&&(x.autoFocus=!0),m.props.tabIndex===void 0&&C==="selectedMenu"&&(x.tabIndex=0),s.cloneElement(m,x)}return m});return d.jsx(Gt,u({role:"menu",ref:j,className:c,onKeyDown:E,tabIndex:r?0:-1},g,{children:B}))});function Jt(e){return J("MuiMenu",e)}U("MuiMenu",["root","paper","list"]);const Yt=["onEntering"],Qt=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],Zt={vertical:"top",horizontal:"right"},eo={vertical:"top",horizontal:"left"},to=e=>{const{classes:t}=e;return Q({root:["root"],paper:["paper"],list:["list"]},Jt,t)},oo=_(Je,{shouldForwardProp:e=>$e(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),no=_(Ue,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ro=_(Xt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),io=s.forwardRef(function(t,o){const n=Y({props:t,name:"MuiMenu"}),{autoFocus:r=!0,children:i,disableAutoFocusItem:a=!1,MenuListProps:c={},onClose:l,open:y,PaperProps:T={},PopoverClasses:C,transitionDuration:g="auto",TransitionProps:{onEntering:f}={},variant:w="selectedMenu"}=n,E=W(n.TransitionProps,Yt),j=W(n,Qt),k=Ve(),B=k.direction==="rtl",m=u({},n,{autoFocus:r,disableAutoFocusItem:a,MenuListProps:c,onEntering:f,PaperProps:T,transitionDuration:g,TransitionProps:E,variant:w}),v=to(m),x=r&&!a&&y,R=s.useRef(null),$=(P,V)=>{R.current&&R.current.adjustStyleForScrollbar(P,k),f&&f(P,V)},z=P=>{P.key==="Tab"&&(P.preventDefault(),l&&l(P,"tabKeyDown"))};let H=-1;return s.Children.map(i,(P,V)=>{s.isValidElement(P)&&(P.props.disabled||(w==="selectedMenu"&&P.props.selected||H===-1)&&(H=V))}),d.jsx(oo,u({classes:C,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:B?"right":"left"},transformOrigin:B?Zt:eo,PaperProps:u({component:no},T,{classes:u({},T.classes,{root:v.paper})}),className:v.root,open:y,ref:o,transitionDuration:g,TransitionProps:u({onEntering:$},E),ownerState:m},j,{children:d.jsx(ro,u({onKeyDown:z,actions:R,autoFocus:r&&(H===-1||a),autoFocusItem:x,variant:w},c,{className:K(v.list,c.className),children:i}))}))}),ao=F(io)`
	& > .MuiMenu-paper {
		box-shadow: 0px 2px 6px ${p.newColors.almostBlack[20]};
		margin-top: 4px;
	}
`,so=s.createContext(null);function ze(e){return d.jsx(ao,{anchorEl:e.anchorEl,open:e.open,onClose:e.onClose,children:d.jsx(so.Provider,{value:{onClose:e.onClose},children:e.children})})}ze.__docgenInfo={description:"",methods:[],displayName:"MenuBase",props:{open:{required:!0,tsType:{name:"boolean"},description:""},anchorEl:{required:!1,tsType:{name:"HTMLElement"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const We=U("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),_e=U("MuiListItemIcon",["root","alignItemsFlexStart"]),De=U("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function lo(e){return J("MuiMenuItem",e)}const ee=U("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),co=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],uo=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]},po=e=>{const{disabled:t,dense:o,divider:n,disableGutters:r,selected:i,classes:a}=e,l=Q({root:["root",o&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",i&&"selected"]},lo,a);return u({},a,l)},mo=_(we,{shouldForwardProp:e=>$e(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:uo})(({theme:e,ownerState:t})=>u({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ee.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${ee.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:D(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${ee.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:D(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:D(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${ee.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${ee.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${We.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${We.inset}`]:{marginLeft:52},[`& .${De.root}`]:{marginTop:0,marginBottom:0},[`& .${De.inset}`]:{paddingLeft:36},[`& .${_e.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&u({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${_e.root} svg`]:{fontSize:"1.25rem"}}))),fo=s.forwardRef(function(t,o){const n=Y({props:t,name:"MuiMenuItem"}),{autoFocus:r=!1,component:i="li",dense:a=!1,divider:c=!1,disableGutters:l=!1,focusVisibleClassName:y,role:T="menuitem",tabIndex:C}=n,g=W(n,co),f=s.useContext(Ce),w={dense:a||f.dense||!1,disableGutters:l},E=s.useRef(null);Ge(()=>{r&&E.current&&E.current.focus()},[r]);const j=u({},n,{dense:w.dense,divider:c,disableGutters:l}),k=po(n),B=te(E,o);let m;return n.disabled||(m=C!==void 0?C:-1),d.jsx(Ce.Provider,{value:w,children:d.jsx(mo,u({ref:B,role:T,tabIndex:m,component:i,focusVisibleClassName:K(k.focusVisible,y)},g,{ownerState:j,classes:k}))})}),go=F(fo)`
	&.MuiMenuItem-root {
		min-height: 42px;
		background-color: ${p.colors.white} !important;
	}

	&.menu-item.Mui-selected {
		.menuLabel {
			font-weight: ${p.fontWeight.bold};
		}
	}

	&.menu-item {
		padding: 8px 16px;
		&:hover {
			background-color: ${p.newColors.grey2[100]} !important;
		}
		&:active span {
			color: ${p.newColors.almostBlack[100]};
		}
		& .MuiTouchRipple-child {
			background-color: ${p.newColors.grey2[100]};
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${p.iconFontSize};
	}

	& > .menuLabel {
		font-family: ${p.fontFamily};
		font-size: 14px;
		color: ${p.newColors.grey4[100]};
		${({$truncateText:e})=>e&&`
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	}
`,Ee=F.div`
	display: inline-flex;
`,bo={blue:F(Ee)`
		& svg {
			color: ${p.colors.blue};
		}
	`,red:F(Ee)`
		& svg {
			color: ${p.newColors.darkRed[100]};
		}
	`};function et({mIcon:e,color:t,attrs:o,title:n,label:r,onClick:i,disabled:a,selected:c,truncateText:l}){const y=e,T=t!==void 0?bo[t]:Ee,C=s.useMemo(()=>({title:n===!0&&typeof r=="string"?r:typeof n=="string"?n:void 0,...o}),[o,n,r]);return d.jsxs(go,{...C,onClick:i,disabled:a,selected:c,className:"menu-item",disableRipple:!0,$truncateText:l,children:[e&&d.jsx(T,{className:"icon",children:d.jsx(y,{})}),d.jsx("div",{className:"menuLabel",children:d.jsx("span",{children:r})})]})}et.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{label:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"red" | "blue" | "black"',elements:[{name:"literal",value:'"red"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"black"'}]},description:""},mIcon:{required:!1,tsType:{name:"SvgIcon"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},attrs:{required:!1,tsType:{name:"MosaicObject"},description:""},name:{required:!1,tsType:{name:"string"},description:""},show:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]},{name:"Array",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]}],raw:"T[]"}]},description:""},truncateText:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:`If true and the label is a string, the menu item\r
will take on a title attribute that matches the label.\r
If a string is provided, that will be used as the title\r
instead.`}}};function tt(e){const t=e.items.map((o,n)=>{const r=function(){o.onClick(),e.onClose()};return d.jsx(et,{...o,onClick:r},n)});return d.jsx(ze,{anchorEl:e.anchorEl,open:e.open,onClose:e.onClose,children:t})}tt.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItemProps"}],raw:"MenuItemProps[]"},description:""},anchorEl:{required:!1,tsType:{name:"HTMLElement"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const vo=F(dt)`
	z-index: 1500;
	background: ${p.newColors.almostBlack[100]};
	color: white;
	padding: 8px;
	border-radius: 4px;
	color: white;
	font-family: ${p.fontFamily};
	font-size: 12px;
	max-width: 500px;
	pointer-events: none;

	&[data-popper-placement="bottom-start"] .arrow,
	&[data-popper-placement="bottom"] .arrow,
	&[data-popper-placement="bottom-end"] .arrow {
		border-bottom-color: ${p.newColors.almostBlack[100]};
		border-top: 0;
		top: -5px;
	}

	&[data-popper-placement="top-start"] .arrow,
	&[data-popper-placement="top"] .arrow,
	&[data-popper-placement="top-end"] .arrow {
		border-top-color: ${p.newColors.almostBlack[100]};
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
		border-left-color: ${p.newColors.almostBlack[100]};
		border-right: 0;
		right: -5px;
	}

	&[data-popper-placement="right-start"] .arrow,
	&[data-popper-placement="right"] .arrow,
	&[data-popper-placement="right-end"] .arrow {
		border-right-color: ${p.newColors.almostBlack[100]};
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
`,ho=F.div`
	border: 5px solid transparent;
	position: absolute;
`,yo=[{name:"offset",options:{offset:[0,10]}}],ot=e=>{const{children:t,open:o,placement:n="bottom-start",anchorEl:r,id:i,maxWidth:a}=e,c=s.useMemo(()=>({maxWidth:a}),[a]);return d.jsxs(vo,{open:o,anchorEl:r,placement:n,modifiers:yo,role:"tooltip",id:i,"data-testid":"tooltip-test-id",style:c,children:[d.jsx(ho,{className:"arrow"}),t]})};ot.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{anchorEl:{required:!0,tsType:{name:"union",raw:"AnchorElement | null",elements:[{name:"union",raw:"HTMLElement | SVGElement",elements:[{name:"HTMLElement"},{name:"SVGElement"}]},{name:"null"}]},description:`The tooltip anchor. Must be a type of\r
HTML element`},open:{required:!0,tsType:{name:"boolean"},description:`Whether or not the tooltip is currently\r
visible on screen`},children:{required:!0,tsType:{name:"ReactNode"},description:`Element to be wrapped by the tooltip.\r
When hovering over this child the tooltip\r
will show.`},placement:{required:!1,tsType:{name:'MUITooltipProps["placement"]',raw:'MUITooltipProps["placement"]'},description:"Tooltip placement."},id:{required:!1,tsType:{name:"string"},description:`The tooltip ID, should to referred to by\r
the anchor's aria-describedby attribute`},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`The maximum width for the tooltip. Accepts\r
a number of pixels or any valid CSS max-width unit`}}};function xo(){const[e,t]=s.useState(null),[o,n]=s.useState(!1),r=s.useId(),i=s.useMemo(()=>({open:o,anchorEl:e,id:`tooltip-${r}`}),[o,e,r]),a=s.useMemo(()=>({ref:t,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),"aria-describedby":`tooltip-${r}`}),[r]);return{tooltipProps:i,anchorProps:a}}const To=s.createContext(null),Mo={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},nt=s.forwardRef(function(t,o){const n=t.mIcon,r=t.variant==="icon",i=n&&d.jsx(n,{className:"adornment-icon",style:{color:t.mIconColor}}),a=Ie(t,"disabled",!1),c={$variant:t.variant,$color:t.color||"gray",disabled:t.invisible||a,size:t.size,$size:t.size,onClick:t.onClick,onBlur:t.onBlur,href:t.href,name:t.name,id:t.id,type:t.type||"button",as:t.as,ref:o,...t.muiAttrs},l=t.iconPosition||"left",y=t.component||(r?Ft:Nt),T=["button",t.className,t.variant==="icon"?"iconButton":"normalButton",t.fullWidth&&"fullWidth",t.invisible&&"invisible",`size_${t.size}`,`variant_${t.variant}`].filter(Boolean).join(" ");return d.jsx(At,{...t.attrs,$fullWidth:t.fullWidth,className:T,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,children:r?d.jsx(y,{...c,children:d.jsx(n,{"data-testid":"icon-button-test"})}):d.jsxs(y,{...c,$fullWidth:t.fullWidth,children:[l==="left"&&i,t.label,l==="right"&&i]})})});function Co(e){const{anchorProps:t,tooltipProps:o}=xo(),[n,r]=s.useState(null);function i(g){r(g.currentTarget)}function a(){r(null)}const c=g=>{i(g),e.onClick&&e.onClick(g)},l=e.popoverEvent==="onHover",y=g=>{e.onMouseEnter&&e.onMouseEnter(g),e.popover&&l&&i(g),t.onMouseEnter()},T=g=>{e.onMouseLeave&&e.onMouseLeave(g),e.popover&&l&&a(),t.onMouseLeave()},C=Ie(e.menuItems||[],"show",!0);return e.menuItems&&!C.length?null:d.jsxs(d.Fragment,{children:[d.jsx(nt,{...e,onClick:c,onMouseEnter:y,onMouseLeave:T,ref:t.ref}),e.tooltip&&d.jsx(ot,{...o,children:e.tooltip}),e.popover?d.jsx(Je,{open:!!n,anchorEl:n,onClose:a,disableRestoreFocus:!0,style:l?{pointerEvents:"none"}:null,...Mo,children:d.jsx(Wt,{children:d.jsx(To.Provider,{value:{onClose:a},children:e.popover})})}):e.menuItems?d.jsx(tt,{items:C,anchorEl:n,open:!!n,onClose:a}):e.menuContent&&d.jsx(ze,{anchorEl:n,open:!!n,onClose:a,children:e.menuContent})]})}function rt(e){return Ie(e,"show")?e.menuItems||e.menuContent||e.popover||e.tooltip?d.jsx(Co,{...e}):d.jsx(nt,{...e}):null}const Bo=s.memo(rt);rt.__docgenInfo={description:"",methods:[],displayName:"Button",props:{name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},href:{required:!1,tsType:{name:"string"},description:""},color:{required:!0,tsType:{name:"union",raw:'"black" | "blue" | "lightBlue" | "red" | "yellow" | "teal" | "gray" | "white"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"lightBlue"'},{name:"literal",value:'"red"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"white"'}]},description:""},mIcon:{required:!1,tsType:{name:"SvgIcon"},description:""},variant:{required:!0,tsType:{name:"union",raw:'"icon" | "outlined" | "contained" | "text" | "input"',elements:[{name:"literal",value:'"icon"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"contained"'},{name:"literal",value:'"text"'},{name:"literal",value:'"input"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},disabled:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]},{name:"Array",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]}],raw:"T[]"}]},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Button will occupy 100% of the width provided to it"},tooltip:{required:!1,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:"Display a tooltip on hover of the button"},popover:{required:!1,tsType:{name:"JSX.Element"},description:"Trigger a popover on click"},popoverEvent:{required:!1,tsType:{name:"union",raw:'"onClick" | "onHover"',elements:[{name:"literal",value:'"onClick"'},{name:"literal",value:'"onHover"'}]},description:""},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItemProps"}],raw:"MenuItemProps[]"},description:""},menuContent:{required:!1,tsType:{name:"JSX.Element"},description:""},mIconColor:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},attrs:{required:!1,tsType:{name:"MosaicObject"},description:"Attrs for the root span that wraps the button"},muiAttrs:{required:!1,tsType:{name:"MosaicObject"},description:"Attrs for the nested Material UI IconButton or Button"},show:{required:!1,tsType:{name:"union",raw:"T | T[]",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]},{name:"Array",elements:[{name:"union",raw:"MosaicToggleResult | MosaicToggleCallback<T>",elements:[{name:"boolean"},{name:"unknown"}]}],raw:"T[]"}]},description:""},component:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType"},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"WebTarget"},description:""},invisible:{required:!1,tsType:{name:"boolean"},description:""}}};export{Bo as B,Xe as G,Ht as I,so as M,Je as P,Ft as S,ot as T,et as a,ze as b,io as c,To as d,zt as e,xo as u};
