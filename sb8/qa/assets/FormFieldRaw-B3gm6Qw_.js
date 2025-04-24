import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-yrER70vX.js";import{M as n}from"./index-BNBosREI.js";import{s as p}from"./FormFieldRaw.stories-CuNtFeUT.js";import"./index-DDfD_3TG.js";import"./iframe-B0RNQ4di.js";import"../sb-preview/runtime.js";import"./index-DCMmMN8S.js";import"./index-ywIwhVjx.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-CUnS8Soe.js";import"./index-wdBq5kwF.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-DXsh1Zr7.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./Form-CQFKd4og.js";import"./theme-DWrYR5Gu.js";import"./SideNav-CvsHqpPT.js";import"./containerQuery-XietOkEy.js";import"./useToggle-BK_3QGB6.js";import"./Button-_6SRCSsN.js";import"./generateUtilityClasses-Dav9K5Jg.js";import"./ButtonBase-B3sVjXKq.js";import"./useIsFocusVisible-DxTeNLkh.js";import"./Popper-BFIFukJ-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BjWv6DhY.js";import"./index-BpD74PYt.js";import"./debounce-G1u4Gy2U.js";import"./DataViewPrimaryFilter.styled-DOEMDM8r.js";import"./createSvgIcon-ryN2wBPb.js";import"./createSvgIcon-Bc8E_7Df.js";import"./useId-C6ulm9BR.js";import"./useControlled-0MmPqhal.js";import"./Chip-TPBsYk2z.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CCZzHAOs.js";import"./DataViewFilterDropdown-D8zsAVgS.js";import"./formControlState-D0eomaiA.js";import"./ButtonRow-5AdSMJlC.js";import"./Spinner-D0BoAIGc.js";import"./Typography-DhgnvJ03.js";import"./SubtitleText-DyATjJCY.js";import"./CheckboxList-DKZDPSzE.js";import"./Checkbox-CL37ymQB.js";import"./FormControlLabel-D-u7WmCt.js";import"./getThemeProps-DXoot0qR.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D-T1QIB0.js";import"./StyledFormControl.styled-pfNyCqn0.js";import"./Toggle-BjiP2rWg.js";import"./formats-sBod7wm8.js";import"./Dialog-CyXhuKHl.js";import"./ChevronRight-BWmUBWCy.js";import"./TitleWrapper-CEGR9Ons.js";import"./TitleText-B4ASHioH.js";import"./Snackbar-Bslrzt6A.js";import"./Close-BnT1QDqQ.js";import"./ClickAwayListener-MSE9i65R.js";import"./MoreVert-cizeWCO8.js";import"./PageHeader-SBBckNNB.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
