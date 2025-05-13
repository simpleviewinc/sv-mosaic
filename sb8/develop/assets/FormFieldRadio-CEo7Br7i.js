import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-BwDDMXeo.js";import{M as n}from"./index-BpbWTKf8.js";import{s}from"./FormFieldRadio.stories-D8RbmhBk.js";import"./index-D0AnReJb.js";import"./iframe-Ujtrwy-Z.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./index-CbWvXUIZ.js";import"./sizes-BklZZmo4.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-FC5BdKNu.js";import"./Button-DWbCZful.js";import"./generateUtilityClasses-rDn4KRfY.js";import"./ButtonBase-C5QWJNfJ.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-BwE5duTX.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D7dAzrtf.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CZARXB1J.js";import"./createSvgIcon-BLTtL5Y9.js";import"./createSvgIcon-Dg0jtXvj.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-iddL5eaH.js";import"./TitleText-CICG0G5h.js";import"./ButtonRow-BOELw1Tj.js";import"./index-Bd1hwoKI.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-BizDTt4x.js";import"./Chip-CMTBWucu.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CGYIYrSS.js";import"./formControlState-BAKA1Iy6.js";import"./Spinner-CbDJlIED.js";import"./SubtitleText-DS-qVyZH.js";import"./CheckboxList-BfityfDx.js";import"./Checkbox-CpLxzsg0.js";import"./FormControlLabel-BKc7O7Lz.js";import"./MoreVert-CMcGX8SU.js";import"./ChevronRight-BydWUgoJ.js";import"./PageHeader-DTPo7jCK.js";import"./formats-CMvQHWsT.js";import"./RadioButton-p7gSMkH6.js";import"./StyledFormControl.styled-BMW4FUOw.js";import"./Toggle-9YEwDS0M.js";import"./Dialog-CnKRaqxG.js";import"./ChipList-DGWZ9ZdD.js";import"./SideNav-kqb59Ukq.js";import"./Snackbar-CMDie7lV.js";import"./Close-DQPzhJmS.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./options-DEOzrsxm.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function yt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{yt as default};
