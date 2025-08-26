import{g as Y,r as g,R as P}from"./index-D0AnReJb.js";import{r as Z,b as l,a as v,e as u,_ as aa}from"./identifier-DOqdnZ6L.js";import{r as oa}from"./createSvgIcon-B2sN9389.js";import{r as ra,j as k}from"./jsx-runtime-EKYJJIwR.js";import{s as F}from"./styled-components.browser.esm-8X0uN6v9.js";import{t}from"./sizes-DkIXWPpc.js";import{a as la,g as ea,s as S,u as ia,c as m,b as ta}from"./generateUtilityClasses-BL8vvUJw.js";import{c as ca}from"./createSvgIcon-C3PpPknf.js";import{u as na}from"./useIsFocusVisible-o8lB1h8w.js";import{B as N}from"./ButtonBase-Dg-QHo0d.js";import{t as _}from"./testIds-DLbO0bd9.js";var x={},K;function sa(){if(K)return x;K=1;var a=Z();Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var o=a(oa()),i=ra();return x.default=(0,o.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),x}var da=sa();const pa=Y(da),ua=ca(k.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function ga(a){return ea("MuiChip",a)}const r=la("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),va=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],ba=a=>{const{classes:o,disabled:i,size:e,color:c,iconColor:b,onDelete:p,clickable:s,variant:d}=a,C={root:["root",d,i&&"disabled",`size${l(e)}`,`color${l(c)}`,s&&"clickable",s&&`clickableColor${l(c)}`,p&&"deletable",p&&`deletableColor${l(c)}`,`${d}${l(c)}`],label:["label",`label${l(e)}`],avatar:["avatar",`avatar${l(e)}`,`avatarColor${l(c)}`],icon:["icon",`icon${l(e)}`,`iconColor${l(b)}`],deleteIcon:["deleteIcon",`deleteIcon${l(e)}`,`deleteIconColor${l(c)}`,`deleteIcon${l(d)}Color${l(c)}`]};return ta(C,ga,o)},fa=S("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:i}=a,{color:e,iconColor:c,clickable:b,onDelete:p,size:s,variant:d}=i;return[{[`& .${r.avatar}`]:o.avatar},{[`& .${r.avatar}`]:o[`avatar${l(s)}`]},{[`& .${r.avatar}`]:o[`avatarColor${l(e)}`]},{[`& .${r.icon}`]:o.icon},{[`& .${r.icon}`]:o[`icon${l(s)}`]},{[`& .${r.icon}`]:o[`iconColor${l(c)}`]},{[`& .${r.deleteIcon}`]:o.deleteIcon},{[`& .${r.deleteIcon}`]:o[`deleteIcon${l(s)}`]},{[`& .${r.deleteIcon}`]:o[`deleteIconColor${l(e)}`]},{[`& .${r.deleteIcon}`]:o[`deleteIcon${l(d)}Color${l(e)}`]},o.root,o[`size${l(s)}`],o[`color${l(e)}`],b&&o.clickable,b&&e!=="default"&&o[`clickableColor${l(e)})`],p&&o.deletable,p&&e!=="default"&&o[`deletableColor${l(e)}`],o[d],o[`${d}${l(e)}`]]}})(({theme:a,ownerState:o})=>{const i=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return v({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${r.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${r.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:i,fontSize:a.typography.pxToRem(12)},[`& .${r.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${r.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${r.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${r.icon}`]:v({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&v({color:a.vars?a.vars.palette.Chip.defaultIconColor:i},o.color!=="default"&&{color:"inherit"})),[`& .${r.deleteIcon}`]:v({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:u.alpha(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:u.alpha(a.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:u.alpha(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${r.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:u.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${r.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>v({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:u.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${r.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:u.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${r.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>v({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${r.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${r.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${r.avatar}`]:{marginLeft:4},[`& .${r.avatarSmall}`]:{marginLeft:2},[`& .${r.icon}`]:{marginLeft:4},[`& .${r.iconSmall}`]:{marginLeft:2},[`& .${r.deleteIcon}`]:{marginRight:5},[`& .${r.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:u.alpha(a.palette[o.color].main,.7)}`,[`&.${r.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:u.alpha(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${r.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:u.alpha(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${r.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:u.alpha(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),$a=S("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:i}=a,{size:e}=i;return[o.label,o[`label${l(e)}`]]}})(({ownerState:a})=>v({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.variant==="outlined"&&{paddingLeft:11,paddingRight:11},a.size==="small"&&{paddingLeft:8,paddingRight:8},a.size==="small"&&a.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function w(a){return a.key==="Backspace"||a.key==="Delete"}const Ca=g.forwardRef(function(o,i){const e=ia({props:o,name:"MuiChip"}),{avatar:c,className:b,clickable:p,color:s="default",component:d,deleteIcon:C,disabled:I=!1,icon:y,label:U,onClick:O,onDelete:f,onKeyDown:E,onKeyUp:L,size:W="medium",variant:q="filled",tabIndex:B,skipFocusWhenDisabled:H=!1}=e,A=aa(e,va),h=g.useRef(null),J=na(h,i),M=n=>{n.stopPropagation(),f&&f(n)},G=n=>{n.currentTarget===n.target&&w(n)&&n.preventDefault(),E&&E(n)},Q=n=>{n.currentTarget===n.target&&(f&&w(n)?f(n):n.key==="Escape"&&h.current&&h.current.blur()),L&&L(n)},R=p!==!1&&O?!0:p,z=R||f?N:d||"div",D=v({},e,{component:z,disabled:I,size:W,color:s,iconColor:g.isValidElement(y)&&y.props.color||s,onDelete:!!f,clickable:R,variant:q}),$=ba(D),X=z===N?v({component:d||"div",focusVisibleClassName:$.focusVisible},f&&{disableRipple:!0}):{};let T=null;f&&(T=C&&g.isValidElement(C)?g.cloneElement(C,{className:m(C.props.className,$.deleteIcon),onClick:M}):k.jsx(ua,{className:m($.deleteIcon),onClick:M}));let V=null;c&&g.isValidElement(c)&&(V=g.cloneElement(c,{className:m($.avatar,c.props.className)}));let j=null;return y&&g.isValidElement(y)&&(j=g.cloneElement(y,{className:m($.icon,y.props.className)})),k.jsxs(fa,v({as:z,className:m($.root,b),disabled:R&&I?!0:void 0,onClick:O,onKeyDown:G,onKeyUp:Q,ref:J,tabIndex:H&&I?-1:B,ownerState:D},X,A,{children:[V||j,k.jsx($a,{className:m($.label),ownerState:D,children:U}),T]}))}),ya={primary:`
		--bg: ${t.color.gold[400]};
		--border: 0 0;
		--shadow: var(--mos-shadow-sm);
		--icon: ${t.color.gold[950]};
		--weight: ${t.weight.regular};

		--over-bg: ${t.color.gold[300]};
	`,secondary:`
		--bg: ${t.color.white};
		--border: var(--mos-border-medium);
		--shadow: var(--mos-shadow-sm);
		--icon: ${t.color.gray[500]};
		--weight: ${t.weight.regular};

		--over-bg: ${t.color.gray[100]};
	`,tertiary:`
		--bg: ${t.color.gray[100]};
		--border: var(--mos-border-medium);
		--shadow: var(--mos-shadow-sm);
		--icon: ${t.color.gray[500]};
		--weight: ${t.weight.medium};

		--over-bg: ${t.color.gray[300]};
	`},ma=F(Ca)(({$fullWidth:a,$variant:o,onDelete:i,onClick:e})=>`
	${ya[o]};

	background-color: var(--bg);
	font-weight: var(--weight);
	line-height: ${t.line.normal};
	padding: 0 ${t.spacing(4)};
	justify-content: space-between;

	${!i&&!e?`
		box-shadow: var(--border);
	`:`
		box-shadow: var(--border), var(--shadow);
	`}

	${i?`
		padding-right: ${t.spacing(3)};
	`:""}

	${a?`
		width: 100%;
	`:`
		max-width: 176px;
	`}

	${e?`
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
		outline: 2px solid ${t.color.gray[700]};
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
`),xa=F.button`
	&& {
		all: unset;
		color: var(--icon);
		cursor: pointer;
		margin: 0;
		margin-left: ${t.spacing(2)};
		display: flex;
		position: relative;
		border-radius: 9999em;

		&:focus-visible {
			outline: 2px solid ${t.color.gray[700]};
			outline-offset: 1px;
		}
	}

	&& svg {
		height: 16px;
		width: 16px;
	}
`,Ta=({children:a,selected:o=!1,onDelete:i,label:e,fullWidth:c,variant:b,...p})=>{const s=g.useRef(),d=b!==void 0?b:o?"primary":"secondary";return P.createElement(ma,{...p,$variant:d,"aria-selected":o,color:"default","data-testid":_.CHIP,deleteIcon:P.createElement(xa,{type:"button","data-testid":_.CHIP_DELETE_ICON,tabIndex:0},P.createElement(pa,null)),label:e,onDelete:i,ref:s,tabIndex:i?-1:void 0,title:e,$fullWidth:c,disableRipple:p.onClick?!0:void 0})};export{Ta as C,pa as a,Ca as b};
