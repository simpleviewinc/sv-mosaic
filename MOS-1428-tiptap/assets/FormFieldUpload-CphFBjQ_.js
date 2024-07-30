import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as r}from"./index-3-_tf5dF.js";import{M as o}from"./index-D7r7IB1o.js";import{s as d}from"./FormFieldUpload.stories-BGngXJyw.js";import"./index-BP8_t0zE.js";import"./iframe-BrDELV_Q.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-CdvCEz-F.js";import"./FormFieldText.styled-Drb9OlPH.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-D7cE6JL_.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-B8g-LEVf.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";import"./storyUtils-ByV2Bsyv.js";import"./index.browser-vcSNLBTf.js";function n(i){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(t.h1,{id:"formfieldupload",children:"FormFieldUpload"}),`
`,e.jsxs(t.p,{children:["This field implements the ",e.jsx(t.a,{href:"#generic-field-props-fielddef",children:e.jsx(t.strong,{children:"FieldDef"})})," interface."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"The FormFieldUpload component allows users to upload multiple files of any type."}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/?path=/story/formfields-formfieldupload--playground",children:e.jsx(t.strong,{children:"Playground"})})}),`
`,e.jsxs(t.li,{children:["Data: ",e.jsx(t.code,{children:"array"})," of ",e.jsx(t.code,{children:"UploadData"}),":"]}),`
`]}),`
`,e.jsxs(t.p,{children:[`| Name | Type | Description |
| ---- | ---- | ----------- |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"id"})})," | ",e.jsx("code",{children:"string | number"}),` | required - A unique identifier, used as React "key" |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"name"})})," | ",e.jsx("code",{children:"string"}),` | required - The name of the file, which will be rendered as the file title |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"fileUrl"})})," | ",e.jsx("code",{children:"string"}),` | The URL to the uploaded file which the uploaded item's image and title will link to |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"thumbnailUrl"})})," | ",e.jsx("code",{children:"string"}),` | The URL of the thumbnail that should be displayed. |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"downloadUrl"})})," | ",e.jsx("code",{children:"string"}),` | The downloadable URL of the file, it should respond with a Content-Disposition: attachment header |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"downloadStrategy"})})," | ",e.jsx("code",{children:'"anchor" | "iframe"'})," | How the file download button should behave:",e.jsx("br",{}),'"anchor" - renders an anchor tag with the "download" attribute',e.jsx("br",{}),'"iframe" - creates an iframe and navigates to the downloadUrl, then removes the iframe once loaded (or errored)',e.jsx("br",{}),`If this property is omitted, the downloadStrategy will be "anchor" if no downloadUrl is provided, or "iframe" if it is. |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"size"})})," | ",e.jsx("code",{children:"number"})," | The numerical size of the file in bytes |"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"inputSettings:"}),`
`]}),`
`,e.jsxs(t.p,{children:[`| Name | Type | Description |
| ---- | ---- | ----------- |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"onFileAdd"})})," | ",e.jsx(t.code,{children:"(addedData: OnFileAddData) => Promise<void>"})," | required - Callback function executed per uploaded file.",e.jsx("br",{}),e.jsx("br",{}),`If an error is thrown in this callback, its message will be displayed for the uploaded item |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"onFileDelete"})})," | ",e.jsx(t.code,{children:"({id: string or number}) => Promise<void>"}),` | required - Callback function executed when the user deletes an uploaded file. |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"limit"})})," | ",e.jsx(t.code,{children:"number"})," | optional - Limits the amount of files users can upload. If not passed users can add as many files as needed. |"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"OnFileAddData:"}),`
`]}),`
`,e.jsxs(t.p,{children:[`| Name | Type | Description |
| ---- | ---- | ----------- |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"file"})})," | ",e.jsx(t.code,{children:"File"}),` | required - File uploaded by the user. |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"onChunkComplete"})})," | ",e.jsx(t.code,{children:"({percent: number}) => Promise<void>"}),` | required - Callback function that allows the file cards to update their progress spinner. The expected percent should be a value between 0 and 1. |
| `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"onUploadComplete"})})," | ",e.jsx(t.code,{children:"(data: UploadData) => Promise<void>"}),` | required - Callback function that allows the component to update the file cards with the newest data |
| ❌ `,e.jsx(t.strong,{children:e.jsx(t.code,{children:"onError"})})," | ",e.jsx(t.code,{children:"(message: string) => Promise<void>"})," | required - Callback function that allows the file cards to update their style and error message.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(t.strong,{children:"DEPRECATED"})," - Throw an error within ",e.jsx(t.code,{children:"onFileAdd"})," callback instead. |"]}),`
`,e.jsx(t.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const onFileAdd = async ({file, onChunkComplete, onUploadComplete, onError}) => {
	for (let i = 0; i < 10; i++) {
		await new Promise(resolve => setTimeout(() =>
			resolve(
				onChunkComplete({percent: (i + 1) * 0.1})
			), 300)
		);
	}

	if (Math.random() < 0.3) {
		await onError("File size exceeded");
		return;
	}

	await onUploadComplete({
		id: nanoid(),
		name: file.name,
		size: \`\${file.size} bytes\`,
		url: Math.random() < 0.7 ? URL.createObjectURL(file) : undefined
	});
};

const onFileDelete = ({id}) => {
	alert("DELETED FILE: " + id);
}

const fields = useMemo(
	() =>
		[
			//...other fields
			{
				//...all generic field props
				type: "upload",
				inputSettings: {
					onFileAdd,
					onFileDelete,
					limit: 2,
				},
			},
			//...other fields
		],
	[]
);
`})})]})}function De(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{De as default};
