import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as s}from"./index-BwDDMXeo.js";import{M as t}from"./index-CbnwHomd.js";import"./index-D0AnReJb.js";import"./iframe-qKjKJOy-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(n){const o={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utils/Transforms/MapGet"}),`
`,e.jsx(o.h1,{id:"transform_mapget",children:"transform_mapGet"}),`
`,e.jsxs(o.p,{children:["Executes a ",e.jsx(o.a,{href:"https://lodash.com/docs/#map",rel:"nofollow",children:"lodash.map"})," and a ",e.jsx(o.a,{href:"https://lodash.com/docs/#get",rel:"nofollow",children:"lodash.get"}),". This is useful when you want to convert an array of objects into an array of values."]}),`
`,e.jsxs(o.p,{children:["You may often combine this transform with ",e.jsx(o.code,{children:"transform_join"})," to extract an array of values, and then join it into a comma-separated list."]}),`
`,e.jsx(o.h4,{id:"conversions",children:"Conversions"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:'transform_get("foo.bar")'})," - ",e.jsx(o.code,{children:'[{ foo : { bar : "value" } }, { foo : { bar : "value2" } }]'})," => ",e.jsx(o.code,{children:'["value", "value2"]'})]}),`
`]}),`
`,e.jsx(o.h4,{id:"args",children:"Args"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"path"})," - A path supported by ",e.jsx(o.code,{children:"lodash.get"})," so likely something like ",e.jsx(o.code,{children:"path.to.value"})," or ",e.jsx(o.code,{children:'["path", "to", "value"]'}),". See their docs for full potential."]}),`
`]}),`
`,e.jsx(o.h4,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { transform_mapGet } from "@simpleview/sv-mosaic"\r
...\r
transforms : [\r
    transform_mapGet(path)\r
]
`})})]})}function j(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
