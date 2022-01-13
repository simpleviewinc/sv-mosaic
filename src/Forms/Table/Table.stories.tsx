import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Actions, TableRow } from './TableTypes';

// Components
import Field, { FieldDef } from '@root/components/Field';
import Table from './Table';
import MenuIcon from '@material-ui/icons/Menu';
import TranslateIcon from '@material-ui/icons/Translate';
import Form from '../Form/Form';
import { actions, useForm } from '../Form/formUtils';

export default {
	title: 'Forms|Table',
	decorators: [withKnobs],
};

const headers = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
const rows = [
	{
		id: '1',
		items: ['John', 'john@email.com', '01/01/2021', '3231-962-7516'],
	},
	{
		id: '2',
		items: ['Sally', 'sally@email.com', '12/24/2020', '011-962-111'],
	},
	{
		id: '3',
		items: ['Maria', 'maria@email.com', '12/01/2020', '788-962-7516'],
	},
	{
		id: '4',
		items: ['George', 'george@email.com', '01/01/2021', '3231-962-7516'],
	},
	{
		id: '5',
		items: ['Doe', 'doe@email.com', '12/24/2020', '011-962-111'],
	},
	{
		id: '6',
		items: ['Test', 'test@email.com', '12/01/2020', '788-962-7516'],
	},
	{
		id: '7',
		items: ['John', 'john@email.com', '01/01/2021', '3231-962-7516'],
	},
	{
		id: '8',
		items: ['Sally', 'sally@email.com', '12/24/2020', '011-962-111'],
	},
	{
		id: '9',
		items: ['Maria', 'maria@email.com', '12/01/2020', '788-962-7516'],
	},
];

export const Example = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const withMoreActions = boolean('With more actions', false);
	const [tableData, setTableData] = useState([]);

	const editRow = () => {
		alert('EDIT CLICK');
	};

	const addElement = () => {
		setTableData(rows)
		alert('ADD CLICK');
	};

	const onDelete = () => {
		alert('DELETE CLICK');
	};

	const translateAction = (rowIndex: number) => {
		alert(`Translate row ${rowIndex}`);
	}

	const menuActions = (rowIndex: number) => {
		alert(`Menu actions for row ${rowIndex}`);
	}

	const onChange = (rowData: TableRow[]) => {
		setTableData(rowData);
	}

	const actions: Actions[] = [
		{
			label: 'Menu action',
			actionFnc: menuActions,
			icon: MenuIcon
		},
		{
			label: 'Translate',
			actionFnc: translateAction,
			icon: TranslateIcon
		},
	];

	const label = text('Label', 'Label');

	return (
		<Field
			fieldDef={{
				label,
				type: 'table',
				disabled,
				required: boolean('Required', false),
				instructionText: text('Instruction text', 'Instruction text'),
				helperText: text('Helper text', 'Helper text'),
			}}
			error={text('Error text', '')}
		>
			<Table
				fieldDef={{
					label,
					inputSettings: {
						extraActions: withMoreActions && actions,
						handleAddElement: addElement,
						handleEdit: editRow,
						handleDelete: onDelete,
						headers
					},
					disabled,
				}}
				onChange={onChange}
				value={tableData}
			/>
		</Field>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const possibleTableRows = [
		{
			id: '1',
			items: ['John', 'john@email.com', '01/01/2021', '3231-962-7516'],
		},
		{
			id: '2',
			items: ['Sally', 'sally@email.com', '12/24/2020', '011-962-111'],
		},
		{
			id: '3',
			items: ['Maria', 'maria@email.com', '12/01/2020', '788-962-7516'],
		},
		{
			id: '4',
			items: ['George', 'george@email.com', '01/01/2021', '3231-962-7516'],
		},
		{
			id: '5',
			items: ['Doe', 'doe@email.com', '12/24/2020', '011-962-111'],
		},
		{
			id: '6',
			items: ['Test', 'test@email.com', '12/01/2020', '788-962-7516'],
		},
		{
			id: '7',
			items: ['John', 'john@email.com', '01/01/2021', '3231-962-7516'],
		},
		{
			id: '8',
			items: ['Sally', 'sally@email.com', '12/24/2020', '011-962-111'],
		},
		{
			id: '9',
			items: ['Maria', 'maria@email.com', '12/01/2020', '788-962-7516'],
		},
	];

	const addTableRow = useCallback(() => {
		const tableDataLength = state.data['table'] ? state.data['table'].length : 0;
		if (tableDataLength === 0) {
			dispatch(
				actions.setFieldValue({
					name: 'table',
					value: [possibleTableRows[0]]
				})
			);
		} else if (tableDataLength >= possibleTableRows.length) {
			alert('There are no more elements to add');
		} else {
			dispatch(
				actions.setFieldValue({
					name: 'table',
					value: [...state.data['table'], possibleTableRows[tableDataLength]]
				})
			);
		}

	}, [state.data['table']]);

	const editTableRow = () => {
		alert('Edit button clicked');
	};

	const deleteTableRow = () => {
		alert('Delete button clicked');
	};

	const tableHeaders = [];

	const extraActionsTable = [
		{
			label: 'Menu action',
			actionFnc: () => alert('Menu action clicked'),
			icon: MenuIcon
		},
		{
			label: 'Translate',
			actionFnc: () => alert('Translate action clicked'),
			icon: TranslateIcon
		},
	];

	const fields = useMemo(
		() =>
			[
				{
					name: "table",
					label: "Regular example",
					type: "table",
					required,
					disabled,
					inputSettings: {
						disabled,
						handleAddElement: addTableRow,
						handleEdit: editTableRow,
						handleDelete: deleteTableRow,
						extraActions: extraActionsTable,
						headers: tableHeaders,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
			] as unknown as FieldDef[],
		[required, disabled, addTableRow]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};