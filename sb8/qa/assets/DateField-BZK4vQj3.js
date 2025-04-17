import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-yrER70vX.js";import{M as n}from"./index-aToc7bZ1.js";import{s as d}from"./DateField.stories-9ysB62y0.js";import"./index-DDfD_3TG.js";import"./iframe-CY24rQhb.js";import"../sb-preview/runtime.js";import"./index-DCMmMN8S.js";import"./index-ywIwhVjx.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-CUnS8Soe.js";import"./index-wdBq5kwF.js";import"./index-DrFu-skq.js";import"./Form-rskk-Nac.js";import"./theme-DWrYR5Gu.js";import"./SideNav-CvsHqpPT.js";import"./containerQuery-XietOkEy.js";import"./useToggle-BK_3QGB6.js";import"./Button-_6SRCSsN.js";import"./generateUtilityClasses-Dav9K5Jg.js";import"./ButtonBase-B3sVjXKq.js";import"./useIsFocusVisible-DxTeNLkh.js";import"./Popper-BFIFukJ-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BjWv6DhY.js";import"./index-BpD74PYt.js";import"./debounce-G1u4Gy2U.js";import"./DataViewPrimaryFilter.styled-DOEMDM8r.js";import"./createSvgIcon-ryN2wBPb.js";import"./createSvgIcon-Bc8E_7Df.js";import"./useId-C6ulm9BR.js";import"./useControlled-0MmPqhal.js";import"./Chip-TPBsYk2z.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CCZzHAOs.js";import"./DataViewFilterDropdown-D8zsAVgS.js";import"./formControlState-D0eomaiA.js";import"./ButtonRow-5AdSMJlC.js";import"./Spinner-D0BoAIGc.js";import"./Typography-DhgnvJ03.js";import"./SubtitleText-DyATjJCY.js";import"./CheckboxList-DKZDPSzE.js";import"./Checkbox-CL37ymQB.js";import"./FormControlLabel-D-u7WmCt.js";import"./getThemeProps-DXoot0qR.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D-T1QIB0.js";import"./StyledFormControl.styled-pfNyCqn0.js";import"./Toggle-BjiP2rWg.js";import"./formats-sBod7wm8.js";import"./Dialog-CyXhuKHl.js";import"./ChevronRight-BWmUBWCy.js";import"./TitleWrapper-CEGR9Ons.js";import"./TitleText-B4ASHioH.js";import"./Snackbar-Bslrzt6A.js";import"./Close-BnT1QDqQ.js";import"./ClickAwayListener-MSE9i65R.js";import"./MoreVert-cizeWCO8.js";import"./PageHeader-SBBckNNB.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./parseDateControl-BC5TkA1Q.js";function e(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:d}),`
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
`})})]})}function yt(i={}){const{wrapper:r}={...o(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(e,{...i})}):e(i)}export{yt as default};
