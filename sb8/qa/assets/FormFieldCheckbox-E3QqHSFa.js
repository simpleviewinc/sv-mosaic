import{j as t}from"./jsx-runtime-DKBipoO1.js";import{useMDXComponents as i}from"./index-DIpYW6hh.js";import{M as n}from"./index-DnPg_JZW.js";import{s}from"./FormFieldCheckbox.stories-wOQuuFs8.js";import"./index-P8U4y8pz.js";import"./iframe-8TSSxXgV.js";import"./index-DEBaATwO.js";import"./index-CFV30bQv.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Form-BRiCKpcY.js";import"./theme-BWODkkBA.js";import"./SideNav-xke3DMVF.js";import"./containerQuery-DJgF-qoV.js";import"./useToggle-L-Qovzra.js";import"./ColorSelected-CjDfVzXw.js";import"./index-Codu9OSz.js";import"./debounce-Z6vH9m7G.js";import"./DataViewPrimaryFilter.styled-Er7etcVt.js";import"./generateUtilityClasses-1sHYEbWh.js";import"./createSvgIcon-DFewkeLR.js";import"./createSvgIcon-RC5eQ6Qp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-wVqIivVs.js";import"./useId-BCEQtGZU.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-DD4Xjs9b.js";import"./Chip-BumaKDUo.js";import"./ButtonBase-BdV3oO8q.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-DYaYF2Hb.js";import"./FormFieldText.styled-Ds1XZvsQ.js";import"./Button-BBMCWwxG.js";import"./Popper-Cd5SEDCW.js";import"./useTheme-C71PTKbl.js";import"./formControlState-ESfXU8N_.js";import"./ButtonRow-BY0Hsyx3.js";import"./Spinner-C3Q2NvqZ.js";import"./Typography-CaRYQLjB.js";import"./SubtitleText-7Wc_VQnd.js";import"./CheckboxList-DWbGDBtu.js";import"./Checkbox-Ss222WpW.js";import"./FormControlLabel-Cz3gWlyw.js";import"./getThemeProps-Dw2gS1Bo.js";import"./TitleWrapper-DHX6T7Lf.js";import"./TitleText-DwGMspTF.js";import"./MoreVert-DYAEDIA7.js";import"./ChevronRight-CLpIxDpq.js";import"./PageHeader-6-4PqPeJ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-JvG0jxKp.js";import"./StyledFormControl.styled-CutdFJBO.js";import"./Toggle-B1w3j-dj.js";import"./formats-sBod7wm8.js";import"./Dialog-COZnJfGx.js";import"./useMediaQuery-CFxK-hux.js";import"./Snackbar-fMG10-ub.js";import"./Close-Z8pEHv17.js";import"./ClickAwayListener-6W73t1nN.js";import"./TooltipIcon-Dfxq7uJG.js";import"./options-DJM8a-gX.js";import"./renderButtons-BmHfsf_z.js";function e(o){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function ft(o={}){const{wrapper:r}={...i(),...o.components};return r?t.jsx(r,{...o,children:t.jsx(e,{...o})}):e(o)}export{ft as default};
