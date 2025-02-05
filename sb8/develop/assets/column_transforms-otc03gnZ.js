import{r as u,j as a}from"./jsx-runtime-DiwAibxM.js";import{r as f,f as c,C as x,g as d,a as g}from"./ColorSelected-DSajfO12.js";import{g as m,r as w}from"./index-Btj5Fd67.js";import{C}from"./Chip-Bn2vqR2u.js";import{s as n,t as o,C as v}from"./theme-C7C0QMlu.js";import{i as b}from"./generateUtilityClasses-oWyMxXuq.js";import{r as y}from"./createSvgIcon-C7F5N1gl.js";import{c as l}from"./containerQuery-BqcK0eeN.js";import{I as $}from"./Image-CNIFLnmm.js";import{a as _}from"./formats-sBod7wm8.js";var s={},p;function j(){if(p)return s;p=1;var r=b();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var t=r(y()),e=u();return s.default=(0,t.default)((0,e.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),s}var E=j();const T=m(E),P=n.div`
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
`,G=n.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	&.title-bar {
		background: ${o.newColors.grey2[100]};
		padding: 8px 16px;
	}
`;n(T)`
	color: ${o.newColors.grey3[100]};
	cursor: pointer;

	&.MuiSvgIcon-root {
		border-right: 1px solid ${o.newColors.grey2[100]};
		padding-right: 16px;
		width: 16px;
	}
`;const h=n.div`
	display: flex;
	row-gap: 8px;
	flex-wrap: wrap;

	div:not(:last-child) {
		margin-right: 12px;
	}
`,F=n.p`
	color: ${o.newColors.grey3[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,H=n.div`
	container-type: inline-size;
	container-name: ${v.CONTENT};
`,J=n.dl`
	display: grid;
	gap: 0 12px;
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

`,Q=n.div`
	${({$margin:r})=>r&&`
		margin-bottom: 24px;
	`}
`,U=n.dt`
	color: ${o.newColors.grey4[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
	display: flex;
	align-items: center;
	gap: 8px;
	min-height: 24px;
`,Y=n.dd`
	color: ${o.newColors.grey3[100]};
	font-size: 14px;
	margin: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
`,B=n.span`
	display: table-cell;
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;var N=f();const R=m(N);function K(){return function({data:r}){return r===!0?"Yes":"No"}}function X(){return function({data:r}){return c(r,_)}}function Z(r){return function({data:t}){return d(t,r)}}function rr(r){return({data:t})=>R(t,i=>d(i,r)).filter(i=>i)}function er(){return({data:r})=>r.join(", ")}function tr({width:r,height:t}){return function({data:e}){const i=e.replace(/\/upload\//,`/upload/c_fill,h_${t},w_${r}/`);return w.createElement($,{src:i,className:"transform_thumbnail"},null)}}function nr(){return function({data:t}){return a.jsx(h,{children:t==null?void 0:t.map(e=>a.jsx(C,{label:e==null?void 0:e.label},`${e==null?void 0:e.label}-${e==null?void 0:e.value}`))})}}function or(){return function({data:t}){return a.jsxs("div",{children:[a.jsx(F,{children:t}),a.jsx(x,{color:t})]})}}const D=n.div`
	& .viewContainer {
		padding: 0;
	}
`;function ar({columns:r}){return function({data:e}){return a.jsx(D,{children:a.jsx(g,{data:e,columns:r})})}}export{J as C,Q as F,P as M,G as T,or as a,X as b,tr as c,U as d,Y as e,B as f,H as g,h,K as i,ar as j,Z as k,rr as l,er as m,nr as t};
