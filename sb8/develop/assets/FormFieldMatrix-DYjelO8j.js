import{j as t}from"./jsx-runtime-DKBipoO1.js";import{useMDXComponents as o}from"./index-DIpYW6hh.js";import{M as r}from"./index-DI2zD78O.js";import{s as a}from"./FormFieldMatrix.stories-C47w9rId.js";import"./index-P8U4y8pz.js";import"./iframe-B5H-TOQu.js";import"./index-DEBaATwO.js";import"./index-CFV30bQv.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Form-Da_el1e2.js";import"./theme-BWODkkBA.js";import"./SideNav-xke3DMVF.js";import"./containerQuery-DJgF-qoV.js";import"./useToggle-L-Qovzra.js";import"./ColorSelected-CjDfVzXw.js";import"./index-Codu9OSz.js";import"./debounce-Z6vH9m7G.js";import"./DataViewPrimaryFilter.styled-Er7etcVt.js";import"./generateUtilityClasses-1sHYEbWh.js";import"./createSvgIcon-DFewkeLR.js";import"./createSvgIcon-RC5eQ6Qp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-wVqIivVs.js";import"./useId-BCEQtGZU.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-DD4Xjs9b.js";import"./Chip-BumaKDUo.js";import"./ButtonBase-BdV3oO8q.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-DYaYF2Hb.js";import"./FormFieldText.styled-Ds1XZvsQ.js";import"./Button-BBMCWwxG.js";import"./Popper-Cd5SEDCW.js";import"./useTheme-C71PTKbl.js";import"./formControlState-ESfXU8N_.js";import"./ButtonRow-BY0Hsyx3.js";import"./Spinner-C3Q2NvqZ.js";import"./Typography-CaRYQLjB.js";import"./SubtitleText-7Wc_VQnd.js";import"./CheckboxList-DWbGDBtu.js";import"./Checkbox-Ss222WpW.js";import"./FormControlLabel-Cz3gWlyw.js";import"./getThemeProps-Dw2gS1Bo.js";import"./TitleWrapper-DHX6T7Lf.js";import"./TitleText-DwGMspTF.js";import"./MoreVert-DYAEDIA7.js";import"./ChevronRight-CLpIxDpq.js";import"./PageHeader-6-4PqPeJ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-JvG0jxKp.js";import"./StyledFormControl.styled-CutdFJBO.js";import"./Toggle-B1w3j-dj.js";import"./formats-sBod7wm8.js";import"./Dialog-COZnJfGx.js";import"./useMediaQuery-CFxK-hux.js";import"./Snackbar-fMG10-ub.js";import"./Close-Z8pEHv17.js";import"./ClickAwayListener-6W73t1nN.js";import"./TooltipIcon-Dfxq7uJG.js";import"./Add-lnUrTMVS.js";import"./styled-D3QUOaTt.js";import"./createSvgIcon-C4HEQ44R.js";import"./Create-DJ69M9qa.js";import"./Delete-Cax0v_wN.js";import"./Drawers-CshoXEIe.js";import"./renderButtons-BmHfsf_z.js";import"./useMosaicSettings-aMbqxzzV.js";function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
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
`})})]})}function Dt(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{Dt as default};
