const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-D6JtwIbn.js","./iframe-RQpLZPhi.js","./index-BP8_t0zE.js","./react-18-DDrzupZ7.js","./index-BxmsGmlx.js","./index-Ba0kBJ9T.js","./extends-CF3RwP-h.js","./tslib.es6-CRos2fHm.js","./index-DXimoRZY.js","./inheritsLoose-CMy1E8oj.js","./toString-BjCnz-8e.js","./index-DJqTsaQd.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-RQpLZPhi.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-D6JtwIbn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};