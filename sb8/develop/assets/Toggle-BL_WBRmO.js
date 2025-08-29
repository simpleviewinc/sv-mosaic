import{r as h,R as w}from"./index-D0AnReJb.js";import{t as M}from"./testIds-oQNwr1rf.js";import{s as u}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as r}from"./sizes-DkIXWPpc.js";import{_ as C,a as S,b as g,e as y}from"./identifier-DOqdnZ6L.js";import{a as z,g as B,u as E,s as v,c as R,b as P}from"./generateUtilityClasses-BL8vvUJw.js";import{S as T,a as F,b as O}from"./StyledOptionFormControl-Br1jmfxi.js";import{j as $}from"./jsx-runtime-EKYJJIwR.js";import{b as j}from"./ButtonBase-O4ZQd6U4.js";function G(o){return B("MuiSwitch",o)}const a=z("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),I=["className","color","edge","size","sx"],D=o=>{const{classes:t,edge:e,size:s,color:n,checked:l,disabled:c}=o,i={root:["root",e&&`edge${g(e)}`,`size${g(s)}`],switchBase:["switchBase",`color${g(n)}`,l&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},b=P(i,G,t);return S({},t,b)},L=v("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.edge&&t[`edge${g(e.edge)}`],t[`size${g(e.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}}}]}),N=v(T,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.switchBase,{[`& .${a.input}`]:t.input},e.color!=="default"&&t[`color${g(e.color)}`]]}})(({theme:o})=>({position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:`${o.palette.mode==="light"?o.palette.common.white:o.palette.grey[300]}`,transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:`${o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[600]}`},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:o.vars?o.vars.opacity.switchTrackDisabled:`${o.palette.mode==="light"?.12:.2}`},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:o})=>({"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:y.alpha(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(o.palette).filter(([,t])=>t.main&&t.light).map(([t])=>({props:{color:t},style:{[`&.${a.checked}`]:{color:(o.vars||o).palette[t].main,"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette[t].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:y.alpha(o.palette[t].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:o.vars?o.vars.palette.Switch[`${t}DisabledColor`]:`${o.palette.mode==="light"?y.lighten(o.palette[t].main,.62):y.darken(o.palette[t].main,.55)}`}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:(o.vars||o).palette[t].main}}}))]})),V=v("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(o,t)=>t.track})(({theme:o})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:o.transitions.create(["opacity","background-color"],{duration:o.transitions.duration.shortest}),backgroundColor:o.vars?o.vars.palette.common.onBackground:`${o.palette.mode==="light"?o.palette.common.black:o.palette.common.white}`,opacity:o.vars?o.vars.opacity.switchTrack:`${o.palette.mode==="light"?.38:.3}`})),A=v("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(o,t)=>t.thumb})(({theme:o})=>({boxShadow:(o.vars||o).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),U=h.forwardRef(function(t,e){const s=E({props:t,name:"MuiSwitch"}),{className:n,color:l="primary",edge:c=!1,size:i="medium",sx:b}=s,x=C(s,I),p=S({},s,{color:l,edge:c,size:i}),d=D(p),m=$.jsx(A,{className:d.thumb,ownerState:p});return $.jsxs(L,{className:R(d.root,n),sx:b,ownerState:p,children:[$.jsx(N,S({type:"checkbox",icon:m,checkedIcon:m,ref:e,ownerState:p},x,{classes:S({},d,{root:d.switchBase})})),$.jsx(V,{className:d.track,ownerState:p})]})});u(U)`
  margin-right: 2px;
  && {
    width: 60px;
    height: 40px;
  }

  .MuiSwitch-colorPrimary,
  .MuiSwitch-colorPrimary.Mui-disabled {
    color: white;
  }

  .MuiSwitch-colorPrimary.Mui-checked,
  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked {
    color: ${r.newColors.simplyGold[100]};
  }

  .MuiSwitch-colorPrimary {
    padding: 10px;

    &:hover {
      background-color: ${r.newColors.simplyGrey[20]};
    }
  }

  .MuiSwitch-colorPrimary {
    &.Mui-checked {
      &:hover {
        background-color: ${r.newColors.simplyGold[20]};
      }
    }
  }

  .MuiSwitch-track {
    background-color: ${r.newColors.simplyGrey[100]};
    opacity: 1;
    height: 14px;
    width: 34px;
    margin: auto 0px;
  }

  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background-color: ${r.newColors.simplyGold[40]};
    opacity: 1;
  }

  .MuiSwitch-colorPrimary.Mui-disabled.Mui-checked + .MuiSwitch-track {
    background-color: ${r.newColors.simplyGold[40]};
  }

  .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
    background-color: ${r.newColors.simplyGrey[100]};
    opacity: 0.5;
  }
