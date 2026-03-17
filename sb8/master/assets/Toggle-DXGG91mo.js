import{r as a,R as u}from"./index-CDlOlYQx.js";import{t as E}from"./testIds-B6Pox1zA.js";import{c as i}from"./styled-components.browser.esm-CsHOGV45.js";import{t as r}from"./sizes-BeWafy6f.js";import{T as S}from"./useSlot-BF1fWNxP.js";import{S as k,a as F}from"./StyledOptionFormControl-DVa9h7YW.js";let b=!0,g=!1;const v=new S,T={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function V(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&T[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function K(e){e.metaKey||e.altKey||e.ctrlKey||(b=!0)}function f(){b=!1}function B(){this.visibilityState==="hidden"&&g&&(b=!0)}function L(e){e.addEventListener("keydown",K,!0),e.addEventListener("mousedown",f,!0),e.addEventListener("pointerdown",f,!0),e.addEventListener("touchstart",f,!0),e.addEventListener("visibilitychange",B,!0)}function O(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return b||V(t)}function R(){const e=a.useCallback(n=>{n!=null&&L(n.ownerDocument)},[]),t=a.useRef(!1);function o(){return t.current?(g=!0,v.start(100,()=>{g=!1}),t.current=!1,!0):!1}function l(n){return O(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:o,ref:e}}const C=i.div`
	margin: ${r.spacing("5px",0)};
	position: relative;
	padding: 3px 0;
	z-index: 1;
`,I=i.input.attrs({type:"checkbox"})`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	cursor: inherit;
	z-index: 1;
`,z=i.div`
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
`,x=i.div`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: ${r.rounded.full};
`,D=i(x)`
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
`,A=i(x)`
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
`;function P({disabled:e,checked:t,onChange:o,onBlur:l}){const{ref:n,onFocus:d,onBlur:c,isFocusVisibleRef:s}=R(),[y,h]=a.useState(!1),[w,m]=a.useState(!1),$={onFocus:p=>{d(p),h(s.current)},onBlur:p=>{c(p),l&&c(p),h(s.current)},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1)};return u.createElement(C,null,u.createElement(I,{onChange:o,ref:n,disabled:e,checked:!!t,...$}),u.createElement(z,{$checked:t,$disabled:e}),u.createElement(D,{$checked:t,$disabled:e}),u.createElement(A,{$checked:t,$isFocusVisible:y,$isOver:w}))}const U=({checked:e,label:t,labelPlacement:o="end",required:l=!1,disabled:n=!1,onChange:d,onBlur:c})=>a.createElement(k,{label:t&&a.createElement(F,{disabled:n,required:l},t),$gap:[3],disableTypography:!0,labelPlacement:o,disabled:n,"data-testid":E.TOGGLE,control:a.createElement(P,{checked:e,onChange:s=>d&&d(s.target.checked),onBlur:s=>c&&c(s.target.checked)})});export{U as T};
