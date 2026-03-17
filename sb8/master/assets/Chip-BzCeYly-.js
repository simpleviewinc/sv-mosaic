import{r as u,R as z}from"./index-CDlOlYQx.js";import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./createSvgIcon-CpiYeT0y.js";import{c as U}from"./styled-components.browser.esm-CsHOGV45.js";import{t as n}from"./sizes-BeWafy6f.js";import{a as l,c as k}from"./identifier-D-VlK421.js";import{a as io,g as no,s as W,m as co,b as I,u as so,c as po}from"./createSimplePaletteValueFilter-CQDqkEyb.js";import{a as uo,u as j}from"./useSlot-BF1fWNxP.js";import{B as N}from"./ButtonBase-BTOUCkJL.js";import{t as F}from"./testIds-B6Pox1zA.js";const go=h(m.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),bo=h(m.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));function vo(o){return no("MuiChip",o)}const r=io("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),fo=o=>{const{classes:e,disabled:a,size:t,color:c,iconColor:g,onDelete:p,clickable:s,variant:d}=o,C={root:["root",d,a&&"disabled",`size${l(t)}`,`color${l(c)}`,s&&"clickable",s&&`clickableColor${l(c)}`,p&&"deletable",p&&`deletableColor${l(c)}`,`${d}${l(c)}`],label:["label",`label${l(t)}`],avatar:["avatar",`avatar${l(t)}`,`avatarColor${l(c)}`],icon:["icon",`icon${l(t)}`,`iconColor${l(g)}`],deleteIcon:["deleteIcon",`deleteIcon${l(t)}`,`deleteIconColor${l(c)}`,`deleteIcon${l(d)}Color${l(c)}`]};return po(C,vo,e)},$o=W("div",{name:"MuiChip",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o,{color:t,iconColor:c,clickable:g,onDelete:p,size:s,variant:d}=a;return[{[`& .${r.avatar}`]:e.avatar},{[`& .${r.avatar}`]:e[`avatar${l(s)}`]},{[`& .${r.avatar}`]:e[`avatarColor${l(t)}`]},{[`& .${r.icon}`]:e.icon},{[`& .${r.icon}`]:e[`icon${l(s)}`]},{[`& .${r.icon}`]:e[`iconColor${l(c)}`]},{[`& .${r.deleteIcon}`]:e.deleteIcon},{[`& .${r.deleteIcon}`]:e[`deleteIcon${l(s)}`]},{[`& .${r.deleteIcon}`]:e[`deleteIconColor${l(t)}`]},{[`& .${r.deleteIcon}`]:e[`deleteIcon${l(d)}Color${l(t)}`]},e.root,e[`size${l(s)}`],e[`color${l(t)}`],g&&e.clickable,g&&t!=="default"&&e[`clickableColor${l(t)}`],p&&e.deletable,p&&t!=="default"&&e[`deletableColor${l(t)}`],e[d],e[`${d}${l(t)}`]]}})(co(({theme:o})=>{const e=o.palette.mode==="light"?o.palette.grey[700]:o.palette.grey[300];return{maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,lineHeight:1.5,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${r.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${r.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:e,fontSize:o.typography.pxToRem(12)},[`& .${r.avatarColorPrimary}`]:{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark},[`& .${r.avatarColorSecondary}`]:{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark},[`& .${r.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${r.icon}`]:{marginLeft:5,marginRight:-6},[`& .${r.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:o.alpha((o.vars||o).palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.alpha((o.vars||o).palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${r.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${r.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(o.palette).filter(I(["contrastText"])).map(([a])=>({props:{color:a},style:{backgroundColor:(o.vars||o).palette[a].main,color:(o.vars||o).palette[a].contrastText,[`& .${r.deleteIcon}`]:{color:o.alpha((o.vars||o).palette[a].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[a].contrastText}}}})),{props:a=>a.iconColor===a.color,style:{[`& .${r.icon}`]:{color:o.vars?o.vars.palette.Chip.defaultIconColor:e}}},{props:a=>a.iconColor===a.color&&a.color!=="default",style:{[`& .${r.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${r.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette.action.selected,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.focusOpacity}`)}}},...Object.entries(o.palette).filter(I(["dark"])).map(([a])=>({props:{color:a,onDelete:!0},style:{[`&.${r.focusVisible}`]:{background:(o.vars||o).palette[a].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.alpha((o.vars||o).palette.action.selected,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.hoverOpacity}`)},[`&.${r.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette.action.selected,`${(o.vars||o).palette.action.selectedOpacity} + ${(o.vars||o).palette.action.focusOpacity}`)},"&:active":{boxShadow:(o.vars||o).shadows[1]}}},...Object.entries(o.palette).filter(I(["dark"])).map(([a])=>({props:{color:a,clickable:!0},style:{[`&:hover, &.${r.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:o.vars?`1px solid ${o.vars.palette.Chip.defaultBorder}`:`1px solid ${o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${r.clickable}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${r.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`& .${r.avatar}`]:{marginLeft:4},[`& .${r.avatarSmall}`]:{marginLeft:2},[`& .${r.icon}`]:{marginLeft:4},[`& .${r.iconSmall}`]:{marginLeft:2},[`& .${r.deleteIcon}`]:{marginRight:5},[`& .${r.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(o.palette).filter(I()).map(([a])=>({props:{variant:"outlined",color:a},style:{color:(o.vars||o).palette[a].main,border:`1px solid ${o.alpha((o.vars||o).palette[a].main,.7)}`,[`&.${r.clickable}:hover`]:{backgroundColor:o.alpha((o.vars||o).palette[a].main,(o.vars||o).palette.action.hoverOpacity)},[`&.${r.focusVisible}`]:{backgroundColor:o.alpha((o.vars||o).palette[a].main,(o.vars||o).palette.action.focusOpacity)},[`& .${r.deleteIcon}`]:{color:o.alpha((o.vars||o).palette[a].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[a].main}}}}))]}})),Co=W("span",{name:"MuiChip",slot:"Label",overridesResolver:(o,e)=>{const{ownerState:a}=o,{size:t}=a;return[e.label,e[`label${l(t)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function K(o){return o.key==="Backspace"||o.key==="Delete"}const yo=u.forwardRef(function(e,a){const t=so({props:e,name:"MuiChip"}),{avatar:c,className:g,clickable:p,color:s="default",component:d,deleteIcon:C,disabled:w=!1,icon:y,label:B,onClick:x,onDelete:f,onKeyDown:D,onKeyUp:L,size:H="medium",variant:A="filled",tabIndex:_,skipFocusWhenDisabled:q=!1,slots:G={},slotProps:J={},...Q}=t,X=u.useRef(null),Y=uo(X,a),E=i=>{i.stopPropagation(),f(i)},Z=i=>{i.currentTarget===i.target&&K(i)&&i.preventDefault(),D&&D(i)},oo=i=>{i.currentTarget===i.target&&f&&K(i)&&f(i),L&&L(i)},S=p!==!1&&x?!0:p,R=S||f?N:d||"div",P={...t,component:R,disabled:w,size:H,color:s,iconColor:u.isValidElement(y)&&y.props.color||s,onDelete:!!f,clickable:S,variant:A},$=fo(P),ao=R===N?{component:d||"div",focusVisibleClassName:$.focusVisible,...f&&{disableRipple:!0}}:{};let O=null;f&&(O=C&&u.isValidElement(C)?u.cloneElement(C,{className:k(C.props.className,$.deleteIcon),onClick:E}):m.jsx(bo,{className:$.deleteIcon,onClick:E}));let T=null;c&&u.isValidElement(c)&&(T=u.cloneElement(c,{className:k($.avatar,c.props.className)}));let M=null;y&&u.isValidElement(y)&&(M=u.cloneElement(y,{className:k($.icon,y.props.className)}));const V={slots:G,slotProps:J},[ro,eo]=j("root",{elementType:$o,externalForwardedProps:{...V,...Q},ownerState:P,shouldForwardComponentProp:!0,ref:Y,className:k($.root,g),additionalProps:{disabled:S&&w?!0:void 0,tabIndex:q&&w?-1:_,...ao},getSlotProps:i=>({...i,onClick:b=>{var v;(v=i.onClick)==null||v.call(i,b),x==null||x(b)},onKeyDown:b=>{var v;(v=i.onKeyDown)==null||v.call(i,b),Z(b)},onKeyUp:b=>{var v;(v=i.onKeyUp)==null||v.call(i,b),oo(b)}})}),[lo,to]=j("label",{elementType:Co,externalForwardedProps:V,ownerState:P,className:$.label});return m.jsxs(ro,{as:R,...eo,children:[T||M,m.jsx(lo,{...to,children:B}),O]})}),mo={primary:`
		--bg: ${n.color.gold[400]};
		--border: 0 0;
		--shadow: var(--mos-shadow-sm);
		--icon: ${n.color.gold[950]};
		--weight: ${n.weight.regular};

		--over-bg: ${n.color.gold[300]};
	`,secondary:`
		--bg: ${n.color.white};
		--border: var(--mos-border-medium);
		--shadow: var(--mos-shadow-sm);
		--icon: ${n.color.gray[500]};
		--weight: ${n.weight.regular};

		--over-bg: ${n.color.gray[100]};
	`,tertiary:`
		--bg: ${n.color.gray[100]};
		--border: var(--mos-border-medium);
		--shadow: var(--mos-shadow-sm);
		--icon: ${n.color.gray[500]};
		--weight: ${n.weight.medium};

		--over-bg: ${n.color.gray[300]};
	`},xo=U(yo)(({$fullWidth:o,$variant:e,onDelete:a,onClick:t})=>`
	${mo[e]};

	background-color: var(--bg);
	font-weight: var(--weight);
	line-height: ${n.line.normal};
	padding: 0 ${n.spacing(4)};
	justify-content: space-between;

	${!a&&!t?`
		box-shadow: var(--border);
	`:`
		box-shadow: var(--border), var(--shadow);
	`}

	${a?`
		padding-right: ${n.spacing(3)};
	`:""}

	${o?`
		width: 100%;
	`:`
		max-width: 176px;
	`}

	${t?`
		text-decoration: underline;

		&:hover {
			background-color: var(--over-bg);
		}
	`:""}

	&:active {
		box-shadow: var(--border);
	}

	&.Mui-focusVisible {
		background-color: var(--bg);
		outline: 2px solid ${n.color.gray[700]};
		outline-offset: 3px;
	}

	&.MuiChip-deletable.Mui-focusVisible {
		background-color: var(--bg);
		outline: none;
	}

	.MuiChip-label {
		padding: 0;
		margin-bottom: -1px;
	}
`),ko=U.button`
	&& {
		all: unset;
		color: var(--icon);
		cursor: pointer;
		margin: 0;
		margin-left: ${n.spacing(2)};
		display: flex;
		position: relative;
		border-radius: 9999em;

		&:focus-visible {
			outline: 2px solid ${n.color.gray[700]};
			outline-offset: 1px;
		}
	}

	&& svg {
		height: 16px;
		width: 16px;
	}
`,To=({children:o,selected:e=!1,onDelete:a,label:t,fullWidth:c,variant:g,...p})=>{const s=u.useRef(void 0),d=g!==void 0?g:e?"primary":"secondary";return z.createElement(xo,{...p,$variant:d,"aria-selected":e,color:"default","data-testid":F.CHIP,deleteIcon:z.createElement(ko,{type:"button","data-testid":F.CHIP_DELETE_ICON,tabIndex:0},z.createElement(go,null)),label:t,onDelete:a,ref:s,tabIndex:a?-1:void 0,title:t,$fullWidth:c,disableRipple:p.onClick?!0:void 0})};export{To as C,go as a,yo as b};
