import{R as n,r as h}from"./index-D0AnReJb.js";import{s as m}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as e}from"./sizes-DkIXWPpc.js";import{c as f}from"./containerQuery-CYj0-5X2.js";import{B as v,a as y}from"./Button-Dlaq5vsb.js";import{B as k}from"./Badge-D14GCFVi.js";import{E as $}from"./stable-CpItcOrb.js";const S=m.nav`
	font-weight: ${e.weight.medium};

	${({$collapse:o})=>o?`
		border-bottom: 1px solid ${e.color.gray[300]};
		padding: ${e.spacing(0,6)};

		${f(o.minWidth,o.name)}  {
			border-bottom: 0;
			border-right: 1px solid ${e.color.gray[300]};
			width: 200px;
			padding: 0;
			overflow: auto;
		}
	`:`
		border-right: 1px solid ${e.color.gray[300]};
		width: 200px;
		overflow: auto;
	`}
`,w=m.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	border-bottom: 1px solid ${e.color.gray[300]};

	&:last-child{
		border-bottom: 0;
	}

	${({$collapse:o})=>o?`
		gap: ${e.spacing(2)};
		border-bottom: 0;

		${f(o.minWidth,o.name)} {
			flex-direction: column;
			gap: 0;
		}
	`:`
		flex-direction: column;
	`}
`,E=m.li`
	position: relative;
	display: flex;
	align-items: center;
`,N=m.button(({$collapse:o,$isActive:t})=>`
	all: unset;
	color: inherit;
	cursor: pointer;
	padding: ${e.spacing(1,2,2)};
	display: flex;
	align-items: center;
	gap: ${e.spacing(2)};
	text-decoration: none;
	flex: 1;

	&:hover {
		background-color: ${e.color.gray[50]};
	}

	${t?`
		&:focus-visible {
			outline: 4px solid ${e.color.gold[400]};
			outline-offset: -4px;
		}
	`:`
		&:focus-visible {
			outline: 2px solid ${e.color.black};
			outline-offset: -6px;
		}
	`}

	${o?`
		border-bottom: 4px solid transparent;
	`:`
		border-left: 4px solid transparent;
		padding: ${e.spacing(0,4)};
		height: 44px;
	`};

	${o&&t&&`
		border-bottom-color: ${e.color.gold[400]};
	`};

	${!o&&t&&`
		background-color: ${e.color.gray[50]};
		border-left-color: ${e.color.gold[400]};
		box-shadow:
			0 0 6px 0 rgba(0, 0, 0, 0.04) inset,
			0 -1px 0 0 rgba(0, 0, 0, 0.02) inset;

		&:hover {
			background-color: ${e.color.gray[100]};
		}
	`};

	${o&&`
		${f(o.minWidth,o.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 4px solid transparent;
			display: flex;
			padding: ${e.spacing(0,4)};
			height: 44px;
		}
	`}

	${o&&t&&`
		${f(o.minWidth,o.name)} {
			background-color: ${e.color.gray[50]};
			border-left-color: ${e.color.gold[400]};
			box-shadow:
				0 0 6px 0 rgba(0, 0, 0, 0.04) inset,
				0 -1px 0 0 rgba(0, 0, 0, 0.02) inset;

			&:hover {
				background-color: ${e.color.gray[100]};
			}
		}
	`}

	.MuiSvgIcon-root:first-child {
		font-size: ${e.fontSize.icon.sm};
	}
`),C=m.span`
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,I=m(v)`
	position: absolute;
	right: 0;
	margin: ${e.spacing(0,1)};
`;function B(o){const{isActive:t,onLinkClicked:p,collapse:d,...s}=o,{label:i,action:a,attrs:l=$,badge:c,icon:r}=s,u=r,g=a&&a.icon,b="href"in l&&l.href!==void 0?l.href:void 0;return n.createElement(E,null,n.createElement(N,{$isActive:t,onClick:x=>p({item:s,event:x}),$collapse:d,className:t&&"highlight",...l,...b!==void 0?{href:b,as:"a"}:{}},r&&n.createElement(u,{key:"link-icon"}),n.createElement(C,{key:"link-text"},i),c&&n.createElement(k,{variant:"dark"},c)),a&&n.createElement(I,{variant:"text",mIcon:g,onClick:a.onClick,size:"small"}))}const L=({items:o,collapse:t,onLinkClicked:p,active:d})=>{const s=y(o,"show",!0);return s.length?n.createElement(w,{"data-testid":"section-wrapper",$collapse:t},s.map((i,a)=>n.createElement(B,{...i,key:`${i.label}-${a}`,isActive:d===i.name,onLinkClicked:p,collapse:t}))):null},K=o=>{const{items:t,active:p,onNav:d,className:s,collapse:i}=o,a=h.useCallback(l=>{const{item:c,event:r}=l;if(r.ctrlKey||r.metaKey||r.shiftKey||r.altKey)return;const g=c.onNav!==void 0?c.onNav:d;g!==!1&&r.preventDefault(),typeof g=="function"&&g({item:c,event:r})},[d]);return n.createElement(S,{className:s,$collapse:i},t.map((l,c)=>n.createElement(L,{key:c,items:l,onLinkClicked:a,active:p,collapse:i})))},R=h.memo(K);export{R as S};
