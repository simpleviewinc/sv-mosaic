import{j as b}from"./jsx-runtime-CexXSJP5.js";import{r as v}from"./index-BP8_t0zE.js";import{r as Q,i as X}from"./createSvgIcon-CQgce1KM.js";import{s as E,t as n}from"./theme-CtvfJOCv.js";import{a as Y,g as Z,s as _,c as r,f as p,b as f,u as oo,_ as ao,d as $,e as lo}from"./useThemeProps-Ds-LJhvX.js";import{c as eo}from"./createSvgIcon-COYRGr1j.js";import{u as ro}from"./assertThisInitialized-CO-dlV3K.js";import{B as N}from"./ButtonBase-D0hlh4xx.js";var z={},to=X;Object.defineProperty(z,"__esModule",{value:!0});var B=z.default=void 0,io=to(Q()),co=b,no=(0,io.default)((0,co.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");B=z.default=no;const so=eo(b.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function po(o){return Z("MuiChip",o)}const l=Y("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),uo=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],vo=o=>{const{classes:a,disabled:i,size:e,color:t,onDelete:d,clickable:s,variant:u}=o,y={root:["root",u,i&&"disabled",`size${r(e)}`,`color${r(t)}`,s&&"clickable",s&&`clickableColor${r(t)}`,d&&"deletable",d&&`deletableColor${r(t)}`,`${u}${r(t)}`],label:["label",`label${r(e)}`],avatar:["avatar",`avatar${r(e)}`,`avatarColor${r(t)}`],icon:["icon",`icon${r(e)}`,`iconColor${r(t)}`],deleteIcon:["deleteIcon",`deleteIcon${r(e)}`,`deleteIconColor${r(t)}`,`deleteIcon${r(u)}Color${r(t)}`]};return lo(y,po,a)},fo=_("div",{name:"MuiChip",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o,{color:e,clickable:t,onDelete:d,size:s,variant:u}=i;return[{[`& .${l.avatar}`]:a.avatar},{[`& .${l.avatar}`]:a[`avatar${r(s)}`]},{[`& .${l.avatar}`]:a[`avatarColor${r(e)}`]},{[`& .${l.icon}`]:a.icon},{[`& .${l.icon}`]:a[`icon${r(s)}`]},{[`& .${l.icon}`]:a[`iconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:a.deleteIcon},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(s)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:a[`deleteIcon${r(u)}Color${r(e)}`]},a.root,a[`size${r(s)}`],a[`color${r(e)}`],t&&a.clickable,t&&e!=="default"&&a[`clickableColor${r(e)})`],d&&a.deletable,d&&e!=="default"&&a[`deletableColor${r(e)}`],a[u],a[`${u}${r(e)}`]]}})(({theme:o,ownerState:a})=>{const i=p(o.palette.text.primary,.26),e=o.palette.mode==="light"?o.palette.grey[700]:o.palette.grey[300];return f({maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:e,fontSize:o.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${l.icon}`]:f({color:o.vars?o.vars.palette.Chip.defaultIconColor:e,marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.color!=="default"&&{color:"inherit"}),[`& .${l.deleteIcon}`]:f({WebkitTapHighlightColor:"transparent",color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.26)`:i,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.4)`:p(i,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:o.vars?`rgba(${o.vars.palette[a.color].contrastTextChannel} / 0.7)`:p(o.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(o.vars||o).palette[a.color].main,color:(o.vars||o).palette[a.color].contrastText},a.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity+o.vars.palette.action.focusOpacity}))`:p(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}})},({theme:o,ownerState:a})=>f({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity+o.vars.palette.action.hoverOpacity}))`:p(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity+o.vars.palette.action.focusOpacity}))`:p(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)},"&:active":{boxShadow:(o.vars||o).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette[a.color].dark}}),({theme:o,ownerState:a})=>f({},a.variant==="outlined"&&{backgroundColor:"transparent",border:o.vars?`1px solid ${o.vars.palette.Chip.defaultBorder}`:`1px solid ${o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(o.vars||o).palette[a.color].main,border:`1px solid ${o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:p(o.palette[a.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette[a.color].main,o.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.focusOpacity})`:p(o.palette[a.color].main,o.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / 0.7)`:p(o.palette[a.color].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[a.color].main}}})),Co=_("span",{name:"MuiChip",slot:"Label",overridesResolver:(o,a)=>{const{ownerState:i}=o,{size:e}=i;return[a.label,a[`label${r(e)}`]]}})(({ownerState:o})=>f({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},o.size==="small"&&{paddingLeft:8,paddingRight:8}));function V(o){return o.key==="Backspace"||o.key==="Delete"}const w=v.forwardRef(function(a,i){const e=oo({props:a,name:"MuiChip"}),{avatar:t,className:d,clickable:s,color:u="default",component:y,deleteIcon:x,disabled:O=!1,icon:k,label:G,onClick:P,onDelete:C,onKeyDown:D,onKeyUp:M,size:U="medium",variant:F="filled"}=e,W=ao(e,uo),m=v.useRef(null),q=ro(m,i),L=c=>{c.stopPropagation(),C&&C(c)},A=c=>{c.currentTarget===c.target&&V(c)&&c.preventDefault(),D&&D(c)},H=c=>{c.currentTarget===c.target&&(C&&V(c)?C(c):c.key==="Escape"&&m.current&&m.current.blur()),M&&M(c)},I=s!==!1&&P?!0:s,h=I||C?N:y||"div",R=f({},e,{component:h,disabled:O,size:U,color:u,onDelete:!!C,clickable:I,variant:F}),g=vo(R),J=h===N?f({component:y||"div",focusVisibleClassName:g.focusVisible},C&&{disableRipple:!0}):{};let j=null;C&&(j=x&&v.isValidElement(x)?v.cloneElement(x,{className:$(x.props.className,g.deleteIcon),onClick:L}):b.jsx(so,{className:$(g.deleteIcon),onClick:L}));let T=null;t&&v.isValidElement(t)&&(T=v.cloneElement(t,{className:$(g.avatar,t.props.className)}));let S=null;return k&&v.isValidElement(k)&&(S=v.cloneElement(k,{className:$(g.icon,k.props.className)})),b.jsxs(fo,f({as:h,className:$(g.root,d),disabled:I&&O?!0:void 0,onClick:P,onKeyDown:A,onKeyUp:H,ref:q,ownerState:R},J,W,{children:[T||S,b.jsx(Co,{className:$(g.label),ownerState:R,children:G}),j]}))}),K=`
	font-size: 14px;
	font-family: ${n.fontFamily};
	font-weight: ${n.fontWeight.medium};
`,bo=E(w)`
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
		${K}
		line-height: 16px;
		margin-right: 12px;
		padding: 0;
	}
`;function go({$selected:o,disabled:a,onClick:i}){return o?a?{base:n.newColors.simplyGold[60]}:{base:n.newColors.simplyGold[100],focus:i&&n.newColors.darkerSimplyGold[100],hover:i&&n.newColors.darkerSimplyGold[100]}:{base:n.newColors.grey2[100],focus:i&&n.newColors.simplyGrey[100],hover:i&&n.newColors.simplyGrey[100]}}const $o=E(w)`
	&.MuiChip-root {
		max-width: 186px;
		color: ${n.newColors.almostBlack[100]};
		padding: 8px 16px;

		&:focus{
			box-shadow: none;
			outline: 1px solid white;
			outline-offset: -2px;
		}

		${({$selected:o,disabled:a,onClick:i})=>{const{base:e,focus:t,hover:d}=go({$selected:o,disabled:a,onClick:i});return`
				background-color: ${e};

				${t&&`
					&:focus{
						background-color: ${t}
					}
				`}

				${d&&`
					&:hover{
						background-color: ${d}
					}
				`}
			`}}
	}

	& .MuiChip-label {
		${K}
		line-height: 16px;
		padding: 0;
	}
`,Oo=o=>{const{label:a,disabled:i,selected:e,onDelete:t,onClick:d}=o,s=v.useRef();return t?b.jsx(bo,{...o,color:"default",children:o.children,title:typeof a=="string"?a:void 0,ref:s,disabled:i,deleteIcon:b.jsx(B,{"data-testid":"delete-icon-test-id"}),onDelete:t,"data-testid":"delete-chip-testid"}):b.jsx($o,{...o,color:"default",children:o.children,title:typeof a=="string"?a:void 0,ref:s,disabled:i,$selected:e,onClick:d,"data-testid":"chip-testid"})};export{Oo as C,w as a,B as d};
