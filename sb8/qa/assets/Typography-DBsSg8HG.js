import{r as h}from"./index-D0AnReJb.js";import{s as r}from"./styled-components.browser.esm-C5LJ_neh.js";import{t as e}from"./sizes-_ON_TzAH.js";const m={body:{xs:{fontSize:e.fontSize.body.xs,lineHeight:e.line["8xloose"]},sm:{fontSize:e.fontSize.body.sm,lineHeight:e.line["3xloose"]},md:{fontSize:e.fontSize.body.md,lineHeight:e.line["2xloose"]},lg:{fontSize:e.fontSize.body.lg,lineHeight:e.line["3xloose"]},xl:{fontSize:e.fontSize.body.xl,lineHeight:e.line["4xloose"]},"2xl":{fontSize:e.fontSize.body["2xl"],lineHeight:e.line["3xloose"]}},display:{xs:{fontSize:e.fontSize.display.xs,lineHeight:e.line.loose},sm:{fontSize:e.fontSize.display.sm,lineHeight:e.line.snug},md:{fontSize:e.fontSize.display.md,lineHeight:e.line.xtight},lg:{fontSize:e.fontSize.display.lg,lineHeight:e.line.tight},xl:{fontSize:e.fontSize.display.xl,lineHeight:e.line["2xtight"]},"2xl":{fontSize:e.fontSize.display["2xl"],lineHeight:e.line.tight}},text:{xs:{fontSize:e.fontSize.text.xs,lineHeight:e.line.xloose},sm:{fontSize:e.fontSize.text.sm,lineHeight:e.line.loose},md:{fontSize:e.fontSize.text.md,lineHeight:e.line.normal},lg:{fontSize:e.fontSize.text.lg,lineHeight:e.line.tight},xl:{fontSize:e.fontSize.text.xl,lineHeight:e.line.xtight},"2xl":{fontSize:e.fontSize.text["2xl"],lineHeight:e.line.relaxed}}},p=r.div(({$variant:t,$size:n,$maxLines:l,$breakAll:i,$color:o,$whiteSpace:s,$weight:g,$line:f})=>{const{fontSize:a,lineHeight:x}=n!=="inherit"?m[t][n]:{fontSize:"inherit",lineHeight:"inherit"};return[`
			margin: 0;
			padding: 0;
			font-size: ${a};
			font-weight: ${e.weight[g]};
			line-height: ${f?e.line[f]:x};
		`,l&&`
			display: -webkit-box;
			-webkit-line-clamp: ${l};
			-webkit-box-orient: vertical;
			overflow: hidden;
		`,i&&`
			word-break: break-all;
		`,o&&`
			color: ${o};
		`,s&&`
			white-space: ${s};
		`].filter(Boolean).map(d=>d.trim()).join(`
`)}),y={body:"div",display:"div",text:"span"},H={body:"md",display:"sm",text:"inherit"},b={body:"regular",display:"medium",text:"inherit"};function w({children:t,attrs:n={},tag:l,variant:i="text",maxLines:o,color:s,breakAll:g,className:f,title:a,size:x=H[i],weight:z=b[i],line:d}){const S=l||y[i];return h.createElement(p,{...n,className:f,$variant:i,$maxLines:o,$color:s,$breakAll:g,$size:x,$weight:z,$line:d,title:a!==void 0?a:typeof t=="string"?t:void 0,as:S},t)}export{w as T};
