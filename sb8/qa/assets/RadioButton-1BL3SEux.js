import{r as s,R as b}from"./index-D0AnReJb.js";import{s as g}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as n}from"./sizes-DkIXWPpc.js";import{a as l,b as u,e as w,_ as F}from"./identifier-DOqdnZ6L.js";import{s as p,r as $,a as O,g as q,u as D,c as G,b as L}from"./generateUtilityClasses-BL8vvUJw.js";import{S as V,a as T,b as W}from"./StyledOptionFormControl-CmOcJT1x.js";import{c as I}from"./createSvgIcon-C3PpPknf.js";import{j as c}from"./jsx-runtime-EKYJJIwR.js";import{c as Z}from"./createChainedFunction-BO_9K8Jh.js";const A=I(c.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),H=I(c.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),J=p("span",{shouldForwardProp:$})({position:"relative",display:"flex"}),K=p(A)({transform:"scale(1)"}),Q=p(H)(({theme:o,ownerState:e})=>l({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest})},e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}));function z(o){const{checked:e=!1,classes:t={},fontSize:a}=o,r=l({},o,{checked:e});return c.jsxs(J,{className:t.root,ownerState:r,children:[c.jsx(K,{fontSize:a,className:t.background,ownerState:r}),c.jsx(Q,{fontSize:a,className:t.dot,ownerState:r})]})}const X=s.createContext(void 0);function Y(){return s.useContext(X)}function oo(o){return q("MuiRadio",o)}const k=O("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),eo=["checked","checkedIcon","color","icon","name","onChange","size","className"],to=o=>{const{classes:e,color:t,size:a}=o,r={root:["root",`color${u(t)}`,a!=="medium"&&`size${u(a)}`]};return l({},e,L(r,oo,e))},ao=p(V,{shouldForwardProp:o=>$(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.size!=="medium"&&e[`size${u(t.size)}`],e[`color${u(t.color)}`]]}})(({theme:o,ownerState:e})=>l({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:w.alpha(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${k.checked}`]:{color:(o.vars||o).palette[e.color].main}},{[`&.${k.disabled}`]:{color:(o.vars||o).palette.action.disabled}}));function ro(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}const x=c.jsx(z,{checked:!0}),v=c.jsx(z,{}),no=s.forwardRef(function(e,t){var a,r;const i=D({props:e,name:"MuiRadio"}),{checked:S,checkedIcon:j=x,color:E="primary",icon:B=v,name:M,onChange:P,size:f="medium",className:N}=i,U=F(i,eo),C=l({},i,{color:E,size:f}),R=to(C),d=Y();let m=S;const _=Z(P,d&&d.onChange);let h=M;return d&&(typeof m>"u"&&(m=ro(d.value,i.value)),typeof h>"u"&&(h=d.name)),c.jsx(ao,l({type:"radio",icon:s.cloneElement(B,{fontSize:(a=v.props.fontSize)!=null?a:f}),checkedIcon:s.cloneElement(j,{fontSize:(r=x.props.fontSize)!=null?r:f}),ownerState:C,classes:R,name:h,checked:m,onChange:_,ref:t,className:G(R.root,N)},U))}),so=g(no)`
	padding: ${n.spacing(2)};
	color: ${n.color.black};

	svg {
		width: 18px;
		height: 18px;
	}

	&:hover {
		background-color: ${n.color.translucent.grey[100]};
	}

	&.Mui-disabled {
		color: ${n.color.gray[400]};
	}

	&.Mui-checked {
		color: ${n.color.gold[500]};

		&.Mui-disabled {
			color: ${n.color.gold[200]};
		}

		&:hover {
			background-color: ${n.color.translucent.gold[100]};
		}
	}

	&.Mui-focusVisible {
		outline: 2px solid ${n.color.gray[700]};
		outline-offset: -2px;
	}
`,co=g.span`
	margin-top: -1px;
	width: 16px;
	height: 16px;
	border: 2px solid currentColor;
	border-radius: ${n.rounded.full};
	display: flex;
	align-items: center;
	justify-content: center;
`,io=g.span`
	width: 8px;
	height: 8px;
	background-color: currentColor;
	border-radius: ${n.rounded.full};
`,y=({checked:o})=>b.createElement(co,null,o&&b.createElement(io,null)),bo=o=>{const{label:e,required:t,disabled:a,value:r,checked:i}=o;return s.createElement(T,{label:e&&s.createElement(W,{disabled:a,required:t},o.label),disableTypography:!0,labelPlacement:"end",value:r,disabled:a,control:s.createElement(so,{"data-testid":"radio-button-test",disabled:a,checked:i,icon:s.createElement(y,null),checkedIcon:s.createElement(y,{checked:!0}),disableRipple:!0,inputProps:{required:t}})})};export{bo as R,X as a};
