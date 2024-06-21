import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as a}from"./index-CDs2tPxN.js";import{s as o,t as p}from"./theme-tUuL1bpb.js";import{T as l}from"./TitleWrapper-fmXCHZNU.js";import{B as x}from"./ButtonRow-D8Ypu3LS.js";const c=o.div`
	display: flex;
	border-bottom: 2px solid ${p.newColors.grey2[100]};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	min-height: 80px;
	max-height: 80px;
`,f=o.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`,s=a.forwardRef((i,d)=>{const{title:t,buttons:r,onBack:n,backLabel:m}=i;return e.jsxs(c,{ref:d,"data-testid":"page-header-test-id",children:[e.jsx(f,{children:t&&e.jsx(l,{title:t,onBack:n,backLabel:m})}),r&&e.jsx(x,{buttons:r})]})});s.displayName="PageHeader";const b=a.memo(s);export{b as P};
