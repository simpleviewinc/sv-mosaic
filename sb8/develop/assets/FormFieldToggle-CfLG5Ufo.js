import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as n}from"./index-wd_dV5eF.js";import{s}from"./FormFieldToggle.stories-CzuHzScu.js";import"./index-D0AnReJb.js";import"./iframe-C126IEOS.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index-TbANqjzF.js";import"./sizes-BklZZmo4.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-FC5BdKNu.js";import"./Button-DWbCZful.js";import"./generateUtilityClasses-rDn4KRfY.js";import"./ButtonBase-C5QWJNfJ.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-BwE5duTX.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D7dAzrtf.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CZARXB1J.js";import"./createSvgIcon-BLTtL5Y9.js";import"./createSvgIcon-Dg0jtXvj.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-iddL5eaH.js";import"./TitleText-CICG0G5h.js";import"./ButtonRow-BOELw1Tj.js";import"./index-5FtVc0ZK.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-BizDTt4x.js";import"./Chip-CMTBWucu.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CGYIYrSS.js";import"./formControlState-BAKA1Iy6.js";import"./Spinner-CbDJlIED.js";import"./SubtitleText-DS-qVyZH.js";import"./CheckboxList-BfityfDx.js";import"./Checkbox-CpLxzsg0.js";import"./FormControlLabel-BKc7O7Lz.js";import"./MoreVert-CMcGX8SU.js";import"./ChevronRight-BydWUgoJ.js";import"./PageHeader-DTPo7jCK.js";import"./formats-CMvQHWsT.js";import"./RadioButton-p7gSMkH6.js";import"./StyledFormControl.styled-BMW4FUOw.js";import"./Toggle-9YEwDS0M.js";import"./Dialog-CnKRaqxG.js";import"./ChipList-DGWZ9ZdD.js";import"./SideNav-kqb59Ukq.js";import"./Snackbar-CMDie7lV.js";import"./Close-DQPzhJmS.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";function e(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(r.h1,{id:"toggle-switch",children:"Toggle Switch"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"Toggle Switch allow users to switch between two possible states. They are commonly used to turn a specific setting on or off"}),`
`,t.jsx(r.li,{children:"Toggles should be used to turn on or off a preference, notification, or feature"}),`
`,t.jsx(r.li,{children:"Should be used when an instant response is required/desired"}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/story/formfields-formfieldtoggle--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"boolean"})," - Defines whether the switch is checked or not."]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.table,{children:[t.jsx(r.thead,{children:t.jsxs(r.tr,{children:[t.jsx(r.th,{children:"Name"}),t.jsx(r.th,{children:"Type"}),t.jsx(r.th,{children:"Description"})]})}),t.jsx(r.tbody,{children:t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"toggleLabel"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"string"})}),t.jsx(r.td,{children:"optional - This label is placed at the right of the switch."})]})})]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`const fields: FieldDef[] = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props\r
				type: "toggle",\r
				inputSettings: {\r
					toggleLabel: "Toggle label"\r
				},\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function bt(i={}){const{wrapper:r}={...o(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(e,{...i})}):e(i)}export{bt as default};
