import{j as e}from"./jsx-runtime-DiwAibxM.js";import{useMDXComponents as n}from"./index-B4U1yk18.js";import{M as s}from"./index--f67VqHy.js";import{s as o}from"./Address.stories-Cvwp4M54.js";import"./index-Btj5Fd67.js";import"./iframe-xMXYNnCs.js";import"../sb-preview/runtime.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./tslib.es6-CRos2fHm.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-Cqq1nRsk.js";import"./toString-CrHhZNKP.js";import"./index-CQ9F9_Tt.js";import"./index-ogSvIofg.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-DXwRxrKb.js";import"./Form-DvbZl7Yn.js";import"./theme-D38K4W-Z.js";import"./SideNav-D2hLlXvZ.js";import"./containerQuery-CksQJzsL.js";import"./useToggle-B3mbTfSB.js";import"./Button-BzJSDP1S.js";import"./generateUtilityClasses-B5i8Rs7p.js";import"./ButtonBase-B2xCaBev.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-BV6MzckQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DELdgGyu.js";import"./index-6dl0l4Q7.js";import"./debounce-IFS8tfQQ.js";import"./DataViewPrimaryFilter.styled-CTVdcnW9.js";import"./createSvgIcon-CAs7t9wT.js";import"./createSvgIcon-CM-As40z.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Chip-ulzUmfU4.js";import"./testIds-C2FMCy5K.js";import"./useMosaicTranslation-DPUDh126.js";import"./DataViewFilterDropdown-CqTisVOW.js";import"./formControlState-BAf21Shc.js";import"./ButtonRow-iQTdUMH8.js";import"./Spinner-C_uMqEwM.js";import"./Typography-iUA5kZEF.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-nyy1Of3u.js";import"./Checkbox-1rJEaydD.js";import"./FormControlLabel-2hVWRnF1.js";import"./getThemeProps-Fw47730D.js";import"./sizes-C6oSOElx.js";import"./RadioButton-LFlv3WCh.js";import"./StyledFormControl.styled-CNCCtQwC.js";import"./Toggle-H5i5NPQc.js";import"./formats-sBod7wm8.js";import"./Dialog-BYWfLX43.js";import"./ChevronRight-CNo34ydh.js";import"./TitleWrapper-OgvLyBY4.js";import"./TitleText-b_QXd7Yf.js";import"./Snackbar-CrdURRDn.js";import"./Close-gDfoKZ0c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./MoreVert-B1D8IEMN.js";import"./PageHeader-P9MDHuwd.js";import"./options-C_LXlRBD.js";function i(r){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(t.h1,{id:"address",children:"Address"}),`
`,e.jsxs(t.p,{children:["This field implements the ",e.jsx(t.a,{href:"#generic-field-props-fielddef",children:e.jsx(t.strong,{children:"FieldDef"})})," interface."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Countries, states and cities information retrieved from: ",e.jsx(t.a,{href:"https://github.com/dr5hn/countries-states-cities-database",rel:"nofollow",children:"Countries States Cities Database"})]}),`
`,e.jsx(t.li,{children:'Features a draw with an embedded "child" form which can be used to create or edit addresses.'}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/?path=/story/formfields-formfieldaddress--playground",children:e.jsx(t.strong,{children:"Playground"})})}),`
`,e.jsxs(t.li,{children:["Data: ",e.jsx(t.code,{children:"object"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"address1"})," - ",e.jsx(t.code,{children:"string"})," required - Main address."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"address2"})," - ",e.jsx(t.code,{children:"string"})," optional - Additional address."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"address3"})," - ",e.jsx(t.code,{children:"string"})," optional - Additional address."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"city"})," - ",e.jsx(t.code,{children:"string"})," required - Name of the city."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"country"})," - ",e.jsx(t.code,{children:"MosaicLabelValue"})," required - Object containing the label and value of the country."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"postalCode"})," - ",e.jsx(t.code,{children:"string"})," required - Postal code of the address."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"state"})," - ",e.jsx(t.code,{children:"MosaicLabelValue"})," required - Object containing the label and value of the state."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"types"})," - ",e.jsx(t.code,{children:"array"})," of ",e.jsx(t.code,{children:"string"})," required - Could be one of the following: Physical, Billing, Shipping."]}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"inputSettings:"}),`
`]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Name"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"amountPerType"})})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"optional - When defined, limits the amount of address types. For example: If a dev adds “amountPerType: 2” then users will be able to add 2 physical, 2 billing, and 2 shipping addresses. Defaults to 1 if no other amount properties are defined and 0 otherwise."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"amountShipping"})})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:'optional - When defined, limits the amount of address type of "shipping". Takes precedence over amountPerType.'})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"amountPhysical"})})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:'optional - When defined, limits the amount of address type of "physical". Takes precedence over amountPerType.'})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"amountBilling"})})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:'optional - When defined, limits the amount of address type of "billing". Takes precedence over amountPerType.'})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"getOptionsCountries"})})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(): Promise<MosaicLabelValue[]>"})}),e.jsx(t.td,{children:"Required - Returns a list of mapped countries in the shape of label-value array."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"getOptionsStates"})})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"(country: string): Promise<MosaicLabelValue[]>"})}),e.jsx(t.td,{children:"Given a country value it returns the list of states of the given country in the shape of label-value array."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:e.jsx(t.code,{children:"googleMapsApiKey"})})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"Required - Google Maps API key needed to access Place Autocomplete Google web service that returns place predictions in response to an HTTP request."})]})]})]}),`
`,e.jsx(t.p,{children:"Note that if the amount rules mean that only 1 type of address is allowed, the type field will not appear in the address drawer."}),`
`,e.jsx(t.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const getOptionsCountries = async () => {\r
	const countriesArr: MosaicLabelValue[] = await countriesMicroService();\r
	return countriesArr;\r
}\r
\r
const getOptionsStates = async (country) => {\r
	const statesArr: MosaicLabelValue[] = await statesMicroService(country);\r
	return statesArr;\r
}\r
\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "address",\r
				inputSettings: {\r
					amountPerType: 1,\r
					amountShipping: 0,\r
					amountPhysical: 2,\r
					amountBilling: 3,\r
					getOptionsCountries,\r
					getOptionsStates,\r
					googleMapsApiKey: "ABCDEFG1234567890"\r
				},\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function ye(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(i,{...r})}):i(r)}export{ye as default};
