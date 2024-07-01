import{j as a}from"./jsx-runtime-CexXSJP5.js";import{g as l}from"./CheckboxList-BCG88NR0.js";import{f as d,m,C as u,a as f}from"./ColorSelected-CHRnBGKw.js";import{r as c}from"./index-BP8_t0zE.js";import{C as x}from"./Chip-C1CRxgK0.js";import{s as o,t as n}from"./theme-CtvfJOCv.js";import{r as g,i as w}from"./createSvgIcon-CQgce1KM.js";import{I as v}from"./Image-DvId9fRZ.js";import{a as b}from"./formats-CDjt32hU.js";var s={},C=w;Object.defineProperty(s,"__esModule",{value:!0});var p=s.default=void 0,_=C(g()),y=a,j=(0,_.default)((0,y.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");p=s.default=j;const k=o.div`
	font-family: ${n.fontFamily};
	padding: 16px 0px;
	margin: 0px 16px;

	&.content-wrapper + .content-wrapper {
		border-top: 2px solid ${n.newColors.grey2[100]};
	}

	&.card-wrapper {
		border: 2px solid ${n.newColors.grey2[100]};
		width: 100%;
		padding: 0px;
		margin: 0px;
	}

	& .card-content {
		padding: 0px 16px;
	}
`,q=o.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	&.title-bar {
		background: ${n.newColors.grey2[100]};
		padding: 8px 16px;
	}
`;o(p)`
	color: ${n.newColors.grey3[100]};
	cursor: pointer;

	&.MuiSvgIcon-root {
		border-right: 1px solid ${n.newColors.grey2[100]};
		padding-right: 16px;
		width: 16px;
	}
`;const $=o.div`
	display: flex;
	row-gap: 8px;
	flex-wrap: wrap;

	div:not(:last-child) {
		margin-right: 12px;
	}
`,h=o.p`
	color: ${n.newColors.grey3[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,L=o.div``,O=o.dl`
	display: grid;
	grid-template-columns: repeat(${({$columns:r})=>r} ,minmax(0,1fr));
	gap: 12px;
	width: 100%;
	margin: 0;

	&.card-row + .card-row {
		border-top: 2px solid ${n.newColors.grey2[100]};
		padding-top: 16px;
	}
`,A=o.div`
	margin-bottom: 24px;
`,N=o.dt`
	color: ${n.newColors.grey4[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,P=o.dd`
	color: ${n.newColors.grey3[100]};
	font-size: 14px;
	margin: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
`,G=o.span`
	display: table-cell;
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;function H(){return function({data:r}){return r===!0?"Yes":"No"}}function U(){return function({data:r}){return d(r,b)}}function Y(r){return function({data:t}){return l(t,r)}}function B(r){return({data:t})=>m(t,i=>l(i,r)).filter(i=>i)}function J(){return({data:r})=>r.join(", ")}function K({width:r,height:t}){return function({data:e}){const i=e.replace(/\/upload\//,`/upload/c_fill,h_${t},w_${r}/`);return c.createElement(v,{src:i,className:"transform_thumbnail"},null)}}function Q(){return function({data:t}){return a.jsx($,{children:t==null?void 0:t.map(e=>a.jsx(x,{label:e==null?void 0:e.label},`${e==null?void 0:e.label}-${e==null?void 0:e.value}`))})}}function X(){return function({data:t}){return a.jsxs("div",{children:[a.jsx(h,{children:t}),a.jsx(u,{color:t})]})}}const F=o.div`
	& .viewContainer {
		padding: 0;
	}
`;function Z({columns:r}){return function({data:e}){return a.jsx(F,{children:a.jsx(f,{data:e,columns:r})})}}export{O as C,A as F,k as M,q as T,N as a,P as b,G as c,L as d,$ as e,H as f,U as g,X as h,K as i,Z as j,Y as k,B as l,J as m,Q as t};
