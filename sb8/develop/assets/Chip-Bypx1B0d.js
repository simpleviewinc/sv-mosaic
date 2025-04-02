import{r as Y,j as $}from"./jsx-runtime-EKYJJIwR.js";import{g as Z,r as v}from"./index-D0AnReJb.js";import{h as w,a as aa,g as oa,s as K,e,b,j as f,u as la,_ as ra,d as k,f as ea}from"./generateUtilityClasses-BA0DUeUY.js";import{r as ia}from"./createSvgIcon-B3veWrfC.js";import{t as p,s as S}from"./theme-BSoCkN4E.js";import{c as ta}from"./createSvgIcon-Bee5RQ5R.js";import{u as ca}from"./useIsFocusVisible-CvEUtp4E.js";import{B as V}from"./ButtonBase-C35XO5Ki.js";import{t as N}from"./testIds-Dso8kRSM.js";var m={},_;function na(){if(_)return m;_=1;var a=w();Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var o=a(ia()),i=Y();return m.default=(0,o.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),m}var sa=na();const da=Z(sa),pa=ta($.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function ua(a){return oa("MuiChip",a)}const l=aa("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),fa=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],va=a=>{const{classes:o,disabled:i,size:r,color:t,iconColor:n,onDelete:s,clickable:d,variant:u}=a,y={root:["root",u,i&&"disabled",`size${e(r)}`,`color${e(t)}`,d&&"clickable",d&&`clickableColor${e(t)}`,s&&"deletable",s&&`deletableColor${e(t)}`,`${u}${e(t)}`],label:["label",`label${e(r)}`],avatar:["avatar",`avatar${e(r)}`,`avatarColor${e(t)}`],icon:["icon",`icon${e(r)}`,`iconColor${e(n)}`],deleteIcon:["deleteIcon",`deleteIcon${e(r)}`,`deleteIconColor${e(t)}`,`deleteIcon${e(u)}Color${e(t)}`]};return ea(y,ua,o)},ba=K("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:i}=a,{color:r,iconColor:t,clickable:n,onDelete:s,size:d,variant:u}=i;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${e(d)}`]},{[`& .${l.avatar}`]:o[`avatarColor${e(r)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${e(d)}`]},{[`& .${l.icon}`]:o[`iconColor${e(t)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${e(d)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${e(r)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIcon${e(u)}Color${e(r)}`]},o.root,o[`size${e(d)}`],o[`color${e(r)}`],n&&o.clickable,n&&r!=="default"&&o[`clickableColor${e(r)})`],s&&o.deletable,s&&r!=="default"&&o[`deletableColor${e(r)}`],o[u],o[`${u}${e(r)}`]]}})(({theme:a,ownerState:o})=>{const i=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return b({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:i,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:b({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&b({color:a.vars?a.vars.palette.Chip.defaultIconColor:i},o.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:b({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:f.alpha(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:f.alpha(a.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:f.alpha(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:f.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>b({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:f.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:f.alpha(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>b({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:f.alpha(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:f.alpha(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:f.alpha(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:f.alpha(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),ga=K("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:i}=a,{size:r}=i;return[o.label,o[`label${e(r)}`]]}})(({ownerState:a})=>b({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.variant==="outlined"&&{paddingLeft:11,paddingRight:11},a.size==="small"&&{paddingLeft:8,paddingRight:8},a.size==="small"&&a.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function F(a){return a.key==="Backspace"||a.key==="Delete"}const Ca=v.forwardRef(function(o,i){const r=la({props:o,name:"MuiChip"}),{avatar:t,className:n,clickable:s,color:d="default",component:u,deleteIcon:y,disabled:I=!1,icon:x,label:B,onClick:P,onDelete:g,onKeyDown:O,onKeyUp:E,size:U="medium",variant:W="filled",tabIndex:q,skipFocusWhenDisabled:G=!1}=r,H=ra(r,fa),R=v.useRef(null),A=ca(R,i),L=c=>{c.stopPropagation(),g&&g(c)},J=c=>{c.currentTarget===c.target&&F(c)&&c.preventDefault(),O&&O(c)},Q=c=>{c.currentTarget===c.target&&(g&&F(c)?g(c):c.key==="Escape"&&R.current&&R.current.blur()),E&&E(c)},h=s!==!1&&P?!0:s,z=h||g?V:u||"div",D=b({},r,{component:z,disabled:I,size:U,color:d,iconColor:v.isValidElement(x)&&x.props.color||d,onDelete:!!g,clickable:h,variant:W}),C=va(D),X=z===V?b({component:u||"div",focusVisibleClassName:C.focusVisible},g&&{disableRipple:!0}):{};let j=null;g&&(j=y&&v.isValidElement(y)?v.cloneElement(y,{className:k(y.props.className,C.deleteIcon),onClick:L}):$.jsx(pa,{className:k(C.deleteIcon),onClick:L}));let M=null;t&&v.isValidElement(t)&&(M=v.cloneElement(t,{className:k(C.avatar,t.props.className)}));let T=null;return x&&v.isValidElement(x)&&(T=v.cloneElement(x,{className:k(C.icon,x.props.className)})),$.jsxs(ba,b({as:z,className:k(C.root,n),disabled:h&&I?!0:void 0,onClick:P,onKeyDown:J,onKeyUp:Q,ref:A,tabIndex:G&&I?-1:q,ownerState:D},X,H,{children:[M||T,$.jsx(ga,{className:k(C.label),ownerState:D,children:B}),j]}))});function $a({$selected:a,disabled:o,onClick:i,onDelete:r}){return a||r?o?{base:p.newColors.simplyGold[60]}:{base:p.newColors.simplyGold[100],focus:i&&p.newColors.darkerSimplyGold[100],hover:i&&p.newColors.darkerSimplyGold[100]}:{base:p.newColors.grey2[100],focus:i&&p.newColors.simplyGrey[100],hover:i&&p.newColors.simplyGrey[100]}}const ya=S(Ca)`
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

		${({$selected:a,disabled:o,onClick:i,onDelete:r})=>{const{base:t,focus:n,hover:s}=$a({$selected:a,disabled:o,onClick:i,onDelete:r});return`
				background-color: ${t};

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
`,xa=S.button`
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
`,Ea=({children:a,selected:o=!1,onDelete:i,label:r,...t})=>{const n=v.useRef();return $.jsx(ya,{...t,$selected:o,"aria-selected":o,color:"default","data-testid":N.CHIP,deleteIcon:$.jsx(xa,{type:"button","data-testid":N.CHIP_DELETE_ICON,tabIndex:0,children:$.jsx(da,{})}),label:r,onDelete:i,ref:n,tabIndex:i?-1:void 0,title:r})};export{Ea as C,Ca as a,da as b};
