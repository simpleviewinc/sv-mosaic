import{r as c,R as n}from"./index-ePW8zFKp.js";import{t as $}from"./testIds-B6Pox1zA.js";import{s as a}from"./styled-components.browser.esm-CUKKF2J4.js";import{t as e}from"./sizes-1ZdlMWGC.js";import{u as y}from"./useIsFocusVisible-BxLBCNny.js";import{S,a as w}from"./StyledOptionFormControl-Ca00866Q.js";const k=a.div`
	position: relative;
	padding: 3px 0;
	z-index: 1;
`,E=a.input.attrs({type:"checkbox"})`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	cursor: inherit;
	z-index: 1;
`,F=a.div`
	width: 36px;
	height: 14px;
	border-radius: ${e.rounded.full};
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

	${({$checked:r,$disabled:o})=>r?`
		background-color: ${o?e.color.gold[100]:e.color.gold[200]};
		border: 1px solid ${o?"transparent":e.color.gold[300]};
		box-shadow: ${o?"0 0 6px 0 rgba(244, 178, 35, 0.3) inset":"0 0 6px 0 rgba(244, 178, 35, 0.6) inset"};
	`:`
		background-color: ${o?e.color.gray[100]:e.color.gray[400]};
		border: 1px solid transparent;
		box-shadow: ${o?"0 0 2px 0 rgba(0, 0, 0, 0.05) inset":"0 0 2px 0 rgba(0, 0, 0, 0.25) inset"};
	`}
`,x=a.div`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: ${e.rounded.full};
`,v=a(x)`
	width: 20px;
	height: 20px;

	${({$checked:r,$disabled:o})=>r?`
		transform: translateX(16px);
		border: 1px solid ${o?"transparent":e.color.gold[600]};
		${o?`
			background-color: ${e.color.gold[200]};
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
		background-color: ${e.color.white};
		border: 1px solid ${o?e.color.gray[200]:e.color.gray[400]};
		box-shadow: ${o?"0 1px 2px 0 rgba(0, 0, 0, 0.05)":"0 1px 2px 0 rgba(0, 0, 0, 0.15)"};
	`}
`,B=a(x)`
	width: 32px;
	height: 32px;
	border: 2px solid transparent;
	z-index: -1;

	${({$isFocusVisible:r})=>r&&`
		border-color: ${e.color.gray[700]};
	`}

	${({$isOver:r})=>r&&`
		background-color: ${e.color.translucent.grey[100]};
	`}

	${({$checked:r})=>r?`
		transform: translate(10px, -6px);
	`:`
		transform: translate(-6px, -6px);
	`}
`;function O({disabled:r,checked:o,onChange:d,onBlur:u}){const{ref:l,onFocus:i,onBlur:s,isFocusVisibleRef:t}=y(),[h,b]=c.useState(!1),[m,g]=c.useState(!1),f={onFocus:p=>{i(p),b(t.current)},onBlur:p=>{s(p),u&&s(p),b(t.current)},onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1)};return n.createElement(k,null,n.createElement(E,{onChange:d,ref:l,disabled:r,checked:!!o,...f}),n.createElement(F,{$checked:o,$disabled:r}),n.createElement(v,{$checked:o,$disabled:r}),n.createElement(B,{$checked:o,$isFocusVisible:h,$isOver:m}))}const L=({checked:r,label:o,labelPlacement:d="end",required:u=!1,disabled:l=!1,onChange:i,onBlur:s})=>c.createElement(S,{label:o&&c.createElement(w,{disabled:l,required:u},o),$gap:[3],disableTypography:!0,labelPlacement:d,disabled:l,"data-testid":$.TOGGLE,control:c.createElement(O,{checked:r,onChange:t=>i&&i(t.target.checked),onBlur:t=>s&&s(t.target.checked)})});export{L as T};
