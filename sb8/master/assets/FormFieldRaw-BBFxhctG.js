import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-BwDDMXeo.js";import{M as n}from"./index-CWmyvV3_.js";import{s as p}from"./FormFieldRaw.stories-BhaoGHxL.js";import"./index-D0AnReJb.js";import"./iframe-B2QzI26S.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-njFAddlw.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./index-CLK0-CYa.js";import"./styled-components.browser.esm-D9jdcGim.js";import"./sizes-xhpoGYFi.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-CwhNcCW5.js";import"./Button-B-HROxGS.js";import"./identifier-P2c7yk_w.js";import"./generateUtilityClasses-Cqx37_87.js";import"./ButtonBase-B88uyuTX.js";import"./useIsFocusVisible-DX7TaDmt.js";import"./index-Cp34SjbI.js";import"./Popper-C2xxNeyp.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-VJaTxDNw.js";import"./useThemeWithoutDefault-BBWH5Z3d.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-eQe_EJj5.js";import"./createSvgIcon-1nOp1Fw5.js";import"./createSvgIcon-yORtlijU.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DqP6CXHW.js";import"./DisplayText-DfbYD38Q.js";import"./ButtonRow-ZsYtcJma.js";import"./toNumber-BAVDMXIx.js";import"./useMosaicTranslation-YU7EdNRi.js";import"./DataViewFilterDropdownButtons-BXJT_S1t.js";import"./index-hRodqjB9.js";import"./ExpandMore-p_Fviusb.js";import"./Chip-CPY2CdPS.js";import"./CheckboxList-BiSNtdOb.js";import"./Checkbox-CcPIMNpv.js";import"./StyledOptionFormControl-DrwUDyOs.js";import"./formControlState-DKpu4qdP.js";import"./Text-Cy3-d4Dq.js";import"./DataViewPrimaryFilter.styled-WHVNyTxG.js";import"./PickerPanel-LujK0zY6.js";import"./PageHeader-Maf0ecTd.js";import"./FormFieldText.styled-CreleCMn.js";import"./Spinner-C3xVyrtB.js";import"./MoreVert-CCwGH32Y.js";import"./formats-CMvQHWsT.js";import"./Snackbar-q2Sdad91.js";import"./Close-a0rXqC-u.js";import"./ClickAwayListener-Dv_hDxFo.js";import"./ChipList-CxVqxH3S.js";import"./RadioButton-B3r_znDd.js";import"./Toggle-D8WoBZhC.js";import"./Dialog-CQAKZUUh.js";import"./ThemeProvider-DOMyClwG.js";import"./SideNav-D5yCMd23.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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

`})})]})}function Ct(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Ct as default};
