import{j as t}from"./jsx-runtime-DiwAibxM.js";import{useMDXComponents as o}from"./index-B4U1yk18.js";import{M as n}from"./index-BRnbLl7y.js";import{s}from"./FormFieldToggle.stories-CvmURDtG.js";import"./index-Btj5Fd67.js";import"./iframe-xxvTEPrB.js";import"../sb-preview/runtime.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./tslib.es6-CRos2fHm.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-Cqq1nRsk.js";import"./toString-CrHhZNKP.js";import"./index-CQ9F9_Tt.js";import"./index-ogSvIofg.js";import"./index-DE-vLMND.js";import"./theme-D38K4W-Z.js";import"./testIds-fiKIunms.js";import"./TitleWrapper-D0jWUQG0.js";import"./Button-D32bI-Hq.js";import"./generateUtilityClasses-8vC7aVzu.js";import"./ButtonBase-qeNCnyas.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Dpu8VSWK.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D0FYgW1y.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-CksQJzsL.js";import"./createSvgIcon-BYvI5rjI.js";import"./createSvgIcon-DEmQcq0a.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-iUA5kZEF.js";import"./TitleText-b_QXd7Yf.js";import"./ButtonRow-Bg_-eU3q.js";import"./index-BbjJqZ7X.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BZ3tfVAq.js";import"./Chip-CB_Nl8Vf.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-DbKyEzTp.js";import"./formControlState-B0dK5Yiw.js";import"./Spinner-BTI8gP3i.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-D_uRM6MU.js";import"./Checkbox-3bvh3g8i.js";import"./FormControlLabel-BnIcqxAa.js";import"./getThemeProps-CANKBKLy.js";import"./MoreVert-CcQ_DGVp.js";import"./ChevronRight-B_wNKS8s.js";import"./PageHeader-DvaIFD-A.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BelC6HqS.js";import"./StyledFormControl.styled-DMWoJm0e.js";import"./Toggle-2hh2ORfC.js";import"./Dialog-BKnqllF5.js";import"./SideNav-D2hLlXvZ.js";import"./Snackbar-BFSmGquB.js";import"./Close-CSM1BQ-c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-DXwRxrKb.js";function e(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
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
`})})]})}function ut(i={}){const{wrapper:r}={...o(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(e,{...i})}):e(i)}export{ut as default};
