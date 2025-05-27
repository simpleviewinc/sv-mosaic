import{r as c}from"./index-D0AnReJb.js";import{s as g,t as o,n}from"./sizes-BklZZmo4.js";const h=n`
	margin: 0;
	padding: 0;
	font-size: inherit;
	font-weight: inherit;
    line-height: 1.5em;

    ${({$maxLines:t,$breakAll:a,$color:i,$whiteSpace:e})=>[t&&`
				display: -webkit-box;
				-webkit-line-clamp: ${t};
				-webkit-box-orient: vertical;
				overflow: hidden;
			`,a&&`
				word-break: break-all;
			`,i&&`
				color: ${o.colors[i]};
			`,e&&`
				white-space: ${e};
			`].filter(Boolean).join(`
`)}
`,b={title:n`
        font-family: ${o.museoFont};
        font-size: 28px;
        font-weight: ${o.fontWeight.light};
		color: ${o.newColors.almostBlack[100]};
        line-height: 1.2em;
	`,subtitle:n`
        font-family: ${o.fontFamily};
        font-size: 16px;
		font-weight: 500;
		color: ${o.newColors.almostBlack[100]};
	`,body:n`
        font-family: ${o.fontFamily};
        font-size: 16px;
	`,none:n``},d=g.div`
	${h}
	${({$variant:t})=>t?b[t]:""}
`,$={title:"h1",subtitle:"h3",body:"div",none:"span"};function u({children:t,attrs:a={},tag:i,variant:e="none",maxLines:s,color:r,breakAll:f,className:m,title:l}){const p=i||$[e];return c.createElement(d,{...a,className:m,$variant:e,$maxLines:s,$color:r,$breakAll:f,title:l!==void 0?l:typeof t=="string"?t:void 0,as:p},t)}export{u as T};
