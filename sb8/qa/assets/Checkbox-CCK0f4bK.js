import{r as i,R as a}from"./index-wekxHvEx.js";import{c as f}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as c}from"./sizes-BeWafy6f.js";import{c as B}from"./identifier-Bq1wI7MV.js";import{S as O}from"./SwitchBase-DgSlJAjj.js";import{c as d}from"./createSvgIcon-h9rIBQiG.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{a as H,g as V,s as F,c as b,r as L,m as N,d as z,u as T,b as U}from"./createSimplePaletteValueFilter-BVevyrl8.js";import{u as W}from"./useSlot-VZdH5auH.js";import{m as A,u as q}from"./useMountWarning-Q6RqOhZJ.js";import{t as D}from"./testIds-B6Pox1zA.js";import{S as G,a as K}from"./StyledOptionFormControl-B1Oz8mMA.js";const X=d(l.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),_=d(l.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),J=d(l.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function Q(e){return V("MuiCheckbox",e)}const k=H("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Y=e=>{const{classes:o,indeterminate:t,color:n,size:r}=e,s={root:["root",t&&"indeterminate",`color${b(n)}`,`size${b(r)}`]},u=U(s,Q,o);return{...o,...u}},Z=F(O,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${b(t.size)}`],t.color!=="default"&&o[`color${b(t.color)}`]]}})(N(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(z()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(z()).map(([o])=>({props:{color:o},style:{[`&.${k.checked}, &.${k.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),ee=l.jsx(_,{}),oe=l.jsx(X,{}),te=l.jsx(J,{}),ae=i.forwardRef(function(o,t){const n=T({props:o,name:"MuiCheckbox"}),{checkedIcon:r=ee,color:s="primary",icon:u=oe,indeterminate:m=!1,indeterminateIcon:v=te,inputProps:M,size:p="medium",disableRipple:g=!1,className:E,slots:y={},slotProps:I={},...R}=n,S=m?v:u,$=m?v:r,h={...n,disableRipple:g,color:s,indeterminate:m,size:p},P=Y(h),x=I.input??M,[j,w]=W("root",{ref:t,elementType:Z,className:B(P.root,E),shouldForwardComponentProp:!0,externalForwardedProps:{slots:y,slotProps:I,...R},ownerState:h,additionalProps:{type:"checkbox",icon:i.cloneElement(S,{fontSize:S.props.fontSize??p}),checkedIcon:i.cloneElement($,{fontSize:$.props.fontSize??p}),disableRipple:g,slots:y,slotProps:{input:A(typeof x=="function"?x(h):x,{"data-indeterminate":m})}}});return l.jsx(j,{...w,classes:P})}),le=f(ae)`
	&& {
		padding: ${c.spacing(2)};
		color: ${c.color.black};

		svg {
			width: 22px;
			height: 22px;
		}

		&:hover {
			background-color: ${c.color.translucent.grey[100]};
		}

		&.Mui-disabled {
			color: ${c.color.gray[400]};
		}

		&.Mui-checked,
		&.MuiCheckbox-indeterminate {
			color: ${c.color.gold[500]};

			&.Mui-disabled {
				color: ${c.color.gold[200]};
			}

			&:hover {
				background-color: ${c.color.translucent.gold[100]};
			}
		}

		&.Mui-focusVisible {
			outline: 2px solid ${c.color.gray[700]};
			outline-offset: -2px;
		}
  	}
`,ce=f.span`
	border: 2px solid currentColor;
	width: 16px;
	height: 16px;
`,ne=f.span`
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
`,re=d(l.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),se=d(l.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"})),C=({checked:e,indeterminate:o})=>a.createElement(ne,null,o?a.createElement(se,null):e?a.createElement(re,null):a.createElement(ce,null)),ie=e=>{const o=i.useId(),t=e.id||o,{label:n}=e,r=e["aria-label"],s=e["aria-labelledby"];return q("[MOS Checkbox] Both a visible `label` and an `aria-label`/`aria-labelledby` were provided. The aria attribute takes precedence as the checkbox's accessible name and overrides the visible label for assistive technology. WCAG 2.1 SC 2.5.3 requires the accessible name to contain the visible label text.",!!(n&&(r||s))),a.createElement(G,{label:e.label&&a.createElement(K,{disabled:e.disabled,description:e.description},e.label),labelPlacement:"end","data-testid":"label-test-id",value:e.value,disabled:e.disabled,htmlFor:t,disableTypography:!0,control:a.createElement(le,{"data-testid":D.CHECKBOX_WRAPPER,className:`
						custom-checkbox
						${e.checked?"checked":""}
						${e.className?e.className:""}
					`,edge:e.edge,checked:e.checked,onClick:e.onClick,onChange:e.onChange,indeterminate:e.indeterminate,id:t,icon:a.createElement(C,null),checkedIcon:a.createElement(C,{checked:!0}),indeterminateIcon:a.createElement(C,{indeterminate:!0}),disableRipple:!0,disabled:e.disabled,slotProps:{input:{"aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"]}}})})},ye=i.memo(ie);export{ye as C};
