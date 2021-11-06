/* eslint @typescript-eslint/no-empty-interface: 0 */ // --> OFF

/**
 * According to https://material-ui-pickers.dev/guides/css-overrides#typescript
 * to override styles it is  required to extend default material-ui theme typings
 * with pickers controls. That is why the no-empty-interface
 * linter rule is disabled for this file.
 */

import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from '@root/theme';

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

type CustomType = {
  MuiPickersBasePicker: any;
};

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey extends overridesNameToClassKey {}
  export interface ComponentNameToClassKey extends CustomType {}
}

export const customTheme = createTheme({
	overrides: {
		MuiPaper: {
			elevation8: {
				boxShadow: '0px 1px 5px #1A1A1A29',
			},
		},
		MuiPickersBasePicker: {
			pickerView: {
				justifyContent: 'none',
				minHeight: '390px',
				border: `2px solid ${theme.colors.gray200}`,
			},
		},
		MuiPickersCalendarHeader: {
			switchHeader: {
				color: theme.colors.gray600,
				fontFamily: theme.fontFamily,
				marginBottom: '16px',
				marginTop: '16px',
			},
			dayLabel: {
				textTransform: 'uppercase',
			},
		},
		MuiTypography: {
			body1: {
				fontSize: '14px',
			},
			body2: {
				fontSize: '12px',
			},
		},
		MuiPickersCalendar: {
			transitionContainer: {
				marginTop: '16px',
			},
			week: {
				marginBottom: '24px',
				justifyContent: 'space-around',
				margin: '0 16px 0 16px',
			},
		},
		MuiPickersDay: {
			day: {
				color: theme.colors.almostBlack,
				fontFamily: theme.fontFamily,
				height: '24px',
				width: '24px',
				//marginRight: '22px',
				'&:hover': {
					backgroundColor: theme.colors.blueTealOpacity,
				},
			},
			daySelected: {
				backgroundColor: theme.colors.blueTeal,
				'&:hover': {
					backgroundColor: theme.colors.blueTeal,
				},
			},
			current: {
				color: theme.colors.blueTeal,
			},
		},
		MuiSvgIcon: {
			root: {
				fill: theme.colors.gray600,
			},
		},
	},
});

export const useStyles = makeStyles((_theme) => ({
	searchBarStyle: {
		'& .MuiOutlinedInput-root': {
			'&:hover': {
				backgroundColor: theme.colors.gray200,
			},
			'& fieldset': {
				borderRadius: '0',
				border: `1px solid ${theme.colors.simplyGray}`,
			},
			'&.Mui-focused fieldset': {
				borderColor: theme.colors.almostBlack,
				borderWidth: '2px',
			},
		},
	},
}));
