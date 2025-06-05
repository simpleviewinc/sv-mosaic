import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-BwDDMXeo.js";import{M as n}from"./index-oQB6Rei-.js";import{s as p}from"./FormFieldRaw.stories-CGZ0h2_s.js";import"./index-D0AnReJb.js";import"./iframe-DAA1Ot5w.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-njFAddlw.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./index-ChNyYHZm.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-DeOGO1IS.js";import"./Button-mgz2aTYm.js";import"./DefaultPropsProvider-BwNoCFE_.js";import"./generateUtilityClasses-42_at76R.js";import"./ButtonBase-EThHB291.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-CtiN8CS7.js";import"./Popper-BpP7Dmyd.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Dt0_M2VT.js";import"./useThemeWithoutDefault-ML7LN7QY.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./createSvgIcon-Bdc0w2F6.js";import"./createSvgIcon-CmcFkBiI.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-CaKiXxBh.js";import"./DisplayText-p-dXd17y.js";import"./ButtonRow-gAFOvWL6.js";import"./index-CWM90NNz.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-B6PsGsAS.js";import"./Chip-BiF3n3mk.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CpwAbK4m.js";import"./formControlState-DKt-4xzo.js";import"./Spinner-BIub0DbD.js";import"./Text-SN-dsdu2.js";import"./CheckboxList-BXiGiY-c.js";import"./Checkbox-CABnih5k.js";import"./FormControlLabel-FaPuCwUU.js";import"./MoreVert-BxoNaVuW.js";import"./ChevronRight-C-yhpJTc.js";import"./PageHeader-DYkch7zz.js";import"./formats-CMvQHWsT.js";import"./RadioButton-peGC_BMl.js";import"./StyledFormControl.styled-CW3JaFWW.js";import"./Toggle-IqG9sXDk.js";import"./Dialog-kc3-0tkB.js";import"./ThemeProvider-CyphNCQQ.js";import"./ChipList-D5NUhJyC.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-DXnnQTTm.js";import"./Close-CGtmtFuS.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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

`})})]})}function vt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{vt as default};
