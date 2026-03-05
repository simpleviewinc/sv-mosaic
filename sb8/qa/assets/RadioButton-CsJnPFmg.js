import{r as s,R as z}from"./index-CDlOlYQx.js";import{c as y}from"./styled-components.browser.esm-CsHOGV45.js";import{t as r}from"./sizes-BeWafy6f.js";import{a as p,c as J}from"./identifier-D-VlK421.js";import{S as K}from"./SwitchBase-Cr0Iw5cH.js";import{c as M}from"./createSvgIcon-CpiYeT0y.js";import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{s as f,r as E,m as F,a as Q,g as W,b as j,u as X,c as Y}from"./createSimplePaletteValueFilter-CQDqkEyb.js";import{u as _}from"./formControlState-VojGIu4f.js";import{u as oo}from"./useSlot-BF1fWNxP.js";import{c as eo}from"./createChainedFunction-BO_9K8Jh.js";import{S as to,a as ao}from"./StyledOptionFormControl-DVa9h7YW.js";const ro=M(i.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),so=M(i.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),no=f("span",{name:"MuiRadioButtonIcon",shouldForwardProp:E})({position:"relative",display:"flex"}),io=f(ro,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),lo=f(so,{name:"MuiRadioButtonIcon"})(F(({theme:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}}]})));function O(o){const{checked:e=!1,classes:t={},fontSize:a}=o,n={...o,checked:e};return i.jsxs(no,{className:t.root,ownerState:n,children:[i.jsx(io,{fontSize:a,className:t.background,ownerState:n}),i.jsx(lo,{fontSize:a,className:t.dot,ownerState:n})]})}const co=s.createContext(void 0);function uo(){return s.useContext(co)}function po(o){return W("MuiRadio",o)}const w=Q("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),fo=o=>{const{classes:e,color:t,size:a}=o,n={root:["root",`color${p(t)}`,a!=="medium"&&`size${p(a)}`]};return{...e,...Y(n,po,e)}},mo=f(K,{shouldForwardProp:o=>E(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.size!=="medium"&&e[`size${p(t.size)}`],e[`color${p(t.color)}`]]}})(F(({theme:o})=>({color:(o.vars||o).palette.text.secondary,[`&.${w.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette.action.active,(o.vars||o).palette.action.hoverOpacity)}}},...Object.entries(o.palette).filter(j()).map(([e])=>({props:{color:e,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette[e].main,(o.vars||o).palette.action.hoverOpacity)}}})),...Object.entries(o.palette).filter(j()).map(([e])=>({props:{color:e,disabled:!1},style:{[`&.${w.checked}`]:{color:(o.vars||o).palette[e].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function bo(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const go=i.jsx(O,{checked:!0}),Ro=i.jsx(O,{}),Co=s.forwardRef(function(e,t){const a=X({props:e,name:"MuiRadio"}),{checked:n,checkedIcon:d=go,color:N="primary",icon:h=Ro,name:U,onChange:q,size:m="medium",className:D,disabled:G,disableRipple:T=!1,slots:x={},slotProps:k={},inputProps:V,...L}=a,S=_();let l=G;S&&typeof l>"u"&&(l=S.disabled),l??(l=!1);const b={...a,disabled:l,disableRipple:T,color:N,size:m},v=fo(b),c=uo();let g=n;const Z=eo(q,c&&c.onChange);let R=U;c&&(typeof g>"u"&&(g=bo(c.value,a.value)),typeof R>"u"&&(R=c.name));const C=k.input??V,[A,H]=oo("root",{ref:t,elementType:mo,className:J(v.root,D),shouldForwardComponentProp:!0,externalForwardedProps:{slots:x,slotProps:k,...L},getSlotProps:u=>({...u,onChange:(P,...I)=>{var $;($=u.onChange)==null||$.call(u,P,...I),Z(P,...I)}}),ownerState:b,additionalProps:{type:"radio",icon:s.cloneElement(h,{fontSize:h.props.fontSize??m}),checkedIcon:s.cloneElement(d,{fontSize:d.props.fontSize??m}),disabled:l,name:R,checked:g,slots:x,slotProps:{input:typeof C=="function"?C(b):C}}});return i.jsx(A,{...H,classes:v})}),yo=y(Co)`
	padding: ${r.spacing(2)};
	color: ${r.color.black};

	svg {
		width: 18px;
		height: 18px;
	}

	&:hover {
		background-color: ${r.color.translucent.grey[100]};
	}

	&.Mui-disabled {
		color: ${r.color.gray[400]};
	}

	&.Mui-checked {
		color: ${r.color.gold[500]};

		&.Mui-disabled {
			color: ${r.color.gold[200]};
		}

		&:hover {
			background-color: ${r.color.translucent.gold[100]};
		}
	}

	&.Mui-focusVisible {
		outline: 2px solid ${r.color.gray[700]};
		outline-offset: -2px;
	}
`,ho=y.span`
	margin-top: -1px;
	width: 16px;
	height: 16px;
	border: 2px solid currentColor;
	border-radius: ${r.rounded.full};
	display: flex;
	align-items: center;
	justify-content: center;
`,xo=y.span`
	width: 8px;
	height: 8px;
	background-color: currentColor;
	border-radius: ${r.rounded.full};
`,B=({checked:o})=>z.createElement(ho,null,o&&z.createElement(xo,null)),Fo=o=>{const{label:e,required:t,disabled:a,value:n,checked:d}=o;return s.createElement(to,{label:e&&s.createElement(ao,{disabled:a,required:t},o.label),disableTypography:!0,labelPlacement:"end",value:n,disabled:a,control:s.createElement(yo,{"data-testid":"radio-button-test",disabled:a,checked:d,icon:s.createElement(B,null),checkedIcon:s.createElement(B,{checked:!0}),disableRipple:!0,inputProps:{required:t}})})};export{Fo as R,co as a};
