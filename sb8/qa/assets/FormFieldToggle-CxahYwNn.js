import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as e}from"./index-BwDDMXeo.js";import{M as n}from"./index-Bbd5fy8I.js";import{s}from"./FormFieldToggle.stories-DPLnB8FT.js";import"./index-D0AnReJb.js";import"./iframe-xZLF4Kzn.js";import"../sb-preview/runtime.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-DoexKoos.js";import"./_baseForOwn-YgwlavHx.js";import"./index-QVqIEGA1.js";import"./_arrayIncludesWith-XJRwRZaz.js";import"./index-DrFu-skq.js";import"./index-CskZx9qi.js";import"./styled-components.browser.esm-CXkPWv0m.js";import"./sizes-C0LBJJ09.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-UbmTdAF_.js";import"./Button-DaAMSO0F.js";import"./DefaultPropsProvider-Zw7se0ql.js";import"./generateUtilityClasses-CVch8Fxh.js";import"./ButtonBase-CDkrym0l.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-BnPRUgpe.js";import"./Popper-DGZlEdwR.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Bm22bs_q.js";import"./useThemeWithoutDefault-DxXNdoSH.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CBh3xxKQ.js";import"./createSvgIcon-CfA1Cyex.js";import"./createSvgIcon-18YkCsWd.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Reib778S.js";import"./TitleText-BuZN1QQA.js";import"./ButtonRow-C029PRKt.js";import"./index-BfP4QUlu.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DRsOHDYs.js";import"./Chip-IkNXxPJK.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-DrsxdApR.js";import"./formControlState-CAqH4-hG.js";import"./Spinner-D4T0rUK9.js";import"./SubtitleText-DmGUl5wt.js";import"./CheckboxList-DghwUsPs.js";import"./Checkbox-BscruA8m.js";import"./FormControlLabel-4CniAqEL.js";import"./MoreVert-CApM3moX.js";import"./ChevronRight-foCHf73R.js";import"./PageHeader-vRr5zj4B.js";import"./formats-CMvQHWsT.js";import"./RadioButton-CLTmy9-q.js";import"./StyledFormControl.styled-B0T8LICC.js";import"./Toggle-dI05S_-G.js";import"./Dialog-B6RaYDcJ.js";import"./ThemeProvider-CGOYeIs4.js";import"./ChipList-DNkGOHFk.js";import"./SideNav-DJ_5--ll.js";import"./Snackbar-DaPPPHaq.js";import"./Close-4ToqfvgU.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function Mt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Mt as default};
