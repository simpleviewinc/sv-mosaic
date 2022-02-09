import { Options } from './MenuFormFieldCardTypes';

const handleEdit = (): void => {
	alert('Edit clicked');
};

const handleTranslate = (): void => {
	alert('Translate clicked');
};

// Menu options example.
export const menuOptions: Options[] = [
	{
		label: 'Edit',
		action: handleEdit,
	},
	{
		label: 'Translate',
		action: handleTranslate,
	},
];
