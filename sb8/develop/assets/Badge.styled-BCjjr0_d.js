import{s as t}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as o}from"./sizes-DkIXWPpc.js";import"./index-D0AnReJb.js";import"./Typography-CZQzWHyE.js";import{T as l}from"./Text-BjwqtcAz.js";const c={light:{background:o.color.gray[100],color:o.color.black},dark:{background:o.color.gray[300],color:o.color.black},darkest:{background:o.color.black,color:o.color.white}},g=t(l).attrs({size:"md",weight:"medium",line:"tight"})`
	border-radius: ${o.rounded.md};
	padding: ${o.spacing(.5,1)};
	min-width: 22px;
	text-align: center;
	display: inline-block;

	${({$variant:r})=>`
		background-color: ${c[r].background};
		color: ${c[r].color};
	`}
`;export{g as S};
