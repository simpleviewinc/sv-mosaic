import{j as g}from"./jsx-runtime-qGIIFXMu.js";import{r as f}from"./index-CDs2tPxN.js";import{r as Q,i as X}from"./createSvgIcon-BGEpRDBf.js";import{s as N,t as c}from"./theme-tUuL1bpb.js";import{a as Y,g as Z,s as _,c as r,f as p,b as v,u as aa,_ as oa,d as $,e as ea}from"./useThemeProps-DZj2lB8w.js";import{c as la}from"./createSvgIcon-Ca3CxB0T.js";import{u as ra}from"./assertThisInitialized-DcNg8fFv.js";import{B as S}from"./ButtonBase-cV3lp3kg.js";var z={},ta=X;Object.defineProperty(z,"__esModule",{value:!0});var V=z.default=void 0,ia=ta(Q()),na=g,ca=(0,ia.default)((0,na.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");V=z.default=ca;const sa=la(g.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function da(a){return Z("MuiChip",a)}const e=Y("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),pa=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],ua=a=>{const{classes:o,disabled:i,size:l,color:t,onDelete:d,clickable:s,variant:u}=a,y={root:["root",u,i&&"disabled",`size${r(l)}`,`color${r(t)}`,s&&"clickable",s&&`clickableColor${r(t)}`,d&&"deletable",d&&`deletableColor${r(t)}`,`${u}${r(t)}`],label:["label",`label${r(l)}`],avatar:["avatar",`avatar${r(l)}`,`avatarColor${r(t)}`],icon:["icon",`icon${r(l)}`,`iconColor${r(t)}`],deleteIcon:["deleteIcon",`deleteIcon${r(l)}`,`deleteIconColor${r(t)}`,`deleteIcon${r(u)}Color${r(t)}`]};return ea(y,da,o)},fa=_("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:i}=a,{color:l,clickable:t,onDelete:d,size:s,variant:u}=i;return[{[`& .${e.avatar}`]:o.avatar},{[`& .${e.avatar}`]:o[`avatar${r(s)}`]},{[`& .${e.avatar}`]:o[`avatarColor${r(l)}`]},{[`& .${e.icon}`]:o.icon},{[`& .${e.icon}`]:o[`icon${r(s)}`]},{[`& .${e.icon}`]:o[`iconColor${r(l)}`]},{[`& .${e.deleteIcon}`]:o.deleteIcon},{[`& .${e.deleteIcon}`]:o[`deleteIcon${r(s)}`]},{[`& .${e.deleteIcon}`]:o[`deleteIconColor${r(l)}`]},{[`& .${e.deleteIcon}`]:o[`deleteIcon${r(u)}Color${r(l)}`]},o.root,o[`size${r(s)}`],o[`color${r(l)}`],t&&o.clickable,t&&l!=="default"&&o[`clickableColor${r(l)})`],d&&o.deletable,d&&l!=="default"&&o[`deletableColor${r(l)}`],o[u],o[`${u}${r(l)}`]]}})(({theme:a,ownerState:o})=>{const i=p(a.palette.text.primary,.26),l=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return v({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${e.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${e.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:l,fontSize:a.typography.pxToRem(12)},[`& .${e.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${e.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${e.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${e.icon}`]:v({color:a.vars?a.vars.palette.Chip.defaultIconColor:l,marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.color!=="default"&&{color:"inherit"}),[`& .${e.deleteIcon}`]:v({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:i,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:p(i,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:p(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${e.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${e.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>v({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.hoverOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${e.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${e.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>v({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${e.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${e.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${e.avatar}`]:{marginLeft:4},[`& .${e.avatarSmall}`]:{marginLeft:2},[`& .${e.icon}`]:{marginLeft:4},[`& .${e.iconSmall}`]:{marginLeft:2},[`& .${e.deleteIcon}`]:{marginRight:5},[`& .${e.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:p(a.palette[o.color].main,.7)}`,[`&.${e.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${e.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:p(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${e.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:p(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),va=_("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:i}=a,{size:l}=i;return[o.label,o[`label${r(l)}`]]}})(({ownerState:a})=>v({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.size==="small"&&{paddingLeft:8,paddingRight:8}));function E(a){return a.key==="Backspace"||a.key==="Delete"}const q=f.forwardRef(function(o,i){const l=aa({props:o,name:"MuiChip"}),{avatar:t,className:d,clickable:s,color:u="default",component:y,deleteIcon:m,disabled:D=!1,icon:x,label:K,onClick:O,onDelete:b,onKeyDown:P,onKeyUp:T,size:U="medium",variant:F="filled"}=l,G=oa(l,pa),k=f.useRef(null),W=ra(k,i),M=n=>{n.stopPropagation(),b&&b(n)},H=n=>{n.currentTarget===n.target&&E(n)&&n.preventDefault(),P&&P(n)},A=n=>{n.currentTarget===n.target&&(b&&E(n)?b(n):n.key==="Escape"&&k.current&&k.current.blur()),T&&T(n)},h=s!==!1&&O?!0:s,I=h||b?S:y||"div",R=v({},l,{component:I,disabled:D,size:U,color:u,onDelete:!!b,clickable:h,variant:F}),C=ua(R),J=I===S?v({component:y||"div",focusVisibleClassName:C.focusVisible},b&&{disableRipple:!0}):{};let w=null;b&&(w=m&&f.isValidElement(m)?f.cloneElement(m,{className:$(m.props.className,C.deleteIcon),onClick:M}):g.jsx(sa,{className:$(C.deleteIcon),onClick:M}));let L=null;t&&f.isValidElement(t)&&(L=f.cloneElement(t,{className:$(C.avatar,t.props.className)}));let j=null;return x&&f.isValidElement(x)&&(j=f.cloneElement(x,{className:$(C.icon,x.props.className)})),g.jsxs(fa,v({as:I,className:$(C.root,d),disabled:h&&D?!0:void 0,onClick:O,onKeyDown:H,onKeyUp:A,ref:W,ownerState:R},J,G,{children:[L||j,g.jsx(va,{className:$(C.label),ownerState:R,children:K}),w]}))}),B=`
	font-size: 14px;
	font-family: ${c.fontFamily};
	font-weight: ${c.fontWeight.medium};
`,ba=N(q)`
	&.MuiChip-root {
		background-color: ${a=>a.disabled?c.newColors.simplyGold[60]:c.newColors.simplyGold[100]};
		color: ${c.newColors.almostBlack[100]};
		max-width: 186px;
		padding: 8px 16px;
	}

	.MuiChip-deleteIcon {
		color: ${c.newColors.almostBlack[100]} !important;
		margin: 0 !important;
		height: 16px;
		width: 16px;

		&:hover {
			color: ${c.newColors.almostBlack[100]} !important;
		}
	}

	& .MuiChip-label {
		${B}
		line-height: 16px;
		margin-right: 12px;
		padding: 0;
	}
`;function ga({$selected:a,disabled:o,onClick:i}){return a?o?{base:c.newColors.simplyGold[60]}:{base:c.newColors.simplyGold[100],focus:i&&c.newColors.darkerSimplyGold[100],hover:i&&c.newColors.darkerSimplyGold[100]}:{base:c.newColors.grey2[100],focus:i&&c.newColors.simplyGrey[100],hover:i&&c.newColors.simplyGrey[100]}}const Ca=N(q)`
	&.MuiChip-root {
		max-width: 186px;
		color: ${c.newColors.almostBlack[100]};
		padding: 8px 16px;

		&:focus{
			box-shadow: none;
			outline: 1px solid white;
			outline-offset: -2px;
		}

		${({$selected:a,disabled:o,onClick:i})=>{const{base:l,focus:t,hover:d}=ga({$selected:a,disabled:o,onClick:i});return`
				background-color: ${l};

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
		${B}
		line-height: 16px;
		padding: 0;
	}
