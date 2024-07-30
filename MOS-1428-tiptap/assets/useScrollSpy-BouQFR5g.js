import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as s}from"./index-3-_tf5dF.js";import{M as i}from"./index-D7r7IB1o.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utils/Hooks/useScrollSpy"}),`
`,e.jsx(t.h1,{id:"usescrollspy",children:"useScrollSpy"}),`
`,e.jsx(t.p,{children:"The useScrollSpy hook can be used to align navigation active states with other elements - such as sections - on the page."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(t.p,{children:[`| name | required | type | description |
| ---- | -------- | ---- | ----------- |
| refs | ✅ | `,e.jsx(t.code,{children:"HTMLElement[]"}),` | Array of references to the sections to spy on. The references should DOM elements and the array should be in the order that the elements appear on the page |
| container | | `,e.jsx(t.code,{children:"HTMLElement"}),` | The DOM element that is the scrollable viewport |
| threshold | | `,e.jsx(t.code,{children:"number"})," | The amount of the page that the top of each section should intersect to be considered active. Defaults to 0.2 |"]}),`
`,e.jsx(t.h2,{id:"result",children:"Result"}),`
`,e.jsxs(t.p,{children:[`| name | type | description |
| ---- | ---- | ----------- |
| activeSection | `,e.jsx(t.code,{children:"number"}),` | The active section's index |
| setActiveSection | `,e.jsx(t.code,{children:"(index: number) => void"})," | A function that can be used to set the active section. The corresponding section will be scrolled into view. The active section that was previously determined by scroll events will be overridden by the given section. |"]})]})}function b(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{b as default};
