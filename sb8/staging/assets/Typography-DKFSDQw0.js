import{r as S}from"./index-D0AnReJb.js";import{s as h}from"./styled-components.browser.esm-B06rF3P8.js";import{t as e}from"./sizes-HwDk6ODv.js";const r={body:{xs:{fontSize:e.fontSize.body.xs,lineHeight:e.line["8xloose"]},sm:{fontSize:e.fontSize.body.sm,lineHeight:e.line["3xloose"]},md:{fontSize:e.fontSize.body.md,lineHeight:e.line["2xloose"]},lg:{fontSize:e.fontSize.body.lg,lineHeight:e.line["3xloose"]},xl:{fontSize:e.fontSize.body.xl,lineHeight:e.line["4xloose"]},"2xl":{fontSize:e.fontSize.body["2xl"],lineHeight:e.line["3xloose"]}},display:{xs:{fontSize:e.fontSize.display.xs,lineHeight:e.line.loose},sm:{fontSize:e.fontSize.display.sm,lineHeight:e.line.snug},md:{fontSize:e.fontSize.display.md,lineHeight:e.line.xtight},lg:{fontSize:e.fontSize.display.lg,lineHeight:e.line.tight},xl:{fontSize:e.fontSize.display.xl,lineHeight:e.line["2xtight"]},"2xl":{fontSize:e.fontSize.display["2xl"],lineHeight:e.line.tight}},text:{xs:{fontSize:e.fontSize.text.xs,lineHeight:e.line.xloose},sm:{fontSize:e.fontSize.text.sm,lineHeight:e.line.loose},md:{fontSize:e.fontSize.text.md,lineHeight:e.line.normal},lg:{fontSize:e.fontSize.text.lg,lineHeight:e.line.tight},xl:{fontSize:e.fontSize.text.xl,lineHeight:e.line.xtight},"2xl":{fontSize:e.fontSize.text["2xl"],lineHeight:e.line.relaxed}}},p=h.div(({$variant:t,$size:n,$maxLines:o,$breakAll:i,$color:l,$whiteSpace:s,$weight:g})=>{const{fontSize:a,lineHeight:f}=n!=="inherit"?r[t][n]:{fontSize:"inherit",lineHeight:"inherit"};return[`
			margin: 0;
			padding: 0;
			font-size: ${a};
			font-weight: ${e.weight[g]};
			line-height: ${f};
		`,o&&`
			display: -webkit-box;
			-webkit-line-clamp: ${o};
			-webkit-box-orient: vertical;
			overflow: hidden;
		`,i&&`
			word-break: break-all;
		`,l&&`
			color: ${l};
		`,s&&`
			white-space: ${s};
		`].filter(Boolean).map(d=>d.trim()).join(`
`)}),m={body:"div",display:"div",text:"span"},y={body:"md",display:"sm",text:"inherit"},H={body:"regular",display:"medium",text:"inherit"};function w({children:t,attrs:n={},tag:o,variant:i="text",maxLines:l,color:s,breakAll:g,className:a,title:f,size:x=y[i],weight:d=H[i]}){const z=o||m[i];return S.createElement(p,{...n,className:a,$variant:i,$maxLines:l,$color:s,$breakAll:g,$size:x,$weight:d,title:f!==void 0?f:typeof t=="string"?t:void 0,as:z},t)}export{w as T};
