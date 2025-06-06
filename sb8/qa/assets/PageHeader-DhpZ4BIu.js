import{r as e}from"./index-D0AnReJb.js";import{t as l,s as r}from"./sizes-BklZZmo4.js";import{T as m}from"./TitleWrapper-BVBDXDWY.js";import{B as c}from"./ButtonRow-BOELw1Tj.js";const p=r.div`
	display: flex;
	border-bottom: 2px solid ${l.newColors.grey2[100]};
	// TODO Make everything border-box at a higher level and just inherit.
	box-sizing: border-box;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	min-height: 80px;
	max-height: 80px;
`,b=r.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`,o=e.forwardRef((i,n)=>{const{title:t,buttons:a,onBack:s,backLabel:d}=i;return e.createElement(p,{ref:n,"data-testid":"page-header-test-id"},e.createElement(b,null,t&&e.createElement(m,{title:t,onBack:s,backLabel:d})),a&&e.createElement(c,{buttons:a}))});o.displayName="PageHeader";const w=e.memo(o);export{w as P};
