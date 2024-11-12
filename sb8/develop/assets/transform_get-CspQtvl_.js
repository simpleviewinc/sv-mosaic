import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as s}from"./index-3-_tf5dF.js";import{M as t}from"./index-QgUCesLj.js";import"./index-BP8_t0zE.js";import"./iframe-DiKqqTbj.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";function o(n){const r={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utils/Transforms/Get"}),`
`,e.jsx(r.h1,{id:"transform_get",children:"transform_get"}),`
`,e.jsxs(r.p,{children:["Executes a ",e.jsx(r.a,{href:"https://lodash.com/docs/#get",rel:"nofollow",children:"lodash.get"})," which reaches into a deep object and grabs a key."]}),`
`,e.jsx(r.h4,{id:"conversions",children:"Conversions"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:'transform_get("foo.bar")'})," - ",e.jsx(r.code,{children:'{ foo : { bar : "value" } }'})," => ",e.jsx(r.code,{children:'"value"'})]}),`
`]}),`
`,e.jsx(r.h4,{id:"args",children:"Args"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"path"})," - A path supported by ",e.jsx(r.code,{children:"lodash.get"})," so likely something like ",e.jsx(r.code,{children:"path.to.value"})," or ",e.jsx(r.code,{children:'["path", "to", "value"]'}),". See their docs for full potential."]}),`
`]}),`
`,e.jsx(r.h4,{id:"example",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`import { transform_get } from "@simpleview/sv-mosaic"\r
...\r
transforms : [\r
    transform_get(path)\r
]
`})})]})}function _(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{_ as default};
