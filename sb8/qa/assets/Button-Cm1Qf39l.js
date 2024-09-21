import{j as c}from"./jsx-runtime-nGUw9YhZ.js";import{r as a}from"./index-BP8_t0zE.js";import{t as g,s as q}from"./theme-Cyujm90X.js";import{_ as V,d as u,g as to,a as J,s as G,u as no,e as Y,f as ro,p as So,b as S,j as K,r as he}from"./generateUtilityClasses-CplxKB4o.js";import{B as Bo}from"./ButtonBase-Btj-nnLi.js";import{u as xe,T as ye,r as Ce,g as Uo,M as $e,P as Pe,c as uo,i as Me,d as Ie,b as ze,a as Ee}from"./Popper-CA50KEz-.js";import{d as ke,u as fo,b as te}from"./useIsFocusVisible-De2ftVE9.js";import{o as po,a as Ko,d as we}from"./ownerWindow-DvT1GKkC.js";import{u as To}from"./useToggle-lipGlewK.js";const Re=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function wo(o){return`scale(${o}, ${o**2})`}const Se={entering:{opacity:1,transform:wo(1)},entered:{opacity:1,transform:"none"}},Io=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ne=a.forwardRef(function(e,t){const{addEndListener:n,appear:r=!0,children:i,easing:s,in:d,onEnter:l,onEntered:b,onEntering:I,onExit:h,onExited:x,onExiting:M,style:T,timeout:k="auto",TransitionComponent:P=ye}=e,v=V(e,Re),B=ke(),p=a.useRef(),m=xe(),C=a.useRef(null),z=fo(C,i.ref,t),f=$=>O=>{if($){const N=C.current;O===void 0?$(N):$(N,O)}},j=f(I),W=f(($,O)=>{Ce($);const{duration:N,delay:w,easing:R}=Uo({style:T,timeout:k,easing:s},{mode:"enter"});let Q;k==="auto"?(Q=m.transitions.getAutoHeightDuration($.clientHeight),p.current=Q):Q=N,$.style.transition=[m.transitions.create("opacity",{duration:Q,delay:w}),m.transitions.create("transform",{duration:Io?Q:Q*.666,delay:w,easing:R})].join(","),l&&l($,O)}),_=f(b),io=f(M),A=f($=>{const{duration:O,delay:N,easing:w}=Uo({style:T,timeout:k,easing:s},{mode:"exit"});let R;k==="auto"?(R=m.transitions.getAutoHeightDuration($.clientHeight),p.current=R):R=O,$.style.transition=[m.transitions.create("opacity",{duration:R,delay:N}),m.transitions.create("transform",{duration:Io?R:R*.666,delay:Io?N:N||R*.333,easing:w})].join(","),$.style.opacity=0,$.style.transform=wo(.75),h&&h($)}),U=f(x),Z=$=>{k==="auto"&&B.start(p.current||0,$),n&&n(C.current,$)};return c.jsx(P,u({appear:r,in:d,nodeRef:C,onEnter:W,onEntered:_,onEntering:j,onExit:A,onExited:U,onExiting:io,addEndListener:Z,timeout:k==="auto"?null:k},v,{children:($,O)=>a.cloneElement(i,u({style:u({opacity:0,transform:wo(.75),visibility:$==="exited"&&!d?"hidden":void 0},Se[$],T,i.props.style),ref:z},O))}))});ne.muiSupportAuto=!0;function Be(o){return to("MuiPopover",o)}J("MuiPopover",["root","paper"]);const Te=["onEntering"],Le=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],je=["slotProps"];function Xo(o,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=o.height/2:e==="bottom"&&(t=o.height),t}function Yo(o,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=o.width/2:e==="right"&&(t=o.width),t}function qo(o){return[o.horizontal,o.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function zo(o){return typeof o=="function"?o():o}const Oe=o=>{const{classes:e}=o;return ro({root:["root"],paper:["paper"]},Be,e)},Ne=G($e,{name:"MuiPopover",slot:"Root",overridesResolver:(o,e)=>e.root})({}),re=G(Pe,{name:"MuiPopover",slot:"Paper",overridesResolver:(o,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),ie=a.forwardRef(function(e,t){var n,r,i;const s=no({props:e,name:"MuiPopover"}),{action:d,anchorEl:l,anchorOrigin:b={vertical:"top",horizontal:"left"},anchorPosition:I,anchorReference:h="anchorEl",children:x,className:M,container:T,elevation:k=8,marginThreshold:P=16,open:v,PaperProps:B={},slots:p,slotProps:m,transformOrigin:C={vertical:"top",horizontal:"left"},TransitionComponent:z=ne,transitionDuration:f="auto",TransitionProps:{onEntering:j}={},disableScrollLock:W=!1}=s,_=V(s.TransitionProps,Te),io=V(s,Le),A=(n=m==null?void 0:m.paper)!=null?n:B,U=a.useRef(),Z=fo(U,A.ref),$=u({},s,{anchorOrigin:b,anchorReference:h,elevation:k,marginThreshold:P,externalPaperSlotProps:A,transformOrigin:C,TransitionComponent:z,transitionDuration:f,TransitionProps:_}),O=Oe($),N=a.useCallback(()=>{if(h==="anchorPosition")return I;const E=zo(l),F=(E&&E.nodeType===1?E:po(U.current).body).getBoundingClientRect();return{top:F.top+Xo(F,b.vertical),left:F.left+Yo(F,b.horizontal)}},[l,b.horizontal,b.vertical,I,h]),w=a.useCallback(E=>({vertical:Xo(E,C.vertical),horizontal:Yo(E,C.horizontal)}),[C.horizontal,C.vertical]),R=a.useCallback(E=>{const L={width:E.offsetWidth,height:E.offsetHeight},F=w(L);if(h==="none")return{top:null,left:null,transformOrigin:qo(F)};const _o=N();let oo=_o.top-F.vertical,eo=_o.left-F.horizontal;const Do=oo+L.height,Ao=eo+L.width,Ho=Ko(zo(l)),Vo=Ho.innerHeight-P,Go=Ho.innerWidth-P;if(P!==null&&oo<P){const H=oo-P;oo-=H,F.vertical+=H}else if(P!==null&&Do>Vo){const H=Do-Vo;oo-=H,F.vertical+=H}if(P!==null&&eo<P){const H=eo-P;eo-=H,F.horizontal+=H}else if(Ao>Go){const H=Ao-Go;eo-=H,F.horizontal+=H}return{top:`${Math.round(oo)}px`,left:`${Math.round(eo)}px`,transformOrigin:qo(F)}},[l,h,N,w,P]),[Q,Oo]=a.useState(v),X=a.useCallback(()=>{const E=U.current;if(!E)return;const L=R(E);L.top!==null&&(E.style.top=L.top),L.left!==null&&(E.style.left=L.left),E.style.transformOrigin=L.transformOrigin,Oo(!0)},[R]);a.useEffect(()=>(W&&window.addEventListener("scroll",X),()=>window.removeEventListener("scroll",X)),[l,W,X]);const pe=(E,L)=>{j&&j(E,L),X()},fe=()=>{Oo(!1)};a.useEffect(()=>{v&&X()}),a.useImperativeHandle(d,()=>v?{updatePosition:()=>{X()}}:null,[v,X]),a.useEffect(()=>{if(!v)return;const E=we(()=>{X()}),L=Ko(l);return L.addEventListener("resize",E),()=>{E.clear(),L.removeEventListener("resize",E)}},[l,v,X]);let No=f;f==="auto"&&!z.muiSupportAuto&&(No=void 0);const ge=T||(l?po(zo(l)).body:void 0),Mo=(r=p==null?void 0:p.root)!=null?r:Ne,Fo=(i=p==null?void 0:p.paper)!=null?i:re,me=uo({elementType:Fo,externalSlotProps:u({},A,{style:Q?A.style:u({},A.style,{opacity:0})}),additionalProps:{elevation:k,ref:Z},ownerState:$,className:Y(O.paper,A==null?void 0:A.className)}),Wo=uo({elementType:Mo,externalSlotProps:(m==null?void 0:m.root)||{},externalForwardedProps:io,additionalProps:{ref:t,slotProps:{backdrop:{invisible:!0}},container:ge,open:v},ownerState:$,className:Y(O.root,M)}),{slotProps:be}=Wo,ve=V(Wo,je);return c.jsx(Mo,u({},ve,!Me(Mo)&&{slotProps:be,disableScrollLock:W},{children:c.jsx(z,u({appear:!0,in:v,onEntering:pe,onExited:fe,timeout:No},_,{children:c.jsx(Fo,u({},me,{children:x}))}))}))});function Fe(o){return to("MuiButton",o)}const lo=J("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),We=a.createContext({}),_e=a.createContext(void 0),De=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Ae=o=>{const{color:e,disableElevation:t,fullWidth:n,size:r,variant:i,classes:s}=o,d={root:["root",i,`${i}${S(e)}`,`size${S(r)}`,`${i}Size${S(r)}`,`color${S(e)}`,t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${S(r)}`],endIcon:["icon","endIcon",`iconSize${S(r)}`]},l=ro(d,Fe,s);return u({},s,l)},se=o=>u({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),He=G(Bo,{shouldForwardProp:o=>So(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[t.variant],e[`${t.variant}${S(t.color)}`],e[`size${S(t.size)}`],e[`${t.variant}Size${S(t.size)}`],t.color==="inherit"&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})(({theme:o,ownerState:e})=>{var t,n;const r=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],i=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return u({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":u({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:K(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:K(o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[e.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:K(o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[e.color].main}}),"&:active":u({},e.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${lo.focusVisible}`]:u({},e.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${lo.disabled}`]:u({color:(o.vars||o).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(o.vars||o).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(o.vars||o).palette[e.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${K(o.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(t=(n=o.palette).getContrastText)==null?void 0:t.call(n,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:r,boxShadow:(o.vars||o).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(o.vars||o).palette[e.color].contrastText,backgroundColor:(o.vars||o).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${lo.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${lo.disabled}`]:{boxShadow:"none"}}),Ve=G("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.startIcon,e[`iconSize${S(t.size)}`]]}})(({ownerState:o})=>u({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},se(o))),Ge=G("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.endIcon,e[`iconSize${S(t.size)}`]]}})(({ownerState:o})=>u({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},se(o))),Ue=a.forwardRef(function(e,t){const n=a.useContext(We),r=a.useContext(_e),i=he(n,e),s=no({props:i,name:"MuiButton"}),{children:d,color:l="primary",component:b="button",className:I,disabled:h=!1,disableElevation:x=!1,disableFocusRipple:M=!1,endIcon:T,focusVisibleClassName:k,fullWidth:P=!1,size:v="medium",startIcon:B,type:p,variant:m="text"}=s,C=V(s,De),z=u({},s,{color:l,component:b,disabled:h,disableElevation:x,disableFocusRipple:M,fullWidth:P,size:v,type:p,variant:m}),f=Ae(z),j=B&&c.jsx(Ve,{className:f.startIcon,ownerState:z,children:B}),W=T&&c.jsx(Ge,{className:f.endIcon,ownerState:z,children:T}),_=r||"";return c.jsxs(He,u({ownerState:z,className:Y(n.className,f.root,I,_),component:b,disabled:h,focusRipple:!M,focusVisibleClassName:Y(f.focusVisible,k),ref:t,type:p},C,{classes:f,children:[j,d,W]}))});function Ke(o){return to("MuiIconButton",o)}const Xe=J("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Ye=["edge","children","className","color","disabled","disableFocusRipple","size"],qe=o=>{const{classes:e,disabled:t,color:n,edge:r,size:i}=o,s={root:["root",t&&"disabled",n!=="default"&&`color${S(n)}`,r&&`edge${S(r)}`,`size${S(i)}`]};return ro(s,Ke,e)},Je=G(Bo,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="default"&&e[`color${S(t.color)}`],t.edge&&e[`edge${S(t.edge)}`],e[`size${S(t.size)}`]]}})(({theme:o,ownerState:e})=>u({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:K(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:o,ownerState:e})=>{var t;const n=(t=(o.vars||o).palette)==null?void 0:t[e.color];return u({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&u({color:n==null?void 0:n.main},!e.disableRipple&&{"&:hover":u({},n&&{backgroundColor:o.vars?`rgba(${n.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:K(n.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${Xe.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),Qe=a.forwardRef(function(e,t){const n=no({props:e,name:"MuiIconButton"}),{edge:r=!1,children:i,className:s,color:d="default",disabled:l=!1,disableFocusRipple:b=!1,size:I="medium"}=n,h=V(n,Ye),x=u({},n,{edge:r,color:d,disabled:l,disableFocusRipple:b,size:I}),M=qe(x);return c.jsx(Je,u({className:Y(M.root,s),centerRipple:!0,focusRipple:!b,disabled:l,ref:t},h,{ownerState:x,children:i}))}),Eo={lightBlue:{text:g.colors.blue},white:{text:{contained:g.colors.almostBlack,icon:g.colors.white}},yellow:{text:{contained:g.colors.almostBlack,icon:g.colors.yellow,outlined:g.colors.almostBlack,text:g.colors.almostBlack}},gray:{text:{contained:g.colors.almostBlack,icon:g.colors.gray,outlined:g.colors.almostBlack,text:g.colors.almostBlack},border:{outlined:g.colors.simplyGray}},black:{background:{input:g.newColors.grey1[100]},border:{input:g.newColors.simplyGrey[100]}}},Ze={gray:"gray200"};function co(o,{type:e,color:t,variant:n}){if(Eo[t]&&Eo[t][e]){const r=Eo[t][e];if(typeof r=="string")return r;if(r[n])return r[n]}return o}function ae(o,e){const t=Ze[o]||o,n=g.colors[t],r=g.colors[`${t}Intense`],i=g.colors[`${t}Washed`];return{base:n,background:co(e==="contained"?n:"transparent",{type:"background",color:o,variant:e}),border:co(e==="outlined"?n:"transparent",{type:"border",color:o,variant:e}),text:co(e==="contained"?"white":n,{type:"text",color:o,variant:e}),hover:{background:e==="contained"?r:i,border:co(e==="outlined"?n:"transparent",{type:"border",color:o,variant:e})}}}function ot(o,e="medium"){return o==="input"?"9px 16px":e==="small"?o==="outlined"?"1px 12px":"3px 14px":e==="large"?o==="outlined"?"7px 22px":"9px 24px":o==="outlined"?"4px 16px":"6px 18px"}const et=q("span")(({$fullWidth:o})=>`
	display: inline-block;

	&.invisible {
		visbility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	${o&&`
		width: 100%;
	`}
`),tt=q(Ue)(({$color:o,$variant:e,$size:t,$fullWidth:n,disabled:r})=>{const i=ae(o,e);return`
		&& {
			border: none;
			background-color: ${i.background};
			border-color: ${i.border};
			color: ${i.text};
			opacity: ${r?.5:1};

			align-items: center;
			border-width: ${e==="outlined"?2:e==="input"?1:0}px;
			border-style: solid;
			border-radius: 0;
			box-shadow: none;
			display: inline-flex;
			gap: 12px;
			padding: ${ot(e,t)};
			width: ${n?"100%":"auto"};
			text-transform: ${e==="text"||e==="input"?"none":"uppercase"};
			line-height: 1.75;
			cursor: pointer;

			${e!=="input"?`
				font-family: ${g.fontFamily};
				font-size: 14px;
				font-weight: ${g.fontWeight.bold};
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
	`}),nt=q(Qe)(({$color:o,$variant:e,disabled:t})=>{const n=ae(o,e);return`
		&& {
			background-color: ${n.background};
			border-color: ${n.border};
			color: ${n.text};
			opacity: ${t?.6:1};

			&:hover {
				background-color: ${t?n.background:n.hover.background};
				border-color: ${t?n.border:n.hover.border};
			}
		}
	`}),rt=q.div`
	font-family: ${g.fontFamily};
	padding: 10px;
`;var y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),jo=Symbol.for("react.portal"),go=Symbol.for("react.fragment"),mo=Symbol.for("react.strict_mode"),bo=Symbol.for("react.profiler"),vo=Symbol.for("react.provider"),ho=Symbol.for("react.context"),it=Symbol.for("react.server_context"),xo=Symbol.for("react.forward_ref"),yo=Symbol.for("react.suspense"),Co=Symbol.for("react.suspense_list"),$o=Symbol.for("react.memo"),Po=Symbol.for("react.lazy"),st=Symbol.for("react.offscreen"),le;le=Symbol.for("react.module.reference");function D(o){if(typeof o=="object"&&o!==null){var e=o.$$typeof;switch(e){case Lo:switch(o=o.type,o){case go:case bo:case mo:case yo:case Co:return o;default:switch(o=o&&o.$$typeof,o){case it:case ho:case xo:case Po:case $o:case vo:return o;default:return e}}case jo:return e}}}y.ContextConsumer=ho;y.ContextProvider=vo;y.Element=Lo;y.ForwardRef=xo;y.Fragment=go;y.Lazy=Po;y.Memo=$o;y.Portal=jo;y.Profiler=bo;y.StrictMode=mo;y.Suspense=yo;y.SuspenseList=Co;y.isAsyncMode=function(){return!1};y.isConcurrentMode=function(){return!1};y.isContextConsumer=function(o){return D(o)===ho};y.isContextProvider=function(o){return D(o)===vo};y.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===Lo};y.isForwardRef=function(o){return D(o)===xo};y.isFragment=function(o){return D(o)===go};y.isLazy=function(o){return D(o)===Po};y.isMemo=function(o){return D(o)===$o};y.isPortal=function(o){return D(o)===jo};y.isProfiler=function(o){return D(o)===bo};y.isStrictMode=function(o){return D(o)===mo};y.isSuspense=function(o){return D(o)===yo};y.isSuspenseList=function(o){return D(o)===Co};y.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===go||o===bo||o===mo||o===yo||o===Co||o===st||typeof o=="object"&&o!==null&&(o.$$typeof===Po||o.$$typeof===$o||o.$$typeof===vo||o.$$typeof===ho||o.$$typeof===xo||o.$$typeof===le||o.getModuleId!==void 0)};y.typeOf=D;const Ro=a.createContext({});function at(o){return to("MuiList",o)}J("MuiList",["root","padding","dense","subheader"]);const lt=["children","className","component","dense","disablePadding","subheader"],ct=o=>{const{classes:e,disablePadding:t,dense:n,subheader:r}=o;return ro({root:["root",!t&&"padding",n&&"dense",r&&"subheader"]},at,e)},dt=G("ul",{name:"MuiList",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:o})=>u({listStyle:"none",margin:0,padding:0,position:"relative"},!o.disablePadding&&{paddingTop:8,paddingBottom:8},o.subheader&&{paddingTop:0})),ut=a.forwardRef(function(e,t){const n=no({props:e,name:"MuiList"}),{children:r,className:i,component:s="ul",dense:d=!1,disablePadding:l=!1,subheader:b}=n,I=V(n,lt),h=a.useMemo(()=>({dense:d}),[d]),x=u({},n,{component:s,dense:d,disablePadding:l}),M=ct(x);return c.jsx(Ro.Provider,{value:h,children:c.jsxs(dt,u({as:s,className:Y(M.root,i),ref:t,ownerState:x},I,{children:[b,r]}))})}),pt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function ko(o,e,t){return o===e?o.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t?null:o.firstChild}function Jo(o,e,t){return o===e?t?o.firstChild:o.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t?null:o.lastChild}function ce(o,e){if(e===void 0)return!0;let t=o.innerText;return t===void 0&&(t=o.textContent),t=t.trim().toLowerCase(),t.length===0?!1:e.repeating?t[0]===e.keys[0]:t.indexOf(e.keys.join(""))===0}function so(o,e,t,n,r,i){let s=!1,d=r(o,e,e?t:!1);for(;d;){if(d===o.firstChild){if(s)return!1;s=!0}const l=n?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!ce(d,i)||l)d=r(o,d,t);else return d.focus(),!0}return!1}const ft=a.forwardRef(function(e,t){const{actions:n,autoFocus:r=!1,autoFocusItem:i=!1,children:s,className:d,disabledItemsFocusable:l=!1,disableListWrap:b=!1,onKeyDown:I,variant:h="selectedMenu"}=e,x=V(e,pt),M=a.useRef(null),T=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});te(()=>{r&&M.current.focus()},[r]),a.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(p,{direction:m})=>{const C=!M.current.style.width;if(p.clientHeight<M.current.clientHeight&&C){const z=`${Ie(po(p))}px`;M.current.style[m==="rtl"?"paddingLeft":"paddingRight"]=z,M.current.style.width=`calc(100% + ${z})`}return M.current}}),[]);const k=p=>{const m=M.current,C=p.key,z=po(m).activeElement;if(C==="ArrowDown")p.preventDefault(),so(m,z,b,l,ko);else if(C==="ArrowUp")p.preventDefault(),so(m,z,b,l,Jo);else if(C==="Home")p.preventDefault(),so(m,null,b,l,ko);else if(C==="End")p.preventDefault(),so(m,null,b,l,Jo);else if(C.length===1){const f=T.current,j=C.toLowerCase(),W=performance.now();f.keys.length>0&&(W-f.lastTime>500?(f.keys=[],f.repeating=!0,f.previousKeyMatched=!0):f.repeating&&j!==f.keys[0]&&(f.repeating=!1)),f.lastTime=W,f.keys.push(j);const _=z&&!f.repeating&&ce(z,f);f.previousKeyMatched&&(_||so(m,z,!1,l,ko,f))?p.preventDefault():f.previousKeyMatched=!1}I&&I(p)},P=fo(M,t);let v=-1;a.Children.forEach(s,(p,m)=>{if(!a.isValidElement(p)){v===m&&(v+=1,v>=s.length&&(v=-1));return}p.props.disabled||(h==="selectedMenu"&&p.props.selected||v===-1)&&(v=m),v===m&&(p.props.disabled||p.props.muiSkipListHighlight||p.type.muiSkipListHighlight)&&(v+=1,v>=s.length&&(v=-1))});const B=a.Children.map(s,(p,m)=>{if(m===v){const C={};return i&&(C.autoFocus=!0),p.props.tabIndex===void 0&&h==="selectedMenu"&&(C.tabIndex=0),a.cloneElement(p,C)}return p});return c.jsx(ut,u({role:"menu",ref:P,className:d,onKeyDown:k,tabIndex:r?0:-1},x,{children:B}))});function gt(o){return to("MuiMenu",o)}J("MuiMenu",["root","paper","list"]);const mt=["onEntering"],bt=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],vt={vertical:"top",horizontal:"right"},ht={vertical:"top",horizontal:"left"},xt=o=>{const{classes:e}=o;return ro({root:["root"],paper:["paper"],list:["list"]},gt,e)},yt=G(ie,{shouldForwardProp:o=>So(o)||o==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(o,e)=>e.root})({}),Ct=G(re,{name:"MuiMenu",slot:"Paper",overridesResolver:(o,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),$t=G(ft,{name:"MuiMenu",slot:"List",overridesResolver:(o,e)=>e.list})({outline:0}),Pt=a.forwardRef(function(e,t){var n,r;const i=no({props:e,name:"MuiMenu"}),{autoFocus:s=!0,children:d,className:l,disableAutoFocusItem:b=!1,MenuListProps:I={},onClose:h,open:x,PaperProps:M={},PopoverClasses:T,transitionDuration:k="auto",TransitionProps:{onEntering:P}={},variant:v="selectedMenu",slots:B={},slotProps:p={}}=i,m=V(i.TransitionProps,mt),C=V(i,bt),z=ze(),f=u({},i,{autoFocus:s,disableAutoFocusItem:b,MenuListProps:I,onEntering:P,PaperProps:M,transitionDuration:k,TransitionProps:m,variant:v}),j=xt(f),W=s&&!b&&x,_=a.useRef(null),io=(w,R)=>{_.current&&_.current.adjustStyleForScrollbar(w,{direction:z?"rtl":"ltr"}),P&&P(w,R)},A=w=>{w.key==="Tab"&&(w.preventDefault(),h&&h(w,"tabKeyDown"))};let U=-1;a.Children.map(d,(w,R)=>{a.isValidElement(w)&&(w.props.disabled||(v==="selectedMenu"&&w.props.selected||U===-1)&&(U=R))});const Z=(n=B.paper)!=null?n:Ct,$=(r=p.paper)!=null?r:M,O=uo({elementType:B.root,externalSlotProps:p.root,ownerState:f,className:[j.root,l]}),N=uo({elementType:Z,externalSlotProps:$,ownerState:f,className:j.paper});return c.jsx(yt,u({onClose:h,anchorOrigin:{vertical:"bottom",horizontal:z?"right":"left"},transformOrigin:z?vt:ht,slots:{paper:Z,root:B.root},slotProps:{root:O,paper:N},open:x,ref:t,transitionDuration:k,TransitionProps:u({onEntering:io},m),ownerState:f},C,{classes:T,children:c.jsx($t,u({onKeyDown:A,actions:_,autoFocus:s&&(U===-1||b),autoFocusItem:W,variant:v},I,{className:Y(j.list,I.className),children:d}))}))}),Mt=q(Pt)`
	& > .MuiMenu-paper {
		box-shadow: 0px 2px 6px ${g.newColors.almostBlack[20]};
		margin-top: 4px;
	}
`,It=a.createContext(null);function de(o){return c.jsx(Mt,{anchorEl:o.anchorEl,open:o.open,onClose:o.onClose,children:c.jsx(It.Provider,{value:{onClose:o.onClose},children:o.children})})}const Qo=J("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Zo=J("MuiListItemIcon",["root","alignItemsFlexStart"]),oe=J("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function zt(o){return to("MuiMenuItem",o)}const ao=J("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Et=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],kt=(o,e)=>{const{ownerState:t}=o;return[e.root,t.dense&&e.dense,t.divider&&e.divider,!t.disableGutters&&e.gutters]},wt=o=>{const{disabled:e,dense:t,divider:n,disableGutters:r,selected:i,classes:s}=o,l=ro({root:["root",t&&"dense",e&&"disabled",!r&&"gutters",n&&"divider",i&&"selected"]},zt,s);return u({},s,l)},Rt=G(Bo,{shouldForwardProp:o=>So(o)||o==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:kt})(({theme:o,ownerState:e})=>u({},o.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ao.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:K(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${ao.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:K(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},[`&.${ao.selected}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:K(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:K(o.palette.primary.main,o.palette.action.selectedOpacity)}},[`&.${ao.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${ao.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`& + .${Qo.root}`]:{marginTop:o.spacing(1),marginBottom:o.spacing(1)},[`& + .${Qo.inset}`]:{marginLeft:52},[`& .${oe.root}`]:{marginTop:0,marginBottom:0},[`& .${oe.inset}`]:{paddingLeft:36},[`& .${Zo.root}`]:{minWidth:36}},!e.dense&&{[o.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&u({minHeight:32,paddingTop:4,paddingBottom:4},o.typography.body2,{[`& .${Zo.root} svg`]:{fontSize:"1.25rem"}}))),St=a.forwardRef(function(e,t){const n=no({props:e,name:"MuiMenuItem"}),{autoFocus:r=!1,component:i="li",dense:s=!1,divider:d=!1,disableGutters:l=!1,focusVisibleClassName:b,role:I="menuitem",tabIndex:h,className:x}=n,M=V(n,Et),T=a.useContext(Ro),k=a.useMemo(()=>({dense:s||T.dense||!1,disableGutters:l}),[T.dense,s,l]),P=a.useRef(null);te(()=>{r&&P.current&&P.current.focus()},[r]);const v=u({},n,{dense:k.dense,divider:d,disableGutters:l}),B=wt(n),p=fo(P,t);let m;return n.disabled||(m=h!==void 0?h:-1),c.jsx(Ro.Provider,{value:k,children:c.jsx(Rt,u({ref:p,role:I,tabIndex:m,component:i,focusVisibleClassName:Y(B.focusVisible,b),className:Y(B.root,x)},M,{ownerState:v,classes:B}))})}),ee=["black","blue","red","yellow","teal","gray"],Bt=q(St)`
	&.MuiMenuItem-root {
		min-height: 42px;
		background-color: ${g.colors.white} !important;
	}

	&.menu-item.Mui-selected {
		.menuLabel {
			font-weight: ${g.fontWeight.bold};
		}
	}

	&.menu-item {
		padding: 8px 16px;
		&:hover {
			background-color: ${g.newColors.grey2[100]} !important;
		}
		&:active span {
			color: ${g.newColors.almostBlack[100]};
		}
		& .MuiTouchRipple-child {
			background-color: ${g.newColors.grey2[100]};
		}
	}

	& > .icon {
		margin-right: 10px;
	}

	& > .icon > svg {
		font-size: ${g.iconFontSize};
	}

	& > .menuLabel {
		font-family: ${g.fontFamily};
		font-size: 14px;
		color: ${g.newColors.grey4[100]};
		${({$truncateText:o})=>o&&`
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	}
`,Tt=q.div`
	display: inline-flex;

    ${({$color:o})=>`
        & svg {
            color: ${g.colors[o]}
        }
    `}
`;function Lt({mIcon:o,color:e="black",attrs:t,title:n,label:r,onClick:i,disabled:s,selected:d,truncateText:l}){if(!ee.includes(e))throw new Error("The menu item component only accepts the following colors: "+ee.join(", ")+`. The color provided was "${e}"`);const b=a.useMemo(()=>({title:n===!0&&typeof r=="string"?r:typeof n=="string"?n:void 0,...t}),[t,n,r]);return c.jsxs(Bt,{...b,onClick:i,disabled:s,selected:d,className:"menu-item",disableRipple:!0,$truncateText:l,children:[o&&c.jsx(Tt,{className:"icon",$color:e,children:c.jsx(o,{})}),c.jsx("div",{className:"menuLabel",children:c.jsx("span",{children:r})})]})}function jt(o){const e=o.items.map((t,n)=>{const r=function(){t.onClick(),o.onClose()};return c.jsx(Lt,{...t,onClick:r},n)});return c.jsx(de,{anchorEl:o.anchorEl,open:o.open,onClose:o.onClose,children:e})}const Ot=q(Ee)`
	z-index: 1500;
	background: ${g.newColors.almostBlack[100]};
	color: white;
	padding: 8px;
	border-radius: 4px;
	color: white;
	font-family: ${g.fontFamily};
	font-size: 12px;
	max-width: 500px;
	pointer-events: none;

	&[data-popper-placement="bottom-start"] .arrow,
	&[data-popper-placement="bottom"] .arrow,
	&[data-popper-placement="bottom-end"] .arrow {
		border-bottom-color: ${g.newColors.almostBlack[100]};
		border-top: 0;
		top: -5px;
	}

	&[data-popper-placement="top-start"] .arrow,
	&[data-popper-placement="top"] .arrow,
	&[data-popper-placement="top-end"] .arrow {
		border-top-color: ${g.newColors.almostBlack[100]};
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
		border-left-color: ${g.newColors.almostBlack[100]};
		border-right: 0;
		right: -5px;
	}

	&[data-popper-placement="right-start"] .arrow,
	&[data-popper-placement="right"] .arrow,
	&[data-popper-placement="right-end"] .arrow {
		border-right-color: ${g.newColors.almostBlack[100]};
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
`,Nt=q.div`
	border: 5px solid transparent;
	position: absolute;
`,Ft=[{name:"offset",options:{offset:[0,10]}}],Wt=o=>{const{children:e,open:t,placement:n="bottom-start",anchorEl:r,id:i,maxWidth:s}=o,d=a.useMemo(()=>({maxWidth:s}),[s]);return c.jsxs(Ot,{open:t,anchorEl:r,placement:n,modifiers:Ft,role:"tooltip",id:i,"data-testid":"tooltip-test-id",style:d,children:[c.jsx(Nt,{className:"arrow"}),e]})};function _t(){const[o,e]=a.useState(null),[t,n]=a.useState(!1),r=a.useId(),i=a.useMemo(()=>({open:t,anchorEl:o,id:`tooltip-${r}`}),[t,o,r]),s=a.useMemo(()=>({ref:e,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),"aria-describedby":`tooltip-${r}`}),[r]);return{tooltipProps:i,anchorProps:s}}const Dt=a.createContext(null),At={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},ue=a.forwardRef(function(e,t){const n=e.mIcon,r=e.variant==="icon",i=n&&c.jsx(n,{className:"adornment-icon",style:{color:e.mIconColor}}),s=To(e,"disabled",!1),d={$variant:e.variant,$color:e.color||"gray",disabled:e.invisible||s,size:e.size,$size:e.size,onClick:e.onClick,onBlur:e.onBlur,href:e.href,name:e.name,id:e.id,type:e.type||"button",as:e.as,ref:t,...e.muiAttrs},l=e.iconPosition||"left",b=e.component||(r?nt:tt),I=["button",e.className,e.variant==="icon"?"iconButton":"normalButton",e.fullWidth&&"fullWidth",e.invisible&&"invisible",`size_${e.size}`,`variant_${e.variant}`].filter(Boolean).join(" ");return c.jsx(et,{...e.attrs,$fullWidth:e.fullWidth,className:I,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,children:r?c.jsx(b,{...d,children:c.jsx(n,{"data-testid":"icon-button-test"})}):c.jsxs(b,{...d,$fullWidth:e.fullWidth,children:[l==="left"&&i,e.label,l==="right"&&i]})})});function Ht(o){const{anchorProps:e,tooltipProps:t}=_t(),[n,r]=a.useState(null);function i(x){r(x.currentTarget)}function s(){r(null)}const d=x=>{i(x),o.onClick&&o.onClick(x)},l=o.popoverEvent==="onHover",b=x=>{o.onMouseEnter&&o.onMouseEnter(x),o.popover&&l&&i(x),e.onMouseEnter()},I=x=>{o.onMouseLeave&&o.onMouseLeave(x),o.popover&&l&&s(),e.onMouseLeave()},h=To(o.menuItems||[],"show",!0);return o.menuItems&&!h.length?null:c.jsxs(c.Fragment,{children:[c.jsx(ue,{...o,onClick:d,onMouseEnter:b,onMouseLeave:I,ref:e.ref}),o.tooltip&&c.jsx(Wt,{...t,children:o.tooltip}),o.popover?c.jsx(ie,{open:!!n,anchorEl:n,onClose:s,disableRestoreFocus:!0,style:l?{pointerEvents:"none"}:null,...At,children:c.jsx(rt,{children:c.jsx(Dt.Provider,{value:{onClose:s},children:o.popover})})}):o.menuItems?c.jsx(jt,{items:h,anchorEl:n,open:!!n,onClose:s}):o.menuContent&&c.jsx(de,{anchorEl:n,open:!!n,onClose:s,children:o.menuContent})]})}function Vt(o){return To(o,"show")?o.menuItems||o.menuContent||o.popover||o.tooltip?c.jsx(Ht,{...o}):c.jsx(ue,{...o}):null}const on=a.memo(Vt);export{on as B,ne as G,Qe as I,It as M,ie as P,nt as S,Wt as T,Lt as a,de as b,Pt as c,Dt as d,Ue as e,_t as u};
