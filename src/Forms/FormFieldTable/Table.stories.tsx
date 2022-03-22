import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import { array, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { TableDef } from './TableTypes';

// Components
import { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';

// Utils
import { useForm } from '../Form/formUtils';
import {
	headers,
	deleteTableRow,
	useTable,
} from '@root/forms/FormFieldTable/tableUtils';

export default {
	title: 'Forms|FormFieldTable',
	decorators: [withKnobs],
};

const onCancel = () => {
	alert('Cancelling form, going back to previous site');
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		'table',
		dispatch
	);

	const disabled = boolean('Disabled', false);
	const headersKnob = array('Headers', headers);
	const helperText = text('Helper text', 'Helper text');
	const label = text('Label', 'Label');
	const instructionText = text('Instruction text', 'Instruction text');
	const required = boolean('Required', false);
	const withMoreActions = boolean('With more actions', false);

	const fields = useMemo(
		() =>
			[
				{
					disabled,
					helperText,
					instructionText,
					inputSettings: {
						handleAddElement: addTableRow,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: withMoreActions && extraActionsTable,
						headers: headersKnob,
					},
					label,
					name: 'table',
					required,
					type: 'table',
				},
			] as FieldDef<TableDef>[],
		[
			addTableRow,
			disabled,
			headersKnob,
			helperText,
			instructionText,
			label,
			required,
			withMoreActions,
		]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				'Form submitted with the following data: ' +
				JSON.stringify(data, null, ' ')
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, '  ')}</pre>
			<Form
				description={text('Description', 'This is a description example')}
				dispatch={dispatch}
				events={events}
				fields={fields}
				onCancel={onCancel}
				onSubmit={onSubmit}
				state={state}
				title={text('Title', 'Form Title')}
			/>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		'table',
		dispatch
	);
	const { addTableRow: withoutHeaders } = useTable(
		state.data,
		'tableWithoutHeaders',
		dispatch
	);

	const fields = useMemo(
		() =>
			[
				{
					disabled: false,
					helperText:
						'The translate and the menu icons are shown to prove that the table can receive multiple actions',
					instructionText: 'Instruction text',
					inputSettings: {
						handleAddElement: addTableRow,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: extraActionsTable,
						headers,
					},
					label: 'Table example with extra actions',
					name: 'table',
					required: false,
					type: 'table',
				},
				{
					disabled: false,
					helperText: 'Default actions are the deletion and edition',
					instructionText: 'Instruction text',
					inputSettings: {
						handleAddElement: withoutHeaders,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: [],
						headers: [],
					},
					label: 'Table without headers and with the default actions',
					name: 'tableWithoutHeaders',
					required: false,
					type: 'table',
				},
				{
					disabled: true,
					helperText: 'Helper text',
					instructionText: 'Instruction text',
					inputSettings: {
						handleAddElement: withoutHeaders,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: [],
						headers,
					},
					label: 'Table disabled',
					name: 'disabled',
					required: false,
					type: 'table',
				},
			] as FieldDef<TableDef>[],
		[addTableRow, withoutHeaders]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				'Form submitted with the following data: ' +
				JSON.stringify(data, null, ' ')
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, '  ')}</pre>
			<Form
				description='Form description'
				dispatch={dispatch}
				events={events}
				fields={fields}
				onCancel={onCancel}
				onSubmit={onSubmit}
				state={state}
				title='Form Title'
			/>
		</>
	);
};
