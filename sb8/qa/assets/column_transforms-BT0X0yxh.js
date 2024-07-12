import{r as d,j as a}from"./jsx-runtime-nGUw9YhZ.js";import{g as l}from"./CheckboxList-D1zEVDHX.js";import{f as m,C as u,m as f,a as c}from"./ColorSelected-Bv70I260.js";import{r as x}from"./index-BP8_t0zE.js";import{C as g}from"./Chip-DZJmUX56.js";import{s as o,t as n}from"./theme-CtvfJOCv.js";import{r as w,i as v}from"./createSvgIcon-Coberten.js";import{I as b}from"./Image-DW9YTXUC.js";import{a as C}from"./formats-CDjt32hU.js";var s={},_=v;Object.defineProperty(s,"__esModule",{value:!0});var p=s.default=void 0,y=_(w()),j=d(),$=(0,y.default)((0,j.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");p=s.default=$;const q=o.div`
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
`,L=o.div`
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
`;const h=o.div`
	display: flex;
	row-gap: 8px;
	flex-wrap: wrap;

	div:not(:last-child) {
		margin-right: 12px;
	}
`,F=o.p`
	color: ${n.newColors.grey3[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,O=o.div``,A=o.dl`
	display: grid;
	grid-template-columns: repeat(${({$columns:r})=>r} ,minmax(0,1fr));
	gap: 12px;
	width: 100%;
	margin: 0;

	&.card-row + .card-row {
		border-top: 2px solid ${n.newColors.grey2[100]};
		padding-top: 16px;
	}
`,N=o.div`
	margin-bottom: 24px;
`,P=o.dt`
	color: ${n.newColors.grey4[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,G=o.dd`
	color: ${n.newColors.grey3[100]};
	font-size: 14px;
	margin: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
`,H=o.span`
	display: table-cell;
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;function J(){return function({data:r}){return r===!0?"Yes":"No"}}function U(){return function({data:r}){return m(r,C)}}function Y(r){return function({data:t}){return l(t,r)}}function B(r){return({data:t})=>f(t,i=>l(i,r)).filter(i=>i)}function K(){return({data:r})=>r.join(", ")}function Q({width:r,height:t}){return function({data:e}){const i=e.replace(/\/upload\//,`/upload/c_fill,h_${t},w_${r}/`);return x.createElement(b,{src:i,className:"transform_thumbnail"},null)}}function X(){return function({data:t}){return a.jsx(h,{children:t==null?void 0:t.map(e=>a.jsx(g,{label:e==null?void 0:e.label},`${e==null?void 0:e.label}-${e==null?void 0:e.value}`))})}}function Z(){return function({data:t}){return a.jsxs("div",{children:[a.jsx(F,{children:t}),a.jsx(u,{color:t})]})}}const D=o.div`
	& .viewContainer {
		padding: 0;
	}
`;function rr({columns:r}){return function({data:e}){return a.jsx(D,{children:a.jsx(c,{data:e,columns:r})})}}export{A as C,N as F,q as M,L as T,Z as a,U as b,Q as c,P as d,G as e,H as f,O as g,h,J as i,rr as j,Y as k,B as l,K as m,X as t};
