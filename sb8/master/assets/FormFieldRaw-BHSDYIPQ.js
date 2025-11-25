import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-DhUyNoj3.js";import{M as n}from"./index-DBcemkIk.js";import{s as p}from"./FormFieldRaw.stories-CttT4Uko.js";import"./index-ePW8zFKp.js";import"./iframe-CTpWM_UQ.js";import"../sb-preview/runtime.js";import"./index-DnRBG-o-.js";import"./index-CKydZLen.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-CZ_faPKH.js";import"./_baseForOwn-CCkfl5oU.js";import"./index-CGmM_oJM.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm-ChbXZP2t.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./index-BdxBBtd6.js";import"./ExpandMore-DTgjfsqJ.js";import"./identifier-vWKndVvV.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-DOp_2lHr.js";import"./createSvgIcon-JtMyjPpt.js";import"./generateUtilityClasses-CUUJXLh7.js";import"./styled-components.browser.esm-CUKKF2J4.js";import"./ButtonBase-YTDCQqeW.js";import"./useIsFocusVisible-BxLBCNny.js";import"./ownerWindow-DvT1GKkC.js";import"./MosaicContext-CjWw6F81.js";import"./FormFieldText.styled-CQLmxjGY.js";import"./formControlState-kJY1j3p4.js";import"./Popper-Bt--aTPm.js";import"./useTheme-DTRH4aGG.js";import"./useThemeWithoutDefault-Dj6yTNm1.js";import"./Button-BUa6dDgD.js";import"./index-Ca1iOyRL.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-sA64N9Qg.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import"./DisplayText-DlqFHcnF.js";import"./ButtonRow-CKtT1B9L.js";import"./DataViewFilterDropdownButtons-_2SqC-T2.js";import"./StyledPopperPaper-D2kQT34B.js";import"./index-3HUVGtNK.js";import"./Chip-0jtXmB96.js";import"./DataViewPrimaryFilter.styled-CJT5o7qD.js";import"./Badge-BWKQiQcj.js";import"./Text-cPxBJcyq.js";import"./PickerPanel-BzSJ-e0U.js";import"./PageHeader-PoyfzcQN.js";import"./Spinner-Bi6mQivf.js";import"./CheckboxList-C0PviF2_.js";import"./Checkbox-DHQwFOa3.js";import"./SwitchBase-BYEDHepN.js";import"./StyledOptionFormControl-Ca00866Q.js";import"./MoreVert-BnBEmsSM.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CVTIwy1f.js";import"./Snackbar-83ELDc2S.js";import"./Close-Da-iw-_d.js";import"./ChipList-Bh3gHNbK.js";import"./RadioButton-C4xgaHsm.js";import"./Toggle-Bi6du1gm.js";import"./Dialog-Bnn_xCj4.js";import"./ThemeProvider-B65WN4y2.js";import"./SideNav-DjAa19Sh.js";import"./CardHeading-vMKjysYd.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
