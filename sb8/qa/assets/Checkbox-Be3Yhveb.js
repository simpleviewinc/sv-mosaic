import{r as s,g as R,R as c}from"./index-D0AnReJb.js";import{s as v}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as a}from"./sizes-DkIXWPpc.js";import{b as x,a as d,e as V,_ as L,r as j}from"./identifier-DOqdnZ6L.js";import{a as N,g as D,s as F,r as U,u as w,c as W,b as A}from"./generateUtilityClasses-BL8vvUJw.js";import{S as J,a as K,b as T}from"./StyledOptionFormControl-Br1jmfxi.js";import{c as f}from"./createSvgIcon-C3PpPknf.js";import{j as n,r as M}from"./jsx-runtime-EKYJJIwR.js";import{t as X}from"./testIds-oQNwr1rf.js";import{r as _}from"./createSvgIcon-DDyBApXB.js";const G=f(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Q=f(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Y=f(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Z(e){return D("MuiCheckbox",e)}const C=N("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ee=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],oe=e=>{const{classes:o,indeterminate:t,color:u,size:m}=e,r={root:["root",t&&"indeterminate",`color${x(u)}`,`size${x(m)}`]},p=A(r,Z,o);return d({},o,p)},te=F(J,{shouldForwardProp:e=>U(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${x(t.size)}`],t.color!=="default"&&o[`color${x(t.color)}`]]}})(({theme:e,ownerState:o})=>d({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:V.alpha(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${C.checked}, &.${C.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${C.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ce=n.jsx(Q,{}),ae=n.jsx(G,{}),ne=n.jsx(Y,{}),re=s.forwardRef(function(o,t){var u,m;const r=w({props:o,name:"MuiCheckbox"}),{checkedIcon:p=ce,color:P="primary",icon:S=ae,indeterminate:h=!1,indeterminateIcon:I=ne,inputProps:q,size:k="medium",className:O}=r,H=L(r,ee),g=h?I:S,$=h?I:p,y=d({},r,{color:P,indeterminate:h,size:k}),B=oe(y);return n.jsx(te,d({type:"checkbox",inputProps:d({"data-indeterminate":h},q),icon:s.cloneElement(g,{fontSize:(u=g.props.fontSize)!=null?u:k}),checkedIcon:s.cloneElement($,{fontSize:(m=$.props.fontSize)!=null?m:k}),ownerState:y,ref:t,className:W(B.root,O)},H,{classes:B}))}),ie=v(re)`
	&& {
		padding: ${a.spacing(2)};
		color: ${a.color.black};

		svg {
			width: 22px;
			height: 22px;
		}

		&:hover {
			background-color: ${a.color.translucent.grey[100]};
		}

		&.Mui-disabled {
			color: ${a.color.gray[400]};
		}

		&.Mui-checked,
		&.MuiCheckbox-indeterminate {
			color: ${a.color.gold[500]};

			&.Mui-disabled {
				color: ${a.color.gold[200]};
			}

			&:hover {
				background-color: ${a.color.translucent.gold[100]};
			}
		}

		&.Mui-focusVisible {
			outline: 2px solid ${a.color.gray[700]};
			outline-offset: -2px;
		}
  	}
`,le=v.span`
	border: 2px solid currentColor;
	width: 16px;
	height: 16px;
`,se=v.span`
	margin-top: -1px;
	border-radius: 2px;
	overflow: hidden;
	vertical-align: middle;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	svg {
		margin: -3px;
	}
`;var i={},z;function de(){if(z)return i;z=1;var e=j();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e(_()),t=M();return i.default=(0,o.default)((0,t.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckBox"),i}var ue=de();const me=R(ue);var l={},E;function he(){if(E)return l;E=1;var e=j();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var o=e(_()),t=M();return l.default=(0,o.default)((0,t.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"}),"IndeterminateCheckBox"),l}var xe=he();const pe=R(xe),b=({checked:e,indeterminate:o})=>c.createElement(se,null,o?c.createElement(pe,null):e?c.createElement(me,null):c.createElement(le,null)),ke=e=>{const o=s.useId(),t=e.id||o;return c.createElement(K,{label:e.label&&c.createElement(T,{disabled:e.disabled},e.label),labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:t,disableTypography:!0,control:c.createElement(ie,{"data-testid":X.CHECKBOX_WRAPPER,className:`
						custom-checkbox
						${e.checked?"checked":""}
						${e.className?e.className:""}
					`,edge:e.edge,checked:e.checked,onClick:e.onClick,onChange:e.onChange,indeterminate:e.indeterminate,id:t,icon:c.createElement(b,null),checkedIcon:c.createElement(b,{checked:!0}),indeterminateIcon:c.createElement(b,{indeterminate:!0}),disableRipple:!0,disabled:e.disabled})})},Ee=s.memo(ke);export{Ee as C};
