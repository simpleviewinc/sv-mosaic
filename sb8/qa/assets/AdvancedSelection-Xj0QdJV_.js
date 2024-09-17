import{j as t}from"./jsx-runtime-CexXSJP5.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as o}from"./index-Ba0kBJ9T.js";import{s}from"./AdvancedSelection.stories-BOW_sRJf.js";import"./index-BP8_t0zE.js";import"./iframe-RQpLZPhi.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-Chz1BKzT.js";import"./FormFieldText.styled-Dy7YdaNR.js";import"./theme-Cyujm90X.js";import"./Button-nZpOdxAh.js";import"./generateUtilityClasses-Bq4SLC4n.js";import"./ButtonBase-B9MACyLv.js";import"./useIsFocusVisible-De2ftVE9.js";import"./Popper-DKfV5JUa.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-JcVqJUPL.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CLmY5moR.js";import"./createSvgIcon-CYUKOE7w.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-D3nDZNMY.js";import"./CheckboxList-vtqXYb3p.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DlKnOsMd.js";import"./FormControlLabel-CADsa67j.js";import"./getThemeProps-DQ8M-aLx.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-BbvqwW3v.js";import"./ButtonRow-mHN3ze0L.js";import"./Spinner-BweMUiuT.js";import"./Chip-CULEVs9E.js";import"./Typography-cUIkDVC5.js";import"./SubtitleText-BtBCMBDH.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CQ27sEkY.js";import"./StyledFormControl.styled-CjmTklcO.js";import"./Toggle-Nou3pw5b.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-tvyFmnDf.js";import"./TitleWrapper-BMh3rxDx.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-DWruTFKQ.js";import"./MoreVert-LCJpouIh.js";import"./ChevronRight-ClDk1Oir.js";import"./PageHeader-BKvpMOBE.js";import"./MenuSelect-DW9Vb27W.js";import"./formats-CDjt32hU.js";import"./Dialog-oIWE6RL0.js";import"./useMediaQuery-BRf2ARoC.js";import"./SideNav-BjSBl4fN.js";import"./Snackbar-WG1ScYsF.js";import"./Close-BZa28Lj1.js";import"./ClickAwayListener-C0tzoxWy.js";import"./Blank-Ci2z0OwS.js";import"./advancedSelectionUtils-Dc6CTSWK.js";import"./storyUtils-BoiXCagy.js";import"./MultiSelectHelper-CyBHAJR7.js";import"./index.browser-vcSNLBTf.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:s}),`
`,t.jsx(e.h1,{id:"advanced-selection",children:"Advanced Selection"}),`
`,t.jsxs(e.p,{children:["This field implements the ",t.jsx(e.a,{href:"#generic-field-props-fielddef",children:t.jsx(e.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Allow users to select one or more options from a modal menu."}),`
`,t.jsx(e.li,{children:"Used for very long lists."}),`
`,t.jsx(e.li,{children:"Have the ability to type and search."}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"/?path=/story/formfields-formfieldadvancedselection--playground",children:t.jsx(e.strong,{children:"Playground"})})}),`
`,t.jsxs(e.li,{children:["Data: ",t.jsx(e.code,{children:"array"})," of ",t.jsx(e.code,{children:"object"})," - Array of values of the selected options.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"label"})," - ",t.jsx(e.code,{children:"string"})," - Text users will see to identify the option."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"value"})," - ",t.jsx(e.code,{children:"string[]"})," - Value that will be saved to the DB when the option gets selected."]}),`
`]}),`
`]}),`
`,t.jsx(e.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Name"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"createNewOption"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"(newOptionLabel: string) => Promise<MosaicLabelValue>"})}),t.jsx(e.td,{children:"optional -  Function used to insert more options either on the local options array, or on the DB."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"options"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"MosaicLabelValue[]"})}),t.jsx(e.td,{children:"required -  Used to set the full info (label, value) of all selected options. This prop only applies when getting options locally. The label is the text the users will see to identify the option and the value will be saved to the DV when the option gets selected."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"getOptions"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"({filter?: string, limit?: number, offset?: number}) => Promise<MosaicLabelValue[]>"})}),t.jsx(e.td,{children:"required - Function to get the next set of options. This prop only applies when getting options from a DB."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"getOptionsLimit"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"number or string"})}),t.jsx(e.td,{children:"optional - When defined, limits the amount of options to get from the DB. This prop only applies when getting options from a DB."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"selectLimit"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"number"})}),t.jsx(e.td,{children:"optional - Defines the maximum amount of options users can select. Passing undefined or not passing it at all allows users to select as many as they want."})]})]})]}),`
`,t.jsx(e.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`// List of options\r
const externalOptions = [\r
	{\r
		label: "Option1",\r
		value: "value1",\r
	},\r
	{\r
		label: "Option2",\r
		value: "value2",\r
	}\r
]\r
\r
/**\r
 * Definition of the funtion that enables the\r
 * creation of new options.\r
**/\r
const myCreateOptionFn = async (newOptionLabel) => {\r
	const value = \`\${newOptionLabel}_\${externalOptions.length}\`\r
	const newOption = {\r
		value,\r
		label: newOptionLabel,\r
	}\r
\r
	//Insert to db\r
	externalOptions.push(newOption);\r
\r
	return newOption;\r
}\r
\r
//Option recommended when getting options locally.\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "advancedSelection",\r
				inputSettings: {\r
					createNewOption: myCreateOptionFn,\r
					options: externalOptions\r
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
				type: "advancedSelection",\r
				inputSettings: {\r
					createNewOption: myCreateOptionFn,\r
					getOptions: myGetOptionsFn,\r
					getOptionsLimit: 5,\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function Lt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{Lt as default};
