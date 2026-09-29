import{r as a,R as c}from"./index-wekxHvEx.js";import{t as S}from"./testIds-B6Pox1zA.js";import{c as i}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as r}from"./sizes-BeWafy6f.js";import{T as k}from"./useSlot-VZdH5auH.js";import{S as F,a as v}from"./StyledOptionFormControl-B1Oz8mMA.js";let f=!0,h=!1;const T=new k,V={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function B(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&V[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function K(e){e.metaKey||e.altKey||e.ctrlKey||(f=!0)}function g(){f=!1}function L(){this.visibilityState==="hidden"&&h&&(f=!0)}function O(e){e.addEventListener("keydown",K,!0),e.addEventListener("mousedown",g,!0),e.addEventListener("pointerdown",g,!0),e.addEventListener("touchstart",g,!0),e.addEventListener("visibilitychange",L,!0)}function R(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return f||B(t)}function I(){const e=a.useCallback(n=>{n!=null&&O(n.ownerDocument)},[]),t=a.useRef(!1);function o(){return t.current?(h=!0,T.start(100,()=>{h=!1}),t.current=!1,!0):!1}function l(n){return R(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:o,ref:e}}const C=i.div`
	margin: ${r.spacing("5px",0)};
	position: relative;
	padding: 3px 0;
	z-index: 1;
`,z=i.input.attrs({type:"checkbox"})`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	cursor: inherit;
	z-index: 1;
`,D=i.div`
	width: 36px;
	height: 14px;
	border-radius: ${r.rounded.full};
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

	${({$checked:e,$disabled:t})=>e?`
		background-color: ${t?r.color.gold[100]:r.color.gold[200]};
		border: 1px solid ${t?"transparent":r.color.gold[300]};
		box-shadow: ${t?"0 0 6px 0 rgba(244, 178, 35, 0.3) inset":"0 0 6px 0 rgba(244, 178, 35, 0.6) inset"};
	`:`
		background-color: ${t?r.color.gray[100]:r.color.gray[400]};
		border: 1px solid transparent;
		box-shadow: ${t?"0 0 2px 0 rgba(0, 0, 0, 0.05) inset":"0 0 2px 0 rgba(0, 0, 0, 0.25) inset"};
	`}
`,y=i.div`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: ${r.rounded.full};
`,A=i(y)`
	width: 20px;
	height: 20px;

	${({$checked:e,$disabled:t})=>e?`
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
`,P=i(y)`
	width: 32px;
	height: 32px;
	border: 2px solid transparent;
	z-index: -1;

	${({$isFocusVisible:e})=>e&&`
		border-color: ${r.color.gray[700]};
	`}

	${({$isOver:e})=>e&&`
		background-color: ${r.color.translucent.grey[100]};
	`}

	${({$checked:e})=>e?`
		transform: translate(10px, -6px);
	`:`
		transform: translate(-6px, -6px);
	`}
`;function M({disabled:e,checked:t,onChange:o,onBlur:l,describedById:n}){const{ref:u,onFocus:d,onBlur:p,isFocusVisibleRef:s}=I(),[w,m]=a.useState(!1),[$,x]=a.useState(!1),E={onFocus:b=>{d(b),m(s.current)},onBlur:b=>{p(b),l&&p(b),m(s.current)},onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1)};return c.createElement(C,null,c.createElement(z,{onChange:o,ref:u,disabled:e,checked:!!t,"aria-describedby":n,...E}),c.createElement(D,{$checked:t,$disabled:e}),c.createElement(A,{$checked:t,$disabled:e}),c.createElement(P,{$checked:t,$isFocusVisible:w,$isOver:$}))}const j=({checked:e,label:t,labelPlacement:o="end",required:l=!1,disabled:n=!1,onChange:u,onBlur:d,describedById:p})=>a.createElement(F,{label:t&&a.createElement(v,{disabled:n,required:l},t),$gap:[3],disableTypography:!0,labelPlacement:o,disabled:n,"data-testid":S.TOGGLE,control:a.createElement(M,{checked:e,onChange:s=>u&&u(s.target.checked),onBlur:s=>d&&d(s.target.checked),describedById:p})});export{j as T};
