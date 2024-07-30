import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as t}from"./index-3-_tf5dF.js";import{M as s,C as r}from"./index-D7r7IB1o.js";import{s as c,P as d}from"./SideNav.stories-B6hiorkd.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./SideNav-CAh37aY1.js";import"./theme-CtvfJOCv.js";import"./containerQuery-C4iAQuB_.js";import"./useToggle-lipGlewK.js";import"./AccountCircle-CNGCtj87.js";import"./createSvgIcon-DzRyHCtm.js";import"./styled-BlYH_7wi.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./Link-Tfn0c0nT.js";import"./AddCircleOutline-B3C2JHEU.js";import"./storyUtils-ByV2Bsyv.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"sidenav",children:"SideNav"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"SideNav"})," section tab helps users navigate through different sections under the record."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:"https://github.com/simpleviewinc/sv-mosaic/blob/develop/src/components/SideNav/SideNavTypes.ts"}),`
`,e.jsxs(n.p,{children:[`| Name | Type | Description |
| ---- | ---- | ----------- |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"active"})})," | ",e.jsx(n.code,{children:"boolean"}),` | Optional - Defines which is the active link and highlights it. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"items"})})," | ",e.jsx(n.code,{children:"Item[][]"}),` | Required - List of sections of links that contains a list of links items.|
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"onNav"})})," | ",e.jsx(n.code,{children:"(args: item: Item, event: MouseEvent): void"})," | Optional - When a nav item does not have its own onNav function defined, this function will be executed.|"]}),`
`,e.jsx(n.h3,{id:"item",children:"Item"}),`
`,e.jsxs(n.p,{children:[`| Name | Type | Description |
| ---- | ---- | ----------- |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"action"})})," | ",e.jsx(n.code,{children:"{ icon: SvgIconComponent; onClick: () => void }"}),` | Optional - Each link could have an optional action which consists of an icon that will be displayed when hovering over the link and an onClick callback. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"attrs"})})," | ",e.jsx(n.code,{children:"AnchorHTMLAttributes<HTMLAnchorElement>"}),` | Optional - Anchor element attributes.|
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"badge"})})," | ",e.jsx(n.code,{children:"string"}),` | Optional - Descriptive mark of the link. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"icon"})})," | ",e.jsx(n.code,{children:"SvgIconComponent"}),` | Optional - Icon that will be rendered to the left of the link.|
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"label"})})," | ",e.jsx(n.code,{children:"string"}),` | Required - Label that names the link. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"name"})})," | ",e.jsx(n.code,{children:"string"}),` | Required - Name of the item. It is used to set it as active when is clicked.. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"onNav"})})," | ",e.jsx(n.code,{children:"(args: item: Item, event: MouseEvent): void"}),` | Optional - Callback that each link will execute on an onClick event.. |
| `,e.jsx(n.strong,{children:e.jsx(n.code,{children:"show"})})," | ",e.jsx(n.code,{children:"MosaicToggle"})," | Optional - Whether or not to show or hide this item |"]}),`
`,e.jsx(n.h2,{id:"sidenav-1",children:"SideNav"}),`
`,e.jsx(r,{of:d})]})}function R(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{R as default};
