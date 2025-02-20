import{j as t}from"./jsx-runtime-DiwAibxM.js";import{useMDXComponents as e}from"./index-B4U1yk18.js";import{M as n}from"./index-DbLG6XQq.js";import{s}from"./FormFieldRadio.stories-C4ZBIlJq.js";import"./index-Btj5Fd67.js";import"./iframe-BkmjaClI.js";import"../sb-preview/runtime.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./tslib.es6-CRos2fHm.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-Cqq1nRsk.js";import"./toString-CrHhZNKP.js";import"./index-CQ9F9_Tt.js";import"./index-ogSvIofg.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-DXwRxrKb.js";import"./index-BGhy33fP.js";import"./theme-C7C0QMlu.js";import"./testIds-fiKIunms.js";import"./TitleWrapper-BAR2n_rD.js";import"./Button-CRbkpCI2.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./ButtonBase-biKTBdl5.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Cwezlgxk.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-R4ufcCXK.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-BqcK0eeN.js";import"./createSvgIcon-CzNXaSwG.js";import"./createSvgIcon-Bmixpj46.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-D0-akgTt.js";import"./TitleText-CdOksVB0.js";import"./ButtonRow-BXJCCKLJ.js";import"./index-DvTtuJek.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-Ckb-VyLy.js";import"./Chip-C_h72JNQ.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-CWtnKjLU.js";import"./formControlState-Bl9Dd4wz.js";import"./Spinner-C0FunRuE.js";import"./SubtitleText-DUUVrgUU.js";import"./CheckboxList-8phOVoJn.js";import"./Checkbox-Dw77DCJG.js";import"./FormControlLabel-DHn1WcqZ.js";import"./getThemeProps-DdDNKTGU.js";import"./MoreVert-Djp96t97.js";import"./ChevronRight-CA1Fd4W_.js";import"./PageHeader-Dwi4ENWc.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-Ba6ulvNI.js";import"./StyledFormControl.styled-i13hAbZe.js";import"./Toggle-DhOz43zT.js";import"./Dialog-D-UDZ0Lf.js";import"./SideNav-BXGvGLiL.js";import"./Snackbar-DLaSlsnc.js";import"./Close-BLCogFul.js";import"./ClickAwayListener-DoPvkzLf.js";import"./options-DJM8a-gX.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(r.h1,{id:"radio",children:"Radio"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"A group of radio buttons allows users to select a single item from a list of possible options."}),`
`,t.jsx(r.li,{children:"All possible options are exposed up front for comparison."}),`
`,t.jsx(r.li,{children:"Users can only make a single selection from the list of possible options."}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/story/formfields-formfieldradio--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"string"})," - Value of the selected option."]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.table,{children:[t.jsx(r.thead,{children:t.jsxs(r.tr,{children:[t.jsx(r.th,{children:"Name"}),t.jsx(r.th,{children:"Type"}),t.jsx(r.th,{children:"Description"})]})}),t.jsxs(r.tbody,{children:[t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"options"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"MosaicLabelValue[]"})}),t.jsx(r.td,{children:"required - Predefined set of mutually exclusive options."})]}),t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"getOptions"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"() => Promise<MosaicLabelValue[]>"})}),t.jsx(r.td,{children:"required - Function to get a set of options. This prop only applies when getting options from a DB."})]})]})]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`//Option recommended when getting options locally.\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "radio",\r
				inputSettings: {\r
					options: [\r
						{\r
							label: "Label 1",\r
							value: "label_1",\r
						},\r
						{\r
							label: "Label 2",\r
							value: "label_2",\r
						},\r
						{\r
							label: "Label 3",\r
							value: "label_3",\r
						},\r
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
				type: "radio",\r
				inputSettings: {\r
					getOptions: myGetOptionsFn,\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function bt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{bt as default};
