import{j as C}from"./jsx-runtime-CexXSJP5.js";import{r as v}from"./index-BP8_t0zE.js";import{i as Y,a as Z,g as oo,s as _,b as e,d as g,j as f,u as ao,_ as lo,e as k,f as eo}from"./generateUtilityClasses-Bq4SLC4n.js";import{r as ro}from"./createSvgIcon-CLmY5moR.js";import{s as B,t as n}from"./theme-Cyujm90X.js";import{c as io}from"./createSvgIcon-CYUKOE7w.js";import{u as to}from"./useIsFocusVisible-De2ftVE9.js";import{B as V}from"./ButtonBase-B9MACyLv.js";var D={},co=Y;Object.defineProperty(D,"__esModule",{value:!0});var F=D.default=void 0,no=co(ro()),so=C;F=D.default=(0,no.default)((0,so.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");const po=io(C.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function uo(o){return oo("MuiChip",o)}const l=Z("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),fo=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],vo=o=>{const{classes:a,disabled:i,size:r,color:t,iconColor:s,onDelete:d,clickable:p,variant:u}=o,y={root:["root",u,i&&"disabled",`size${e(r)}`,`color${e(t)}`,p&&"clickable",p&&`clickableColor${e(t)}`,d&&"deletable",d&&`deletableColor${e(t)}`,`${u}${e(t)}`],label:["label",`label${e(r)}`],avatar:["avatar",`avatar${e(r)}`,`avatarColor${e(t)}`],icon:["icon",`icon${e(r)}`,`iconColor${e(s)}`],deleteIcon:["deleteIcon",`deleteIcon${e(r)}`,`deleteIconColor${e(t)}`,`deleteIcon${e(u)}Color${e(t)}`]};return eo(y,uo,a)},go=_("div",{name:"MuiChip",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o,{color:r,iconColor:t,clickable:s,onDelete:d,size:p,variant:u}=i;return[{[`& .${l.avatar}`]:a.avatar},{[`& .${l.avatar}`]:a[`avatar${e(p)}`]},{[`& .${l.avatar}`]:a[`avatarColor${e(r)}`]},{[`& .${l.icon}`]:a.icon},{[`& .${l.icon}`]:a[`icon${e(p)}`]},{[`& .${l.icon}`]:a[`iconColor${e(t)}`]},{[`& .${l.deleteIcon}`]:a.deleteIcon},{[`& .${l.deleteIcon}`]:a[`deleteIcon${e(p)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIconColor${e(r)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIcon${e(u)}Color${e(r)}`]},a.root,a[`size${e(p)}`],a[`color${e(r)}`],s&&a.clickable,s&&r!=="default"&&a[`clickableColor${e(r)})`],d&&a.deletable,d&&r!=="default"&&a[`deletableColor${e(r)}`],a[u],a[`${u}${e(r)}`]]}})(({theme:o,ownerState:a})=>{const i=o.palette.mode==="light"?o.palette.grey[700]:o.palette.grey[300];return g({maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:i,fontSize:o.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${l.icon}`]:g({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&g({color:o.vars?o.vars.palette.Chip.defaultIconColor:i},a.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:g({WebkitTapHighlightColor:"transparent",color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.26)`:f(o.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.4)`:f(o.palette.text.primary,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:o.vars?`rgba(${o.vars.palette[a.color].contrastTextChannel} / 0.7)`:f(o.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(o.vars||o).palette[a.color].main,color:(o.vars||o).palette[a.color].contrastText},a.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:f(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}})},({theme:o,ownerState:a})=>g({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:f(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:f(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)},"&:active":{boxShadow:(o.vars||o).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}}),({theme:o,ownerState:a})=>g({},a.variant==="outlined"&&{backgroundColor:"transparent",border:o.vars?`1px solid ${o.vars.palette.Chip.defaultBorder}`:`1px solid ${o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(o.vars||o).palette[a.color].main,border:`1px solid ${o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:f(o.palette[a.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:f(o.palette[a.color].main,o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.focusOpacity})`:f(o.palette[a.color].main,o.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:f(o.palette[a.color].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].main}}})),bo=_("span",{name:"MuiChip",slot:"Label",overridesResolver:(o,a)=>{const{ownerState:i}=o,{size:r}=i;return[a.label,a[`label${e(r)}`]]}})(({ownerState:o})=>g({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},o.variant==="outlined"&&{paddingLeft:11,paddingRight:11},o.size==="small"&&{paddingLeft:8,paddingRight:8},o.size==="small"&&o.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function N(o){return o.key==="Backspace"||o.key==="Delete"}const K=v.forwardRef(function(a,i){const r=ao({props:a,name:"MuiChip"}),{avatar:t,className:s,clickable:d,color:p="default",component:u,deleteIcon:y,disabled:m=!1,icon:x,label:G,onClick:O,onDelete:b,onKeyDown:P,onKeyUp:M,size:U="medium",variant:W="filled",tabIndex:w,skipFocusWhenDisabled:q=!1}=r,A=lo(r,fo),I=v.useRef(null),H=to(I,i),L=c=>{c.stopPropagation(),b&&b(c)},J=c=>{c.currentTarget===c.target&&N(c)&&c.preventDefault(),P&&P(c)},Q=c=>{c.currentTarget===c.target&&(b&&N(c)?b(c):c.key==="Escape"&&I.current&&I.current.blur()),M&&M(c)},h=d!==!1&&O?!0:d,R=h||b?V:u||"div",z=g({},r,{component:R,disabled:m,size:U,color:p,iconColor:v.isValidElement(x)&&x.props.color||p,onDelete:!!b,clickable:h,variant:W}),$=vo(z),X=R===V?g({component:u||"div",focusVisibleClassName:$.focusVisible},b&&{disableRipple:!0}):{};let j=null;b&&(j=y&&v.isValidElement(y)?v.cloneElement(y,{className:k(y.props.className,$.deleteIcon),onClick:L}):C.jsx(po,{className:k($.deleteIcon),onClick:L}));let E=null;t&&v.isValidElement(t)&&(E=v.cloneElement(t,{className:k($.avatar,t.props.className)}));let T=null;return x&&v.isValidElement(x)&&(T=v.cloneElement(x,{className:k($.icon,x.props.className)})),C.jsxs(go,g({as:R,className:k($.root,s),disabled:h&&m?!0:void 0,onClick:O,onKeyDown:J,onKeyUp:Q,ref:H,tabIndex:q&&m?-1:w,ownerState:z},X,A,{children:[E||T,C.jsx(bo,{className:k($.label),ownerState:z,children:G}),j]}))}),S=`
	font-size: 14px;
	font-family: ${n.fontFamily};
	font-weight: ${n.fontWeight.medium};
`,Co=B(K)`
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
		${S}
		line-height: 16px;
		margin-right: 12px;
		padding: 0;
	}
`;function $o({$selected:o,disabled:a,onClick:i}){return o?a?{base:n.newColors.simplyGold[60]}:{base:n.newColors.simplyGold[100],focus:i&&n.newColors.darkerSimplyGold[100],hover:i&&n.newColors.darkerSimplyGold[100]}:{base:n.newColors.grey2[100],focus:i&&n.newColors.simplyGrey[100],hover:i&&n.newColors.simplyGrey[100]}}const yo=B(K)`
	&.MuiChip-root {
		max-width: 186px;
		color: ${n.newColors.almostBlack[100]};
		padding: 8px 16px;

		&:focus{
			box-shadow: none;
			outline: 1px solid white;
			outline-offset: -2px;
		}

		${({$selected:o,disabled:a,onClick:i})=>{const{base:r,focus:t,hover:s}=$o({$selected:o,disabled:a,onClick:i});return`
				background-color: ${r};

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
		${S}
		line-height: 16px;
		padding: 0;
	}
`,Oo=o=>{const{label:a,disabled:i,selected:r=!1,onDelete:t,onClick:s}=o,d=v.useRef();return t?C.jsx(Co,{...o,color:"default",children:o.children,title:typeof a=="string"?a:void 0,ref:d,disabled:i,deleteIcon:C.jsx(F,{"data-testid":"delete-icon-test-id"}),onDelete:t,"data-testid":"delete-chip-testid"}):C.jsx(yo,{...o,color:"default",children:o.children,title:typeof a=="string"?a:void 0,ref:d,disabled:i,$selected:r,"aria-selected":r,onClick:s,"data-testid":"chip-testid"})};export{Oo as C,K as a,F as d};
