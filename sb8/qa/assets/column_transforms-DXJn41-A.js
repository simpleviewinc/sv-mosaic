import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-BwDDMXeo.js";import{M as s}from"./index-BrA4WBwa.js";import"./index-D0AnReJb.js";import"./iframe-CxkyZTOH.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";function o(t){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/Transforms/Readme"}),`
`,n.jsx(r.h1,{id:"transforms",children:"Transforms"}),`
`,n.jsxs(r.p,{children:["Transforms are helper functions you can pass to the ",n.jsx(r.code,{children:"DataView"})," columns which will tweak the data in common ways. You can pass multiple transforms to chain them together."]}),`
`,n.jsx(r.p,{children:"Mosaic provides a variety of core transforms that you can see in the left nav."}),`
`,n.jsxs(r.p,{children:["If you want to create your own transforms, pass a function which matches the ",n.jsx(r.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/DataView/DataViewTypes.ts",rel:"nofollow",children:"DataViewColumnTransform"})," interface."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-js",children:`import { DataView } from "#mosaic";\r
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
`})})]})}function T(t={}){const{wrapper:r}={...e(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(o,{...t})}):o(t)}export{T as default};
