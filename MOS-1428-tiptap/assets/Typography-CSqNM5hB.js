import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as i}from"./index-D7r7IB1o.js";import{s}from"./Typography.stories-QAmoJo5k.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./theme-CtvfJOCv.js";import"./Typography-DSyzRETI.js";import"./TitleText-Dhe7UX1h.js";import"./SubtitleText-mEFPNCHN.js";import"./styled-components.browser.esm-8MQ3dTkk.js";import"./emotion-unitless.esm-sScrWPmR.js";function r(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Typography"})," and its helper components offer a way to consistently style text. This ensures that text throughout your application matches the Mosaic system. The ",e.jsx(t.code,{children:"Typography"})," component currently offers 3 variations. There are helper components for each variation, enabling you to invoke ",e.jsx(t.code,{children:"<TitleText />"})," instead of ",e.jsx(t.code,{children:'<Typography variant="title" />'}),"."]}),`
`,e.jsxs("table",{width:"100%",children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Variant"}),e.jsx("td",{children:"Component Name"}),e.jsx("td",{children:"Default Tag"}),e.jsx("td",{children:"Default Styles"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"title"}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"TitleText"})})}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"h1"})})}),e.jsx("td",{children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`font-family: \${theme.museoFont};\r
font-size: 28px;\r
font-weight: \${theme.fontWeight.light};\r
line-height: 1.2em;
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"subtitle"}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"SubtitleText"})})}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"h3"})})}),e.jsx("td",{children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`font-family: \${theme.fontFamily};\r
font-size: 18px;\r
font-weight: 600;
`})})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"body"}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"BodyText"})})}),e.jsx("td",{children:e.jsx(t.p,{children:e.jsx(t.code,{children:"div"})})}),e.jsx("td",{children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`font-family: \${theme.fontFamily};\r
font-size: 16px;
`})})})]})]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["Both the base ",e.jsx(t.code,{children:"Typography"})," component ",e.jsx(t.em,{children:"and"})," the helper components have the below properties, with the exception of ",e.jsx(t.code,{children:"variant"}),". ",e.jsx(t.code,{children:"variant"})," is a required property when using the ",e.jsx(t.code,{children:"Typography"})," component and an invalid property when using the variation helper components."]}),`
`,e.jsxs(t.p,{children:[`| Prop name | Type | Description |\r
| ------ | ------ | ------ |\r
| `,e.jsx("code",{children:"variant"})," | ",e.jsx("code",{children:'"title" | "subtitle" | "body"'}),"  | ",e.jsxs(t.strong,{children:["Base ",e.jsx("code",{children:"Typography"})," component only"]}),`. Controls the look of the typography |\r
| `,e.jsx("code",{children:"as"})," | Any valid HTML tag | ",e.jsx(t.strong,{children:"DEPRECATED"}),` Use "tag" prop instead |\r
| `,e.jsx("code",{children:"tag"}),` | Any valid HTML tag | The HTML element to use. Each variant defaults to its own, specifically picked HTML tag (see above) |\r
| `,e.jsx("code",{children:"maxLines"})," | ",e.jsx("code",{children:"number"}),` | If provided, text will be truncated at the given number of lines |\r
| `,e.jsx("code",{children:"whiteSpace"}),` | Any valid CSS white-space value | The "white-space" CSS style |\r
| `,e.jsx("code",{children:"breakAll"})," | ",e.jsx("code",{children:"boolean"})," | Utilises ",e.jsx("code",{children:"word-break: break-all"}),` - useful for displaying long strings with no breaking characters like URLs |\r
| `,e.jsx("code",{children:"style"})," | ",e.jsx("code",{children:"MosaicObject"})," | ",e.jsx(t.strong,{children:"DEPRECATED"})," Use a style property on an object provided to ",e.jsx("code",{children:"attrs"}),` instead |\r
| `,e.jsx("code",{children:"children"})," | ",e.jsx("code",{children:"ReactNode"}),` | The content, usually text, of the Typography component |\r
| `,e.jsx("code",{children:"className"})," | ",e.jsx("code",{children:"string"}),` | Pass custom classes to the wrapping element |\r
| `,e.jsx("code",{children:"title"})," | ",e.jsx("code",{children:"string"}),` | Provides a title attribute to the Typography element |\r
| `,e.jsx("code",{children:"attrs"}),` | Any valid HTML attribute | Additional attributes to be provided to the Typography element |\r
| `,e.jsx("code",{children:"color"})," | ",e.jsx("code",{children:"ColorTypes"})," | The text colour of the typography |"]})]})}function A(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{A as default};
