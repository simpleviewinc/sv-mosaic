import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as i}from"./index-BwDDMXeo.js";import{M as o}from"./index-Bbd5fy8I.js";import{s}from"./AdvancedSelection.stories-Y68P6ZHy.js";import"./index-D0AnReJb.js";import"./iframe-xZLF4Kzn.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index.browser-vcSNLBTf.js";import"./index-CskZx9qi.js";import"./styled-components.browser.esm-CXkPWv0m.js";import"./sizes-C0LBJJ09.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-UbmTdAF_.js";import"./Button-DaAMSO0F.js";import"./DefaultPropsProvider-Zw7se0ql.js";import"./generateUtilityClasses-CVch8Fxh.js";import"./ButtonBase-CDkrym0l.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-BnPRUgpe.js";import"./Popper-DGZlEdwR.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Bm22bs_q.js";import"./useThemeWithoutDefault-DxXNdoSH.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CBh3xxKQ.js";import"./createSvgIcon-CfA1Cyex.js";import"./createSvgIcon-18YkCsWd.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Reib778S.js";import"./TitleText-BuZN1QQA.js";import"./ButtonRow-C029PRKt.js";import"./index-BfP4QUlu.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DRsOHDYs.js";import"./Chip-IkNXxPJK.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-DrsxdApR.js";import"./formControlState-CAqH4-hG.js";import"./Spinner-D4T0rUK9.js";import"./SubtitleText-DmGUl5wt.js";import"./CheckboxList-DghwUsPs.js";import"./Checkbox-BscruA8m.js";import"./FormControlLabel-4CniAqEL.js";import"./MoreVert-CApM3moX.js";import"./ChevronRight-foCHf73R.js";import"./PageHeader-vRr5zj4B.js";import"./formats-CMvQHWsT.js";import"./RadioButton-CLTmy9-q.js";import"./StyledFormControl.styled-B0T8LICC.js";import"./Toggle-dI05S_-G.js";import"./Dialog-B6RaYDcJ.js";import"./ThemeProvider-CGOYeIs4.js";import"./ChipList-DNkGOHFk.js";import"./SideNav-DJ_5--ll.js";import"./Snackbar-DaPPPHaq.js";import"./Close-4ToqfvgU.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./options-DEOzrsxm.js";import"./MultiSelectHelper-RZIosFWT.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:s}),`
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
`})})]})}function Ft(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ft as default};
