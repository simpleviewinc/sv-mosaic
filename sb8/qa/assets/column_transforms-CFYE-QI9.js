import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as s}from"./index-CSXTOGaA.js";import"./index-D0AnReJb.js";import"./iframe-GsUEZl1f.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/Transforms/Readme"}),`
`,n.jsx(r.h1,{id:"transforms",children:"Transforms"}),`
`,n.jsxs(r.p,{children:["Transforms are helper functions you can pass to the ",n.jsx(r.code,{children:"DataView"})," columns which will tweak the data in common ways. You can pass multiple transforms to chain them together."]}),`
`,n.jsx(r.p,{children:"Mosaic provides a variety of core transforms that you can see in the left nav."}),`
`,n.jsxs(r.p,{children:["If you want to create your own transforms, pass a function which matches the ",n.jsx(r.a,{href:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/components/DataView/DataViewTypes.ts",rel:"nofollow",children:"DataViewColumnTransform"})," interface."]}),`
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
`})})]})}function d(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{d as default};
