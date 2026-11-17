import{r as a,R as c}from"./index-wekxHvEx.js";import{t as k}from"./testIds-B6Pox1zA.js";import{c as s}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as r}from"./sizes-BeWafy6f.js";import{T as F}from"./useSlot-VZdH5auH.js";import{S as v,a as T}from"./StyledOptionFormControl-B1Oz8mMA.js";let b=!0,g=!1;const V=new F,B={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function K(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&B[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function L(e){e.metaKey||e.altKey||e.ctrlKey||(b=!0)}function h(){b=!1}function O(){this.visibilityState==="hidden"&&g&&(b=!0)}function R(e){e.addEventListener("keydown",L,!0),e.addEventListener("mousedown",h,!0),e.addEventListener("pointerdown",h,!0),e.addEventListener("touchstart",h,!0),e.addEventListener("visibilitychange",O,!0)}function I(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return b||K(t)}function C(){const e=a.useCallback(n=>{n!=null&&R(n.ownerDocument)},[]),t=a.useRef(!1);function o(){return t.current?(g=!0,V.start(100,()=>{g=!1}),t.current=!1,!0):!1}function l(n){return I(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:o,ref:e}}const z=s.div`
	margin: ${r.spacing("5px",0)};
	position: relative;
	padding: 3px 0;
	z-index: 1;
`,D=s.input.attrs({type:"checkbox"})`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	cursor: inherit;
	z-index: 1;
`,A=s.div`
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
`,w=s.div`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: ${r.rounded.full};
`,P=s(w)`
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
`,M=s(w)`
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
`;function X({disabled:e,checked:t,onChange:o,onBlur:l,describedById:n,ariaLabel:u}){const{ref:d,onFocus:f,onBlur:i,isFocusVisibleRef:m}=C(),[E,x]=a.useState(!1),[$,y]=a.useState(!1),S={onFocus:p=>{f(p),x(m.current)},onBlur:p=>{i(p),l&&i(p),x(m.current)},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1)};return c.createElement(z,null,c.createElement(D,{onChange:o,ref:d,disabled:e,checked:!!t,"aria-label":u,"aria-describedby":n,...S}),c.createElement(A,{$checked:t,$disabled:e}),c.createElement(P,{$checked:t,$disabled:e}),c.createElement(M,{$checked:t,$isFocusVisible:E,$isOver:$}))}const H=({checked:e,label:t,labelPlacement:o="end",required:l=!1,disabled:n=!1,onChange:u,onBlur:d,describedById:f})=>a.createElement(v,{label:t&&a.createElement(T,{disabled:n,required:l},a.createElement("span",{"aria-hidden":"true"},t)),$gap:[3],disableTypography:!0,labelPlacement:o,disabled:n,"data-testid":k.TOGGLE,control:a.createElement(X,{checked:e,onChange:i=>u&&u(i.target.checked),onBlur:i=>d&&d(i.target.checked),describedById:f,ariaLabel:t||void 0})});export{H as T};
