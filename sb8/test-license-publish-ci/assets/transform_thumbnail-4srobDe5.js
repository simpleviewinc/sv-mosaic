import{j as i}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as m}from"./index-3-_tf5dF.js";import{M as n}from"./index-DnPkr5tS.js";import{c as e}from"./column_transforms-J6mLtyga.js";import{T as p}from"./TransformExample-CwCQUWbb.js";import"./index-BP8_t0zE.js";import"./iframe-DzzMtBJH.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./CheckboxList-Bq1TaTYH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-aoYNk8Xu.js";import"./theme-DRtZtbPc.js";import"./FormControlLabel-n1qioM9o.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./formControlState-D52vkf9K.js";import"./ButtonBase-BZmvw3BH.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useControlled-im5M3O13.js";import"./getThemeProps-Cs15h2IA.js";import"./useTheme-5hcycNQy.js";import"./createSvgIcon-CPgMIgId.js";import"./ColorSelected-CEyZfcGg.js";import"./index-BcS5vVNk.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./createSvgIcon-CcHL1II5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-DLncWxdO.js";import"./FormFieldText.styled-DY-cBMyi.js";import"./Button-Dv6p7qil.js";import"./Popper-CPbWUqAP.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./ButtonRow-OnULoQP7.js";import"./Spinner-DgupAfKo.js";import"./Chip-Da3idaCC.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./testIds-BmLWG2HQ.js";import"./TitleWrapper-B_YZcXoR.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-lzGsiXAs.js";import"./Image-DW9YTXUC.js";import"./formats-CDjt32hU.js";function o(t){const r={code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(n,{title:"Utils/Transforms/Thumbnail"}),`
`,i.jsx(r.h1,{id:"transform_thumbnail",children:"transform_thumbnail"}),`
`,i.jsxs(r.p,{children:["Converts an image URL to an ",i.jsx(r.code,{children:"<img />"})," element with a given height and width."]}),`
`,i.jsx(r.h4,{id:"conversions",children:"Conversions"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:[i.jsx(r.code,{children:'"https://myImgUrl.com"'})," => ",i.jsx(p,{cb:e({width:150,height:150}),data:"https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg"})]}),`
`]}),`
`,i.jsx(r.h4,{id:"args",children:"Args"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:"width"})," - width of the image in pixels."]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:"height"})," - height of the image in pixels."]}),`
`]}),`
`,i.jsx(r.h4,{id:"example",children:"Example"}),`
`,i.jsx(r.pre,{children:i.jsx(r.code,{className:"language-js",children:`import { transform_thumbnail } from "@simpleview/sv-mosaic"
...
transforms : [
    transform_thumbnail()
]
`})})]})}function li(t={}){const{wrapper:r}={...m(),...t.components};return r?i.jsx(r,{...t,children:i.jsx(o,{...t})}):o(t)}export{li as default};