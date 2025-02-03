import{j as i}from"./jsx-runtime-DiwAibxM.js";import{r as m}from"./index-Btj5Fd67.js";import{s as l,t as r}from"./theme-C7C0QMlu.js";import{c as x}from"./containerQuery-BqcK0eeN.js";import{u as b}from"./useToggle-B3mbTfSB.js";const w=l.nav`
	${({$collapse:o})=>o?`
		border-bottom: 2px solid ${r.newColors.grey2[100]};
		padding: 0 24px;

		${x(o.minWidth,o.name)}  {
			border-bottom: 0;
			border-right: 2px solid ${r.newColors.grey2[100]};
			width: 196px;
			min-width: 196px;
			padding: 0;
			overflow: auto;
		}
	`:`
		border-right: 2px solid ${r.newColors.grey2[100]};
		width: 196px;
		min-width: 196px;
		overflow: auto;
	`}
`,u=l.div`
  	font-family: ${r.fontFamily};
`,y=l.div`
	display: flex;
	border-bottom: 2px solid ${r.newColors.grey2[100]};

	&:last-child{
		border-bottom: 0;
	}

	${({$collapse:o})=>o?`
		gap: 40px;
		border-bottom: 0;

		${x(o.minWidth,o.name)} {
			flex-direction: column;
			gap: 0;
		}
	`:`
		flex-direction: column;
	`}
`,$=l.a`
	cursor: pointer;
	padding-bottom: 16px;
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;

	${({$isActive:o})=>o&&`
		font-weight: ${r.fontWeight.semiBold};
	`}

	${({$collapse:o})=>o?`
		border-bottom: 4px solid transparent;
	`:`
		border-left: 3px solid transparent;
		padding: 12px 20px;
	`};

	${({$collapse:o,$isActive:e})=>o&&e&&`
		border-bottom-color: ${r.newColors.simplyGold[100]};
	`};

	${({$collapse:o,$isActive:e})=>!o&&e&&`
		background-color: ${r.newColors.grey2[100]};
		border-left-color: ${r.newColors.simplyGold[100]};
	`};

	${({$collapse:o})=>o&&`
		${x(o.minWidth,o.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 3px solid transparent;
			display: flex;
			padding: 12px 20px;
		}
	`}

	${({$collapse:o,$isActive:e})=>o&&e&&`
		${x(o.minWidth,o.name)} {
			background-color: ${r.newColors.grey2[100]};
			border-left-color: ${r.newColors.simplyGold[100]};
		}
	`}

	.MuiSvgIcon-root:first-child {
		color: ${r.newColors.almostBlack[100]};
		width: 16px;
		margin: -2px 0;
	}

	&:hover {
		.MuiSvgIcon-root:not(:first-child) {
			display: block;
			color: ${r.newColors.grey3[100]};
			margin: -2px -12px -2px auto;
			width: 16px;
		}
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none;
	}
`,v=l.span`
	color: ${r.newColors.almostBlack[100]};
	font-size: 14px;
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 20px;
`,k=l.span`
	color: ${r.newColors.grey4[100]};
	font-size: 10px;
	font-weight: ${r.fontWeight.semiBold};
`,C=l.div`
	align-items: center;
	background-color: ${r.newColors.simplyGold[100]};
	border-radius: 20px;
	display: flex;
	height: 20px;
	justify-content: center;
	min-width: 20px;
`,j=({items:o,collapse:e,onLinkClicked:g,active:a})=>{const p=b(o,"show",!0);return p.length?i.jsx(y,{"data-testid":"section-wrapper",$collapse:e,children:p.map((n,h)=>{var t,f;const d=n.icon,s=(t=n==null?void 0:n.action)==null?void 0:t.icon;return m.createElement($,{...n.attrs,$isActive:n.name===a,onClick:c=>g({item:n,event:c}),$collapse:e,key:`${n.label}-${h}`,className:n.name===a&&"highlight"},n.icon&&i.jsx(d,{},"link-icon"),i.jsx(v,{children:n.label},"link-text"),(n==null?void 0:n.badge)&&i.jsx(C,{children:i.jsx(k,{children:n.badge})},"badge"),((f=n==null?void 0:n.action)==null?void 0:f.icon)&&i.jsx(s,{onClick:n.action.onClick},"action-item"))})}):null},S=o=>{const{items:e,active:g,onNav:a,className:p,collapse:n}=o,h=m.useCallback(d=>{const{item:s,event:t}=d;if(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;const c=s.onNav!==void 0?s.onNav:a;c!==!1&&t.preventDefault(),typeof c=="function"&&c({item:s,event:t})},[a]);return i.jsx(w,{className:p,$collapse:n,children:i.jsx(u,{children:e.map((d,s)=>i.jsx(j,{items:d,onLinkClicked:h,active:g,collapse:n},s))})})},L=m.memo(S);export{L as S};
