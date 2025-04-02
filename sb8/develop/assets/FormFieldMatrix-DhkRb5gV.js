import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{useMDXComponents as o}from"./index-BwDDMXeo.js";import{M as r}from"./index-C-79MPLX.js";import{s as a}from"./FormFieldMatrix.stories-CR5TpTUD.js";import"./index-D0AnReJb.js";import"./iframe-B2Vy0WCg.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Form-DPJ23PVO.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DpopOKxc.js";import"./generateUtilityClasses-BA0DUeUY.js";import"./ButtonBase-C35XO5Ki.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-xe3MJQij.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BAqAQ4su.js";import"./index-BoBd9h2u.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-BbrvVw35.js";import"./createSvgIcon-B3veWrfC.js";import"./createSvgIcon-Bee5RQ5R.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Bypx1B0d.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-D2WocfoV.js";import"./formControlState-BN-vhB5B.js";import"./ButtonRow-C0p2ODeQ.js";import"./Spinner-B9uEl8uj.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-CvmUeamL.js";import"./Checkbox-CoU1FyDt.js";import"./FormControlLabel-CZZVJTgF.js";import"./getThemeProps-BKaUAPTQ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D0yHXGOG.js";import"./StyledFormControl.styled-BkJbr-Di.js";import"./Toggle-VZ0j2DKw.js";import"./formats-sBod7wm8.js";import"./Dialog-DAXtZNzQ.js";import"./ChevronRight-DusQwXTC.js";import"./TitleWrapper-C8ENnIyi.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-DhIkxi0I.js";import"./Close-D1y_W6Pv.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Db3yE7BY.js";import"./PageHeader-B119jF-l.js";import"./Add-BdEFAw4W.js";import"./styled-BtXfWYV8.js";import"./createSvgIcon-DSSqcMxP.js";import"./Create-B9qTGEHU.js";import"./Delete-CHb3iWGI.js";import"./Drawers--5kIc9Vk.js";import"./Drawers.styled-BezXquF1.js";import"./renderButtons-BmHfsf_z.js";import"./commonFieldControl-LQDYMh-C.js";import"./useMosaicSettings-PoFK8XpM.js";function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:a}),`
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
`})})]})}function bt(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(i,{...e})}):i(e)}export{bt as default};
