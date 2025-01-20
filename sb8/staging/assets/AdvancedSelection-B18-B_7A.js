import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import{M as o}from"./index-CGWOAm_e.js";import{s}from"./AdvancedSelection.stories-BmuSKmDD.js";import"./index-BP8_t0zE.js";import"./iframe-pNl7__mS.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./index.browser-vcSNLBTf.js";import"./Form-CV-BOiW8.js";import"./theme-DRtZtbPc.js";import"./SideNav-D66jd1x5.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./CheckboxList-Dbk8JkiG.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-CODv9_Wr.js";import"./FormControlLabel-f9znFBMA.js";import"./generateUtilityClasses-kMkq-zAT.js";import"./formControlState-DyMXFR7f.js";import"./ButtonBase-BP_P9WLq.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useControlled-im5M3O13.js";import"./getThemeProps-BVsvmf2Q.js";import"./useTheme-Cud-ikZw.js";import"./createSvgIcon-BcZTMgP9.js";import"./testIds-DZf96GK8.js";import"./FormFieldText.styled-Cq8lzkgl.js";import"./Button-DuMlbF8s.js";import"./Popper-BWFpCfKc.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useMosaicTranslation-CZCb37QS.js";import"./createSvgIcon-Pzp5yWPs.js";import"./useId-DLncWxdO.js";import"./ButtonRow-CP4CrsnB.js";import"./Chip-CRqL1Gcl.js";import"./sizes-C6oSOElx.js";import"./DataViewPrimaryFilter.styled-auwRvG8E.js";import"./RadioButton-q7Nz9IFm.js";import"./StyledFormControl.styled-BDgwaEEo.js";import"./Toggle-aOIYV_sD.js";import"./index-BU7KlZI9.js";import"./debounce-DO3dP4oK.js";import"./Spinner-Dfqcw6pF.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./ColorSelected-DyTCIv8L.js";import"./TitleWrapper-CYciWRcJ.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-gv79E1WA.js";import"./ChevronRight-bPXdPGpY.js";import"./PageHeader-DvUko4so.js";import"./formats-sBod7wm8.js";import"./Dialog-BI8WLJ8j.js";import"./useMediaQuery-Bupge7Mj.js";import"./Snackbar-BF1WUGPv.js";import"./Close-CC6bEs2P.js";import"./ClickAwayListener-DnjBLK-5.js";import"./TooltipIcon-Bg8I7hop.js";import"./renderButtons-BmHfsf_z.js";import"./options-CstHLxTf.js";import"./MultiSelectHelper-DmwpeCwC.js";function r(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:s}),`
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
`})})]})}function vt(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{vt as default};
