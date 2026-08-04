import{R as e}from"./index-wekxHvEx.js";import{c as l}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as o}from"./sizes-BeWafy6f.js";import"./Typography-ByjXglyy.js";import{T as i}from"./Text-CfL2WyGr.js";const c={light:{background:o.color.gray[100],color:o.color.black},dark:{background:o.color.gray[300],color:o.color.black},darkest:{background:o.color.black,color:o.color.white}},d=l(i).attrs({size:"md",weight:"medium",line:"tight"})`
	border-radius: ${o.rounded.md};
	padding: ${o.spacing(.5,1)};
	min-width: 22px;
	text-align: center;
	display: inline-block;

	${({$variant:r})=>`
		background-color: ${c[r].background};
		color: ${c[r].color};
	`}
`;function p({children:r,variant:t="light",...a}){return e.createElement(d,{$variant:t,...a},r)}export{p as B};
