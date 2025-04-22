import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as t}from"./index-yrER70vX.js";import{M as s}from"./index-UpxAD4c2.js";import"./index-DDfD_3TG.js";import"./iframe-DoUpv1TX.js";import"../sb-preview/runtime.js";import"./index-DCMmMN8S.js";import"./index-ywIwhVjx.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-CUnS8Soe.js";import"./index-wdBq5kwF.js";import"./index-DrFu-skq.js";function n(o){const r={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utils/Transforms/Get"}),`
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
`})})]})}function M(o={}){const{wrapper:r}={...t(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{M as default};
