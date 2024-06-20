import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r}from"./index-CDs2tPxN.js";import{s,t as p}from"./theme-tUuL1bpb.js";import{T as l}from"./TitleWrapper-DgtWfsMQ.js";import{B as c}from"./ButtonRow-BqlcWF3K.js";const x=s.div`
	display: flex;
	border-bottom: 2px solid ${p.newColors.grey2[100]};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	min-height: 80px;
	max-height: 80px;
`,g=s.div`
	display: flex;
	align-items: center;
	max-width: 60%;

	& > div {
		width: 100%;
	}
`,t=r.forwardRef((i,d)=>{const{title:a,buttons:o,onBack:n,backLabel:m}=i;return e.jsxs(x,{ref:d,"data-testid":"page-header-test-id",children:[e.jsx(g,{children:a&&e.jsx(l,{title:a,onBack:n,backLabel:m})}),o&&e.jsx(c,{buttons:o})]})});t.displayName="PageHeader";const b=r.memo(t);t.__docgenInfo={description:"",methods:[],displayName:"PageHeader"};export{b as P};
