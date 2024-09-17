import{j as a}from"./jsx-runtime-CexXSJP5.js";import{g as p}from"./CheckboxList-vtqXYb3p.js";import{f as d,C as f,m as u,a as c}from"./ColorSelected-tvyFmnDf.js";import{r as g}from"./index-BP8_t0zE.js";import{C as x}from"./Chip-CULEVs9E.js";import{s as n,t as o,C as w}from"./theme-Cyujm90X.js";import{i as C}from"./generateUtilityClasses-Bq4SLC4n.js";import{r as b}from"./createSvgIcon-CLmY5moR.js";import{c as l}from"./containerQuery-CxIxOiDA.js";import{I as v}from"./Image-DvId9fRZ.js";import{a as y}from"./formats-CDjt32hU.js";var s={},_=C;Object.defineProperty(s,"__esModule",{value:!0});var m=s.default=void 0,$=_(b()),j=a;m=s.default=(0,$.default)((0,j.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");const q=n.div`
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
`;const T=n.div`
	display: flex;
	row-gap: 8px;
	flex-wrap: wrap;

	div:not(:last-child) {
		margin-right: 12px;
	}
`,E=n.p`
	color: ${o.newColors.grey3[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,L=n.div`
	container-type: inline-size;
	container-name: ${w.CONTENT};
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
`,Q=n.dd`
	color: ${o.newColors.grey3[100]};
	font-size: 14px;
	margin: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
`,U=n.span`
	display: table-cell;
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;function Y(){return function({data:r}){return r===!0?"Yes":"No"}}function B(){return function({data:r}){return d(r,y)}}function J(r){return function({data:t}){return p(t,r)}}function K(r){return({data:t})=>u(t,i=>p(i,r)).filter(i=>i)}function X(){return({data:r})=>r.join(", ")}function Z({width:r,height:t}){return function({data:e}){const i=e.replace(/\/upload\//,`/upload/c_fill,h_${t},w_${r}/`);return g.createElement(v,{src:i,className:"transform_thumbnail"},null)}}function rr(){return function({data:t}){return a.jsx(T,{children:t==null?void 0:t.map(e=>a.jsx(x,{label:e==null?void 0:e.label},`${e==null?void 0:e.label}-${e==null?void 0:e.value}`))})}}function er(){return function({data:t}){return a.jsxs("div",{children:[a.jsx(E,{children:t}),a.jsx(f,{color:t})]})}}const h=n.div`
	& .viewContainer {
		padding: 0;
	}
`;function tr({columns:r}){return function({data:e}){return a.jsx(h,{children:a.jsx(c,{data:e,columns:r})})}}export{P as C,G as F,q as M,A as T,er as a,B as b,Z as c,H as d,Q as e,U as f,L as g,T as h,Y as i,tr as j,J as k,K as l,X as m,rr as t};
