import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as n}from"./index-BwDDMXeo.js";import{M as o}from"./index-IuBhJAPt.js";import{s}from"./MapCoordinates.stories-Ck9HpWjK.js";import"./index-D0AnReJb.js";import"./iframe-CxjOi_8D.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./Form-CgwovX7A.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DuPZ_syw.js";import"./generateUtilityClasses-DR3ZN2W1.js";import"./ButtonBase-D151CXhN.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-CwglX3X7.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D2wr39e0.js";import"./index-Dzq3_XHF.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-Nl7VMvHi.js";import"./createSvgIcon-Dkn5Rwb8.js";import"./createSvgIcon-BJqXHHQN.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Q_76qCVq.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-CyYL6T5I.js";import"./formControlState-DOpihTi1.js";import"./ButtonRow-CMfkAXvR.js";import"./Spinner-l5n7yqAB.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-BpALmPMn.js";import"./Checkbox-DEHVDJOM.js";import"./FormControlLabel-c62W2Jp9.js";import"./getThemeProps-jN7SmM6K.js";import"./sizes-C6oSOElx.js";import"./RadioButton-C4GIeT3G.js";import"./StyledFormControl.styled-CN2FC1d6.js";import"./Toggle-ZvDv_3Et.js";import"./formats-sBod7wm8.js";import"./Dialog-q0ujYBl7.js";import"./ChevronRight-BmBn2D1l.js";import"./TitleWrapper-BBj93Dzh.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-v6BtnLJQ.js";import"./Close-KkbZKwWJ.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Bjl-7o6A.js";import"./PageHeader-UTe0naMU.js";function i(r){const e={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(o,{of:s}),`
`,t.jsx(e.h1,{id:"map-coordinates",children:"Map Coordinates"}),`
`,t.jsxs(e.p,{children:["This field implements the ",t.jsx(e.a,{href:"#generic-field-props-fielddef",children:t.jsx(e.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.code,{children:"Map Coordinates"})," This component is helpful when the user needs browse coordinates in a map."]}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"/?path=/docs/formfields-formfieldmapcoordinates--playground",children:t.jsx(e.strong,{children:"Playground"})})}),`
`,t.jsxs(e.li,{children:["Data: ",t.jsx(e.code,{children:"object"})," - Object of the value arguments",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"lat"})," - ",t.jsx(e.code,{children:"number"})," - Latitude"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.strong,{children:"lng"})," - ",t.jsx(e.code,{children:"number"})," - longitude"]}),`
`]}),`
`]}),`
`,t.jsx(e.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Name"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"address"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"object"})}),t.jsx(e.td,{children:"Optional - Address object used to set lat and lng values when using the autocoordinates feature (please see Address section)."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"googleMapsApiKey"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"string"})}),t.jsx(e.td,{children:"Required - Google Maps API key needed to consume the Maps JavaScript API and Places API."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"zoom"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"number"})}),t.jsx(e.td,{children:"Optional - Zoom applied to the map. If is not defined the map will be all the way zoomed out."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:t.jsx(e.code,{children:"initialCenter"})})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"MapPosition"})}),t.jsx(e.td,{children:"Optional - Latitude and longitude object. If is not defined the map will be positioned at 0,0."})]})]})]}),`
`,t.jsx(e.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "mapCoordinates",\r
				inputSettings: {\r
					apiKey: "QWErttyuyi-QWDQWFWEeqwfcQWEwefcwfqwew",\r
					initialCenter: {\r
						lat: -3.766925461296721\r
						lng: -40.54497265625\r
					},\r
					address: {\r
						id: 1,\r
						address1: "8950 N Oracle Rd",\r
						city: "Oro Valley",\r
						postalCode: "85704",\r
						country: "US",\r
						state: "AZ",\r
						types: ["physical", "billing"]\r
					}\r
				}\r
			},\r
			//...other fields\r
		],\r
	[]\r
);
`})})]})}function mt(r={}){const{wrapper:e}={...n(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(i,{...r})}):i(r)}export{mt as default};
