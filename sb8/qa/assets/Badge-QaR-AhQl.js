import{R as e}from"./index-lnx8lKqn.js";import{s as l}from"./styled-components.browser.esm-DqsT1pAc.js";import{t as o}from"./sizes-BcVUBVYw.js";import"./Typography-BDSgj_cw.js";import{T as i}from"./Text-6QT-9GAX.js";const t={light:{background:o.color.gray[100],color:o.color.black},dark:{background:o.color.gray[300],color:o.color.black},darkest:{background:o.color.black,color:o.color.white}},d=l(i).attrs({size:"md",weight:"medium",line:"tight"})`
	border-radius: ${o.rounded.md};
	padding: ${o.spacing(.5,1)};
	min-width: 22px;
	text-align: center;
	display: inline-block;

	${({$variant:r})=>`
		background-color: ${t[r].background};
		color: ${t[r].color};
	`}
`;function p({children:r,variant:c="light",...a}){return e.createElement(d,{$variant:c,...a},r)}export{p as B};
