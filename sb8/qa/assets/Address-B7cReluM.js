import{j as e}from"./jsx-runtime-CexXSJP5.js";import{useMDXComponents as n}from"./index-3-_tf5dF.js";import{M as s}from"./index-Ba0kBJ9T.js";import{s as o}from"./Address.stories-ijxVxRLo.js";import"./index-BP8_t0zE.js";import"./iframe-RQpLZPhi.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./storyUtils-BoiXCagy.js";import"./formUtils-Chz1BKzT.js";import"./FormFieldText.styled-Dy7YdaNR.js";import"./theme-Cyujm90X.js";import"./Button-nZpOdxAh.js";import"./generateUtilityClasses-Bq4SLC4n.js";import"./ButtonBase-B9MACyLv.js";import"./useIsFocusVisible-De2ftVE9.js";import"./Popper-DKfV5JUa.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-JcVqJUPL.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CLmY5moR.js";import"./createSvgIcon-CYUKOE7w.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-D3nDZNMY.js";import"./CheckboxList-vtqXYb3p.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DlKnOsMd.js";import"./FormControlLabel-CADsa67j.js";import"./getThemeProps-DQ8M-aLx.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-BbvqwW3v.js";import"./ButtonRow-mHN3ze0L.js";import"./Spinner-BweMUiuT.js";import"./Chip-CULEVs9E.js";import"./Typography-cUIkDVC5.js";import"./SubtitleText-BtBCMBDH.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CQ27sEkY.js";import"./StyledFormControl.styled-CjmTklcO.js";import"./Toggle-Nou3pw5b.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-tvyFmnDf.js";import"./TitleWrapper-BMh3rxDx.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-DWruTFKQ.js";import"./MoreVert-LCJpouIh.js";import"./ChevronRight-ClDk1Oir.js";import"./PageHeader-BKvpMOBE.js";import"./MenuSelect-DW9Vb27W.js";import"./formats-CDjt32hU.js";import"./Dialog-oIWE6RL0.js";import"./useMediaQuery-BRf2ARoC.js";import"./SideNav-BjSBl4fN.js";import"./Snackbar-WG1ScYsF.js";import"./Close-BZa28Lj1.js";import"./ClickAwayListener-C0tzoxWy.js";import"./Blank-Ci2z0OwS.js";import"./optionGetters-DXvNsMp-.js";function i(r){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
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
`})})]})}function Pe(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(i,{...r})}):i(r)}export{Pe as default};