import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as n}from"./index-DnPkr5tS.js";import{s}from"./FormFieldChips.stories-CxmgCu5K.js";import"./index-BP8_t0zE.js";import"./iframe-DzzMtBJH.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-C9VpIqNJ.js";import"./FormFieldText.styled-DY-cBMyi.js";import"./theme-DRtZtbPc.js";import"./Button-Dv6p7qil.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./ButtonBase-BZmvw3BH.js";import"./useIsFocusVisible-De2ftVE9.js";import"./Popper-CPbWUqAP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-5hcycNQy.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CcHL1II5.js";import"./createSvgIcon-CPgMIgId.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-BcS5vVNk.js";import"./CheckboxList-Bq1TaTYH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-aoYNk8Xu.js";import"./FormControlLabel-n1qioM9o.js";import"./getThemeProps-Cs15h2IA.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./ButtonRow-OnULoQP7.js";import"./Spinner-DgupAfKo.js";import"./Chip-Da3idaCC.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-PGODfCtA.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CEyZfcGg.js";import"./TitleWrapper-B_YZcXoR.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-lzGsiXAs.js";import"./formats-CDjt32hU.js";import"./Dialog-DbUj91wm.js";import"./useMediaQuery-CguehUMS.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-CO3K7ssQ.js";import"./Snackbar-DNEJC7rG.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";import"./renderButtons-BmHfsf_z.js";import"./options-BIHZJM4G.js";function i(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(r.h1,{id:"chip-single-select",children:"Chip Single Select"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsxs(r.li,{children:["The ",t.jsx(r.code,{children:"FormFieldChips"})," component is built over a wrapper for ",t.jsx(r.a,{href:"https://mui.com/material-ui/react-autocomplete/#main-content",rel:"nofollow",children:"MUI Autocomplete"})," but with SimpleView brand colors."]}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/story/formfields-formfieldchipsingleselect--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"string"})," - Value of the selected option."]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.table,{children:[t.jsx(r.thead,{children:t.jsxs(r.tr,{children:[t.jsx(r.th,{children:"Name"}),t.jsx(r.th,{children:"Type"}),t.jsx(r.th,{children:"Description"})]})}),t.jsxs(r.tbody,{children:[t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"options"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"MosaicLabelValue[]"})}),t.jsx(r.td,{children:"required - Array of options to be rendered containing their corresponding label, value, and indicator of whether its selected or not."})]}),t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"getOptions"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"() => Promise<MosaicLabelValue[]>"})}),t.jsx(r.td,{children:"required - Function to get a set of options. This prop only applies when getting options from a DB."})]}),t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"onSelect"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"(...args) => void"})}),t.jsx(r.td,{children:"optional - Callback to be executed when an option gets selected."})]})]})]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`//Option recommended when getting options locally.\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "chip",\r
				inputSettings: {\r
					options: [\r
						{\r
							label: "Option1",\r
							value: "value1",\r
						},\r
						{\r
							label: "Option2",\r
							value: "value2",\r
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
				type: "chip",\r
				inputSettings: {\r
					getOptions: myGetOptionsFn,\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function wt(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(i,{...e})}):i(e)}export{wt as default};
