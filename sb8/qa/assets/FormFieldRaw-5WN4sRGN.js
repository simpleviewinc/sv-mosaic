import{j as t}from"./jsx-runtime-DiwAibxM.js";import{useMDXComponents as e}from"./index-B4U1yk18.js";import{M as n}from"./index-BUfodAAP.js";import{s as p}from"./FormFieldRaw.stories-CkXKMiVE.js";import"./index-Btj5Fd67.js";import"./iframe-qBYy1rjn.js";import"../sb-preview/runtime.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./tslib.es6-CRos2fHm.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-Cqq1nRsk.js";import"./toString-CrHhZNKP.js";import"./index-CQ9F9_Tt.js";import"./index-ogSvIofg.js";import"./styled-components.browser.esm-DIT4wwZk.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./Form-tMgN-44i.js";import"./theme-D38K4W-Z.js";import"./SideNav-D2hLlXvZ.js";import"./containerQuery-CksQJzsL.js";import"./useToggle-B3mbTfSB.js";import"./Button-BzJSDP1S.js";import"./generateUtilityClasses-B5i8Rs7p.js";import"./ButtonBase-B2xCaBev.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-BV6MzckQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DELdgGyu.js";import"./index-6dl0l4Q7.js";import"./debounce-IFS8tfQQ.js";import"./DataViewPrimaryFilter.styled-CTVdcnW9.js";import"./createSvgIcon-CAs7t9wT.js";import"./createSvgIcon-CM-As40z.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Chip-ulzUmfU4.js";import"./testIds-C2FMCy5K.js";import"./useMosaicTranslation-DPUDh126.js";import"./DataViewFilterDropdown-CqTisVOW.js";import"./formControlState-BAf21Shc.js";import"./ButtonRow-iQTdUMH8.js";import"./Spinner-C_uMqEwM.js";import"./Typography-iUA5kZEF.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-nyy1Of3u.js";import"./Checkbox-1rJEaydD.js";import"./FormControlLabel-2hVWRnF1.js";import"./getThemeProps-Fw47730D.js";import"./sizes-C6oSOElx.js";import"./RadioButton-LFlv3WCh.js";import"./StyledFormControl.styled-CNCCtQwC.js";import"./Toggle-H5i5NPQc.js";import"./formats-sBod7wm8.js";import"./Dialog-BYWfLX43.js";import"./ChevronRight-CNo34ydh.js";import"./TitleWrapper-OgvLyBY4.js";import"./TitleText-b_QXd7Yf.js";import"./Snackbar-CrdURRDn.js";import"./Close-gDfoKZ0c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./MoreVert-B1D8IEMN.js";import"./PageHeader-P9MDHuwd.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-DXwRxrKb.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
