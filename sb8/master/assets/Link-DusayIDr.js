import{R as n,r as b}from"./index-wekxHvEx.js";import{c as m}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as e}from"./sizes-BeWafy6f.js";import{c as f}from"./containerQuery-DwQ6QvMu.js";import{B as v,u as y}from"./Button-DIVFsLMo.js";import{B as k}from"./Badge-s3xa3C_L.js";import{a as $}from"./stable-BFc8HSVh.js";import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{c as w}from"./createSvgIcon-h9rIBQiG.js";const E=m.nav`
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
			flex: none;
		}
	`:`
		border-right: 1px solid ${e.color.gray[300]};
		width: 200px;
		overflow: auto;
		flex: none;
	`}
`,N=m.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	border-bottom: 1px solid ${e.color.gray[300]};
	display: flex;

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
`,C=m.li`
	position: relative;
	display: flex;
	align-items: center;
`,I=m.button(({$collapse:o,$isActive:t})=>`
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
`),L=m.span`
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,B=m(v)`
	position: absolute;
	right: 0;
	margin: ${e.spacing(0,1)};
`;function M(o){const{isActive:t,onLinkClicked:p,collapse:d,...s}=o,{label:i,action:a,attrs:c=$,badge:l,icon:r}=s,u=r,g=a&&a.icon,h="href"in c&&c.href!==void 0?c.href:void 0;return n.createElement(C,null,n.createElement(I,{$isActive:t,onClick:x=>p({item:s,event:x}),$collapse:d,className:t&&"highlight",...c,...h!==void 0?{href:h,as:"a"}:{}},r&&n.createElement(u,{key:"link-icon"}),n.createElement(L,{key:"link-text"},i),l&&n.createElement(k,{variant:"dark"},l)),a&&n.createElement(B,{variant:"text",mIcon:g,onClick:a.onClick,size:"small"}))}const z=({items:o,collapse:t,onLinkClicked:p,active:d})=>{const s=y(o,"show",!0);return s.length?n.createElement(N,{"data-testid":"section-wrapper",$collapse:t},s.map((i,a)=>n.createElement(M,{...i,key:`${i.label}-${a}`,isActive:d===i.name,onLinkClicked:p,collapse:t}))):null},K=o=>{const{items:t,active:p,onNav:d,className:s,collapse:i}=o,a=b.useCallback(c=>{const{item:l,event:r}=c;if(r.ctrlKey||r.metaKey||r.shiftKey||r.altKey)return;const g=l.onNav!==void 0?l.onNav:d;g!==!1&&r.preventDefault(),typeof g=="function"&&g({item:l,event:r})},[d]);return n.createElement(E,{className:s,$collapse:i},t.map((c,l)=>n.createElement(z,{key:l,items:c,onLinkClicked:a,active:p,collapse:i})))},D=b.memo(K),J=w(S.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}));export{J as L,D as S};
