import{R as n,r as h}from"./index-ePW8zFKp.js";import{s as m}from"./styled-components.browser.esm-CUKKF2J4.js";import{t as o}from"./sizes-1ZdlMWGC.js";import{c as f}from"./containerQuery-NPnQgBq-.js";import{B as v,a as y}from"./Button-BUa6dDgD.js";import{B as k}from"./Badge-BWKQiQcj.js";import{a as $}from"./stable-BFc8HSVh.js";const S=m.nav`
	font-weight: ${o.weight.medium};

	${({$collapse:e})=>e?`
		border-bottom: 1px solid ${o.color.gray[300]};
		padding: ${o.spacing(0,6)};

		${f(e.minWidth,e.name)}  {
			border-bottom: 0;
			border-right: 1px solid ${o.color.gray[300]};
			width: 200px;
			padding: 0;
			overflow: auto;
			flex: none;
		}
	`:`
		border-right: 1px solid ${o.color.gray[300]};
		width: 200px;
		overflow: auto;
		flex: none;
	`}
`,w=m.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	border-bottom: 1px solid ${o.color.gray[300]};
	display: flex;

	&:last-child{
		border-bottom: 0;
	}

	${({$collapse:e})=>e?`
		gap: ${o.spacing(2)};
		border-bottom: 0;

		${f(e.minWidth,e.name)} {
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
`,N=m.button(({$collapse:e,$isActive:t})=>`
	all: unset;
	color: inherit;
	cursor: pointer;
	padding: ${o.spacing(1,2,2)};
	display: flex;
	align-items: center;
	gap: ${o.spacing(2)};
	text-decoration: none;
	flex: 1;

	&:hover {
		background-color: ${o.color.gray[50]};
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
		${f(e.minWidth,e.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 4px solid transparent;
			display: flex;
			padding: ${o.spacing(0,4)};
			height: 44px;
		}
	`}

	${e&&t&&`
		${f(e.minWidth,e.name)} {
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
`),C=m.span`
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,I=m(v)`
	position: absolute;
	right: 0;
	margin: ${o.spacing(0,1)};
`;function B(e){const{isActive:t,onLinkClicked:p,collapse:d,...s}=e,{label:i,action:a,attrs:l=$,badge:c,icon:r}=s,u=r,g=a&&a.icon,b="href"in l&&l.href!==void 0?l.href:void 0;return n.createElement(E,null,n.createElement(N,{$isActive:t,onClick:x=>p({item:s,event:x}),$collapse:d,className:t&&"highlight",...l,...b!==void 0?{href:b,as:"a"}:{}},r&&n.createElement(u,{key:"link-icon"}),n.createElement(C,{key:"link-text"},i),c&&n.createElement(k,{variant:"dark"},c)),a&&n.createElement(I,{variant:"text",mIcon:g,onClick:a.onClick,size:"small"}))}const L=({items:e,collapse:t,onLinkClicked:p,active:d})=>{const s=y(e,"show",!0);return s.length?n.createElement(w,{"data-testid":"section-wrapper",$collapse:t},s.map((i,a)=>n.createElement(B,{...i,key:`${i.label}-${a}`,isActive:d===i.name,onLinkClicked:p,collapse:t}))):null},K=e=>{const{items:t,active:p,onNav:d,className:s,collapse:i}=e,a=h.useCallback(l=>{const{item:c,event:r}=l;if(r.ctrlKey||r.metaKey||r.shiftKey||r.altKey)return;const g=c.onNav!==void 0?c.onNav:d;g!==!1&&r.preventDefault(),typeof g=="function"&&g({item:c,event:r})},[d]);return n.createElement(S,{className:s,$collapse:i},t.map((l,c)=>n.createElement(L,{key:c,items:l,onLinkClicked:a,active:p,collapse:i})))},R=h.memo(K);export{R as S};
