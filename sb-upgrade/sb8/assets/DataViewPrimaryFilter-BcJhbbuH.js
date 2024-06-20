import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as u,i as m}from"./createSvgIcon-BGEpRDBf.js";import{u as p,T as f,B as x}from"./Button-B_QyrzNG.js";import{s as r,t as i}from"./theme-tUuL1bpb.js";var a={},g=m;Object.defineProperty(a,"__esModule",{value:!0});var n=a.default=void 0,h=g(u()),v=e,w=(0,h.default)((0,v.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n=a.default=w;const y=r.div`
	display: flex;
	align-items: center;

	& > .dropdownIcon {
		color: ${i.newColors.grey3[100]};
		margin-left: 4px;
		margin-right: -4px;
	}

	& > .filter-label {
		font-weight: ${i.fontWeight.normal};
		text-transform: capitalize;
	}

	& > .filter-value {
		align-items: center;
		display: flex;
		font-weight: ${i.fontWeight.normal};
		text-transform: none;
	}

	& > .filter-value b {
		margin: 0px 8px;
	}
`,b=r.div`
	align-items: center;
	background-color: white;
	border-radius: 300px;
	display: flex;
	height: 20px;
	justify-content: center;
	margin-left: 12px;
	min-width: 20px;
	padding: 4px;
`,j=r.p`
	max-width: 187px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: ${i.fontWeight.bold};
	margin: 0px;
`,P=r.span`
	font-family: ${i.museoFont};
	font-size: 10px;
	font-weight: 600;
`;function _(t){var l;const{anchorProps:o,tooltipProps:s}=p(),c=e.jsxs(y,{children:[e.jsx("div",{className:"filter-label",children:t.label}),t.value&&e.jsxs("div",{className:"filter-value",color:t.color?t.color:"black",children:[e.jsx("b",{children:"|"}),e.jsx(j,{title:t.value,children:t.value}),((l=t.multiselect)==null?void 0:l.length)>1&&e.jsxs(e.Fragment,{children:[e.jsx(b,{...o,children:e.jsxs(P,{children:["+",t.multiselect.length-1]})}),e.jsx(f,{...s,children:t.multiselect.slice(1).map(d=>d.label).join(", ")})]})]})]});return e.jsx(x,{color:t.color??"gray",variant:"contained",size:"small",onClick:t.onClick,label:c,iconPosition:"right",mIcon:n})}_.__docgenInfo={description:"",methods:[],displayName:"DataViewPrimaryFilter",props:{label:{required:!0,tsType:{name:'DataViewFilterProps["label"]',raw:'DataViewFilterProps["label"]'},description:""},value:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:'ButtonProps["color"]',raw:'ButtonProps["color"]'},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(evt: any) => void",signature:{arguments:[{type:{name:"any"},name:"evt"}],return:{name:"void"}}},description:""},multiselect:{required:!1,tsType:{name:"Array",elements:[{name:"MosaicLabelValue"}],raw:"MosaicLabelValue[]"},description:""}}};export{_ as D,n as d};
