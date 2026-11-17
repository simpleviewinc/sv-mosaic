import{R as n,r as b}from"./index-wekxHvEx.js";import{c as g}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as o}from"./sizes-BeWafy6f.js";import{c as u}from"./containerQuery-DwQ6QvMu.js";import{B as v,u as y}from"./Button-DIVFsLMo.js";import{B as k}from"./Badge-s3xa3C_L.js";import{a as $}from"./stable-BFc8HSVh.js";import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{c as w}from"./createSvgIcon-h9rIBQiG.js";const E=g.nav`
	font-weight: ${o.weight.medium};

	${({$collapse:e})=>e?`
		border-bottom: 1px solid ${o.color.gray[300]};
		padding: ${o.spacing(0,6)};

		${u(e.minWidth,e.name)}  {
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
`,N=g.ul`
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

		${u(e.minWidth,e.name)} {
			flex-direction: column;
			gap: 0;
		}
	`:`
		flex-direction: column;
	`}
`,C=g.li`
	position: relative;
	display: flex;
	align-items: center;
`,I=g.button(({$collapse:e,$isActive:t})=>`
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
		${u(e.minWidth,e.name)} {
			align-items: center;
			border-bottom: 0;
			border-left: 4px solid transparent;
			display: flex;
			padding: ${o.spacing(0,4)};
			height: 44px;
		}
	`}

	${e&&t&&`
		${u(e.minWidth,e.name)} {
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
`),L=g.span`
	width: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,B=g(v)`
	position: absolute;
	right: 0;
	margin: ${o.spacing(0,1)};
`;function M(e){const{isActive:t,onLinkClicked:f,collapse:s,...c}=e,{label:r,action:i,attrs:d=$,badge:m,icon:a}=c,l=a,h=i&&i.icon,p="href"in d&&d.href!==void 0?d.href:void 0;return n.createElement(C,null,n.createElement(I,{$isActive:t,onClick:x=>f({item:c,event:x}),$collapse:s,className:t&&"highlight",...d,...p!==void 0?{href:p,as:"a"}:{type:"button"}},a&&n.createElement(l,{key:"link-icon"}),n.createElement(L,{key:"link-text"},r),m&&n.createElement(k,{variant:"dark"},m)),i&&n.createElement(B,{variant:"text",mIcon:h,onClick:i.onClick,size:"small"}))}const z=({items:e,collapse:t,onLinkClicked:f,active:s})=>{const c=y(e,"show",!0);return c.length?n.createElement(N,{"data-testid":"section-wrapper",$collapse:t},c.map((r,i)=>n.createElement(M,{...r,key:`${r.label}-${i}`,isActive:s===r.name,onLinkClicked:f,collapse:t}))):null},K=e=>{const{items:t,active:f,onNav:s,className:c,collapse:r,label:i}=e,d=b.useCallback(m=>{const{item:a,event:l}=m;if(l.ctrlKey||l.metaKey||l.shiftKey||l.altKey)return;const p=a.onNav!==void 0?a.onNav:s;p!==!1&&l.preventDefault(),typeof p=="function"&&p({item:a,event:l})},[s]);return n.createElement(E,{"aria-label":i,className:c,$collapse:r},t.map((m,a)=>n.createElement(z,{key:a,items:m,onLinkClicked:d,active:f,collapse:r})))},D=b.memo(K),J=w(S.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}));export{J as L,D as S};
