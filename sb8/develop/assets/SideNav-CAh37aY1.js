import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{s as l,t as n}from"./theme-CtvfJOCv.js";import{c as x}from"./containerQuery-C4iAQuB_.js";import{u as b}from"./useToggle-lipGlewK.js";const w=l.nav`
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
`,C=l.span`
	color: ${n.newColors.grey4[100]};
	font-size: 10px;
	font-weight: ${n.fontWeight.semiBold};
`,k=l.div`
	align-items: center;
	background-color: ${n.newColors.simplyGold[100]};
	border-radius: 20px;
	display: flex;
	height: 20px;
	justify-content: center;
	min-width: 20px;
`,j=({items:o,collapse:e,onLinkClicked:h,active:a})=>{const p=b(o,"show",!0);return p.length?i.jsx(y,{"data-testid":"section-wrapper",$collapse:e,children:p.map((r,g)=>{var t,f;const d=r.icon,s=(t=r==null?void 0:r.action)==null?void 0:t.icon;return m.createElement($,{...r.attrs,$isActive:r.name===a,onClick:c=>h({item:r,event:c}),$collapse:e,key:`${r.label}-${g}`,className:r.name===a&&"highlight"},r.icon&&i.jsx(d,{}),i.jsx(v,{children:r.label}),(r==null?void 0:r.badge)&&i.jsx(k,{children:i.jsx(C,{children:r.badge})}),((f=r==null?void 0:r.action)==null?void 0:f.icon)&&i.jsx(s,{onClick:r.action.onClick}))})}):null},S=o=>{const{items:e,active:h,onNav:a,className:p,collapse:r}=o,g=m.useCallback(d=>{const{item:s,event:t}=d;if(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;const c=s.onNav!==void 0?s.onNav:a;c!==!1&&t.preventDefault(),typeof c=="function"&&c({item:s,event:t})},[a]);return i.jsx(w,{className:p,$collapse:r,children:i.jsx(u,{children:e.map((d,s)=>i.jsx(j,{items:d,onLinkClicked:g,active:h,collapse:r},s))})})},L=m.memo(S);export{L as S};
