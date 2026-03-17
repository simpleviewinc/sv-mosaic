import{r as l,R as S}from"./index-CDlOlYQx.js";import{c as W}from"./styled-components.browser.esm-CsHOGV45.js";import{t as a}from"./sizes-BeWafy6f.js";import{r as xo,c as V,a as P}from"./identifier-D-VlK421.js";import{a as j,g as G,u as _,s as L,c as q,r as to,m as uo,b as $o}from"./createSimplePaletteValueFilter-CQDqkEyb.js";import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{u as wo}from"./useId-CJY4DrkM.js";import{B as po}from"./ButtonBase-BTOUCkJL.js";import{C as So}from"./CircularProgress-DnZWjXCP.js";import{a as Mo}from"./index-fPYtWVub.js";import{a as go,u as ro}from"./useSlot-BF1fWNxP.js";import{c as Io,o as Co,e as Po,f as fo,a as Bo}from"./Popover-BARbcQa_.js";import{u as bo}from"./useEnhancedEffect-BmmhhWnX.js";import{o as Eo,b as ko,u as zo,T as Ro}from"./useTooltip-CvILwQ8N.js";function Lo(o){return G("MuiButton",o)}const D=j("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),Fo=l.createContext({}),To=l.createContext(void 0),Wo=o=>{const{color:t,disableElevation:n,fullWidth:r,size:e,variant:s,loading:i,loadingPosition:c,classes:d}=o,b={root:["root",i&&"loading",s,`${s}${P(t)}`,`size${P(e)}`,`${s}Size${P(e)}`,`color${P(t)}`,n&&"disableElevation",r&&"fullWidth",i&&`loadingPosition${P(c)}`],startIcon:["icon","startIcon",`iconSize${P(e)}`],endIcon:["icon","endIcon",`iconSize${P(e)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},m=q(b,Lo,d);return{...d,...m}},vo=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],No=L(po,{shouldForwardProp:o=>to(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,t[n.variant],t[`${n.variant}${P(n.color)}`],t[`size${P(n.size)}`],t[`${n.variant}Size${P(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,n.loading&&t.loading]}})(uo(({theme:o})=>{const t=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],n=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${D.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(o.vars||o).shadows[2],"&:hover":{boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2]}},"&:active":{boxShadow:(o.vars||o).shadows[8]},[`&.${D.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${D.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${D.disabled}`]:{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(o.palette).filter($o()).map(([r])=>({props:{color:r},style:{"--variant-textColor":(o.vars||o).palette[r].main,"--variant-outlinedColor":(o.vars||o).palette[r].main,"--variant-outlinedBorder":o.alpha((o.vars||o).palette[r].main,.5),"--variant-containedColor":(o.vars||o).palette[r].contrastText,"--variant-containedBg":(o.vars||o).palette[r].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(o.vars||o).palette[r].dark,"--variant-textBg":o.alpha((o.vars||o).palette[r].main,(o.vars||o).palette.action.hoverOpacity),"--variant-outlinedBorder":(o.vars||o).palette[r].main,"--variant-outlinedBg":o.alpha((o.vars||o).palette[r].main,(o.vars||o).palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":o.alpha((o.vars||o).palette.text.primary,(o.vars||o).palette.action.hoverOpacity),"--variant-outlinedBg":o.alpha((o.vars||o).palette.text.primary,(o.vars||o).palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${D.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${D.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${D.loading}`]:{color:"transparent"}}}]}})),Do=L("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.startIcon,n.loading&&t.startIconLoadingStart,t[`iconSize${P(n.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...vo]})),jo=L("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.endIcon,n.loading&&t.endIconLoadingEnd,t[`iconSize${P(n.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...vo]})),Oo=L("span",{name:"MuiButton",slot:"LoadingIndicator"})(({theme:o})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(o.vars||o).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),ao=L("span",{name:"MuiButton",slot:"LoadingIconPlaceholder"})({display:"inline-block",width:"1em",height:"1em"}),Ao=l.forwardRef(function(t,n){const r=l.useContext(Fo),e=l.useContext(To),s=xo(r,t),i=_({props:s,name:"MuiButton"}),{children:c,color:d="primary",component:b="button",className:m,disabled:p=!1,disableElevation:g=!1,disableFocusRipple:v=!1,endIcon:M,focusVisibleClassName:F,fullWidth:B=!1,id:y,loading:$=null,loadingIndicator:u,loadingPosition:f="center",size:h="medium",startIcon:k,type:z,variant:x="text",...O}=i,N=wo(y),T=u??I.jsx(So,{"aria-labelledby":N,color:"inherit",size:16}),C={...i,color:d,component:b,disabled:p,disableElevation:g,disableFocusRipple:v,fullWidth:B,loading:$,loadingIndicator:T,loadingPosition:f,size:h,type:z,variant:x},E=Wo(C),J=(k||$&&f==="start")&&I.jsx(Do,{className:E.startIcon,ownerState:C,children:k||I.jsx(ao,{className:E.loadingIconPlaceholder,ownerState:C})}),Q=(M||$&&f==="end")&&I.jsx(jo,{className:E.endIcon,ownerState:C,children:M||I.jsx(ao,{className:E.loadingIconPlaceholder,ownerState:C})}),X=e||"",U=typeof $=="boolean"?I.jsx("span",{className:E.loadingWrapper,style:{display:"contents"},children:$&&I.jsx(Oo,{className:E.loadingIndicator,ownerState:C,children:T})}):null;return I.jsxs(No,{ownerState:C,className:V(r.className,E.root,m,X),component:b,disabled:p||$,focusRipple:!v,focusVisibleClassName:V(E.focusVisible,F),ref:n,type:z,id:$?N:y,...O,classes:E,children:[J,f!=="end"&&U,c,f==="end"&&U,Q]})}),Vo=W("span")(({$fullWidth:o})=>`
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
		`}};function Ho({$size:o,$isIconButton:t}){return t?[0]:o==="inherit"?[0,"0.25em"]:o==="small"?[0,3]:o==="xsmall"?[0,2]:[0,4]}const Uo={xsmall:"24px",small:"32px",medium:"36px",large:"40px",xlarge:"44px",inherit:"auto"};function Go({$fullWidth:o,$isIconButton:t,$size:n}){const r=Uo[n];return o?["100%",r]:t?n==="xsmall"?["24px",r]:n==="small"?["32px",r]:["36px",r]:[void 0,r]}const _o=W(Ao)(({$intent:o,$variant:t,$fullWidth:n,$size:r,$isIconButton:e,$bluntLeft:s,$bluntRight:i})=>{const c=Ho({$size:r,$isIconButton:e}),[d,b]=Go({$fullWidth:n,$isIconButton:e,$size:r});return`
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
			height: ${b};
			font-size: ${r==="inherit"?"inherit":a.fontSize.text.md};
			font-weight: ${a.weight.medium};
			line-height: ${r==="inherit"?"inherit":a.line.normal};
			min-width: 0;
			padding: ${a.spacing(...c)};
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
			transition-property: background-color, box-shadow;
			vertical-align: middle;

			${s?`
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			`:""}

			${i?`
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			`:""}

			${r!=="inherit"?"":`
				margin-left: -0.25em;
				margin-right: -0.25em;
			`}

			${d?`
				width: ${d};
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
	`}),qo=W.div`
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
`,Jo=W.span.attrs({className:"Mos-ButtonGradient"})`
	position: absolute;
	inset: 0;
	border-radius: ${a.rounded.md};
	opacity: 0;
	transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`,Qo=W.div.attrs({className:"Mos-ButtonContent"})`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({$size:o})=>`
		gap: ${a.spacing(o==="inherit"?"0.25em":o==="xsmall"?1:2)};
	`}
`,Xo=W.div.attrs({className:"Mos-ButtonLabel"})`
	align-self: baseline;
	margin-bottom: -1px;
`,oo=l.createContext({});function Yo(o){return G("MuiList",o)}j("MuiList",["root","padding","dense","subheader"]);const Zo=o=>{const{classes:t,disablePadding:n,dense:r,subheader:e}=o;return q({root:["root",!n&&"padding",r&&"dense",e&&"subheader"]},Yo,t)},ot=L("ul",{name:"MuiList",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:o})=>!o.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:o})=>o.subheader,style:{paddingTop:0}}]}),tt=l.forwardRef(function(t,n){const r=_({props:t,name:"MuiList"}),{children:e,className:s,component:i="ul",dense:c=!1,disablePadding:d=!1,subheader:b,...m}=r,p=l.useMemo(()=>({dense:c}),[c]),g={...r,component:i,dense:c,disablePadding:d},v=Zo(g);return I.jsx(oo.Provider,{value:p,children:I.jsxs(ot,{as:i,className:V(v.root,s),ref:n,ownerState:g,...m,children:[b,e]})})});function Y(o,t,n){return o===t?o.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:o.firstChild}function io(o,t,n){return o===t?n?o.firstChild:o.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:o.lastChild}function mo(o,t){if(t===void 0)return!0;let n=o.innerText;return n===void 0&&(n=o.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.startsWith(t.keys.join(""))}function K(o,t,n,r,e,s){let i=!1,c=e(o,t,t?n:!1);for(;c;){if(c===o.firstChild){if(i)return!1;i=!0}const d=r?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!mo(c,s)||d)c=e(o,c,n);else return c.focus(),!0}return!1}const et=l.forwardRef(function(t,n){const{actions:r,autoFocus:e=!1,autoFocusItem:s=!1,children:i,className:c,disabledItemsFocusable:d=!1,disableListWrap:b=!1,onKeyDown:m,variant:p="selectedMenu",...g}=t,v=l.useRef(null),M=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});bo(()=>{e&&v.current.focus()},[e]),l.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(u,{direction:f})=>{const h=!v.current.style.width;if(u.clientHeight<v.current.clientHeight&&h){const k=`${Io(Co(u))}px`;v.current.style[f==="rtl"?"paddingLeft":"paddingRight"]=k,v.current.style.width=`calc(100% + ${k})`}return v.current}}),[]);const F=u=>{const f=v.current,h=u.key;if(u.ctrlKey||u.metaKey||u.altKey){m&&m(u);return}const z=Po(Eo(f));if(h==="ArrowDown")u.preventDefault(),K(f,z,b,d,Y);else if(h==="ArrowUp")u.preventDefault(),K(f,z,b,d,io);else if(h==="Home")u.preventDefault(),K(f,null,b,d,Y);else if(h==="End")u.preventDefault(),K(f,null,b,d,io);else if(h.length===1){const x=M.current,O=h.toLowerCase(),N=performance.now();x.keys.length>0&&(N-x.lastTime>500?(x.keys=[],x.repeating=!0,x.previousKeyMatched=!0):x.repeating&&O!==x.keys[0]&&(x.repeating=!1)),x.lastTime=N,x.keys.push(O);const T=z&&!x.repeating&&mo(z,x);x.previousKeyMatched&&(T||K(f,z,!1,d,Y,x))?u.preventDefault():x.previousKeyMatched=!1}m&&m(u)},B=go(v,n);let y=-1;l.Children.forEach(i,(u,f)=>{if(!l.isValidElement(u)){y===f&&(y+=1,y>=i.length&&(y=-1));return}u.props.disabled||(p==="selectedMenu"&&u.props.selected||y===-1)&&(y=f),y===f&&(u.props.disabled||u.props.muiSkipListHighlight||u.type.muiSkipListHighlight)&&(y+=1,y>=i.length&&(y=-1))});const $=l.Children.map(i,(u,f)=>{if(f===y){const h={};return s&&(h.autoFocus=!0),u.props.tabIndex===void 0&&p==="selectedMenu"&&(h.tabIndex=0),l.cloneElement(u,h)}return u});return I.jsx(tt,{role:"menu",ref:B,className:c,onKeyDown:F,tabIndex:e?0:-1,...g,children:$})});function nt(o){return G("MuiMenu",o)}j("MuiMenu",["root","paper","list"]);const rt={vertical:"top",horizontal:"right"},at={vertical:"top",horizontal:"left"},it=o=>{const{classes:t}=o;return q({root:["root"],paper:["paper"],list:["list"]},nt,t)},st=L(fo,{shouldForwardProp:o=>to(o)||o==="classes",name:"MuiMenu",slot:"Root"})({}),lt=L(Bo,{name:"MuiMenu",slot:"Paper"})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ct=L(et,{name:"MuiMenu",slot:"List"})({outline:0}),dt=l.forwardRef(function(t,n){const r=_({props:t,name:"MuiMenu"}),{autoFocus:e=!0,children:s,className:i,disableAutoFocusItem:c=!1,MenuListProps:d={},onClose:b,open:m,PaperProps:p={},PopoverClasses:g,transitionDuration:v="auto",TransitionProps:{onEntering:M,...F}={},variant:B="selectedMenu",slots:y={},slotProps:$={},...u}=r,f=Mo(),h={...r,autoFocus:e,disableAutoFocusItem:c,MenuListProps:d,onEntering:M,PaperProps:p,transitionDuration:v,TransitionProps:F,variant:B},k=it(h),z=e&&!c&&m,x=l.useRef(null),O=(w,R)=>{x.current&&x.current.adjustStyleForScrollbar(w,{direction:f?"rtl":"ltr"}),M&&M(w,R)},N=w=>{w.key==="Tab"&&(w.preventDefault(),b&&b(w,"tabKeyDown"))};let T=-1;l.Children.map(s,(w,R)=>{l.isValidElement(w)&&(w.props.disabled||(B==="selectedMenu"&&w.props.selected||T===-1)&&(T=R))});const C={slots:y,slotProps:{list:d,transition:F,paper:p,...$}},E=ko({elementType:y.root,externalSlotProps:$.root,ownerState:h,className:[k.root,i]}),[J,Q]=ro("paper",{className:k.paper,elementType:lt,externalForwardedProps:C,shouldForwardComponentProp:!0,ownerState:h}),[X,U]=ro("list",{className:V(k.list,d.className),elementType:ct,shouldForwardComponentProp:!0,externalForwardedProps:C,getSlotProps:w=>({...w,onKeyDown:R=>{var no;N(R),(no=w.onKeyDown)==null||no.call(w,R)}}),ownerState:h}),A=typeof C.slotProps.transition=="function"?C.slotProps.transition(h):C.slotProps.transition;return I.jsx(st,{onClose:b,anchorOrigin:{vertical:"bottom",horizontal:f?"right":"left"},transformOrigin:f?rt:at,slots:{root:y.root,paper:J,backdrop:y.backdrop,...y.transition&&{transition:y.transition}},slotProps:{root:E,paper:Q,backdrop:typeof $.backdrop=="function"?$.backdrop(h):$.backdrop,transition:{...A,onEntering:(...w)=>{var R;O(...w),(R=A==null?void 0:A.onEntering)==null||R.call(A,...w)}}},open:m,ref:n,transitionDuration:v,ownerState:h,...u,classes:g,children:I.jsx(X,{actions:x,autoFocus:e&&(T===-1||c),autoFocusItem:z,variant:B,...U,children:s})})}),ut=W(dt)`
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
`;function pt(o){return S.createElement(ut,{anchorEl:o.anchorEl,open:o.open,onClose:o.onClose},o.children)}const so=j("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),lo=j("MuiListItemIcon",["root","alignItemsFlexStart"]),co=j("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function gt(o){return G("MuiMenuItem",o)}const H=j("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ft=(o,t)=>{const{ownerState:n}=o;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},bt=o=>{const{disabled:t,dense:n,divider:r,disableGutters:e,selected:s,classes:i}=o,d=q({root:["root",n&&"dense",t&&"disabled",!e&&"gutters",r&&"divider",s&&"selected"]},gt,i);return{...i,...d}},vt=L(po,{shouldForwardProp:o=>to(o)||o==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ft})(uo(({theme:o})=>({...o.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.selected}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity),[`&.${H.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.focusOpacity}`)}},[`&.${H.selected}:hover`]:{backgroundColor:o.alpha((o.vars||o).palette.primary.main,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:o.alpha((o.vars||o).palette.primary.main,(o.vars||o).palette.action.selectedOpacity)}},[`&.${H.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${H.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`& + .${so.root}`]:{marginTop:o.spacing(1),marginBottom:o.spacing(1)},[`& + .${so.inset}`]:{marginLeft:52},[`& .${co.root}`]:{marginTop:0,marginBottom:0},[`& .${co.inset}`]:{paddingLeft:36},[`& .${lo.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[o.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...o.typography.body2,[`& .${lo.root} svg`]:{fontSize:"1.25rem"}}}]}))),mt=l.forwardRef(function(t,n){const r=_({props:t,name:"MuiMenuItem"}),{autoFocus:e=!1,component:s="li",dense:i=!1,divider:c=!1,disableGutters:d=!1,focusVisibleClassName:b,role:m="menuitem",tabIndex:p,className:g,...v}=r,M=l.useContext(oo),F=l.useMemo(()=>({dense:i||M.dense||!1,disableGutters:d}),[M.dense,i,d]),B=l.useRef(null);bo(()=>{e&&B.current&&B.current.focus()},[e]);const y={...r,dense:F.dense,divider:c,disableGutters:d},$=bt(r),u=go(B,n);let f;return r.disabled||(f=p!==void 0?p:-1),I.jsx(oo.Provider,{value:F,children:I.jsx(vt,{ref:u,role:m,tabIndex:f,component:s,focusVisibleClassName:V($.focusVisible,b),className:V($.root,g),...v,ownerState:y,classes:$})})}),yo={black:a.color.black,gold:a.color.gold[400],gray:a.color.gray[600],red:a.color.red[500],teal:a.color.teal[700]},yt=["black","gold","gray","red","teal"],ht=W(mt)`
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
`,xt=W.div`
	display: inline-flex;

    ${({$color:o})=>`
        & svg {
            color: ${yo[o]}
        }
    `}
`;function $t({mIcon:o,color:t="black",attrs:n,title:r,onClick:e,disabled:s,selected:i=!1,truncateText:c,autoFocus:d,tabIndex:b,className:m,...p}){const g="children"in p?p.children:null,v="label"in p?p.label:"";if(!Object.keys(yo).includes(t))throw new Error("The menu item component only accepts the following colors: "+yt.join(", ")+`. The color provided was "${t}"`);const M=l.useMemo(()=>({title:r===!0&&typeof v=="string"?v:typeof r=="string"?r:void 0,...n}),[n,r,v]);return l.createElement(ht,{...M,onClick:e,disabled:s,selected:i,className:["menu-item",m].filter(Boolean).join(" "),disableRipple:!0,$truncateText:c,autoFocus:d,tabIndex:b,"aria-selected":i,...p},g??l.createElement(l.Fragment,null,o&&l.createElement(xt,{className:"icon",$color:t},l.createElement(o,null)),l.createElement("div",{className:"menuLabel"},l.createElement("span",null,v))))}function wt({onClose:o,open:t,anchorEl:n,items:r,onChange:e,placeholder:s,value:i}){const c=l.useMemo(()=>[...s?[{label:s,value:void 0}]:[],...r].map(({onClick:m,...p},g)=>{const v=function(){m&&m(),e&&e(p.value),o()};return S.createElement($t,{key:g,...p,selected:e&&i===p.value,onClick:v})}),[r,e,o,s,i]);return S.createElement(pt,{anchorEl:n,open:t,onClose:o},c)}function St(o,t=!0){const n=o!==void 0?o:t,r=Array.isArray(n)?n:[n],e=s=>typeof s=="function"?s():s;return t?r.every(e):r.some(e)}function eo(o,t,n=!0){const r=Array.isArray(o),e=l.useMemo(()=>r?o:[o],[r,o]),s=l.useMemo(()=>e.filter(i=>St(i[t],n)),[n,e,t]);return r?s:s.length>0}function Z(o,t=!0){const n=l.useRef(!1);l.useEffect(()=>{n.current||!t||(console.warn(o),n.current=!0)})}const Mt=l.createContext(null),It={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},Ct={black:"specialized",blue:"info",gray:"secondary",lightBlue:"secondary",red:"danger",teal:"info",white:"secondary",yellow:"primary"},ho=function({size:t="medium",alignItems:n="center",ref:r,...e}){var s,i;const c=e.mIcon,d=!e.label&&c,b=e.iconPosition||"left",m=c&&S.createElement(qo,{as:c,style:{color:e.mIconColor},$isAdornment:!d,$inherit:t==="inherit",$size:d?"md":"sm"}),p=eo(e,"disabled",!1);Z("[MOS Button] The `color` prop is deprecated and should no longer be used, it will be removed in a future version. Use the `intent` prop instead.",e.color!==void 0),Z("[MOS Button] The `icon` variant is deprecated. Mosaic now infers an icon variant from the use of the `mIcon` prop and the lack of a `label` prop.",e.variant==="icon"),Z("[MOS Button] The `outlined` variant is deprecated and should no longer be used, it will be removed in a future version. Use either `contained` or `text`",e.variant==="outlined");const g=(i=(s=e.intent)!==null&&s!==void 0?s:Ct[e.color])!==null&&i!==void 0?i:"secondary",v={$variant:e.variant,$intent:g,$bluntLeft:e.bluntLeft,$bluntRight:e.bluntRight,disabled:e.invisible||p,size:t,$size:t,onClick:e.onClick,onBlur:e.onBlur,href:e.href,name:e.name,id:e.id,type:e.type||"button",as:e.as,ref:r,disableRipple:!0,"aria-label":typeof e.label=="string"?e.label:typeof e.tooltip=="string"?e.tooltip:void 0,...e.muiAttrs},M=["button",e.className,e.variant==="icon"?"iconButton":"normalButton",e.fullWidth&&"fullWidth",e.invisible&&"invisible",`size_${t}`,`variant_${e.variant}`].filter(Boolean).join(" ");return S.createElement(Vo,{...e.attrs,$fullWidth:e.fullWidth,className:M,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},S.createElement(_o,{...v,$fullWidth:e.fullWidth,$isIconButton:d,$alignItems:n},S.createElement(Jo,null),S.createElement(Qo,{$size:t},b==="left"&&m,e.label&&(typeof e.label=="string"?S.createElement(Xo,null,e.label):e.label),b==="right"&&m)))};function Pt(o){const{anchorProps:t,tooltipProps:n}=zo(),[r,e]=l.useState(null);function s(g){e(g.currentTarget)}function i(){e(null)}const c=g=>{s(g),o.onClick&&o.onClick(g)},d=o.popoverEvent==="onHover",b=g=>{o.onMouseEnter&&o.onMouseEnter(g),o.popover&&d&&s(g),t.onMouseEnter()},m=g=>{o.onMouseLeave&&o.onMouseLeave(g),o.popover&&d&&i(),t.onMouseLeave()},p=eo(o.menuItems||[],"show",!0);return o.menuItems&&!p.length?null:S.createElement(S.Fragment,null,S.createElement(ho,{...o,onClick:c,onMouseEnter:b,onMouseLeave:m,ref:t.ref}),o.tooltip&&S.createElement(Ro,{...n},o.tooltip),o.popover?S.createElement(fo,{open:!!r,anchorEl:r,onClose:i,disableRestoreFocus:!0,style:d?{pointerEvents:"none"}:null,...It},S.createElement(Mt.Provider,{value:{onClose:i}},o.popover)):o.menuItems?S.createElement(wt,{items:p,onChange:o.menuOnChange,value:o.menuValue,anchorEl:r,open:!!r,onClose:i}):null)}function Bt(o){return eo(o,"show")?o.menuItems||o.popover||o.tooltip?S.createElement(Pt,{...o}):S.createElement(ho,{...o}):null}const Kt=l.memo(Bt);export{Kt as B,wt as M,$t as a,dt as b,Ao as c,pt as d,Mt as e,St as g,eo as u};
