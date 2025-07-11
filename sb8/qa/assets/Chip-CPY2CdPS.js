import{g as Y,r as f,R as P}from"./index-D0AnReJb.js";import{r as Z,b as r,a as b,e as u,_ as aa}from"./identifier-P2c7yk_w.js";import{r as oa}from"./createSvgIcon-1nOp1Fw5.js";import{r as la,j as k}from"./jsx-runtime-EKYJJIwR.js";import{s as B}from"./styled-components.browser.esm-D9jdcGim.js";import{t as v}from"./sizes-xhpoGYFi.js";import{a as ea,g as ra,s as F,u as ta,c as x,b as ia}from"./generateUtilityClasses-Cqx37_87.js";import{c as ca}from"./createSvgIcon-yORtlijU.js";import{u as na}from"./useIsFocusVisible-DX7TaDmt.js";import{B as N}from"./ButtonBase-B88uyuTX.js";import{t as _}from"./testIds-BKutUmNQ.js";var m={},K;function sa(){if(K)return m;K=1;var a=Z();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var o=a(oa()),t=la();return m.default=(0,o.default)((0,t.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),m}var da=sa();const pa=Y(da),ua=ca(k.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function fa(a){return ra("MuiChip",a)}const l=ea("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),ba=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],va=a=>{const{classes:o,disabled:t,size:e,color:i,iconColor:s,onDelete:n,clickable:d,variant:p}=a,$={root:["root",p,t&&"disabled",`size${r(e)}`,`color${r(i)}`,d&&"clickable",d&&`clickableColor${r(i)}`,n&&"deletable",n&&`deletableColor${r(i)}`,`${p}${r(i)}`],label:["label",`label${r(e)}`],avatar:["avatar",`avatar${r(e)}`,`avatarColor${r(i)}`],icon:["icon",`icon${r(e)}`,`iconColor${r(s)}`],deleteIcon:["deleteIcon",`deleteIcon${r(e)}`,`deleteIconColor${r(i)}`,`deleteIcon${r(p)}Color${r(i)}`]};return ia($,fa,o)},Ca=F("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a,{color:e,iconColor:i,clickable:s,onDelete:n,size:d,variant:p}=t;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${r(d)}`]},{[`& .${l.avatar}`]:o[`avatarColor${r(e)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${r(d)}`]},{[`& .${l.icon}`]:o[`iconColor${r(i)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(d)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(p)}Color${r(e)}`]},o.root,o[`size${r(d)}`],o[`color${r(e)}`],s&&o.clickable,s&&e!=="default"&&o[`clickableColor${r(e)})`],n&&o.deletable,n&&e!=="default"&&o[`deletableColor${r(e)}`],o[p],o[`${p}${r(e)}`]]}})(({theme:a,ownerState:o})=>{const t=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return b({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:b({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&b({color:a.vars?a.vars.palette.Chip.defaultIconColor:t},o.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:b({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:u.alpha(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:u.alpha(a.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:u.alpha(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:u.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>b({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:u.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:u.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>b({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:u.alpha(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:u.alpha(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:u.alpha(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:u.alpha(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),ga=F("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:t}=a,{size:e}=t;return[o.label,o[`label${r(e)}`]]}})(({ownerState:a})=>b({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.variant==="outlined"&&{paddingLeft:11,paddingRight:11},a.size==="small"&&{paddingLeft:8,paddingRight:8},a.size==="small"&&a.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function S(a){return a.key==="Backspace"||a.key==="Delete"}const $a=f.forwardRef(function(o,t){const e=ta({props:o,name:"MuiChip"}),{avatar:i,className:s,clickable:n,color:d="default",component:p,deleteIcon:$,disabled:I=!1,icon:y,label:U,onClick:O,onDelete:C,onKeyDown:E,onKeyUp:L,size:W="medium",variant:q="filled",tabIndex:G,skipFocusWhenDisabled:H=!1}=e,A=aa(e,ba),R=f.useRef(null),J=na(R,t),M=c=>{c.stopPropagation(),C&&C(c)},w=c=>{c.currentTarget===c.target&&S(c)&&c.preventDefault(),E&&E(c)},Q=c=>{c.currentTarget===c.target&&(C&&S(c)?C(c):c.key==="Escape"&&R.current&&R.current.blur()),L&&L(c)},h=n!==!1&&O?!0:n,z=h||C?N:p||"div",D=b({},e,{component:z,disabled:I,size:W,color:d,iconColor:f.isValidElement(y)&&y.props.color||d,onDelete:!!C,clickable:h,variant:q}),g=va(D),X=z===N?b({component:p||"div",focusVisibleClassName:g.focusVisible},C&&{disableRipple:!0}):{};let T=null;C&&(T=$&&f.isValidElement($)?f.cloneElement($,{className:x($.props.className,g.deleteIcon),onClick:M}):k.jsx(ua,{className:x(g.deleteIcon),onClick:M}));let V=null;i&&f.isValidElement(i)&&(V=f.cloneElement(i,{className:x(g.avatar,i.props.className)}));let j=null;return y&&f.isValidElement(y)&&(j=f.cloneElement(y,{className:x(g.icon,y.props.className)})),k.jsxs(Ca,b({as:z,className:x(g.root,s),disabled:h&&I?!0:void 0,onClick:O,onKeyDown:w,onKeyUp:Q,ref:J,tabIndex:H&&I?-1:G,ownerState:D},X,A,{children:[V||j,k.jsx(ga,{className:x(g.label),ownerState:D,children:U}),T]}))});function ya({$selected:a,disabled:o,onClick:t,onDelete:e}){return a||e?o?{base:v.newColors.simplyGold[60]}:{base:v.newColors.simplyGold[100],focus:t&&v.newColors.darkerSimplyGold[100],hover:t&&v.newColors.darkerSimplyGold[100]}:{base:v.newColors.grey2[100],focus:t&&v.newColors.simplyGrey[100],hover:t&&v.newColors.simplyGrey[100]}}const xa=B($a)`
	&&.MuiChip-root {
		color: ${v.newColors.almostBlack[100]};
		padding: 8px 16px;
		display: inline-flex;
		align-items: center;
		justify-content: space-between;

		${({$fullWidth:a})=>a?`
			width: 100%;
		`:`
			max-width: 186px;
		`}

		${({onDelete:a})=>!a&&`
			&:focus{
				box-shadow: none;
				outline: 1px solid white;
				outline-offset: -2px;
			}
		`}

		${({$selected:a,disabled:o,onClick:t,onDelete:e})=>{const{base:i,focus:s,hover:n}=ya({$selected:a,disabled:o,onClick:t,onDelete:e});return`
				background-color: ${i};

				${s&&`
					&:focus
					&:focusVisible{
						background-color: ${s}
					}
				`}

				${n&&`
					&:hover{
						background-color: ${n}
					}
				`}
			`}}
	}

	& .MuiChip-label {
		line-height: 1.4em;
		padding: 0;
	}
`,ma=B.button`
	&&& {
		all: unset;
		color: ${v.newColors.almostBlack[100]} !important;
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
`,Ta=({children:a,selected:o=!1,onDelete:t,label:e,fullWidth:i,...s})=>{const n=f.useRef();return P.createElement(xa,{...s,$selected:o,"aria-selected":o,color:"default","data-testid":_.CHIP,deleteIcon:P.createElement(ma,{type:"button","data-testid":_.CHIP_DELETE_ICON,tabIndex:0},P.createElement(pa,null)),label:e,onDelete:t,ref:n,tabIndex:t?-1:void 0,title:e,$fullWidth:i})};export{Ta as C,pa as a,$a as b};
