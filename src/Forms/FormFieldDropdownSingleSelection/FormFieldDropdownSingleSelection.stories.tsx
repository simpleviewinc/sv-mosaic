import * as React from "react";
import { ReactElement, useState } from "react";
import { boolean, select, withKnobs, text } from "@storybook/addon-knobs";

import FormFieldDropdownSingleSelection from "./FormFieldDropdownSingleSelection";
import { Sizes } from "../../theme/sizes";



export default {
	title : "Forms|FormFieldDropdownSingleSelection",
	decorators : [withKnobs]
}

export const example = (): ReactElement => {
	// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
	const options = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: 'Pulp Fiction', year: 1994 },
		{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
		{ title: 'The Good, the Bad and the Ugly', year: 1966 },
		{ title: 'Fight Club', year: 1999 },
		{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
		{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
		{ title: 'Forrest Gump', year: 1994 },
		{ title: 'Inception', year: 2010 },
		{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
		{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
		{ title: 'Goodfellas', year: 1990 },
		{ title: 'The Matrix', year: 1999 },
		{ title: 'Seven Samurai', year: 1954 },
		{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
		{ title: 'City of God', year: 2002 },
		{ title: 'Se7en', year: 1995 },
	];

	const [selectedOption, setSelectedOption] = useState('');

	const onChange = (_event, option) => {
		setSelectedOption(option?.title)
	}

	return (
		<FormFieldDropdownSingleSelection
			value={options[0]}
			inputSettings={{options}}
			label={text("Label", "Dropdown label")}
			placeholder={text("Placeholder", "Placeholder example")}
			helperText={text("Helper text", "Helper text example")}
			instructionText={text("Instruction text", "Instruction text example")}
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			disabled={boolean("Disabled", false)}
			required={boolean("Required", false)}
			error={text("Error text", "Error text example")}
		/>
	)
}