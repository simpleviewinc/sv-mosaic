import{r as d,R as S}from"./index-wekxHvEx.js";import{c as F}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as a}from"./sizes-BeWafy6f.js";import{c as j}from"./identifier-Bq1wI7MV.js";import{g as U,a as D,u as _,c as B,b as q,s as R,r as to,m as uo,d as $o}from"./createSimplePaletteValueFilter-BVevyrl8.js";import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{u as wo}from"./useId-69YouNVI.js";import{B as po}from"./ButtonBase-CEIt18Mr.js";import{C as So}from"./CircularProgress-PxS61-je.js";import{b as Mo}from"./index-Zzm_Wx6F.js";import{c as go,a as fo,u as ro}from"./useSlot-VZdH5auH.js";import{o as Io,b as Co,u as Bo,T as Po}from"./useTooltip-B7zXsQMX.js";import{c as Eo,o as ko,e as zo,a as Lo,f as bo}from"./Popover-BqC9NAU7.js";import{u as Y}from"./useMountWarning-Q6RqOhZJ.js";function vo(o,t,n=!1){const r={...t};for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)){const i=e;if(i==="components"||i==="slots")r[i]={...o[i],...r[i]};else if(i==="componentsProps"||i==="slotProps"){const s=o[i],l=t[i];if(!l)r[i]=s||{};else if(!s)r[i]=l;else{r[i]={...l};for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c)){const u=c;r[i][u]=vo(s[u],l[u],n)}}}else i==="className"&&n&&t.className?r.className=j(o==null?void 0:o.className,t==null?void 0:t.className):i==="style"&&n&&t.style?r.style={...o==null?void 0:o.style,...t==null?void 0:t.style}:r[i]===void 0&&(r[i]=o[i])}return r}function Ro(o){return U("MuiButton",o)}const O=D("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),No=d.createContext({}),To=d.createContext(void 0),Fo=o=>{const{color:t,disableElevation:n,fullWidth:r,size:e,variant:i,loading:s,loadingPosition:l,classes:c}=o,u={root:["root",s&&"loading",i,`${i}${B(t)}`,`size${B(e)}`,`${i}Size${B(e)}`,`color${B(t)}`,n&&"disableElevation",r&&"fullWidth",s&&`loadingPosition${B(l)}`],startIcon:["icon","startIcon",`iconSize${B(e)}`],endIcon:["icon","endIcon",`iconSize${B(e)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},m=q(u,Ro,c);return{...c,...m}},mo=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],Wo=R(po,{shouldForwardProp:o=>to(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,t[n.variant],t[`${n.variant}${B(n.color)}`],t[`size${B(n.size)}`],t[`${n.variant}Size${B(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,n.loading&&t.loading]}})(uo(({theme:o})=>{const t=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],n=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${O.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(o.vars||o).shadows[2],"&:hover":{boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2]}},"&:active":{boxShadow:(o.vars||o).shadows[8]},[`&.${O.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${O.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${O.disabled}`]:{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(o.palette).filter($o()).map(([r])=>({props:{color:r},style:{"--variant-textColor":(o.vars||o).palette[r].main,"--variant-outlinedColor":(o.vars||o).palette[r].main,"--variant-outlinedBorder":o.alpha((o.vars||o).palette[r].main,.5),"--variant-containedColor":(o.vars||o).palette[r].contrastText,"--variant-containedBg":(o.vars||o).palette[r].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(o.vars||o).palette[r].dark,"--variant-textBg":o.alpha((o.vars||o).palette[r].main,(o.vars||o).palette.action.hoverOpacity),"--variant-outlinedBorder":(o.vars||o).palette[r].main,"--variant-outlinedBg":o.alpha((o.vars||o).palette[r].main,(o.vars||o).palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":o.alpha((o.vars||o).palette.text.primary,(o.vars||o).palette.action.hoverOpacity),"--variant-outlinedBg":o.alpha((o.vars||o).palette.text.primary,(o.vars||o).palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${O.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${O.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${O.loading}`]:{color:"transparent"}}}]}})),Oo=R("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.startIcon,n.loading&&t.startIconLoadingStart,t[`iconSize${B(n.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...mo]})),jo=R("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.endIcon,n.loading&&t.endIconLoadingEnd,t[`iconSize${B(n.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...mo]})),Do=R("span",{name:"MuiButton",slot:"LoadingIndicator"})(({theme:o})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(o.vars||o).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),ao=R("span",{name:"MuiButton",slot:"LoadingIconPlaceholder"})({display:"inline-block",width:"1em",height:"1em"}),Ao=d.forwardRef(function(t,n){const r=d.useContext(No),e=d.useContext(To),i=vo(r,t),s=_({props:i,name:"MuiButton"}),{children:l,color:c="primary",component:u="button",className:m,disabled:g=!1,disableElevation:f=!1,disableFocusRipple:v=!1,endIcon:M,focusVisibleClassName:N,fullWidth:P=!1,id:y,loading:$=null,loadingIndicator:p,loadingPosition:b="center",size:h="medium",startIcon:k,type:z,variant:x="text",...A}=s,W=wo(y),T=p??I.jsx(So,{"aria-labelledby":W,color:"inherit",size:16}),C={...s,color:c,component:u,disabled:g,disableElevation:f,disableFocusRipple:v,fullWidth:P,loading:$,loadingIndicator:T,loadingPosition:b,size:h,type:z,variant:x},E=Fo(C),J=(k||$&&b==="start")&&I.jsx(Oo,{className:E.startIcon,ownerState:C,children:k||I.jsx(ao,{className:E.loadingIconPlaceholder,ownerState:C})}),Q=(M||$&&b==="end")&&I.jsx(jo,{className:E.endIcon,ownerState:C,children:M||I.jsx(ao,{className:E.loadingIconPlaceholder,ownerState:C})}),X=e||"",G=typeof $=="boolean"?I.jsx("span",{className:E.loadingWrapper,style:{display:"contents"},children:$&&I.jsx(Do,{className:E.loadingIndicator,ownerState:C,children:T})}):null;return I.jsxs(Wo,{ownerState:C,className:j(r.className,E.root,m,X),component:u,disabled:g||$,focusRipple:!v,focusVisibleClassName:j(E.focusVisible,N),ref:n,type:z,id:$?W:y,...A,classes:E,children:[J,b!=="end"&&G,l,b==="end"&&G,Q]})}),Vo=F("span")(({$fullWidth:o})=>`
	display: inline-block;

	&.invisible {
		visbility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	${o&&`
		width: 100%;
	`}
`),Ko={danger:{contained:`
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
		`}};function Ho({$size:o,$isIconButton:t}){return t?[0]:o==="inherit"?[0,"0.25em"]:o==="small"?[0,3]:o==="xsmall"?[0,2]:[0,4]}const Uo={xsmall:"24px",small:"32px",medium:"36px",large:"40px",xlarge:"44px",inherit:"auto"};function Go({$fullWidth:o,$isIconButton:t,$size:n}){const r=Uo[n];return o?["100%",r]:t?n==="xsmall"?["24px",r]:n==="small"?["32px",r]:["36px",r]:[void 0,r]}const _o=F(Ao)(({$intent:o,$variant:t,$fullWidth:n,$size:r,$isIconButton:e,$bluntLeft:i,$bluntRight:s})=>{const l=Ho({$size:r,$isIconButton:e}),[c,u]=Go({$fullWidth:n,$isIconButton:e,$size:r});return`
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

			${Ko[o][t]}

			align-items: center;
			background-color: var(--bg);
			background-image: linear-gradient(to bottom, var(--bg-top) 0%, var(--bg-bottom) 100%);
			border: none;
			border-radius: ${a.rounded.md};
			box-shadow: 0 0 0 1px var(--shadow-border), var(--shadow);
			color: var(--color);
			cursor: pointer;
			display: flex;
			height: ${u};
			font-size: ${r==="inherit"?"inherit":a.fontSize.text.md};
			font-weight: ${a.weight.medium};
			line-height: ${r==="inherit"?"inherit":a.line.normal};
			min-width: 0;
			padding: ${a.spacing(...l)};
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			transition-property: background-color, box-shadow;
			vertical-align: middle;

			${i?`
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			`:""}

			${s?`
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			`:""}

			${r!=="inherit"?"":`
				margin-left: -0.25em;
				margin-right: -0.25em;
			`}

			${c?`
				width: ${c};
			`:""}

			${t!=="input"?"":`
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
				outline-offset: ${t==="text"?"-2px":"3px"};
				position: relative;
				z-index: 2;
			}

			&:disabled {
				color: var(--color);
				opacity: .4;
			}
		}
	`}),qo=F.div`
	&& {
		margin: -2px;

		${({$inherit:o,$size:t="sm"})=>o?`
			font-size: 1em;
			line-height: inherit;
		`:`
			font-size: ${a.fontSize.icon[t]};
			line-height: ${a.fontSize.icon[t]};
		`}

		${({$isAdornment:o})=>o?`
			color: var(--icon-color);
		`:""}
	}
`,Jo=F.span.attrs({className:"Mos-ButtonGradient"})`
	position: absolute;
	inset: 0;
	border-radius: ${a.rounded.md};
	opacity: 0;
	transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`,Qo=F.div.attrs({className:"Mos-ButtonContent"})`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({$size:o})=>`
		gap: ${a.spacing(o==="inherit"?"0.25em":o==="xsmall"?1:2)};
	`}
`,Xo=F.div.attrs({className:"Mos-ButtonLabel"})`
	align-self: baseline;
	margin-bottom: -1px;
`,oo=d.createContext({});function Yo(o){return U("MuiList",o)}D("MuiList",["root","padding","dense","subheader"]);const Zo=o=>{const{classes:t,disablePadding:n,dense:r,subheader:e}=o;return q({root:["root",!n&&"padding",r&&"dense",e&&"subheader"]},Yo,t)},ot=R("ul",{name:"MuiList",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:o})=>!o.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:o})=>o.subheader,style:{paddingTop:0}}]}),tt=d.forwardRef(function(t,n){const r=_({props:t,name:"MuiList"}),{children:e,className:i,component:s="ul",dense:l=!1,disablePadding:c=!1,subheader:u,...m}=r,g=d.useMemo(()=>({dense:l}),[l]),f={...r,component:s,dense:l,disablePadding:c},v=Zo(f);return I.jsx(oo.Provider,{value:g,children:I.jsxs(ot,{as:s,className:j(v.root,i),ref:n,ownerState:f,...m,children:[u,e]})})});function Z(o,t,n){return o===t?o.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:o.firstChild}function io(o,t,n){return o===t?n?o.firstChild:o.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:o.lastChild}function yo(o,t){if(t===void 0)return!0;let n=o.innerText;return n===void 0&&(n=o.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.startsWith(t.keys.join(""))}function K(o,t,n,r,e,i){let s=!1,l=e(o,t,t?n:!1);for(;l;){if(l===o.firstChild){if(s)return!1;s=!0}const c=r?!1:l.disabled||l.getAttribute("aria-disabled")==="true";if(!l.hasAttribute("tabindex")||!yo(l,i)||c)l=e(o,l,n);else return l.focus(),!0}return!1}const et=d.forwardRef(function(t,n){const{actions:r,autoFocus:e=!1,autoFocusItem:i=!1,children:s,className:l,disabledItemsFocusable:c=!1,disableListWrap:u=!1,onKeyDown:m,variant:g="selectedMenu",...f}=t,v=d.useRef(null),M=d.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});go(()=>{e&&v.current.focus()},[e]),d.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(p,{direction:b})=>{const h=!v.current.style.width;if(p.clientHeight<v.current.clientHeight&&h){const k=`${Eo(ko(p))}px`;v.current.style[b==="rtl"?"paddingLeft":"paddingRight"]=k,v.current.style.width=`calc(100% + ${k})`}return v.current}}),[]);const N=p=>{const b=v.current,h=p.key;if(p.ctrlKey||p.metaKey||p.altKey){m&&m(p);return}const z=zo(Io(b));if(h==="ArrowDown")p.preventDefault(),K(b,z,u,c,Z);else if(h==="ArrowUp")p.preventDefault(),K(b,z,u,c,io);else if(h==="Home")p.preventDefault(),K(b,null,u,c,Z);else if(h==="End")p.preventDefault(),K(b,null,u,c,io);else if(h.length===1){const x=M.current,A=h.toLowerCase(),W=performance.now();x.keys.length>0&&(W-x.lastTime>500?(x.keys=[],x.repeating=!0,x.previousKeyMatched=!0):x.repeating&&A!==x.keys[0]&&(x.repeating=!1)),x.lastTime=W,x.keys.push(A);const T=z&&!x.repeating&&yo(z,x);x.previousKeyMatched&&(T||K(b,z,!1,c,Z,x))?p.preventDefault():x.previousKeyMatched=!1}m&&m(p)},P=fo(v,n);let y=-1;d.Children.forEach(s,(p,b)=>{if(!d.isValidElement(p)){y===b&&(y+=1,y>=s.length&&(y=-1));return}p.props.disabled||(g==="selectedMenu"&&p.props.selected||y===-1)&&(y=b),y===b&&(p.props.disabled||p.props.muiSkipListHighlight||p.type.muiSkipListHighlight)&&(y+=1,y>=s.length&&(y=-1))});const $=d.Children.map(s,(p,b)=>{if(b===y){const h={};return i&&(h.autoFocus=!0),p.props.tabIndex===void 0&&g==="selectedMenu"&&(h.tabIndex=0),d.cloneElement(p,h)}return p});return I.jsx(tt,{role:"menu",ref:P,className:l,onKeyDown:N,tabIndex:e?0:-1,...f,children:$})});function nt(o){return U("MuiMenu",o)}D("MuiMenu",["root","paper","list"]);const rt={vertical:"top",horizontal:"right"},at={vertical:"top",horizontal:"left"},it=o=>{const{classes:t}=o;return q({root:["root"],paper:["paper"],list:["list"]},nt,t)},st=R(bo,{shouldForwardProp:o=>to(o)||o==="classes",name:"MuiMenu",slot:"Root"})({}),lt=R(Lo,{name:"MuiMenu",slot:"Paper"})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ct=R(et,{name:"MuiMenu",slot:"List"})({outline:0}),dt=d.forwardRef(function(t,n){const r=_({props:t,name:"MuiMenu"}),{autoFocus:e=!0,children:i,className:s,disableAutoFocusItem:l=!1,MenuListProps:c={},onClose:u,open:m,PaperProps:g={},PopoverClasses:f,transitionDuration:v="auto",TransitionProps:{onEntering:M,...N}={},variant:P="selectedMenu",slots:y={},slotProps:$={},...p}=r,b=Mo(),h={...r,autoFocus:e,disableAutoFocusItem:l,MenuListProps:c,onEntering:M,PaperProps:g,transitionDuration:v,TransitionProps:N,variant:P},k=it(h),z=e&&!l&&m,x=d.useRef(null),A=(w,L)=>{x.current&&x.current.adjustStyleForScrollbar(w,{direction:b?"rtl":"ltr"}),M&&M(w,L)},W=w=>{w.key==="Tab"&&(w.preventDefault(),u&&u(w,"tabKeyDown"))};let T=-1;d.Children.map(i,(w,L)=>{d.isValidElement(w)&&(w.props.disabled||(P==="selectedMenu"&&w.props.selected||T===-1)&&(T=L))});const C={slots:y,slotProps:{list:c,transition:N,paper:g,...$}},E=Co({elementType:y.root,externalSlotProps:$.root,ownerState:h,className:[k.root,s]}),[J,Q]=ro("paper",{className:k.paper,elementType:lt,externalForwardedProps:C,shouldForwardComponentProp:!0,ownerState:h}),[X,G]=ro("list",{className:j(k.list,c.className),elementType:ct,shouldForwardComponentProp:!0,externalForwardedProps:C,getSlotProps:w=>({...w,onKeyDown:L=>{var no;W(L),(no=w.onKeyDown)==null||no.call(w,L)}}),ownerState:h}),V=typeof C.slotProps.transition=="function"?C.slotProps.transition(h):C.slotProps.transition;return I.jsx(st,{onClose:u,anchorOrigin:{vertical:"bottom",horizontal:b?"right":"left"},transformOrigin:b?rt:at,slots:{root:y.root,paper:J,backdrop:y.backdrop,...y.transition&&{transition:y.transition}},slotProps:{root:E,paper:Q,backdrop:typeof $.backdrop=="function"?$.backdrop(h):$.backdrop,transition:{...V,onEntering:(...w)=>{var L;A(...w),(L=V==null?void 0:V.onEntering)==null||L.call(V,...w)}}},open:m,ref:n,transitionDuration:v,ownerState:h,...p,classes:f,children:I.jsx(X,{actions:x,autoFocus:e&&(T===-1||l),autoFocusItem:z,variant:P,...G,children:i})})}),ut=F(dt)`
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
`;function pt(o){return S.createElement(ut,{anchorEl:o.anchorEl,open:o.open,onClose:o.onClose},o.children)}const so=D("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),lo=D("MuiListItemIcon",["root","alignItemsFlexStart"]);function Kt(o){return U("MuiListItemText",o)}const co=D("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function gt(o){return U("MuiMenuItem",o)}const H=D("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ft=(o,t)=>{const{ownerState:n}=o;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},bt=o=>{const{disabled:t,dense:n,divider:r,disableGutters:e,selected:i,classes:s}=o,c=q({root:["root",n&&"dense",t&&"disabled",!e&&"gutters",r&&"divider",i&&"selected"]},gt,s);return{...s,...c}},vt=R(po,{shouldForwardProp:o=>to(o)||o==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ft})(uo(({theme:o})=>({...o.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.selected}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity),[`&.${H.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.focusOpacity}`)}},[`&.${H.selected}:hover`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity)}},[`&.${H.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${H.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`& + .${so.root}`]:{marginTop:o.spacing(1),marginBottom:o.spacing(1)},[`& + .${so.inset}`]:{marginLeft:52},[`& .${co.root}`]:{marginTop:0,marginBottom:0},[`& .${co.inset}`]:{paddingLeft:36},[`& .${lo.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[o.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...o.typography.body2,[`& .${lo.root} svg`]:{fontSize:"1.25rem"}}}]}))),mt=d.forwardRef(function(t,n){const r=_({props:t,name:"MuiMenuItem"}),{autoFocus:e=!1,component:i="li",dense:s=!1,divider:l=!1,disableGutters:c=!1,focusVisibleClassName:u,role:m="menuitem",tabIndex:g,className:f,...v}=r,M=d.useContext(oo),N=d.useMemo(()=>({dense:s||M.dense||!1,disableGutters:c}),[M.dense,s,c]),P=d.useRef(null);go(()=>{e&&P.current&&P.current.focus()},[e]);const y={...r,dense:N.dense,divider:l,disableGutters:c},$=bt(r),p=fo(P,n);let b;return r.disabled||(b=g!==void 0?g:-1),I.jsx(oo.Provider,{value:N,children:I.jsx(vt,{ref:p,role:m,tabIndex:b,component:i,focusVisibleClassName:j($.focusVisible,u),className:j($.root,f),...v,ownerState:y,classes:$})})}),ho={black:a.color.black,gold:a.color.gold[400],gray:a.color.gray[600],red:a.color.red[500],teal:a.color.teal[700]},yt=["black","gold","gray","red","teal"],ht=F(mt)`
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
		${({$truncateText:o})=>o&&`
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	}
`,xt=F.div`
	display: inline-flex;

    ${({$color:o})=>`
        & svg {
            color: ${ho[o]}
        }
    `}
`;function $t({mIcon:o,color:t="black",attrs:n,title:r,onClick:e,disabled:i,selected:s=!1,truncateText:l,autoFocus:c,tabIndex:u,className:m,...g}){const f="children"in g?g.children:null,v="label"in g?g.label:"";if(!Object.keys(ho).includes(t))throw new Error("The menu item component only accepts the following colors: "+yt.join(", ")+`. The color provided was "${t}"`);const M=d.useMemo(()=>({title:r===!0&&typeof v=="string"?v:typeof r=="string"?r:void 0,...n}),[n,r,v]);return d.createElement(ht,{...M,onClick:e,disabled:i,selected:s,className:["menu-item",m].filter(Boolean).join(" "),disableRipple:!0,$truncateText:l,autoFocus:c,tabIndex:u,"aria-selected":s,...g},f??d.createElement(d.Fragment,null,o&&d.createElement(xt,{className:"icon",$color:t},d.createElement(o,null)),d.createElement("div",{className:"menuLabel"},d.createElement("span",null,v))))}function wt({onClose:o,open:t,anchorEl:n,items:r,onChange:e,placeholder:i,value:s}){const l=d.useMemo(()=>[...i?[{label:i,value:void 0}]:[],...r].map(({onClick:m,...g},f)=>{const v=function(){m&&m(),e&&e(g.value),o()};return S.createElement($t,{key:f,...g,selected:e&&s===g.value,onClick:v})}),[r,e,o,i,s]);return S.createElement(pt,{anchorEl:n,open:t,onClose:o},l)}function St(o,t=!0){const n=o!==void 0?o:t,r=Array.isArray(n)?n:[n],e=i=>typeof i=="function"?i():i;return t?r.every(e):r.some(e)}function eo(o,t,n=!0){const r=Array.isArray(o),e=d.useMemo(()=>r?o:[o],[r,o]),i=d.useMemo(()=>e.filter(s=>St(s[t],n)),[n,e,t]);return r?i:i.length>0}const Mt=d.createContext(null),It={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},Ct={black:"specialized",blue:"info",gray:"secondary",lightBlue:"secondary",red:"danger",teal:"info",white:"secondary",yellow:"primary"},xo=function({size:t="medium",alignItems:n="center",ref:r,...e}){var i,s;const l=e.mIcon,c=!e.label&&l,u=e.iconPosition||"left",m=l&&S.createElement(qo,{as:l,style:{color:e.mIconColor},$isAdornment:!c,$inherit:t==="inherit",$size:c?"md":"sm"}),g=eo(e,"disabled",!1);Y("[MOS Button] The `color` prop is deprecated and should no longer be used, it will be removed in a future version. Use the `intent` prop instead.",e.color!==void 0),Y("[MOS Button] The `icon` variant is deprecated. Mosaic now infers an icon variant from the use of the `mIcon` prop and the lack of a `label` prop.",e.variant==="icon"),Y("[MOS Button] The `outlined` variant is deprecated and should no longer be used, it will be removed in a future version. Use either `contained` or `text`",e.variant==="outlined");const f=(s=(i=e.intent)!==null&&i!==void 0?i:Ct[e.color])!==null&&s!==void 0?s:"secondary",v={$variant:e.variant,$intent:f,$bluntLeft:e.bluntLeft,$bluntRight:e.bluntRight,disabled:e.invisible||g,size:t,$size:t,onClick:e.onClick,onBlur:e.onBlur,href:e.href,name:e.name,id:e.id,type:e.type||"button",as:e.as,ref:r,disableRipple:!0,"aria-label":typeof e.label=="string"?e.label:typeof e.tooltip=="string"?e.tooltip:void 0,...e.muiAttrs},M=["button",e.className,e.variant==="icon"?"iconButton":"normalButton",e.fullWidth&&"fullWidth",e.invisible&&"invisible",`size_${t}`,`variant_${e.variant}`].filter(Boolean).join(" ");return S.createElement(Vo,{...e.attrs,$fullWidth:e.fullWidth,className:M,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},S.createElement(_o,{...v,$fullWidth:e.fullWidth,$isIconButton:c,$alignItems:n},S.createElement(Jo,null),S.createElement(Qo,{$size:t},u==="left"&&m,e.label&&(typeof e.label=="string"?S.createElement(Xo,null,e.label):e.label),u==="right"&&m)))};function Bt(o){const{anchorProps:t,tooltipProps:n}=Bo(),[r,e]=d.useState(null);function i(f){e(f.currentTarget)}function s(){e(null)}const l=f=>{i(f),o.onClick&&o.onClick(f)},c=o.popoverEvent==="onHover",u=f=>{o.onMouseEnter&&o.onMouseEnter(f),o.popover&&c&&i(f),t.onMouseEnter()},m=f=>{o.onMouseLeave&&o.onMouseLeave(f),o.popover&&c&&s(),t.onMouseLeave()},g=eo(o.menuItems||[],"show",!0);return o.menuItems&&!g.length?null:S.createElement(S.Fragment,null,S.createElement(xo,{...o,onClick:l,onMouseEnter:u,onMouseLeave:m,ref:t.ref}),o.tooltip&&S.createElement(Po,{...n},o.tooltip),o.popover?S.createElement(bo,{open:!!r,anchorEl:r,onClose:s,disableRestoreFocus:!0,style:c?{pointerEvents:"none"}:null,...It},S.createElement(Mt.Provider,{value:{onClose:s}},o.popover)):o.menuItems?S.createElement(wt,{items:g,onChange:o.menuOnChange,value:o.menuValue,anchorEl:r,open:!!r,onClose:s}):null)}function Pt(o){return eo(o,"show")?o.menuItems||o.popover||o.tooltip?S.createElement(Bt,{...o}):S.createElement(xo,{...o}):null}const Ht=d.memo(Pt);export{Ht as B,oo as L,wt as M,$t as a,Kt as b,tt as c,dt as d,Ao as e,mt as f,St as g,et as h,pt as i,Mt as j,co as l,eo as u};
