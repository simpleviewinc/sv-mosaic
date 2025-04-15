import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-DDfD_3TG.js";import{t as n,s as l}from"./theme-DWrYR5Gu.js";import{c as x}from"./containerQuery-XietOkEy.js";import{u as b}from"./useToggle-BK_3QGB6.js";const w=l.nav`
	${({$collapse:o})=>o?`
		border-bottom: 2px solid ${n.newColors.grey2[100]};
		padding: 0 24px;

		${x(o.minWidth,o.name)}  {
			border-bottom: 0;
			border-right: 2px solid ${n.newColors.grey2[100]};
			width: 196px;
			min-width: 196px;
			padding: 0;
			overflow: auto;
		}
	`:`
		border-right: 2px solid ${n.newColors.grey2[100]};
		width: 196px;
		min-width: 196px;
		overflow: auto;
	`}
`,u=l.div`
  	font-family: ${n.fontFamily};
`,y=l.div`
	display: flex;
	border-bottom: 2px solid ${n.newColors.grey2[100]};

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
		font-weight: ${n.fontWeight.semiBold};
	`}

	${({$collapse:o})=>o?`
		border-bottom: 4px solid transparent;
	`:`
		border-left: 3px solid transparent;
		padding: 12px 20px;
	`};

	${({$collapse:o,$isActive:e})=>o&&e&&`
		border-bottom-color: ${n.newColors.simplyGold[100]};
	`};

	${({$collapse:o,$isActive:e})=>!o&&e&&`
		background-color: ${n.newColors.grey2[100]};
		border-left-color: ${n.newColors.simplyGold[100]};
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
			background-color: ${n.newColors.grey2[100]};
			border-left-color: ${n.newColors.simplyGold[100]};
		}
	`}

	.MuiSvgIcon-root:first-child {
		color: ${n.newColors.almostBlack[100]};
		width: 16px;
		margin: -2px 0;
	}

	&:hover {
		.MuiSvgIcon-root:not(:first-child) {
			display: block;
			color: ${n.newColors.grey3[100]};
			margin: -2px -12px -2px auto;
			width: 16px;
		}
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none;
	}
`,v=l.span`
	color: ${n.newColors.almostBlack[100]};
	font-size: 14px;
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 20px;
`,k=l.span`
	color: ${n.newColors.grey4[100]};
	font-size: 10px;
	font-weight: ${n.fontWeight.semiBold};
`,C=l.div`
	align-items: center;
	background-color: ${n.newColors.simplyGold[100]};
	border-radius: 20px;
	display: flex;
	height: 20px;
	justify-content: center;
	min-width: 20px;
`,j=({items:o,collapse:e,onLinkClicked:g,active:a})=>{const p=b(o,"show",!0);return p.length?i.jsx(y,{"data-testid":"section-wrapper",$collapse:e,children:p.map((r,h)=>{var t,f;const d=r.icon,s=(t=r==null?void 0:r.action)==null?void 0:t.icon;return m.createElement($,{...r.attrs,$isActive:r.name===a,onClick:c=>g({item:r,event:c}),$collapse:e,key:`${r.label}-${h}`,className:r.name===a&&"highlight"},r.icon&&i.jsx(d,{},"link-icon"),i.jsx(v,{children:r.label},"link-text"),(r==null?void 0:r.badge)&&i.jsx(C,{children:i.jsx(k,{children:r.badge})},"badge"),((f=r==null?void 0:r.action)==null?void 0:f.icon)&&i.jsx(s,{onClick:r.action.onClick},"action-item"))})}):null},S=o=>{const{items:e,active:g,onNav:a,className:p,collapse:r}=o,h=m.useCallback(d=>{const{item:s,event:t}=d;if(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;const c=s.onNav!==void 0?s.onNav:a;c!==!1&&t.preventDefault(),typeof c=="function"&&c({item:s,event:t})},[a]);return i.jsx(w,{className:p,$collapse:r,children:i.jsx(u,{children:e.map((d,s)=>i.jsx(j,{items:d,onLinkClicked:h,active:g,collapse:r},s))})})},L=m.memo(S);export{L as S};
