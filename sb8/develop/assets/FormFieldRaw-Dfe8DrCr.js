import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-rC_Sa5AQ.js";import{M as n}from"./index-BTVJvoOT.js";import{s as p}from"./FormFieldRaw.stories-CAlu7EIu.js";import"./index-BcWw8SPZ.js";import"./iframe-D3zPmwis.js";import"../sb-preview/runtime.js";import"./index-CcJIGMye.js";import"./index-lsJDjLAm.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-u0MeWzco.js";import"./_baseForOwn-izJd5_f8.js";import"./index-COuoH38x.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./styled-components.browser.esm--MXELgCX.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";import"./index-D1vauBWn.js";import"./ExpandMore-DZ5qJANw.js";import"./identifier-vCS-QwDM.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-CFpEEiA8.js";import"./generateUtilityClasses-DxEc1O3f.js";import"./styled-components.browser.esm-iTa7G-AD.js";import"./useIsFocusVisible-BiDRLN3G.js";import"./MosaicContext-CR3sZt-k.js";import"./ButtonBase-C5IHe1v7.js";import"./FormFieldText.styled-ClVDR1L1.js";import"./formControlState-DBjLczXb.js";import"./useTooltip-Ca_MnstU.js";import"./useThemeWithoutDefault-DcDKfq8w.js";import"./Button-Ux1FJEQf.js";import"./index-BFOXBPPy.js";import"./Popover-BsgnjFRv.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-C-T-4XdU.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-deJoC413.js";import"./Typography-B-r-8hBf.js";import"./DisplayText-iy3WLqbC.js";import"./ButtonRow-BGTnrp5G.js";import"./DataViewFilterDropdownButtons-DdEPeKSM.js";import"./StyledPopperPaper-5eEAsnY4.js";import"./TooltipIcon-IdakTMWj.js";import"./index-BaZjE1Ov.js";import"./Chip-CtO-XFaP.js";import"./DataViewPrimaryFilter.styled-DN5E-823.js";import"./Badge-BN0BUUeW.js";import"./Text-C3Iu2YK-.js";import"./PickerPanel-Bp2sQHan.js";import"./PageHeader-CPZg_1sR.js";import"./Spinner-D5EjUoUF.js";import"./CheckboxList-DZUHiBw_.js";import"./Checkbox-CratNqxV.js";import"./SwitchBase-CO7VNkpO.js";import"./StyledOptionFormControl-Bv1fp9pz.js";import"./MoreVert-rBkgd4TI.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DNVBgAUm.js";import"./Snackbar-ComNH1Eo.js";import"./Close-1U0VQJju.js";import"./ChipList-T_9FOMMC.js";import"./RadioButton-D50tCzor.js";import"./Toggle-wemzBvjs.js";import"./Dialog-CDqGrwwk.js";import"./ThemeProvider-ke4tQo0r.js";import"./SideNav-DpcKnBv8.js";import"./CardHeading-BVF9rLR_.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
