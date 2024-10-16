import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as s}from"./index-CL53iaPz.js";import"./index-BP8_t0zE.js";import"./iframe-B-k1MD0R.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";function e(o){const r={code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/Transforms/Join"}),`
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
`})})]})}function M(o={}){const{wrapper:r}={...i(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(e,{...o})}):e(o)}export{M as default};
