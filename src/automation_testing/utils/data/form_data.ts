const validatorsData = {
	require: "Required",
	requireError: "This field is required, please fill it",
	validEmail: "test@mail.com",
	invalidEmail: "aaa",
	emailError: "The value is not a valid e-mail",
	validNumber: 123456,
	invalidNumber: "sabs",
	numberError: "The value is not a number",
	validUrl: "www.google.com",
	invalidUrl: "ase232",
	urlError: "The value is not a valid URL",
	invalidDate: "42/32/2201",
	dateError: "Start date should happen before the end date",
	saveValues: "{\n\"required\": \"Required\",\n\"email\": \"test@mail.com\",\n\"number\": \"123456\",\n\"url\": \"www.google.com\",\n\"startDate\": \"2021-09-15T00:00:00.000Z\",\n\"endDate\": \"2022-06-14T00:00:00.000Z\"\n}"
}

export { validatorsData }