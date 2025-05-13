import{g as Z,r as v,R as P}from"./index-D0AnReJb.js";import{r as w,a as aa,g as oa,s as S,e as r,b,i as f,u as la,_ as ea,d as x,f as ra}from"./generateUtilityClasses-rDn4KRfY.js";import{r as ta}from"./createSvgIcon-BLTtL5Y9.js";import{r as ia,j as k}from"./jsx-runtime-EKYJJIwR.js";import{t as p,s as B}from"./sizes-BklZZmo4.js";import{c as ca}from"./createSvgIcon-Dg0jtXvj.js";import{u as na}from"./useIsFocusVisible-CvEUtp4E.js";import{B as j}from"./ButtonBase-C5QWJNfJ.js";import{t as _}from"./testIds-Dso8kRSM.js";var m={},F;function sa(){if(F)return m;F=1;var a=w();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var o=a(ta()),t=ia();return m.default=(0,o.default)((0,t.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),m}var da=sa();const pa=Z(da),ua=ca(k.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function fa(a){return oa("MuiChip",a)}const l=aa("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),va=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],ba=a=>{const{classes:o,disabled:t,size:e,color:i,iconColor:n,onDelete:s,clickable:d,variant:u}=a,$={root:["root",u,t&&"disabled",`size${r(e)}`,`color${r(i)}`,d&&"clickable",d&&`clickableColor${r(i)}`,s&&"deletable",s&&`deletableColor${r(i)}`,`${u}${r(i)}`],label:["label",`label${r(e)}`],avatar:["avatar",`avatar${r(e)}`,`avatarColor${r(i)}`],icon:["icon",`icon${r(e)}`,`iconColor${r(n)}`],deleteIcon:["deleteIcon",`deleteIcon${r(e)}`,`deleteIconColor${r(i)}`,`deleteIcon${r(u)}Color${r(i)}`]};return ra($,fa,o)},ga=S("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a,{color:e,iconColor:i,clickable:n,onDelete:s,size:d,variant:u}=t;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${r(d)}`]},{[`& .${l.avatar}`]:o[`avatarColor${r(e)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${r(d)}`]},{[`& .${l.icon}`]:o[`iconColor${r(i)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(d)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(u)}Color${r(e)}`]},o.root,o[`size${r(d)}`],o[`color${r(e)}`],n&&o.clickable,n&&e!=="default"&&o[`clickableColor${r(e)})`],s&&o.deletable,s&&e!=="default"&&o[`deletableColor${r(e)}`],o[u],o[`${u}${r(e)}`]]}})(({theme:a,ownerState:o})=>{const t=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return b({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:b({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&b({color:a.vars?a.vars.palette.Chip.defaultIconColor:t},o.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:b({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:f.alpha(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:f.alpha(a.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:f.alpha(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:f.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>b({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:f.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:f.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>b({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:f.alpha(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:f.alpha(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:f.alpha(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:f.alpha(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),Ca=S("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:t}=a,{size:e}=t;return[o.label,o[`label${r(e)}`]]}})(({ownerState:a})=>b({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.variant==="outlined"&&{paddingLeft:11,paddingRight:11},a.size==="small"&&{paddingLeft:8,paddingRight:8},a.size==="small"&&a.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function K(a){return a.key==="Backspace"||a.key==="Delete"}const $a=v.forwardRef(function(o,t){const e=la({props:o,name:"MuiChip"}),{avatar:i,className:n,clickable:s,color:d="default",component:u,deleteIcon:$,disabled:I=!1,icon:y,label:U,onClick:O,onDelete:g,onKeyDown:E,onKeyUp:L,size:W="medium",variant:q="filled",tabIndex:G,skipFocusWhenDisabled:H=!1}=e,A=ea(e,va),R=v.useRef(null),J=na(R,t),M=c=>{c.stopPropagation(),g&&g(c)},Q=c=>{c.currentTarget===c.target&&K(c)&&c.preventDefault(),E&&E(c)},X=c=>{c.currentTarget===c.target&&(g&&K(c)?g(c):c.key==="Escape"&&R.current&&R.current.blur()),L&&L(c)},h=s!==!1&&O?!0:s,z=h||g?j:u||"div",D=b({},e,{component:z,disabled:I,size:W,color:d,iconColor:v.isValidElement(y)&&y.props.color||d,onDelete:!!g,clickable:h,variant:q}),C=ba(D),Y=z===j?b({component:u||"div",focusVisibleClassName:C.focusVisible},g&&{disableRipple:!0}):{};let T=null;g&&(T=$&&v.isValidElement($)?v.cloneElement($,{className:x($.props.className,C.deleteIcon),onClick:M}):k.jsx(ua,{className:x(C.deleteIcon),onClick:M}));let V=null;i&&v.isValidElement(i)&&(V=v.cloneElement(i,{className:x(C.avatar,i.props.className)}));let N=null;return y&&v.isValidElement(y)&&(N=v.cloneElement(y,{className:x(C.icon,y.props.className)})),k.jsxs(ga,b({as:z,className:x(C.root,n),disabled:h&&I?!0:void 0,onClick:O,onKeyDown:Q,onKeyUp:X,ref:J,tabIndex:H&&I?-1:G,ownerState:D},Y,A,{children:[V||N,k.jsx(Ca,{className:x(C.label),ownerState:D,children:U}),T]}))});function ya({$selected:a,disabled:o,onClick:t,onDelete:e}){return a||e?o?{base:p.newColors.simplyGold[60]}:{base:p.newColors.simplyGold[100],focus:t&&p.newColors.darkerSimplyGold[100],hover:t&&p.newColors.darkerSimplyGold[100]}:{base:p.newColors.grey2[100],focus:t&&p.newColors.simplyGrey[100],hover:t&&p.newColors.simplyGrey[100]}}const xa=B($a)`
	&&.MuiChip-root {
		max-width: 186px;
		color: ${p.newColors.almostBlack[100]};
		padding: 8px 16px;

		${({onDelete:a})=>!a&&`
			&:focus{
				box-shadow: none;
				outline: 1px solid white;
				outline-offset: -2px;
			}
		`}

		${({$selected:a,disabled:o,onClick:t,onDelete:e})=>{const{base:i,focus:n,hover:s}=ya({$selected:a,disabled:o,onClick:t,onDelete:e});return`
				background-color: ${i};

				${n&&`
					&:focus
					&:focusVisible{
						background-color: ${n}
					}
				`}

				${s&&`
					&:hover{
						background-color: ${s}
					}
				`}
			`}}
	}

	& .MuiChip-label {
		font-size: 14px;
		font-family: ${p.fontFamily};
		font-weight: ${p.fontWeight.medium};
		line-height: 1.4em;
		padding: 0;
	}
`,ma=B.button`
	&&& {
		all: unset;
		color: ${p.newColors.almostBlack[100]} !important;
		cursor: pointer;
		margin: 0;
		margin-left: 12px;
		display: flex;
		position: relative;

		&:focus-visible::after {
			background-color: rgba(0, 0, 0, .2);
			border-radius: 9999em;
			content: " ";
			position: absolute;
			inset: -2px;
		}
	}

	&& svg {
		height: 16px;
		width: 16px;
	}
`,La=({children:a,selected:o=!1,onDelete:t,label:e,...i})=>{const n=v.useRef();return P.createElement(xa,{...i,$selected:o,"aria-selected":o,color:"default","data-testid":_.CHIP,deleteIcon:P.createElement(ma,{type:"button","data-testid":_.CHIP_DELETE_ICON,tabIndex:0},P.createElement(pa,null)),label:e,onDelete:t,ref:n,tabIndex:t?-1:void 0,title:e})};export{La as C,pa as a,$a as b};
