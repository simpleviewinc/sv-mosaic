// Types
import {
	Actions,
	TableDataState,
	TableRow,
	UseTableReturnType,
} from '@root/forms/FormFieldTable';

// Utils
import { actions } from '../Form/formUtils';

// Components
import MenuIcon from '@material-ui/icons/Menu';
import TranslateIcon from '@material-ui/icons/Translate';

/**
 * Rows definition
 */
export const possibleTableRows: TableRow[] = [
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

/**
 * Headers definition
 */
export const headers = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];

/**
 * External delete row callback
 */
export const deleteTableRow = (): void => {
	alert('Delete button clicked');
};

/**
 * Table custom hook.
 * @param dataState field current data state returned by the useForm hook.
 * @param name of the table defined on the fields objects that are pass to the Form component.
 * @param dispatch function returned by the useForm hook.
 * @returns an array of the extra actions that the table could execute, the adding a row function
 * and the edit action.
 */
export const useTable = (
	dataState: TableDataState[],
	name: string,
	dispatch: (action: unknown) => void
): UseTableReturnType => {
	const addTableRow = (): void => {

		const tableDataLength = dataState[name] ? dataState[name].length : 0;

		if (tableDataLength === 0) {
			dispatch(
				actions.setFieldValue({
					name,
					value: [possibleTableRows[0]],
				})
			);
		} else if (tableDataLength >= possibleTableRows.length) {
			alert('There are no more elements to add');
		} else {
			let index;

			for (let i = 0; i < possibleTableRows.length; i++) {
				const element = possibleTableRows[i];
				const isRepeatedRow = dataState[name].includes(element);
				if (!isRepeatedRow) {
					index = i;
					break;
				}
			}

			dispatch(
				actions.setFieldValue({
					name,
					value: [...dataState[name], possibleTableRows[index]],
				})
			);
		}
	};

	const translateAction = (rowIndex: number): void => {
		alert(`Translate row ${rowIndex}`);
	};

	const menuActions = (rowIndex: number): void => {
		alert(`Menu actions for row ${rowIndex}`);
	};

	const editAction = (rowIndex: number): void => {
		alert(`Edit button clicked of row with index ${rowIndex}`);
	};

	const extraActionsTable: Actions[] = [
		{
			label: 'Menu action',
			actionFnc: menuActions,
			icon: MenuIcon,
		},
		{
			label: 'Translate',
			actionFnc: translateAction,
			icon: TranslateIcon,
		},
	];

	return {
		addTableRow,
		editAction,
		extraActionsTable,
	};
};
