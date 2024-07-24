import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as r}from"./index-BbngeWha.js";import{s as a}from"./FormFieldMatrix.stories-CEgVMIF3.js";import"./index-BP8_t0zE.js";import"./iframe-D25dcGiS.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-BfbmhTFo.js";import"./FormFieldText.styled-BH1ITVt0.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-CBllSdZE.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-DosTBnE9.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";import"./Add-DDRv9oNH.js";import"./createSvgIcon-DzRyHCtm.js";import"./styled-BlYH_7wi.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./Create-CT6V4C-f.js";import"./Delete-DMwPTIDr.js";import"./Drawers-Dz-SJSq_.js";import"./storyUtils-ByV2Bsyv.js";import"./useMosaicSettings-BpNQoq4J.js";function e(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
`,t.jsx(n.h2,{id:"matrix",children:"Matrix"}),`
`,t.jsxs(n.p,{children:["This field implements the ",t.jsx(n.a,{href:"#generic-field-props-fielddef",children:t.jsx(n.strong,{children:"FieldDef"})})," interface."]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.code,{children:"Matrix"}),` This component is used to dynamically create content in a data view. Some examples may be creating rows using a form fields or displaying
selected rows from another Data View.`]}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:["Data: ",t.jsx(n.a,{href:"#mosaicobject-type",children:t.jsx(n.code,{children:"MosaicObject[]"})})," - Array of objects containing all data required to popoulate the list"]}),`
`,t.jsx(n.li,{children:"inputSettings:"}),`
`]}),`
`,t.jsxs(n.table,{children:[t.jsx(n.thead,{children:t.jsxs(n.tr,{children:[t.jsx(n.th,{children:"Name"}),t.jsx(n.th,{children:"Type"}),t.jsx(n.th,{children:"Description"})]})}),t.jsxs(n.tbody,{children:[t.jsxs(n.tr,{children:[t.jsx(n.td,{children:t.jsx(n.strong,{children:t.jsx(n.code,{children:"dataView"})})}),t.jsx(n.td,{children:t.jsx(n.code,{children:"DataViewProps"})}),t.jsxs(n.td,{children:["Data view configurations (see ",t.jsx(n.a,{href:"https://simpleviewinc.github.io/sv-mosaic/master/?path=/docs/components-dataview-readme--page#props",rel:"nofollow",children:"DataView props"}),")."]})]}),t.jsxs(n.tr,{children:[t.jsx(n.td,{children:t.jsx(n.strong,{children:t.jsx(n.code,{children:"buttons"})})}),t.jsx(n.td,{children:t.jsx(n.code,{children:"ButtonAttrs[]"})}),t.jsxs(n.td,{children:["List of buttons that will be display above the data view (see ",t.jsx(n.a,{href:"#buttonattrs-type",children:"ButtonAttrs type"}),")."]})]})]})]}),`
`,t.jsx(n.h3,{id:"how-to-use-in-a-form",children:"How to use in a form?"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-ts",children:`import formActions from "@simpleview/sv-mosaic/formActions";

const { dispatch } = useForm();

const listColumns = [
	{
		name: "id",
		label: "ID"
	},
	{
		name: "description",
		label: "Description"
	},
	{
		name: "title",
		label: "Title",
	},
];

const gridConfig: DataViewProps = {
	columns: listColumns,
	primaryActions: [
		{
			name: "edit",
			color: "black",
			variant: "icon",
			mIcon: CreateIcon,
			onClick: function ({ data }) {
				alert(\`EDIT \${data.id}\`);
			}
		},
		{
			name: "delete",
			color: "black",
			variant: "icon",
			mIcon: DeleteIcon,
			onClick: function ({ data }) {
				alert(\`EDIT \${data.id}\`);
			}
		}
	],
	sticky: true,
	data: state.data.formMatrix,
	limit: 25,
	onReorder: async (newRows) => {
		const rows = newRows.map(row => state.data.formMatrix.find(element => element.id === row));

		await dispatch(
			formActions.setFieldValue({
				name: "formMatrix",
				value: rows,
				touched: true
			})
		);
	},
	display: "list",
	activeColumns: ["id", "description", "title"],
};

const addRow = async () => {
	const mappedData = rawData.slice(1, 4).map((data) => {
		// convert the date columns to dates, since they are ISOStrings in the file
		return {
			...data,
			created: data.created ? new Date(data.created) : undefined,
			updated: data.updated ? new Date(data.updated) : undefined
		}
	});

	await dispatch(
		formActions.setFieldValue({
			name: "formMatrix",
			value: mappedData,
			touched: true
		})
	);
};


const fields = useMemo(
	() =>
		[
			//...other fields
			{
				//...all generic field props,
				name: "formMatrix",
				type: "matrix",
				inputSettings: {
						dataView: gridConfig,
						buttons: [
							{
								label: "Add",
								onClick: addRow,
								color: "teal",
								variant: "text",
								mIcon: AddIcon
							},
						] as ButtonProps[]
					},
			},
			//...other fields
		],
	[gridConfig]
);
`})})]})}function kt(i={}){const{wrapper:n}={...o(),...i.components};return n?t.jsx(n,{...i,children:t.jsx(e,{...i})}):e(i)}export{kt as default};
