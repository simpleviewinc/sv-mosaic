import{j as n}from"./jsx-runtime-DKBipoO1.js";import{useMDXComponents as o}from"./index-DIpYW6hh.js";import{M as s}from"./index-DnPg_JZW.js";import"./index-P8U4y8pz.js";import"./iframe-8TSSxXgV.js";import"./index-DEBaATwO.js";import"./index-CFV30bQv.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function t(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utils/Transforms/Readme"}),`
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
`})})]})}function w(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{w as default};
