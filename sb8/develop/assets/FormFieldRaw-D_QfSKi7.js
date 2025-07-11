import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-BwDDMXeo.js";import{M as n}from"./index-COU5Pb8J.js";import{s as p}from"./FormFieldRaw.stories-gh_zzCEP.js";import"./index-D0AnReJb.js";import"./iframe-BUx95od4.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-njFAddlw.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./index-k1Pd4Kly.js";import"./styled-components.browser.esm-EkLDtEIi.js";import"./sizes-o2d97SRj.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-C8W2yeY-.js";import"./Button-CIsIgYW9.js";import"./identifier-cQ2cb48K.js";import"./generateUtilityClasses-B-SuhQrp.js";import"./ButtonBase-D9-8PPWk.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-CUzMHGlt.js";import"./Popper-C-qQSfSD.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-EO1q8T9A.js";import"./useThemeWithoutDefault-D4M89WpM.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-umnB1liH.js";import"./createSvgIcon-ZSxe0E8n.js";import"./createSvgIcon-BqayHko4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Csn3cM8V.js";import"./DisplayText-DsKn3JO_.js";import"./ButtonRow-bA1_CZ2a.js";import"./toNumber-CI4rbyKs.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdownButtons-BoxlsZi1.js";import"./index-C8Iw7yj0.js";import"./ExpandMore-7WC6Jukx.js";import"./Chip-6PxD25oI.js";import"./PickerPanel-PEccAPwF.js";import"./PageHeader-PjPXuI9q.js";import"./Text-4ZxjQQL-.js";import"./FormFieldText.styled-Cyn0xN8Z.js";import"./formControlState-CbpNtXrp.js";import"./Spinner-CI5raFHi.js";import"./CheckboxList-DCB3WPmf.js";import"./Checkbox-CPU_Yyhi.js";import"./FormControlLabel-9JumqQgw.js";import"./DataViewPrimaryFilter.styled-5W5JcB5Q.js";import"./MoreVert-CRDnLPP8.js";import"./formats-CMvQHWsT.js";import"./Snackbar-D4MO-uDR.js";import"./Close-bfO5ceNT.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./ChipList-BGF-Et87.js";import"./RadioButton-CWZM88eJ.js";import"./StyledFormControl.styled-50iZRKTb.js";import"./Toggle-DxNmnByB.js";import"./Dialog-CV_57Jxn.js";import"./ThemeProvider-DHi8PP6S.js";import"./SideNav-CKFQrzl9.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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

`})})]})}function Ft(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Ft as default};
