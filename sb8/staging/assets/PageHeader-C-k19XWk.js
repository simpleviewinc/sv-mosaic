import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as a}from"./index-Btj5Fd67.js";import{s as i,t as l}from"./theme-D38K4W-Z.js";import{T as p}from"./TitleWrapper-OgvLyBY4.js";import{B as x}from"./ButtonRow-iQTdUMH8.js";const c=i.div`
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
`,g=i.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`,o=a.forwardRef((s,d)=>{const{title:t,buttons:r,onBack:n,backLabel:m}=s;return e.jsxs(c,{ref:d,"data-testid":"page-header-test-id",children:[e.jsx(g,{children:t&&e.jsx(p,{title:t,onBack:n,backLabel:m})}),r&&e.jsx(x,{buttons:r})]})});o.displayName="PageHeader";const y=a.memo(o);export{y as P};
