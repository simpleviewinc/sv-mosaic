export const fullMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getDateFormatted = (date: Date) : string => {
	const dd = String(date.getDate()).padStart(2, "0");
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const yyyy = date.getFullYear();
	const dateFormatted = mm + "/" + dd + "/" + yyyy;
	return dateFormatted;
};

export const getMonthFullName = (date: Date) : string => {
	return fullMonthNames[date.getMonth()];
};

export const getMonthShortName = (date: Date) : string => {
	return shortMonthNames[date.getMonth()];
};

export const getDateFormattedForDatePicker = (date: Date) : string => {
	const dd = String(date.getDate());
	const mm = getMonthShortName(date);
	const yyyy = date.getFullYear();
	return mm + " " + dd + ", " + yyyy;
};

export const getMonthNumber = (month: string) : number => {
	return fullMonthNames.indexOf(month) + 1;
};
