import{r,R as c}from"./index-CDlOlYQx.js";import{c as C}from"./styled-components.browser.esm-CsHOGV45.js";import{t as n}from"./sizes-BeWafy6f.js";import{a as d,c as H}from"./identifier-D-VlK421.js";import{S as O}from"./SwitchBase-Cr0Iw5cH.js";import{c as l}from"./createSvgIcon-CpiYeT0y.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a as B,g as V,s as F,r as L,m as N,b as P,u as U,c as T}from"./createSimplePaletteValueFilter-CQDqkEyb.js";import{u as A}from"./useSlot-BF1fWNxP.js";import{m as D}from"./mergeSlotProps-1AUqaabT.js";import{t as K}from"./testIds-B6Pox1zA.js";import{S as W,a as X}from"./StyledOptionFormControl-DVa9h7YW.js";const _=l(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),q=l(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),G=l(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function J(e){return V("MuiCheckbox",e)}const k=B("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Q=e=>{const{classes:o,indeterminate:t,color:s,size:m}=e,p={root:["root",t&&"indeterminate",`color${d(s)}`,`size${d(m)}`]},u=T(p,J,o);return{...o,...u}},Y=F(O,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${d(t.size)}`],t.color!=="default"&&o[`color${d(t.color)}`]]}})(N(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(P()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(P()).map(([o])=>({props:{color:o},style:{[`&.${k.checked}, &.${k.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Z=a.jsx(q,{}),ee=a.jsx(_,{}),oe=a.jsx(G,{}),te=r.forwardRef(function(o,t){const s=U({props:o,name:"MuiCheckbox"}),{checkedIcon:m=Z,color:p="primary",icon:u=ee,indeterminate:i=!1,indeterminateIcon:v=oe,inputProps:E,size:h="medium",disableRipple:g=!1,className:M,slots:y={},slotProps:I={},...R}=s,S=i?v:u,$=i?v:m,b={...s,disableRipple:g,color:p,indeterminate:i,size:h},z=Q(b),x=I.input??E,[j,w]=A("root",{ref:t,elementType:Y,className:H(z.root,M),shouldForwardComponentProp:!0,externalForwardedProps:{slots:y,slotProps:I,...R},ownerState:b,additionalProps:{type:"checkbox",icon:r.cloneElement(S,{fontSize:S.props.fontSize??h}),checkedIcon:r.cloneElement($,{fontSize:$.props.fontSize??h}),disableRipple:g,slots:y,slotProps:{input:D(typeof x=="function"?x(b):x,{"data-indeterminate":i})}}});return a.jsx(j,{...w,classes:z})}),ce=C(te)`
	&& {
		padding: ${n.spacing(2)};
		color: ${n.color.black};

		svg {
			width: 22px;
			height: 22px;
		}

		&:hover {
			background-color: ${n.color.translucent.grey[100]};
		}

		&.Mui-disabled {
			color: ${n.color.gray[400]};
		}

		&.Mui-checked,
		&.MuiCheckbox-indeterminate {
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
  	}
`,ae=C.span`
	border: 2px solid currentColor;
	width: 16px;
	height: 16px;
`,ne=C.span`
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
`,re=l(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),le=l(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"})),f=({checked:e,indeterminate:o})=>c.createElement(ne,null,o?c.createElement(le,null):e?c.createElement(re,null):c.createElement(ae,null)),se=e=>{const o=r.useId(),t=e.id||o;return c.createElement(W,{label:e.label&&c.createElement("div",null,c.createElement(X,{disabled:e.disabled,description:e.description},e.label)),labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:t,disableTypography:!0,control:c.createElement(ce,{"data-testid":K.CHECKBOX_WRAPPER,className:`
						custom-checkbox
						${e.checked?"checked":""}
						${e.className?e.className:""}
					`,edge:e.edge,checked:e.checked,onClick:e.onClick,onChange:e.onChange,indeterminate:e.indeterminate,id:t,icon:c.createElement(f,null),checkedIcon:c.createElement(f,{checked:!0}),indeterminateIcon:c.createElement(f,{indeterminate:!0}),disableRipple:!0,disabled:e.disabled})})},ge=r.memo(se);export{ge as C};
