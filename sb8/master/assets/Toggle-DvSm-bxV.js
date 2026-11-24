import{r as i,R as l}from"./index-wekxHvEx.js";import{t as v}from"./testIds-B6Pox1zA.js";import{c as s}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as r}from"./sizes-BeWafy6f.js";import{T as S}from"./mergeSlotProps-DU4484Lo.js";import{O as T}from"./OptionField-R5YykxyG.js";let f=!0,x=!1;const V=new S,B={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function K(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&B[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function I(e){e.metaKey||e.altKey||e.ctrlKey||(f=!0)}function h(){f=!1}function L(){this.visibilityState==="hidden"&&x&&(f=!0)}function O(e){e.addEventListener("keydown",I,!0),e.addEventListener("mousedown",h,!0),e.addEventListener("pointerdown",h,!0),e.addEventListener("touchstart",h,!0),e.addEventListener("visibilitychange",L,!0)}function R(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return f||K(t)}function z(){const e=i.useCallback(n=>{n!=null&&O(n.ownerDocument)},[]),t=i.useRef(!1);function o(){return t.current?(x=!0,V.start(100,()=>{x=!1}),t.current=!1,!0):!1}function c(n){return R(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:c,onBlur:o,ref:e}}const C=s.div`
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
`,$=s.div`
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
	border-radius: ${r.rounded.full};
`,P=s($)`
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
`,M=s($)`
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
`;function X({disabled:e,checked:t,onChange:o,onBlur:c,describedById:n,ariaLabel:u,id:d}){const{ref:g,onFocus:p,onBlur:a,isFocusVisibleRef:m}=z(),[E,y]=i.useState(!1),[k,w]=i.useState(!1),F={onFocus:b=>{p(b),y(m.current)},onBlur:b=>{a(b),c&&a(b),y(m.current)},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1)};return l.createElement(C,null,l.createElement(D,{onChange:o,ref:g,disabled:e,checked:!!t,id:d,"aria-label":u,"aria-describedby":n,...F}),l.createElement(A,{$checked:t,$disabled:e}),l.createElement(P,{$checked:t,$disabled:e}),l.createElement(M,{$checked:t,$isFocusVisible:E,$isOver:k}))}const H=({checked:e,label:t,labelPlacement:o="end",required:c=!1,disabled:n=!1,onChange:u,onBlur:d,describedById:g})=>{const p=i.useId();return i.createElement(T,{id:p,label:t,labelPlacement:o,required:c,disabled:n,gap:[3],"data-testid":v.TOGGLE,control:i.createElement(X,{id:p,disabled:n,checked:e,ariaLabel:t||void 0,onChange:a=>u&&u(a.target.checked),onBlur:a=>d&&d(a.target.checked),describedById:g})})};export{H as T};
