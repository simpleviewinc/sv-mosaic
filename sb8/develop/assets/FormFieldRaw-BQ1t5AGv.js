import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import{M as n}from"./index-BSxV29fD.js";import{s as p}from"./FormFieldRaw.stories-CH_dD6_5.js";import"./index-BP8_t0zE.js";import"./iframe-SIp-GwQD.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-Cx4rbmEx.js";import"./FormFieldText.styled-DY-cBMyi.js";import"./theme-DRtZtbPc.js";import"./Button-Dv6p7qil.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./ButtonBase-BZmvw3BH.js";import"./useIsFocusVisible-De2ftVE9.js";import"./Popper-CPbWUqAP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-5hcycNQy.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-CZCb37QS.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CcHL1II5.js";import"./createSvgIcon-CPgMIgId.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./index-BcS5vVNk.js";import"./CheckboxList-Bq1TaTYH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-aoYNk8Xu.js";import"./FormControlLabel-n1qioM9o.js";import"./getThemeProps-Cs15h2IA.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./ButtonRow-OnULoQP7.js";import"./Spinner-DgupAfKo.js";import"./Chip-Da3idaCC.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-PGODfCtA.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CEyZfcGg.js";import"./TitleWrapper-B_YZcXoR.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-lzGsiXAs.js";import"./formats-CDjt32hU.js";import"./Dialog-DbUj91wm.js";import"./useMediaQuery-CguehUMS.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-CO3K7ssQ.js";import"./Snackbar-DNEJC7rG.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";import"./renderButtons-BmHfsf_z.js";function o(i){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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

`})})]})}function Mt(i={}){const{wrapper:r}={...e(),...i.components};return r?t.jsx(r,{...i,children:t.jsx(o,{...i})}):o(i)}export{Mt as default};
