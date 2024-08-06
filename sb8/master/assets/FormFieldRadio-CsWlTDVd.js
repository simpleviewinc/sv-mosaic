import{j as t}from"./jsx-runtime-CexXSJP5.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import{M as n}from"./index-BxnYk0Xx.js";import{s}from"./FormFieldRadio.stories-C0AzA_Z0.js";import"./index-BP8_t0zE.js";import"./iframe-P90Jhh6x.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./storyUtils-ByV2Bsyv.js";import"./formUtils-D8tkyYyB.js";import"./FormFieldText.styled-DC9l5o26.js";import"./theme-D4oZEIDo.js";import"./Button-B7Cp1A2i.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-tCQFe4bJ.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CVnL_KSQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-BSB-bEHM.js";import"./createSvgIcon-Ctt9EnSd.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-BVq8MUDq.js";import"./CheckboxList-BqPA3yNH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-_RXYTNJz.js";import"./FormControlLabel-Cy6KcgOl.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CTR0uMlm.js";import"./ButtonRow-nrQV_x_-.js";import"./Spinner-tjn3ihlQ.js";import"./Chip-D6uKAMXX.js";import"./Typography-Bm8mlfoU.js";import"./SubtitleText-A3erhwRa.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BVjzWjPW.js";import"./StyledFormControl.styled-BRiA3uuL.js";import"./Toggle-BXalcPDR.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-x_Fjm0Zg.js";import"./TitleWrapper-Dli_wbop.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-CFZnrs7C.js";import"./MoreVert-Dt36-imA.js";import"./ChevronRight-CA0RLU_a.js";import"./PageHeader-BAPyqEJv.js";import"./MenuSelect-BxBGlSfr.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-BnEQnkF5.js";import"./SideNav-BixOpWCF.js";import"./Snackbar-QgEqhdTF.js";import"./Close-DUapGJLS.js";import"./ClickAwayListener-DFiznkjI.js";import"./Blank-DPcqZTKv.js";import"./getOptions-BCMXGlB2.js";import"./advancedSelectionUtils-Dc6CTSWK.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function Dt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Dt as default};
