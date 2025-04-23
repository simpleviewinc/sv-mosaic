import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as t}from"./index-yrER70vX.js";import{M as s}from"./index-C9a7q3BQ.js";import"./index-DDfD_3TG.js";import"./iframe-v5zmNBDu.js";import"../sb-preview/runtime.js";import"./index-DCMmMN8S.js";import"./index-ywIwhVjx.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-CUnS8Soe.js";import"./index-wdBq5kwF.js";import"./index-DrFu-skq.js";function n(r){const e={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Utils/Transforms/MapGet"}),`
`,o.jsx(e.h1,{id:"transform_mapget",children:"transform_mapGet"}),`
`,o.jsxs(e.p,{children:["Executes a ",o.jsx(e.a,{href:"https://lodash.com/docs/#map",rel:"nofollow",children:"lodash.map"})," and a ",o.jsx(e.a,{href:"https://lodash.com/docs/#get",rel:"nofollow",children:"lodash.get"}),". This is useful when you want to convert an array of objects into an array of values."]}),`
`,o.jsxs(e.p,{children:["You may often combine this transform with ",o.jsx(e.code,{children:"transform_join"})," to extract an array of values, and then join it into a comma-separated list."]}),`
`,o.jsx(e.h4,{id:"conversions",children:"Conversions"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:'transform_get("foo.bar")'})," - ",o.jsx(e.code,{children:'[{ foo : { bar : "value" } }, { foo : { bar : "value2" } }]'})," => ",o.jsx(e.code,{children:'["value", "value2"]'})]}),`
`]}),`
`,o.jsx(e.h4,{id:"args",children:"Args"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.strong,{children:"path"})," - A path supported by ",o.jsx(e.code,{children:"lodash.get"})," so likely something like ",o.jsx(e.code,{children:"path.to.value"})," or ",o.jsx(e.code,{children:'["path", "to", "value"]'}),". See their docs for full potential."]}),`
`]}),`
`,o.jsx(e.h4,{id:"example",children:"Example"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-js",children:`import { transform_mapGet } from "@simpleview/sv-mosaic"\r
...\r
transforms : [\r
    transform_mapGet(path)\r
]
`})})]})}function _(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{_ as default};
