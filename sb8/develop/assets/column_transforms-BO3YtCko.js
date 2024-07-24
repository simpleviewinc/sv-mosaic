import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as s}from"./index-CogRcdbk.js";import"./index-BP8_t0zE.js";import"./iframe-Dr_Zwk7G.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";function e(t){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/Transforms/Readme"}),`
`,n.jsx(r.h1,{id:"transforms",children:"Transforms"}),`
`,n.jsxs(r.p,{children:["Transforms are helper functions you can pass to the ",n.jsx(r.code,{children:"DataView"})," columns which will tweak the data in common ways. You can pass multiple transforms to chain them together."]}),`
`,n.jsx(r.p,{children:"Mosaic provides a variety of core transforms that you can see in the left nav."}),`
`,n.jsxs(r.p,{children:["If you want to create your own transforms, pass a function which matches the ",n.jsx(r.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/src/components/DataView/DataViewTypes.ts",rel:"nofollow",children:"DataViewColumnTransform"})," interface."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-js",children:`import { DataView } from "@simpleview/sv-mosaic";\r
function myComponent(props) {\r
    const config = [\r
        ...\r
        columns : [\r
            {\r
                name : "test",\r
                label : "Test",\r
                transforms : [\r
                    TRANSFORMS\r
                ]\r
            }\r
        ]\r
    ]\r
\r
    return (\r
        <DataView\r
            {...config}\r
        />\r
    )\r
}
`})})]})}function D(t={}){const{wrapper:r}={...o(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(e,{...t})}):e(t)}export{D as default};
