import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-D24LeHLf.js";import{M as p}from"./index-DX-yG9uM.js";import{s as n}from"./FormFieldRaw.stories-C4Wy17TB.js";import"./index-wekxHvEx.js";import"./iframe-Df25bxgu.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./sizes-BeWafy6f.js";import"./index-4KShsA-v.js";import"./MosaicContext-lnnMUzUH.js";import"./ButtonBase-C7cXrk-H.js";import"./mergeSlotProps-DU4484Lo.js";import"./identifier-DEb8G0aq.js";import"./generateUtilityClasses-NbEjrlIW.js";import"./emotion-react.browser.esm-CeqoEiNQ.js";import"./TitleWrapper-D3WSxBwS.js";import"./Button-BUZ6VV6G.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-69YouNVI.js";import"./CircularProgress-XoRRhNY7.js";import"./index-BMiqk0dF.js";import"./useTooltip-CO_soAtI.js";import"./Popover-C7i3nYv0.js";import"./useTheme-cEQ9eIsv.js";import"./useMountWarning-xu6cFXpq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DroHY8JW.js";import"./createSvgIcon-TbZ0fr-h.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-CMLeEZxo.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-tabo-wbk.js";import"./ExpandMore-DMteFeWA.js";import"./Help-BqPVwWaf.js";import"./Chip-hlb4pmaG.js";import"./Clear-DlU6fmaM.js";import"./FormFieldText.styled-BsjNlYvA.js";import"./useFormControl-p_2RyLus.js";import"./formControlState-Dq1zat_P.js";import"./GlobalStyles-B7dp4lKd.js";import"./DataViewFilterDropdownButtons-F5j2IuvN.js";import"./StyledPopperPaper-BTEmDkdR.js";import"./TooltipIcon-Bg32Lmm2.js";import"./DataViewPrimaryFilter.styled-D9YhNElh.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-CfqePg2q.js";import"./Add-VWMKePYD.js";import"./PageHeader-CcC-OptF.js";import"./Spinner-CUCt3e5k.js";import"./CheckboxList-BIvmP8ms.js";import"./Checkbox-C781D4ZG.js";import"./SwitchBase-D6K8Fkjn.js";import"./OptionField-R5YykxyG.js";import"./FormGroup-BOW51rb4.js";import"./MoreVert-Cw5dZkux.js";import"./stable-BFc8HSVh.js";import"./Settings-jBnAWEnT.js";import"./scrollbarStyles-Bv9JpEGT.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-BbgjRMho.js";import"./Close-brVlBoUV.js";import"./ChipList-D-Z4RzuG.js";import"./RadioGroup-CR_TgkXs.js";import"./Toggle-DvSm-bxV.js";import"./Dialog-D_7vc-8r.js";import"./ThemeProvider-BUWLNaok.js";import"./Link-YMNHmFB7.js";import"./Card.styled-Xnb-IEFb.js";import"./OpenInNew-B-tDM0BO.js";import"./Delete-Bi8a5FsZ.js";import"./CloudDownload-B1kX4zjH.js";import"./InsertDriveFile-benxu_XD.js";import"./renderButtons-DP0bGf4C.js";import"./commonFieldControl-LQDYMh-C.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:n}),`
`,t.jsx(r.h1,{id:"raw",children:"Raw"}),`
`,t.jsxs(r.p,{children:["This field implements the ",t.jsx(r.a,{href:"#generic-field-props-fielddef",children:t.jsx(r.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(r.p,{children:["This type of field will render the corresponding ",t.jsx(r.code,{children:"value"})," as-is. It can be used to render anything that is a valid ",t.jsx(r.code,{children:"ReactNode"})," while maintaining the normal field display behaviour, like the label and field hint. It has no ",t.jsx(r.code,{children:"inputSettings"}),"."]}),`
`,t.jsx(r.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(r.pre,{children:t.jsx(r.code,{className:"language-ts",children:`\r
function RawValue() {\r
	return (\r
		<RawValueWrapper>\r
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
		</RawValueWrapper>\r
	)\r
}\r
\r
async function getFormValues() {\r
	return {\r
		raw: <RawValue />\r
	}\r
}\r
\r
const fields = useMemo(\r
	() =>\r
		[\r
			//...other fields\r
			{\r
				//...all generic field props,\r
				type: "raw",\r
			},\r
			//...other fields\r
		],\r
	[]\r
);\r

`})})]})}function Wt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Wt as default};
