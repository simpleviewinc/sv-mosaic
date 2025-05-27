import{r as h,R as r}from"./index-D0AnReJb.js";import{t,s as d}from"./sizes-BklZZmo4.js";import{c as m}from"./containerQuery-CZARXB1J.js";import{u}from"./useToggle-CTbnrs6g.js";const b=d.nav`
	${({$collapse:o})=>o?`
		border-bottom: 2px solid ${t.newColors.grey2[100]};
		padding: 0 24px;

		${m(o.minWidth,o.name)}  {
			border-bottom: 0;
			border-right: 2px solid ${t.newColors.grey2[100]};
			width: 196px;
			min-width: 196px;
			padding: 0;
			overflow: auto;
		}
	`:`
		border-right: 2px solid ${t.newColors.grey2[100]};
		width: 196px;
		min-width: 196px;
		overflow: auto;
	`}
`,v=d.div`
  	font-family: ${t.fontFamily};
`,y=d.div`
	display: flex;
	border-bottom: 2px solid ${t.newColors.grey2[100]};

	&:last-child{
		border-bottom: 0;
	}

	${({$collapse:o})=>o?`
		gap: 40px;
		border-bottom: 0;

		${m(o.minWidth,o.name)} {
			flex-direction: column;
			gap: 0;
		}
	`:`
		flex-direction: column;
	`}
`,w=d.a`
	cursor: pointer;
	padding-bottom: 16px;
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;

	${({$isActive:o})=>o&&`
		font-weight: ${t.fontWeight.semiBold};
	`}

	${({$collapse:o})=>o?`
		border-bottom: 4px solid transparent;
	`:`
		border-left: 3px solid transparent;
		padding: 12px 20px;
	`};

	${({$collapse:o,$isActive:n})=>o&&n&&`
		border-bottom-color: ${t.newColors.simplyGold[100]};
	`};

	${({$collapse:o,$isActive:n})=>!o&&n&&`
		background-color: ${t.newColors.grey2[100]};
		border-left-color: ${t.newColors.simplyGold[100]};
	`};

	${({$collapse:o})=>o&&`
		${m(o.minWidth,o.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 3px solid transparent;
			display: flex;
			padding: 12px 20px;
		}
	`}

	${({$collapse:o,$isActive:n})=>o&&n&&`
		${m(o.minWidth,o.name)} {
			background-color: ${t.newColors.grey2[100]};
			border-left-color: ${t.newColors.simplyGold[100]};
		}
	`}

	.MuiSvgIcon-root:first-child {
		color: ${t.newColors.almostBlack[100]};
		width: 16px;
		margin: -2px 0;
	}

	&:hover {
		.MuiSvgIcon-root:not(:first-child) {
			display: block;
			color: ${t.newColors.grey3[100]};
			margin: -2px -12px -2px auto;
			width: 16px;
		}
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none;
	}
`,$=d.span`
	color: ${t.newColors.almostBlack[100]};
	font-size: 14px;
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 20px;
`,k=d.span`
	color: ${t.newColors.grey4[100]};
	font-size: 10px;
	font-weight: ${t.fontWeight.semiBold};
`,C=d.div`
	align-items: center;
	background-color: ${t.newColors.simplyGold[100]};
	border-radius: 20px;
	display: flex;
	height: 20px;
	justify-content: center;
	min-width: 20px;
`,E=({items:o,collapse:n,onLinkClicked:g,active:s})=>{const p=u(o,"show",!0);return p.length?r.createElement(y,{"data-testid":"section-wrapper",$collapse:n},p.map((e,f)=>{var a,i;const l=e.icon,x=(a=e==null?void 0:e.action)===null||a===void 0?void 0:a.icon;return r.createElement(w,{...e.attrs,$isActive:e.name===s,onClick:c=>g({item:e,event:c}),$collapse:n,key:`${e.label}-${f}`,className:e.name===s&&"highlight"},e.icon&&r.createElement(l,{key:"link-icon"}),r.createElement($,{key:"link-text"},e.label),(e==null?void 0:e.badge)&&r.createElement(C,{key:"badge"},r.createElement(k,null,e.badge)),((i=e==null?void 0:e.action)===null||i===void 0?void 0:i.icon)&&r.createElement(x,{key:"action-item",onClick:e.action.onClick}))})):null},N=o=>{const{items:n,active:g,onNav:s,className:p,collapse:e}=o,f=h.useCallback(a=>{const{item:i,event:l}=a;if(l.ctrlKey||l.metaKey||l.shiftKey||l.altKey)return;const c=i.onNav!==void 0?i.onNav:s;c!==!1&&l.preventDefault(),typeof c=="function"&&c({item:i,event:l})},[s]);return r.createElement(b,{className:p,$collapse:e},r.createElement(v,null,n.map((a,i)=>r.createElement(E,{key:i,items:a,onLinkClicked:f,active:g,collapse:e}))))},L=h.memo(N);export{L as S};
