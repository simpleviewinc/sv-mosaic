import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as n}from"./index-yrER70vX.js";import{M as s}from"./index-aToc7bZ1.js";import{s as o}from"./Address.stories-C-hBq-YY.js";import"./index-DDfD_3TG.js";import"./iframe-CY24rQhb.js";import"../sb-preview/runtime.js";import"./index-DCMmMN8S.js";import"./index-ywIwhVjx.js";import"./tslib.es6-CvpyDmub.js";import"./index-Cu4lwwaE.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-CUnS8Soe.js";import"./index-wdBq5kwF.js";import"./index-DrFu-skq.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./Form-rskk-Nac.js";import"./theme-DWrYR5Gu.js";import"./SideNav-CvsHqpPT.js";import"./containerQuery-XietOkEy.js";import"./useToggle-BK_3QGB6.js";import"./Button-_6SRCSsN.js";import"./generateUtilityClasses-Dav9K5Jg.js";import"./ButtonBase-B3sVjXKq.js";import"./useIsFocusVisible-DxTeNLkh.js";import"./Popper-BFIFukJ-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BjWv6DhY.js";import"./index-BpD74PYt.js";import"./debounce-G1u4Gy2U.js";import"./DataViewPrimaryFilter.styled-DOEMDM8r.js";import"./createSvgIcon-ryN2wBPb.js";import"./createSvgIcon-Bc8E_7Df.js";import"./useId-C6ulm9BR.js";import"./useControlled-0MmPqhal.js";import"./Chip-TPBsYk2z.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CCZzHAOs.js";import"./DataViewFilterDropdown-D8zsAVgS.js";import"./formControlState-D0eomaiA.js";import"./ButtonRow-5AdSMJlC.js";import"./Spinner-D0BoAIGc.js";import"./Typography-DhgnvJ03.js";import"./SubtitleText-DyATjJCY.js";import"./CheckboxList-DKZDPSzE.js";import"./Checkbox-CL37ymQB.js";import"./FormControlLabel-D-u7WmCt.js";import"./getThemeProps-DXoot0qR.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D-T1QIB0.js";import"./StyledFormControl.styled-pfNyCqn0.js";import"./Toggle-BjiP2rWg.js";import"./formats-sBod7wm8.js";import"./Dialog-CyXhuKHl.js";import"./ChevronRight-BWmUBWCy.js";import"./TitleWrapper-CEGR9Ons.js";import"./TitleText-B4ASHioH.js";import"./Snackbar-Bslrzt6A.js";import"./Close-BnT1QDqQ.js";import"./ClickAwayListener-MSE9i65R.js";import"./MoreVert-cizeWCO8.js";import"./PageHeader-SBBckNNB.js";import"./options-DEOzrsxm.js";function i(r){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
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