`,$a=a=>{const{label:o,disabled:i,selected:l,onDelete:t,onClick:d}=a,s=f.useRef();return t?g.jsx(ba,{...a,color:"default",children:a.children,title:typeof o=="string"?o:void 0,ref:s,disabled:i,deleteIcon:g.jsx(V,{"data-testid":"delete-icon-test-id"}),onDelete:t,"data-testid":"delete-chip-testid"}):g.jsx(Ca,{...a,color:"default",children:a.children,title:typeof o=="string"?o:void 0,ref:s,disabled:i,$selected:l,onClick:d,"data-testid":"chip-testid"})};$a.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:"Significant name related to its text area."},required:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the text area is required or not."},disabled:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the text area can be written on or readonly."},selected:{required:!1,tsType:{name:"boolean"},description:"Indicates if the option has been selected from the list of chips."},onDelete:{required:!1,tsType:{name:"ReactEventHandler",raw:"React.EventHandler<any>",elements:[{name:"any"}]},description:`Inherit prop from MUI Chip component. Callback function fired when\r
the delete icon is clicked. If set, the delete icon will be shown.`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any) => void",signature:{arguments:[{type:{name:"any"},name:"args",rest:!0}],return:{name:"void"}}},description:"Function to be executed as callback when clicking on a Chip"}}};export{$a as C,q as a,V as d};
