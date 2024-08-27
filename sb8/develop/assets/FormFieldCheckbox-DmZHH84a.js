import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import{M as n}from"./index-CyjGJ7bP.js";import{s}from"./FormFieldCheckbox.stories-BZU69Uw8.js";import"./index-BP8_t0zE.js";import"./iframe-Bgjym2k7.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-_3vuFM65.js";import"./FormFieldText.styled-D52tBzSN.js";import"./theme-D4oZEIDo.js";import"./Button-hDbntUFq.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-PbTCDhKf.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-w-fPOHP0.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-DtSB7Npb.js";import"./createSvgIcon-C--OfSMv.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-Dj2uKZPX.js";import"./CheckboxList-BJKO_tlZ.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-99gvqvpC.js";import"./FormControlLabel-6w5tMtqL.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-D6sgaW_7.js";import"./ButtonRow-CMyoNa1j.js";import"./Spinner-CkdL5ves.js";import"./Chip-DXGqlxO_.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-cXyE_jQb.js";import"./StyledFormControl.styled-BiBtmbII.js";import"./Toggle-CVDhB75Z.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-Br-7O02j.js";import"./TitleWrapper-pxn7wBs7.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-DHzDrhAG.js";import"./ChevronRight-_vfyNBs1.js";import"./PageHeader-Bx1E2hEF.js";import"./MenuSelect-Cs3ZiiP1.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-C7U_7KSK.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-uNo4FsPQ.js";import"./Close-SaQPltJO.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";import"./FormFieldCheckboxUtils-C4lbz8gc.js";import"./storyUtils-BoiXCagy.js";import"./getOptions-B-LeD6K6.js";import"./advancedSelectionUtils-Dc6CTSWK.js";function i(o){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function kt(o={}){const{wrapper:r}={...e(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(i,{...o})}):i(o)}export{kt as default};
