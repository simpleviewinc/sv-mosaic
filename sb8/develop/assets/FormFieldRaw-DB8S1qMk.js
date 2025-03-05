import{j as t}from"./jsx-runtime-DiwAibxM.js";import{useMDXComponents as e}from"./index-B4U1yk18.js";import{M as n}from"./index-BRnbLl7y.js";import{s as p}from"./FormFieldRaw.stories-Bbi-1h6_.js";import"./index-Btj5Fd67.js";import"./iframe-xxvTEPrB.js";import"../sb-preview/runtime.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./tslib.es6-CRos2fHm.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-Cqq1nRsk.js";import"./toString-CrHhZNKP.js";import"./index-CQ9F9_Tt.js";import"./index-ogSvIofg.js";import"./styled-components.browser.esm-DIT4wwZk.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./index-DE-vLMND.js";import"./theme-D38K4W-Z.js";import"./testIds-fiKIunms.js";import"./TitleWrapper-D0jWUQG0.js";import"./Button-D32bI-Hq.js";import"./generateUtilityClasses-8vC7aVzu.js";import"./ButtonBase-qeNCnyas.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Dpu8VSWK.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D0FYgW1y.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-CksQJzsL.js";import"./createSvgIcon-BYvI5rjI.js";import"./createSvgIcon-DEmQcq0a.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-iUA5kZEF.js";import"./TitleText-b_QXd7Yf.js";import"./ButtonRow-Bg_-eU3q.js";import"./index-BbjJqZ7X.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BZ3tfVAq.js";import"./Chip-CB_Nl8Vf.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-DbKyEzTp.js";import"./formControlState-B0dK5Yiw.js";import"./Spinner-BTI8gP3i.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-D_uRM6MU.js";import"./Checkbox-3bvh3g8i.js";import"./FormControlLabel-BnIcqxAa.js";import"./getThemeProps-CANKBKLy.js";import"./MoreVert-CcQ_DGVp.js";import"./ChevronRight-B_wNKS8s.js";import"./PageHeader-DvaIFD-A.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BelC6HqS.js";import"./StyledFormControl.styled-DMWoJm0e.js";import"./Toggle-2hh2ORfC.js";import"./Dialog-BKnqllF5.js";import"./SideNav-D2hLlXvZ.js";import"./Snackbar-BFSmGquB.js";import"./Close-CSM1BQ-c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-DXwRxrKb.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
