import{r as e}from"./index-D0AnReJb.js";import{t as r}from"./sizes-CTdyEcea.js";import{s as o}from"./styled-components.browser.esm-aVcmUYMZ.js";import{T as m}from"./TitleWrapper-D4ztpYuS.js";import{B as c}from"./ButtonRow-DEKalGfm.js";const p=o.div`
	display: flex;
	border-bottom: 1px solid ${r.color.gray[300]};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${r.spacing(5,6)};
	min-height: 80px;
	max-height: 80px;
`,f=o.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`,i=e.forwardRef((n,s)=>{const{title:t,buttons:a,onBack:d,backLabel:l}=n;return e.createElement(p,{ref:s,"data-testid":"page-header-test-id"},e.createElement(f,null,t&&e.createElement(m,{title:t,onBack:d,backLabel:l})),a&&e.createElement(c,{buttons:a}))});i.displayName="PageHeader";const y=e.memo(i);export{y as P};
