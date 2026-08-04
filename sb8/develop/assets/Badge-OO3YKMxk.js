import{R as e}from"./index-CDlOlYQx.js";import{c as l}from"./styled-components.browser.esm-CsHOGV45.js";import{t as o}from"./sizes-BeWafy6f.js";import"./Typography-Bp-nXGcB.js";import{T as i}from"./Text-B-CII8XP.js";const c={light:{background:o.color.gray[100],color:o.color.black},dark:{background:o.color.gray[300],color:o.color.black},darkest:{background:o.color.black,color:o.color.white}},d=l(i).attrs({size:"md",weight:"medium",line:"tight"})`
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
