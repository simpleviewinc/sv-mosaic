import{j as g}from"./jsx-runtime-DKBipoO1.js";import{n as e,t as o,s as h}from"./theme-BWODkkBA.js";const b=e`
	margin: 0;
	padding: 0;
	font-size: inherit;
	font-weight: inherit;
    line-height: 1.5em;

    ${({$maxLines:t,$breakAll:s,$color:i,$whiteSpace:n})=>[t&&`
				display: -webkit-box;
				-webkit-line-clamp: ${t};
				-webkit-box-orient: vertical;
				overflow: hidden;
			`,s&&`
				word-break: break-all;
			`,i&&`
				color: ${o.colors[i]};
			`,n&&`
				white-space: ${n};
			`].filter(Boolean).join(`
`)}
`,c={title:e`
        font-family: ${o.museoFont};
        font-size: 28px;
        font-weight: ${o.fontWeight.light};
		color: ${o.newColors.almostBlack[100]};
        line-height: 1.2em;
	`,subtitle:e`
        font-family: ${o.fontFamily};
        font-size: 16px;
		font-weight: 500;
		color: ${o.newColors.almostBlack[100]};
	`,body:e`
        font-family: ${o.fontFamily};
        font-size: 16px;
	`,none:e``},d=h.div`
	${b}
	${({$variant:t})=>t?c[t]:""}
`,$={title:"h1",subtitle:"h3",body:"div",none:"span"};function w({children:t,attrs:s={},tag:i,variant:n="none",maxLines:a,color:r,breakAll:f,className:m,title:l}){const p=i||$[n];return g.jsx(d,{...s,className:m,$variant:n,$maxLines:a,$color:r,$breakAll:f,title:l!==void 0?l:typeof t=="string"?t:void 0,as:p,children:t})}export{w as T};
