import{r as e}from"./index-D0AnReJb.js";import{t as r}from"./sizes-DkIXWPpc.js";import{s as o}from"./styled-components.browser.esm-8X0uN6v9.js";import{T as m}from"./TitleWrapper-DK3mQSoI.js";import{B as c}from"./ButtonRow-DJBG-tfi.js";const p=o.div`
	display: flex;
	border-bottom: 1px solid ${r.color.gray[300]};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${r.spacing(5,6)};
`,f=o.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`,i=e.forwardRef((s,n)=>{const{title:t,buttons:a,onBack:d,backLabel:l}=s;return e.createElement(p,{ref:n,"data-testid":"page-header-test-id"},e.createElement(f,null,t&&e.createElement(m,{title:t,onBack:d,backLabel:l})),a&&e.createElement(c,{buttons:a}))});i.displayName="PageHeader";const u=e.memo(i);export{u as P};
