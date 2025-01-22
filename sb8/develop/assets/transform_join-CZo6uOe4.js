import{j as n}from"./jsx-runtime-DKBipoO1.js";import{useMDXComponents as s}from"./index-DIpYW6hh.js";import{M as i}from"./index-DI2zD78O.js";import"./index-P8U4y8pz.js";import"./iframe-B5H-TOQu.js";import"./index-DEBaATwO.js";import"./index-CFV30bQv.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function e(o){const r={code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Utils/Transforms/Join"}),`
`,n.jsx(r.h1,{id:"transform_join",children:"transform_join"}),`
`,n.jsx(r.p,{children:"Converts array of values into comma separated string."}),`
`,n.jsx(r.h4,{id:"conversions",children:"Conversions"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:'["foo", "bar", "baz"]'})," => ",n.jsx(r.code,{children:'"Foo, bar, baz"'})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"[]"})," => ",n.jsx(r.code,{children:'""'})]}),`
`]}),`
`,n.jsx(r.h4,{id:"args",children:"Args"}),`
`,n.jsx(r.p,{children:"None"}),`
`,n.jsx(r.h4,{id:"example",children:"Example"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-js",children:`import { transform_join } from "@simpleview/sv-mosaic"\r
...\r
transforms : [\r
    transform_join()\r
]
`})})]})}function f(o={}){const{wrapper:r}={...s(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(e,{...o})}):e(o)}export{f as default};
