import{r as e}from"./index-D0AnReJb.js";import{t as r}from"./sizes-xhpoGYFi.js";import{s as o}from"./styled-components.browser.esm-D9jdcGim.js";import{T as m}from"./TitleWrapper-CwhNcCW5.js";import{B as c}from"./ButtonRow-ZsYtcJma.js";const p=o.div`
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
