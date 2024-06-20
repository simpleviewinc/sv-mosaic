import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as l}from"./index-CDs2tPxN.js";import{s as i,t as n}from"./theme-tUuL1bpb.js";import{B as d}from"./Button-B_QyrzNG.js";import{c as f}from"./containerQuery-BObFYVCA.js";import{r as v,i as y}from"./createSvgIcon-BGEpRDBf.js";import{a as g}from"./BodyText-gyiTNPhg.js";const k=i.div`
	display: flex;
	align-items: center;
`,T=i.div`
	color: ${n.newColors.grey3[100]};
	font-family: ${n.museoFont};
	font-weight: ${n.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`,x=i(d)`
	margin-right: 10px;

	.MuiButtonBase-root{
		padding-left: 8px;
		padding-right: 6px;
		border-color: transparent;
	}

	.icon_left{
		margin-right: 0 !important;
	}

	${({$collapse:e})=>e&&`
		display: none;

		${f(e.minWidth,e.name)} {
			display: block;
		}
	`}
`;var o={},B=y;Object.defineProperty(o,"__esModule",{value:!0});var s=o.default=void 0,b=B(v()),h=t,_=(0,b.default)((0,h.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");s=o.default=_;const m=({collapse:e,label:a="Go back",...r})=>t.jsx(x,{$collapse:e,...r,className:"back-button",color:"gray",variant:"icon",mIcon:s,muiAttrs:{"aria-label":a}}),j=l.memo(m);m.__docgenInfo={description:"",methods:[],displayName:"TitleBackButton",props:{onClick:{required:!0,tsType:{name:"union",raw:'TitleWrapperProps["onBack"]'},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Go back"',computed:!1}}}};const p=e=>{const{title:a,description:r,collapse:u,backLabel:c}=e;return t.jsxs(t.Fragment,{children:[t.jsxs(k,{children:[e.onBack&&t.jsx(j,{collapse:u,onClick:e.onBack,label:c}),t.jsx(g,{attrs:{title:a},children:a})]}),r&&t.jsx(T,{children:r})]})},O=l.memo(p);p.__docgenInfo={description:"",methods:[],displayName:"TitleWrapper",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},onBack:{required:!1,tsType:{name:"union",raw:"(() => void) | ((e: any) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},backLabel:{required:!1,tsType:{name:'intersection["label"]',raw:'TitleBackButtonProps["label"]'},description:""},collapse:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
	name?: keyof typeof CONTAINERS;\r
	minWidth: keyof typeof BREAKPOINTS;\r
}`,signature:{properties:[{key:"name",value:{name:"union",raw:"keyof typeof CONTAINERS",elements:[{name:"literal",value:"ASSET_CARD"},{name:"literal",value:"FORM"},{name:"literal",value:"FORM_COL"}],required:!1}},{key:"minWidth",value:{name:"union",raw:"keyof typeof BREAKPOINTS",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:'"2xl"'},{name:"literal",value:"mobile"},{name:"literal",value:"topComponent"}],required:!0}}]}},description:""}}};export{T as D,O as T,k as a,j as b,s as d};
