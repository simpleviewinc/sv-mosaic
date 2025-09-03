import{r as h,R as a}from"./index-D0AnReJb.js";import{s as f}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as o}from"./sizes-DkIXWPpc.js";import{c as g}from"./containerQuery-CYj0-5X2.js";import{u as x}from"./useToggle-CTbnrs6g.js";import{B as k}from"./Badge-D14GCFVi.js";import{E as y}from"./stable-CpItcOrb.js";const $=f.nav`
	font-weight: ${o.weight.medium};

	${({$collapse:e})=>e?`
		border-bottom: 1px solid ${o.color.gray[300]};
		padding: ${o.spacing(0,6)};

		${g(e.minWidth,e.name)}  {
			border-bottom: 0;
			border-right: 1px solid ${o.color.gray[300]};
			width: 200px;
			padding: 0;
			overflow: auto;
		}
	`:`
		border-right: 1px solid ${o.color.gray[300]};
		width: 200px;
		overflow: auto;
	`}
`,w=f.div`
	display: flex;
	border-bottom: 1px solid ${o.color.gray[300]};

	&:last-child{
		border-bottom: 0;
	}

	${({$collapse:e})=>e?`
		gap: ${o.spacing(2)};
		border-bottom: 0;

		${g(e.minWidth,e.name)} {
			flex-direction: column;
			gap: 0;
		}
	`:`
		flex-direction: column;
	`}
`,E=f.button(({$collapse:e,$isActive:t})=>`
	all: unset;
	color: inherit;
	cursor: pointer;
	padding: ${o.spacing(1,2,2)};
	display: flex;
	align-items: center;
	gap: ${o.spacing(2)};
	text-decoration: none;

	&:hover {
		background-color: ${o.color.gray[50]};

		.MuiSvgIcon-root:not(:first-child) {
			display: block;
			font-size: ${o.fontSize.icon.sm};
			margin-left: auto;
		}
	}

	${t?`
		&:focus-visible {
			outline: 4px solid ${o.color.gold[400]};
			outline-offset: -4px;
		}
	`:`
		&:focus-visible {
			outline: 2px solid ${o.color.black};
			outline-offset: -6px;
		}
	`}

	${e?`
		border-bottom: 4px solid transparent;
	`:`
		border-left: 4px solid transparent;
		padding: ${o.spacing(0,4)};
		height: 44px;
	`};

	${e&&t&&`
		border-bottom-color: ${o.color.gold[400]};
	`};

	${!e&&t&&`
		background-color: ${o.color.gray[50]};
		border-left-color: ${o.color.gold[400]};
		box-shadow:
			0 0 6px 0 rgba(0, 0, 0, 0.04) inset,
			0 -1px 0 0 rgba(0, 0, 0, 0.02) inset;

		&:hover {
			background-color: ${o.color.gray[100]};
		}
	`};

	${e&&`
		${g(e.minWidth,e.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 4px solid transparent;
			display: flex;
			padding: ${o.spacing(0,4)};
			height: 44px;
		}
	`}

	${e&&t&&`
		${g(e.minWidth,e.name)} {
			background-color: ${o.color.gray[50]};
			border-left-color: ${o.color.gold[400]};
			box-shadow:
				0 0 6px 0 rgba(0, 0, 0, 0.04) inset,
				0 -1px 0 0 rgba(0, 0, 0, 0.02) inset;

			&:hover {
				background-color: ${o.color.gray[100]};
			}
		}
	`}

	.MuiSvgIcon-root:first-child {
		font-size: ${o.fontSize.icon.sm};
	}

	.MuiSvgIcon-root:not(:first-child) {
		display: none;
	}
`),S=f.span`
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,N=({items:e,collapse:t,onLinkClicked:u,active:d})=>{const p=x(e,"show",!0);return p.length?a.createElement(w,{"data-testid":"section-wrapper",$collapse:t},p.map(({attrs:l=y,...n},c)=>{var i,r;const m=n.icon,s=(i=n==null?void 0:n.action)===null||i===void 0?void 0:i.icon,b="href"in l&&l.href!==void 0?l.href:void 0;return a.createElement(E,{$isActive:n.name===d,onClick:v=>u({item:n,event:v}),$collapse:t,key:`${n.label}-${c}`,className:n.name===d&&"highlight",...l,...b!==void 0?{href:b,as:"a"}:{}},n.icon&&a.createElement(m,{key:"link-icon"}),a.createElement(S,{key:"link-text"},n.label),(n==null?void 0:n.badge)&&a.createElement(k,{variant:"dark"},n.badge),((r=n==null?void 0:n.action)===null||r===void 0?void 0:r.icon)&&a.createElement(s,{key:"action-item",onClick:n.action.onClick}))})):null},C=e=>{const{items:t,active:u,onNav:d,className:p,collapse:l}=e,n=h.useCallback(c=>{const{item:i,event:r}=c;if(r.ctrlKey||r.metaKey||r.shiftKey||r.altKey)return;const s=i.onNav!==void 0?i.onNav:d;s!==!1&&r.preventDefault(),typeof s=="function"&&s({item:i,event:r})},[d]);return a.createElement($,{className:p,$collapse:l},a.createElement("div",null,t.map((c,i)=>a.createElement(N,{key:i,items:c,onLinkClicked:n,active:u,collapse:l}))))},T=h.memo(C);export{T as S};
