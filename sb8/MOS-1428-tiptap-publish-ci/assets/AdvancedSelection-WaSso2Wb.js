import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as o}from"./index-Wmt_1BtZ.js";import{s}from"./AdvancedSelection.stories-DV-kicRx.js";import"./index-BP8_t0zE.js";import"./iframe-nya3E89h.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-DjSqlTKK.js";import"./FormFieldText.styled-BdyxYbXv.js";import"./theme-D4oZEIDo.js";import"./Button-DueqkIm2.js";import"./generateUtilityClasses-BPeOZGYv.js";import"./ButtonBase-XhX7nRZA.js";import"./useIsFocusVisible-B0UKn5st.js";import"./Popper-Bh80rPSh.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BNssCB1g.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-COKC524W.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-FZ6f8RnB.js";import"./createSvgIcon-BtentTTR.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-2J_8zTQy.js";import"./CheckboxList-KMp2i93r.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-U_yyaHlS.js";import"./FormControlLabel-DBnW5Tz0.js";import"./getThemeProps-C7Gh6k4C.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CnIiVLVy.js";import"./ButtonRow-qkswv1Jr.js";import"./Spinner-BCi31wiD.js";import"./Chip-ClM3atSE.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-B-eZefD4.js";import"./StyledFormControl.styled-DtM0hwgT.js";import"./Toggle-CG00k_Wo.js";import"./testIds-BnancpY_.js";import"./ColorSelected-BP7nqoPF.js";import"./TitleWrapper-MWHBzMgh.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-C7wPIcx0.js";import"./ChevronRight-BLUVcH0g.js";import"./PageHeader-B-GYZDZp.js";import"./MenuSelect-BcCb5A_-.js";import"./useMediaQuery-Ek32I1kU.js";import"./formats-CDjt32hU.js";import"./Dialog-DAfxXC36.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-DHq1g_-o.js";import"./Close-D5vwSMiv.js";import"./ClickAwayListener-DdjayeQ_.js";import"./Blank-JgbFIOSE.js";import"./advancedSelectionUtils-Dc6CTSWK.js";import"./storyUtils-BoiXCagy.js";import"./MultiSelectHelper-2egjmK1E.js";import"./index.browser-vcSNLBTf.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:s}),`
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
