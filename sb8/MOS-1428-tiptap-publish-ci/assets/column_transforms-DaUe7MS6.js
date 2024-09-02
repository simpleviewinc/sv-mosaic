import{r as d,j as a}from"./jsx-runtime-nGUw9YhZ.js";import{g as p}from"./CheckboxList-KMp2i93r.js";import{f as u,C as f,m as c,a as x}from"./ColorSelected-BP7nqoPF.js";import{r as g}from"./index-BP8_t0zE.js";import{C as w}from"./Chip-ClM3atSE.js";import{s as n,t as o,C}from"./theme-D4oZEIDo.js";import{r as b,i as v}from"./createSvgIcon-FZ6f8RnB.js";import{c as l}from"./containerQuery-Du8CFTMo.js";import{I as y}from"./Image-DW9YTXUC.js";import{a as _}from"./formats-CDjt32hU.js";var s={},$=v;Object.defineProperty(s,"__esModule",{value:!0});var m=s.default=void 0,j=$(b()),T=d();m=s.default=(0,j.default)((0,T.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");const q=n.div`
	font-family: ${o.fontFamily};
	padding: 16px 0px;
	margin: 0px 16px;

	&.content-wrapper + .content-wrapper {
		border-top: 2px solid ${o.newColors.grey2[100]};
	}

	&.card-wrapper {
		border: 2px solid ${o.newColors.grey2[100]};
		width: 100%;
		padding: 0px;
		margin: 0px;
	}

	& .card-content {
		padding: 0px 16px;
	}
`,A=n.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	&.title-bar {
		background: ${o.newColors.grey2[100]};
		padding: 8px 16px;
	}
`;n(m)`
	color: ${o.newColors.grey3[100]};
	cursor: pointer;

	&.MuiSvgIcon-root {
		border-right: 1px solid ${o.newColors.grey2[100]};
		padding-right: 16px;
		width: 16px;
	}
`;const E=n.div`
	display: flex;
	row-gap: 8px;
	flex-wrap: wrap;

	div:not(:last-child) {
		margin-right: 12px;
	}
`,h=n.p`
	color: ${o.newColors.grey3[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,L=n.div`
	container-type: inline-size;
	container-name: ${C.CONTENT};
`,P=n.dl`
	display: grid;
	row-gap: 12px;
	width: 100%;
	margin: 0;
	grid-template-columns: repeat(${({$columns:r})=>r} ,minmax(0,1fr));

	&.card-row + .card-row {
		border-top: 2px solid ${o.newColors.grey2[100]};
		padding-top: 16px;
	}

	${({$columns:r})=>`
		grid-template-columns: repeat(1,minmax(0,1fr));

		${l("md","CONTENT")} {
			grid-template-columns: repeat(${r>1?2:1},minmax(0,1fr));
		}

		${l("lg","CONTENT")} {
			grid-template-columns: repeat(${r},minmax(0,1fr));
		}
	`}

`,G=n.div`
	${({$margin:r})=>r&&`
		margin-bottom: 24px;
	`}
`,H=n.dt`
	color: ${o.newColors.grey4[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,J=n.dd`
	color: ${o.newColors.grey3[100]};
	font-size: 14px;
	margin: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
`,Q=n.span`
	display: table-cell;
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;function U(){return function({data:r}){return r===!0?"Yes":"No"}}function Y(){return function({data:r}){return u(r,_)}}function B(r){return function({data:t}){return p(t,r)}}function K(r){return({data:t})=>c(t,i=>p(i,r)).filter(i=>i)}function X(){return({data:r})=>r.join(", ")}function Z({width:r,height:t}){return function({data:e}){const i=e.replace(/\/upload\//,`/upload/c_fill,h_${t},w_${r}/`);return g.createElement(y,{src:i,className:"transform_thumbnail"},null)}}function rr(){return function({data:t}){return a.jsx(E,{children:t==null?void 0:t.map(e=>a.jsx(w,{label:e==null?void 0:e.label},`${e==null?void 0:e.label}-${e==null?void 0:e.value}`))})}}function er(){return function({data:t}){return a.jsxs("div",{children:[a.jsx(h,{children:t}),a.jsx(f,{color:t})]})}}const N=n.div`
	& .viewContainer {
		padding: 0;
	}
`;function tr({columns:r}){return function({data:e}){return a.jsx(N,{children:a.jsx(x,{data:e,columns:r})})}}export{P as C,G as F,q as M,A as T,er as a,Y as b,Z as c,H as d,J as e,Q as f,L as g,E as h,U as i,tr as j,B as k,K as l,X as m,rr as t};