`;const X=u.div`
	position: relative;
	padding: 3px 0;
	z-index: 1;
`,_=u.input.attrs({type:"checkbox"})`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	cursor: inherit;
	z-index: 1;
`,K=u.div`
	width: 36px;
	height: 14px;
	border-radius: ${r.rounded.full};
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

	${({$checked:o,$disabled:t})=>o?`
		background-color: ${t?r.color.gold[100]:r.color.gold[200]};
		border: 1px solid ${t?"transparent":r.color.gold[300]};
		box-shadow: ${t?"0 0 6px 0 rgba(244, 178, 35, 0.3) inset":"0 0 6px 0 rgba(244, 178, 35, 0.6) inset"};
	`:`
		background-color: ${t?r.color.gray[100]:r.color.gray[400]};
		border: 1px solid transparent;
		box-shadow: ${t?"0 0 2px 0 rgba(0, 0, 0, 0.05) inset":"0 0 2px 0 rgba(0, 0, 0, 0.25) inset"};
	`}
`,f=u.div`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: ${r.rounded.full};
`,W=u(f)`
	width: 20px;
	height: 20px;

	${({$checked:o,$disabled:t})=>o?`
		transform: translateX(16px);
		border: 1px solid ${t?"transparent":r.color.gold[600]};
		${t?`
			background-color: ${r.color.gold[200]};
			box-shadow:
				0 0 2px 0 rgba(0, 0, 0, 0.05),
				0 1px 2px 0 rgba(177, 125, 10, 0.2);
		`:`
			background-image: linear-gradient(to bottom, #FDBA26, #FDAE02);
			box-shadow:
				0 0 2px 0 rgba(0, 0, 0, 0.10),
				0 1px 2px 0 rgba(177, 125, 10, 0.35);
		`}
	`:`
		transform: translateX(0);
		background-color: ${r.color.white};
		border: 1px solid ${t?r.color.gray[200]:r.color.gray[400]};
		box-shadow: ${t?"0 1px 2px 0 rgba(0, 0, 0, 0.05)":"0 1px 2px 0 rgba(0, 0, 0, 0.15)"};
	`}
`,q=u(f)`
	width: 32px;
	height: 32px;
	border: 2px solid transparent;
	z-index: -1;

	${({$isFocusVisible:o})=>o&&`
		border-color: ${r.color.gray[700]};
	`}

	${({$isOver:o})=>o&&`
		background-color: ${r.color.translucent.grey[100]};
	`}

	${({$checked:o})=>o?`
		transform: translate(10px, -6px);
	`:`
		transform: translate(-6px, -6px);
	`}
`;function H({disabled:o,checked:t,onChange:e,onBlur:s}){const{ref:n,onFocus:l,onBlur:c,isFocusVisibleRef:i}=j(),[b,x]=h.useState(!1),[p,d]=h.useState(!1),m={onFocus:k=>{l(k),x(i.current)},onBlur:k=>{c(k),s&&c(k),x(i.current)},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)};return w.createElement(X,null,w.createElement(_,{onChange:e,ref:n,disabled:o,checked:!!t,...m}),w.createElement(K,{$checked:t,$disabled:o}),w.createElement(W,{$checked:t,$disabled:o}),w.createElement(q,{$checked:t,$isFocusVisible:b,$isOver:p}))}const io=({checked:o,label:t,labelPlacement:e="end",required:s=!1,disabled:n=!1,onChange:l,onBlur:c})=>h.createElement(F,{label:t&&h.createElement(O,{disabled:n,required:s},t),$gap:[3],disableTypography:!0,labelPlacement:e,disabled:n,"data-testid":M.TOGGLE,control:h.createElement(H,{checked:o,onChange:i=>l&&l(i.target.checked),onBlur:i=>c&&c(i.target.checked)})});export{io as T};
