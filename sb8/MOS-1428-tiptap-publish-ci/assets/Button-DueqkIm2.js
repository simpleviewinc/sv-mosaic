import{j as c}from"./jsx-runtime-nGUw9YhZ.js";import{r as a}from"./index-BP8_t0zE.js";import{t as g,s as X}from"./theme-D4oZEIDo.js";import{_ as H,d as u,g as oo,a as Y,s as A,u as eo,e as K,f as to,p as xo,b as R,i as G,r as ne}from"./generateUtilityClasses-BPeOZGYv.js";import{B as yo}from"./ButtonBase-XhX7nRZA.js";import{u as re,T as ie,r as se,g as To,M as ae,P as le,c as lo,i as ce,d as de,b as ue,a as pe}from"./Popper-Bh80rPSh.js";import{e as fe,u as uo,b as Ho}from"./useIsFocusVisible-B0UKn5st.js";import{o as co,a as So,d as ge}from"./ownerWindow-DvT1GKkC.js";import{u as Co}from"./useToggle-lipGlewK.js";const me=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function bo(o){return`scale(${o}, ${o**2})`}const ve={entering:{opacity:1,transform:bo(1)},entered:{opacity:1,transform:"none"}},fo=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ao=a.forwardRef(function(e,t){const{addEndListener:n,appear:r=!0,children:i,easing:s,in:d,onEnter:l,onEntered:v,onEntering:M,onExit:h,onExited:x,onExiting:P,style:T,timeout:k="auto",TransitionComponent:$=ie}=e,b=H(e,me),B=fe(),p=a.useRef(),m=re(),y=a.useRef(null),I=uo(y,i.ref,t),f=C=>j=>{if(C){const O=y.current;j===void 0?C(O):C(O,j)}},L=f(M),W=f((C,j)=>{se(C);const{duration:O,delay:E,easing:w}=To({style:T,timeout:k,easing:s},{mode:"enter"});let q;k==="auto"?(q=m.transitions.getAutoHeightDuration(C.clientHeight),p.current=q):q=O,C.style.transition=[m.transitions.create("opacity",{duration:q,delay:E}),m.transitions.create("transform",{duration:fo?q:q*.666,delay:E,easing:w})].join(","),l&&l(C,j)}),F=f(v),no=f(P),D=f(C=>{const{duration:j,delay:O,easing:E}=To({style:T,timeout:k,easing:s},{mode:"exit"});let w;k==="auto"?(w=m.transitions.getAutoHeightDuration(C.clientHeight),p.current=w):w=j,C.style.transition=[m.transitions.create("opacity",{duration:w,delay:O}),m.transitions.create("transform",{duration:fo?w:w*.666,delay:fo?O:O||w*.333,easing:E})].join(","),C.style.opacity=0,C.style.transform=bo(.75),h&&h(C)}),V=f(x),J=C=>{k==="auto"&&B.start(p.current||0,C),n&&n(y.current,C)};return c.jsx($,u({appear:r,in:d,nodeRef:y,onEnter:W,onEntered:F,onEntering:L,onExit:D,onExited:V,onExiting:no,addEndListener:J,timeout:k==="auto"?null:k},b,{children:(C,j)=>a.cloneElement(i,u({style:u({opacity:0,transform:bo(.75),visibility:C==="exited"&&!d?"hidden":void 0},ve[C],T,i.props.style),ref:I},j))}))});Ao.muiSupportAuto=!0;function be(o){return oo("MuiPopover",o)}Y("MuiPopover",["root","paper"]);const he=["onEntering"],xe=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],ye=["slotProps"];function Lo(o,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=o.height/2:e==="bottom"&&(t=o.height),t}function jo(o,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=o.width/2:e==="right"&&(t=o.width),t}function Oo(o){return[o.horizontal,o.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function go(o){return typeof o=="function"?o():o}const Ce=o=>{const{classes:e}=o;return to({root:["root"],paper:["paper"]},be,e)},$e=A(ae,{name:"MuiPopover",slot:"Root",overridesResolver:(o,e)=>e.root})({}),Vo=A(le,{name:"MuiPopover",slot:"Paper",overridesResolver:(o,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Go=a.forwardRef(function(e,t){var n,r,i;const s=eo({props:e,name:"MuiPopover"}),{action:d,anchorEl:l,anchorOrigin:v={vertical:"top",horizontal:"left"},anchorPosition:M,anchorReference:h="anchorEl",children:x,className:P,container:T,elevation:k=8,marginThreshold:$=16,open:b,PaperProps:B={},slots:p,slotProps:m,transformOrigin:y={vertical:"top",horizontal:"left"},TransitionComponent:I=Ao,transitionDuration:f="auto",TransitionProps:{onEntering:L}={},disableScrollLock:W=!1}=s,F=H(s.TransitionProps,he),no=H(s,xe),D=(n=m==null?void 0:m.paper)!=null?n:B,V=a.useRef(),J=uo(V,D.ref),C=u({},s,{anchorOrigin:v,anchorReference:h,elevation:k,marginThreshold:$,externalPaperSlotProps:D,transformOrigin:y,TransitionComponent:I,transitionDuration:f,TransitionProps:F}),j=Ce(C),O=a.useCallback(()=>{if(h==="anchorPosition")return M;const z=go(l),N=(z&&z.nodeType===1?z:co(V.current).body).getBoundingClientRect();return{top:N.top+Lo(N,v.vertical),left:N.left+jo(N,v.horizontal)}},[l,v.horizontal,v.vertical,M,h]),E=a.useCallback(z=>({vertical:Lo(z,y.vertical),horizontal:jo(z,y.horizontal)}),[y.horizontal,y.vertical]),w=a.useCallback(z=>{const S={width:z.offsetWidth,height:z.offsetHeight},N=E(S);if(h==="none")return{top:null,left:null,transformOrigin:Oo(N)};const zo=O();let Q=zo.top-N.vertical,Z=zo.left-N.horizontal;const ko=Q+S.height,Eo=Z+S.width,wo=So(go(l)),Ro=wo.innerHeight-$,Bo=wo.innerWidth-$;if($!==null&&Q<$){const _=Q-$;Q-=_,N.vertical+=_}else if($!==null&&ko>Ro){const _=ko-Ro;Q-=_,N.vertical+=_}if($!==null&&Z<$){const _=Z-$;Z-=_,N.horizontal+=_}else if(Eo>Bo){const _=Eo-Bo;Z-=_,N.horizontal+=_}return{top:`${Math.round(Q)}px`,left:`${Math.round(Z)}px`,transformOrigin:Oo(N)}},[l,h,O,E,$]),[q,$o]=a.useState(b),U=a.useCallback(()=>{const z=V.current;if(!z)return;const S=w(z);S.top!==null&&(z.style.top=S.top),S.left!==null&&(z.style.left=S.left),z.style.transformOrigin=S.transformOrigin,$o(!0)},[w]);a.useEffect(()=>(W&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[l,W,U]);const Jo=(z,S)=>{L&&L(z,S),U()},Qo=()=>{$o(!1)};a.useEffect(()=>{b&&U()}),a.useImperativeHandle(d,()=>b?{updatePosition:()=>{U()}}:null,[b,U]),a.useEffect(()=>{if(!b)return;const z=ge(()=>{U()}),S=So(l);return S.addEventListener("resize",z),()=>{z.clear(),S.removeEventListener("resize",z)}},[l,b,U]);let Po=f;f==="auto"&&!I.muiSupportAuto&&(Po=void 0);const Zo=T||(l?co(go(l)).body:void 0),po=(r=p==null?void 0:p.root)!=null?r:$e,Mo=(i=p==null?void 0:p.paper)!=null?i:Vo,oe=lo({elementType:Mo,externalSlotProps:u({},D,{style:q?D.style:u({},D.style,{opacity:0})}),additionalProps:{elevation:k,ref:J},ownerState:C,className:K(j.paper,D==null?void 0:D.className)}),Io=lo({elementType:po,externalSlotProps:(m==null?void 0:m.root)||{},externalForwardedProps:no,additionalProps:{ref:t,slotProps:{backdrop:{invisible:!0}},container:Zo,open:b},ownerState:C,className:K(j.root,P)}),{slotProps:ee}=Io,te=H(Io,ye);return c.jsx(po,u({},te,!ce(po)&&{slotProps:ee,disableScrollLock:W},{children:c.jsx(I,u({appear:!0,in:b,onEntering:Jo,onExited:Qo,timeout:Po},F,{children:c.jsx(Mo,u({},oe,{children:x}))}))}))});function Pe(o){return oo("MuiButton",o)}const so=Y("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Me=a.createContext({}),Ie=a.createContext(void 0),ze=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],ke=o=>{const{color:e,disableElevation:t,fullWidth:n,size:r,variant:i,classes:s}=o,d={root:["root",i,`${i}${R(e)}`,`size${R(r)}`,`${i}Size${R(r)}`,`color${R(e)}`,t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${R(r)}`],endIcon:["icon","endIcon",`iconSize${R(r)}`]},l=to(d,Pe,s);return u({},s,l)},Uo=o=>u({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Ee=A(yo,{shouldForwardProp:o=>xo(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[t.variant],e[`${t.variant}${R(t.color)}`],e[`size${R(t.size)}`],e[`${t.variant}Size${R(t.size)}`],t.color==="inherit"&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})(({theme:o,ownerState:e})=>{var t,n;const r=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],i=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return u({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":u({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:G(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:G(o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[e.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:G(o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[e.color].main}}),"&:active":u({},e.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${so.focusVisible}`]:u({},e.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${so.disabled}`]:u({color:(o.vars||o).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(o.vars||o).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(o.vars||o).palette[e.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${G(o.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(t=(n=o.palette).getContrastText)==null?void 0:t.call(n,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:r,boxShadow:(o.vars||o).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(o.vars||o).palette[e.color].contrastText,backgroundColor:(o.vars||o).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${so.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${so.disabled}`]:{boxShadow:"none"}}),we=A("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.startIcon,e[`iconSize${R(t.size)}`]]}})(({ownerState:o})=>u({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},Uo(o))),Re=A("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.endIcon,e[`iconSize${R(t.size)}`]]}})(({ownerState:o})=>u({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},Uo(o))),Be=a.forwardRef(function(e,t){const n=a.useContext(Me),r=a.useContext(Ie),i=ne(n,e),s=eo({props:i,name:"MuiButton"}),{children:d,color:l="primary",component:v="button",className:M,disabled:h=!1,disableElevation:x=!1,disableFocusRipple:P=!1,endIcon:T,focusVisibleClassName:k,fullWidth:$=!1,size:b="medium",startIcon:B,type:p,variant:m="text"}=s,y=H(s,ze),I=u({},s,{color:l,component:v,disabled:h,disableElevation:x,disableFocusRipple:P,fullWidth:$,size:b,type:p,variant:m}),f=ke(I),L=B&&c.jsx(we,{className:f.startIcon,ownerState:I,children:B}),W=T&&c.jsx(Re,{className:f.endIcon,ownerState:I,children:T}),F=r||"";return c.jsxs(Ee,u({ownerState:I,className:K(n.className,f.root,M,F),component:v,disabled:h,focusRipple:!P,focusVisibleClassName:K(f.focusVisible,k),ref:t,type:p},y,{classes:f,children:[L,d,W]}))});function Te(o){return oo("MuiIconButton",o)}const Se=Y("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Le=["edge","children","className","color","disabled","disableFocusRipple","size"],je=o=>{const{classes:e,disabled:t,color:n,edge:r,size:i}=o,s={root:["root",t&&"disabled",n!=="default"&&`color${R(n)}`,r&&`edge${R(r)}`,`size${R(i)}`]};return to(s,Te,e)},Oe=A(yo,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="default"&&e[`color${R(t.color)}`],t.edge&&e[`edge${R(t.edge)}`],e[`size${R(t.size)}`]]}})(({theme:o,ownerState:e})=>u({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:G(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:o,ownerState:e})=>{var t;const n=(t=(o.vars||o).palette)==null?void 0:t[e.color];return u({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&u({color:n==null?void 0:n.main},!e.disableRipple&&{"&:hover":u({},n&&{backgroundColor:o.vars?`rgba(${n.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:G(n.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${Se.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),Ne=a.forwardRef(function(e,t){const n=eo({props:e,name:"MuiIconButton"}),{edge:r=!1,children:i,className:s,color:d="default",disabled:l=!1,disableFocusRipple:v=!1,size:M="medium"}=n,h=H(n,Le),x=u({},n,{edge:r,color:d,disabled:l,disableFocusRipple:v,size:M}),P=je(x);return c.jsx(Oe,u({className:K(P.root,s),centerRipple:!0,focusRipple:!v,disabled:l,ref:t},h,{ownerState:x,children:i}))}),mo={lightBlue:{text:g.colors.blue},white:{text:{contained:g.colors.almostBlack,icon:g.colors.white}},yellow:{text:{contained:g.colors.almostBlack,icon:g.colors.yellow,outlined:g.colors.almostBlack,text:g.colors.almostBlack}},gray:{text:{contained:g.colors.almostBlack,icon:g.colors.gray,outlined:g.colors.almostBlack,text:g.colors.almostBlack},border:{outlined:g.colors.simplyGray}},black:{background:{input:g.newColors.grey1[100]},border:{input:g.newColors.simplyGrey[100]}}},We={gray:"gray200"};function ao(o,{type:e,color:t,variant:n}){if(mo[t]&&mo[t][e]){const r=mo[t][e];if(typeof r=="string")return r;if(r[n])return r[n]}return o}function Ko(o,e){const t=We[o]||o,n=g.colors[t],r=g.colors[`${t}Intense`],i=g.colors[`${t}Washed`];return{base:n,background:ao(e==="contained"?n:"transparent",{type:"background",color:o,variant:e}),border:ao(e==="outlined"?n:"transparent",{type:"border",color:o,variant:e}),text:ao(e==="contained"?"white":n,{type:"text",color:o,variant:e}),hover:{background:e==="contained"?r:i,border:ao(e==="outlined"?n:"transparent",{type:"border",color:o,variant:e})}}}function Fe(o,e="medium"){return o==="input"?"9px 16px":e==="small"?o==="outlined"?"1px 12px":"3px 14px":e==="large"?o==="outlined"?"7px 22px":"9px 24px":o==="outlined"?"4px 16px":"6px 18px"}const De=X("span")(({$fullWidth:o})=>`
	display: inline-block;

	&.invisible {
		visbility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	${o&&`
		width: 100%;
	`}
`),_e=X(Be)(({$color:o,$variant:e,$size:t,$fullWidth:n,disabled:r})=>{const i=Ko(o,e);return`
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
			padding: ${Fe(e,t)};
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
	`}),He=X(Ne)(({$color:o,$variant:e,disabled:t})=>{const n=Ko(o,e);return`
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
	`}),Ae=X.div`
	font-family: ${g.fontFamily};
	padding: 10px;
`,ho=a.createContext({});function Ve(o){return oo("MuiList",o)}Y("MuiList",["root","padding","dense","subheader"]);const Ge=["children","className","component","dense","disablePadding","subheader"],Ue=o=>{const{classes:e,disablePadding:t,dense:n,subheader:r}=o;return to({root:["root",!t&&"padding",n&&"dense",r&&"subheader"]},Ve,e)},Ke=A("ul",{name:"MuiList",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:o})=>u({listStyle:"none",margin:0,padding:0,position:"relative"},!o.disablePadding&&{paddingTop:8,paddingBottom:8},o.subheader&&{paddingTop:0})),Xe=a.forwardRef(function(e,t){const n=eo({props:e,name:"MuiList"}),{children:r,className:i,component:s="ul",dense:d=!1,disablePadding:l=!1,subheader:v}=n,M=H(n,Ge),h=a.useMemo(()=>({dense:d}),[d]),x=u({},n,{component:s,dense:d,disablePadding:l}),P=Ue(x);return c.jsx(ho.Provider,{value:h,children:c.jsxs(Ke,u({as:s,className:K(P.root,i),ref:t,ownerState:x},M,{children:[v,r]}))})}),Ye=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function vo(o,e,t){return o===e?o.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t?null:o.firstChild}function No(o,e,t){return o===e?t?o.firstChild:o.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t?null:o.lastChild}function Xo(o,e){if(e===void 0)return!0;let t=o.innerText;return t===void 0&&(t=o.textContent),t=t.trim().toLowerCase(),t.length===0?!1:e.repeating?t[0]===e.keys[0]:t.indexOf(e.keys.join(""))===0}function ro(o,e,t,n,r,i){let s=!1,d=r(o,e,e?t:!1);for(;d;){if(d===o.firstChild){if(s)return!1;s=!0}const l=n?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!Xo(d,i)||l)d=r(o,d,t);else return d.focus(),!0}return!1}const qe=a.forwardRef(function(e,t){const{actions:n,autoFocus:r=!1,autoFocusItem:i=!1,children:s,className:d,disabledItemsFocusable:l=!1,disableListWrap:v=!1,onKeyDown:M,variant:h="selectedMenu"}=e,x=H(e,Ye),P=a.useRef(null),T=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ho(()=>{r&&P.current.focus()},[r]),a.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(p,{direction:m})=>{const y=!P.current.style.width;if(p.clientHeight<P.current.clientHeight&&y){const I=`${de(co(p))}px`;P.current.style[m==="rtl"?"paddingLeft":"paddingRight"]=I,P.current.style.width=`calc(100% + ${I})`}return P.current}}),[]);const k=p=>{const m=P.current,y=p.key,I=co(m).activeElement;if(y==="ArrowDown")p.preventDefault(),ro(m,I,v,l,vo);else if(y==="ArrowUp")p.preventDefault(),ro(m,I,v,l,No);else if(y==="Home")p.preventDefault(),ro(m,null,v,l,vo);else if(y==="End")p.preventDefault(),ro(m,null,v,l,No);else if(y.length===1){const f=T.current,L=y.toLowerCase(),W=performance.now();f.keys.length>0&&(W-f.lastTime>500?(f.keys=[],f.repeating=!0,f.previousKeyMatched=!0):f.repeating&&L!==f.keys[0]&&(f.repeating=!1)),f.lastTime=W,f.keys.push(L);const F=I&&!f.repeating&&Xo(I,f);f.previousKeyMatched&&(F||ro(m,I,!1,l,vo,f))?p.preventDefault():f.previousKeyMatched=!1}M&&M(p)},$=uo(P,t);let b=-1;a.Children.forEach(s,(p,m)=>{if(!a.isValidElement(p)){b===m&&(b+=1,b>=s.length&&(b=-1));return}p.props.disabled||(h==="selectedMenu"&&p.props.selected||b===-1)&&(b=m),b===m&&(p.props.disabled||p.props.muiSkipListHighlight||p.type.muiSkipListHighlight)&&(b+=1,b>=s.length&&(b=-1))});const B=a.Children.map(s,(p,m)=>{if(m===b){const y={};return i&&(y.autoFocus=!0),p.props.tabIndex===void 0&&h==="selectedMenu"&&(y.tabIndex=0),a.cloneElement(p,y)}return p});return c.jsx(Xe,u({role:"menu",ref:$,className:d,onKeyDown:k,tabIndex:r?0:-1},x,{children:B}))});function Je(o){return oo("MuiMenu",o)}Y("MuiMenu",["root","paper","list"]);const Qe=["onEntering"],Ze=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],ot={vertical:"top",horizontal:"right"},et={vertical:"top",horizontal:"left"},tt=o=>{const{classes:e}=o;return to({root:["root"],paper:["paper"],list:["list"]},Je,e)},nt=A(Go,{shouldForwardProp:o=>xo(o)||o==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(o,e)=>e.root})({}),rt=A(Vo,{name:"MuiMenu",slot:"Paper",overridesResolver:(o,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),it=A(qe,{name:"MuiMenu",slot:"List",overridesResolver:(o,e)=>e.list})({outline:0}),st=a.forwardRef(function(e,t){var n,r;const i=eo({props:e,name:"MuiMenu"}),{autoFocus:s=!0,children:d,className:l,disableAutoFocusItem:v=!1,MenuListProps:M={},onClose:h,open:x,PaperProps:P={},PopoverClasses:T,transitionDuration:k="auto",TransitionProps:{onEntering:$}={},variant:b="selectedMenu",slots:B={},slotProps:p={}}=i,m=H(i.TransitionProps,Qe),y=H(i,Ze),I=ue(),f=u({},i,{autoFocus:s,disableAutoFocusItem:v,MenuListProps:M,onEntering:$,PaperProps:P,transitionDuration:k,TransitionProps:m,variant:b}),L=tt(f),W=s&&!v&&x,F=a.useRef(null),no=(E,w)=>{F.current&&F.current.adjustStyleForScrollbar(E,{direction:I?"rtl":"ltr"}),$&&$(E,w)},D=E=>{E.key==="Tab"&&(E.preventDefault(),h&&h(E,"tabKeyDown"))};let V=-1;a.Children.map(d,(E,w)=>{a.isValidElement(E)&&(E.props.disabled||(b==="selectedMenu"&&E.props.selected||V===-1)&&(V=w))});const J=(n=B.paper)!=null?n:rt,C=(r=p.paper)!=null?r:P,j=lo({elementType:B.root,externalSlotProps:p.root,ownerState:f,className:[L.root,l]}),O=lo({elementType:J,externalSlotProps:C,ownerState:f,className:L.paper});return c.jsx(nt,u({onClose:h,anchorOrigin:{vertical:"bottom",horizontal:I?"right":"left"},transformOrigin:I?ot:et,slots:{paper:J,root:B.root},slotProps:{root:j,paper:O},open:x,ref:t,transitionDuration:k,TransitionProps:u({onEntering:no},m),ownerState:f},y,{classes:T,children:c.jsx(it,u({onKeyDown:D,actions:F,autoFocus:s&&(V===-1||v),autoFocusItem:W,variant:b},M,{className:K(L.list,M.className),children:d}))}))}),at=X(st)`
	& > .MuiMenu-paper {
		box-shadow: 0px 2px 6px ${g.newColors.almostBlack[20]};
		margin-top: 4px;
	}
`,lt=a.createContext(null);function Yo(o){return c.jsx(at,{anchorEl:o.anchorEl,open:o.open,onClose:o.onClose,children:c.jsx(lt.Provider,{value:{onClose:o.onClose},children:o.children})})}const Wo=Y("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Fo=Y("MuiListItemIcon",["root","alignItemsFlexStart"]),Do=Y("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function ct(o){return oo("MuiMenuItem",o)}const io=Y("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),dt=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ut=(o,e)=>{const{ownerState:t}=o;return[e.root,t.dense&&e.dense,t.divider&&e.divider,!t.disableGutters&&e.gutters]},pt=o=>{const{disabled:e,dense:t,divider:n,disableGutters:r,selected:i,classes:s}=o,l=to({root:["root",t&&"dense",e&&"disabled",!r&&"gutters",n&&"divider",i&&"selected"]},ct,s);return u({},s,l)},ft=A(yo,{shouldForwardProp:o=>xo(o)||o==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ut})(({theme:o,ownerState:e})=>u({},o.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${io.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:G(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${io.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:G(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},[`&.${io.selected}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:G(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:G(o.palette.primary.main,o.palette.action.selectedOpacity)}},[`&.${io.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${io.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`& + .${Wo.root}`]:{marginTop:o.spacing(1),marginBottom:o.spacing(1)},[`& + .${Wo.inset}`]:{marginLeft:52},[`& .${Do.root}`]:{marginTop:0,marginBottom:0},[`& .${Do.inset}`]:{paddingLeft:36},[`& .${Fo.root}`]:{minWidth:36}},!e.dense&&{[o.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&u({minHeight:32,paddingTop:4,paddingBottom:4},o.typography.body2,{[`& .${Fo.root} svg`]:{fontSize:"1.25rem"}}))),gt=a.forwardRef(function(e,t){const n=eo({props:e,name:"MuiMenuItem"}),{autoFocus:r=!1,component:i="li",dense:s=!1,divider:d=!1,disableGutters:l=!1,focusVisibleClassName:v,role:M="menuitem",tabIndex:h,className:x}=n,P=H(n,dt),T=a.useContext(ho),k=a.useMemo(()=>({dense:s||T.dense||!1,disableGutters:l}),[T.dense,s,l]),$=a.useRef(null);Ho(()=>{r&&$.current&&$.current.focus()},[r]);const b=u({},n,{dense:k.dense,divider:d,disableGutters:l}),B=pt(n),p=uo($,t);let m;return n.disabled||(m=h!==void 0?h:-1),c.jsx(ho.Provider,{value:k,children:c.jsx(ft,u({ref:p,role:M,tabIndex:m,component:i,focusVisibleClassName:K(B.focusVisible,v),className:K(B.root,x)},P,{ownerState:b,classes:B}))})}),_o=["black","blue","red","yellow","teal","gray"],mt=X(gt)`
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
`,vt=X.div`
	display: inline-flex;

    ${({$color:o})=>`
        & svg {
            color: ${g.colors[o]}
        }
    `}
`;function bt({mIcon:o,color:e="black",attrs:t,title:n,label:r,onClick:i,disabled:s,selected:d,truncateText:l}){if(!_o.includes(e))throw new Error("The menu item component only accepts the following colors: "+_o.join(", ")+`. The color provided was "${e}"`);const v=a.useMemo(()=>({title:n===!0&&typeof r=="string"?r:typeof n=="string"?n:void 0,...t}),[t,n,r]);return c.jsxs(mt,{...v,onClick:i,disabled:s,selected:d,className:"menu-item",disableRipple:!0,$truncateText:l,children:[o&&c.jsx(vt,{className:"icon",$color:e,children:c.jsx(o,{})}),c.jsx("div",{className:"menuLabel",children:c.jsx("span",{children:r})})]})}function ht(o){const e=o.items.map((t,n)=>{const r=function(){t.onClick(),o.onClose()};return c.jsx(bt,{...t,onClick:r},n)});return c.jsx(Yo,{anchorEl:o.anchorEl,open:o.open,onClose:o.onClose,children:e})}const xt=X(pe)`
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
`,yt=X.div`
	border: 5px solid transparent;
	position: absolute;
`,Ct=[{name:"offset",options:{offset:[0,10]}}],$t=o=>{const{children:e,open:t,placement:n="bottom-start",anchorEl:r,id:i,maxWidth:s}=o,d=a.useMemo(()=>({maxWidth:s}),[s]);return c.jsxs(xt,{open:t,anchorEl:r,placement:n,modifiers:Ct,role:"tooltip",id:i,"data-testid":"tooltip-test-id",style:d,children:[c.jsx(yt,{className:"arrow"}),e]})};function Pt(){const[o,e]=a.useState(null),[t,n]=a.useState(!1),r=a.useId(),i=a.useMemo(()=>({open:t,anchorEl:o,id:`tooltip-${r}`}),[t,o,r]),s=a.useMemo(()=>({ref:e,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),"aria-describedby":`tooltip-${r}`}),[r]);return{tooltipProps:i,anchorProps:s}}const Mt=a.createContext(null),It={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},qo=a.forwardRef(function(e,t){const n=e.mIcon,r=e.variant==="icon",i=n&&c.jsx(n,{className:"adornment-icon",style:{color:e.mIconColor}}),s=Co(e,"disabled",!1),d={$variant:e.variant,$color:e.color||"gray",disabled:e.invisible||s,size:e.size,$size:e.size,onClick:e.onClick,onBlur:e.onBlur,href:e.href,name:e.name,id:e.id,type:e.type||"button",as:e.as,ref:t,...e.muiAttrs},l=e.iconPosition||"left",v=e.component||(r?He:_e),M=["button",e.className,e.variant==="icon"?"iconButton":"normalButton",e.fullWidth&&"fullWidth",e.invisible&&"invisible",`size_${e.size}`,`variant_${e.variant}`].filter(Boolean).join(" ");return c.jsx(De,{...e.attrs,$fullWidth:e.fullWidth,className:M,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,children:r?c.jsx(v,{...d,children:c.jsx(n,{"data-testid":"icon-button-test"})}):c.jsxs(v,{...d,$fullWidth:e.fullWidth,children:[l==="left"&&i,e.label,l==="right"&&i]})})});function zt(o){const{anchorProps:e,tooltipProps:t}=Pt(),[n,r]=a.useState(null);function i(x){r(x.currentTarget)}function s(){r(null)}const d=x=>{i(x),o.onClick&&o.onClick(x)},l=o.popoverEvent==="onHover",v=x=>{o.onMouseEnter&&o.onMouseEnter(x),o.popover&&l&&i(x),e.onMouseEnter()},M=x=>{o.onMouseLeave&&o.onMouseLeave(x),o.popover&&l&&s(),e.onMouseLeave()},h=Co(o.menuItems||[],"show",!0);return o.menuItems&&!h.length?null:c.jsxs(c.Fragment,{children:[c.jsx(qo,{...o,onClick:d,onMouseEnter:v,onMouseLeave:M,ref:e.ref}),o.tooltip&&c.jsx($t,{...t,children:o.tooltip}),o.popover?c.jsx(Go,{open:!!n,anchorEl:n,onClose:s,disableRestoreFocus:!0,style:l?{pointerEvents:"none"}:null,...It,children:c.jsx(Ae,{children:c.jsx(Mt.Provider,{value:{onClose:s},children:o.popover})})}):o.menuItems?c.jsx(ht,{items:h,anchorEl:n,open:!!n,onClose:s}):o.menuContent&&c.jsx(Yo,{anchorEl:n,open:!!n,onClose:s,children:o.menuContent})]})}function kt(o){return Co(o,"show")?o.menuItems||o.menuContent||o.popover||o.tooltip?c.jsx(zt,{...o}):c.jsx(qo,{...o}):null}const Nt=a.memo(kt);export{Nt as B,Ao as G,Ne as I,lt as M,Go as P,He as S,$t as T,bt as a,Yo as b,st as c,Mt as d,Be as e,Pt as u};
