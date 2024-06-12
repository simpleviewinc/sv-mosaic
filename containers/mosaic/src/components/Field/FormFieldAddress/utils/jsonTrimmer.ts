// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const readFile = (filePath, cb) => {
	fs.readFile(filePath, (err, fileData) => {
		if (err) {
			return cb && cb(err);
		}
		try {
			const data = JSON.parse(fileData);
			return cb && cb(null, data);
		} catch (err) {
			return cb && cb(err);
		}
	});
};

const writeFile = (jsonString) => {
	fs.writeFile("./trimmedCountriesStates.json", jsonString, err => {
		if (err) {
			console.log("Error writing file", err);
		} else {
			console.log("Successfully wrote file");
		}
	});
};

readFile("./countriesStates.json", (err, countriesData) => {
	if (err) {
		console.log(err);
		return;
	}

	const newCountries = countriesData.map((country) => {
		const { name, iso2, states } = country;

		const newStates = states.map((state) => {
			const { name, state_code } = state;
			const stateObj = {
				name,
				code: state_code,
			};

			return stateObj;
		});

		const countryObj = {
			name,
			iso2,
			states: newStates,
		};

		return countryObj;
	});

	const jsonString = JSON.stringify(newCountries);
	writeFile(jsonString);
});

