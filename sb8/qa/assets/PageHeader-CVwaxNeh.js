import{r as e}from"./index-CDlOlYQx.js";import{t as a}from"./sizes-BeWafy6f.js";import{c as o}from"./styled-components.browser.esm-CsHOGV45.js";import{T as m}from"./TitleWrapper-D9Xlm0gk.js";import{B as s}from"./ButtonRow-Cf2fXVyQ.js";const c=o.div`
	display: flex;
	border-bottom: 1px solid ${a.color.gray[300]};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${a.spacing(5,6)};
`,l=o.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`,p=({title:t,buttons:r,onBack:i,backLabel:n,ref:d})=>e.createElement(c,{ref:d,"data-testid":"page-header-test-id"},e.createElement(l,null,t&&e.createElement(m,{title:t,onBack:i,backLabel:n})),r&&e.createElement(s,{buttons:r})),b=e.memo(p);export{b as P};
