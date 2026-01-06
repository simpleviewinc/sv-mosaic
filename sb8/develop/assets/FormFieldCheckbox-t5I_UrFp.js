import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-rC_Sa5AQ.js";import{M as n}from"./index-BTVJvoOT.js";import{s}from"./FormFieldCheckbox.stories-Cw0sMatH.js";import"./index-BcWw8SPZ.js";import"./iframe-D3zPmwis.js";import"../sb-preview/runtime.js";import"./index-CcJIGMye.js";import"./index-lsJDjLAm.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-u0MeWzco.js";import"./_baseForOwn-izJd5_f8.js";import"./index-COuoH38x.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index-D1vauBWn.js";import"./ExpandMore-DZ5qJANw.js";import"./identifier-vCS-QwDM.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-CFpEEiA8.js";import"./generateUtilityClasses-DxEc1O3f.js";import"./styled-components.browser.esm-iTa7G-AD.js";import"./useIsFocusVisible-BiDRLN3G.js";import"./MosaicContext-CR3sZt-k.js";import"./ButtonBase-C5IHe1v7.js";import"./FormFieldText.styled-ClVDR1L1.js";import"./formControlState-DBjLczXb.js";import"./useTooltip-Ca_MnstU.js";import"./useThemeWithoutDefault-DcDKfq8w.js";import"./Button-Ux1FJEQf.js";import"./index-BFOXBPPy.js";import"./Popover-BsgnjFRv.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-C-T-4XdU.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-deJoC413.js";import"./Typography-B-r-8hBf.js";import"./DisplayText-iy3WLqbC.js";import"./ButtonRow-BGTnrp5G.js";import"./DataViewFilterDropdownButtons-DdEPeKSM.js";import"./StyledPopperPaper-5eEAsnY4.js";import"./TooltipIcon-IdakTMWj.js";import"./index-BaZjE1Ov.js";import"./Chip-CtO-XFaP.js";import"./DataViewPrimaryFilter.styled-DN5E-823.js";import"./Badge-BN0BUUeW.js";import"./Text-C3Iu2YK-.js";import"./PickerPanel-Bp2sQHan.js";import"./PageHeader-CPZg_1sR.js";import"./Spinner-D5EjUoUF.js";import"./CheckboxList-DZUHiBw_.js";import"./Checkbox-CratNqxV.js";import"./SwitchBase-CO7VNkpO.js";import"./StyledOptionFormControl-Bv1fp9pz.js";import"./MoreVert-rBkgd4TI.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DNVBgAUm.js";import"./Snackbar-ComNH1Eo.js";import"./Close-1U0VQJju.js";import"./ChipList-T_9FOMMC.js";import"./RadioButton-D50tCzor.js";import"./Toggle-wemzBvjs.js";import"./Dialog-CDqGrwwk.js";import"./ThemeProvider-ke4tQo0r.js";import"./SideNav-DpcKnBv8.js";import"./CardHeading-BVF9rLR_.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";import"./options-DEOzrsxm.js";function i(o){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(r.h1,{id:"checkbox",children:"Checkbox"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"A group of checkbox buttons that allows users to select multiple items from a list of possible options."}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/story/formfields-formfieldcheckbox--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"array"})," of ",t.jsx(r.code,{children:"string"})," - Array of values of the selected options."]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.table,{children:[t.jsx(r.thead,{children:t.jsxs(r.tr,{children:[t.jsx(r.th,{children:"Name"}),t.jsx(r.th,{children:"Type"}),t.jsx(r.th,{children:"Description"})]})}),t.jsxs(r.tbody,{children:[t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"options"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"MosaicLabelValue[]"})}),t.jsx(r.td,{children:"required - Array of options to be rendered containing their corresponding label and value."})]}),t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"getOptions"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"() => Promise<MosaicLabelValue[]>"})}),t.jsx(r.td,{children:"required - Function to get a set of options. This prop only applies when getting options from a DB."})]})]})]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`//Option recommended when getting options locally.\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "checkbox",\r
				inputSettings: {\r
					options: [\r
						{\r
							label: "Option1",\r
							value: "value1",\r
						}\r
					],\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);\r
\r
//Option recommended when getting options from a database.\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "checkbox",\r
				inputSettings: {\r
					getOptions: myGetOptionsFn,\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function Ot(o={}){const{wrapper:r}={...e(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(i,{...o})}):i(o)}export{Ot as default};
