import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as n}from"./index-D7r7IB1o.js";import{s}from"./MapCoordinates.stories-2CxHwmDY.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./storyUtils-ByV2Bsyv.js";import"./formUtils-CdvCEz-F.js";import"./FormFieldText.styled-Drb9OlPH.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-D7cE6JL_.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-B8g-LEVf.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";function i(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:s}),`
`,t.jsx(r.h1,{id:"map-coordinates",children:"Map Coordinates"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.ul,{children:[`
`,t.jsxs(r.li,{children:[t.jsx(r.code,{children:"Map Coordinates"})," This component is helpful when the user needs browse coordinates in a map."]}),`
`,t.jsx(r.li,{children:t.jsx(r.a,{href:"/?path=/docs/formfields-formfieldmapcoordinates--playground",children:t.jsx(r.strong,{children:"Playground"})})}),`
`,t.jsxs(r.li,{children:["Data: ",t.jsx(r.code,{children:"object"})," - Object of the value arguments",`
`,t.jsxs(r.ul,{children:[`
`,t.jsxs(r.li,{children:[t.jsx(r.strong,{children:"lat"})," - ",t.jsx(r.code,{children:"number"})," - Latitude"]}),`
`,t.jsxs(r.li,{children:[t.jsx(r.strong,{children:"lng"})," - ",t.jsx(r.code,{children:"number"})," - longitude"]}),`
`]}),`
`]}),`
`,t.jsx(r.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(r.p,{children:[`| Name | Type | Description |\r
| ---- | ---- | ----------- |\r
| `,t.jsx(r.strong,{children:t.jsx(r.code,{children:"address"})})," | ",t.jsx(r.code,{children:"object"}),` | Optional - Address object used to set lat and lng values when using the autocoordinates feature (please see Address section). |\r
| `,t.jsx(r.strong,{children:t.jsx(r.code,{children:"googleMapsApiKey"})})," | ",t.jsx(r.code,{children:"string"}),` | Required - Google Maps API key needed to consume the Maps JavaScript API and Places API. |\r
| `,t.jsx(r.strong,{children:t.jsx(r.code,{children:"zoom"})})," | ",t.jsx(r.code,{children:"number"}),` | Optional - Zoom applied to the map. If is not defined the map will be all the way zoomed out. |\r
| `,t.jsx(r.strong,{children:t.jsx(r.code,{children:"initialCenter"})})," | ",t.jsx(r.code,{children:"MapPosition"})," | Optional - Latitude and longitude object. If is not defined the map will be positioned at 0,0. |"]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`const fields = useMemo(\r
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
`})})]})}function Mt(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(i,{...e})}):i(e)}export{Mt as default};
