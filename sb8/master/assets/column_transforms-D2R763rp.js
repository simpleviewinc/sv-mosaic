import{k as u,g as c,C as f,l as m,m as g}from"./index-C3nz5ov4.js";import{g as d,r as x,R as a}from"./index-D0AnReJb.js";import{C as w}from"./Chip-CMTBWucu.js";import{t as o,s as n,C as v}from"./sizes-BklZZmo4.js";import{r as C}from"./generateUtilityClasses-rDn4KRfY.js";import{r as b}from"./createSvgIcon-BLTtL5Y9.js";import{r as y}from"./jsx-runtime-EKYJJIwR.js";import{c as s}from"./containerQuery-CZARXB1J.js";import{I as E}from"./Image-ZO9EpWKf.js";import{a as $}from"./formats-CMvQHWsT.js";var l={},p;function _(){if(p)return l;p=1;var r=C();Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=r(b()),e=y();return l.default=(0,t.default)((0,e.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),l}var h=_();const T=d(h),P=n.div`
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
`;const R=n.div`
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

		${s("md","CONTENT")} {
			grid-template-columns: repeat(${r>1?2:1},minmax(0,1fr));
		}

		${s("lg","CONTENT")} {
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
`;var N=u();const D=d(N);function K(){return function({data:r}){return r===!0?"Yes":"No"}}function X(){return function({data:r}){return c(r,$)}}function Z(r){return function({data:t}){return m(t,r)}}function rr(r){return({data:t})=>D(t,i=>m(i,r)).filter(i=>i)}function er(){return({data:r})=>r.join(", ")}function tr({width:r,height:t}){return function({data:e}){const i=e.replace(/\/upload\//,`/upload/c_fill,h_${t},w_${r}/`);return x.createElement(E,{src:i,className:"transform_thumbnail"},null)}}function nr(){return function({data:t}){return a.createElement(R,null,t==null?void 0:t.map(e=>a.createElement(w,{key:`${e==null?void 0:e.label}-${e==null?void 0:e.value}`,label:e==null?void 0:e.label})))}}function or(){return function({data:t}){return a.createElement("div",null,a.createElement(F,null,t),a.createElement(f,{color:t}))}}const I=n.div`
	& .viewContainer {
		padding: 0;
	}
`;function ar({columns:r}){return function({data:e}){return a.createElement(I,null,a.createElement(g,{data:e,columns:r}))}}export{J as C,Q as F,P as M,G as T,or as a,X as b,tr as c,U as d,Y as e,B as f,H as g,K as h,ar as i,Z as j,rr as k,er as l,nr as t};
