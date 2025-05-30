import{r as f}from"./index-D0AnReJb.js";import{s as d,n as o}from"./styled-components.browser.esm-CXkPWv0m.js";import{t as n}from"./sizes-C0LBJJ09.js";const b=o`
	margin: 0;
	padding: 0;
	font-size: inherit;
    line-height: 1.5em;

    ${({$maxLines:t,$breakAll:s,$color:i,$whiteSpace:e})=>[t&&`
				display: -webkit-box;
				-webkit-line-clamp: ${t};
				-webkit-box-orient: vertical;
				overflow: hidden;
			`,s&&`
				word-break: break-all;
			`,i&&`
				color: ${n.colors[i]};
			`,e&&`
				white-space: ${e};
			`].filter(Boolean).join(`
`)}
`,g={title:o`
        font-size: 28px;
        font-weight: ${n.weight.medium};
		color: ${n.newColors.almostBlack[100]};
        line-height: 1.2em;
	`,subtitle:o`
        font-size: 16px;
        font-weight: ${n.weight.medium};
		color: ${n.newColors.almostBlack[100]};
	`,body:o`
        font-size: 16px;
	`,none:o``},h=d.div`
	${b}
	${({$variant:t})=>t?g[t]:""}
`,w={title:"h1",subtitle:"h3",body:"div",none:"span"};function x({children:t,attrs:s={},tag:i,variant:e="none",maxLines:a,color:l,breakAll:m,className:p,title:r}){const c=i||w[e];return f.createElement(h,{...s,className:p,$variant:e,$maxLines:a,$color:l,$breakAll:m,title:r!==void 0?r:typeof t=="string"?t:void 0,as:c},t)}export{x as T};
