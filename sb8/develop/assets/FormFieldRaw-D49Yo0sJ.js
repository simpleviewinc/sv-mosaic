import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import{M as n}from"./index-C3zWq2hm.js";import{s as p}from"./FormFieldRaw.stories-Dy0_yPuV.js";import"./index-BP8_t0zE.js";import"./iframe-DLGJpQYB.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-DDOItwIs.js";import"./FormFieldText.styled-CDQUwglR.js";import"./theme-DRtZtbPc.js";import"./Button-BrUhf9jf.js";import"./generateUtilityClasses-CplxKB4o.js";import"./ButtonBase-Btj-nnLi.js";import"./useIsFocusVisible-De2ftVE9.js";import"./Popper-CA50KEz-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-vMmOGwbU.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-CiJN4qBb.js";import"./CheckboxList-9J3AJhZb.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-Daz-CCp_.js";import"./FormControlLabel-2HxiQW27.js";import"./getThemeProps-CBTZRUO9.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CJaR1K_8.js";import"./ButtonRow-C8VNIQ4B.js";import"./Spinner-Cxn5F_rN.js";import"./Chip-CuADowIf.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D1cjnaj9.js";import"./StyledFormControl.styled-DR5TItxT.js";import"./Toggle-DqBdDGXG.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CUu1BnTo.js";import"./TitleWrapper-B_5wLb-y.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-CHB9Iy9y.js";import"./ChevronRight-Bc3jAIO-.js";import"./PageHeader-B0SeyLtR.js";import"./formats-CDjt32hU.js";import"./Dialog-DYdX5JhR.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-B3ORSSfg.js";import"./Snackbar-CeVWLZcc.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";import"./renderButtons-BmHfsf_z.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
`,t.jsx(r.h1,{id:"raw",children:"Raw"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.p,{children:["This type of field will render the corresponding ",t.jsx(r.code,{children:"value"})," as-is. It can be used to render anything that is a valid ",t.jsx(r.code,{children:"ReactNode"})," while maintaining the normal field display behaviour, like the label and field hint. It has no ",t.jsx(r.code,{children:"inputSettings"}),"."]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`\r
function RawValue() {\r
	return (\r
		<RawValueWrapper>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
		</RawValueWrapper>\r
	)\r
}\r
\r
async function getFormValues() {\r
	return {\r
		raw: <RawValue />\r
	}\r
}\r
\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "raw",\r
			},\r
			//...other fields\r
		],\r
	[]\r
);\r

`})})]})}function Mt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Mt as default};
