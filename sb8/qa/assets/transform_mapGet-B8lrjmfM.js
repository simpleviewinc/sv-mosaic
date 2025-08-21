import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as t}from"./index-BwDDMXeo.js";import{M as s}from"./index-D7EMJGzp.js";import"./index-D0AnReJb.js";import"./iframe-CrhhyW09.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";function n(e){const r={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Utils/Transforms/MapGet"}),`
`,o.jsx(r.h1,{id:"transform_mapget",children:"transform_mapGet"}),`
`,o.jsxs(r.p,{children:["Executes a ",o.jsx(r.a,{href:"https://lodash.com/docs/#map",rel:"nofollow",children:"lodash.map"})," and a ",o.jsx(r.a,{href:"https://lodash.com/docs/#get",rel:"nofollow",children:"lodash.get"}),". This is useful when you want to convert an array of objects into an array of values."]}),`
`,o.jsxs(r.p,{children:["You may often combine this transform with ",o.jsx(r.code,{children:"transform_join"})," to extract an array of values, and then join it into a comma-separated list."]}),`
`,o.jsx(r.h4,{id:"conversions",children:"Conversions"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:'transform_get("foo.bar")'})," - ",o.jsx(r.code,{children:'[{ foo : { bar : "value" } }, { foo : { bar : "value2" } }]'})," => ",o.jsx(r.code,{children:'["value", "value2"]'})]}),`
`]}),`
`,o.jsx(r.h4,{id:"args",children:"Args"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:[o.jsx(r.strong,{children:"path"})," - A path supported by ",o.jsx(r.code,{children:"lodash.get"})," so likely something like ",o.jsx(r.code,{children:"path.to.value"})," or ",o.jsx(r.code,{children:'["path", "to", "value"]'}),". See their docs for full potential."]}),`
`]}),`
`,o.jsx(r.h4,{id:"example",children:"Example"}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-js",children:`import { transform_mapGet } from "#mosaic"\r
...\r
transforms : [\r
    transform_mapGet(path)\r
]
`})})]})}function b(e={}){const{wrapper:r}={...t(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(n,{...e})}):n(e)}export{b as default};
