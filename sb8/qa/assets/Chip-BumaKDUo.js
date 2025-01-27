import{r as Z,j as $}from"./jsx-runtime-DKBipoO1.js";import{g as oo,r as C}from"./index-P8U4y8pz.js";import{i as ao,a as lo,g as ro,s as F,b as r,d as v,j as f,u as eo,_ as io,e as m,f as to}from"./generateUtilityClasses-1sHYEbWh.js";import{r as co}from"./createSvgIcon-DFewkeLR.js";import{s as K,t as n}from"./theme-BWODkkBA.js";import{c as no}from"./createSvgIcon-RC5eQ6Qp.js";import{u as so}from"./useIsFocusVisible-wVqIivVs.js";import{B as N}from"./ButtonBase-BdV3oO8q.js";import{t as V}from"./testIds-DZf96GK8.js";var k={},_;function po(){if(_)return k;_=1;var o=ao();Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var a=o(co()),i=Z();return k.default=(0,a.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),k}var uo=po();const fo=oo(uo),Co=no($.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function vo(o){return ro("MuiChip",o)}const l=lo("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),go=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],bo=o=>{const{classes:a,disabled:i,size:e,color:t,iconColor:s,onDelete:d,clickable:p,variant:u}=o,y={root:["root",u,i&&"disabled",`size${r(e)}`,`color${r(t)}`,p&&"clickable",p&&`clickableColor${r(t)}`,d&&"deletable",d&&`deletableColor${r(t)}`,`${u}${r(t)}`],label:["label",`label${r(e)}`],avatar:["avatar",`avatar${r(e)}`,`avatarColor${r(t)}`],icon:["icon",`icon${r(e)}`,`iconColor${r(s)}`],deleteIcon:["deleteIcon",`deleteIcon${r(e)}`,`deleteIconColor${r(t)}`,`deleteIcon${r(u)}Color${r(t)}`]};return to(y,vo,a)},$o=F("div",{name:"MuiChip",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o,{color:e,iconColor:t,clickable:s,onDelete:d,size:p,variant:u}=i;return[{[`& .${l.avatar}`]:a.avatar},{[`& .${l.avatar}`]:a[`avatar${r(p)}`]},{[`& .${l.avatar}`]:a[`avatarColor${r(e)}`]},{[`& .${l.icon}`]:a.icon},{[`& .${l.icon}`]:a[`icon${r(p)}`]},{[`& .${l.icon}`]:a[`iconColor${r(t)}`]},{[`& .${l.deleteIcon}`]:a.deleteIcon},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(p)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(u)}Color${r(e)}`]},a.root,a[`size${r(p)}`],a[`color${r(e)}`],s&&a.clickable,s&&e!=="default"&&a[`clickableColor${r(e)})`],d&&a.deletable,d&&e!=="default"&&a[`deletableColor${r(e)}`],a[u],a[`${u}${r(e)}`]]}})(({theme:o,ownerState:a})=>{const i=o.palette.mode==="light"?o.palette.grey[700]:o.palette.grey[300];return v({maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:i,fontSize:o.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${l.icon}`]:v({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&v({color:o.vars?o.vars.palette.Chip.defaultIconColor:i},a.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:v({WebkitTapHighlightColor:"transparent",color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.26)`:f.alpha(o.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.4)`:f.alpha(o.palette.text.primary,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:o.vars?`rgba(${o.vars.palette[a.color].contrastTextChannel} / 0.7)`:f.alpha(o.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(o.vars||o).palette[a.color].main,color:(o.vars||o).palette[a.color].contrastText},a.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:f.alpha(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}})},({theme:o,ownerState:a})=>v({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:f.alpha(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:f.alpha(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)},"&:active":{boxShadow:(o.vars||o).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}}),({theme:o,ownerState:a})=>v({},a.variant==="outlined"&&{backgroundColor:"transparent",border:o.vars?`1px solid ${o.vars.palette.Chip.defaultBorder}`:`1px solid ${o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(o.vars||o).palette[a.color].main,border:`1px solid ${o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:f.alpha(o.palette[a.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:f.alpha(o.palette[a.color].main,o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.focusOpacity})`:f.alpha(o.palette[a.color].main,o.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:f.alpha(o.palette[a.color].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].main}}})),yo=F("span",{name:"MuiChip",slot:"Label",overridesResolver:(o,a)=>{const{ownerState:i}=o,{size:e}=i;return[a.label,a[`label${r(e)}`]]}})(({ownerState:o})=>v({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},o.variant==="outlined"&&{paddingLeft:11,paddingRight:11},o.size==="small"&&{paddingLeft:8,paddingRight:8},o.size==="small"&&o.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function B(o){return o.key==="Backspace"||o.key==="Delete"}const S=C.forwardRef(function(a,i){const e=eo({props:a,name:"MuiChip"}),{avatar:t,className:s,clickable:d,color:p="default",component:u,deleteIcon:y,disabled:I=!1,icon:x,label:U,onClick:P,onDelete:g,onKeyDown:O,onKeyUp:M,size:W="medium",variant:q="filled",tabIndex:w,skipFocusWhenDisabled:H=!1}=e,A=io(e,go),h=C.useRef(null),J=so(h,i),E=c=>{c.stopPropagation(),g&&g(c)},Q=c=>{c.currentTarget===c.target&&B(c)&&c.preventDefault(),O&&O(c)},X=c=>{c.currentTarget===c.target&&(g&&B(c)?g(c):c.key==="Escape"&&h.current&&h.current.blur()),M&&M(c)},R=d!==!1&&P?!0:d,z=R||g?N:u||"div",D=v({},e,{component:z,disabled:I,size:W,color:p,iconColor:C.isValidElement(x)&&x.props.color||p,onDelete:!!g,clickable:R,variant:q}),b=bo(D),Y=z===N?v({component:u||"div",focusVisibleClassName:b.focusVisible},g&&{disableRipple:!0}):{};let L=null;g&&(L=y&&C.isValidElement(y)?C.cloneElement(y,{className:m(y.props.className,b.deleteIcon),onClick:E}):$.jsx(Co,{className:m(b.deleteIcon),onClick:E}));let j=null;t&&C.isValidElement(t)&&(j=C.cloneElement(t,{className:m(b.avatar,t.props.className)}));let T=null;return x&&C.isValidElement(x)&&(T=C.cloneElement(x,{className:m(b.icon,x.props.className)})),$.jsxs($o,v({as:z,className:m(b.root,s),disabled:R&&I?!0:void 0,onClick:P,onKeyDown:Q,onKeyUp:X,ref:J,tabIndex:H&&I?-1:w,ownerState:D},Y,A,{children:[j||T,$.jsx(yo,{className:m(b.label),ownerState:D,children:U}),L]}))}),G=`
	font-size: 14px;
	font-family: ${n.fontFamily};
	font-weight: ${n.fontWeight.medium};
`,xo=K(S)`
	&.MuiChip-root {
		background-color: ${o=>o.disabled?n.newColors.simplyGold[60]:n.newColors.simplyGold[100]};
		color: ${n.newColors.almostBlack[100]};
		max-width: 186px;
		padding: 8px 16px;
	}

	.MuiChip-deleteIcon {
		color: ${n.newColors.almostBlack[100]} !important;
		margin: 0 !important;
		height: 16px;
		width: 16px;

		&:hover {
			color: ${n.newColors.almostBlack[100]} !important;
		}
	}

	& .MuiChip-label {
		${G}
		line-height: 16px;
		margin-right: 12px;
		padding: 0;
	}
`;function mo({$selected:o,disabled:a,onClick:i}){return o?a?{base:n.newColors.simplyGold[60]}:{base:n.newColors.simplyGold[100],focus:i&&n.newColors.darkerSimplyGold[100],hover:i&&n.newColors.darkerSimplyGold[100]}:{base:n.newColors.grey2[100],focus:i&&n.newColors.simplyGrey[100],hover:i&&n.newColors.simplyGrey[100]}}const ko=K(S)`
	&.MuiChip-root {
		max-width: 186px;
		color: ${n.newColors.almostBlack[100]};
		padding: 8px 16px;

		&:focus{
			box-shadow: none;
			outline: 1px solid white;
			outline-offset: -2px;
		}

		${({$selected:o,disabled:a,onClick:i})=>{const{base:e,focus:t,hover:s}=mo({$selected:o,disabled:a,onClick:i});return`
				background-color: ${e};

				${t&&`
					&:focus{
						background-color: ${t}
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
		${G}
		line-height: 16px;
		padding: 0;
	}
`,Lo=({children:o,selected:a=!1,onDelete:i,...e})=>{const t=C.useRef(),{label:s}=e,d={...e,color:"default",title:s,ref:t,"data-testid":V.CHIP};return i?$.jsx(xo,{deleteIcon:$.jsx(fo,{"data-testid":V.CHIP_DELETE_ICON}),onDelete:i,...d}):$.jsx(ko,{...d,$selected:a,"aria-selected":a})};export{Lo as C,S as a,fo as b};
