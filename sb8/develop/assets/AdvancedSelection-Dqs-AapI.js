import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as i}from"./index-rC_Sa5AQ.js";import{M as o}from"./index-BhAspods.js";import{s}from"./AdvancedSelection.stories-Cv2cwUGz.js";import"./index-BcWw8SPZ.js";import"./iframe-CeJuD3GR.js";import"../sb-preview/runtime.js";import"./index-CcJIGMye.js";import"./index-lsJDjLAm.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-u0MeWzco.js";import"./_baseForOwn-izJd5_f8.js";import"./index-COuoH38x.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index.browser-vcSNLBTf.js";import"./index-DmNM1quz.js";import"./ExpandMore-DZ5qJANw.js";import"./identifier-vCS-QwDM.js";import"./sizes-1ZdlMWGC.js";import"./createSvgIcon-CFpEEiA8.js";import"./generateUtilityClasses-DxEc1O3f.js";import"./styled-components.browser.esm-iTa7G-AD.js";import"./useIsFocusVisible-BiDRLN3G.js";import"./MosaicContext-CR3sZt-k.js";import"./ButtonBase-C5IHe1v7.js";import"./FormFieldText.styled-ClVDR1L1.js";import"./formControlState-DBjLczXb.js";import"./useTooltip-Ca_MnstU.js";import"./useThemeWithoutDefault-DcDKfq8w.js";import"./Button-Ux1FJEQf.js";import"./index-BFOXBPPy.js";import"./Popover-BsgnjFRv.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-C-T-4XdU.js";import"./containerQuery-NPnQgBq-.js";import"./ChevronLeft-deJoC413.js";import"./Typography-B-r-8hBf.js";import"./DisplayText-iy3WLqbC.js";import"./ButtonRow-BGTnrp5G.js";import"./DataViewFilterDropdownButtons-DOEmfG0b.js";import"./StyledPopperPaper-CxUbRyvr.js";import"./TooltipIcon-IdakTMWj.js";import"./index-DUEwBlnx.js";import"./Chip-CtO-XFaP.js";import"./DataViewPrimaryFilter.styled-CmyjWjxc.js";import"./Badge-BN0BUUeW.js";import"./Text-C3Iu2YK-.js";import"./PickerPanel-CWMNNA3e.js";import"./PageHeader-CPZg_1sR.js";import"./Spinner-D5EjUoUF.js";import"./CheckboxList-CrF4bjy0.js";import"./Checkbox-CratNqxV.js";import"./SwitchBase-CO7VNkpO.js";import"./StyledOptionFormControl-Bv1fp9pz.js";import"./MoreVert-rBkgd4TI.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DNVBgAUm.js";import"./Snackbar-ComNH1Eo.js";import"./Close-1U0VQJju.js";import"./ChipList-T_9FOMMC.js";import"./RadioButton-D50tCzor.js";import"./Toggle-wemzBvjs.js";import"./Dialog-nLsrSr--.js";import"./ThemeProvider-ke4tQo0r.js";import"./SideNav-DpcKnBv8.js";import"./CardHeading-DgwLSOU_.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";import"./options-DEOzrsxm.js";import"./MultiSelectHelper-Bj9CHMR5.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:s}),`
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
