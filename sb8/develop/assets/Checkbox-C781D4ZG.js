import{r as d,R as c}from"./index-wekxHvEx.js";import{c as C}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as l}from"./sizes-BeWafy6f.js";import{a as B}from"./identifier-DEb8G0aq.js";import{S as O}from"./SwitchBase-D6K8Fkjn.js";import{c as m}from"./createSvgIcon-TbZ0fr-h.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{a as H,g as V,s as L,c as u,r as F,m as N,u as U,b as A}from"./generateUtilityClasses-NbEjrlIW.js";import{c as P}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as T}from"./ButtonBase-C7cXrk-H.js";import{m as W,u as q}from"./useMountWarning-xu6cFXpq.js";import{t as D}from"./testIds-B6Pox1zA.js";import{O as G}from"./OptionField-R5YykxyG.js";const K=m(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),X=m(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),_=m(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function J(e){return V("MuiCheckbox",e)}const k=H("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Q=e=>{const{classes:o,indeterminate:t,color:n,size:a}=e,i={root:["root",t&&"indeterminate",`color${u(n)}`,`size${u(a)}`]},s=A(i,J,o);return{...o,...s}},Y=L(O,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${u(t.size)}`],t.color!=="default"&&o[`color${u(t.color)}`]]}})(N(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(P()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(P()).map(([o])=>({props:{color:o},style:{[`&.${k.checked}, &.${k.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${k.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Z=r.jsx(X,{}),ee=r.jsx(K,{}),oe=r.jsx(_,{}),te=d.forwardRef(function(o,t){const n=U({props:o,name:"MuiCheckbox"}),{checkedIcon:a=Z,color:i="primary",icon:s=ee,indeterminate:p=!1,indeterminateIcon:v=oe,inputProps:M,size:b="medium",disableRipple:g=!1,className:E,slots:y={},slotProps:I={},...R}=n,S=p?v:s,$=p?v:a,h={...n,disableRipple:g,color:i,indeterminate:p,size:b},z=Q(h),x=I.input??M,[j,w]=T("root",{ref:t,elementType:Y,className:B(z.root,E),shouldForwardComponentProp:!0,externalForwardedProps:{slots:y,slotProps:I,...R},ownerState:h,additionalProps:{type:"checkbox",icon:d.cloneElement(S,{fontSize:S.props.fontSize??b}),checkedIcon:d.cloneElement($,{fontSize:$.props.fontSize??b}),disableRipple:g,slots:y,slotProps:{input:W(typeof x=="function"?x(h):x,{"data-indeterminate":p})}}});return r.jsx(j,{...w,classes:z})}),ae=C(te)`
	&& {
		padding: ${l.spacing(2)};
		color: ${l.color.black};

		svg {
			width: 22px;
			height: 22px;
		}

		&:hover {
			background-color: ${l.color.translucent.grey[100]};
		}

		&.Mui-disabled {
			color: ${l.color.gray[400]};
		}

		&.Mui-checked,
		&.MuiCheckbox-indeterminate {
			color: ${l.color.gold[500]};

			&.Mui-disabled {
				color: ${l.color.gold[200]};
			}

			&:hover {
				background-color: ${l.color.translucent.gold[100]};
			}
		}

		&.Mui-focusVisible {
			outline: 2px solid ${l.color.gray[700]};
			outline-offset: -2px;
		}
  	}
`,ce=C.span`
	border: 2px solid currentColor;
	width: 16px;
	height: 16px;
`,re=C.span`
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
`,ne=m(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),le=m(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"})),f=({checked:e,indeterminate:o})=>c.createElement(re,{"aria-hidden":"true"},o?c.createElement(le,null):e?c.createElement(ne,null):c.createElement(ce,null)),ie=e=>{const o=d.useId(),t=e.id||o,{label:n}=e,a=e["aria-label"],i=e["aria-labelledby"],s=i?a:a??n;return q("[MOS Checkbox] Both a visible `label` and an `aria-label`/`aria-labelledby` were provided. The aria attribute takes precedence as the checkbox's accessible name and overrides the visible label for assistive technology. WCAG 2.1 SC 2.5.3 requires the accessible name to contain the visible label text.",!!(n&&(a||i))),c.createElement(G,{id:t,label:n,description:e.description,disabled:e.disabled,"data-testid":"label-test-id",control:c.createElement(ae,{"data-testid":D.CHECKBOX_WRAPPER,className:`
						custom-checkbox
						${e.checked?"checked":""}
						${e.className?e.className:""}
					`,edge:e.edge,checked:e.checked,onClick:e.onClick,onChange:e.onChange,indeterminate:e.indeterminate,id:t,value:e.value,icon:c.createElement(f,null),checkedIcon:c.createElement(f,{checked:!0}),indeterminateIcon:c.createElement(f,{indeterminate:!0}),disableRipple:!0,disabled:e.disabled,slotProps:{input:{"aria-label":s,"aria-labelledby":i,"aria-describedby":e["aria-describedby"]}}})})},ye=d.memo(ie);export{ye as C};
