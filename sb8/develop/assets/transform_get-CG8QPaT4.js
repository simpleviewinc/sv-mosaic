import{j as e}from"./jsx-runtime-DiwAibxM.js";import{useMDXComponents as t}from"./index-B4U1yk18.js";import{M as s}from"./index-NInTBYwO.js";import"./index-Btj5Fd67.js";import"./iframe-BztCM8DI.js";import"../sb-preview/runtime.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./tslib.es6-CRos2fHm.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-Cqq1nRsk.js";import"./toString-CrHhZNKP.js";import"./index-CQ9F9_Tt.js";import"./index-ogSvIofg.js";function n(o){const r={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utils/Transforms/Get"}),`
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
