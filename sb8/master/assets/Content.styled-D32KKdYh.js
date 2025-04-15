import{t as e,s as r,C as d}from"./theme-DWrYR5Gu.js";import{r as s}from"./jsx-runtime-EKYJJIwR.js";import{g as l}from"./index-DDfD_3TG.js";import{h as m}from"./generateUtilityClasses-Dav9K5Jg.js";import{r as g}from"./createSvgIcon-ryN2wBPb.js";import{c as i}from"./containerQuery-XietOkEy.js";var o={},a;function c(){if(a)return o;a=1;var t=m();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=t(g()),p=s();return o.default=(0,n.default)((0,p.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),o}var x=c();const f=l(x),h=r.div`
	font-family: ${e.fontFamily};
	padding: 16px 0px;
	margin: 0px 16px;

	&.content-wrapper + .content-wrapper {
		border-top: 2px solid ${e.newColors.grey2[100]};
	}

	&.card-wrapper {
		border: 2px solid ${e.newColors.grey2[100]};
		width: 100%;
		padding: 0px;
		margin: 0px;
	}

	& .card-content {
		padding: 0px 16px;
	}
`,$=r.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	&.title-bar {
		background: ${e.newColors.grey2[100]};
		padding: 8px 16px;
	}
`;r(f)`
	color: ${e.newColors.grey3[100]};
	cursor: pointer;

	&.MuiSvgIcon-root {
		border-right: 1px solid ${e.newColors.grey2[100]};
		padding-right: 16px;
		width: 16px;
	}
`;const E=r.div`
	display: flex;
	row-gap: 8px;
	flex-wrap: wrap;

	div:not(:last-child) {
		margin-right: 12px;
	}
`,T=r.p`
	color: ${e.newColors.grey3[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`,F=r.div`
	container-type: inline-size;
	container-name: ${d.CONTENT};
`,N=r.dl`
	display: grid;
	gap: 0 12px;
	width: 100%;
	margin: 0;
	grid-template-columns: repeat(${({$columns:t})=>t} ,minmax(0,1fr));

	&.card-row + .card-row {
		border-top: 2px solid ${e.newColors.grey2[100]};
		padding-top: 16px;
	}

	${({$columns:t})=>`
		grid-template-columns: repeat(1,minmax(0,1fr));

		${i("md","CONTENT")} {
			grid-template-columns: repeat(${t>1?2:1},minmax(0,1fr));
		}

		${i("lg","CONTENT")} {
			grid-template-columns: repeat(${t},minmax(0,1fr));
		}
	`}

`,q=r.div`
	${({$margin:t})=>t&&`
		margin-bottom: 24px;
	`}
`,I=r.dt`
	color: ${e.newColors.grey4[100]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
	display: flex;
	align-items: center;
	gap: 8px;
	min-height: 24px;
`,R=r.dd`
	color: ${e.newColors.grey3[100]};
	font-size: 14px;
	margin: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
`,z=r.span`
	display: table-cell;
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;export{T as C,q as F,h as M,$ as T,E as a,I as b,R as c,z as d,F as e,N as f};
