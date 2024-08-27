import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{useMDXComponents as o}from"./index-3-_tf5dF.js";import{M as r}from"./index-CyjGJ7bP.js";import{s as a}from"./FormFieldMatrix.stories-DfTQUJ0V.js";import"./index-BP8_t0zE.js";import"./iframe-Bgjym2k7.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./extends-CF3RwP-h.js";import"./tslib.es6-CRos2fHm.js";import"./index-DXimoRZY.js";import"./inheritsLoose-CMy1E8oj.js";import"./toString-BjCnz-8e.js";import"./index-DJqTsaQd.js";import"./index-DrFu-skq.js";import"./formUtils-_3vuFM65.js";import"./FormFieldText.styled-D52tBzSN.js";import"./theme-D4oZEIDo.js";import"./Button-hDbntUFq.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-PbTCDhKf.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-w-fPOHP0.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-DtSB7Npb.js";import"./createSvgIcon-C--OfSMv.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-Dj2uKZPX.js";import"./CheckboxList-BJKO_tlZ.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-99gvqvpC.js";import"./FormControlLabel-6w5tMtqL.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-D6sgaW_7.js";import"./ButtonRow-CMyoNa1j.js";import"./Spinner-CkdL5ves.js";import"./Chip-DXGqlxO_.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-cXyE_jQb.js";import"./StyledFormControl.styled-BiBtmbII.js";import"./Toggle-CVDhB75Z.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-Br-7O02j.js";import"./TitleWrapper-pxn7wBs7.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-DHzDrhAG.js";import"./ChevronRight-_vfyNBs1.js";import"./PageHeader-Bx1E2hEF.js";import"./MenuSelect-Cs3ZiiP1.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-C7U_7KSK.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-uNo4FsPQ.js";import"./Close-SaQPltJO.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";import"./Add-DDRv9oNH.js";import"./createSvgIcon-DzRyHCtm.js";import"./styled-BlYH_7wi.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./Create-CT6V4C-f.js";import"./Delete-DMwPTIDr.js";import"./Drawers-BsV2fPEH.js";import"./storyUtils-BoiXCagy.js";import"./useMosaicSettings-BpNQoq4J.js";function e(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
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
