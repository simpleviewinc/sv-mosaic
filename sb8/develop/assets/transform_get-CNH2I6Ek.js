import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as s}from"./index-BwDDMXeo.js";import{M as t}from"./index-CbnwHomd.js";import"./index-D0AnReJb.js";import"./iframe-qKjKJOy-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(r){const n={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utils/Transforms/Get"}),`
`,e.jsx(n.h1,{id:"transform_get",children:"transform_get"}),`
`,e.jsxs(n.p,{children:["Executes a ",e.jsx(n.a,{href:"https://lodash.com/docs/#get",rel:"nofollow",children:"lodash.get"})," which reaches into a deep object and grabs a key."]}),`
`,e.jsx(n.h4,{id:"conversions",children:"Conversions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'transform_get("foo.bar")'})," - ",e.jsx(n.code,{children:'{ foo : { bar : "value" } }'})," => ",e.jsx(n.code,{children:'"value"'})]}),`
`]}),`
`,e.jsx(n.h4,{id:"args",children:"Args"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"path"})," - A path supported by ",e.jsx(n.code,{children:"lodash.get"})," so likely something like ",e.jsx(n.code,{children:"path.to.value"})," or ",e.jsx(n.code,{children:'["path", "to", "value"]'}),". See their docs for full potential."]}),`
`]}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { transform_get } from "@simpleview/sv-mosaic"\r
...\r
transforms : [\r
    transform_get(path)\r
]
`})})]})}function j(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{j as default};
