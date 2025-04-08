import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as n}from"./index-CSXTOGaA.js";import{s as d}from"./DateField.stories-BjKAEkP9.js";import"./index-D0AnReJb.js";import"./iframe-GsUEZl1f.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Form-CgwovX7A.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DuPZ_syw.js";import"./generateUtilityClasses-DR3ZN2W1.js";import"./ButtonBase-D151CXhN.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-CwglX3X7.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D2wr39e0.js";import"./index-Dzq3_XHF.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-Nl7VMvHi.js";import"./createSvgIcon-Dkn5Rwb8.js";import"./createSvgIcon-BJqXHHQN.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Q_76qCVq.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-CyYL6T5I.js";import"./formControlState-DOpihTi1.js";import"./ButtonRow-CMfkAXvR.js";import"./Spinner-l5n7yqAB.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-BpALmPMn.js";import"./Checkbox-DEHVDJOM.js";import"./FormControlLabel-c62W2Jp9.js";import"./getThemeProps-jN7SmM6K.js";import"./sizes-C6oSOElx.js";import"./RadioButton-C4GIeT3G.js";import"./StyledFormControl.styled-CN2FC1d6.js";import"./Toggle-ZvDv_3Et.js";import"./formats-sBod7wm8.js";import"./Dialog-q0ujYBl7.js";import"./ChevronRight-BmBn2D1l.js";import"./TitleWrapper-BBj93Dzh.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-v6BtnLJQ.js";import"./Close-KkbZKwWJ.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Bjl-7o6A.js";import"./PageHeader-UTe0naMU.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./parseDateControl-DsOdrk5q.js";function i(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:d}),`
`,t.jsx(r.h1,{id:"date",children:"Date"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsx(r.li,{children:"It allows the user to view and pick dates from a calendar widget or manually type the date in the text field."}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/story/formfields-formfielddatefield--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"string"})," - Date in UTC format transformed to string."]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.table,{children:[t.jsx(r.thead,{children:t.jsxs(r.tr,{children:[t.jsx(r.th,{children:"Name"}),t.jsx(r.th,{children:"Type"}),t.jsx(r.th,{children:"Description"})]})}),t.jsxs(r.tbody,{children:[t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"showTime"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"boolean"})}),t.jsx(r.td,{children:"optional - When true a time field will appear next to the date field."})]}),t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"minDate"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"Date"})}),t.jsx(r.td,{children:"optional - The minimum date that can be chosen using the datepicker or entered into the input. Defaults to 01/01/1900. If used in a form component, will automatically register a minimum date validator"})]}),t.jsxs(r.tr,{children:[t.jsx(r.td,{children:t.jsx(r.strong,{children:t.jsx(r.code,{children:"maxDate"})})}),t.jsx(r.td,{children:t.jsx(r.code,{children:"Date"})}),t.jsx(r.td,{children:"optional - The maximum date that can be chosen using the datepicker or entered into the input. If used in a form component, will automatically register a minimum date validator"})]})]})]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "date",\r
				inputSettings: {\r
					showTime: false,\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function ct(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(i,{...e})}):i(e)}export{ct as default};
