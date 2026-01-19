import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-CrRX5TgX.js";import{M as n}from"./index-Dx5T63TV.js";import{s as d}from"./DateField.stories-Zbx0Qpgd.js";import"./index-lnx8lKqn.js";import"./iframe-8WV2L6hH.js";import"./index-DJZ3_iYS.js";import"./index-BySu-MVC.js";import"./index-cS34vJOP.js";import"./index-DrFu-skq.js";import"./index-BiBMp58k.js";import"./ExpandMore-BWMeOleT.js";import"./identifier-DL_MWCt5.js";import"./createSvgIcon-DtmGrA-N.js";import"./generateUtilityClasses-BXdgOgaD.js";import"./useIsFocusVisible-CUUNsth7.js";import"./MosaicContext-Bd_KQqXt.js";import"./ButtonBase-CvKKHeWu.js";import"./FormFieldText.styled-C8FVpgqR.js";import"./styled-components.browser.esm-DqsT1pAc.js";import"./sizes-BcVUBVYw.js";import"./formControlState-DQjLAsCB.js";import"./useTooltip-DxGcUIuP.js";import"./useThemeWithoutDefault-DtYdwAl6.js";import"./Button-CNe7umd6.js";import"./index-BXfeNjdK.js";import"./Popover-BteNYKgc.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-BzZp6KFF.js";import"./containerQuery-BGTno4Nd.js";import"./ChevronLeft-vDd10AKU.js";import"./Typography-BDSgj_cw.js";import"./DisplayText-DNcU0R6O.js";import"./ButtonRow-BvtHToaG.js";import"./DataViewFilterDropdownButtons-rxxLPn9R.js";import"./StyledPopperPaper-DUCM88TM.js";import"./TooltipIcon-CIvFjYBP.js";import"./index-WeqoMoTB.js";import"./Chip-CbNdHOhT.js";import"./DataViewPrimaryFilter.styled-CBPEvKLp.js";import"./Badge-QaR-AhQl.js";import"./Text-6QT-9GAX.js";import"./PickerPanel-BfvGlJ8s.js";import"./PageHeader-nP7hDafL.js";import"./Spinner-9l6dePBI.js";import"./CheckboxList-6gebeIaX.js";import"./Checkbox-Bd_VDYHl.js";import"./SwitchBase-gKBphwxl.js";import"./StyledOptionFormControl-IcAt2LqD.js";import"./MoreVert-Dnd0CSMf.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CKhuYVYb.js";import"./Snackbar-C_CrhD95.js";import"./Close-R1hfxO-H.js";import"./ChipList-_8tC_zVn.js";import"./RadioButton-G3onKhzu.js";import"./Toggle-DL53UmwG.js";import"./Dialog-64i6eqDA.js";import"./ThemeProvider-D5DIG-lM.js";import"./SideNav-DjxcEScw.js";import"./CardHeading-CmuJXUee.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";import"./parseDateControl-xbdpDu9B.js";function i(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:d}),`
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
`})})]})}function ut(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(i,{...e})}):i(e)}export{ut as default};
